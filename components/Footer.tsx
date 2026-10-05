import React from 'react';
import Link from 'next/link';
import { Flame, Trophy, Globe, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#05070B] border-t border-surface-border text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow text-black font-black">
                <Flame className="w-6 h-6 fill-black" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                3x3 <span className="text-brand-orange">ETHIOPIA</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Empowering Ethiopian youth through FIBA-endorsed 3x3 street basketball tournaments, grassroots clinics, referee academies, and female leadership programs across the nation.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30">
                <Globe className="w-3.5 h-3.5" />
                FIBA 3x3 Endorsed Promoter
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/events" className="hover:text-brand-orange transition-colors">
                  24 Tour Cities &amp; Roadmap
                </Link>
              </li>
              <li>
                <Link href="/development" className="hover:text-brand-orange transition-colors">
                  Youth & Grassroots Clinics
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">
                  Vision & Committee
                </Link>
              </li>
              <li>
                <a
                  href="https://play.fiba3x3.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-brand-orange hover:underline font-semibold"
                >
                  <span>FIBA Profile Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">Programs</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/development#u18-u23" className="hover:text-brand-orange transition-colors">
                  U18 & U23 Elite Academy
                </Link>
              </li>
              <li>
                <Link href="/development#school-outreach" className="hover:text-brand-orange transition-colors">
                  School Court Outreach
                </Link>
              </li>
              <li>
                <Link href="/development#her-court" className="hover:text-brand-orange transition-colors">
                  Her Court (Female 3x3)
                </Link>
              </li>
              <li>
                <Link href="/about#officials" className="hover:text-brand-orange transition-colors">
                  Referee & Officials Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-white">HQ & Contacts</h4>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>Bole Sub-City, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:tamratalemu60@gmail.com" className="hover:text-brand-orange transition-colors">
                  tamratalemu60@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="tel:+251945562429" className="hover:text-brand-orange transition-colors">
                  +251 94 556 2429
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-surface-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} 3x3 Ethiopia NGO. All rights reserved. FIBA is a registered trademark of the International Basketball Federation.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-zinc-300 transition-colors">Privacy Policy</span>
            <span className="hover:text-zinc-300 transition-colors">Terms of Participation</span>
            <span className="hover:text-zinc-300 transition-colors">FIBA 3x3 Rules</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
