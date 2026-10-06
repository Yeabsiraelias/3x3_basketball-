import React from 'react';
import type { Metadata } from 'next';
import PlayerProfiles from '@/src/components/PlayerProfiles';
import { ShieldCheck, Flame, Trophy, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'National Team Player Profiles | U16, U18 & U23 Pool | 3x3 Ethiopia',
  description:
    'Official FIBA 3x3 Ethiopia National Team scouting pool. Browse evaluated athletes across U16, U18, and U23 junior and youth squad tiers for Men and Women.',
};

export default function ProfilesPage() {
  return (
    <div className="flex flex-col space-y-12 sm:space-y-16 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-10 sm:pt-16 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center">
        {/* Glow Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 sm:w-[600px] h-60 sm:h-[300px] bg-brand-orange/15 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-black uppercase tracking-widest">
            <Flame className="w-4 h-4 fill-brand-orange" />
            <span>Official FIBA-Endorsed Scouting Pool</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black uppercase italic tracking-tight text-white leading-none">
            NATIONAL TEAM <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-yellow to-white text-glow">
              PLAYER PROFILES
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover the premier talent scouted across Ethiopia for the <span className="text-white font-bold">U16, U18, and U23 National Team Pools</span> in both Men&apos;s and Women&apos;s divisions.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-900 border border-neutral-800 text-zinc-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified FIBA 3x3 Ranking Points
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-neutral-900 border border-neutral-800 text-zinc-300">
              <Trophy className="w-3.5 h-3.5 text-brand-orange" />
              Nations League &amp; Africa Cup Pathway
            </span>
          </div>
        </div>
      </section>

      {/* 2. MAIN PROFILES COMPONENT WITH TAB FILTERING */}
      <PlayerProfiles showTitle={false} />

    </div>
  );
}
