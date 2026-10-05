export type Gender = 'Male' | 'Female';
export type PlayerCategory = 'U18' | 'U23' | 'Open';
export type EventType = 'Clinic' | 'Lite Quest' | 'Quest Final';
export type EventStatus = 'Upcoming' | 'Ongoing' | 'Completed';
export type OfficialRole = 'Referee' | 'Table Official' | 'Tournament Director';

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
  officialRole: OfficialRole;
  certificationStatus: boolean;
  fibaCredentials?: string;
  department?: string;
}
