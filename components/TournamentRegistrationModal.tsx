'use client';

import React, { useState } from 'react';
import { Tournament, PlayerCategory, Gender } from '@/lib/types';
import { Trophy, CheckCircle, AlertCircle, Sparkles, X, User, Users } from 'lucide-react';

interface Props {
  tournaments: Tournament[];
  selectedTournamentId?: string;
  onClose?: () => void;
}

export default function TournamentRegistrationModal({ tournaments, selectedTournamentId, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<'team' | 'player'>('team');
  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    captainFibaUrl: '',
    gender: 'Male' as Gender,
    category: 'Open' as PlayerCategory,
    region: 'Addis Ababa',
    tournamentId: selectedTournamentId || (tournaments[0]?.tournament_id || ''),
    phone: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API registration call (with Supabase or fallback)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="w-full bg-surface border border-surface-border rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-surface-light text-zinc-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {submitted ? (
        <div className="py-12 px-4 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green/40 text-brand-green mx-auto flex items-center justify-center">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic">
            Registration Submitted!
          </h3>
          <p className="text-zinc-300 max-w-md mx-auto text-sm leading-relaxed">
            Your registration has been logged for review by the 3x3 Ethiopia Technical Committee. Please ensure all squad members have an active FIBA 3x3 profile on <span className="text-brand-orange font-mono">play.fiba3x3.com</span>.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                if (onClose) onClose();
              }}
              className="px-6 py-3 rounded-xl bg-brand-orange text-black font-black uppercase text-xs tracking-wider hover:bg-brand-orange-glow transition-all"
            >
              Register Another Team / Player
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6 pb-4 border-b border-surface-border">
            <div className="flex items-center gap-2 text-brand-orange mb-1">
              <Trophy className="w-5 h-5" />
              <span className="text-xs font-black uppercase tracking-widest">Official Entry Portal</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tight">
              Tournament Team Registration
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Register your 3x3 squad for upcoming FIBA-endorsed quests and development clinics.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-surface-light rounded-xl mb-6 border border-surface-border">
            <button
              type="button"
              onClick={() => setActiveTab('team')}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'team'
                  ? 'bg-brand-orange text-black shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Full Team (4 Players)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('player')}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                activeTab === 'player'
                  ? 'bg-brand-orange text-black shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>Free Agent Player</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            {/* Tournament Selection */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                Select Tournament / Event *
              </label>
              <select
                value={formData.tournamentId}
                onChange={(e) => setFormData({ ...formData, tournamentId: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-white text-sm focus:border-brand-orange focus:outline-none"
                required
              >
                {tournaments.map((t) => (
                  <option key={t.tournament_id} value={t.tournament_id}>
                    {t.event_name} ({t.event_type} - {t.location})
                  </option>
                ))}
              </select>
            </div>

            {/* Team or Player Name */}
            {activeTab === 'team' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                    Team Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Addis Ballers"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-white text-sm focus:border-brand-orange focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                    Team Captain Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Yared Bekele"
                    value={formData.captainName}
                    onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-white text-sm focus:border-brand-orange focus:outline-none"
                  />
                </div>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Player Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Selamawit Tadesse"
                  value={formData.captainName}
                  onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-white text-sm focus:border-brand-orange focus:outline-none"
                />
              </div>
            )}

            {/* Category & Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Age Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as PlayerCategory })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-white text-sm focus:border-brand-orange focus:outline-none"
                >
                  <option value="Open">Open Category (Men & Women)</option>
                  <option value="U23">U23 (Born 2003 or later)</option>
                  <option value="U18">U18 (Born 2008 or later)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Division / Gender *
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value as Gender })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-white text-sm focus:border-brand-orange focus:outline-none"
                >
                  <option value="Male">Men&apos;s Division</option>
                  <option value="Female">Women&apos;s Division</option>
                </select>
              </div>
            </div>

            {/* FIBA Profile Link & Region */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Captain FIBA 3x3 Profile Link (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://play.fiba3x3.com/players/..."
                  value={formData.captainFibaUrl}
                  onChange={(e) => setFormData({ ...formData, captainFibaUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-white text-sm focus:border-brand-orange focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Region / City *
                </label>
                <select
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-white text-sm focus:border-brand-orange focus:outline-none"
                >
                  <option value="Addis Ababa">Addis Ababa</option>
                  <option value="Hawassa">Hawassa (Sidama)</option>
                  <option value="Bahir Dar">Bahir Dar (Amhara)</option>
                  <option value="Dire Dawa">Dire Dawa</option>
                  <option value="Adama">Adama (Oromia)</option>
                  <option value="Mekelle">Mekelle (Tigray)</option>
                  <option value="Other">Other Ethiopian Region</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Phone Number (Telegram) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+251 9..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-white text-sm focus:border-brand-orange focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-zinc-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="captain@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-surface-border text-white text-sm focus:border-brand-orange focus:outline-none"
                />
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 leading-relaxed pt-1">
              By submitting this form, you confirm that all players are eligible under FIBA 3x3 age category rules and agree to the 3x3 Ethiopia Code of Conduct.
            </p>

            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-glow text-black font-black uppercase tracking-wider text-sm shadow-[0_0_25px_rgba(255,85,0,0.4)] transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Processing Entry...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Complete Tournament Registration</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
