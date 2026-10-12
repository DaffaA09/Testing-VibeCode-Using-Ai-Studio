import React from 'react';
import { GameProject } from '../data/games';
import { PixelGraphic } from './PixelGraphic';
import { Eye, Monitor, Layers } from 'lucide-react';

interface GameCardProps {
  game: GameProject;
  onSelect: (game: GameProject) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onSelect }) => {
  return (
    <article className="group flex flex-col bg-[#1E293B] border-4 border-[#182536] shadow-[6px_6px_0px_#182536] hover:shadow-[8px_8px_0px_#62B34D] hover:-translate-y-1 transition-all duration-150 overflow-hidden">
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full bg-[#0F172A] overflow-hidden border-b-4 border-[#182536]">
        <PixelGraphic type={game.artSvg as any} className="transition-transform duration-300 group-hover:scale-105" />
        
        {/* Concept Badge (Clear labeling as requested in PRD) */}
        <div className="absolute top-3 left-3 bg-[#182536] border-2 border-[#F5C84C] px-2.5 py-1 text-[10px] font-pixel text-[#F5C84C] shadow-[2px_2px_0px_#182536]">
          CONCEPT PROJECT
        </div>

        {/* Category Label */}
        <div className="absolute bottom-3 right-3 bg-[#182536]/90 border border-slate-700 px-2 py-0.5 text-xs font-semibold text-slate-300">
          {game.genre}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-pixel text-[#F7F7F0] group-hover:text-[#F5C84C] transition-colors mb-2.5">
            {game.title}
          </h3>

          <p className="text-sm text-slate-300 line-clamp-3 mb-4 leading-relaxed">
            {game.shortDescription}
          </p>
        </div>

        <div className="pt-3 border-t-2 border-slate-700/60 flex flex-col gap-3">
          {/* Metadata Platforms */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Monitor className="w-3.5 h-3.5 text-[#79C9F2]" />
            <span className="truncate">{game.platforms.join(' · ')}</span>
          </div>

          {/* Action Button */}
          <button
            onClick={() => onSelect(game)}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#62B34D] hover:bg-[#F5C84C] text-[#182536] font-pixel text-xs tracking-wide border-2 border-[#182536] shadow-[3px_3px_0px_#182536] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span>VIEW DETAILS</span>
          </button>
        </div>
      </div>
    </article>
  );
};
