import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Users } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { FEATURED_HOUSEBOATS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const featuredBoats = await client.fetch(FEATURED_HOUSEBOATS_QUERY);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1593693397690-3628073262ce?auto=format&fit=crop&w=1920&q=80"
            alt="Kerala Backwaters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Experience the Magic of <br className="hidden md:block" />
            <span className="text-gold">Kerala Backwaters</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Book premium and luxury houseboats for an unforgettable journey through the serene waters of Alleppey.
          </p>

          {/* Search Bar UI */}
          <div className="bg-white rounded-lg p-2 md:p-4 max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center shadow-2xl">
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full border-b md:border-b-0 md:border-r border-gray-200 text-left">
              <Calendar className="text-ocean-blue h-5 w-5" />
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">Check-in / Check-out</p>
                <p className="text-gray-900 text-sm">Select Dates</p>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 py-2 w-full border-b md:border-b-0 md:border-r border-gray-200 text-left">
              <Users className="text-ocean-blue h-5 w-5" />
              <div>
                <p className="text-xs text-gray-500 font-semibold uppercase">Guests</p>
                <p className="text-gray-900 text-sm">2 Adults, 0 Children</p>
              </div>
            </div>
            <div className="w-full md:w-auto px-2">
              <Button className="w-full bg-gold hover:bg-gold/90 text-ocean-blue font-bold px-8 py-6 rounded-md flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Boats
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Houseboats */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ocean-blue mb-4">Featured Houseboats</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of the finest houseboats, offering unparalleled luxury and comfort on the backwaters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBoats.map((boat: any) => (
              <div key={boat._id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
                <div className="relative h-64 overflow-hidden">
                  {boat.image && (
                    <Image
                      src={urlFor(boat.image).url()}
                      alt={boat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-ocean-blue px-3 py-1 rounded-full text-xs font-bold capitalize">
                    {boat.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-ocean-blue">{boat.name}</h3>
                    <div className="flex items-center gap-1 bg-green-50 text-emerald px-2 py-1 rounded text-sm font-semibold">
                      <span>★</span> {boat.rating}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {boat.guestCapacity} Guests</span>
                    <span>•</span>
                    <span>{boat.bedrooms} Bedrooms</span>
                  </div>
                  <p className="text-gray-600 line-clamp-2 mb-6 text-sm">
                    {boat.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">Starting from</p>
                      <p className="text-xl font-bold text-ocean-blue">₹{boat.startingPrice.toLocaleString('en-IN')} <span className="text-sm font-normal text-gray-500">/ night</span></p>
                    </div>
                    <Link href={`/houseboats/${boat.id}`}>
                      <Button variant="outline" className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white transition-colors">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/houseboats">
              <Button className="bg-ocean-blue hover:bg-ocean-blue/90 text-white px-8 py-6 rounded-full font-semibold">
                View All Houseboats
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-ocean-blue mb-4">Choose Your Experience</h2>
              <p className="text-gray-600">Select the perfect category for your backwater journey.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Luxury', 'Premium', 'Deluxe', 'Shared'].map((category) => (
              <Link href={`/houseboats?category=${category.toLowerCase()}`} key={category} className="group relative h-80 rounded-2xl overflow-hidden block">
                <Image
                  src={
                    category === 'Luxury' ? 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80' :
                    category === 'Premium' ? 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80' :
                    category === 'Deluxe' ? 'https://images.unsplash.com/photo-1629851416480-16b7f9d85420?auto=format&fit=crop&w=800&q=80' :
                    'https://images.unsplash.com/photo-1632304918237-7f9754f73801?auto=format&fit=crop&w=800&q=80'
                  }
                  alt={category}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{category}</h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      Explore our {category.toLowerCase()} options &rarr;
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-ocean-blue mb-4">Glimpses of Paradise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our luxurious houseboats and the breathtaking Alleppey backwaters.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 relative h-64 md:h-full rounded-2xl overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1593693397690-3628073262ce?auto=format&fit=crop&w=1920&q=80" alt="Gallery 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" alt="Gallery 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80" alt="Gallery 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-2 relative h-48 md:h-64 rounded-2xl overflow-hidden group">
              <Image src="https://images.unsplash.com/photo-1629851416480-16b7f9d85420?auto=format&fit=crop&w=800&q=80" alt="Gallery 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button variant="outline" className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white px-8 py-6 rounded-full font-semibold">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Quick Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-ocean-blue mb-6">Need Help Planning Your Trip?</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our local experts are here to help you customize the perfect backwater experience. Reach out to us for any queries, special requests, or immediate bookings.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-ocean-blue/10 p-3 rounded-full text-ocean-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Call Us</p>
                    <p className="text-lg font-bold text-gray-900">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-ocean-blue/10 p-3 rounded-full text-ocean-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold uppercase">Location</p>
                    <p className="text-lg font-bold text-gray-900">Finishing Point, Alleppey, Kerala</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-ocean-blue mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean-blue/50" />
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean-blue/50" />
                  </div>
                  <div>
                    <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ocean-blue/50"></textarea>
                  </div>
                  <Button className="w-full bg-ocean-blue hover:bg-ocean-blue/90 text-white font-bold py-4 rounded-xl">
                    Submit Enquiry
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-ocean-blue"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for an Unforgettable Journey?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book your dream houseboat experience today and create memories that will last a lifetime.
          </p>
          <Link href="/houseboats">
            <Button className="bg-gold hover:bg-gold/90 text-ocean-blue font-bold px-10 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
              Explore Available Boats
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
