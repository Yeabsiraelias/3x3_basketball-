import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LEADERSHIP_MEMBERS } from '@/src/data/team';
import { CommitteeMember } from '@/lib/types';
import {
  ShieldCheck,
  Award,
  Flame,
  ArrowRight,
  Briefcase,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface LeadershipSectionProps {
  preview?: boolean;
  className?: string;
  showHeading?: boolean;
}

export default function LeadershipSection({
  preview = false,
  className = '',
  showHeading = true,
}: LeadershipSectionProps) {
  // On home page preview, show first 4 members in compact format; on about page, show all 9
  const membersToDisplay = preview ? LEADERSHIP_MEMBERS.slice(0, 4) : LEADERSHIP_MEMBERS;

  return (
    <section
      id="leadership"
      className={`relative w-full overflow-hidden ${className}`}
      aria-label="3x3 Ethiopia Leadership Committee"
    >
      {/* Background ambient lighting accents */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none -z-10 ${
          preview ? 'top-1/4 w-80 sm:w-[450px] h-72' : 'top-1/4 w-96 sm:w-[600px] h-96'
        }`}
      />
      <div
        className={`absolute bottom-5 right-5 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none -z-10 ${
          preview ? 'w-48 h-48' : 'w-72 h-72'
        }`}
      />

      {/* Section Header */}
      {showHeading && (
        <div
          className={`flex flex-col md:flex-row md:items-end justify-between ${
            preview ? 'gap-3 mb-6 sm:mb-8' : 'gap-6 mb-12 sm:mb-16'
          }`}
        >
          <div className={`space-y-2 ${preview ? 'max-w-xl' : 'max-w-2xl'}`}>
            <div
              className={`inline-flex items-center gap-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange font-black uppercase tracking-widest ${
                preview ? 'px-2.5 py-0.5 text-[11px]' : 'px-3.5 py-1.5 text-xs'
              }`}
            >
              <Flame className={preview ? 'w-3 h-3 fill-brand-orange' : 'w-3.5 h-3.5 fill-brand-orange'} />
              <span>Official FIBA Governance &amp; Technical Team</span>
            </div>

            <h2
              className={`font-black uppercase italic tracking-tight text-white ${
                preview ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-5xl'
              }`}
            >
              The Leadership <span className="text-brand-orange">Committee</span>
            </h2>

            <p
              className={`text-zinc-300 leading-relaxed font-normal ${
                preview ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
              }`}
            >
              Meet the executive leadership and technical committee steering 3x3 Ethiopia&apos;s strategic governance, FIBA Event Maker integration, digital infrastructure, diaspora relations, and grassroots talent pipelines.
            </p>
          </div>

          {preview && (
            <Link
              href="/about#leadership"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-light hover:bg-brand-orange hover:text-black text-white font-black uppercase tracking-wider text-xs border border-surface-border transition-all group shrink-0"
            >
              <span>View All {LEADERSHIP_MEMBERS.length} Members &amp; Roles</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      )}

      {/* Grid of Committee Members */}
      <div
        className={`grid ${
          preview
            ? 'grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4'
            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
        }`}
      >
        {membersToDisplay.map((member: CommitteeMember) => {
          return (
            <div
              key={member.id}
              className={`group relative bg-surface/90 border border-surface-border hover:border-brand-orange/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-[0_0_25px_rgba(255,85,0,0.15)] ${
                preview ? 'rounded-2xl hover:-translate-y-0.5' : 'rounded-3xl'
              }`}
            >
              {/* Top Image + Overlay Banner */}
              <div
                className={`relative w-full overflow-hidden bg-surface-light ${
                  preview ? 'h-36 sm:h-44' : 'h-72 sm:h-80'
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes={
                    preview
                      ? '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw'
                      : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  }
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    preview
                      ? 'from-[#0F1626] via-[#0F1626]/30 to-transparent'
                      : 'from-[#0F1626] via-[#0F1626]/40 to-transparent'
                  }`}
                />

                {/* Top Badges */}
                <div
                  className={`absolute left-2.5 right-2.5 flex items-center justify-between gap-1.5 ${
                    preview ? 'top-2.5' : 'top-4 left-4 right-4'
                  }`}
                >
                  <span
                    className={`rounded-full font-black uppercase tracking-wider bg-brand-orange text-black shadow-md flex items-center gap-1 ${
                      preview ? 'px-2 py-0.5 text-[9px] truncate max-w-[70%]' : 'px-3 py-1 text-[11px]'
                    }`}
                  >
                    <Sparkles className={preview ? 'w-2.5 h-2.5 shrink-0' : 'w-3 h-3'} />
                    <span className="truncate">{member.badge}</span>
                  </span>

                  {member.certificationStatus && (
                    <span
                      className={`rounded-full font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md border border-brand-yellow/40 text-brand-yellow flex items-center gap-1 shrink-0 ${
                        preview ? 'px-1.5 py-0.5 text-[8px]' : 'px-2.5 py-1 text-[10px]'
                      }`}
                    >
                      <ShieldCheck className={preview ? 'w-2.5 h-2.5 text-brand-yellow' : 'w-3 h-3 text-brand-yellow'} />
                      <span>FIBA{preview ? '' : ' Certified'}</span>
                    </span>
                  )}
                </div>

                {/* Department Tag Overlay on Bottom of Image */}
                {member.department && (
                  <div
                    className={`absolute left-2.5 right-2.5 ${
                      preview ? 'bottom-2' : 'bottom-3 left-4 right-4'
                    }`}
                  >
                    <span
                      className={`inline-flex items-center gap-1 rounded-md bg-black/70 backdrop-blur-md font-mono text-zinc-300 border border-white/10 uppercase tracking-wider truncate max-w-full ${
                        preview ? 'px-1.5 py-0.2 text-[8px]' : 'px-2.5 py-0.5 text-[10px]'
                      }`}
                    >
                      <Layers className={preview ? 'w-2.5 h-2.5 text-brand-cyan shrink-0' : 'w-3 h-3 text-brand-cyan'} />
                      <span className="truncate">{member.department}</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div
                className={`flex-1 flex flex-col justify-between ${
                  preview ? 'p-3 sm:p-3.5 space-y-2' : 'p-6 sm:p-7 space-y-5'
                }`}
              >
                <div>
                  <h3
                    className={`font-black text-white tracking-tight group-hover:text-brand-orange transition-colors truncate ${
                      preview ? 'text-sm sm:text-base' : 'text-xl sm:text-2xl'
                    }`}
                  >
                    {member.name}
                  </h3>

                  <div className={`mt-0.5 flex items-center gap-1.5 ${preview ? '' : 'mt-1'}`}>
                    <Briefcase
                      className={`text-brand-orange-glow shrink-0 ${
                        preview ? 'w-3 h-3' : 'w-3.5 h-3.5'
                      }`}
                    />
                    <p
                      className={`font-black uppercase tracking-wider text-brand-orange-glow truncate ${
                        preview ? 'text-[10px]' : 'text-xs'
                      }`}
                    >
                      {member.role}
                    </p>
                  </div>

                  {/* Operational Responsibilities */}
                  <div
                    className={`border-t border-surface-border/70 ${
                      preview ? 'mt-2 pt-2 space-y-0.5' : 'mt-4 pt-4 space-y-2'
                    }`}
                  >
                    {!preview && (
                      <span className="text-[11px] font-black uppercase tracking-widest text-zinc-400 block">
                        Operational Responsibilities
                      </span>
                    )}
                    <p
                      className={`text-zinc-300 leading-relaxed font-normal ${
                        preview
                          ? 'text-[11px] line-clamp-2'
                          : 'text-xs sm:text-sm'
                      }`}
                    >
                      {member.responsibilities || member.bio}
                    </p>
                  </div>
                </div>

                {/* Card Footer: FIBA Credentials and Official Role Badge */}
                <div
                  className={`border-t border-surface-border flex items-center justify-between gap-2 ${
                    preview
                      ? 'pt-2 text-[10px]'
                      : 'pt-4 flex-col sm:flex-row sm:items-center text-xs'
                  }`}
                >
                  <div className="flex items-center gap-1 text-zinc-300 truncate">
                    <Award
                      className={`text-brand-yellow shrink-0 ${
                        preview ? 'w-3 h-3' : 'w-4 h-4'
                      }`}
                    />
                    <span
                      className={`font-mono truncate ${
                        preview ? 'text-[9px]' : 'text-[11px] font-semibold'
                      }`}
                    >
                      {member.fibaCredentials || 'Official FIBA Delegate'}
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-1 font-mono font-bold text-emerald-400 shrink-0 ${
                      preview ? 'text-[9px]' : 'text-[11px]'
                    }`}
                  >
                    <CheckCircle2 className={preview ? 'w-3 h-3 text-emerald-400' : 'w-3.5 h-3.5 text-emerald-400'} />
                    <span>{member.officialRole}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview Bottom Banner */}
      {preview && (
        <div className="mt-5 text-center sm:hidden">
          <Link
            href="/about#leadership"
            className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-surface border border-surface-border text-xs font-black uppercase tracking-wider text-brand-orange hover:bg-brand-orange hover:text-black transition-colors"
          >
            <span>View All {LEADERSHIP_MEMBERS.length} Committee Members</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </section>
  );
}
