'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate = '2026-11-20T00:00:00' }: { targetDate?: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 47,
    hours: 14,
    minutes: 32,
    seconds: 18,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetDate).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mx-auto p-4 sm:p-6 rounded-2xl bg-surface/90 border border-brand-orange/40 backdrop-blur-md shadow-[0_0_35px_rgba(255,85,0,0.25)] relative overflow-hidden">
      {/* Background glow streak */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-surface-border">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-brand-orange animate-bounce" />
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
            Official Late 2026 Circuit Launch
          </span>
        </div>
        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
          COUNTDOWN
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {timeBlocks.map((block) => (
          <div
            key={block.label}
            className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl bg-background/80 border border-surface-border shadow-inner"
          >
            <span className="text-2xl sm:text-4xl font-black text-white font-mono tracking-tight text-glow">
              {mounted ? String(block.value).padStart(2, '0') : '00'}
            </span>
            <span className="text-[9px] sm:text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 mt-1">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
