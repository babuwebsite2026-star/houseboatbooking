import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ALL_HOUSEBOATS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 30;

export default async function GalleryPage() {
  const houseboats = await client.fetch(ALL_HOUSEBOATS_QUERY);

  // Extract all main images and gallery images from all houseboats
  const images: any[] = [];
  houseboats.forEach((boat: any) => {
    if (boat.image) {
      images.push({ src: boat.image, alt: boat.name });
    }
    if (boat.gallery && Array.isArray(boat.gallery)) {
      boat.gallery.forEach((img: any, idx: number) => {
        images.push({ src: img, alt: `${boat.name} gallery image ${idx + 1}` });
      });
    }
  });

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center mb-16 mt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1596706917637-23f2f811de52?auto=format&fit=crop&w=1920&q=80"
            alt="Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">Our Gallery</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Explore the beauty of our premium houseboats and the mesmerizing Kerala backwaters.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {images.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((imgData, i) => (
              <div key={i} className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <Image
                  src={urlFor(imgData.src).url()}
                  alt={imgData.alt}
                  width={600}
                  height={800} // This height will adjust because of the layout
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium text-lg capitalize">{imgData.alt}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-700">No images available yet.</h2>
            <p className="text-gray-500 mt-2">Images uploaded to your houseboats will appear here automatically.</p>
          </div>
        )}
      </div>
    </div>
  );
}
