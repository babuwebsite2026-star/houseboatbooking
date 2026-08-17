"use client";

import { useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Star, MapPin, X } from "lucide-react";

interface HouseboatGalleryProps {
  boat: any;
}

export function HouseboatGallery({ boat }: HouseboatGalleryProps) {
  const boatName = boat.bedrooms 
    ? `${boat.bedrooms} Bedroom Houseboat`
    : (boat.name || 'Kerala Houseboat');

  const [showAll, setShowAll] = useState(false);

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
  const remainingCount = Math.max(0, displayImages.length - 5);

  return (
    <div className="container mx-auto px-4 md:px-8 pt-32 pb-8">
      {/* Title and Info */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-text-heading mb-4">{boatName}</h1>
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-text-body">
          <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-secondary-green fill-secondary-green" /> {boat.rating}</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary-green" /> Alleppey Backwaters</span>
          <span className="bg-light-green text-primary-green px-3 py-1 rounded-full uppercase tracking-wider text-xs font-bold">{boat.isPrivate ? 'Private' : boat.isShared ? 'Shared' : 'Premium'} Houseboat</span>
        </div>
      </div>

      {/* Image Grid */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 h-[60vh] md:h-[60vh]">
        {/* Main Image */}
        <div 
          onClick={() => setShowAll(true)}
          className="w-full md:w-1/2 relative h-1/2 md:h-full rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl overflow-hidden group cursor-pointer"
        >
          {mainImage && (
            <Image
              src={getImageSrc(mainImage)}
              alt={`${boatName} main image`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
          )}
        </div>
        
        {/* Sub Images (2x2 Grid) */}
        <div className="grid w-full md:w-1/2 grid-cols-2 grid-rows-2 gap-2 md:gap-4 h-1/2 md:h-full">
          {subImages.map((img: any, idx: number) => {
            const isLast = idx === 3;
            const hasMore = remainingCount > 0;
            return (
              <div 
                key={idx} 
                onClick={() => setShowAll(true)}
                className={`relative h-full overflow-hidden group cursor-pointer 
                  ${idx === 0 ? 'md:rounded-none' : ''} 
                  ${idx === 1 ? 'rounded-tr-2xl md:rounded-tr-2xl' : ''} 
                  ${idx === 2 ? 'rounded-bl-2xl md:rounded-none' : ''}
                  ${idx === 3 ? 'rounded-br-2xl md:rounded-br-2xl' : ''}`
                }
              >
                {img && (
                  <>
                    <Image
                      src={getImageSrc(img)}
                      alt={`${boatName} sub image ${idx + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {isLast && hasMore && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                        <span className="text-white text-xl md:text-2xl font-bold text-center drop-shadow-md">+{remainingCount} photos</span>
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / All Images Modal */}
      {showAll && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-bold text-gray-900 ml-4">All Photos</h2>
            <button 
              onClick={() => setShowAll(false)}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>
          </div>
          <div className="p-4 md:p-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {displayImages.map((img: any, idx: number) => (
              <div key={idx} className="break-inside-avoid relative w-full h-auto mb-4 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <Image
                  src={getImageSrc(img)}
                  alt={`${boatName} image ${idx + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
