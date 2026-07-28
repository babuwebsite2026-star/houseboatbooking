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

  // Take the first 5 images for the grid
  const mainImage = displayImages[0];
  const subImages = displayImages.slice(1, 5);

  return (
    <div className="container mx-auto px-4 md:px-8 pt-32 pb-8">
      {/* Title and Info */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-text-heading mb-4">{boat.name}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-text-body">
          <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-secondary-green fill-secondary-green" /> {boat.rating}</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary-green" /> Alleppey Backwaters</span>
          <span className="bg-light-green text-primary-green px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">{boat.category} Houseboat</span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 h-[40vh] md:h-[60vh]">
        {/* Main Image */}
        <div className="w-full md:w-1/2 relative h-full rounded-2xl md:rounded-r-none md:rounded-l-2xl overflow-hidden group cursor-pointer">
          {mainImage && (
            <Image
              src={getImageSrc(mainImage)}
              alt={`${boat.name} main image`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
          )}
        </div>
        
        {/* Sub Images (Desktop only) */}
        <div className="hidden md:grid w-1/2 grid-cols-2 grid-rows-2 gap-4 h-full">
          {subImages.map((img: any, idx: number) => (
            <div 
              key={idx} 
              className={`relative h-full overflow-hidden group cursor-pointer 
                ${idx === 1 ? 'rounded-tr-2xl' : ''} 
                ${idx === 3 ? 'rounded-br-2xl' : ''}`
              }
            >
              {img && (
                <Image
                  src={getImageSrc(img)}
                  alt={`${boat.name} sub image ${idx + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
