import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, BedDouble } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { HOUSEBOATS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 30;

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // Format the title (e.g., "luxury" -> "Luxury")
  const categoryTitle = slug.charAt(0).toUpperCase() + slug.slice(1);
  
  // Fetch houseboats for this category
  const houseboats = await client.fetch(HOUSEBOATS_BY_CATEGORY_QUERY, { category: slug });
  
  // Choose hero image based on category
  const getHeroImage = () => {
    switch (slug.toLowerCase()) {
      case 'luxury': return 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80';
      case 'premium': return 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1920&q=80';
      case 'deluxe': return 'https://images.unsplash.com/photo-1629851416480-16b7f9d85420?auto=format&fit=crop&w=1920&q=80';
      case 'shared': return 'https://images.unsplash.com/photo-1632304918237-7f9754f73801?auto=format&fit=crop&w=1920&q=80';
      default: return 'https://images.unsplash.com/photo-1593693397690-3628073262ce?auto=format&fit=crop&w=1920&q=80';
    }
  };

  return (
    <div className="pt-20 pb-24 bg-gray-50 min-h-screen">
      {/* Category Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center mb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={getHeroImage()}
            alt={`${categoryTitle} Houseboats`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">{categoryTitle} Houseboats</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Experience the backwaters of Alleppey in our exquisite {slug} collection.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-ocean-blue">Available Boats in {categoryTitle}</h2>
          <p className="text-gray-500 font-medium">{houseboats.length} houseboats found</p>
        </div>

        {houseboats.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houseboats.map((boat: any) => (
              <div key={boat._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100 group">
                <div className="relative h-64 overflow-hidden">
                  {boat.image && (
                    <Image
                      src={urlFor(boat.image).url()}
                      alt={boat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-ocean-blue px-3 py-1 rounded-full text-xs font-bold shadow-sm capitalize">
                    {boat.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-ocean-blue line-clamp-1 group-hover:text-gold transition-colors">{boat.name}</h3>
                    <div className="flex items-center gap-1 bg-green-50 text-emerald px-2 py-1 rounded text-sm font-semibold shrink-0">
                      <span>★</span> {boat.rating}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Users className="h-4 w-4 text-ocean-blue" /> {boat.guestCapacity} Guests</span>
                    <span className="flex items-center gap-1"><BedDouble className="h-4 w-4 text-ocean-blue" /> {boat.bedrooms} Beds</span>
                  </div>
                  
                  <p className="text-gray-600 line-clamp-2 text-sm mb-6 flex-1">
                    {boat.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Starting from</p>
                      <p className="text-lg font-bold text-ocean-blue">₹{boat.startingPrice.toLocaleString('en-IN')} <span className="text-xs font-normal text-gray-500">/ night</span></p>
                    </div>
                    <Link href={`/houseboats/${boat.id}`}>
                      <Button className="bg-ocean-blue hover:bg-ocean-blue/90 text-white font-bold px-6 py-2 rounded-lg">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-12 rounded-2xl border border-gray-200 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-ocean-blue mb-4">No houseboats found</h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">We couldn't find any houseboats in the {categoryTitle} category at the moment. Please check back later or explore our other collections.</p>
            <Link href="/houseboats">
              <Button className="bg-gold hover:bg-gold/90 text-ocean-blue font-bold px-8 py-4 rounded-full">
                View All Houseboats
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
