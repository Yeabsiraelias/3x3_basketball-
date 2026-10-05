export interface ClinicSession {
  id: string;
  city: string;
  region: string;
  venue: string;
  targetAudience: string;
  focus: string;
  status: 'Open' | 'Upcoming' | 'Full';
}

export const clinicPrograms: ClinicSession[] = [
  {
    id: 'clinic-1',
    city: 'Harar',
    region: 'Harari',
    venue: 'Harar Stadium Outdoor Courts',
    targetAudience: 'U16 & U18 Boys & Girls',
    focus: 'Fundamentals, 12-second shot clock decision making, and 3x3 half-court spacing.',
    status: 'Upcoming',
  },
  {
    id: 'clinic-2',
    city: 'Dire Dawa',
    region: 'Dire Dawa',
    venue: 'Dire Dawa Sports Complex',
    targetAudience: 'U16, U18 & U23 Athletes',
    focus: 'Physical conditioning, defensive switches, and FIBA 3x3 profile verification.',
    status: 'Upcoming',
  },
  {
    id: 'clinic-3',
    city: 'Bishoftu',
    region: 'Oromia',
    venue: 'Bishoftu Youth Center Court',
    targetAudience: 'U16 & U18 Grassroots',
    focus: 'Ball handling under physical pressure, catch-and-shoot perimeter mechanics.',
    status: 'Open',
  },
  {
    id: 'clinic-4',
    city: 'Jimma',
    region: 'Oromia',
    venue: 'Jimma University Sports Ground',
    targetAudience: 'U18 & U23 Men & Women',
    focus: 'Pick-and-roll coverage, transition offense, and tactical execution.',
    status: 'Upcoming',
  },
  {
    id: 'clinic-5',
    city: 'Gambela',
    region: 'Gambela',
    venue: 'Gambela Regional Stadium Courts',
    targetAudience: 'Grassroots Talent Pool (U16 & U18)',
    focus: 'Speed drills, rebounding technique, and 1-on-1 defensive containment.',
    status: 'Upcoming',
  },
  {
    id: 'clinic-6',
    city: 'Wolkite',
    region: 'Central Ethiopia',
    venue: 'Wolkite Poly-Court Arena',
    targetAudience: 'U16 & U18 Youth',
    focus: 'Basic FIBA 3x3 rule mechanics, foul limits, and situational play.',
    status: 'Upcoming',
  },
  {
    id: 'clinic-7',
    city: 'Hawassa',
    region: 'Sidama',
    venue: 'Hawassa Stadium Multi-Sport Center',
    targetAudience: 'U16, U18 & U23 Athletes',
    focus: 'High-intensity scrimmage simulations and national scouting combine drills.',
    status: 'Open',
  },
  {
    id: 'clinic-8',
    city: 'Bahir Dar',
    region: 'Amhara',
    venue: 'Bahir Dar Stadium Sports Courts',
    targetAudience: 'U16 & U18 Boys & Girls',
    focus: 'Spacing efficiency, off-ball screen actions, and shooting under fatigue.',
    status: 'Upcoming',
  },
  {
    id: 'clinic-9',
    city: 'Wukro',
    region: 'Tigray',
    venue: 'Wukro Youth Sports Center',
    targetAudience: 'Grassroots U16 & U18',
    focus: 'Skill development, foundational athletic testing, and game introduction.',
    status: 'Upcoming',
  },
];
