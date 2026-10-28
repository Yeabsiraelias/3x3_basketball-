import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Flame,
  ArrowRight,
  ShieldCheck,
  Trophy,
  TrendingUp,
  Users,
  Target,
  Sparkles,
  Download,
  Mail,
  CheckCircle2,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Pitch & Brand Partnerships | 3x3 Ethiopia',
  description:
    'Partner with 3x3 Ethiopia—transforming Ethiopian urban basketball into a premier, FIBA-aligned corporate marketing platform and youth cultural stage.',
};

export default function PitchPage() {
  return (
    <div className="flex flex-col space-y-20 pb-24 bg-neutral-950 text-white">
      {/* 1. HERO HEADER */}
      <section className="relative min-h-[65vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/future-1.jpg"
            alt="FIBA 3x3 Arena Vision"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-500 text-xs font-black uppercase tracking-widest">
            <Flame className="w-4 h-4 fill-orange-500" />
            <span>Corporate Partnership Prospectus</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight">
            The Premier <span className="text-orange-500">Urban Sports</span> Platform in Ethiopia
          </h1>

          <p className="text-base sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Where authentic grassroots passion meets international FIBA standards. Connect your brand with tens of thousands of urban youth across 24 Ethiopian tour cities.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="mailto:partnerships@3x3ethiopia.org?subject=3x3%20Ethiopia%20Corporate%20Partnership%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-black font-extrabold rounded-xl transition-all transform hover:-translate-y-0.5 shadow-lg shadow-orange-500/25"
            >
              <Mail className="w-5 h-5" />
              <span>REQUEST SPONSORSHIP DECK</span>
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl border border-neutral-800 transition-all"
            >
              <span>Back to Home Court</span>
              <ArrowRight className="w-4 h-4 text-orange-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. THE MARKET OPPORTUNITY */}
      <section className="max-w-7xl mx-auto px-6 w-full space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-orange-500">Why 3x3 Basketball?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase">Unmatched Youth Engagement & High ROI</h2>
          <p className="text-neutral-400 text-base">
            3x3 is the fastest-growing urban team sport in the world and an official Olympic discipline. In Ethiopia, it represents raw cultural energy and prime commercial visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase mb-2">High-Density Urban Footfall</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Tournaments are hosted in premier public city plazas, shopping epicenters, and universities in Addis Ababa, Hawassa, Adama, and Bahir Dar with direct organic spectator reach.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center mb-5">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase mb-2">Youth Demographics (15–35)</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Over 60% of Ethiopia&apos;s population is under 25. 3x3 Ethiopia creates an authentic, aspirational bridge directly to Gen Z and millennial consumers.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase mb-2">Official FIBA Integration</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Direct digital integration with FIBA 3x3 Event Maker, live-streamed matches, official digital scoreboards, and global ranking point attribution.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIP TIERS */}
      <section className="max-w-7xl mx-auto px-6 w-full space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-orange-500">Corporate Packages</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase">Strategic Partnership Levels</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-neutral-400">Category Partner</span>
              <h3 className="text-2xl font-black text-white uppercase">Official Sector Sponsor</h3>
              <p className="text-neutral-400 text-sm">
                Category exclusivity for Telecom, Banking, Beverage, or Footwear across select regional tour stops.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Perimeter court banner placement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>On-site product sampling activation booth</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Logo integration in digital recap videos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tier 2: Title Partner (Highlighted) */}
          <div className="p-8 rounded-3xl bg-neutral-900 border-2 border-orange-500 relative flex flex-col justify-between space-y-6 shadow-[0_0_40px_rgba(249,115,22,0.15)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-black text-xs font-black uppercase tracking-wider">
              Most Prestigious
            </div>
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-orange-500">Title Sponsor</span>
              <h3 className="text-2xl font-black text-white uppercase">National Tour Presenting Partner</h3>
              <p className="text-neutral-400 text-sm">
                Headline co-branding for the entire 2026/27 national championship season and FIBA Quest Finals.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Title naming rights: &ldquo;The [Brand] 3x3 National Tour&rdquo;</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Center-court logo decal on FIBA official floors</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Primary jersey placement for National Squads</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>VIP Hospitality & Trophy Presentation Rights</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tier 3: Grassroots CSR */}
          <div className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-neutral-400">CSR & Youth Development</span>
              <h3 className="text-2xl font-black text-white uppercase">&ldquo;Her Court&rdquo; & Youth Clinics</h3>
              <p className="text-neutral-400 text-sm">
                Champion female empowerment, youth leadership, and urban court renovation in underserved communities.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Direct sponsorship of U16/U18 female clinics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>Permanent court legacy branding</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>High-impact ESG & CSR reporting assets</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT CTA */}
      <section className="max-w-5xl mx-auto px-6 w-full text-center">
        <div className="p-10 rounded-3xl bg-neutral-900/80 border border-neutral-800 space-y-6">
          <h2 className="text-3xl font-extrabold uppercase">Ready to elevate Ethiopian sports together?</h2>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base">
            Reach out directly to the 3x3 Ethiopia Leadership Committee to schedule a private sponsorship presentation.
          </p>
          <div className="pt-2">
            <a
              href="mailto:partnerships@3x3ethiopia.org"
              className="inline-block px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-black font-extrabold rounded-xl transition-all shadow-lg shadow-orange-500/20"
            >
              CONTACT PARTNERSHIP COMMITTEE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
