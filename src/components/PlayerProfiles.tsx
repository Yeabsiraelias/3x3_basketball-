'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  PLAYER_PROFILES,
  DIVISION_TABS,
  GENDER_FILTERS,
  PlayerProfile,
  NationalDivision,
  PlayerGender,
} from '@/src/data/players';
import {
  Search,
  Filter,
  Trophy,
  MapPin,
  Flame,
  ShieldCheck,
  ExternalLink,
  Users,
  Target,
  Sparkles,
  ChevronRight,
  X,
  Activity,
  Award,
  Zap,
} from 'lucide-react';

interface PlayerProfilesProps {
  className?: string;
  initialDivision?: string;
  initialGender?: string;
  showTitle?: boolean;
}

export default function PlayerProfiles({
  className = '',
  initialDivision = 'All',
  initialGender = 'All',
  showTitle = true,
}: PlayerProfilesProps) {
  const [selectedDivisionTab, setSelectedDivisionTab] = useState<string>(initialDivision);
  const [selectedGender, setSelectedGender] = useState<string>(initialGender);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDossier, setActiveDossier] = useState<PlayerProfile | null>(null);

  // Filter players based on division, gender, and search query
  const filteredPlayers = useMemo(() => {
    return PLAYER_PROFILES.filter((player) => {
      // Division filtering
      if (selectedDivisionTab !== 'All') {
        const divisionConfig = DIVISION_TABS.find((t) => t.id === selectedDivisionTab);
        if (divisionConfig && divisionConfig.value !== 'All') {
          if (player.division !== divisionConfig.value) return false;
        }
      }

      // Gender filtering
      if (selectedGender !== 'All' && player.gender !== selectedGender) {
        return false;
      }

      // Search query filtering
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = player.name.toLowerCase().includes(query);
        const matchesHometown = player.hometown.toLowerCase().includes(query);
        const matchesPosition = player.position.toLowerCase().includes(query);
        const matchesBadge = player.divisionBadge.toLowerCase().includes(query);
        if (!matchesName && !matchesHometown && !matchesPosition && !matchesBadge) {
          return false;
        }
      }

      return true;
    });
  }, [selectedDivisionTab, selectedGender, searchQuery]);

  // Tab counts for quick reference
  const tabCounts = useMemo(() => {
    const counts: Record<string, number> = { All: PLAYER_PROFILES.length };
    DIVISION_TABS.forEach((tab) => {
      if (tab.value === 'All') return;
      counts[tab.id] = PLAYER_PROFILES.filter((p) => p.division === tab.value).length;
    });
    return counts;
  }, []);

  const genderCounts = useMemo(() => {
    return {
      All: PLAYER_PROFILES.length,
      Men: PLAYER_PROFILES.filter((p) => p.gender === 'Men').length,
      Women: PLAYER_PROFILES.filter((p) => p.gender === 'Women').length,
    };
  }, []);

  const resetFilters = () => {
    setSelectedDivisionTab('All');
    setSelectedGender('All');
    setSearchQuery('');
  };

  // Badge coloring helper
  const getBadgeColors = (badge: string) => {
    if (badge.startsWith('U16')) {
      return {
        bg: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400',
        glow: 'shadow-[0_0_15px_rgba(16,185,129,0.25)]',
        accent: 'text-emerald-400',
      };
    }
    if (badge.startsWith('U18')) {
      return {
        bg: 'bg-brand-orange/15 border-brand-orange/40 text-brand-orange',
        glow: 'shadow-[0_0_15px_rgba(255,85,0,0.25)]',
        accent: 'text-brand-orange',
      };
    }
    // U23
    return {
      bg: 'bg-brand-yellow/15 border-brand-yellow/40 text-brand-yellow',
      glow: 'shadow-[0_0_15px_rgba(255,184,0,0.25)]',
      accent: 'text-brand-yellow',
    };
  };

  return (
    <section
      id="player-profiles"
      aria-label="National Team Player Profiles"
      className={`relative w-full overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-black uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              <span>Official FIBA 3x3 National Scouting Pipeline</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tight text-white leading-none">
              National Team <span className="text-brand-orange text-glow">Player Profiles</span>
            </h2>

            <p className="text-sm sm:text-lg text-zinc-300 font-medium leading-relaxed italic">
              Official national junior and youth squad scouting pool across <span className="text-white font-bold">U16</span>, <span className="text-white font-bold">U18</span>, and <span className="text-white font-bold">U23</span> divisions for both Men &amp; Women.
            </p>
          </div>
        )}

        {/* Top Scouting Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-2xl bg-surface/70 border border-surface-border backdrop-blur-md">
          <div className="p-3 rounded-xl bg-background/60 border border-surface-border/60 text-center">
            <div className="flex items-center justify-center gap-1.5 text-brand-orange mb-1">
              <Users className="w-4 h-4" />
              <span className="text-[11px] font-black uppercase tracking-wider text-zinc-400">Pool Athletes</span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-white font-mono">{PLAYER_PROFILES.length}</span>
            <span className="text-[10px] text-zinc-500 block uppercase font-bold">Active Evaluated</span>
          </div>

          <div className="p-3 rounded-xl bg-background/60 border border-surface-border/60 text-center">
            <div className="flex items-center justify-center gap-1.5 text-brand-cyan mb-1">
              <Target className="w-4 h-4" />
              <span className="text-[11px] font-black uppercase tracking-wider text-zinc-400">Divisions</span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-brand-cyan font-mono">3 Tiers</span>
            <span className="text-[10px] text-zinc-500 block uppercase font-bold">U16 • U18 • U23</span>
          </div>

          <div className="p-3 rounded-xl bg-background/60 border border-surface-border/60 text-center">
            <div className="flex items-center justify-center gap-1.5 text-brand-yellow mb-1">
              <Trophy className="w-4 h-4" />
              <span className="text-[11px] font-black uppercase tracking-wider text-zinc-400">Genders</span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-brand-yellow font-mono">50 / 50</span>
            <span className="text-[10px] text-zinc-500 block uppercase font-bold">Men &amp; Women Equal</span>
          </div>

          <div className="p-3 rounded-xl bg-background/60 border border-surface-border/60 text-center">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-[11px] font-black uppercase tracking-wider text-zinc-400">Cities</span>
            </div>
            <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">8 Regions</span>
            <span className="text-[10px] text-zinc-500 block uppercase font-bold">Grassroots Reach</span>
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="space-y-4 p-5 sm:p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 shadow-xl backdrop-blur-xl">
          
          {/* Row 1: Division Tabs (All, U16 National Team, U18 National Team, U23 National Team) */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Division Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-neutral-950/90 rounded-xl border border-neutral-800 overflow-x-auto scrollbar-none">
              {DIVISION_TABS.map((tab) => {
                const isActive = selectedDivisionTab === tab.id;
                const count = tabCounts[tab.id] || 0;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedDivisionTab(tab.id)}
                    className={`whitespace-nowrap flex items-center gap-2 px-3.5 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 ${
                      isActive
                        ? 'bg-brand-orange text-black shadow-[0_0_20px_rgba(255,85,0,0.4)]'
                        : 'text-zinc-400 hover:text-white hover:bg-neutral-800/80'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-black/30 text-black font-bold'
                          : 'bg-neutral-800 text-zinc-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Gender Filters (All, Men, Women) */}
            <div className="flex items-center gap-2 self-start lg:self-auto">
              <span className="text-xs font-black uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 pl-1">
                <Filter className="w-3.5 h-3.5 text-brand-orange" />
                <span className="hidden sm:inline">Gender:</span>
              </span>
              <div className="flex items-center gap-1 p-1 bg-neutral-950/90 rounded-xl border border-neutral-800">
                {GENDER_FILTERS.map((gender) => {
                  const isActive = selectedGender === gender.id;
                  const count = genderCounts[gender.id as keyof typeof genderCounts] || 0;

                  return (
                    <button
                      key={gender.id}
                      onClick={() => setSelectedGender(gender.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                        isActive
                          ? 'bg-surface-light text-brand-orange border border-brand-orange/40 shadow-sm'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <span>{gender.label}</span>
                      <span className="text-[10px] font-mono opacity-70">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Row 2: Search Input & Active Filter Summary */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-neutral-800/70">
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search by player name, hometown city, position, or division..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white placeholder-zinc-500 text-xs sm:text-sm focus:border-brand-orange focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Count & Reset Button */}
            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto text-xs text-zinc-400 shrink-0">
              <span>
                Showing <strong className="text-white font-mono">{filteredPlayers.length}</strong> of{' '}
                <span className="font-mono">{PLAYER_PROFILES.length}</span> profiles
              </span>

              {(selectedDivisionTab !== 'All' || selectedGender !== 'All' || searchQuery !== '') && (
                <button
                  onClick={resetFilters}
                  className="text-brand-orange hover:underline font-bold text-xs uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Players Cards Grid */}
        {filteredPlayers.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
            <div className="w-12 h-12 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange flex items-center justify-center mx-auto">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black text-white uppercase italic">No Player Profiles Match Your Filter</h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
              Try adjusting your division tab, switching gender selection, or clearing the search keywords.
            </p>
            <div className="pt-2">
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-brand-orange text-black font-black uppercase text-xs tracking-wider hover:bg-brand-orange-glow transition-all"
              >
                Reset All Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlayers.map((player) => {
              const badgeStyle = getBadgeColors(player.divisionBadge);

              return (
                <div
                  key={player.id}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl bg-neutral-900/85 border border-neutral-800 hover:border-brand-orange/60 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,85,0,0.18)] hover:-translate-y-1"
                >
                  {/* Top Bar: Official Division Badge & Ranking */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      {/* Official Division Badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${badgeStyle.bg} ${badgeStyle.glow}`}
                      >
                        <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                        <span>{player.divisionBadge}</span>
                      </span>

                      {/* Official FIBA Points Pill */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-zinc-300">
                        <Flame className="w-3 h-3 text-brand-orange fill-brand-orange" />
                        <span className="text-[11px] font-mono font-bold text-white">
                          {player.stats.fibaRankingPoints.toLocaleString()}
                        </span>
                        <span className="text-[9px] text-zinc-400 uppercase font-bold">PTS</span>
                      </div>
                    </div>

                    {/* Player Info Header */}
                    <div className="flex items-start gap-3.5 pt-1">
                      {/* Player Avatar with Jersey Number */}
                      <div
                        className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${player.avatarColor} p-0.5 shadow-md shrink-0 group-hover:scale-105 transition-transform duration-300`}
                      >
                        <div className="w-full h-full rounded-[14px] bg-neutral-950 flex flex-col items-center justify-center text-white">
                          <span className="text-xs font-black tracking-tight text-brand-orange font-mono">
                            {player.jerseyNumber}
                          </span>
                          <span className="text-[10px] uppercase font-bold text-zinc-400">
                            {player.gender === 'Men' ? 'M' : 'W'}
                          </span>
                        </div>
                        {/* FIBA Verified Badge indicator */}
                        {player.verifiedFiba && (
                          <div
                            className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-neutral-950 flex items-center justify-center text-white"
                            title="Verified FIBA 3x3 Profile"
                          >
                            <span className="text-[8px] font-black">✓</span>
                          </div>
                        )}
                      </div>

                      {/* Name, Hometown & Position */}
                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-lg sm:text-xl font-black text-white uppercase italic tracking-tight truncate group-hover:text-brand-orange transition-colors">
                            {player.name}
                          </h3>
                        </div>

                        {/* Hometown / City */}
                        <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-semibold">
                          <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                          <span className="truncate">{player.hometown}, Ethiopia</span>
                        </div>

                        {/* Position */}
                        <div className="text-[11px] font-bold uppercase tracking-wider text-brand-cyan truncate">
                          {player.position}
                        </div>
                      </div>
                    </div>

                    {/* Official Junior & Youth Squad Tier */}
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-zinc-300">
                        <Award className="w-3 h-3 text-brand-yellow" />
                        <span>{player.squadTier}</span>
                      </div>
                    </div>

                    {/* Physical Vitals Bar */}
                    <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-neutral-950/70 border border-neutral-800 text-center text-xs">
                      <div>
                        <span className="text-[10px] text-zinc-400 block uppercase font-bold">Height</span>
                        <span className="font-mono font-bold text-white text-[11px]">{player.height.split(' ')[0]}</span>
                      </div>
                      <div className="border-x border-neutral-800">
                        <span className="text-[10px] text-zinc-400 block uppercase font-bold">Age</span>
                        <span className="font-mono font-bold text-white text-[11px]">{player.age} yrs</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-400 block uppercase font-bold">Wingspan</span>
                        <span className="font-mono font-bold text-white text-[11px]">{player.wingspan}</span>
                      </div>
                    </div>

                    {/* Key Stats Bar (PPG, 2-Pt %, 1-Pt %, Efficiency) */}
                    <div className="space-y-2 pt-1 border-t border-neutral-800/80">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-400 font-bold uppercase tracking-wider text-[10px]">
                          Key 3x3 Stats:
                        </span>
                        <span className="text-brand-orange font-mono font-extrabold text-[11px]">
                          {player.stats.ppg} PPG
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                          <span className="text-[9px] text-zinc-400 block uppercase font-extrabold">2-Pt Arc</span>
                          <span className="text-xs font-mono font-black text-brand-yellow">
                            {player.stats.twoPointAccuracy}
                          </span>
                        </div>
                        <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                          <span className="text-[9px] text-zinc-400 block uppercase font-extrabold">1-Pt / Paint</span>
                          <span className="text-xs font-mono font-black text-brand-cyan">
                            {player.stats.onePointAccuracy}
                          </span>
                        </div>
                        <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                          <span className="text-[9px] text-zinc-400 block uppercase font-extrabold">Efficiency</span>
                          <span className="text-xs font-mono font-black text-emerald-400">
                            +{player.stats.efficiencyRating}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Key Strengths Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {player.keyStrengths.slice(0, 3).map((strength) => (
                        <span
                          key={strength}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-neutral-800 text-zinc-300 border border-neutral-700/60"
                        >
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="pt-5 mt-5 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveDossier(player)}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-orange hover:text-brand-orange-glow transition-colors"
                    >
                      <span>Scouting Dossier</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={player.fibaProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-zinc-300 hover:text-white border border-neutral-800 text-[11px] font-bold uppercase tracking-wider transition-all"
                    >
                      <span>FIBA Profile</span>
                      <ExternalLink className="w-3 h-3 text-brand-orange" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Callout Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-surface/90 to-neutral-900/90 border border-neutral-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-orange mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span>National Scouting Committee Open Call</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white uppercase italic tracking-tight">
              Think You Have What It Takes For The National Pool?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Submit your verified FIBA 3x3 profile, game footage, and physical metrics for evaluation by the national coaching committee.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/events#register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-glow text-black font-black uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(255,85,0,0.5)] hover:shadow-[0_0_35px_rgba(255,85,0,0.8)] transition-all transform hover:-translate-y-0.5 duration-200"
            >
              <span>Submit Scouting Profile</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            <a
              href="https://play.fiba3x3.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-zinc-200 hover:text-white border border-neutral-700 font-bold uppercase tracking-wider text-xs transition-all"
            >
              <span>Create FIBA Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-brand-orange" />
            </a>
          </div>
        </div>

      </div>

      {/* Scouting Dossier Modal */}
      {activeDossier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-700 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] space-y-6">
            
            {/* Close button */}
            <button
              onClick={() => setActiveDossier(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-800 text-zinc-400 hover:text-white hover:bg-neutral-700 transition-colors"
              aria-label="Close dossier"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4">
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeDossier.avatarColor} p-0.5 shadow-lg shrink-0`}
              >
                <div className="w-full h-full rounded-[14px] bg-neutral-950 flex flex-col items-center justify-center text-white">
                  <span className="text-base font-black text-brand-orange font-mono">
                    {activeDossier.jerseyNumber}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-zinc-400">
                    {activeDossier.gender}
                  </span>
                </div>
              </div>

              <div className="space-y-1.5 flex-1 pr-6">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${
                    getBadgeColors(activeDossier.divisionBadge).bg
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{activeDossier.divisionBadge}</span>
                </span>

                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tight">
                  {activeDossier.name}
                </h3>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                    {activeDossier.hometown}, Ethiopia
                  </span>
                  <span>•</span>
                  <span className="text-brand-cyan font-bold uppercase">{activeDossier.position}</span>
                  <span>•</span>
                  <span className="font-mono text-brand-yellow font-bold">
                    {activeDossier.stats.fibaRankingPoints.toLocaleString()} FIBA Pts
                  </span>
                </div>
              </div>
            </div>

            {/* National Squad Status & Pathway */}
            <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 uppercase font-black tracking-wider">Official Squad Tier:</span>
                <span className="text-brand-yellow font-black uppercase tracking-wider">
                  {activeDossier.squadTier}
                </span>
              </div>
              <div className="flex items-start justify-between text-xs pt-2 border-t border-neutral-800/70 gap-4">
                <span className="text-zinc-400 uppercase font-black tracking-wider shrink-0">National Pathway:</span>
                <span className="text-zinc-200 text-right font-medium">{activeDossier.pathwayFocus}</span>
              </div>
            </div>

            {/* Vitals Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-zinc-400 uppercase font-bold block">Height</span>
                <span className="text-sm font-mono font-black text-white">{activeDossier.height}</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-zinc-400 uppercase font-bold block">Wingspan</span>
                <span className="text-sm font-mono font-black text-white">{activeDossier.wingspan}</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-zinc-400 uppercase font-bold block">Age</span>
                <span className="text-sm font-mono font-black text-white">{activeDossier.age} Years</span>
              </div>
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                <span className="text-[10px] text-zinc-400 uppercase font-bold block">Tier Rank</span>
                <span className="text-sm font-mono font-black text-brand-orange">#{activeDossier.nationalRanking} National</span>
              </div>
            </div>

            {/* Detailed Technical Evaluation */}
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-brand-cyan flex items-center gap-1.5">
                <Activity className="w-4 h-4" />
                <span>Technical Scouting Evaluation</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-neutral-950/60 p-4 rounded-xl border border-neutral-800/80">
                {activeDossier.scoutingEvaluation}
              </p>
            </div>

            {/* Strengths Breakdown */}
            <div className="space-y-2">
              <h4 className="text-xs font-black uppercase tracking-wider text-brand-orange flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Key Development Competencies</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeDossier.keyStrengths.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-bold px-3 py-1 rounded-lg bg-neutral-950 border border-brand-orange/30 text-zinc-200"
                  >
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={activeDossier.fibaProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-glow text-black font-black uppercase text-xs tracking-wider transition-all shadow-[0_0_20px_rgba(255,85,0,0.4)]"
              >
                <span>View Full FIBA Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => setActiveDossier(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-zinc-300 hover:text-white font-bold uppercase text-xs tracking-wider transition-all"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
