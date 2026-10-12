import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { PixelGraphic } from '../components/PixelGraphic';
import { Lightbulb, Rocket, Users, Award, Shield, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      title: 'Creativity',
      subtitle: 'Imajinasi Tanpa Batas',
      description: 'Kami percaya setiap blok menyimpan potensi cerita baru. Dunia voxel kami dibangun dari perpaduan estetika retro dengan fantasi nusantara yang kaya.',
      color: '#62B34D',
      icon: Lightbulb,
    },
    {
      title: 'Innovation',
      subtitle: 'Teknologi Voxel Modern',
      description: 'Menerapkan algoritma chunk streaming efisien, deformasi terrain dinamis, dan pencahayaan voxel real-time untuk performa optimal di berbagai platform.',
      color: '#79C9F2',
      icon: Rocket,
    },
    {
      title: 'Collaboration',
      subtitle: 'Tumbuh Bersama Komunitas',
      description: 'Kami bekerja sama secara terbuka dengan publisher, mitra industri, dan komunitas gamer. Setiap masukan pemain adalah bahan bakar penyempurnaan kami.',
      color: '#F5C84C',
      icon: Users,
    },
    {
      title: 'Quality',
      subtitle: 'Dedikasi Tanpa Kompromi',
      description: 'Fokus pada gameplay loop yang responsif, 60+ FPS yang stabil, bebas bug kritis, dan polesan audio chiptune yang membekas di hati pemain.',
      color: '#EC4899',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#182536] relative border-t-4 border-[#285943]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="STUDIO IDENTITY"
          title="BEHIND THE BLOCKS"
          subtitle="Mengenal dedikasi PT Indo Kreasi dalam menghidupkan semesta game pixel-art yang orisinal, imajinatif, dan mendalam."
        />

        {/* Narrative & Studio Diorama */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-xl sm:text-2xl font-pixel text-[#F5C84C] leading-snug">
              KAMI MEMBANGUN SEMESTA DARI SATU SATUAN BLOK.
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed">
              <strong>PT Indo Kreasi</strong> lahir dari kecintaan mendalam terhadap game sandbox dan era keemasan grafis pixel 16-bit. Kami melihat bahwa dunia berbasis blok bukan sekadar tren visual, melainkan medium ekspresi tanpa batas di mana pemain dapat mengeksplorasi, membangun, dan bertahan hidup.
            </p>

            <p className="text-slate-300 text-base leading-relaxed">
              Sebagai studio pengembang game independen di Indonesia, kami menggabungkan keindahan arsitektur nusantara—seperti candi megah, terasering zamrud, dan lautan pulau terapung—ke dalam mekanik game modern yang seru dimainkan di PC, konsol, maupun platform mobile.
            </p>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-[#1E293B] border-3 border-[#182536] shadow-[4px_4px_0px_#62B34D]">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-5 h-5 text-[#62B34D]" />
                  <h4 className="font-pixel text-xs text-[#62B34D] uppercase">Visi Studio</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Menjadi studio game terdepan yang mendefinisikan standar baru genre voxel dan pixel-art dengan kekayaan budaya dan narasi berdaya saing global.
                </p>
              </div>

              <div className="p-4 bg-[#1E293B] border-3 border-[#182536] shadow-[4px_4px_0px_#F5C84C]">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-[#F5C84C]" />
                  <h4 className="font-pixel text-xs text-[#F5C84C] uppercase">Misi Studio</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Menciptakan gameplay yang adiktif, mengasah teknologi engine blok orisinal, serta membuka kesempatan kolaborasi lintas industri yang bermakna.
                </p>
              </div>
            </div>
          </div>

          {/* Studio Pixel Art Illustration */}
          <div className="lg:col-span-5">
            <div className="bg-[#1E293B] p-3 border-4 border-[#182536] shadow-[8px_8px_0px_#182536]">
              <PixelGraphic type="studio-diorama" />
              <div className="mt-3 p-2 bg-[#182536] border border-slate-700 text-center">
                <span className="text-[11px] font-pixel text-[#79C9F2]">
                  INDO KREASI DEV LAB — JAKARTA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values Grid */}
        <div>
          <div className="text-center mb-8">
            <span className="text-xs font-pixel text-[#F5C84C] uppercase tracking-widest">
              NILAI-NILAI UTAMA STUDIO
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-[#1E293B] p-6 border-4 border-[#182536] shadow-[6px_6px_0px_#182536] hover:-translate-y-1 hover:shadow-[8px_8px_0px_#F5C84C] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="w-12 h-12 mb-4 border-2 border-[#182536] shadow-[3px_3px_0px_#000] flex items-center justify-center text-white"
                      style={{ backgroundColor: val.color }}
                    >
                      <Icon className="w-6 h-6 text-[#182536]" />
                    </div>

                    <h4 className="font-pixel text-sm text-[#F7F7F0] mb-1">
                      {val.title}
                    </h4>
                    <div className="text-xs font-silkscreen text-[#F5C84C] mb-3">
                      {val.subtitle}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {val.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>CORE VALUE</span>
                    <span style={{ color: val.color }}>● ACTIVE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
