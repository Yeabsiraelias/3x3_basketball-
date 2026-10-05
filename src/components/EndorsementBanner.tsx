import React from 'react';
import { endorsedPartners, Partner } from '@/src/data/partners';
import { ShieldCheck, Award, Landmark, Trophy, HeartHandshake } from 'lucide-react';

interface EndorsementBannerProps {
  className?: string;
  partners?: Partner[];
}

// Map partners to tailored visual emblems and short monograms
const partnerMeta: Record<
  string,
  { acronym: string; icon: React.ComponentType<{ className?: string }> }
> = {
  'FIBA Africa': {
    acronym: 'FIBA',
    icon: Trophy,
  },
  'Ethiopian Olympic Committee (EOC)': {
    acronym: 'EOC',
    icon: Award,
  },
  'Ministry of Culture and Sports (MoCS)': {
    acronym: 'MoCS',
    icon: Landmark,
  },
  'Ethiopian Basketball Federation (EBF)': {
    acronym: 'EBF',
    icon: ShieldCheck,
  },
  'UNICEF': {
    acronym: 'UNICEF',
    icon: HeartHandshake,
  },
};

export default function EndorsementBanner({
  className = '',
  partners = endorsedPartners,
}: EndorsementBannerProps) {
  return (
    <section
      aria-label="Institutional Partners and Endorsements"
      className={`w-full bg-neutral-900/60 backdrop-blur-md border-y border-neutral-800 py-8 px-4 sm:px-6 lg:px-8 transition-colors ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-400">
            Officially Endorsed & Supported By
          </p>
        </div>

        {/* High-visibility Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {partners.map((partner) => {
            const meta = partnerMeta[partner.name] || {
              acronym: partner.name.slice(0, 3).toUpperCase(),
              icon: ShieldCheck,
            };
            const Icon = meta.icon;
            const isEndorsement = partner.category === 'Endorsement';

            return (
              <div
                key={partner.name}
                className="group relative flex flex-col justify-between p-4 rounded-xl bg-neutral-950/70 border border-neutral-800 hover:border-brand-orange/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,85,0,0.12)] hover:-translate-y-0.5"
              >
                {/* Top Row: Monogram Badge & Category Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-brand-orange group-hover:border-brand-orange/40 group-hover:bg-brand-orange/10 transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      isEndorsement
                        ? 'bg-brand-orange/10 text-brand-orange border-brand-orange/30'
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800 group-hover:border-neutral-700'
                    }`}
                  >
                    {partner.category}
                  </span>
                </div>

                {/* Partner Name & Sub-badge */}
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight leading-snug group-hover:text-brand-orange transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-[11px] font-medium text-neutral-500 mt-1 uppercase tracking-wider">
                    {meta.acronym}
                  </p>
                </div>

                {/* Subtle bottom accent line on hover */}
                <div className="mt-3 pt-2 border-t border-neutral-900 flex items-center gap-1.5 text-[10px] text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange/60 group-hover:bg-brand-orange" />
                  <span>Verified Partner</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
