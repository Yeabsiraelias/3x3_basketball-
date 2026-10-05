'use client';

import React, { useState, useMemo } from 'react';
import { tourCities, TourCity } from '@/src/data/tourCities';
import {
  MapPin,
  Search,
  Flame,
  Globe2,
  Trophy,
  Sparkles,
  Layers,
  ArrowRight,
  Calendar,
  X,
} from 'lucide-react';
import Link from 'next/link';

interface TourSectionProps {
  className?: string;
  showHeading?: boolean;
  compact?: boolean;
}

export default function TourSection({
  className = '',
  showHeading = true,
  compact = false,
}: TourSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Extract unique regions dynamically
  const uniqueRegions = useMemo(() => {
    const regions = Array.from(new Set(tourCities.map((c) => c.region)));
    return ['All', ...regions];
  }, []);

  // Filter cities by search term (English or Amharic) and selected region
  const filteredCities = useMemo(() => {
    return tourCities.filter((city) => {
      const matchesRegion =
        selectedRegion === 'All' || city.region === selectedRegion;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        city.name.toLowerCase().includes(query) ||
        city.amharicName.includes(query) ||
        city.region.toLowerCase().includes(query);

      return matchesRegion && matchesSearch;
    });
  }, [searchQuery, selectedRegion]);

  return (
    <section
      id="tour-roadmap"
      className={`relative w-full overflow-hidden ${className}`}
      aria-label="3x3 Ethiopia Nationwide Tour & Regional Cities Roadmap"
    >
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 sm:w-[450px] h-72 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-5 right-5 w-48 h-48 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Section Header */}
      {showHeading && (
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-5 sm:mb-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-[11px] font-black uppercase tracking-widest shadow-sm">
              <Flame className="w-3 h-3 fill-brand-orange" />
              <span>National 3x3 Tour Roadmap</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black uppercase italic tracking-tight text-white leading-tight">
              Nationwide 3x3 Tour:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orange-glow to-brand-yellow">
                24 Cities Across Ethiopia
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              Sanctioning official FIBA courts, building grassroots circuits, and empowering local talent across all 24 tour destinations.
            </p>
          </div>

          {/* Key Stats Counter */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="px-3 py-1.5 rounded-xl bg-surface/90 border border-surface-border text-center min-w-[70px]">
              <span className="block text-lg sm:text-xl font-black text-brand-orange font-mono leading-none">
                24
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-400">
                Cities
              </span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-surface/90 border border-surface-border text-center min-w-[70px]">
              <span className="block text-lg sm:text-xl font-black text-brand-cyan font-mono leading-none">
                10+
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-400">
                Regions
              </span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-surface/90 border border-surface-border text-center min-w-[70px]">
              <span className="block text-lg sm:text-xl font-black text-emerald-400 font-mono leading-none">
                100%
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider text-zinc-400">
                FIBA
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Filter & Search Bar */}
      <div className="mb-4 space-y-2.5">
        <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search city in English or Amharic..."
              className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-surface/90 border border-surface-border focus:border-brand-orange text-white text-xs placeholder:text-zinc-500 outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="text-[10px] text-zinc-400 flex items-center gap-1">
            <Globe2 className="w-3 h-3 text-brand-orange" />
            <span>
              <strong className="text-white">{filteredCities.length}</strong> of{' '}
              <strong className="text-white">{tourCities.length}</strong> Tour Destinations
            </span>
          </div>
        </div>

        {/* Region Filter Chips */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-surface-border">
          {uniqueRegions.map((region) => {
            const isSelected = selectedRegion === region;
            const count =
              region === 'All'
                ? tourCities.length
                : tourCities.filter((c) => c.region === region).length;

            return (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-brand-orange text-black border-brand-orange shadow-[0_0_10px_rgba(255,85,0,0.3)]'
                    : 'bg-surface/80 text-zinc-300 border-surface-border hover:border-brand-orange/40 hover:text-white'
                }`}
              >
                <span>{region}</span>
                <span
                  className={`px-1 rounded text-[8px] font-mono font-bold ${
                    isSelected ? 'bg-black/25 text-black' : 'bg-surface-light text-zinc-400'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cities Grid Layout - Compact & Well Proportioned */}
      {filteredCities.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {filteredCities.map((city: TourCity) => {
            const isHost = city.status === 'Host City';
            const isScheduled = city.status === 'Scheduled';

            return (
              <div
                key={city.id}
                className={`group relative rounded-lg p-2.5 bg-surface/90 border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm hover:-translate-y-0.5 ${
                  isHost
                    ? 'border-brand-orange/50 hover:border-brand-orange bg-gradient-to-b from-brand-orange/10 via-surface to-surface hover:shadow-[0_0_15px_rgba(255,85,0,0.2)]'
                    : 'border-surface-border hover:border-brand-orange/40 hover:shadow-[0_0_12px_rgba(255,85,0,0.1)]'
                }`}
              >
                {/* Ambient Top Glow Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 transition-opacity ${
                    isHost
                      ? 'bg-gradient-to-r from-brand-orange to-brand-yellow opacity-100'
                      : 'bg-gradient-to-r from-brand-orange/30 to-brand-cyan/30 opacity-0 group-hover:opacity-100'
                  }`}
                />

                {/* Top ID Number and Status Badge */}
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="font-mono text-[9px] font-bold text-zinc-500 group-hover:text-brand-orange transition-colors">
                    #{city.id.padStart(2, '0')}
                  </span>

                  {isHost ? (
                    <span className="px-1 py-0.2 rounded text-[8px] font-black uppercase tracking-wider bg-brand-orange text-black flex items-center gap-0.5">
                      <Sparkles className="w-2 h-2" />
                      <span>Host</span>
                    </span>
                  ) : isScheduled ? (
                    <span className="px-1 py-0.2 rounded text-[8px] font-bold uppercase tracking-wider bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 flex items-center gap-0.5">
                      <Calendar className="w-2 h-2" />
                      <span>Scheduled</span>
                    </span>
                  ) : (
                    <span className="px-1 py-0.2 rounded text-[8px] font-bold uppercase tracking-wider bg-zinc-800/80 text-zinc-400 border border-white/5 flex items-center gap-0.5">
                      <MapPin className="w-2 h-2 text-brand-orange" />
                      <span>Upcoming</span>
                    </span>
                  )}
                </div>

                {/* City Titles: English & Amharic */}
                <div className="space-y-0 mb-2">
                  <h3 className="text-xs sm:text-sm font-black text-white uppercase italic tracking-tight group-hover:text-brand-orange transition-colors truncate">
                    {city.name}
                  </h3>
                  <p className="text-[11px] font-bold text-brand-orange-glow tracking-wide font-sans truncate">
                    {city.amharicName}
                  </p>
                </div>

                {/* Region Footer */}
                <div className="pt-1.5 border-t border-surface-border/60 flex items-center justify-between text-[9px] text-zinc-400">
                  <div className="flex items-center gap-1 truncate">
                    <Layers className="w-2.5 h-2.5 text-brand-cyan shrink-0" />
                    <span className="font-medium truncate">{city.region}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-lg p-5 bg-surface/60 border border-surface-border text-center space-y-1.5">
          <MapPin className="w-5 h-5 text-zinc-500 mx-auto" />
          <h4 className="text-xs font-black text-white uppercase">
            No Destinations Found
          </h4>
          <p className="text-[11px] text-zinc-400 max-w-xs mx-auto">
            No city matches &quot;{searchQuery}&quot;.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedRegion('All');
            }}
            className="mt-1 px-2.5 py-1 rounded bg-brand-orange text-black font-black uppercase text-[10px] tracking-wider hover:bg-brand-orange-glow transition-all"
          >
            Reset
          </button>
        </div>
      )}

      {/* Tour Host Callout Banner */}
      <div className="mt-5 rounded-xl bg-gradient-to-r from-surface via-surface-light to-surface border border-surface-border p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="space-y-0.5 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-1 text-brand-orange text-[10px] font-black uppercase tracking-wider">
            <Trophy className="w-3 h-3 text-brand-yellow" />
            <span>Community Tour Stop Inquiries</span>
          </div>
          <h4 className="text-xs sm:text-sm font-black text-white uppercase italic">
            Want to Host a 3x3 Qualifier in Your City?
          </h4>
          <p className="text-[11px] text-zinc-300 max-w-md leading-relaxed">
            Partner with us to build FIBA-sanctioned half-courts and host official regional qualifiers.
          </p>
        </div>

        <Link
          href="/events"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-orange text-black font-black uppercase text-[11px] tracking-wider hover:bg-brand-orange-glow transition-all shadow-sm shrink-0 group"
        >
          <span>Explore All 24 Tour Cities</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
