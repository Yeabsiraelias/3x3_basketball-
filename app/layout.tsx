import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: '3x3 Ethiopia | Official FIBA 3x3 Basketball NGO & Tournaments',
  description:
    'Official FIBA-endorsed 3x3 basketball organization in Ethiopia. Managing Lite Quests, Quest Finals, youth development academies, U18/U23 clinics, and player registrations.',
  keywords: [
    '3x3 Ethiopia',
    'Ethiopian Basketball',
    'FIBA 3x3 Ethiopia',
    '3x3 Basketball Tournaments Addis Ababa',
    'Youth Basketball Clinics Ethiopia',
    'FIBA Event Maker',
    'FIBA 3x3 Profile Registration',
  ],
  openGraph: {
    title: '3x3 Ethiopia | Official FIBA 3x3 Basketball NGO',
    description:
      'Join official FIBA-endorsed 3x3 tournaments and youth development clinics across Ethiopia.',
    url: 'https://3x3ethiopia.org',
    siteName: '3x3 Ethiopia',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '3x3 Ethiopia Basketball',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '3x3 Ethiopia | Official FIBA 3x3 Basketball NGO',
    description:
      'Official FIBA 3x3 Basketball circuits, clinics, and player ranking in Ethiopia.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${montserrat.variable}`}>
      <body className="bg-background text-zinc-100 flex flex-col min-h-screen antialiased selection:bg-brand-orange selection:text-black">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
