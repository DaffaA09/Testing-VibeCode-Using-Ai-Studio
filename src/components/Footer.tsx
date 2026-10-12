import React from 'react';
import { ArrowUp, Github, Twitter, Disc as Discord, Gamepad2, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Our Games', href: '#games' },
    { name: 'Our Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0F172A] border-t-4 border-[#182536] text-[#F7F7F0] relative overflow-hidden">
      {/* Decorative Pixel Step Trim */}
      <div className="h-2 w-full bg-[#182536] flex">
        <div className="w-1/4 bg-[#62B34D]" />
        <div className="w-1/4 bg-[#F5C84C]" />
        <div className="w-1/4 bg-[#79C9F2]" />
        <div className="w-1/4 bg-[#EC4899]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#62B34D] border-2 border-[#182536] shadow-[2px_2px_0px_#F5C84C] flex flex-col justify-between overflow-hidden">
                <div className="h-3 bg-[#62B34D] border-b border-[#285943]" />
                <div className="h-4 bg-[#8B5A36] flex items-center justify-center">
                  <span className="text-[9px] font-pixel text-[#F5C84C]">IK</span>
                </div>
              </div>

              <div>
                <span className="font-pixel text-base text-[#F7F7F0] tracking-wider block">
                  PT INDO KREASI
                </span>
                <span className="text-[10px] font-silkscreen text-[#79C9F2]">
                  Pixel World Game Studio
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Studio independen pembuat semesta voxel dan pixel-art interaktif. Menggabungkan imajinasi tanpa batas, teknologi procedural blok, dan sentuhan visual retro modern.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-[11px] text-slate-400 font-mono">Connect:</span>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#182536] hover:bg-[#62B34D] hover:text-[#182536] border border-slate-700 flex items-center justify-center transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#182536] hover:bg-[#62B34D] hover:text-[#182536] border border-slate-700 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#182536] hover:bg-[#62B34D] hover:text-[#182536] border border-slate-700 flex items-center justify-center transition-colors"
                aria-label="Discord"
              >
                <Discord className="w-4 h-4" />
              </a>
              <a
                href="https://itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-[#182536] hover:bg-[#62B34D] hover:text-[#182536] border border-slate-700 flex items-center justify-center transition-colors"
                aria-label="itch.io"
              >
                <Gamepad2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="font-pixel text-xs text-[#F5C84C] uppercase tracking-wider mb-4">
              NAVIGASI WEBSITE
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-[#62B34D] transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="text-[#62B34D] text-[10px]">▸</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Back to top & Copyright info */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#182536] hover:bg-[#62B34D] text-[#F7F7F0] hover:text-[#182536] border-2 border-slate-700 font-pixel text-xs transition-colors shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>BACK TO TOP</span>
            </button>

            <div className="text-left md:text-right text-xs text-slate-400 space-y-1">
              <div>
                © {currentYear} <strong>PT Indo Kreasi</strong>.
              </div>
              <div className="text-[11px] text-slate-500">
                All rights reserved. Original Voxel Assets.
              </div>
              <div className="text-[10px] text-slate-600 flex items-center md:justify-end gap-1 pt-2">
                <span>Crafted with</span>
                <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
                <span>for Gamers & Builders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
