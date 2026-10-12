import React from 'react';
import { Modal } from './Modal';
import { GameProject } from '../data/games';
import { PixelGraphic } from './PixelGraphic';
import { Cpu, ShieldCheck, Gamepad, Sparkles, AlertCircle } from 'lucide-react';

interface GameModalProps {
  game: GameProject | null;
  onClose: () => void;
}

export const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
  if (!game) return null;

  return (
    <Modal isOpen={!!game} onClose={onClose} title={game.title} maxWidth="max-w-4xl">
      <div className="space-y-6">
        {/* Hero Graphic Container */}
        <div className="relative aspect-video w-full bg-[#0F172A] border-4 border-[#182536] shadow-[4px_4px_0px_#182536] overflow-hidden">
          <PixelGraphic type={game.artSvg as any} />
          
          <div className="absolute top-4 left-4 bg-[#182536] border-2 border-[#F5C84C] px-3 py-1 text-xs font-pixel text-[#F5C84C] shadow-[2px_2px_0px_#000]">
            STATUS: {game.releaseStatus}
          </div>
        </div>

        {/* Conceptual Disclaimer Banner */}
        <div className="flex items-start gap-3 p-3.5 bg-amber-950/40 border-2 border-[#F5C84C]/50 text-amber-200 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0 text-[#F5C84C] mt-0.5" />
          <div>
            <span className="font-bold">Original Studio Concept:</span> This project is an original gameplay concept developed by PT Indo Kreasi for internal prototyping and publisher pitches. It is currently in design stage and not yet published commercially.
          </div>
        </div>

        {/* Overview & Genre */}
        <div>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 mb-2">
            <span className="font-pixel text-[#79C9F2]">{game.genre}</span>
            <span>•</span>
            <span>Target: {game.platforms.join(', ')}</span>
          </div>
          <p className="text-base text-slate-200 leading-relaxed">
            {game.fullDescription}
          </p>
        </div>

        {/* Narrative / Lore */}
        <div className="p-4 bg-[#182536] border-2 border-slate-700">
          <h4 className="font-pixel text-xs text-[#F5C84C] uppercase tracking-wider mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F5C84C]" />
            World Lore & Narrative Hook
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed italic">
            "{game.storyOverview}"
          </p>
        </div>

        {/* Gameplay Pillars */}
        <div>
          <h4 className="font-pixel text-sm text-[#F7F7F0] mb-3 flex items-center gap-2">
            <Gamepad className="w-4 h-4 text-[#62B34D]" />
            Core Gameplay Pillars
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {game.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 bg-[#182536] border border-slate-700/80 text-xs text-slate-200"
              >
                <span className="font-pixel text-[#62B34D] text-xs">▸</span>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture & Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-slate-700">
          <div>
            <h5 className="font-pixel text-xs text-slate-400 uppercase mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#79C9F2]" />
              Engine & Toolchain
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {game.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-pixel text-xs text-slate-400 uppercase mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#62B34D]" />
              Target Architecture
            </h5>
            <ul className="text-xs text-slate-300 space-y-1">
              <li><strong className="text-slate-400">Scale:</strong> {game.stats.worldSize}</li>
              <li><strong className="text-slate-400">Target:</strong> {game.stats.targetFps}</li>
              <li><strong className="text-slate-400">Multiplayer:</strong> {game.stats.multiplayer}</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};
