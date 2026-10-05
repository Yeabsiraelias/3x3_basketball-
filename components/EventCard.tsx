import React from 'react';
import Link from 'next/link';
import { Tournament } from '@/lib/types';
import { Calendar, MapPin, Trophy, ShieldCheck, ArrowRight } from 'lucide-react';

interface EventCardProps {
  tournament: Tournament;
}

export default function EventCard({ tournament }: EventCardProps) {
  const isQuestFinal = tournament.event_type === 'Quest Final';
  const isLiteQuest = tournament.event_type === 'Lite Quest';
  const isClinic = tournament.event_type === 'Clinic';

  const badgeColor = isQuestFinal
    ? 'bg-brand-orange/20 text-brand-orange border-brand-orange/40'
    : isLiteQuest
    ? 'bg-brand-cyan/20 text-brand-cyan border-brand-cyan/40'
    : 'bg-brand-green/20 text-brand-green border-brand-green/40';

  const formattedDate = new Date(tournament.event_date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="relative group rounded-2xl bg-surface/90 border border-surface-border hover:border-brand-orange/50 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden backdrop-blur-sm hover:shadow-[0_10px_30px_rgba(255,85,0,0.15)]">
      {/* Subtle top indicator bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 ${
          isQuestFinal
            ? 'bg-gradient-to-r from-brand-orange to-brand-yellow'
            : isLiteQuest
            ? 'bg-gradient-to-r from-brand-cyan to-blue-500'
            : 'bg-gradient-to-r from-brand-green to-emerald-500'
        }`}
      />

      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`px-2.5 py-1 rounded-md text-xs font-black uppercase tracking-wider border ${badgeColor}`}>
            {tournament.event_type}
          </span>
          {tournament.fiba_event_maker_id && (
            <span className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-background/60 px-2 py-0.5 rounded border border-surface-border">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
              {tournament.fiba_event_maker_id}
            </span>
          )}
        </div>

        <h3 className="text-xl font-black text-white group-hover:text-brand-orange transition-colors tracking-tight line-clamp-2 mb-3">
          {tournament.event_name}
        </h3>

        <div className="space-y-2 mb-6 text-sm text-zinc-300">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-4 h-4 text-brand-orange shrink-0" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
            <span className="line-clamp-1">{tournament.location}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-surface-border/80 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Registration Open
        </span>

        <Link
          href={`/events?select=${tournament.tournament_id}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-surface-light hover:bg-brand-orange hover:text-black text-white border border-surface-border group-hover:border-brand-orange transition-all"
        >
          <span>Register</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
