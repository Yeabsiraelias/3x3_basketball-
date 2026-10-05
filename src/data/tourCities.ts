export interface TourCity {
  id: string;
  name: string;
  amharicName: string;
  region: string;
  status: 'Scheduled' | 'Upcoming' | 'Host City';
}

export const tourCities: TourCity[] = [
  { id: '1', name: 'Addis Ababa', amharicName: 'አዲስ አበባ', region: 'Addis Ababa', status: 'Host City' },
  { id: '2', name: 'Bishoftu', amharicName: 'ቢሾፍቱ', region: 'Oromia', status: 'Upcoming' },
  { id: '3', name: 'Adama', amharicName: 'አዳማ', region: 'Oromia', status: 'Upcoming' },
  { id: '4', name: 'Dire Dawa', amharicName: 'ድሬዳዋ', region: 'Dire Dawa', status: 'Upcoming' },
  { id: '5', name: 'Harar', amharicName: 'ሀረር', region: 'Harari', status: 'Upcoming' },
  { id: '6', name: 'Jijiga', amharicName: 'ጅጅጋ', region: 'Somali', status: 'Upcoming' },
  { id: '7', name: 'Wolkite', amharicName: 'ወልቂጤ', region: 'Central Ethiopia', status: 'Upcoming' },
  { id: '8', name: 'Butajira', amharicName: 'ቡታጅራ', region: 'Central Ethiopia', status: 'Upcoming' },
  { id: '9', name: 'Hawassa', amharicName: 'ሀዋሳ', region: 'Sidama', status: 'Upcoming' },
  { id: '10', name: 'Batu', amharicName: 'ባቱ', region: 'Oromia', status: 'Upcoming' },
  { id: '11', name: 'Wolaita Sodo', amharicName: 'ወላይታ ሶዶ', region: 'South Ethiopia', status: 'Upcoming' },
  { id: '12', name: 'Sheger', amharicName: 'ሸገር', region: 'Oromia', status: 'Upcoming' },
  { id: '13', name: 'Ambo', amharicName: 'አምቦ', region: 'Oromia', status: 'Upcoming' },
  { id: '14', name: 'Jimma', amharicName: 'ጅማ', region: 'Oromia', status: 'Upcoming' },
  { id: '15', name: 'Gambela', amharicName: 'ጋምቤላ', region: 'Gambela', status: 'Upcoming' },
  { id: '16', name: 'Shashemene', amharicName: 'ሻሸመኔ', region: 'Oromia', status: 'Upcoming' },
  { id: '17', name: 'Debre Berhan', amharicName: 'ደብረ ብርሀን', region: 'Amhara', status: 'Upcoming' },
  { id: '18', name: 'Dessie', amharicName: 'ደሴ', region: 'Amhara', status: 'Upcoming' },
  { id: '19', name: 'Bahir Dar', amharicName: 'ባህር ዳር', region: 'Amhara', status: 'Upcoming' },
  { id: '20', name: 'Gondar', amharicName: 'ጎንደር', region: 'Amhara', status: 'Upcoming' },
  { id: '21', name: 'Mekelle', amharicName: 'መቀሌ', region: 'Tigray', status: 'Upcoming' },
  { id: '22', name: 'Wukro', amharicName: 'ውቅሮ', region: 'Tigray', status: 'Upcoming' },
  { id: '23', name: 'Adigrat', amharicName: 'አዲግራት', region: 'Tigray', status: 'Upcoming' },
  { id: '24', name: 'Axum', amharicName: 'አክሱም', region: 'Tigray', status: 'Upcoming' },
];
