# 3x3 Ethiopia — Official FIBA-Endorsed Sports NGO Platform

A modern, high-energy full-stack web application built for **3x3 Ethiopia**, an official FIBA-endorsed sports NGO. The platform manages official 3x3 basketball tournaments, youth development programs, referee certification, and player registrations.

---

## ⚡ Tech Stack

* **Frontend:** Next.js 15 (App Router), React 19, TypeScript
* **Styling:** Tailwind CSS (Dark Mode default, urban high-contrast neon palette)
* **Database:** Supabase (PostgreSQL with Row Level Security and Enums)
* **Icons:** Lucide React
* **Deployment:** Netlify (`@netlify/plugin-nextjs`) & GitHub Codespaces (`.devcontainer`)

---

## 🚀 Quick Start Guide

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/your-org/3x3-ethiopia.git
cd 3x3-ethiopia
npm install
```

### 2. Environment Configuration

Copy `.env.example` to `.env.local` and add your Supabase credentials:

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Note:** The platform includes seamless fallback mock data, so the application runs immediately with full interactivity even before configuring live Supabase credentials!

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ Supabase SQL Database Schema

Execute the complete script located in [`supabase/schema.sql`](file:///c:/Users/yeabs/OneDrive/Desktop/3x3%20basketball/supabase/schema.sql) in your Supabase SQL Editor:

```sql
-- Enums
CREATE TYPE gender_enum AS ENUM ('Male', 'Female');
CREATE TYPE player_category_enum AS ENUM ('U18', 'U23', 'Open');
CREATE TYPE event_type_enum AS ENUM ('Clinic', 'Lite Quest', 'Quest Final');
CREATE TYPE event_status_enum AS ENUM ('Upcoming', 'Ongoing', 'Completed');
CREATE TYPE official_role_enum AS ENUM ('Referee', 'Table Official', 'Tournament Director');

-- Players Table
CREATE TABLE players (
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
CREATE TABLE tournaments (
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
CREATE TABLE teams (
    team_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    team_name TEXT NOT NULL,
    captain_id UUID NOT NULL REFERENCES players(player_id) ON DELETE CASCADE,
    tournament_id UUID NOT NULL REFERENCES tournaments(tournament_id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Staff and Officials Table
CREATE TABLE staff_and_officials (
    official_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    role official_role_enum NOT NULL,
    certification_status BOOLEAN DEFAULT false NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);
```

---

## 🌐 Routes & Pages

* **`/` (Home):** Hero countdown to Late 2026 launch, FIBA registration portal CTA, upcoming tournament cards, and sponsor ticker.
* **`/about` (About Us):** Vision, mission, and the 5-member Core Committee profile grid.
* **`/events` (Tournaments & Events):** Filterable event calendar and interactive team registration modal.
* **`/development` (Youth Development):** Deep dives into U18/U23 clinics, school court refurbishments, and "Her Court" female inclusion workshops.

---

## ☁️ Deployment

### Netlify
The project includes a pre-configured [`netlify.toml`](file:///c:/Users/yeabs/OneDrive/Desktop/3x3%20basketball/netlify.toml) utilizing `@netlify/plugin-nextjs`. Simply connect your GitHub repository to Netlify and it will deploy automatically.

### GitHub Codespaces
A complete devcontainer configuration is provided in [`.devcontainer/devcontainer.json`](file:///c:/Users/yeabs/OneDrive/Desktop/3x3%20basketball/.devcontainer/devcontainer.json) for 1-click cloud development.
