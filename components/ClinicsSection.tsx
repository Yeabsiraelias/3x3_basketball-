'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { clinicPrograms, ClinicSession } from '@/src/data/clinics';
import {
  MapPin,
  Users,
  Target,
  Sparkles,
  ArrowRight,
  Flame,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

interface ClinicsSectionProps {
  className?: string;
  clinics?: ClinicSession[];
  showHeading?: boolean;
}

export default function ClinicsSection({
  className = '',
  clinics = clinicPrograms,
  showHeading = true,
}: ClinicsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Open' | 'Upcoming'>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  // Extract unique regions
  const regions = useMemo(() => {
    return ['All', ...Array.from(new Set(clinics.map((c) => c.region)))];
  }, [clinics]);

  // Filter clinics
  const filteredClinics = useMemo(() => {
    return clinics.filter((c) => {
      const matchesStatus =
        selectedFilter === 'All' || c.status === selectedFilter;
      const matchesRegion =
        selectedRegion === 'All' || c.region === selectedRegion;
      return matchesStatus && matchesRegion;
    });
  }, [clinics, selectedFilter, selectedRegion]);

  return (
    <section
      id="clinics"
      aria-label="3x3 Ethiopia Regional Clinics & Development Camps"
      className={`relative w-full overflow-hidden ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-80 sm:w-[500px] h-80 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 space-y-8">
        {/* Section Header */}
        {showHeading && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-neutral-800">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-black uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5 fill-brand-orange" />
                <span>Grassroots Regional Hubs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tight text-white leading-none">
                Regional <span className="text-brand-orange text-glow">3x3 Clinics</span> & Camps
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed">
                Structured grassroots developmental training, 12-second shot clock tactical drills, and referee clinics across 9 certified regional venues.
              </p>
            </div>

            {/* Quick Status Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {(['All', 'Open', 'Upcoming'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    selectedFilter === filter
                      ? 'bg-brand-orange text-black shadow-[0_0_15px_rgba(255,85,0,0.4)]'
                      : 'bg-neutral-900 text-zinc-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Region Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          <span className="text-neutral-500 font-bold uppercase tracking-wider text-[11px] shrink-0 mr-1">
            Region:
          </span>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-3 py-1 rounded-full whitespace-nowrap font-semibold tracking-wide transition-all ${
                selectedRegion === region
                  ? 'bg-white text-black font-bold'
                  : 'bg-neutral-900/90 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* 9 Regional Clinic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClinics.map((clinic) => {
            const isOpen = clinic.status === 'Open';

            return (
              <div
                key={clinic.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-brand-orange/60 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,85,0,0.14)] hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Top Bar: City, Region & Status */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-brand-orange transition-colors">
                          {clinic.city}
                        </h3>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300">
                          {clinic.region}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                        isOpen
                          ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]'
                          : 'bg-brand-orange/15 text-brand-orange border-brand-orange/30'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-brand-orange'
                        }`}
                      />
                      <span>{clinic.status}</span>
                    </span>
                  </div>

                  {/* Venue Info */}
                  <div className="flex items-start gap-2 text-xs text-zinc-300 pt-1">
                    <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="font-semibold">{clinic.venue}</span>
                  </div>

                  {/* Target Audience Pill */}
                  <div className="flex items-center gap-2 text-xs text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-3 py-1.5 rounded-xl">
                    <Users className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-bold">{clinic.targetAudience}</span>
                  </div>

                  {/* Focus Overview */}
                  <div className="pt-2 border-t border-neutral-800/80">
                    <h4 className="text-[11px] font-black uppercase tracking-widest text-neutral-400 mb-1 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                      <span>Curriculum & Focus</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {clinic.focus}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-5 mt-5 border-t border-neutral-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Free Youth Admission</span>
                  </div>

                  <Link
                    href="/events#register"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-orange hover:text-brand-orange-glow group-hover:translate-x-1 transition-all"
                  >
                    <span>Register</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredClinics.length === 0 && (
          <div className="text-center py-12 rounded-2xl bg-neutral-900/60 border border-neutral-800">
            <p className="text-zinc-400 text-sm">No clinics found matching the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
