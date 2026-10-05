import React from 'react';
import { ExternalLink, ShieldCheck, Trophy, UserCheck, Flame } from 'lucide-react';

export default function FibaRegistrationCallout() {
  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-surface to-surface-light border-2 border-brand-orange/40 p-8 sm:p-12 shadow-[0_0_50px_rgba(255,85,0,0.2)]">
      {/* Background Graphic Elements */}
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
        <Flame className="w-96 h-96 text-brand-orange" />
      </div>

      <div className="relative z-10 max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-brand-orange text-xs font-black uppercase tracking-widest">
          <ShieldCheck className="w-4 h-4" />
          Official FIBA 3x3 Requirement
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight leading-tight">
          GET YOUR OFFICIAL <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-yellow to-white">
            FIBA 3x3 PLAYER PROFILE
          </span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Every player competing in 3x3 Ethiopia tournaments, Lite Quests, and Quest Finals must possess a verified FIBA 3x3 profile. Earn individual ranking points, track your stats globally, and qualify for the Ethiopian National 3x3 Team.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-background/60 border border-surface-border">
            <Trophy className="w-5 h-5 text-brand-yellow mb-2" />
            <h4 className="text-sm font-bold text-white uppercase">Earn Points</h4>
            <p className="text-xs text-zinc-400 mt-1">Accumulate official FIBA individual ranking points per match.</p>
          </div>

          <div className="p-4 rounded-xl bg-background/60 border border-surface-border">
            <UserCheck className="w-5 h-5 text-brand-cyan mb-2" />
            <h4 className="text-sm font-bold text-white uppercase">National Scouting</h4>
            <p className="text-xs text-zinc-400 mt-1">Get scouted for national U18, U23, and Senior selections.</p>
          </div>

          <div className="p-4 rounded-xl bg-background/60 border border-surface-border">
            <Flame className="w-5 h-5 text-brand-orange mb-2" />
            <h4 className="text-sm font-bold text-white uppercase">Global Circuit</h4>
            <p className="text-xs text-zinc-400 mt-1">Direct pathway from Ethiopian Quests to FIBA 3x3 World Tour.</p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="https://play.fiba3x3.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-glow text-black font-black uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(255,85,0,0.6)] hover:shadow-[0_0_40px_rgba(255,85,0,0.9)] transition-all transform hover:-translate-y-0.5 duration-200"
          >
            <span>Create Free FIBA Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <span className="text-xs font-semibold text-zinc-400">
            Takes less than 2 minutes on <span className="text-white font-mono">play.fiba3x3.com</span>
          </span>
        </div>
      </div>
    </div>
  );
}
