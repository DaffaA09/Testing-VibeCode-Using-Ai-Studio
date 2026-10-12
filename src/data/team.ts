export interface TeamMember {
  id: string;
  name: string;
  role: string;
  discipline: string;
  bio: string;
  favGameGenre: string;
  pixelBadge: string;
  isConceptual: boolean;
  blockColor: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'lead-director',
    name: 'Rama "ForgeMaster" Danendra',
    role: 'Creative Director & Founder',
    discipline: 'Game Direction & Creative Vision',
    bio: 'Dedicated to revitalizing vintage sandbox magic through modern procedural voxel tech and atmospheric Indonesian folklore storytelling.',
    favGameGenre: 'Sandbox RPGs & Voxel Adventures',
    pixelBadge: '👑',
    isConceptual: true,
    blockColor: '#62B34D'
  },
  {
    id: 'lead-art',
    name: 'Siti "PixelBrush" Kusuma',
    role: 'Principal Pixel & Voxel Artist',
    discipline: 'Art Direction & 3D Voxel Rigging',
    bio: 'Master of light, isometric perspectives, and frame-by-frame sprite magic. She sculpts entire floating biomes one voxel at a time.',
    favGameGenre: 'Cozy Farming Sims & Pixel Metroidvanias',
    pixelBadge: '🎨',
    isConceptual: true,
    blockColor: '#EC4899'
  },
  {
    id: 'lead-tech',
    name: 'Arya "ByteCrafter" Pratama',
    role: 'Lead Systems & Engine Architect',
    discipline: 'Gameplay Systems & Physics Engine',
    bio: 'Obsessed with frame times, multi-threaded chunk generators, and building ultra-responsive player controllers with pixel-perfect hitboxes.',
    favGameGenre: 'Roguelike Survival & Base Builders',
    pixelBadge: '⚙️',
    isConceptual: true,
    blockColor: '#79C9F2'
  },
  {
    id: 'lead-audio',
    name: 'Nadia "Chiptune" Larasati',
    role: 'Audio Director & Narrative Designer',
    discipline: 'Chiptune Composition & World Lore',
    bio: 'Weaves rich sonic tapestries blending traditional Gamelan scales with vintage 16-bit FM soundchips and immersive spatial audio.',
    favGameGenre: 'Rhythm Games & Tactical RPGs',
    pixelBadge: '🎵',
    isConceptual: true,
    blockColor: '#F5C84C'
  },
  {
    id: 'lead-qa',
    name: 'Bimo "BugHunter" Wicaksono',
    role: 'Lead QA Engineer & Community Manager',
    discipline: 'Playtesting, Balancing & Player Advocacy',
    bio: 'Breaks blocks, finds collision glitches, and organizes alpha playtests to ensure every release feels rock solid and joyous to play.',
    favGameGenre: 'Multiplayer Party Games & Speedruns',
    pixelBadge: '🛡️',
    isConceptual: true,
    blockColor: '#8B5A36'
  }
];
