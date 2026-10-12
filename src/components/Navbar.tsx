import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Sparkles, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
  onOpenImageGen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat, onOpenImageGen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Games', href: '#games' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'services', 'games', 'team', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 84;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#182536]/95 backdrop-blur-md border-b-4 border-[#182536] shadow-[0_6px_0px_rgba(0,0,0,0.3)] py-2.5'
          : 'bg-[#182536] border-b-4 border-[#285943] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C84C]"
          >
            {/* Pixel Grass Block Logo */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 bg-[#62B34D] border-3 border-[#182536] shadow-[2px_2px_0px_#F5C84C] group-hover:scale-105 transition-transform flex flex-col justify-between overflow-hidden">
              <div className="h-3.5 bg-[#62B34D] border-b-2 border-[#285943]" />
              <div className="h-5 bg-[#8B5A36] flex items-center justify-center">
                <span className="text-[10px] font-pixel text-[#F5C84C]">IK</span>
              </div>
            </div>

            <div>
              <span className="font-pixel text-sm sm:text-base text-[#F7F7F0] tracking-wider group-hover:text-[#F5C84C] transition-colors">
                INDO KREASI
              </span>
              <span className="hidden sm:block text-[9px] font-silkscreen text-[#79C9F2] uppercase tracking-widest">
                Pixel World Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-pixel tracking-wider transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#F5C84C]'
                      : 'text-slate-300 hover:text-[#F7F7F0]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-[-4px] left-0 right-0 h-1 bg-[#F5C84C]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions (Interactive Features + CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* AI Companion Quick Button */}
            <button
              onClick={onOpenChat}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] hover:bg-[#285943] text-xs font-mono text-slate-200 border-2 border-slate-700 hover:border-[#62B34D] shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-colors"
              title="Open Virtual Game Guide Chatbot"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#62B34D]" />
              <span className="hidden md:inline">AI Companion</span>
            </button>

            {/* Voxel Asset Generator Quick Button */}
            <button
              onClick={onOpenImageGen}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1E293B] hover:bg-[#8B5A36] text-xs font-mono text-slate-200 border-2 border-slate-700 hover:border-[#F5C84C] shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-colors"
              title="Generate 3D Voxel Concept Art"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F5C84C]" />
              <span className="hidden md:inline">Asset Forge</span>
            </button>

            {/* Let's Collaborate Primary CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-2 px-4 py-2 bg-[#62B34D] hover:bg-[#F5C84C] text-[#182536] font-pixel text-xs border-2 border-[#182536] shadow-[3px_3px_0px_#182536] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <span>LET'S COLLABORATE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenChat}
              className="p-2 bg-[#1E293B] text-[#62B34D] border-2 border-slate-700"
              aria-label="Open AI Companion"
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-[#1E293B] text-[#F7F7F0] hover:text-[#F5C84C] border-2 border-[#182536] shadow-[2px_2px_0px_#000]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#182536] border-b-4 border-[#62B34D] p-5 shadow-2xl animate-fade-in">
          <div className="flex flex-col gap-3 mb-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-2 px-3 text-sm font-pixel border-2 transition-colors ${
                    isActive
                      ? 'bg-[#285943] text-[#F5C84C] border-[#62B34D]'
                      : 'bg-[#1E293B] text-slate-200 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenChat();
              }}
              className="flex items-center justify-center gap-1.5 p-2.5 bg-[#1E293B] border-2 border-slate-700 text-xs font-mono text-[#62B34D]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>AI Guide</span>
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenImageGen();
              }}
              className="flex items-center justify-center gap-1.5 p-2.5 bg-[#1E293B] border-2 border-slate-700 text-xs font-mono text-[#F5C84C]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Asset Forge</span>
            </button>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full py-3 bg-[#62B34D] text-[#182536] font-pixel text-xs text-center border-2 border-[#182536] shadow-[3px_3px_0px_#182536] flex items-center justify-center gap-2"
          >
            <span>LET'S COLLABORATE</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
