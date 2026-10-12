import React from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl mb-12 ${alignmentClass}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-[#F5C84C] inline-block shadow-[2px_2px_0px_#182536]" />
          <span className="text-xs font-bold tracking-widest uppercase font-silkscreen text-[#F5C84C]">
            {eyebrow}
          </span>
          <span className="w-2.5 h-2.5 bg-[#F5C84C] inline-block shadow-[2px_2px_0px_#182536]" />
        </div>
      )}
      
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-pixel tracking-wide leading-tight mb-4 ${
          light ? 'text-[#182536]' : 'text-[#F7F7F0]'
        }`}
      >
        {title}
      </h2>

      {/* Decorative Pixel Step Bar */}
      <div
        className={`flex items-center gap-1.5 mb-5 ${
          align === 'center' ? 'justify-center' : 'justify-start'
        }`}
      >
        <div className="h-2 w-8 bg-[#62B34D] border border-[#182536]" />
        <div className="h-2 w-16 bg-[#F5C84C] border border-[#182536]" />
        <div className="h-2 w-6 bg-[#79C9F2] border border-[#182536]" />
      </div>

      {subtitle && (
        <p
          className={`text-base sm:text-lg font-normal leading-relaxed ${
            light ? 'text-[#182536]/80' : 'text-[#F7F7F0]/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
