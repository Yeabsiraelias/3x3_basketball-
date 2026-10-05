import React from 'react';
import { SPONSORS } from '@/lib/mockData';
import { Shield, Sparkles } from 'lucide-react';

export default function SponsorTicker() {
  // Duplicate for seamless infinite scrolling loop
  const tickerItems = [...SPONSORS, ...SPONSORS];

  return (
    <div className="w-full py-6 bg-surface-light/40 border-y border-surface-border overflow-hidden relative backdrop-blur-sm">
      {/* Edge gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-yellow" />
          <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
            Endorsed & Supported By Official Partners
          </span>
        </div>
      </div>

      <div className="flex w-max animate-ticker-slide space-x-6 sm:space-x-8">
        {tickerItems.map((sponsor, index) => (
          <div
            key={`${sponsor.name}-${index}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-surface/80 border border-surface-border hover:border-brand-orange/50 transition-all group shrink-0"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-light flex items-center justify-center border border-surface-border group-hover:border-brand-orange/40 text-brand-orange">
              <Shield className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black tracking-wide text-white group-hover:text-brand-orange transition-colors">
                {sponsor.name}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                {sponsor.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
