import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { TEAM_MEMBERS, TeamMember } from '../data/team';
import { Gamepad2, Info } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#111827] relative border-t-4 border-[#182536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="CREATIVE COLLECTIVE"
          title="THE MINDS BEHIND THE WORLDS"
          subtitle="Para perancang, teknisi engine, dan seniman piksel yang berdedikasi membangun semesta interaktif PT Indo Kreasi."
        />

        {/* Conceptual Note Banner (Adherence to PRD FR-006) */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 bg-[#182536] border-2 border-slate-700 flex items-center gap-3 text-xs text-slate-300">
          <Info className="w-4 h-4 text-[#79C9F2] shrink-0" />
          <span>
            <strong>Profil Konseptual:</strong> Struktur tim di bawah ini merepresentasikan peran kepemimpinan dan divisi inti studio kami. Kami senantiasa membuka peluang kolaborasi bagi talenta game developer di Indonesia.
          </span>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member: TeamMember) => {
            return (
              <div
                key={member.id}
                className="bg-[#1E293B] border-4 border-[#182536] shadow-[5px_5px_0px_#182536] hover:shadow-[7px_7px_0px_#62B34D] hover:-translate-y-1 transition-all duration-150 p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Avatar & Badge Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-16 h-16 border-3 border-[#182536] shadow-[3px_3px_0px_#000] flex items-center justify-center text-3xl shrink-0"
                      style={{ backgroundColor: member.blockColor }}
                    >
                      {member.pixelBadge}
                    </div>

                    <div>
                      <h3 className="font-pixel text-sm text-[#F7F7F0]">
                        {member.name}
                      </h3>
                      <div className="text-xs font-silkscreen text-[#F5C84C] mt-0.5">
                        {member.role}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {member.discipline}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                {/* Footer Favorite Genre */}
                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5 font-mono">
                    <Gamepad2 className="w-3.5 h-3.5 text-[#79C9F2]" />
                    {member.favGameGenre}
                  </span>
                  <span className="text-[9px] font-pixel text-slate-500 bg-slate-900 px-1.5 py-0.5 border border-slate-800">
                    CORE ROLE
                  </span>
                </div>
              </div>
            );
          })}

          {/* Join The Studio Card */}
          <div className="bg-[#182536] border-4 border-dashed border-[#62B34D] p-6 flex flex-col justify-between text-center items-center">
            <div className="w-16 h-16 bg-[#285943] border-3 border-[#62B34D] flex items-center justify-center text-3xl mb-4 shadow-[3px_3px_0px_#000]">
              ✨
            </div>

            <div className="space-y-2">
              <h3 className="font-pixel text-sm text-[#F5C84C]">
                BERGABUNG DENGAN KAMI
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Apakah Anda seorang Pixel Artist, Unity/Godot Engineer, atau Sound Designer? Kami selalu mencari rekan kreatif untuk membangun dunia baru.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-4 px-4 py-2.5 bg-[#62B34D] hover:bg-[#F5C84C] text-[#182536] font-pixel text-xs border-2 border-[#182536] shadow-[2px_2px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-colors"
            >
              KIRIM PORTOFOLIO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
