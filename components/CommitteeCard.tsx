import React from 'react';
import Image from 'next/image';
import { CommitteeMember } from '@/lib/types';
import { ShieldCheck, Award } from 'lucide-react';

interface CommitteeCardProps {
  member: CommitteeMember;
}

export default function CommitteeCard({ member }: CommitteeCardProps) {
  return (
    <div className="group relative rounded-2xl bg-surface/90 border border-surface-border hover:border-brand-orange/50 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image container with gradient overlay */}
      <div className="relative w-full h-80 sm:h-[350px] overflow-hidden bg-surface-light">
        <Image
          src={member.image}
          alt={member.name}
          fill
          style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
          className={`object-cover ${member.imagePosition ? '' : 'object-top'} group-hover:scale-105 transition-transform duration-500`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />

        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-brand-orange/90 text-black shadow-lg">
            {member.badge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-xl font-black text-white group-hover:text-brand-orange transition-colors">
            {member.name}
          </h3>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-orange-glow mt-0.5">
            {member.role}
          </p>
          <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            {member.bio}
          </p>
        </div>

        {member.fibaCredentials && (
          <div className="pt-4 border-t border-surface-border/80 flex items-center gap-2 text-xs font-semibold text-zinc-300">
            <Award className="w-4 h-4 text-brand-yellow shrink-0" />
            <span className="text-[11px] font-mono">{member.fibaCredentials}</span>
          </div>
        )}
      </div>
    </div>
  );
}
