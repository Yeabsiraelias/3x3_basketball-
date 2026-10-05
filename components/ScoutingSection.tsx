'use client';

import React from 'react';
import Link from 'next/link';
import { scoutingCategories, ScoutingCategory } from '@/src/data/scouting';
import {
  Target,
  Trophy,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
  Zap,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface ScoutingSectionProps {
  className?: string;
  categories?: ScoutingCategory[];
}

const divisionIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'U16 Junior Circuit': Zap,
  'U18 Elite Pathway': Target,
  'U23 National Roster Pool': Trophy,
};

export default function ScoutingSection({
  className = '',
  categories = scoutingCategories,
}: ScoutingSectionProps) {
  return (
    <section
      id="scouting"
      aria-label="National Scouting Program"
      className={`relative w-full overflow-hidden scroll-mt-24 ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 sm:w-[500px] h-80 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Target className="w-3.5 h-3.5" />
            <span>National Talent Identification Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase italic tracking-tight text-white leading-none">
            National <span className="text-brand-orange text-glow">Scouting</span> Program
          </h2>

          <p className="text-sm sm:text-lg text-zinc-300 font-medium leading-relaxed italic">
            Identifying and developing premier Ethiopian basketball talent across U16, U18, and U23 divisions for both Men and Women.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = divisionIcons[category.division] || Trophy;

            return (
              <div
                key={category.division}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-brand-orange/60 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,85,0,0.15)] hover:-translate-y-1"
              >
                {/* Top Bar: Icon, Age Bracket & Badges */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-brand-orange group-hover:border-brand-orange/40 group-hover:bg-brand-orange/10 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700 text-zinc-300">
                      {category.ageBracket}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-brand-orange transition-colors">
                      {category.division}
                    </h3>
                  </div>

                  {/* Badges / Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                      <Users className="w-3 h-3" />
                      <span>{category.genders.join(' & ')}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30">
                      <Sparkles className="w-3 h-3" />
                      <span>FIBA Pathway</span>
                    </span>
                  </div>

                  {/* Focus & Pathway Content */}
                  <div className="space-y-4 pt-3 border-t border-neutral-800/80">
                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-cyan mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                        <span>Target Focus</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {category.targetFocus}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[11px] font-black uppercase tracking-widest text-brand-orange mb-1.5 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span>Advancement Pathway</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {category.pathway}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer status pill */}
                <div className="pt-6 mt-6 border-t border-neutral-800/60 flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5 font-semibold text-zinc-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Active Evaluation</span>
                  </span>
                  <span className="text-[11px] font-mono uppercase text-brand-orange">
                    2026/27 Cycle
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-surface/90 to-neutral-900/90 border border-neutral-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-black text-white uppercase italic tracking-tight">
              Ready to Join the National Evaluation Pool?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              Submit your player profile, physical vitals, and game film for official technical review by our coaching committee.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/events#register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-glow text-black font-black uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(255,85,0,0.5)] hover:shadow-[0_0_35px_rgba(255,85,0,0.8)] transition-all transform hover:-translate-y-0.5 duration-200"
            >
              <span>Register for Scouting</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://play.fiba3x3.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-zinc-200 hover:text-white border border-neutral-700 font-bold uppercase tracking-wider text-xs transition-all"
            >
              <span>FIBA 3x3 Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
