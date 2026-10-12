import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { SERVICES_DATA, ServiceItem } from '../data/services';
import { Gamepad2, Compass, Palette, Sparkles, CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Gamepad2':
        return <Gamepad2 className="w-6 h-6 text-[#182536]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#182536]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#182536]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#182536]" />;
      default:
        return <Gamepad2 className="w-6 h-6 text-[#182536]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#111827] relative border-t-4 border-[#182536]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="CAPABILITIES & PIPELINE"
          title="WHAT WE CRAFT"
          subtitle="Dari konsep desain awal hingga deployment lintas platform, kami menyediakan layanan pengembangan game profesional berbasis pixel dan voxel."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service: ServiceItem, idx: number) => {
            return (
              <div
                key={service.id}
                className="bg-[#1E293B] border-4 border-[#182536] shadow-[6px_6px_0px_#182536] hover:shadow-[8px_8px_0px_#F5C84C] hover:-translate-y-1 transition-all duration-150 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Step Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 border-3 border-[#182536] shadow-[3px_3px_0px_#000] flex items-center justify-center"
                      style={{ backgroundColor: service.blockColor }}
                    >
                      {getIcon(service.iconName)}
                    </div>

                    <span className="font-pixel text-xs text-slate-500">
                      0{idx + 1} // SERVICE
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-pixel text-base sm:text-lg text-[#F7F7F0] mb-1">
                    {service.title}
                  </h3>
                  <div className="text-xs font-silkscreen text-[#F5C84C] mb-4">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-pixel text-slate-400 uppercase tracking-wider mb-2">
                      Key Deliverables:
                    </div>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: service.blockColor }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Toolchain Badges */}
                <div className="pt-4 border-t-2 border-slate-700/70 flex flex-wrap items-center justify-between gap-3">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">
                    Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 bg-slate-900 border border-slate-700 text-slate-300 font-mono text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Project Callout */}
        <div className="mt-14 p-6 sm:p-8 bg-[#182536] border-4 border-[#62B34D] shadow-[6px_6px_0px_#182536] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-pixel text-sm sm:text-base text-[#F5C84C] mb-1">
              PUNYA PROYEK GAME ATAU KONSEP DUNIA SENDIRI?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Diskusikan rancangan GDD, visual art style, atau prototipe game Anda bersama tim teknis kami.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-6 py-3 bg-[#62B34D] hover:bg-[#F5C84C] text-[#182536] font-pixel text-xs border-2 border-[#182536] shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-colors text-center"
          >
            KONSULTASIKAN PROYEK
          </a>
        </div>
      </div>
    </section>
  );
};
