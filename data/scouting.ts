export interface ScoutingCategory {
  division: string;
  ageBracket: string;
  genders: string[];
  targetFocus: string;
  pathway: string;
}

export const scoutingCategories: ScoutingCategory[] = [
  {
    division: 'U16 Junior Circuit',
    ageBracket: 'Under 16',
    genders: ['Men', 'Women'],
    targetFocus: 'Grassroots fundamentals, court IQ, quick-decision shooting, and foundational 3x3 half-court spacing.',
    pathway: 'Regional development camps, secondary school leagues, and youth festival invitationals.',
  },
  {
    division: 'U18 Elite Pathway',
    ageBracket: 'Under 18',
    genders: ['Men', 'Women'],
    targetFocus: 'High-pace physical conditioning, 1-on-1 isolation play, perimeter defense, and FIBA 3x3 ranking point accumulation.',
    pathway: 'National junior tour qualifiers, FIBA 3x3 U18 Africa Cup pool selection, and elite academy recruitment.',
  },
  {
    division: 'U23 National Roster Pool',
    ageBracket: 'Under 23',
    genders: ['Men', 'Women'],
    targetFocus: 'Tactical execution under 12-second shot clocks, transition offensive efficiency, and elite competition readiness.',
    pathway: 'National Team provisional squads, FIBA 3x3 Nations League, and international challenger circuit contention.',
  },
];
