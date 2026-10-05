export interface Partner {
  name: string;
  category: 'Endorsement' | 'Institutional Partner';
}

export const endorsedPartners: Partner[] = [
  { name: 'FIBA Africa', category: 'Endorsement' },
  { name: 'Ethiopian Olympic Committee (EOC)', category: 'Institutional Partner' },
  { name: 'Ministry of Culture and Sports (MoCS)', category: 'Institutional Partner' },
  { name: 'Ethiopian Basketball Federation (EBF)', category: 'Institutional Partner' },
  { name: 'UNICEF', category: 'Institutional Partner' },
];
