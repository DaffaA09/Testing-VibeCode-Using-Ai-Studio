import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Portfolio } from './sections/Portfolio';
import { Team } from './sections/Team';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { ChatDrawer } from './components/ChatDrawer';
import { ImageGeneratorModal } from './components/ImageGeneratorModal';
import { MessageSquare, Sparkles } from 'lucide-react';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isImageGenOpen, setIsImageGenOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#182536] text-[#F7F7F0] flex flex-col selection:bg-[#F5C84C] selection:text-[#182536]">
      {/* Navigation Bar (FR-001) */}
      <Navbar
        onOpenChat={() => setIsChatOpen(true)}
        onOpenImageGen={() => setIsImageGenOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* FR-002: Hero Section */}
        <Hero />

        {/* FR-003: About Us */}
        <About />

        {/* FR-004: Our Services */}
        <Services />

        {/* FR-005: Our Games / Portfolio */}
        <Portfolio />

        {/* FR-006: Our Team */}
        <Team />

        {/* FR-007: Contact Section */}
        <Contact />
      </main>

      {/* FR-008: Footer */}
      <Footer />

      {/* Floating Action Buttons for Interactive Gemini Features */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
        {/* AI Voxel Companion (Gemini Multi-Turn Chat) */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="group relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 bg-[#62B34D] hover:bg-[#F5C84C] text-[#182536] font-pixel text-xs border-3 border-[#182536] shadow-[4px_4px_0px_#182536] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          aria-label="Open AI Voxel Companion"
        >
          <MessageSquare className="w-5 h-5 text-[#182536]" />
          <span className="hidden sm:inline">AI COMPANION</span>
          {/* Subtle pulse badge */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#F5C84C] border border-[#182536] animate-ping" />
        </button>

        {/* Voxel Concept Art Generator (Gemini Image Generation) */}
        <button
          onClick={() => setIsImageGenOpen(true)}
          className="flex items-center gap-2 p-3 sm:px-4 sm:py-3 bg-[#1E293B] hover:bg-[#8B5A36] text-[#F5C84C] hover:text-white font-pixel text-xs border-3 border-[#182536] shadow-[4px_4px_0px_#182536] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          aria-label="Open Voxel Asset Forge"
        >
          <Sparkles className="w-5 h-5 text-[#F5C84C]" />
          <span className="hidden sm:inline">ASSET FORGE</span>
        </button>
      </div>

      {/* Gemini Chat Multi-Turn Dialog / Drawer */}
      <ChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Gemini Image Generation Modal */}
      <ImageGeneratorModal
        isOpen={isImageGenOpen}
        onClose={() => setIsImageGenOpen(false)}
      />
    </div>
  );
}
