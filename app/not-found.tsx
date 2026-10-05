import React from 'react';
import Link from 'next/link';
import { Flame, Home, Trophy, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-surface/90 border border-surface-border backdrop-blur-md">
        <div className="w-16 h-16 rounded-2xl bg-brand-orange/20 border border-brand-orange/40 text-brand-orange flex items-center justify-center mx-auto">
          <Flame className="w-8 h-8 fill-brand-orange" />
        </div>
        
        <span className="text-xs font-black uppercase tracking-widest text-brand-orange">
          404 Error • Out of Bounds
        </span>

        <h1 className="text-4xl font-black uppercase italic text-white tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm text-zinc-300">
          The court you are looking for does not exist or has moved. Return to the home court or explore upcoming tournaments.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-orange text-black font-black uppercase text-xs tracking-wider hover:bg-brand-orange-glow transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Home Court</span>
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-light text-white font-bold uppercase text-xs tracking-wider border border-surface-border hover:border-brand-orange transition-all"
          >
            <Trophy className="w-4 h-4 text-brand-yellow" />
            <span>Tournaments</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
