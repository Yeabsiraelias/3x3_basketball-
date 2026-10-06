import { Tournament, CommitteeMember, Player } from './types';

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    tournament_id: 'b1111111-1111-1111-1111-111111111111',
    event_name: 'Addis Urban Quest Final 2026',
    event_type: 'Quest Final',
    location: 'Meskel Square Arena, Addis Ababa',
    event_date: '2026-11-20',
    fiba_event_maker_id: 'EM-ETH-2026-001',
    status: 'Upcoming',
  },
  {
    tournament_id: 'b2222222-2222-2222-2222-222222222222',
    event_name: 'Rift Valley 3x3 Lite Quest',
    event_type: 'Lite Quest',
    location: 'Millennium Park Courts, Hawassa',
    event_date: '2026-12-05',
    fiba_event_maker_id: 'EM-ETH-2026-002',
    status: 'Upcoming',
  },
  {
    tournament_id: 'b3333333-3333-3333-3333-333333333333',
    event_name: 'Bahir Dar Regional 3x3 Clinic',
    event_type: 'Clinic',
    location: 'Bahir Dar Stadium Sports Courts',
    event_date: '2026-12-18',
    fiba_event_maker_id: 'EM-ETH-2026-003',
    status: 'Upcoming',
  },
  {
    tournament_id: 'b4444444-4444-4444-4444-444444444444',
    event_name: 'Eastern Express 3x3 Lite Quest',
    event_type: 'Lite Quest',
    location: 'Dire Dawa Sports Complex',
    event_date: '2027-01-15',
    fiba_event_maker_id: 'EM-ETH-2027-001',
    status: 'Upcoming',
  },
];

import { LEADERSHIP_MEMBERS } from '@/src/data/team';

export const CORE_COMMITTEE: CommitteeMember[] = LEADERSHIP_MEMBERS;

export const SPONSORS = [
  { name: 'Safaricom Ethiopia', category: 'Connectivity & Digital Partner', logoText: 'SAFARICOM' },
  { name: 'Commercial Bank of Ethiopia (CBE)', category: 'Official Banking Partner', logoText: 'CBE' },
  { name: 'UNICEF Ethiopia', category: 'Youth Development Ally', logoText: 'UNICEF' },
  { name: 'Ministry of Women and Social Affairs', category: 'Strategic Government Partner', logoText: 'MOWSA' },
  { name: 'Ethiopian Basketball Federation', category: 'National Governing Body', logoText: 'EBF' },
  { name: 'FIBA 3x3 Official Endorsement', category: 'Global Sanctioning Body', logoText: 'FIBA 3x3' },
];

export const TOP_RANKED_PLAYERS: Player[] = [
  {
    player_id: 'a1',
    full_name: 'Yared Bekele',
    gender: 'Male',
    category: 'U23 National Team Pool',
    fiba_profile_url: 'https://play.fiba3x3.com',
    national_ranking_points: 1780,
    region: 'Addis Ababa',
  },
  {
    player_id: 'a2',
    full_name: 'Selamawit Tadesse',
    gender: 'Female',
    category: 'U23 National Team Pool',
    fiba_profile_url: 'https://play.fiba3x3.com',
    national_ranking_points: 1740,
    region: 'Hawassa',
  },
  {
    player_id: 'a3',
    full_name: 'Brook Solomon',
    gender: 'Male',
    category: 'U18 National Team Pool',
    fiba_profile_url: 'https://play.fiba3x3.com',
    national_ranking_points: 1350,
    region: 'Addis Ababa',
  },
  {
    player_id: 'a4',
    full_name: 'Bethelhem Haile',
    gender: 'Female',
    category: 'U18 National Team Pool',
    fiba_profile_url: 'https://play.fiba3x3.com',
    national_ranking_points: 1220,
    region: 'Bahir Dar',
  },
  {
    player_id: 'a5',
    full_name: 'Dawit Kebede',
    gender: 'Male',
    category: 'U16 National Team Pool',
    fiba_profile_url: 'https://play.fiba3x3.com',
    national_ranking_points: 940,
    region: 'Addis Ababa',
  },
  {
    player_id: 'a6',
    full_name: 'Bethlehem Girma',
    gender: 'Female',
    category: 'U16 National Team Pool',
    fiba_profile_url: 'https://play.fiba3x3.com',
    national_ranking_points: 910,
    region: 'Bishoftu',
  },
];

