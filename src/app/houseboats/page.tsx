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
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-ocean-blue text-white py-12 mb-8">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Houseboats</h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Find the perfect houseboat for your Alleppey backwater journey. From intimate luxury suites to grand floating palaces.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar / Filters */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-28">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <Filter className="h-5 w-5 text-ocean-blue" />
                <h2 className="text-xl font-bold text-ocean-blue">Filters</h2>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search by name..." 
                    className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-ocean-blue/50"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <div className="space-y-2">
                  {['Luxury', 'Premium', 'Deluxe', 'Shared'].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-ocean-blue focus:ring-ocean-blue" />
                      <span className="text-gray-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Bedrooms */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Bedrooms</label>
                <div className="space-y-2">
                  {[1, 2, 3, '4+'].map((beds) => (
                    <label key={beds} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-ocean-blue focus:ring-ocean-blue" />
                      <span className="text-gray-600">{beds} Bedroom{beds !== 1 ? 's' : ''}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range (UI only) */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                <input type="range" className="w-full accent-ocean-blue" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>₹5,000</span>
                  <span>₹50,000+</span>
                </div>
              </div>

              <Button className="w-full bg-ocean-blue hover:bg-ocean-blue/90 text-white">
                Apply Filters
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4">
            
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
              <p className="text-gray-600 mb-4 sm:mb-0">
                Showing <span className="font-bold text-ocean-blue">{houseboats.length}</span> houseboats
              </p>
              <div className="flex items-center gap-4">
                <label className="text-sm text-gray-500">Sort by:</label>
                <select className="border border-gray-200 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-blue/50">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Rating: High to Low</option>
                </select>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {houseboats.map((boat: any) => (
                <div key={boat._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-100">
                  <div className="relative h-56 overflow-hidden">
                    {boat.image && (
                      <Image
                        src={urlFor(boat.image).url()}
                        alt={boat.name}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-ocean-blue px-3 py-1 rounded-full text-xs font-bold shadow-sm capitalize">
                      {boat.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-ocean-blue line-clamp-1">{boat.name}</h3>
                      <div className="flex items-center gap-1 bg-green-50 text-emerald px-2 py-1 rounded text-sm font-semibold shrink-0">
                        <span>★</span> {boat.rating}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><Users className="h-4 w-4 text-gray-400" /> {boat.guestCapacity} Guests</span>
                      <span className="flex items-center gap-1"><BedDouble className="h-4 w-4 text-gray-400" /> {boat.bedrooms} Beds</span>
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
                        <Button className="bg-ocean-blue hover:bg-ocean-blue/90 text-white">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination (UI only) */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <Button variant="outline" disabled className="w-10 h-10 p-0 border-gray-200">
                &lt;
              </Button>
              <Button className="w-10 h-10 p-0 bg-ocean-blue text-white hover:bg-ocean-blue/90">
                1
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0 border-gray-200 hover:bg-gray-50">
                2
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0 border-gray-200 hover:bg-gray-50">
                3
              </Button>
              <span className="text-gray-400 mx-1">...</span>
              <Button variant="outline" className="w-10 h-10 p-0 border-gray-200 hover:bg-gray-50">
                &gt;
              </Button>
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
}
