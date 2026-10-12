import React, { useState } from 'react';
import { PixelGraphic } from '../components/PixelGraphic';
import { Sparkles, Gamepad2, Users, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  const [blockClicks, setBlockClicks] = useState(0);
  const [blockBouncing, setBlockBouncing] = useState(false);

  const handleBlockClick = () => {
    setBlockClicks((prev) => prev + 1);
    setBlockBouncing(true);
    setTimeout(() => setBlockBouncing(false), 300);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-[#182536] via-[#1E293B] to-[#182536] voxel-grid-bg"
    >
      {/* Decorative Floating Clouds */}
      <div className="absolute top-16 left-0 right-0 pointer-events-none overflow-hidden h-36 opacity-30 select-none">
        <div className="absolute top-4 w-48 h-10 bg-[#F7F7F0] border-2 border-slate-700 animate-cloud-slow" />
        <div className="absolute top-14 w-64 h-12 bg-[#F7F7F0] border-2 border-slate-700 animate-cloud-medium" style={{ animationDelay: '-12s' }} />
        <div className="absolute top-24 w-40 h-8 bg-[#F7F7F0] border-2 border-slate-700 animate-cloud-fast" style={{ animationDelay: '-6s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Message & Call to Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#285943] border-2 border-[#62B34D] shadow-[3px_3px_0px_#182536]">
              <span className="w-2.5 h-2.5 bg-[#F5C84C] animate-pulse inline-block" />
              <span className="text-[11px] sm:text-xs font-pixel text-[#F7F7F0] tracking-wider uppercase">
                INDEPENDENT GAME DEVELOPMENT STUDIO
              </span>
            </div>

            {/* Main Heading (FR-002 exact text) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-pixel text-[#F7F7F0] tracking-wide leading-tight drop-shadow-[3px_3px_0px_#182536]">
              WE BUILD WORLDS. <br className="hidden sm:block" />
              <span className="text-[#F5C84C]">YOU CREATE THE STORIES.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              PT Indo Kreasi merancang pengalaman game voxel dan pixel-art orisinal dengan kedalaman mekanik sandbox, visual blok artistik, serta dongeng eksplorasi yang tak terlupakan.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary CTA (FR-002 exact text) */}
              <button
                onClick={() => scrollToSection('games')}
                className="w-full sm:w-auto px-6 py-4 bg-[#62B34D] hover:bg-[#F5C84C] text-[#182536] font-pixel text-xs sm:text-sm tracking-wider border-4 border-[#182536] shadow-[5px_5px_0px_#182536] hover:-translate-y-1 active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <Gamepad2 className="w-5 h-5 text-[#182536]" />
                <span>EXPLORE OUR GAMES</span>
              </button>

              {/* Secondary CTA (FR-002 exact text) */}
              <button
                onClick={() => scrollToSection('about')}
                className="w-full sm:w-auto px-6 py-4 bg-[#1E293B] hover:bg-slate-700 text-[#F7F7F0] hover:text-[#F5C84C] font-pixel text-xs sm:text-sm tracking-wider border-4 border-[#182536] shadow-[5px_5px_0px_#182536] hover:-translate-y-1 active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                <Compass className="w-5 h-5 text-[#79C9F2]" />
                <span>MEET THE STUDIO</span>
              </button>
            </div>

            {/* Studio Metrics Highlights */}
            <div className="pt-6 border-t-2 border-slate-700/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="p-3 bg-[#182536] border-2 border-slate-700 text-center">
                <div className="text-lg sm:text-xl font-pixel text-[#F5C84C]">100%</div>
                <div className="text-[10px] text-slate-400 font-silkscreen uppercase mt-1">Original IP</div>
              </div>
              <div className="p-3 bg-[#182536] border-2 border-slate-700 text-center">
                <div className="text-lg sm:text-xl font-pixel text-[#62B34D]">4+</div>
                <div className="text-[10px] text-slate-400 font-silkscreen uppercase mt-1">Game Concepts</div>
              </div>
              <div className="p-3 bg-[#182536] border-2 border-slate-700 text-center">
                <div className="text-lg sm:text-xl font-pixel text-[#79C9F2]">Voxel</div>
                <div className="text-[10px] text-slate-400 font-silkscreen uppercase mt-1">Procedural Tech</div>
              </div>
            </div>
          </div>

          {/* Right Column: Original Pixel Art Floating Island Diorama */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main Pixel Island */}
              <div className="p-2 bg-[#182536]/80 border-4 border-[#182536] shadow-[10px_10px_0px_#182536] transition-transform duration-300 hover:scale-[1.02]">
                <PixelGraphic type="hero-island" />
              </div>

              {/* Interactive Voxel Block Click Widget */}
              <div
                onClick={handleBlockClick}
                className={`absolute -bottom-6 -right-2 sm:-right-6 bg-[#182536] border-4 border-[#F5C84C] p-3 shadow-[4px_4px_0px_#000] cursor-pointer select-none transition-transform ${
                  blockBouncing ? 'scale-110 -translate-y-2' : 'hover:-translate-y-1'
                }`}
                title="Klik blok untuk menambang poin!"
              >
                <div className="flex items-center gap-3">
                  <PixelGraphic type="grass-block" className="w-8 h-8" />
                  <div>
                    <div className="text-[10px] font-pixel text-[#F5C84C]">
                      MINE A BLOCK
                    </div>
                    <div className="text-[9px] font-mono text-slate-300">
                      Blocks Mined: <span className="text-[#62B34D] font-bold">{blockClicks}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
