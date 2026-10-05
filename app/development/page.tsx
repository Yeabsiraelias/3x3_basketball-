import React from 'react';
import Link from 'next/link';
import {
  Flame,
  Users,
  Sparkles,
  School,
  Award,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Youth Development & Clinics | 3x3 Ethiopia',
  description:
    'Grassroots 3x3 basketball clinics for U18 and U23 athletes, public school court outreach, and "Her Court" female empowerment workshops across Ethiopia.',
};

export default function DevelopmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20 sm:space-y-28">

      {/* 1. HERO HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-black uppercase tracking-widest">
          <Flame className="w-4 h-4" />
          National Game Initiatives
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase italic text-white tracking-tight">
          Youth & Grassroots <span className="text-brand-orange">Development</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          Building the next generation of Ethiopian basketball athletes, certified female leaders, and community role models through specialized 3x3 academies and regional clinics.
        </p>
      </div>

      {/* 2. SECTION: U18 & U23 ELITE CLINICS */}
      <section id="u18-u23" className="rounded-3xl bg-surface/90 border border-surface-border p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-orange/20 text-brand-orange text-xs font-black uppercase tracking-wider">
              <Award className="w-4 h-4" />
              Pathway to FIBA World Tour
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tight">
              U18 & U23 High-Performance Clinics
            </h2>

            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              The 3x3 game moves at a relentless 12-second shot clock pace. Our youth clinics provide intensive tactical drills, pick-and-roll masterclasses, conditioning, and mental resilience workshops tailored specifically to FIBA 3x3 rules.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>12-Second Shot Clock Decision Making</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>Individual FIBA 3x3 Ranking Points</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>Physical Conditioning & Nutrition</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>National Squad Talent ID Combine</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/events?filter=Clinic"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange text-black font-black uppercase text-xs tracking-wider hover:bg-brand-orange-glow transition-all"
              >
                <span>Register for Upcoming Clinic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-background/80 border border-surface-border space-y-4">
            <h3 className="text-sm font-black uppercase tracking-wider text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-orange" />
              Upcoming Clinic Schedule
            </h3>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-surface-light/70 border border-surface-border">
                <div className="flex justify-between items-center text-xs text-brand-orange font-bold mb-1">
                  <span>Bahir Dar Youth Center</span>
                  <span>Dec 18, 2026</span>
                </div>
                <h4 className="text-sm font-black text-white">Lake Tana Youth Clinic</h4>
                <p className="text-xs text-zinc-400 mt-1">U18 Boys & Girls — Free Admission</p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-light/70 border border-surface-border">
                <div className="flex justify-between items-center text-xs text-brand-cyan font-bold mb-1">
                  <span>Addis Ababa (Meskel Sq)</span>
                  <span>Jan 24, 2027</span>
                </div>
                <h4 className="text-sm font-black text-white">Capital Fast-Paced Camp</h4>
                <p className="text-xs text-zinc-400 mt-1">U23 Open Combine & FIBA Profile Induction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: SCHOOL OUTREACH PROGRAMS */}
      <section id="school-outreach" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 p-8 rounded-3xl bg-surface/80 border border-surface-border space-y-5">
          <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan flex items-center justify-center">
            <School className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-white uppercase italic">
            Refurbishing Street & School Courts
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            In partnership with municipal youth sports bureaus and sponsors like CBE and UNICEF, 3x3 Ethiopia paints standardized half-court lines, installs weatherproof 3x3 hoops, and provides official Wilson 3x3 balls to schools across the country.
          </p>
          <div className="p-4 rounded-xl bg-background/60 border border-surface-border space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-zinc-300">
              <span>2026/27 School Courts Goal</span>
              <span className="text-brand-cyan">15 Courts</span>
            </div>
            <div className="w-full h-2 rounded-full bg-surface-light overflow-hidden">
              <div className="h-full bg-brand-cyan w-2/5" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-cyan/20 text-brand-cyan text-xs font-black uppercase tracking-wider">
            <Users className="w-4 h-4" />
            Community Access
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tight">
            School Outreach & Street Clinics
          </h2>
          <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
            Because 3x3 basketball requires only one hoop and 6 players, it is the most accessible urban sport format. We introduce primary and secondary school physical education teachers to official FIBA 3x3 rulebooks, scorekeeping apps, and tournament hosting kits.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-surface/60 border border-surface-border">
              <h4 className="text-sm font-bold text-white uppercase">Equipment Donation</h4>
              <p className="text-xs text-zinc-400 mt-1">Donating official size 6 (weight 7) 3x3 basketballs to participating public schools.</p>
            </div>
            <div className="p-4 rounded-xl bg-surface/60 border border-surface-border">
              <h4 className="text-sm font-bold text-white uppercase">Teacher Certifications</h4>
              <p className="text-xs text-zinc-400 mt-1">Training PE instructors as certified local 3x3 court coordinators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: "HER COURT" FEMALE INCLUSION WORKSHOPS */}
      <section id="her-court" className="rounded-3xl bg-gradient-to-br from-surface to-[#1F132B] border-2 border-brand-orange/40 p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/40 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              &quot;Her Court&quot; Gender Equity Initiative
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight">
              Empowering Female Athletes & Coaches in 3x3
            </h2>

            <p className="text-zinc-200 leading-relaxed text-sm sm:text-base">
              &quot;Her Court&quot; is 3x3 Ethiopia&apos;s flagship gender inclusion program, created to dismantle barriers for girls in urban sports. Through female-led coaching camps, life-skills mentorship, and referee scholarship pathways, we ensure Ethiopian young women have equal ownership of the basketball court.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-purple-500/30">
                <h4 className="text-sm font-bold text-white uppercase">Female Coach Mentorship</h4>
                <p className="text-xs text-zinc-400 mt-1">Pairing former national players with aspiring young coaches.</p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-purple-500/30">
                <h4 className="text-sm font-bold text-white uppercase">Safe Space Tournaments</h4>
                <p className="text-xs text-zinc-400 mt-1">Exclusive Women&apos;s 3x3 weekend leagues and all-female referee crews.</p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-purple-500/30">
                <h4 className="text-sm font-bold text-white uppercase">Leadership & Health</h4>
                <p className="text-xs text-zinc-400 mt-1">Workshops on mental health, education, and career development.</p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/events"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-black uppercase tracking-wider text-xs shadow-[0_0_25px_rgba(236,72,153,0.4)] transition-all"
              >
                <span>Join Her Court Workshop</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-black/60 border border-purple-500/30 space-y-4 text-center">
            <span className="block text-4xl sm:text-5xl font-black text-pink-400 font-mono">
              50%
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-zinc-300 block">
              Equal Prize Pool & Allocation Guarantee
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed">
              3x3 Ethiopia mandates identical prize money, media coverage, and prime court time for men&apos;s and women&apos;s divisions in all sanctioned tournaments.
            </p>
          </div>
        </div>
      </section>

      {/* 5. VOLUNTEER & COMMUNITY CTA */}
      <div className="p-8 sm:p-12 rounded-3xl bg-surface/60 border border-surface-border text-center max-w-3xl mx-auto space-y-4">
        <HeartHandshake className="w-10 h-10 text-brand-orange mx-auto" />
        <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic">
          Partner with 3x3 Ethiopia
        </h3>
        <p className="text-sm text-zinc-300">
          Are you a school, community center, coach, or organization interested in hosting a 3x3 clinic in your Ethiopian city?
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:tamratalemu60@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-glow text-black font-black uppercase text-xs tracking-wider transition-all shadow-[0_0_20px_rgba(255,85,0,0.3)]"
          >
            <span>Email: tamratalemu60@gmail.com</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+251945562429"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-light hover:bg-surface border border-surface-border text-white font-black uppercase text-xs tracking-wider transition-all"
          >
            <span>Call: +251 94 556 2429</span>
          </a>
        </div>
      </div>

    </div>
  );
}
