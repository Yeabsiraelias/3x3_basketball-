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

/**
 * Official FIBA 3x3 Ethiopia National Team Pool
 * Roster selection is actively in progress via national tournaments, trials, and scouting camps.
 * Ratified athlete profiles will be published here upon official federation confirmation.
 */
export const PLAYER_PROFILES: PlayerProfile[] = [];

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
