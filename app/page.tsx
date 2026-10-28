import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CountdownTimer from '@/components/CountdownTimer';
import EndorsementBanner from '@/src/components/EndorsementBanner';
import FibaRegistrationCallout from '@/components/FibaRegistrationCallout';
import TourSection from '@/src/components/TourSection';
import ScoutingSection from '@/src/components/ScoutingSection';
import PlayerProfiles from '@/src/components/PlayerProfiles';
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

const pastImages = [
  '/images/past-1.jpg', // The main large photo (Ethio Telecom banner court match)
  '/images/past-2.jpg', // Grassroots women's team
  '/images/past-3.jpg', // Grassroots men's team (First uploaded team)
  '/images/past-4.jpg', // Grassroots men's team (Challengers team)
];

const futureImages = [
  '/images/future-1.jpg', // Main AI future vision (e.g., Night tournament)
  '/images/future-2.jpg', // Small AI photo 1 (e.g., Branded court)
  '/images/future-3.jpg', // Small AI photo 2 (e.g., National team action)
];

function VisionSection() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
            Our Journey <span className="text-orange-500">& Vision</span>
          </h2>
        </div>

        {/* Row 1: The Past (Text Left, Collage Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neutral-400 uppercase tracking-wide">The Foundation</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Born on the local courts of Ethiopia, 3x3 Ethiopia began as a grassroots movement driven by a pure passion for the game. We laid a strong, authentic foundation by building the urban basketball community from the ground up.
            </p>
          </div>
          
          {/* Past Images Collage */}
          <div className="grid grid-cols-3 gap-3 group">
            <div className="relative h-48 md:h-64 col-span-3 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition duration-500 border border-neutral-800">
              <Image src={pastImages[0]} alt="Past Event Main" fill className="object-cover" />
            </div>
            <div className="relative h-28 sm:h-36 md:h-44 col-span-1 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition duration-500 border border-neutral-800">
              <Image src={pastImages[1]} alt="Past Event Women Squad" fill className="object-cover" />
            </div>
            <div className="relative h-28 sm:h-36 md:h-44 col-span-1 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition duration-500 border border-neutral-800">
              <Image src={pastImages[2]} alt="Past Event Men Squad" fill className="object-cover" />
            </div>
            <div className="relative h-28 sm:h-36 md:h-44 col-span-1 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition duration-500 border border-neutral-800">
              <Image src={pastImages[3]} alt="Past Event Challengers Squad" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Row 2: The Future (Collage Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Future Images Collage */}
          <div className="grid grid-cols-2 gap-3 order-last lg:order-first">
            <div className="relative h-48 md:h-64 col-span-2 rounded-xl overflow-hidden border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
              <Image src={futureImages[0]} alt="Future Vision Main" fill className="object-cover" />
            </div>
            <div className="relative h-32 md:h-40 col-span-1 rounded-xl overflow-hidden border border-neutral-800">
              <Image src={futureImages[1]} alt="Future Vision Secondary" fill className="object-cover" />
            </div>
            <div className="relative h-32 md:h-40 col-span-1 rounded-xl overflow-hidden border border-neutral-800">
              <Image src={futureImages[2]} alt="Future Vision Tertiary" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500 uppercase tracking-wide">The Evolution</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Today, we are actively evolving into a premier, market-oriented sports platform aligned strictly with <span className="text-orange-500 font-semibold">international FIBA protocols</span>. 
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Our future is high-energy urban festivals, elite digital infrastructure, and seamless corporate brand integration—transforming Ethiopian 3x3 basketball into a <span className="text-orange-500 font-semibold">premium cultural stage</span> where raw community talent meets strategic, high-value brand positioning.
            </p>
            <div className="pt-6">
              <Link href="/pitch" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-extrabold rounded-lg transition-transform transform hover:-translate-y-1 shadow-lg shadow-orange-500/20">
                VIEW CORPORATE PITCH
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center pt-16 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden bg-neutral-950">
        {/* Full-bleed Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/main-hero.jpg"
            alt="Ethiopian 3x3 Basketball Action on Outdoor Court"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Dark gradient overlays maintaining urban aesthetic & text readability */}
          <div className="absolute inset-0 bg-neutral-950/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-transparent to-neutral-950" />
        </div>

        {/* Dynamic Glow Accents */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 sm:w-[600px] h-72 sm:h-[400px] bg-brand-orange/20 rounded-full blur-[110px] pointer-events-none z-10" />
        <div className="absolute top-40 right-10 w-48 h-48 bg-brand-cyan/15 rounded-full blur-[90px] pointer-events-none z-10" />

        <div className="relative z-20 text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Top FIBA Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/90 border border-brand-orange/40 text-brand-orange text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg backdrop-blur-md">
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
          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-surface/85 backdrop-blur-md hover:bg-surface-light text-white border border-surface-border hover:border-brand-orange/50 font-bold uppercase tracking-wider text-sm transition-all"
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

      {/* 2. OFFICIAL ENDORSEMENT & TRUST BANNER */}
      <EndorsementBanner />

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
              National Squads (U16, U18, U23)
            </span>
          </div>
        </div>
      </section>

      {/* 4. OUR JOURNEY & VISION (PAST & FUTURE MULTI-IMAGE COLLAGE) */}
      <VisionSection />

      {/* 5. NATIONAL 3x3 TOUR & REGIONAL ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <TourSection />
      </section>

      {/* 5. NATIONAL SCOUTING PROGRAM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <ScoutingSection />
      </section>

      {/* 6. NATIONAL TEAM PLAYER PROFILES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <PlayerProfiles />
      </section>

      {/* 7. FIBA PROFILE REGISTRATION CALLOUT */}
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
