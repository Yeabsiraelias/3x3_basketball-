import React from 'react';
import LeadershipSection from '@/src/components/LeadershipSection';
import { Flame, Target, Eye, ShieldCheck, Award, Users, Heart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us & Official Leadership Committee | 3x3 Ethiopia',
  description:
    'Discover the vision, mission, and official leadership & technical committee of 3x3 Ethiopia, driving FIBA-endorsed basketball development across Ethiopia.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16 sm:space-y-24">
      
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-black uppercase tracking-widest">
          <Flame className="w-4 h-4" />
          Who We Are
        </div>
        <h1 className="text-4xl sm:text-6xl font-black uppercase italic text-white tracking-tight">
          Pioneering 3x3 Basketball in <span className="text-brand-orange">Ethiopia</span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
          3x3 Ethiopia is the National Game Organizers dedicated to establishing a sustainable, FIBA-endorsed basketball ecosystem that creates athletic and socioeconomic opportunities for youth nationwide.
        </p>
      </div>

      {/* 2. VISION & MISSION CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Vision Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface/90 border border-surface-border relative overflow-hidden flex flex-col justify-between group hover:border-brand-orange/40 transition-all">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange/20 border border-brand-orange/40 text-brand-orange flex items-center justify-center">
              <Eye className="w-7 h-7" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-brand-orange">Our Vision</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase italic">
              A Global Contender Born from Street Courts
            </h2>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              To establish Ethiopia as an African powerhouse in 3x3 basketball by building standardized court infrastructure, fostering world-class talent, and propelling Ethiopian national squads to the FIBA 3x3 Africa Cup and the Olympic Games.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-surface-border flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-brand-orange" />
            <span>Olympic & FIBA Aligned Goals</span>
          </div>
        </div>

        {/* Mission Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-surface/90 border border-surface-border relative overflow-hidden flex flex-col justify-between group hover:border-brand-cyan/40 transition-all">
          <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan flex items-center justify-center">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-brand-cyan">Our Mission</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase italic">
              Grassroots Access, Equity & Excellence
            </h2>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              To deliver accessible, FIBA-sanctioned 3x3 circuits, empower young women through targeted sport leadership initiatives, train certified Ethiopian referees and table officials, and engage regional youth through positive sports development.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-surface-border flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
            <Heart className="w-4 h-4 text-brand-cyan" />
            <span>Community-Driven Impact</span>
          </div>
        </div>

      </div>

      {/* 3. CORE PILLARS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-surface/60 border border-surface-border">
          <Award className="w-8 h-8 text-brand-yellow mb-3" />
          <h3 className="text-lg font-black text-white uppercase">FIBA Sanctioned</h3>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
            Every match is logged directly into FIBA Event Maker, attributing official global ranking points to Ethiopian players.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface/60 border border-surface-border">
          <Users className="w-8 h-8 text-brand-orange mb-3" />
          <h3 className="text-lg font-black text-white uppercase">Gender Equity</h3>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
            Ensuring 50% representation in developmental programs and running dedicated female 3x3 training workshops.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-surface/60 border border-surface-border">
          <ShieldCheck className="w-8 h-8 text-brand-cyan mb-3" />
          <h3 className="text-lg font-black text-white uppercase">Certified Officials</h3>
          <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
            Continuous professional development for referees, scorekeepers, and tournament directors across all regions.
          </p>
        </div>
      </div>

      {/* 4. OFFICIAL LEADERSHIP COMMITTEE */}
      <LeadershipSection preview={false} />

    </div>
  );
}

