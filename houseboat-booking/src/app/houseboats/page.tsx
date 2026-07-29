import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Filter, Search, Users, BedDouble, SlidersHorizontal } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { ALL_HOUSEBOATS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 30;

export default async function HouseboatsListing() {
  const houseboats = await client.fetch(ALL_HOUSEBOATS_QUERY);
  return (
    <div className="bg-muted-bg min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/houseboats-hero.jpg"
          alt="Kerala Houseboats Fleet"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60 z-0" />
        
        <div className="relative z-10 text-center px-4 mt-8">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg tracking-wide uppercase">
            Our Fleet
          </h1>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto drop-shadow-md font-medium px-4">
            Discover the perfect vessel for your magical journey through the serene backwaters of Alleppey.
          </p>
        </div>
      </section>

      <div className="pb-20 container mx-auto px-4 md:px-8 pt-12">
        {/* Mobile-friendly Category Filters */}
        <div className="flex overflow-x-auto gap-3 mb-8 pb-4 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {[
            { name: 'All', path: '/houseboats' },
            { name: 'Luxury', path: '/category/luxury' },
            { name: 'Premium', path: '/category/premium' },
            { name: 'Deluxe', path: '/category/deluxe' },
            { name: 'Shared', path: '/category/shared' }
          ].map((cat) => (
            <Link 
              key={cat.name} 
              href={cat.path}
              className="snap-center shrink-0 whitespace-nowrap px-6 py-2.5 rounded-full border-2 border-primary-green/20 bg-white text-primary-green hover:border-primary-green hover:bg-primary-green hover:text-white transition-all font-semibold text-sm shadow-sm"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {houseboats.map((boat: any) => (
                <div key={boat._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col border border-light-green group cursor-pointer">
                  <div className="relative h-56 overflow-hidden">
                    {boat.image && (
                      <Image
                        src={urlFor(boat.image).url()}
                        alt={boat.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-text-heading line-clamp-1 group-hover:text-primary-green transition-colors">{boat.name}</h3>
                      <div className="flex items-center gap-1 bg-light-green text-black px-2 py-1 rounded text-sm font-semibold shrink-0">
                        <span className="text-[#facc15]">★</span> {boat.rating}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm text-text-body/80 mb-4 font-medium">
                      <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-secondary-green" /> {boat.guestCapacity} Guests</span>
                      <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-secondary-green" /> {boat.bedrooms} Beds</span>
                    </div>
                    
                    <p className="text-text-body line-clamp-2 text-sm mb-6 flex-1 leading-relaxed">
                      {boat.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-light-green mt-auto">
                      <div>
                        <p className="text-[10px] text-text-body uppercase font-bold tracking-wider mb-1">Starting from</p>
                        <p className="text-xl font-black text-black">₹{boat.startingPrice.toLocaleString('en-IN')} <span className="text-xs font-medium text-text-body/60 normal-case">/ night</span></p>
                      </div>
                      <Link href={`/houseboats/${boat.id}`}>
                        <Button className="bg-white border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white font-bold rounded-xl transition-colors px-6">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination (UI only) */}
            <div className="flex justify-center items-center gap-2 mt-16 mb-8">
              <Button variant="outline" disabled className="w-10 h-10 p-0 border-light-green text-text-heading/50 rounded-xl">
                &lt;
              </Button>
              <Button className="w-10 h-10 p-0 bg-primary-green text-white hover:bg-secondary-green font-bold rounded-xl shadow-md">
                1
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0 border-light-green text-primary-green hover:bg-light-green hover:border-primary-green font-bold rounded-xl transition-colors">
                2
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0 border-light-green text-primary-green hover:bg-light-green hover:border-primary-green font-bold rounded-xl transition-colors">
                3
              </Button>
              <span className="text-text-body/60 mx-1 font-bold">...</span>
              <Button variant="outline" className="w-10 h-10 p-0 border-light-green text-primary-green hover:bg-light-green hover:border-primary-green font-bold rounded-xl transition-colors">
                &gt;
              </Button>
            </div>
            
      </div>
    </div>
  );
}
