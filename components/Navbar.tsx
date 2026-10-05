'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Menu, X, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Tour Cities' },
  { href: '/development', label: 'Youth Development' },
  { href: '/about', label: 'About Us' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-background/85 border-b border-surface-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow text-background font-black text-xl shadow-[0_0_20px_rgba(255,85,0,0.4)] group-hover:scale-105 transition-transform duration-300">
              <Flame className="w-6 h-6 text-black fill-black" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
                  3x3 <span className="text-brand-orange text-glow">ETHIOPIA</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                  FIBA
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-medium tracking-wide">
                Official 3x3 Basketball NGO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-surface-light border border-brand-orange/40 shadow-[0_0_12px_rgba(255,85,0,0.2)]'
                      : 'text-zinc-300 hover:text-white hover:bg-surface/60'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & FIBA Profile Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://play.fiba3x3.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs uppercase font-extrabold tracking-wider bg-brand-orange hover:bg-brand-orange-glow text-black shadow-[0_0_20px_rgba(255,85,0,0.5)] hover:shadow-[0_0_30px_rgba(255,85,0,0.8)] transition-all transform hover:-translate-y-0.5 duration-200"
            >
              <span>FIBA Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white bg-surface-light border border-surface-border focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-orange" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-border bg-background/95 backdrop-blur-2xl px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-bold transition-all ${
                    isActive
                      ? 'text-brand-orange bg-surface-light border-l-4 border-brand-orange'
                      : 'text-zinc-200 hover:text-white hover:bg-surface/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-2">
            <a
              href="https://play.fiba3x3.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm uppercase font-black tracking-wider bg-brand-orange text-black shadow-[0_0_20px_rgba(255,85,0,0.4)]"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Register Official FIBA Profile</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
