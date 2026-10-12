import React from 'react';

interface PixelGraphicProps {
  type: 'hero-island' | 'odyssey' | 'survivors' | 'skyhaven' | 'cyberdungeon' | 'studio-diorama' | 'avatar-1' | 'avatar-2' | 'avatar-3' | 'avatar-4' | 'avatar-5' | 'grass-block';
  className?: string;
}

export const PixelGraphic: React.FC<PixelGraphicProps> = ({ type, className = '' }) => {
  if (type === 'hero-island') {
    return (
      <svg
        viewBox="0 0 320 240"
        className={`w-full h-auto pixel-render drop-shadow-[0_20px_25px_rgba(0,0,0,0.5)] ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="crispEdges"
      >
        {/* Floating Clouds behind */}
        <g opacity="0.75">
          <rect x="20" y="30" width="60" height="12" fill="#F7F7F0" />
          <rect x="30" y="24" width="40" height="6" fill="#F7F7F0" />
          <rect x="230" y="50" width="70" height="14" fill="#F7F7F0" />
          <rect x="245" y="42" width="40" height="8" fill="#F7F7F0" />
        </g>

        {/* Small floating mini-rock */}
        <g transform="translate(30, 110)">
          <rect x="0" y="0" width="20" height="6" fill="#62B34D" />
          <rect x="0" y="6" width="20" height="10" fill="#8B5A36" />
          <rect x="4" y="16" width="12" height="6" fill="#583A23" />
          <rect x="8" y="22" width="4" height="4" fill="#3D2818" />
        </g>

        {/* Floating Mini-Island 2 */}
        <g transform="translate(260, 95)">
          <rect x="0" y="0" width="28" height="6" fill="#62B34D" />
          <rect x="0" y="6" width="28" height="12" fill="#8B5A36" />
          <rect x="6" y="18" width="16" height="8" fill="#583A23" />
          {/* Small pine tree */}
          <rect x="12" y="-14" width="4" height="14" fill="#583A23" />
          <rect x="6" y="-26" width="16" height="12" fill="#285943" />
          <rect x="10" y="-32" width="8" height="6" fill="#62B34D" />
        </g>

        {/* Main Floating Island Terrain */}
        {/* Sky Island Bedrock Bottom (Tapering) */}
        <polygon points="110,210 210,210 230,170 90,170" fill="#332216" />
        <polygon points="90,170 230,170 260,140 60,140" fill="#583A23" />
        <rect x="50" y="115" width="220" height="25" fill="#8B5A36" />
        {/* Stone strata veins */}
        <rect x="90" y="125" width="30" height="10" fill="#64748B" />
        <rect x="170" y="120" width="40" height="12" fill="#475569" />
        <rect x="130" y="145" width="35" height="10" fill="#64748B" />
        {/* Gold ore blocks */}
        <rect x="100" y="150" width="10" height="10" fill="#F5C84C" stroke="#B45309" strokeWidth="1" />
        <rect x="195" y="130" width="8" height="8" fill="#F5C84C" stroke="#B45309" strokeWidth="1" />

        {/* Island Grass Layer */}
        <rect x="40" y="105" width="240" height="12" fill="#62B34D" />
        {/* Grass fringes hanging down */}
        <rect x="50" y="117" width="8" height="6" fill="#62B34D" />
        <rect x="80" y="117" width="12" height="8" fill="#62B34D" />
        <rect x="120" y="117" width="10" height="5" fill="#62B34D" />
        <rect x="160" y="117" width="14" height="9" fill="#62B34D" />
        <rect x="210" y="117" width="10" height="6" fill="#62B34D" />
        <rect x="250" y="117" width="12" height="7" fill="#62B34D" />

        {/* Left Voxel Castle Tower */}
        <rect x="70" y="55" width="45" height="50" fill="#64748B" />
        <rect x="74" y="59" width="37" height="42" fill="#94A3B8" />
        {/* Tower Battlements */}
        <rect x="68" y="47" width="11" height="8" fill="#64748B" />
        <rect x="87" y="47" width="11" height="8" fill="#64748B" />
        <rect x="106" y="47" width="11" height="8" fill="#64748B" />
        {/* Tower Door & Window */}
        <rect x="85" y="85" width="14" height="20" fill="#182536" />
        <rect x="87" y="65" width="10" height="10" fill="#F5C84C" />

        {/* Center Indo Kreasi Monument Crystal */}
        <g transform="translate(145, 60)">
          {/* Stone Pedestal */}
          <rect x="-15" y="30" width="30" height="15" fill="#475569" />
          <rect x="-10" y="20" width="20" height="10" fill="#64748B" />
          {/* Floating Voxel Crystal Gem */}
          <polygon points="0,-15 15,5 0,20 -15,5" fill="#F5C84C" />
          <polygon points="0,-15 15,5 0,5" fill="#FDE047" />
          <polygon points="0,5 15,5 0,20" fill="#EAB308" />
          {/* Glow particles */}
          <rect x="-22" y="-5" width="4" height="4" fill="#F5C84C" />
          <rect x="20" y="8" width="4" height="4" fill="#F5C84C" />
          <rect x="-6" y="-22" width="4" height="4" fill="#FDE047" />
        </g>

        {/* Right Grand Voxel Tree */}
        <g transform="translate(200, 35)">
          {/* Trunk */}
          <rect x="15" y="30" width="16" height="40" fill="#583A23" />
          <rect x="20" y="30" width="6" height="40" fill="#8B5A36" />
          {/* Foliage Blocks */}
          <rect x="-10" y="5" width="65" height="28" fill="#285943" />
          <rect x="-2" y="-10" width="50" height="22" fill="#3D8249" />
          <rect x="8" y="-20" width="30" height="16" fill="#62B34D" />
          {/* Highlight leaves */}
          <rect x="12" y="-16" width="8" height="6" fill="#86EFAC" />
          <rect x="26" y="-6" width="8" height="6" fill="#86EFAC" />
        </g>

        {/* Flowers and grass on surface */}
        <rect x="120" y="99" width="4" height="6" fill="#EC4899" />
        <rect x="126" y="97" width="4" height="8" fill="#F5C84C" />
        <rect x="180" y="99" width="4" height="6" fill="#79C9F2" />
        <rect x="186" y="98" width="4" height="7" fill="#EF4444" />
      </svg>
    );
  }

  if (type === 'odyssey') {
    return (
      <svg viewBox="0 0 400 240" className={`w-full h-full object-cover pixel-render ${className}`} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyOdyssey" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#064E3B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        <rect width="400" height="240" fill="url(#skyOdyssey)" />
        {/* Distant floating shrines */}
        <rect x="280" y="40" width="50" height="8" fill="#62B34D" />
        <rect x="290" y="48" width="30" height="16" fill="#78350F" />
        <rect x="295" y="24" width="20" height="16" fill="#F5C84C" />
        {/* Clouds */}
        <rect x="30" y="50" width="100" height="15" fill="#E2E8F0" opacity="0.3" />
        {/* Foreground floating archipelago island */}
        <polygon points="120,240 280,240 320,170 80,170" fill="#451A03" />
        <rect x="60" y="145" width="280" height="25" fill="#78350F" />
        <rect x="50" y="135" width="300" height="12" fill="#62B34D" />
        {/* Ancient Temple Gate (Candi Bentar style in voxels) */}
        <rect x="120" y="60" width="20" height="75" fill="#94A3B8" />
        <rect x="110" y="65" width="10" height="60" fill="#64748B" />
        <rect x="100" y="80" width="10" height="45" fill="#475569" />
        <rect x="122" y="50" width="16" height="10" fill="#F5C84C" />

        <rect x="180" y="60" width="20" height="75" fill="#94A3B8" />
        <rect x="200" y="65" width="10" height="60" fill="#64748B" />
        <rect x="210" y="80" width="10" height="45" fill="#475569" />
        <rect x="182" y="50" width="16" height="10" fill="#F5C84C" />

        {/* Mystical Portal Glow */}
        <rect x="142" y="75" width="36" height="60" fill="#38BDF8" opacity="0.8" />
        <rect x="150" y="85" width="20" height="40" fill="#E0F2FE" />
        {/* Guardian character silhouette */}
        <rect x="240" y="110" width="14" height="25" fill="#F7F7F0" />
        <rect x="242" y="98" width="10" height="12" fill="#F5C84C" />
        <rect x="254" y="105" width="4" height="30" fill="#CBD5E1" />
      </svg>
    );
  }

  if (type === 'survivors') {
    return (
      <svg viewBox="0 0 400 240" className={`w-full h-full object-cover pixel-render ${className}`} xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#1C1917" />
        {/* Blood Moon */}
        <circle cx="330" cy="50" r="30" fill="#DC2626" />
        <circle cx="325" cy="45" r="26" fill="#EF4444" />
        {/* Fortified Wall blocks */}
        <rect x="0" y="140" width="400" height="100" fill="#292524" />
        {/* Stone block textures */}
        <g fill="#44403C">
          <rect x="10" y="150" width="40" height="16" />
          <rect x="60" y="150" width="50" height="16" />
          <rect x="120" y="150" width="40" height="16" />
          <rect x="170" y="150" width="60" height="16" />
          <rect x="240" y="150" width="45" height="16" />
          <rect x="30" y="175" width="50" height="16" />
          <rect x="90" y="175" width="60" height="16" />
          <rect x="160" y="175" width="50" height="16" />
        </g>
        {/* Turret Cannon */}
        <rect x="130" y="110" width="30" height="30" fill="#78716C" />
        <rect x="145" y="100" width="40" height="12" fill="#EAB308" />
        {/* Energy shields / laser beam */}
        <line x1="185" y1="106" x2="380" y2="70" stroke="#F59E0B" strokeWidth="6" strokeDasharray="10 5" />
        {/* Swarm Eyes in the dark */}
        <rect x="320" y="120" width="6" height="4" fill="#EF4444" />
        <rect x="330" y="120" width="6" height="4" fill="#EF4444" />
        <rect x="360" y="115" width="6" height="4" fill="#EF4444" />
        <rect x="370" y="115" width="6" height="4" fill="#EF4444" />
        <rect x="290" y="130" width="6" height="4" fill="#EF4444" />
        <rect x="300" y="130" width="6" height="4" fill="#EF4444" />
      </svg>
    );
  }

  if (type === 'skyhaven') {
    return (
      <svg viewBox="0 0 400 240" className={`w-full h-full object-cover pixel-render ${className}`} xmlns="http://www.w3.org/2000/svg">
        {/* Day pastel sky */}
        <rect width="400" height="240" fill="#7DD3FC" />
        {/* Fluffy clouds */}
        <rect x="20" y="30" width="120" height="25" fill="#F0F9FF" />
        <rect x="40" y="18" width="80" height="15" fill="#F0F9FF" />
        <rect x="240" y="60" width="140" height="30" fill="#F0F9FF" />
        {/* Sky Whale silhouette drifting */}
        <g transform="translate(60, 70)" opacity="0.85">
          <ellipse cx="60" cy="20" rx="45" ry="15" fill="#0284C7" />
          <polygon points="15,20 0,10 0,30" fill="#0284C7" />
          <polygon points="60,5 75,-8 80,5" fill="#38BDF8" />
          {/* Cloud spouting from blowhole */}
          <rect x="75" y="-18" width="10" height="8" fill="#FFFFFF" />
        </g>
        {/* Island with cozy cottage */}
        <polygon points="120,240 280,240 320,180 80,180" fill="#78350F" />
        <rect x="60" y="150" width="280" height="30" fill="#92400E" />
        <rect x="50" y="140" width="300" height="14" fill="#84CC16" />
        {/* Cottage House */}
        <rect x="140" y="90" width="60" height="50" fill="#FEF08A" />
        <polygon points="130,90 170,55 210,90" fill="#B91C1C" />
        <rect x="160" y="115" width="16" height="25" fill="#78350F" />
        <rect x="180" y="100" width="12" height="12" fill="#38BDF8" />
        {/* Windmill blades */}
        <rect x="240" y="80" width="20" height="60" fill="#E2E8F0" />
        <line x1="250" y1="80" x2="220" y2="50" stroke="#64748B" strokeWidth="4" />
        <line x1="250" y1="80" x2="280" y2="50" stroke="#64748B" strokeWidth="4" />
        <line x1="250" y1="80" x2="220" y2="110" stroke="#64748B" strokeWidth="4" />
        <line x1="250" y1="80" x2="280" y2="110" stroke="#64748B" strokeWidth="4" />
      </svg>
    );
  }

  if (type === 'cyberdungeon') {
    return (
      <svg viewBox="0 0 400 240" className={`w-full h-full object-cover pixel-render ${className}`} xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#0B0F19" />
        {/* Cyber Neon Grid */}
        <g stroke="#EC4899" strokeWidth="1" opacity="0.3">
          <line x1="0" y1="160" x2="400" y2="160" />
          <line x1="0" y1="180" x2="400" y2="180" />
          <line x1="0" y1="205" x2="400" y2="205" />
          <line x1="0" y1="235" x2="400" y2="235" />
          <line x1="200" y1="140" x2="0" y2="240" />
          <line x1="200" y1="140" x2="100" y2="240" />
          <line x1="200" y1="140" x2="200" y2="240" />
          <line x1="200" y1="140" x2="300" y2="240" />
          <line x1="200" y1="140" x2="400" y2="240" />
        </g>
        {/* Server Tower Blocks */}
        <rect x="40" y="40" width="50" height="110" fill="#1E293B" stroke="#06B6D4" strokeWidth="2" />
        <rect x="45" y="50" width="40" height="6" fill="#10B981" />
        <rect x="45" y="65" width="40" height="6" fill="#06B6D4" />
        <rect x="45" y="80" width="40" height="6" fill="#EC4899" />
        {/* Rogue Mainframe Core in background */}
        <rect x="290" y="30" width="70" height="120" fill="#1E293B" stroke="#F43F5E" strokeWidth="2" />
        <rect x="310" y="60" width="30" height="30" fill="#F43F5E" />
        {/* Cyberpunk Operative */}
        <rect x="185" y="110" width="18" height="40" fill="#06B6D4" />
        <rect x="187" y="95" width="14" height="15" fill="#FDE047" />
        {/* Laser Katana */}
        <line x1="205" y1="110" x2="235" y2="85" stroke="#EC4899" strokeWidth="4" />
      </svg>
    );
  }

  if (type === 'studio-diorama') {
    return (
      <svg viewBox="0 0 360 220" className={`w-full h-auto pixel-render ${className}`} xmlns="http://www.w3.org/2000/svg">
        <rect width="360" height="220" fill="#182536" />
        {/* Studio Floor tiles */}
        <g fill="#285943" opacity="0.3">
          <rect x="20" y="170" width="320" height="40" fill="#1E293B" />
          <rect x="20" y="165" width="320" height="5" fill="#62B34D" />
        </g>
        {/* Developer Workstation Desk */}
        <rect x="60" y="110" width="110" height="55" fill="#8B5A36" stroke="#182536" strokeWidth="2" />
        {/* Triple Monitors */}
        <rect x="65" y="70" width="32" height="25" fill="#0284C7" stroke="#0F172A" strokeWidth="2" />
        <rect x="100" y="65" width="40" height="30" fill="#62B34D" stroke="#0F172A" strokeWidth="2" />
        <rect x="143" y="70" width="32" height="25" fill="#F5C84C" stroke="#0F172A" strokeWidth="2" />
        {/* Voxel Model Display */}
        <rect x="110" y="73" width="15" height="15" fill="#FFFFFF" />
        {/* Coffee Mug & Keyboard */}
        <rect x="75" y="103" width="8" height="8" fill="#EF4444" />
        <rect x="100" y="104" width="30" height="4" fill="#E2E8F0" />
        {/* Developer Character in chair */}
        <rect x="105" y="115" width="22" height="35" fill="#3B82F6" />
        <rect x="108" y="95" width="16" height="18" fill="#FDE047" />
        {/* Headphones */}
        <rect x="105" y="98" width="5" height="8" fill="#EC4899" />
        <rect x="122" y="98" width="5" height="8" fill="#EC4899" />
        {/* Studio Shelf with Game Trophies & Pixel Merch */}
        <rect x="210" y="60" width="110" height="8" fill="#8B5A36" />
        <rect x="220" y="38" width="18" height="22" fill="#F5C84C" stroke="#B45309" strokeWidth="1" />
        <rect x="250" y="44" width="22" height="16" fill="#62B34D" />
        <rect x="285" y="35" width="24" height="25" fill="#EC4899" />
        {/* Whiteboard with Voxel Architecture Diagram */}
        <rect x="210" y="90" width="110" height="65" fill="#F8FAFC" stroke="#64748B" strokeWidth="3" />
        <line x1="225" y1="110" x2="255" y2="110" stroke="#0284C7" strokeWidth="3" />
        <line x1="255" y1="110" x2="275" y2="130" stroke="#0284C7" strokeWidth="3" />
        <line x1="275" y1="130" x2="305" y2="130" stroke="#62B34D" strokeWidth="3" />
        <rect x="235" y="125" width="15" height="15" fill="#F5C84C" />
      </svg>
    );
  }

  if (type === 'grass-block') {
    return (
      <svg viewBox="0 0 48 48" className={`w-12 h-12 pixel-render ${className}`} xmlns="http://www.w3.org/2000/svg">
        <polygon points="24,2 46,14 24,26 2,14" fill="#62B34D" />
        <polygon points="2,14 24,26 24,46 2,34" fill="#8B5A36" />
        <polygon points="24,26 46,14 46,34 24,46" fill="#583A23" />
        {/* Grass fringe top */}
        <polygon points="2,14 24,26 24,31 2,19" fill="#285943" />
        <polygon points="24,26 46,14 46,19 24,31" fill="#285943" />
      </svg>
    );
  }

  // Generic pixel avatar portrait
  return (
    <div className={`w-20 h-20 bg-[#182536] border-4 border-[#182536] flex items-center justify-center pixel-box text-3xl ${className}`}>
      👾
    </div>
  );
};
