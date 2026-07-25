"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Star, MapPin } from "lucide-react";

interface HouseboatGalleryProps {
  boat: any;
}

export function HouseboatGallery({ boat }: HouseboatGalleryProps) {
  // Combine the main image with the gallery images (if any)
  const allImages = boat.image ? [boat.image] : [];
  if (boat.gallery && Array.isArray(boat.gallery)) {
    boat.gallery.forEach((img: any) => {
      // Avoid duplicate of main image if it's in the gallery
      if (img.asset?._ref !== boat.image?.asset?._ref) {
        allImages.push(img);
      }
    });
  }

  // Helper to resolve image src
  const getImageSrc = (img: any) => {
    if (!img) return "";
    if (typeof img === "string") return img;
    return urlFor(img).url();
  };

  const mockImages = [
    "https://images.unsplash.com/photo-1593693397690-3628073262ce?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1596706917637-23f2f811de52?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1598322616259-269bf39cc03f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1542314831-c6a4d14b8b61?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
  ];

  // If there are still no extra images, we mock different images
  const displayImages = allImages.length > 1 ? allImages : [boat.image, ...mockImages].filter(Boolean);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = displayImages[activeIndex];

  return (
    <div className="relative w-full bg-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0 transition-opacity duration-500 ease-in-out">
          {activeImage && (
            <Image
              src={getImageSrc(activeImage)}
              alt={`${boat.name} - image ${activeIndex + 1}`}
              fill
              className="object-cover"
              priority
            />
          )}
          {activeIndex === 0 && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          )}
        </div>
        
        {activeIndex === 0 && (
          <div className="relative z-10 text-center text-white px-4 mt-8 md:mt-16 pointer-events-none">
            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-gold uppercase tracking-wider mb-4 border border-white/30 shadow-sm pointer-events-auto">
              {boat.category} Houseboat
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-md">{boat.name}</h1>
            
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-base md:text-lg text-gray-100 drop-shadow-md">
              <span className="flex items-center gap-2"><Star className="h-5 w-5 text-gold fill-gold" /> {boat.rating}</span>
              <span className="hidden sm:block text-gray-300">•</span>
              <span className="flex items-center gap-2"><MapPin className="h-5 w-5 text-gold" /> Alleppey Backwaters</span>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      <div className="w-full bg-[#111111] py-4 border-b border-[#222]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory hide-scrollbar items-center">
            {displayImages.map((img: any, idx: number) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative h-20 w-32 shrink-0 rounded-xl overflow-hidden snap-center transition-all duration-300 ${
                    isActive 
                      ? 'ring-2 ring-white ring-offset-2 ring-offset-[#111111] scale-105 opacity-100' 
                      : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  {img && (
                    <Image
                      src={getImageSrc(img)}
                      alt={`${boat.name} thumbnail ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
