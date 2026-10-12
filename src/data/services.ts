export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  tools: string[];
  blockColor: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'game-development',
    title: 'Game Development',
    tagline: 'End-to-End Game Engineering & Architecture',
    description: 'We build responsive, robust gameplay systems across modern engines. From custom chunk streaming algorithms to cross-platform mobile and desktop builds, our code ensures silky-smooth frame rates and modular architecture.',
    iconName: 'Gamepad2',
    deliverables: [
      'Custom Voxel & Tile Engine Architecture',
      'Cross-Platform Deployment (PC, Console, Mobile)',
      'Multiplayer Networking & Co-op Systems',
      'Optimization, Profiling & Frame Rate Polish'
    ],
    tools: ['Unity', 'Godot 4', 'Unreal Engine 5', 'C#', 'C++'],
    blockColor: '#62B34D'
  },
  {
    id: 'game-design',
    title: 'Game Design & Balancing',
    tagline: 'Systems, Gameplay Loops & Level Architecture',
    description: 'A great game starts with addictive core loops and intuitive mechanics. We design player progression, economy balances, procedural level rules, and combat systems that keep players coming back for one more turn.',
    iconName: 'Compass',
    deliverables: [
      'Comprehensive Game Design Documents (GDD)',
      'Core Loop & Economy Balancing Models',
      'Voxel Biome Generation Rules & Level Design',
      'Combat Mechanics & Skill Progression Trees'
    ],
    tools: ['Machinations.io', 'Miro', 'Notion GDD Suites', 'Figma Wireframing'],
    blockColor: '#F5C84C'
  },
  {
    id: 'game-art-assets',
    title: 'Game Art & 3D Voxel Assets',
    tagline: 'Bespoke Pixel Sprites & Voxel Dioramas',
    description: 'We bring imaginative worlds to life with handcrafted pixel-art sprites, modular voxel models, seamless textures, and dynamic frame-by-frame animations designed with authentic retro love and modern visual flair.',
    iconName: 'Palette',
    deliverables: [
      'Character Sprite Sheets & 3D Voxel Rigging',
      'Modular Tilesets, Props & Environmental Biomes',
      'Pixel UI/HUD Systems & Retro Typography',
      'Custom VFX, Shaders & Block Particle Systems'
    ],
    tools: ['Aseprite', 'MagicaVoxel', 'Blender', 'Photoshop', 'PyxelEdit'],
    blockColor: '#79C9F2'
  },
  {
    id: 'interactive-experiences',
    title: 'Interactive Experiences',
    tagline: 'Gamified Brand Worlds & Digital Sandboxes',
    description: 'Extend your brand or creative vision into vibrant 3D voxel spaces. We create interactive virtual headquarters, educational sandbox simulations, playable showcases, and bespoke web-based gamified applications.',
    iconName: 'Sparkles',
    deliverables: [
      'Virtual Brand Showrooms in Voxel Realms',
      'Educational Gamified Simulators & Quests',
      'Web-Based Interactive 3D Canvas Demos',
      'Custom Mini-Games for Events & Marketing'
    ],
    tools: ['Three.js', 'WebGL', 'React / TypeScript', 'WebAssembly'],
    blockColor: '#EC4899'
  }
];
