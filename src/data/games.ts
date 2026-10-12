export interface GameProject {
  id: string;
  title: string;
  genre: string;
  category: 'rpg' | 'sandbox' | 'roguelike' | 'strategy';
  platforms: string[];
  releaseStatus: string;
  isConcept: boolean;
  shortDescription: string;
  fullDescription: string;
  storyOverview: string;
  keyFeatures: string[];
  techStack: string[];
  stats: {
    worldSize: string;
    targetFps: string;
    multiplayer: string;
  };
  visualTheme: {
    accentColor: string;
    bgGradient: string;
  };
  artSvg: string; // Original SVG pixel art identifier or representation
}

export const GAME_PROJECTS: GameProject[] = [
  {
    id: 'nusantara-voxel-odyssey',
    title: 'Nusantara Voxel Odyssey',
    genre: 'Action RPG / Exploration',
    category: 'rpg',
    platforms: ['PC (Steam)', 'Nintendo Switch'],
    releaseStatus: 'In Active Concept Prototyping',
    isConcept: true,
    shortDescription: 'An expansive voxel action RPG set in a floating archipelago steeped in mythical Indonesian folklore and ancient temple dungeons.',
    fullDescription: 'Nusantara Voxel Odyssey invites players into an enchanting celestial archipelago where floating islands drift among golden clouds. Players awaken as an apprentice Wayang guardian wielding an ancient chisel that can reshape block terrain, carve runic stone portals, and defend sacred shrines against corrupted shadow beasts.',
    storyOverview: 'Long ago, the celestial loom broke, fracturing the realms into scattered voxel sky-islands. Legend speaks of the Seven Sacred Runestones that once unified the realm. You must journey across volcanic floating peaks, emerald rice terraced plateaus, and mangrove clouds to restore harmony.',
    keyFeatures: [
      'Deformable and destructible voxel architecture with realistic physics',
      'Original mythical creatures including Garuda sky-mounts and Naga serpent bosses',
      'Dynamic day/night cycle that alters shadow monsters and mystical plant blooming',
      'Deep crafting system blending blacksmithing, herbal elixir brewing, and rune inscription'
    ],
    techStack: ['Custom Voxel Engine', 'Unity URP', 'MagicaVoxel', 'FMOD Spatial Audio'],
    stats: {
      worldSize: 'Infinite Chunk Streaming',
      targetFps: '60 FPS on Handheld / 120 FPS PC',
      multiplayer: '1-4 Players Online Co-op'
    },
    visualTheme: {
      accentColor: '#62B34D',
      bgGradient: 'from-emerald-950/60 to-slate-900'
    },
    artSvg: 'odyssey'
  },
  {
    id: 'blockbound-survivors',
    title: 'BlockBound Survivors',
    genre: 'Roguelike / Base Defense',
    category: 'roguelike',
    platforms: ['PC (Steam)', 'Steam Deck', 'iOS / Android'],
    releaseStatus: 'Vertical Slice Concept',
    isConcept: true,
    shortDescription: 'Survive unrelenting nightly swarms by scavenging pixel blocks by day and engineering modular defensive fortresses.',
    fullDescription: 'Every morning brings 10 minutes of daylight to forage wood, mine iron ores, cultivate automated food hydroponics, and reinforce your citadel walls. When the blood-moon rises, terrifying voxel fiends assault your fortress. Experiment with trap combos, turret conduits, and elemental trenches.',
    storyOverview: 'A cataclysmic subterranean core overload shattered surface civilization into pixelated fragments. As commander of the last mobile terra-crawler, your crew must excavate precious raw minerals and keep the protective hearth furnace burning against endless cold nightmares.',
    keyFeatures: [
      'Rapid grid-based construction with snap-and-fortify block mechanics',
      'Over 80 unique defense gadgets: spike rollers, shock coils, and magma moats',
      'Procedurally generated underground caverns with rare crystal veins',
      'Daily survival leaderboards and permadeath roguelike challenge modifiers'
    ],
    techStack: ['Godot Engine 4', 'Aseprite Pixel Suite', 'C# Systems Architecture'],
    stats: {
      worldSize: '1024x1024 Grid per Sector',
      targetFps: '144 FPS Lock',
      multiplayer: 'Singleplayer & Dual Co-op'
    },
    visualTheme: {
      accentColor: '#F5C84C',
      bgGradient: 'from-amber-950/60 to-slate-900'
    },
    artSvg: 'survivors'
  },
  {
    id: 'skyhaven-builders',
    title: 'SkyHaven Builders',
    genre: 'Sandbox / Cozy Simulation',
    category: 'sandbox',
    platforms: ['PC (Steam)', 'PlayStation 5', 'Xbox Series X/S'],
    releaseStatus: 'Pre-Production Design',
    isConcept: true,
    shortDescription: 'A peaceful, relaxing community sandbox where you design aerial villages, domesticate cloud-whales, and trade with traveling merchants.',
    fullDescription: 'Designed for pure creative freedom and tranquil vibes, SkyHaven Builders strips away combat pressure and invites players into a painterly voxel sandbox. Connect floating islands with rope suspension bridges, cultivate rare bioluminescent gardens, cook traditional delicacies, and host lantern festivals under starry night skies.',
    storyOverview: 'Leaving the hustle of industrial spires behind, your guild found an uncharted sanctuary above the storm clouds. Together with charming voxel villagers, you establish a self-sustaining haven where every brick, window, and garden path reflects your imagination.',
    keyFeatures: [
      'Voxel precision tools: micro-block sculpting, curved roof tiles, and glass mosaics',
      'Autonomous NPC villagers with daily routines, craft shops, and friendly banter',
      'Wholesome farming with seasonal tropical flora, spice groves, and cloud honey',
      'Full Steam Workshop integration planned for player-made blueprints'
    ],
    techStack: ['Unreal Engine 5 (Voxel Plugin)', 'Blender', 'Wwise Dynamic Audio'],
    stats: {
      worldSize: 'Unlimited Creative Horizon',
      targetFps: '60 FPS Ultra / Ray Tracing',
      multiplayer: 'Up to 16 Players Sandbox'
    },
    visualTheme: {
      accentColor: '#79C9F2',
      bgGradient: 'from-sky-950/60 to-slate-900'
    },
    artSvg: 'skyhaven'
  },
  {
    id: 'cyberdungeon-16bit',
    title: 'CyberDungeon 16-Bit',
    genre: 'Dungeon Crawler / Turn-Based Tactics',
    category: 'strategy',
    platforms: ['PC (Steam)', 'Nintendo Switch'],
    releaseStatus: 'Early Prototype',
    isConcept: true,
    shortDescription: 'Tactical grid combat meets neon cyberpunk aesthetics in a procedurally assembled underground mainframe labyrinth.',
    fullDescription: 'In a dystopian metropolis buried under layers of forgotten server hardware, rogue AI nodes have corrupted the physical substructure into lethal labyrinth chambers. Command a squad of three cyber-hackers—a Nanite Brawler, a Beam Weaver, and an Encryption Splicer—to decrypt mainframe cores before security wipes the sector.',
    storyOverview: 'You are the ghost operator orchestrating the Resistance from an old CRT terminal. Dive deep through 30 subterranean mainframe sectors, salvage legendary RAM chipsets, and dismantle corporate guardian titans.',
    keyFeatures: [
      'Tactical turn-based positioning on vibrant neon-lit grid arenas',
      'Over 120 cyber-augments, chip combos, and overclock abilities',
      'Original 16-bit chiptune synthesizer soundtrack with authentic FM synthesis',
      'New Game+ with corrupted glitch-room anomalies and speedrun timers'
    ],
    techStack: ['Custom Monogame C# Core', 'PyxelEdit Pixel Art', 'Famitracker Chiptunes'],
    stats: {
      worldSize: '150 Handcrafted Room Modules',
      targetFps: '60 FPS Crisp Pixel Sync',
      multiplayer: 'Singleplayer Campaign'
    },
    visualTheme: {
      accentColor: '#EC4899',
      bgGradient: 'from-fuchsia-950/60 to-slate-900'
    },
    artSvg: 'cyberdungeon'
  }
];
