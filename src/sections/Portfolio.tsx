import React, { useState } from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { GameCard } from '../components/GameCard';
import { GameModal } from '../components/GameModal';
import { GAME_PROJECTS, GameProject } from '../data/games';
import { Filter } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGame, setSelectedGame] = useState<GameProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'rpg', label: 'Action RPG' },
    { id: 'roguelike', label: 'Roguelike' },
    { id: 'sandbox', label: 'Sandbox Sim' },
    { id: 'strategy', label: 'Turn-Based Tactics' },
  ];

  const filteredGames =
    selectedCategory === 'all'
      ? GAME_PROJECTS
      : GAME_PROJECTS.filter((g) => g.category === selectedCategory);

  return (
    <section id="games" className="py-24 bg-[#182536] relative border-t-4 border-[#285943]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="GAME SHOWCASE"
          title="WORLDS WE'VE CREATED"
          subtitle="Jelajahi portofolio konsep game orisinal PT Indo Kreasi. Setiap judul menawarkan ekosistem blok, mekanik inovatif, dan cerita imajinatif."
        />

        {/* Category Filter Tabs (Interactive Segmented Buttons per Frontend Design constitution) */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-[#1E293B] border-3 border-[#182536] shadow-[4px_4px_0px_#182536]">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-pixel whitespace-nowrap transition-all border-2 ${
                  selectedCategory === cat.id
                    ? 'bg-[#62B34D] text-[#182536] border-[#182536] font-bold shadow-[2px_2px_0px_#000]'
                    : 'bg-transparent text-slate-300 border-transparent hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} onSelect={setSelectedGame} />
          ))}
        </div>

        {/* Game Detail Modal */}
        <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
      </div>
    </section>
  );
};
