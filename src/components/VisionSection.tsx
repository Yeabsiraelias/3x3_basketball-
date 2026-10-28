import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const pastImages = [
  '/images/past-1.jpg', // The main large photo (Ethio Telecom banner court match)
  '/images/past-2.jpg', // Grassroots women's team
  '/images/past-3.jpg', // Grassroots men's team (First uploaded team)
  '/images/past-4.jpg', // Grassroots men's team (Challengers team)
];

export const futureImages = [
  '/images/future-1.jpg', // Main AI future vision (e.g., Night tournament)
  '/images/future-2.jpg', // Small AI photo 1 (e.g., Branded court)
  '/images/future-3.jpg', // Small AI photo 2 (e.g., National team action)
];

export default function VisionSection() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
            Our Journey <span className="text-orange-500">& Vision</span>
          </h2>
        </div>

        {/* Row 1: The Past (Text Left, Collage Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neutral-400 uppercase tracking-wide">The Foundation</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Born on the local courts of Ethiopia, 3x3 Ethiopia began as a grassroots movement driven by a pure passion for the game. We laid a strong, authentic foundation by building the urban basketball community from the ground up.
            </p>
          </div>
          
          {/* Past Images Collage */}
          <div className="grid grid-cols-3 gap-3 group">
            <div className="relative h-48 md:h-64 col-span-3 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition duration-500 border border-neutral-800">
              <Image src={pastImages[0]} alt="Past Event Main" fill className="object-cover" />
            </div>
            <div className="relative h-28 sm:h-36 md:h-44 col-span-1 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition duration-500 border border-neutral-800">
              <Image src={pastImages[1]} alt="Past Event Women Squad" fill className="object-cover" />
            </div>
            <div className="relative h-28 sm:h-36 md:h-44 col-span-1 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition duration-500 border border-neutral-800">
              <Image src={pastImages[2]} alt="Past Event Men Squad" fill className="object-cover" />
            </div>
            <div className="relative h-28 sm:h-36 md:h-44 col-span-1 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition duration-500 border border-neutral-800">
              <Image src={pastImages[3]} alt="Past Event Challengers Squad" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Row 2: The Future (Collage Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Future Images Collage */}
          <div className="grid grid-cols-2 gap-3 order-last lg:order-first">
            <div className="relative h-48 md:h-64 col-span-2 rounded-xl overflow-hidden border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
              <Image src={futureImages[0]} alt="Future Vision Main" fill className="object-cover" />
            </div>
            <div className="relative h-32 md:h-40 col-span-1 rounded-xl overflow-hidden border border-neutral-800">
              <Image src={futureImages[1]} alt="Future Vision Secondary" fill className="object-cover" />
            </div>
            <div className="relative h-32 md:h-40 col-span-1 rounded-xl overflow-hidden border border-neutral-800">
              <Image src={futureImages[2]} alt="Future Vision Tertiary" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-orange-500 uppercase tracking-wide">The Evolution</h3>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Today, we are actively evolving into a premier, market-oriented sports platform aligned strictly with <span className="text-orange-500 font-semibold">international FIBA protocols</span>. 
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Our future is high-energy urban festivals, elite digital infrastructure, and seamless corporate brand integration—transforming Ethiopian 3x3 basketball into a <span className="text-orange-500 font-semibold">premium cultural stage</span> where raw community talent meets strategic, high-value brand positioning.
            </p>
            <div className="pt-6">
              <Link href="/pitch" className="inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-black font-extrabold rounded-lg transition-transform transform hover:-translate-y-1 shadow-lg shadow-orange-500/20">
                VIEW CORPORATE PITCH
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
