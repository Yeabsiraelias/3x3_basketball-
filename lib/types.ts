export type Gender = 'Male' | 'Female';
export type PlayerCategory =
  | 'U16 National Team Pool'
  | 'U18 National Team Pool'
  | 'U23 National Team Pool'
  | 'U16'
  | 'U18'
  | 'U23'
  | 'Open';

export type EventType = 'Clinic' | 'Lite Quest' | 'Quest Final';
export type EventStatus = 'Upcoming' | 'Ongoing' | 'Completed';
export type OfficialRole =
  | 'Referee'
  | 'Table Official'
  | 'Tournament Director'
  | 'FIBA Certified Project director'
  | 'FIBA Certified 3x3 Ethiopia international relation & Communication'
  | 'FIBA Certified Event operation Lead'
  | "FIBA Certified Youth Dev't Lead"
  | 'FIBA 3x3 Ethiopia Finance & Commercial Lead'
  | 'Global digital Marketer'
  | 'FIBA 3x3 Ethiopia Social media Delegate'
  | 'FIBA 3x3 Diaspora & Women in sport Delegate'
  | 'FIBA 3x3 Global strategy & Diaspora Delegate'
  | string;


export interface Player {
  player_id: string;
  full_name: string;
  gender: Gender;
  category: PlayerCategory;
  fiba_profile_url?: string | null;
  national_ranking_points: number;
  region: string;
  created_at?: string;
  updated_at?: string;
}

export interface Tournament {
  tournament_id: string;
  event_name: string;
  event_type: EventType;
  location: string;
  event_date: string;
  fiba_event_maker_id?: string | null;
  status: EventStatus;
  created_at?: string;
  updated_at?: string;
}

export interface Team {
  team_id: string;
  team_name: string;
  captain_id: string;
  tournament_id: string;
  captain?: Player;
  tournament?: Tournament;
  created_at?: string;
}

export interface StaffOfficial {
  official_id: string;
  full_name: string;
  role: OfficialRole;
  certification_status: boolean;
  created_at?: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  responsibilities: string;
  bio?: string;
  badge: string;
  image: string;
  imagePosition?: string;
  officialRole: OfficialRole;
  certificationStatus: boolean;
  fibaCredentials?: string;
  department?: string;
}
