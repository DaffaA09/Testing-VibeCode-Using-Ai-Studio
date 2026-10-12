import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

// Helper to initialize GoogleGenAI safely
function getGenAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Multi-turn chat endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { messages, model = 'gemini-3.5-flash', role = 'builder' } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const ai = getGenAIClient();
    if (!ai) {
      return res.status(503).json({
        error: 'Gemini API Key is not configured on the server.',
      });
    }

    // Role-specific system instructions for Indo Kreasi Game Studio
    let systemInstruction = `You are a virtual game development companion and studio representative for PT Indo Kreasi (Pixel World). PT Indo Kreasi is an independent Indonesian game development studio known for original voxel, block-based, and pixel-art game worlds. Your tone is warm, inspiring, creative, and gamer-friendly with subtle retro/pixel charm. Speak in the user's language (Indonesian or English).`;

    if (role === 'builder') {
      systemInstruction += ` Your role is "Budi the Master Builder", lead voxel architect and systems designer. You excel at explaining voxel engines, procedural generation, block physics, gameplay balancing, and technical pipeline craft.`;
    } else if (role === 'story') {
      systemInstruction += ` Your role is "Dewi the Lore Keeper", lead narrative director. You excel at creative worldbuilding, fantasy/Nusantara folklore-inspired lore, quest designs, atmospheric dialogue, and character concepts for pixel worlds.`;
    } else if (role === 'producer') {
      systemInstruction += ` Your role is "Rian the Studio Producer", production coordinator. You help potential clients, publishers, and partners understand Indo Kreasi's services (Full Game Dev, Art & Asset outsourcing, Voxel design), timeline scoping, and collaboration proposals.`;
    }

    // Validate requested model (defaulting to gemini-3.5-flash, gemini-3.1-pro-preview for complex, or gemini-3.1-flash-lite)
    const validModels = [
      'gemini-3.5-flash',
      'gemini-3.1-pro-preview',
      'gemini-3.1-flash-lite',
      'gemini-3.8-flash',
    ];
    const targetModel = validModels.includes(model) ? model : 'gemini-3.5-flash';

    // Format conversation history
    const contents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === 'model' || m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

    const response = await ai.models.generateContent({
      model: targetModel,
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || 'No response generated from the studio companion.';
    return res.json({ reply, model: targetModel });
  } catch (error: any) {
    console.error('Error in /api/chat:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to communicate with Gemini assistant.',
    });
  }
});

// Image generation endpoint
app.post('/api/generate-image', async (req: Request, res: Response) => {
  try {
    const { prompt, imageSize = '1K', aspectRatio = '1:1' } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'A text prompt is required.' });
    }

    const ai = getGenAIClient();
    if (!ai) {
      return res.status(503).json({
        error: 'Gemini API Key is not configured on the server.',
      });
    }

    // Validate size ('1K', '2K', '4K')
    const size = ['1K', '2K', '4K'].includes(imageSize) ? imageSize : '1K';
    const validAspectRatios = ['1:1', '3:4', '4:3', '9:16', '16:9'];
    const aspect = validAspectRatios.includes(aspectRatio) ? aspectRatio : '1:1';

    // Ensure prompt captures pixel/voxel aesthetic of Indo Kreasi if not specified
    const enrichedPrompt = `Original voxel pixel art style, high quality 3D block diorama, isometric view: ${prompt}`;

    let response: any;
    try {
      // Primary model requested by feature block: gemini-3-pro-image-preview
      response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: enrichedPrompt }],
        },
        config: {
          imageConfig: {
            imageSize: size as '1K' | '2K' | '4K',
            aspectRatio: aspect,
          },
        },
      });
    } catch (primaryErr: any) {
      console.warn('Primary model gemini-3-pro-image-preview failed, attempting fallback:', primaryErr?.message);
      // Fallback to gemini-nano-banana-2.1 or gemini-3.1-flash-lite-image
      try {
        response = await ai.models.generateContent({
          model: 'gemini-nano-banana-2.1',
          contents: {
            parts: [{ text: enrichedPrompt }],
          },
          config: {
            imageConfig: {
              imageSize: size as '1K' | '2K' | '4K',
              aspectRatio: aspect,
            },
          },
        });
      } catch (nanoErr: any) {
        // Last fallback to flash-lite-image
        response = await ai.models.generateContent({
          model: 'gemini-3.1-flash-lite-image',
          contents: {
            parts: [{ text: enrichedPrompt }],
          },
        });
      }
    }

    let imageUrl = '';
    if (response?.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData?.data) {
          const mime = part.inlineData.mimeType || 'image/png';
          imageUrl = `data:${mime};base64,${part.inlineData.data}`;
          break;
        }
      }
    }

    if (!imageUrl) {
      return res.status(500).json({ error: 'No image was generated in the response.' });
    }

    return res.json({
      imageUrl,
      prompt,
      imageSize: size,
      aspectRatio: aspect,
    });
  } catch (error: any) {
    console.error('Error in /api/generate-image:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to generate concept image.',
    });
  }
});

// Setup dev server with Vite middleware or static serving
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

startServer();
