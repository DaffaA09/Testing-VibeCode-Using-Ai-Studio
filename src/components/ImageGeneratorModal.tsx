import React, { useState } from 'react';
import { Modal } from './Modal';
import { Sparkles, Download, RefreshCw, Image as ImageIcon, Sliders, Check, Copy } from 'lucide-react';

interface ImageGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImageGeneratorModal: React.FC<ImageGeneratorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [prompt, setPrompt] = useState(
    'A floating voxel island inspired by Indonesian temples with cascading waterfalls, lush tropical jungle, and a golden glowing crystal core'
  );
  const [imageSize, setImageSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [aspectRatio, setAspectRatio] = useState<string>('1:1');
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const presets = [
    {
      label: 'Floating Archipelago',
      prompt: 'Isometric 3D voxel floating archipelago with ancient temple gates, rice terraces, and golden sunbeams',
    },
    {
      label: '16-Bit Cyber Dungeon',
      prompt: 'Cyberpunk voxel mainframe dungeon chamber with neon blue server monoliths and laser katana warrior',
    },
    {
      label: 'Cozy Sky Village',
      prompt: 'Voxel cozy village on clouds with wooden windmill, flower garden, and sky whale swimming through mist',
    },
    {
      label: 'Wayang Voxel Guardian',
      prompt: 'Indonesian mythological Wayang warrior character in blocky voxel diorama, holding an ancient runic chisel',
    },
  ];

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setErrorMsg(null);

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: prompt.trim(),
          imageSize,
          aspectRatio,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate voxel concept art.');
      }

      setGeneratedImageUrl(data.imageUrl);
    } catch (err: any) {
      console.error('Error generating image:', err);
      setErrorMsg(
        err.message || 'Koneksi AI generation belum dapat merespon saat ini. Pastikan konfigurasi API server aktif.'
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="VOXEL CONCEPT ART FORGE" maxWidth="max-w-4xl">
      <div className="space-y-6">
        {/* Intro */}
        <div className="bg-[#182536] p-4 border-2 border-slate-700 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-[#F5C84C] shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-[#F5C84C] font-pixel text-xs">AI World & Asset Generator:</strong> Buat konsep visual voxel, biome pulau terapung, atau aset game 3D blok secara instan menggunakan model <code className="text-[#79C9F2] bg-slate-900 px-1 py-0.5">gemini-3-pro-image-preview</code> dengan resolusi tinggi (1K, 2K, 4K).
          </div>
        </div>

        {/* Form Controls */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-pixel text-slate-300 mb-2">
              PROMPT DESKRIPSI VOXEL:
            </label>
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={3}
                placeholder="Deskripsikan dunia voxel, biome, karakter, atau arsitektur..."
                className="w-full bg-[#0F172A] border-2 border-slate-700 focus:border-[#62B34D] p-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none resize-none"
              />
              <button
                type="button"
                onClick={handleCopy}
                className="absolute bottom-3 right-3 text-slate-400 hover:text-white p-1 bg-slate-800 border border-slate-700 text-[10px] flex items-center gap-1"
                title="Salin Prompt"
              >
                {copiedPrompt ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedPrompt ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>
          </div>

          {/* Quick Presets */}
          <div>
            <div className="text-[11px] text-slate-400 font-silkscreen mb-1.5 uppercase">
              Inspirasi Biome / Preset Cepat:
            </div>
            <div className="flex flex-wrap gap-2">
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setPrompt(preset.prompt)}
                  className="text-xs bg-slate-800 hover:bg-[#285943] hover:text-emerald-300 border border-slate-700 px-2.5 py-1 text-slate-300 transition-colors"
                >
                  ⚡ {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Config Controls (Resolution & Aspect Ratio) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#111827] border-2 border-slate-800">
            {/* Required 1K, 2K, 4K affordance */}
            <div>
              <label className="block text-[11px] font-pixel text-[#F5C84C] mb-2">
                RESOLUSI GAMBAR:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['1K', '2K', '4K'] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setImageSize(size)}
                    className={`py-2 px-3 text-center font-pixel text-xs border-2 transition-all ${
                      imageSize === size
                        ? 'bg-[#F5C84C] text-[#182536] border-[#182536] shadow-[2px_2px_0px_#000]'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Aspect Ratio */}
            <div>
              <label className="block text-[11px] font-pixel text-[#79C9F2] mb-2">
                ASPECT RATIO:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '1:1', label: '1:1 Square' },
                  { id: '16:9', label: '16:9 Wide' },
                  { id: '4:3', label: '4:3 Retro' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setAspectRatio(item.id)}
                    className={`py-2 px-2 text-center text-xs font-mono border-2 transition-all ${
                      aspectRatio === item.id
                        ? 'bg-[#79C9F2] text-[#182536] border-[#182536] font-bold shadow-[2px_2px_0px_#000]'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full py-3.5 px-6 bg-[#62B34D] hover:bg-[#F5C84C] disabled:bg-slate-700 text-[#182536] disabled:text-slate-500 font-pixel text-sm border-4 border-[#182536] shadow-[4px_4px_0px_#182536] active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                <span>FORGING VOXEL WORLD ({imageSize})...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>GENERATE VOXEL ART ({imageSize})</span>
              </>
            )}
          </button>
        </div>

        {/* Error notification */}
        {errorMsg && (
          <div className="p-3 bg-red-950/60 border-2 border-red-500 text-red-200 text-xs">
            {errorMsg}
          </div>
        )}

        {/* Generated Image Result Display */}
        {generatedImageUrl && (
          <div className="space-y-3 pt-4 border-t-2 border-slate-700">
            <div className="flex items-center justify-between">
              <span className="font-pixel text-xs text-[#62B34D]">
                HASIL GENERASI VOXEL [{imageSize}]:
              </span>
              <a
                href={generatedImageUrl}
                download="indokreasi-voxel-concept.png"
                className="flex items-center gap-1.5 px-3 py-1 bg-[#182536] hover:bg-[#62B34D] text-[#F7F7F0] hover:text-[#182536] border-2 border-slate-700 text-xs font-pixel transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>UNDUH</span>
              </a>
            </div>

            <div className="relative w-full aspect-square max-h-[460px] bg-black border-4 border-[#182536] shadow-[6px_6px_0px_#182536] overflow-hidden flex items-center justify-center">
              <img
                src={generatedImageUrl}
                alt="Generated Voxel Concept"
                className="w-full h-full object-contain pixel-render"
              />
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
