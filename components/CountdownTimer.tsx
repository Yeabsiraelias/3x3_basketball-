'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Flame, ArrowRight } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CountdownTimerProps {
  targetDate?: string;
  expiredLabel?: string;
  className?: string;
}

/**
 * Parses any ISO 8601 string with or without timezone offset.
 * If no timezone offset or Z suffix is provided, defaults to East Africa Time (UTC+3, Ethiopia).
 */
function parseTargetDate(dateStr: string): number {
  const trimmed = dateStr.trim();
  // Check for timezone offset pattern like +03:00, +0300, -05:00, or Z
  const hasTimezone = /([+-]\d{2}(:?\d{2})?|Z)$/i.test(trimmed);
  const normalized = hasTimezone ? trimmed : `${trimmed}+03:00`;
  const parsed = new Date(normalized).getTime();
  return isNaN(parsed) ? new Date(trimmed).getTime() : parsed;
}

export default function CountdownTimer({
  targetDate = '2026-11-20T00:00:00+03:00',
  expiredLabel = "We're live!",
  className = '',
}: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isExpired, setIsExpired] = useState(false);
  const [srSummary, setSrSummary] = useState<string>('');

  useEffect(() => {
    const targetMs = parseTargetDate(targetDate);
    if (isNaN(targetMs)) {
      setIsExpired(true);
      setMounted(true);
      return;
    }

    let lastMinuteKey = '';

    const calculate = (): boolean => {
      const now = Date.now();
      const diff = targetMs - now;

      if (diff <= 0) {
        setIsExpired(true);
        setTimeLeft(null);
        setSrSummary(`${expiredLabel} Official circuit launch has started.`);
        return false;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
      setIsExpired(false);

      // Accessibility: update full-sentence announcement only once per minute
      const minuteKey = `${days}-${hours}-${minutes}`;
      if (minuteKey !== lastMinuteKey) {
        lastMinuteKey = minuteKey;
        let summaryText = '';
        if (days > 0) {
          summaryText = `${days} ${days === 1 ? 'day' : 'days'}, ${hours} ${hours === 1 ? 'hour' : 'hours'} until launch`;
        } else if (hours > 0) {
          summaryText = `${hours} ${hours === 1 ? 'hour' : 'hours'}, ${minutes} ${minutes === 1 ? 'minute' : 'minutes'} until launch`;
        } else {
          summaryText = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} until launch`;
        }
        setSrSummary(summaryText);
      }

      return true;
    };

    // Calculate synchronously on mount to avoid delay
    const isRunning = calculate();
    setMounted(true);

    if (!isRunning) {
      return;
    }

    const intervalId = setInterval(() => {
      const keepGoing = calculate();
      if (!keepGoing) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, expiredLabel]);

  const timeBlocks = [
    {
      label: 'DAYS',
      value: mounted && timeLeft ? (timeLeft.days < 10 ? `0${timeLeft.days}` : String(timeLeft.days)) : '--',
    },
    {
      label: 'HOURS',
      value: mounted && timeLeft ? String(timeLeft.hours).padStart(2, '0') : '--',
    },
    {
      label: 'MINUTES',
      value: mounted && timeLeft ? String(timeLeft.minutes).padStart(2, '0') : '--',
    },
    {
      label: 'SECONDS',
      value: mounted && timeLeft ? String(timeLeft.seconds).padStart(2, '0') : '--',
    },
  ];

  return (
    <div
      role="timer"
      aria-live="off"
      className={`w-full max-w-xl mx-auto p-4 sm:p-6 rounded-2xl bg-surface/90 border border-brand-orange/40 backdrop-blur-md shadow-[0_0_35px_rgba(255,85,0,0.25)] relative overflow-hidden ${className}`}
    >
      {/* Visually hidden screen reader summary updated only once per minute */}
      <span className="sr-only">
        {mounted
          ? srSummary || (isExpired ? expiredLabel : 'Official Late 2026 Circuit Launch countdown')
          : 'Official Late 2026 Circuit Launch countdown'}
      </span>

      {/* Background glow streaks */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-cyan/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-surface-border">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-brand-orange animate-bounce shrink-0" />
          <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
            Official Late 2026 Circuit Launch
          </span>
        </div>
        <span
          className={`text-[11px] font-bold px-2 py-0.5 rounded border transition-colors shrink-0 ${
            mounted && isExpired
              ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
              : 'bg-brand-orange/15 text-brand-orange border-brand-orange/30'
          }`}
        >
          {mounted && isExpired ? 'LIVE NOW' : 'COUNTDOWN'}
        </span>
      </div>

      {/* Main Content: Expired State vs Active/Placeholder Countdown Grid */}
      {mounted && isExpired ? (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-background/80 border border-surface-border text-center sm:text-left shadow-inner">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tight text-glow">
              {expiredLabel}
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed">
              Official FIBA 3x3 tournaments and national combines are now underway across Ethiopia.
            </p>
          </div>
          <Link
            href="/events"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-glow text-black font-black uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(255,85,0,0.4)] hover:scale-105 transition-all duration-200"
          >
            <span>Explore Events</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {timeBlocks.map((block) => (
            <div
              key={block.label}
              className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl bg-background/80 border border-surface-border shadow-inner min-w-0"
            >
              <span className="text-2xl sm:text-4xl font-black text-white font-mono tracking-tight text-glow tabular-nums truncate">
                {block.value}
              </span>
              <span className="text-[9px] sm:text-[11px] font-extrabold uppercase tracking-widest text-zinc-400 mt-1 truncate">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
