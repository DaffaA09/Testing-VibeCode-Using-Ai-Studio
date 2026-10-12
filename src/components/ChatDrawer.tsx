import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, RefreshCw, Cpu, Layers } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatDrawer: React.FC<ChatDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'model',
      text: 'Halo petualang! Selamat datang di Indo Kreasi Game Studio. Aku Budi, Master Voxel Architect di sini. Ada yang bisa kubantu seputar game concept kami, engine voxel, atau rencana kolaborasi?',
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [activeRole, setActiveRole] = useState<'builder' | 'story' | 'producer'>('builder');
  const [selectedModel, setSelectedModel] = useState<string>('gemini-3.5-flash');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [messages, isOpen]);

  const handleRoleChange = (role: 'builder' | 'story' | 'producer') => {
    setActiveRole(role);
    let intro = '';
    if (role === 'builder') {
      intro = 'Aku Budi (Master Builder). Siap diskusi seputar arsitektur engine voxel, chunk streaming, dan mekanik game!';
    } else if (role === 'story') {
      intro = 'Salam! Aku Dewi (Lore Keeper). Mari kita diskusikan lore dunia Nusantara, quest design, dan karakter unik!';
    } else {
      intro = 'Halo rekan bisnis! Aku Rian (Studio Producer). Mari kita bicarakan ruang lingkup layanan dev, timeline, dan potensi kerja sama.';
    }

    setMessages((prev) => [
      ...prev,
      {
        id: `sys-${Date.now()}`,
        role: 'model',
        text: intro,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    setErrorMsg(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, text: m.text })),
          model: selectedModel,
          role: activeRole,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Terjadi gangguan koneksi server.');
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMsg(err.message || 'Gagal memuat respon dari companion.');
      // Add local friendly fallback message so user conversation isn't broken
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-fallback-${Date.now()}`,
          role: 'model',
          text: `[Studio Notice]: ${err.message || 'Koneksi AI sedang beristirahat'}. Silakan periksa kembali beberapa saat lagi atau hubungi kami langsung via kontak studio!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const starterPrompts = [
    'Apa keunggulan teknologi voxel Indo Kreasi?',
    'Ceritakan konsep Nusantara Voxel Odyssey!',
    'Layanan apa saja yang bisa diajak kerja sama?',
    'Bagaimana proses perancangan procedural biomes?',
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#182536]/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg h-full flex flex-col bg-[#1E293B] border-l-4 border-[#182536] shadow-[-8px_0px_0px_#182536]">
        {/* Top Header */}
        <div className="p-4 bg-[#182536] border-b-4 border-[#334155] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#62B34D] border-2 border-[#182536] shadow-[2px_2px_0px_#000] flex items-center justify-center text-lg">
              👾
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-pixel text-xs sm:text-sm text-[#F7F7F0]">
                  PIXEL COMPANION
                </h3>
                <span className="w-2 h-2 rounded-none bg-[#62B34D] animate-pulse inline-block" />
              </div>
              <p className="text-[11px] text-[#F5C84C] font-silkscreen">
                Indo Kreasi Studio AI Guide
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-[#F5C84C] hover:bg-[#334155] border-2 border-transparent hover:border-[#F5C84C] transition-colors"
            aria-label="Tutup Chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role & Model Controls Toolbar */}
        <div className="p-3 bg-[#111827] border-b-2 border-slate-700/80 space-y-2 text-xs">
          {/* Role Persona Tabs */}
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-400 font-silkscreen mb-1.5">
              Pilih Persona NPC:
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => handleRoleChange('builder')}
                className={`py-1.5 px-2 text-center border-2 font-mono text-[11px] transition-colors ${
                  activeRole === 'builder'
                    ? 'bg-[#62B34D] text-[#182536] border-[#182536] font-bold shadow-[2px_2px_0px_#000]'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                🛠️ Builder
              </button>
              <button
                onClick={() => handleRoleChange('story')}
                className={`py-1.5 px-2 text-center border-2 font-mono text-[11px] transition-colors ${
                  activeRole === 'story'
                    ? 'bg-[#79C9F2] text-[#182536] border-[#182536] font-bold shadow-[2px_2px_0px_#000]'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                📜 Lore
              </button>
              <button
                onClick={() => handleRoleChange('producer')}
                className={`py-1.5 px-2 text-center border-2 font-mono text-[11px] transition-colors ${
                  activeRole === 'producer'
                    ? 'bg-[#F5C84C] text-[#182536] border-[#182536] font-bold shadow-[2px_2px_0px_#000]'
                    : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                }`}
              >
                💼 Producer
              </button>
            </div>
          </div>

          {/* Model Affordance Select (gemini-3.1-pro-preview / gemini-3.5-flash / gemini-3.1-flash-lite) */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <span className="text-[10px] text-slate-400 font-silkscreen flex items-center gap-1">
              <Cpu className="w-3 h-3 text-[#F5C84C]" /> Model AI:
            </span>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="bg-slate-800 text-slate-200 border border-slate-700 px-2 py-1 text-xs focus:outline-none focus:border-[#F5C84C]"
            >
              <option value="gemini-3.5-flash">gemini-3.5-flash (General Tasks)</option>
              <option value="gemini-3.1-flash-lite">gemini-3.1-flash-lite (Fast Tasks)</option>
              <option value="gemini-3.1-pro-preview">gemini-3.1-pro-preview (Complex Tasks)</option>
              <option value="gemini-3.8-flash">gemini-3.8-flash (Standard)</option>
            </select>
          </div>
        </div>

        {/* Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'model' && (
                <div className="w-8 h-8 bg-[#62B34D] border-2 border-[#182536] flex items-center justify-center shrink-0 text-sm">
                  🤖
                </div>
              )}

              <div
                className={`max-w-[82%] p-3.5 border-2 text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#285943] text-white border-[#62B34D] shadow-[3px_3px_0px_#182536]'
                    : 'bg-[#182536] text-slate-200 border-slate-700 shadow-[3px_3px_0px_#000]'
                }`}
              >
                <p className="whitespace-pre-wrap">{msg.text}</p>
                <div className="mt-1 text-[10px] text-right opacity-60 font-mono">
                  {msg.timestamp}
                </div>
              </div>

              {msg.role === 'user' && (
                <div className="w-8 h-8 bg-[#F5C84C] border-2 border-[#182536] flex items-center justify-center shrink-0 text-sm">
                  🧑
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 items-center text-xs text-slate-400 p-2">
              <div className="w-8 h-8 bg-[#62B34D]/50 border-2 border-slate-700 flex items-center justify-center animate-spin">
                <RefreshCw className="w-4 h-4 text-[#F5C84C]" />
              </div>
              <span className="font-pixel text-[11px] text-[#F5C84C]">
                Companion sedang merangkai balasan...
              </span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Starters */}
        <div className="px-3 py-2 bg-[#182536]/80 border-t border-slate-800 flex gap-1.5 overflow-x-auto no-scrollbar">
          {starterPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="text-[10px] whitespace-nowrap bg-slate-800 hover:bg-slate-700 text-slate-300 px-2.5 py-1 border border-slate-700 hover:border-[#F5C84C] transition-colors"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#182536] border-t-4 border-[#334155]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Tanyakan konsep game, engine voxel, atau proyek..."
              disabled={isLoading}
              className="flex-1 bg-[#0F172A] border-2 border-slate-700 focus:border-[#62B34D] px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="bg-[#62B34D] hover:bg-[#F5C84C] disabled:bg-slate-700 text-[#182536] disabled:text-slate-500 font-pixel text-xs px-3.5 py-2 border-2 border-[#182536] shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
