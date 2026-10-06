export type NationalDivision =
  | 'U16 National Team Pool'
  | 'U18 National Team Pool'
  | 'U23 National Team Pool';

export type PlayerGender = 'Men' | 'Women';

export type OfficialDivisionBadge =
  | "U16 Men's National Pool"
  | "U16 Women's National Pool"
  | "U18 Men's National Pool"
  | "U18 Women's National Pool"
  | "U23 Men's National Pool"
  | "U23 Women's National Pool";

export type NationalSquadTier =
  | 'National Provisional Squad'
  | 'Active Scouting Pool'
  | 'Elite Junior Development Roster'
  | 'National Youth Games Candidate';

export interface PlayerStats {
  fibaRankingPoints: number;
  ppg: number;              // 3x3 Points Per Game
  twoPointAccuracy: string; // 2-Point Arc %
  onePointAccuracy: string; // 1-Point Paint / Free Throw %
  drivesPerGame: number;
  efficiencyRating: number;
}

export interface PlayerProfile {
  id: string;
  name: string;
  hometown: string;               // Hometown/City in Ethiopia
  gender: PlayerGender;
  division: NationalDivision;     // strictly U16, U18, or U23 National Team Pool
  divisionBadge: OfficialDivisionBadge;
  position: string;
  jerseyNumber: string;
  height: string;
  wingspan: string;
  age: number;
  nationalRanking: number;        // Official national ranking in age/gender tier
  squadTier: NationalSquadTier;   // Official national junior/youth squad tier
  pathwayFocus: string;           // Official national competition / event target
  fibaProfileUrl: string;
  verifiedFiba: boolean;
  avatarColor: string;
  scoutingEvaluation: string;
  keyStrengths: string[];
  stats: PlayerStats;
}

export const PLAYER_PROFILES: PlayerProfile[] = [
  // ==========================================
  // U16 NATIONAL TEAM POOL (MEN)
  // ==========================================
  {
    id: 'eth-u16m-01',
    name: 'Dawit Kebede',
    hometown: 'Addis Ababa',
    gender: 'Men',
    division: 'U16 National Team Pool',
    divisionBadge: "U16 Men's National Pool",
    position: 'Lead Playmaker / Guard',
    jerseyNumber: '#4',
    height: "1.82 m (6'0\")",
    wingspan: '1.87 m',
    age: 15,
    nationalRanking: 1,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 U16 Youth Development Invitational & Regional Qualifiers',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-orange-500 to-amber-600',
    scoutingEvaluation:
      'High-velocity ballhandler with exceptional peripheral court vision. Executes seamlessly under 12-second pressure with quick pick-and-roll reads and lockdown on-ball perimeter harassment.',
    keyStrengths: ['12s Shot-Clock IQ', 'Crossover Penetration', 'Court Vision', 'On-Ball Defense'],
    stats: {
      fibaRankingPoints: 940,
      ppg: 6.8,
      twoPointAccuracy: '39%',
      onePointAccuracy: '74%',
      drivesPerGame: 5.4,
      efficiencyRating: 14.8,
    },
  },
  {
    id: 'eth-u16m-02',
    name: 'Robel Tesfaye',
    hometown: 'Hawassa',
    gender: 'Men',
    division: 'U16 National Team Pool',
    divisionBadge: "U16 Men's National Pool",
    position: 'Two-Way Wing',
    jerseyNumber: '#9',
    height: "1.89 m (6'2\")",
    wingspan: '1.95 m',
    age: 15,
    nationalRanking: 2,
    squadTier: 'Active Scouting Pool',
    pathwayFocus: 'National Junior Tour Qualifiers & FIBA 3x3 Youth Camps',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-amber-500 to-orange-700',
    scoutingEvaluation:
      'Lengthy wing athlete who flourishes in transition. Lethal corner 2-point shooting threat with aggressive closeout defense against opposing primary scorers.',
    keyStrengths: ['Perimeter 2-Ball Shooting', 'Lengthy Switchability', 'Off-Ball Cuts', 'Active Hands'],
    stats: {
      fibaRankingPoints: 890,
      ppg: 6.2,
      twoPointAccuracy: '42%',
      onePointAccuracy: '68%',
      drivesPerGame: 4.6,
      efficiencyRating: 13.5,
    },
  },
  {
    id: 'eth-u16m-03',
    name: 'Natnael Amanuel',
    hometown: 'Jimma',
    gender: 'Men',
    division: 'U16 National Team Pool',
    divisionBadge: "U16 Men's National Pool",
    position: 'Interior Anchor / Forward',
    jerseyNumber: '#14',
    height: "1.96 m (6'5\")",
    wingspan: '2.03 m',
    age: 16,
    nationalRanking: 3,
    squadTier: 'Elite Junior Development Roster',
    pathwayFocus: 'FIBA 3x3 U16 Youth Development Invitational & Regional Qualifiers',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-orange-600 to-yellow-600',
    scoutingEvaluation:
      'Dominant rim protector and offensive rebounder. Sets physical, bruising screens that generate open 2-point looks for teammates while maintaining high motor in the paint.',
    keyStrengths: ['Rim Protection', 'Screen Setting', 'Offensive Putbacks', 'Defensive Rebounding'],
    stats: {
      fibaRankingPoints: 830,
      ppg: 5.5,
      twoPointAccuracy: '28%',
      onePointAccuracy: '78%',
      drivesPerGame: 3.2,
      efficiencyRating: 15.2,
    },
  },

  // ==========================================
  // U16 NATIONAL TEAM POOL (WOMEN)
  // ==========================================
  {
    id: 'eth-u16w-01',
    name: 'Bethlehem Girma',
    hometown: 'Bishoftu',
    gender: 'Women',
    division: 'U16 National Team Pool',
    divisionBadge: "U16 Women's National Pool",
    position: 'Point Guard / Floor General',
    jerseyNumber: '#3',
    height: "1.72 m (5'8\")",
    wingspan: '1.76 m',
    age: 15,
    nationalRanking: 1,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 U16 Africa Development Pathway & Her Court Elite Pool',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-pink-500 to-rose-600',
    scoutingEvaluation:
      'Quick first step and relentless motor. Directs offensive traffic effortlessly, orchestrating rapid half-court ball movement and punishing drop coverage with floaters.',
    keyStrengths: ['First Step Acceleration', 'Mid-Range Floaters', 'Passing Accuracy', 'Defensive Anticipation'],
    stats: {
      fibaRankingPoints: 910,
      ppg: 6.4,
      twoPointAccuracy: '38%',
      onePointAccuracy: '79%',
      drivesPerGame: 5.8,
      efficiencyRating: 14.2,
    },
  },
  {
    id: 'eth-u16w-02',
    name: 'Martha Daniel',
    hometown: 'Bahir Dar',
    gender: 'Women',
    division: 'U16 National Team Pool',
    divisionBadge: "U16 Women's National Pool",
    position: 'Sharpshooter / Wing',
    jerseyNumber: '#7',
    height: "1.78 m (5'10\")",
    wingspan: '1.82 m',
    age: 15,
    nationalRanking: 2,
    squadTier: 'Active Scouting Pool',
    pathwayFocus: 'National Junior Tour Qualifiers & FIBA 3x3 Youth Camps',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-rose-500 to-orange-500',
    scoutingEvaluation:
      'Pure catch-and-shoot stroke behind the 2-point arc. Moves intelligently without the ball into open passing pockets; lethal weapon in late-shot-clock resets.',
    keyStrengths: ['2-Point Arc Precision', 'Catch & Shoot Mechanics', 'Transition Spacing', 'Free-Throw Reliability'],
    stats: {
      fibaRankingPoints: 880,
      ppg: 6.9,
      twoPointAccuracy: '44%',
      onePointAccuracy: '82%',
      drivesPerGame: 3.5,
      efficiencyRating: 13.9,
    },
  },
  {
    id: 'eth-u16w-03',
    name: 'Senait Worku',
    hometown: 'Addis Ababa',
    gender: 'Women',
    division: 'U16 National Team Pool',
    divisionBadge: "U16 Women's National Pool",
    position: 'Versatile Forward / Big',
    jerseyNumber: '#13',
    height: "1.86 m (6'1\")",
    wingspan: '1.92 m',
    age: 16,
    nationalRanking: 3,
    squadTier: 'Elite Junior Development Roster',
    pathwayFocus: 'FIBA 3x3 U16 Africa Development Pathway & Her Court Elite Pool',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-purple-500 to-pink-600',
    scoutingEvaluation:
      'Strong physical presence under the rim with soft finishing touch around the basket. Controls second-chance opportunities with disciplined box-outs.',
    keyStrengths: ['Paint Protection', 'Post Defense', 'High-Low Passing', 'Rebound Positioning'],
    stats: {
      fibaRankingPoints: 840,
      ppg: 5.3,
      twoPointAccuracy: '29%',
      onePointAccuracy: '71%',
      drivesPerGame: 3.8,
      efficiencyRating: 14.6,
    },
  },

  // ==========================================
  // U18 NATIONAL TEAM POOL (MEN)
  // ==========================================
  {
    id: 'eth-u18m-01',
    name: 'Brook Solomon',
    hometown: 'Addis Ababa',
    gender: 'Men',
    division: 'U18 National Team Pool',
    divisionBadge: "U18 Men's National Pool",
    position: 'Primary Playmaker / Guard',
    jerseyNumber: '#7',
    height: "1.87 m (6'1\")",
    wingspan: '1.93 m',
    age: 18,
    nationalRanking: 1,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 U18 Africa Cup Pool Selection & Quest Qualifiers',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-brand-orange to-yellow-500',
    scoutingEvaluation:
      'Master of pace control. Creates separation against elite physical defenders with tight handles and high-arching stepback 2-pointers. Team captain demeanor with vocal defensive leadership.',
    keyStrengths: ['Step-Back 2-Pointers', 'Decisive Playmaking', '1-on-1 Isolation', 'Clutch Scoring'],
    stats: {
      fibaRankingPoints: 1350,
      ppg: 7.6,
      twoPointAccuracy: '41%',
      onePointAccuracy: '81%',
      drivesPerGame: 6.2,
      efficiencyRating: 16.9,
    },
  },
  {
    id: 'eth-u18m-02',
    name: 'Eyob Haile',
    hometown: 'Dire Dawa',
    gender: 'Men',
    division: 'U18 National Team Pool',
    divisionBadge: "U18 Men's National Pool",
    position: 'Two-Way Perimeter Slasher',
    jerseyNumber: '#10',
    height: "1.92 m (6'3\")",
    wingspan: '2.00 m',
    age: 17,
    nationalRanking: 2,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 U18 Africa Cup Pool Selection & Quest Qualifiers',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-amber-600 to-red-600',
    scoutingEvaluation:
      'Explosive downhill attacker capable of absorbing contact at the rim. Guards positions 1 through 4 effectively due to elite lateral quickness and wingspan.',
    keyStrengths: ['Downhill Rim Pressure', 'Multi-Position Defense', 'Fastbreak Finishing', 'Offensive Rebounds'],
    stats: {
      fibaRankingPoints: 1280,
      ppg: 7.1,
      twoPointAccuracy: '36%',
      onePointAccuracy: '76%',
      drivesPerGame: 6.8,
      efficiencyRating: 15.8,
    },
  },
  {
    id: 'eth-u18m-03',
    name: 'Yafet Mekonnen',
    hometown: 'Harar',
    gender: 'Men',
    division: 'U18 National Team Pool',
    divisionBadge: "U18 Men's National Pool",
    position: 'Stretch Forward / Big',
    jerseyNumber: '#15',
    height: "1.98 m (6'6\")",
    wingspan: '2.06 m',
    age: 17,
    nationalRanking: 3,
    squadTier: 'Active Scouting Pool',
    pathwayFocus: 'National Junior Tour Qualifiers & Elite Academy Recruitment',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-orange-600 to-amber-700',
    scoutingEvaluation:
      'Rare combination of rim protection and perimeter shooting capability. Pops out to the 2-point arc on screens with high release point, forcing big men out of the paint.',
    keyStrengths: ['Pick-and-Pop 2s', 'Vertical Rim Protection', 'Defensive Rebounding', 'Screen Quality'],
    stats: {
      fibaRankingPoints: 1190,
      ppg: 6.2,
      twoPointAccuracy: '39%',
      onePointAccuracy: '73%',
      drivesPerGame: 3.9,
      efficiencyRating: 15.4,
    },
  },

  // ==========================================
  // U18 NATIONAL TEAM POOL (WOMEN)
  // ==========================================
  {
    id: 'eth-u18w-01',
    name: 'Bethelhem Haile',
    hometown: 'Bahir Dar',
    gender: 'Women',
    division: 'U18 National Team Pool',
    divisionBadge: "U18 Women's National Pool",
    position: 'Two-Way Guard / Scorer',
    jerseyNumber: '#5',
    height: "1.79 m (5'10\")",
    wingspan: '1.85 m',
    age: 17,
    nationalRanking: 1,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 U18 Africa Cup Pool Selection & Quest Qualifiers',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-rose-500 to-pink-600',
    scoutingEvaluation:
      'Premier junior scoring prospect in Ethiopia. Plays with supreme poise, possessing an unblockable pull-up jumper and the tactical IQ to draw fouls during crunch time.',
    keyStrengths: ['Pull-Up Jump Shooting', 'Foul Drawing Savvy', 'Perimeter Containment', 'Transition Push'],
    stats: {
      fibaRankingPoints: 1220,
      ppg: 7.4,
      twoPointAccuracy: '42%',
      onePointAccuracy: '85%',
      drivesPerGame: 5.9,
      efficiencyRating: 16.5,
    },
  },
  {
    id: 'eth-u18w-02',
    name: 'Hana Bekele',
    hometown: 'Hawassa',
    gender: 'Women',
    division: 'U18 National Team Pool',
    divisionBadge: "U18 Women's National Pool",
    position: 'Slashing Wing',
    jerseyNumber: '#11',
    height: "1.81 m (5'11\")",
    wingspan: '1.87 m',
    age: 18,
    nationalRanking: 2,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 U18 Africa Cup Pool Selection & Quest Qualifiers',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-pink-600 to-amber-600',
    scoutingEvaluation:
      'Tenacious open-court athlete with rapid closeout speed. Consistently disrupts passing lanes, generating high-percentage fastbreak finishes.',
    keyStrengths: ['Passing Lane Steals', 'Open Floor Slashing', 'Relentless Motor', 'On-Ball Pressure'],
    stats: {
      fibaRankingPoints: 1260,
      ppg: 6.9,
      twoPointAccuracy: '35%',
      onePointAccuracy: '77%',
      drivesPerGame: 6.1,
      efficiencyRating: 15.1,
    },
  },
  {
    id: 'eth-u18w-03',
    name: 'Tigist Alemu',
    hometown: 'Addis Ababa',
    gender: 'Women',
    division: 'U18 National Team Pool',
    divisionBadge: "U18 Women's National Pool",
    position: 'Lead Ballhandler / Guard',
    jerseyNumber: '#8',
    height: "1.74 m (5'8\")",
    wingspan: '1.78 m',
    age: 17,
    nationalRanking: 3,
    squadTier: 'Active Scouting Pool',
    pathwayFocus: 'National Junior Tour Qualifiers & Her Court Elite Pool',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-fuchsia-600 to-pink-500',
    scoutingEvaluation:
      'Deceptive ballhandler who thrives in tight half-court congestion. Consistently makes the hockey assist and converts contested layups against taller defenders.',
    keyStrengths: ['Half-Court Playmaking', 'Contested Finishes', 'Defensive Stance', 'Quick Hands'],
    stats: {
      fibaRankingPoints: 1180,
      ppg: 6.3,
      twoPointAccuracy: '38%',
      onePointAccuracy: '80%',
      drivesPerGame: 5.2,
      efficiencyRating: 14.7,
    },
  },

  // ==========================================
  // U23 NATIONAL TEAM POOL (MEN)
  // ==========================================
  {
    id: 'eth-u23m-01',
    name: 'Yared Bekele',
    hometown: 'Addis Ababa',
    gender: 'Men',
    division: 'U23 National Team Pool',
    divisionBadge: "U23 Men's National Pool",
    position: 'Two-Way Wing / Defensive Anchor',
    jerseyNumber: '#6',
    height: "1.95 m (6'5\")",
    wingspan: '2.04 m',
    age: 22,
    nationalRanking: 1,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 Nations League & Senior National Team Contention',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-brand-orange to-red-600',
    scoutingEvaluation:
      'National team centerpiece with elite physical conditioning. Unmatched stamina in 10-minute sprint games, lock-down defensive versatility, and dependable 2-point shooting in clutch scenarios.',
    keyStrengths: ['Elite 3x3 Conditioning', 'Switch 1-through-4 Defense', 'Clutch 2-Pointers', 'Court Leadership'],
    stats: {
      fibaRankingPoints: 1780,
      ppg: 8.4,
      twoPointAccuracy: '43%',
      onePointAccuracy: '84%',
      drivesPerGame: 6.5,
      efficiencyRating: 18.9,
    },
  },
  {
    id: 'eth-u23m-02',
    name: 'Natnael Girma',
    hometown: 'Dire Dawa',
    gender: 'Men',
    division: 'U23 National Team Pool',
    divisionBadge: "U23 Men's National Pool",
    position: 'Dynamic Guard / Shot Creator',
    jerseyNumber: '#1',
    height: "1.88 m (6'2\")",
    wingspan: '1.94 m',
    age: 21,
    nationalRanking: 2,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 Nations League & International Challenger Contention',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-amber-500 to-brand-orange',
    scoutingEvaluation:
      'Electrifying shot-creator who thrives under tight defensive pressure. Possesses lightning-quick release on 2-pointers and exceptional deceleration off dribble-drives.',
    keyStrengths: ['Deceleration & Stop-Pop', 'Quick Release 2-Ball', 'Pick & Roll Navigator', 'Late-Clock Shot Making'],
    stats: {
      fibaRankingPoints: 1620,
      ppg: 8.1,
      twoPointAccuracy: '44%',
      onePointAccuracy: '80%',
      drivesPerGame: 7.1,
      efficiencyRating: 17.8,
    },
  },
  {
    id: 'eth-u23m-03',
    name: 'Michael Tadesse',
    hometown: 'Mekelle',
    gender: 'Men',
    division: 'U23 National Team Pool',
    divisionBadge: "U23 Men's National Pool",
    position: 'Interior Anchor / Center',
    jerseyNumber: '#12',
    height: "2.02 m (6'7\")",
    wingspan: '2.11 m',
    age: 22,
    nationalRanking: 3,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 Nations League & Senior National Team Contention',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-orange-700 to-amber-600',
    scoutingEvaluation:
      'Imposing paint enforcer with FIBA international frame. Controls the defensive glass, sets bone-rattling on-ball screens, and converts putback jams with authority.',
    keyStrengths: ['Paint Domination', 'Rebounding Control', 'Brick-Wall Screens', 'Interior Intimidation'],
    stats: {
      fibaRankingPoints: 1540,
      ppg: 6.9,
      twoPointAccuracy: '31%',
      onePointAccuracy: '76%',
      drivesPerGame: 4.1,
      efficiencyRating: 17.2,
    },
  },
  {
    id: 'eth-u23m-04',
    name: 'Abenezer Fikru',
    hometown: 'Wolkite',
    gender: 'Men',
    division: 'U23 National Team Pool',
    divisionBadge: "U23 Men's National Pool",
    position: 'High-Volume Perimeter Scorer',
    jerseyNumber: '#23',
    height: "1.90 m (6'3\")",
    wingspan: '1.96 m',
    age: 21,
    nationalRanking: 4,
    squadTier: 'Active Scouting Pool',
    pathwayFocus: 'FIBA 3x3 Nations League Roster Selection & Quest Tour Finals',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-amber-600 to-orange-500',
    scoutingEvaluation:
      'High-confidence shooter with deep range well beyond the 2-point line. Forces opposing defenses to stretch past half-court, opening driving lanes for teammates.',
    keyStrengths: ['Deep Arc Range', 'Off-Dribble Pull-Up', 'Court Spacing', 'Fast Transition Speed'],
    stats: {
      fibaRankingPoints: 1490,
      ppg: 7.2,
      twoPointAccuracy: '45%',
      onePointAccuracy: '78%',
      drivesPerGame: 4.8,
      efficiencyRating: 15.9,
    },
  },

  // ==========================================
  // U23 NATIONAL TEAM POOL (WOMEN)
  // ==========================================
  {
    id: 'eth-u23w-01',
    name: 'Selamawit Tadesse',
    hometown: 'Hawassa',
    gender: 'Women',
    division: 'U23 National Team Pool',
    divisionBadge: "U23 Women's National Pool",
    position: 'Primary Playmaker / Lead Guard',
    jerseyNumber: '#10',
    height: "1.76 m (5'9\")",
    wingspan: '1.82 m',
    age: 22,
    nationalRanking: 1,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 Nations League & Senior National Team Contention',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-rose-600 to-pink-500',
    scoutingEvaluation:
      'Premier women’s 3x3 playmaker in Ethiopia. Virtuosic ball handling combined with pinpoint dish passes and ruthless defensive steals. Anchors national squad transition execution.',
    keyStrengths: ['Half-Court Dictation', 'Pick-and-Roll Mastery', 'Perimeter Steals', 'Free Throw Precision'],
    stats: {
      fibaRankingPoints: 1740,
      ppg: 8.2,
      twoPointAccuracy: '41%',
      onePointAccuracy: '88%',
      drivesPerGame: 7.0,
      efficiencyRating: 18.5,
    },
  },
  {
    id: 'eth-u23w-02',
    name: 'Helen Berhanu',
    hometown: 'Addis Ababa',
    gender: 'Women',
    division: 'U23 National Team Pool',
    divisionBadge: "U23 Women's National Pool",
    position: 'Elite Perimeter Shooter / Wing',
    jerseyNumber: '#22',
    height: "1.82 m (6'0\")",
    wingspan: '1.88 m',
    age: 21,
    nationalRanking: 2,
    squadTier: 'National Provisional Squad',
    pathwayFocus: 'FIBA 3x3 Nations League & Senior National Team Contention',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-pink-600 to-rose-700',
    scoutingEvaluation:
      'Dead-eye shooter who commands double teams on the perimeter. High defensive motor and excellent instinct for reading offensive schemes.',
    keyStrengths: ['Deadeye 2-Point Stroke', 'Off-Ball Movement', 'Closing Speed', 'Clutch Shooting'],
    stats: {
      fibaRankingPoints: 1590,
      ppg: 7.7,
      twoPointAccuracy: '46%',
      onePointAccuracy: '83%',
      drivesPerGame: 4.5,
      efficiencyRating: 16.8,
    },
  },
  {
    id: 'eth-u23w-03',
    name: 'Meron Assefa',
    hometown: 'Bishoftu',
    gender: 'Women',
    division: 'U23 National Team Pool',
    divisionBadge: "U23 Women's National Pool",
    position: 'Versatile Two-Way Forward',
    jerseyNumber: '#14',
    height: "1.87 m (6'2\")",
    wingspan: '1.93 m',
    age: 22,
    nationalRanking: 3,
    squadTier: 'Active Scouting Pool',
    pathwayFocus: 'FIBA 3x3 Nations League Roster Selection & Her Court Leadership',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-fuchsia-600 to-purple-600',
    scoutingEvaluation:
      'Physical forward who controls both backboards. Outstanding footwork in the low post and active rim deterrence against penetrating guards.',
    keyStrengths: ['Low Post Footwork', 'Contested Rebounding', 'Help-Side Blocks', 'Mid-Range Shooting'],
    stats: {
      fibaRankingPoints: 1510,
      ppg: 6.8,
      twoPointAccuracy: '33%',
      onePointAccuracy: '76%',
      drivesPerGame: 5.1,
      efficiencyRating: 16.2,
    },
  },
  {
    id: 'eth-u23w-04',
    name: 'Rahel Solomon',
    hometown: 'Bahir Dar',
    gender: 'Women',
    division: 'U23 National Team Pool',
    divisionBadge: "U23 Women's National Pool",
    position: 'Slasher / Perimeter Lock',
    jerseyNumber: '#8',
    height: "1.80 m (5'11\")",
    wingspan: '1.86 m',
    age: 20,
    nationalRanking: 4,
    squadTier: 'Active Scouting Pool',
    pathwayFocus: 'FIBA 3x3 Nations League Roster Selection & Her Court Leadership',
    fibaProfileUrl: 'https://play.fiba3x3.com',
    verifiedFiba: true,
    avatarColor: 'from-pink-500 to-purple-700',
    scoutingEvaluation:
      'Fearless driver who attacks closeouts with explosive first step. Shuts down opponents primary wings with disciplined footwork and active hands.',
    keyStrengths: ['Closeout Attacks', 'Lockdown Perimeter Defense', 'Offensive Drives', 'High Stamina'],
    stats: {
      fibaRankingPoints: 1430,
      ppg: 6.5,
      twoPointAccuracy: '34%',
      onePointAccuracy: '79%',
      drivesPerGame: 5.9,
      efficiencyRating: 15.0,
    },
  },
];

export const DIVISION_TABS = [
  { id: 'All', label: 'All Divisions', value: 'All' },
  { id: 'U16', label: 'U16 National Team', value: 'U16 National Team Pool' },
  { id: 'U18', label: 'U18 National Team', value: 'U18 National Team Pool' },
  { id: 'U23', label: 'U23 National Team', value: 'U23 National Team Pool' },
] as const;

export const GENDER_FILTERS = [
  { id: 'All', label: 'All Genders' },
  { id: 'Men', label: 'Men' },
  { id: 'Women', label: 'Women' },
] as const;
