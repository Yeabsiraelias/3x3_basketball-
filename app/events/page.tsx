import React from 'react';
import TourSection from '@/src/components/TourSection';
import type { Metadata } from 'next';
import { Flame, MapPin, Globe2, ShieldCheck, Trophy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nationwide 3x3 Tour Cities & Regional Roadmap | 3x3 Ethiopia',
  description:
    'Explore all 24 confirmed tour cities and regional roadmap across Ethiopia for official FIBA 3x3 basketball development.',
};

export default function CitiesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-black uppercase tracking-widest">
          <Flame className="w-4 h-4 fill-brand-orange" />
          <span>Official 2026/27 Regional Tour</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase italic text-white tracking-tight">
          24 Tour Cities & <span className="text-brand-orange">Roadmap</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Bringing FIBA 3x3 basketball directly to communities across Ethiopia. Explore all 24 confirmed tour destinations, regional qualifiers, and host cities.
        </p>
      </div>

      {/* Tour Cities Component */}
      <TourSection showHeading={false} />

      {/* FIBA Endorsement info bar */}
      <div className="p-6 rounded-2xl bg-surface-light/40 border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
          <span>
            Every tour city is homologated using <strong>FIBA 3x3 Event Maker</strong>. Results and individual player statistics are officially registered on the global FIBA ranking network.
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
