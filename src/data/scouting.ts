export interface ScoutingCategory {
  division: string;
  ageBracket: string;
  genders: string[];
  targetFocus: string;
  pathway: string;
  poolBadge: string;
}

export const scoutingCategories: ScoutingCategory[] = [
  {
    division: 'U16 National Team Pool',
    ageBracket: 'Under 16 (Men & Women)',
    genders: ['Men', 'Women'],
    poolBadge: 'U16 National Junior Pool',
    targetFocus: 'Grassroots fundamentals, court IQ, quick-decision shooting under 12-second shot clocks, and foundational 3x3 half-court spacing.',
    pathway: 'Regional development camps, secondary school tour circuits, and national junior squad invitationals.',
  },
  {
    division: 'U18 National Team Pool',
    ageBracket: 'Under 18 (Men & Women)',
    genders: ['Men', 'Women'],
    poolBadge: 'U18 National Youth Pool',
    targetFocus: 'High-pace physical conditioning, 1-on-1 isolation play, perimeter defense, and FIBA 3x3 individual ranking point accumulation.',
    pathway: 'National junior tour qualifiers, FIBA 3x3 U18 Africa Cup pool selection, and elite national academy recruitment.',
  },
  {
    division: 'U23 National Team Pool',
    ageBracket: 'Under 23 (Men & Women)',
    genders: ['Men', 'Women'],
    poolBadge: 'U23 National Roster Pool',
    targetFocus: 'Tactical execution under intense physicality, transition offensive efficiency, 2-point arc shot selection, and international readiness.',
    pathway: 'Senior National Team provisional squads, FIBA 3x3 Nations League, and international challenger circuit contention.',
  },
];
