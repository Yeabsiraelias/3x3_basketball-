-- ==============================================================================
-- 3x3 ETHIOPIA - SUPABASE DATABASE SCHEMA
-- Official FIBA-Endorsed 3x3 Basketball NGO Platform
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ------------------------------------------------------------------------------
-- 1. ENUMS DEFINITIONS
-- ------------------------------------------------------------------------------

-- Gender enum
CREATE TYPE gender_enum AS ENUM ('Male', 'Female');

-- Player category enum
CREATE TYPE player_category_enum AS ENUM ('U18', 'U23', 'Open');

-- Tournament event type enum
CREATE TYPE event_type_enum AS ENUM ('Clinic', 'Lite Quest', 'Quest Final');

-- Tournament status enum
CREATE TYPE event_status_enum AS ENUM ('Upcoming', 'Ongoing', 'Completed');

-- Staff and officials role enum
CREATE TYPE official_role_enum AS ENUM ('Referee', 'Table Official', 'Tournament Director');

-- ------------------------------------------------------------------------------
-- 2. TABLE CREATION
-- ------------------------------------------------------------------------------

-- Players Table
CREATE TABLE IF NOT EXISTS players (
    player_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    gender gender_enum NOT NULL,
    category player_category_enum NOT NULL,
    fiba_profile_url TEXT,
    national_ranking_points INT DEFAULT 0 CHECK (national_ranking_points >= 0),
    region TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Tournaments Table
CREATE TABLE IF NOT EXISTS tournaments (
    tournament_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_name TEXT NOT NULL,
    event_type event_type_enum NOT NULL,
    location TEXT NOT NULL,
    event_date DATE NOT NULL,
    fiba_event_maker_id TEXT,
    status event_status_enum DEFAULT 'Upcoming' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Teams Table
CREATE TABLE IF NOT EXISTS teams (
    team_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_name TEXT NOT NULL,
    captain_id UUID NOT NULL REFERENCES players(player_id) ON DELETE CASCADE,
    tournament_id UUID NOT NULL REFERENCES tournaments(tournament_id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Staff and Officials Table
CREATE TABLE IF NOT EXISTS staff_and_officials (
    official_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    role official_role_enum NOT NULL,
    certification_status BOOLEAN DEFAULT false NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 3. INDEXES FOR PERFORMANCE
-- ------------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_players_category ON players(category);
CREATE INDEX IF NOT EXISTS idx_players_gender ON players(gender);
CREATE INDEX IF NOT EXISTS idx_players_ranking ON players(national_ranking_points DESC);
CREATE INDEX IF NOT EXISTS idx_tournaments_date ON tournaments(event_date);
CREATE INDEX IF NOT EXISTS idx_tournaments_status ON tournaments(status);
CREATE INDEX IF NOT EXISTS idx_tournaments_type ON tournaments(event_type);
CREATE INDEX IF NOT EXISTS idx_teams_tournament ON teams(tournament_id);
CREATE INDEX IF NOT EXISTS idx_teams_captain ON teams(captain_id);
CREATE INDEX IF NOT EXISTS idx_staff_role ON staff_and_officials(role);

-- ------------------------------------------------------------------------------
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------------------------
ALTER TABLE players ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournaments ENABLE ROW LEVEL SECURITY;
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_and_officials ENABLE ROW LEVEL SECURITY;

-- Public read access for visitors to browse tournaments, players, teams, and staff
CREATE POLICY "Public can view players" ON players FOR SELECT USING (true);
CREATE POLICY "Public can view tournaments" ON tournaments FOR SELECT USING (true);
CREATE POLICY "Public can view teams" ON teams FOR SELECT USING (true);
CREATE POLICY "Public can view staff" ON staff_and_officials FOR SELECT USING (true);

-- Allow public player / team tournament registrations
CREATE POLICY "Public can insert players" ON players FOR INSERT WITH CHECK (true);
CREATE POLICY "Public can insert teams" ON teams FOR INSERT WITH CHECK (true);

-- ------------------------------------------------------------------------------
-- 5. SAMPLE SEED DATA
-- ------------------------------------------------------------------------------
INSERT INTO players (player_id, full_name, gender, category, fiba_profile_url, national_ranking_points, region)
VALUES
    ('a1111111-1111-1111-1111-111111111111', 'Yared Bekele', 'Male', 'Open', 'https://play.fiba3x3.com/players/yared-bekele', 1450, 'Addis Ababa'),
    ('a2222222-2222-2222-2222-222222222222', 'Selamawit Tadesse', 'Female', 'Open', 'https://play.fiba3x3.com/players/selamawit-tadesse', 1320, 'Hawassa'),
    ('a3333333-3333-3333-3333-333333333333', 'Natnael Girma', 'Male', 'U23', 'https://play.fiba3x3.com/players/natnael-girma', 980, 'Dire Dawa'),
    ('a4444444-4444-4444-4444-444444444444', 'Bethelhem Haile', 'Female', 'U18', 'https://play.fiba3x3.com/players/bethelhem-haile', 760, 'Bahir Dar'),
    ('a5555555-5555-5555-5555-555555555555', 'Dawit Mengistu', 'Male', 'Open', 'https://play.fiba3x3.com/players/dawit-mengistu', 1120, 'Addis Ababa')
ON CONFLICT (player_id) DO NOTHING;

INSERT INTO tournaments (tournament_id, event_name, event_type, location, event_date, fiba_event_maker_id, status)
VALUES
    ('b1111111-1111-1111-1111-111111111111', 'Addis Urban Quest Final 2026', 'Quest Final', 'Meskel Square Arena, Addis Ababa', '2026-11-20', 'EM-ETH-2026-001', 'Upcoming'),
    ('b2222222-2222-2222-2222-222222222222', 'Rift Valley 3x3 Lite Quest', 'Lite Quest', 'Hawassa Millennium Park Court', '2026-12-05', 'EM-ETH-2026-002', 'Upcoming'),
    ('b3333333-3333-3333-3333-333333333333', 'Bahir Dar Regional 3x3 Clinic', 'Clinic', 'Bahir Dar Stadium Sports Courts', '2026-12-18', 'EM-ETH-2026-003', 'Upcoming'),
    ('b4444444-4444-4444-4444-444444444444', 'Eastern Express 3x3 Lite Quest', 'Lite Quest', 'Dire Dawa Sports Complex', '2027-01-15', 'EM-ETH-2027-001', 'Upcoming')
ON CONFLICT (tournament_id) DO NOTHING;

INSERT INTO teams (team_id, team_name, captain_id, tournament_id)
VALUES
    ('c1111111-1111-1111-1111-111111111111', 'Addis Ballers', 'a1111111-1111-1111-1111-111111111111', 'b1111111-1111-1111-1111-111111111111'),
    ('c2222222-2222-2222-2222-222222222222', 'Rift Valley Kings', 'a3333333-3333-3333-3333-333333333333', 'b2222222-2222-2222-2222-222222222222'),
    ('c3333333-3333-3333-3333-333333333333', 'Sheba Sparks', 'a2222222-2222-2222-2222-222222222222', 'b1111111-1111-1111-1111-111111111111')
ON CONFLICT (team_id) DO NOTHING;

INSERT INTO staff_and_officials (official_id, full_name, role, certification_status)
VALUES
    ('d1111111-1111-1111-1111-111111111111', 'Tamrat Alemu Befekadu', 'Tournament Director', true),
    ('d2222222-2222-2222-2222-222222222222', 'Blen Asrat Kebede', 'Tournament Director', true),
    ('d3333333-3333-3333-3333-333333333333', 'Brook Hailu Yemane', 'Table Official', true),
    ('d4444444-4444-4444-4444-444444444444', 'Robel Alemu Ayele', 'Table Official', true),
    ('d5555555-5555-5555-5555-555555555555', 'Lidiya Eshetu Dula', 'Table Official', true),
    ('d6666666-6666-6666-6666-666666666666', 'Yeabsira Elias', 'Tournament Director', true),
    ('d7777777-7777-7777-7777-777777777777', 'Yabtse Yonas Jima', 'Table Official', true),
    ('d8888888-8888-8888-8888-888888888888', 'Selamawit Kassahun Yosef', 'Tournament Director', true),
    ('d9999999-9999-9999-9999-999999999999', 'Yamlak Menase', 'Tournament Director', true)
ON CONFLICT (official_id) DO UPDATE SET
    full_name = EXCLUDED.full_name,
    role = EXCLUDED.role,
    certification_status = EXCLUDED.certification_status;

-- ------------------------------------------------------------------------------
-- 6. NATIONAL SCOUTING PROGRAM & TALENT EVALUATION
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS scouting_registrations (
    registration_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    division TEXT NOT NULL, -- 'U16 Junior Circuit', 'U18 Elite Pathway', 'U23 National Roster Pool'
    gender gender_enum NOT NULL,
    date_of_birth DATE,
    height_cm INT,
    region TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    fiba_profile_url TEXT,
    evaluation_status TEXT DEFAULT 'Under Review' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_scouting_division ON scouting_registrations(division);
CREATE INDEX IF NOT EXISTS idx_scouting_gender ON scouting_registrations(gender);
CREATE INDEX IF NOT EXISTS idx_scouting_status ON scouting_registrations(evaluation_status);

ALTER TABLE scouting_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view scouting registrations" ON scouting_registrations FOR SELECT USING (true);
CREATE POLICY "Public can insert scouting registrations" ON scouting_registrations FOR INSERT WITH CHECK (true);

