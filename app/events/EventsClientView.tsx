'use client';

import React, { useState } from 'react';
import { Tournament, EventType } from '@/lib/types';
import EventCard from '@/components/EventCard';
import TournamentRegistrationModal from '@/components/TournamentRegistrationModal';
import { Search, Filter, Calendar as CalendarIcon, Grid, PlusCircle, ShieldCheck } from 'lucide-react';

interface Props {
  initialTournaments: Tournament[];
}

export default function EventsClientView({ initialTournaments }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showRegistration, setShowRegistration] = useState<boolean>(false);
  const [activeTournamentId, setActiveTournamentId] = useState<string>(
    initialTournaments[0]?.tournament_id || ''
  );

  const filteredTournaments = initialTournaments.filter((event) => {
    const matchesFilter = selectedFilter === 'All' || event.event_type === selectedFilter;
    const matchesSearch =
      event.event_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filterOptions = ['All', 'Quest Final', 'Lite Quest', 'Clinic'];

  return (
    <div className="space-y-10">
      
      {/* Controls Bar: Filter, Search, and Quick Register Action */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-surface/90 border border-surface-border">
        
        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedFilter === filter
                  ? 'bg-brand-orange text-black shadow-[0_0_15px_rgba(255,85,0,0.4)]'
                  : 'text-zinc-300 hover:text-white bg-surface-light hover:bg-surface-border'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search & Registration Action */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search by city or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background border border-surface-border text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-brand-orange"
            />
          </div>

          <button
            onClick={() => setShowRegistration(!showRegistration)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cyan hover:bg-cyan-400 text-black font-black uppercase text-xs tracking-wider shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all shrink-0"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{showRegistration ? 'Hide Form' : 'Register Squad'}</span>
          </button>
        </div>
      </div>

      {/* Registration Section (Toggleable or In-Page) */}
      {showRegistration && (
        <div className="my-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <TournamentRegistrationModal
            tournaments={initialTournaments}
            selectedTournamentId={activeTournamentId}
            onClose={() => setShowRegistration(false)}
          />
        </div>
      )}

      {/* Events Grid */}
      {filteredTournaments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map((tournament) => (
            <div key={tournament.tournament_id} className="flex flex-col">
              <EventCard tournament={tournament} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 rounded-3xl bg-surface/40 border border-surface-border space-y-3">
          <p className="text-zinc-400 text-sm">No tournaments found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedFilter('All');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-lg bg-surface-light text-brand-orange text-xs font-bold uppercase"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* FIBA Endorsement info bar */}
      <div className="p-6 rounded-2xl bg-surface-light/40 border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
          <span>
            All tournaments are officially homologated using <strong>FIBA 3x3 Event Maker</strong>. Scores and statistics are submitted globally within 24 hours.
          </span>
        </div>
        <a
          href="https://play.fiba3x3.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand-orange hover:underline font-bold uppercase whitespace-nowrap"
        >
          Check FIBA World Ranking →
        </a>
      </div>
    </div>
  );
}
