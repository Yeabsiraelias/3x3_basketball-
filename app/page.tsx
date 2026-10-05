import React from 'react';
import Link from 'next/link';
import CountdownTimer from '@/components/CountdownTimer';
import SponsorTicker from '@/components/SponsorTicker';
import FibaRegistrationCallout from '@/components/FibaRegistrationCallout';
import TourSection from '@/src/components/TourSection';
import LeadershipSection from '@/src/components/LeadershipSection';
import {
  Flame,
  Trophy,
  Users,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Dynamic Glow Accents */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 sm:w-[600px] h-72 sm:h-[400px] bg-brand-orange/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 right-10 w-48 h-48 bg-brand-cyan/15 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Top FIBA Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 border border-brand-orange/40 text-brand-orange text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg">
            <Flame className="w-4 h-4 fill-brand-orange" />
            <span>Official FIBA-Endorsed 3x3 Platform</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
            <span className="text-white">Ethiopia</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase italic tracking-tight text-white leading-none">
            ETHIOPIA&apos;S URBAN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-orange-glow to-brand-yellow text-glow">
              3x3 BASKETBALL
            </span>{' '}
            REVOLUTION
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed">
            From neighborhood street courts to official FIBA Quest Finals. Empowering youth, building certified champions, and putting Ethiopia on the global 3x3 map.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://play.fiba3x3.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-glow text-black font-black uppercase tracking-wider text-sm shadow-[0_0_35px_rgba(255,85,0,0.6)] hover:shadow-[0_0_45px_rgba(255,85,0,0.9)] transition-all transform hover:-translate-y-0.5 duration-200"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>Register FIBA Profile</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/events"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-surface hover:bg-surface-light text-white border border-surface-border hover:border-brand-orange/50 font-bold uppercase tracking-wider text-sm transition-all"
            >
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Explore Tour Cities</span>
            </Link>
          </div>

          {/* Launch Countdown Component */}
          <div className="pt-6">
            <CountdownTimer targetDate="2026-11-20T00:00:00" />
          </div>
        </div>
      </section>

      {/* 2. SPONSOR TICKER */}
      <SponsorTicker />

      {/* 3. KEY HIGHLIGHT STATS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-surface/80 border border-surface-border text-center">
            <span className="block text-3xl sm:text-5xl font-black text-white font-mono text-glow">
              100%
            </span>
            <span className="text-xs uppercase font-extrabold tracking-wider text-zinc-400 mt-2 block">
              FIBA 3x3 Endorsed
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-surface/80 border border-surface-border text-center">
            <span className="block text-3xl sm:text-5xl font-black text-brand-orange font-mono">
              24
            </span>
            <span className="text-xs uppercase font-extrabold tracking-wider text-zinc-400 mt-2 block">
              Tour Cities in 2026/27
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-surface/80 border border-surface-border text-center">
            <span className="block text-3xl sm:text-5xl font-black text-brand-cyan font-mono">
              500+
            </span>
            <span className="text-xs uppercase font-extrabold tracking-wider text-zinc-400 mt-2 block">
              Youth Athletes Targeted
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-surface/80 border border-surface-border text-center">
            <span className="block text-3xl sm:text-5xl font-black text-emerald-400 font-mono">
              3
            </span>
            <span className="text-xs uppercase font-extrabold tracking-wider text-zinc-400 mt-2 block">
              Divisions (U18, U23, Open)
            </span>
          </div>
        </div>
      </section>

      {/* 4. NATIONAL 3x3 TOUR & REGIONAL ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <TourSection />
      </section>

      {/* 5. FIBA PROFILE REGISTRATION CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FibaRegistrationCallout />
      </section>

      {/* 6. YOUTH & COMMUNITY DEVELOPMENT TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-surface/60 border border-surface-border p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-brand-cyan">
                National Grassroots Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tight">
                Empowering Youth Beyond the Basketball Court
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                3x3 Ethiopia is more than a tournament organizer—we are National Game Organizers transforming urban communities through basketball clinics, certified referee pathways, and gender empowerment.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-3 text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Free U18 clinics across public school courts</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span><strong>&quot;Her Court&quot;</strong> dedicated female 3x3 leadership camps</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                  <span>Official FIBA Table Official & Referee Certification</span>
                </div>
              </div>
              <div className="pt-4">
                <Link
                  href="/development"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-light hover:bg-brand-orange hover:text-black text-white font-black uppercase tracking-wider text-xs border border-surface-border transition-all"
                >
                  <span>Learn About Development Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-background/80 border border-surface-border">
                <Users className="w-6 h-6 text-brand-orange mb-3" />
                <h4 className="text-base font-black text-white uppercase">U18 / U23 Clinics</h4>
                <p className="text-xs text-zinc-400 mt-1">Fundamental 3x3 tactical skills, fitness, and tournament readiness.</p>
              </div>

              <div className="p-5 rounded-2xl bg-background/80 border border-surface-border">
                <Sparkles className="w-6 h-6 text-brand-yellow mb-3" />
                <h4 className="text-base font-black text-white uppercase">Her Court</h4>
                <p className="text-xs text-zinc-400 mt-1">Female-led workshops promoting gender inclusion and coaching.</p>
              </div>

              <div className="p-5 rounded-2xl bg-background/80 border border-surface-border">
                <MapPin className="w-6 h-6 text-brand-cyan mb-3" />
                <h4 className="text-base font-black text-white uppercase">Regional Tours</h4>
                <p className="text-xs text-zinc-400 mt-1">Hawassa, Bahir Dar, Dire Dawa, and Addis Ababa grassroots reach.</p>
              </div>

              <div className="p-5 rounded-2xl bg-background/80 border border-surface-border">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="text-base font-black text-white uppercase">Official Academies</h4>
                <p className="text-xs text-zinc-400 mt-1">Training youth to become certified FIBA scorekeepers and referees.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LEADERSHIP COMMITTEE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <LeadershipSection preview={true} />
      </section>

    </div>
  );
}
