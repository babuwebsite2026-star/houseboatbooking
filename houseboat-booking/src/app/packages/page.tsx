import Image from "next/image";
import Link from "next/link";
import { VolumeX, Play, MessageCircle, Building2, ArrowUpRight, ChevronDown } from "lucide-react";

export default function Packages() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[62vh] min-h-[480px] md:h-[68vh] w-full overflow-hidden flex flex-col pt-20">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://jfj4iebfwyck7oka.public.blob.vercel-storage.com/media/1769860892259-1ea33515-4da7-4f41-8b8f-bec189304b04-copy_681B1836-E1B6-41B8-915C-E47283EFC1AD-MhCFx5PWeSXyW1q8JXdVX8rB83Mklg.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60"></div>
        </div>
        
        <button className="absolute bottom-8 right-6 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white transition-all duration-300 group" aria-label="Unmute video">
          <VolumeX className="w-6 h-6" />
        </button>

        <div className="relative z-10 container mx-auto px-4 flex-grow flex flex-col items-center justify-center text-center pb-16 md:pb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-5">
            Kerala, handled end to end
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05] tracking-tight drop-shadow-lg max-w-4xl">
            Backwater & hill-country <span className="text-[#CDFFB0] italic">packages</span>
          </h1>
          <p className="mt-5 text-white/85 text-base md:text-xl max-w-2xl leading-relaxed drop-shadow">
            Houseboats, misty hills, wildlife and beaches - curated private journeys across Kerala, arranged down to the last detail.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow">12</div>
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/70 font-medium">Curated journeys</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow">1 - 9 Nights</div>
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/70 font-medium">Trip lengths</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white drop-shadow">₹6,500</div>
              <div className="text-[10px] md:text-xs uppercase tracking-wider text-white/70 font-medium">Starting from</div>
            </div>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <section className="bg-ivory-dark py-10 md:py-14 border-b border-black/5 relative z-20">
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto pb-4 hide-scrollbar gap-6 md:gap-10 snap-x justify-start md:justify-center items-start">
            {[
              { name: "Alleppey", journeys: 8, image: "https://images.unsplash.com/photo-1593693397690-362cb9666cb3?q=80&w=500&auto=format&fit=crop" },
              { name: "Munnar", journeys: 7, image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=500&auto=format&fit=crop" },
              { name: "Thekkady", journeys: 4, image: "https://images.unsplash.com/photo-1596489370631-f1f45dc2463e?q=80&w=500&auto=format&fit=crop" },
              { name: "Cochin", journeys: 6, image: "https://images.unsplash.com/photo-1598322616259-269bf39cc03f?q=80&w=500&auto=format&fit=crop" },
              { name: "Kanyakumari", journeys: 1, image: "https://images.unsplash.com/photo-1596706917637-23f2f811de52?q=80&w=500&auto=format&fit=crop" },
              { name: "Kovalam", journeys: 1, image: "https://images.unsplash.com/photo-1623512860431-137a85d3df1b?q=80&w=500&auto=format&fit=crop" },
              { name: "Malaysia", journeys: 3, image: "https://images.unsplash.com/photo-1558015382-91941d28e892?q=80&w=500&auto=format&fit=crop" },
            ].map((dest, i) => (
              <Link href={`/packages?destination=${dest.name.toLowerCase()}`} key={i} className="flex flex-col items-center gap-4 group snap-center shrink-0 w-28 md:w-36">
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-sm ring-4 ring-transparent group-hover:ring-gold/30 transition-all duration-300">
                  <Image src={dest.image} alt={dest.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-300"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground text-[15px] md:text-lg group-hover:text-gold transition-colors">{dest.name}</h3>
                  <p className="text-secondary text-[10px] md:text-[11px] font-bold uppercase tracking-widest mt-1">{dest.journeys} {dest.journeys === 1 ? 'Journey' : 'Journeys'}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kerala Houseboats Specials Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-px w-10 bg-gold/50"></span>
              <p className="text-gold text-[11px] font-semibold tracking-[0.35em] uppercase">Featured this season</p>
              <span className="h-px w-10 bg-gold/50"></span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-forest-deep leading-tight">Kerala Houseboats specials</h2>
          </div>

          <div className="mb-4 md:mb-5">
            <Link href="/packages/malaysia-tour-package-10d9n" className="group relative block rounded-2xl overflow-hidden ring-1 ring-gold/25 hover:ring-gold shadow-sm hover:shadow-xl transition-all duration-300 aspect-[16/11] md:aspect-[16/9]">
              <Image 
                alt="Malaysia Grand Tour" 
                src="https://images.unsplash.com/photo-1558015382-91941d28e892?q=80&w=2070&auto=format&fit=crop" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-2">Signature journey</p>
                <h3 className="text-white font-serif font-light leading-tight mb-2 text-2xl md:text-3xl">Malaysia Grand Tour: Kuala Lumpur, Cameron Highlands, Penang & Langkawi</h3>
                <p className="text-white/70 text-sm mb-4">Enquire for pricing</p>
                <span className="inline-flex items-center gap-1.5 bg-white text-forest-deep text-xs font-semibold px-4 py-2 rounded-full group-hover:gap-2.5 transition-all">
                  View journey <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {/* Custom Itinerary */}
            <a href="https://wa.me/919846046322" target="_blank" rel="noopener noreferrer" className="group relative min-h-[210px] rounded-2xl overflow-hidden bg-forest-deep ring-1 ring-gold/25 hover:ring-gold shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-center p-5 md:p-6 block">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '22px 22px' }}></div>
              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 w-fit bg-gold/15 border border-gold/40 text-gold text-[9px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full mb-3">
                  <MessageCircle className="w-3 h-3" /> Tailor-made
                </span>
                <h3 className="text-white font-serif font-light text-lg mb-1.5 leading-tight">Design your own itinerary</h3>
                <p className="text-white/65 text-xs mb-4 leading-relaxed">Tell us your dates - we'll build a private Kerala trip for you.</p>
                <span className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-semibold px-3.5 py-1.5 rounded-full group-hover:brightness-105 transition-all w-fit">
                  Chat on WhatsApp <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>

            {/* Video Tile */}
            <div className="relative min-h-[210px] rounded-2xl overflow-hidden ring-1 ring-gold/25 shadow-sm bg-forest-deep">
              <video src="https://jfj4iebfwyck7oka.public.blob.vercel-storage.com/media/1769860892259-1ea33515-4da7-4f41-8b8f-bec189304b04-copy_681B1836-E1B6-41B8-915C-E47283EFC1AD-MhCFx5PWeSXyW1q8JXdVX8rB83Mklg.mov" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover"></video>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between gap-2">
                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1.5 text-gold text-[9px] font-semibold uppercase tracking-[0.2em] mb-1.5">
                    <Play className="w-2.5 h-2.5 fill-current" /> Real footage
                  </span>
                  <h3 className="text-white font-serif font-light text-base leading-tight">Kerala, in motion</h3>
                </div>
              </div>
            </div>

            {/* Corporate */}
            <Link href="/corporate" className="group relative block min-h-[210px] rounded-2xl overflow-hidden ring-1 ring-gold/25 hover:ring-gold shadow-sm hover:shadow-xl transition-all duration-300 bg-forest-deep flex flex-col justify-center p-6">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '22px 22px' }}></div>
              <div className="relative z-10">
                <span className="w-11 h-11 rounded-full bg-gold/15 border border-gold/40 text-gold flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </span>
                <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.25em] mb-2">Corporate & groups</p>
                <h3 className="text-white font-serif font-light text-lg mb-3 leading-tight">Team offsites & group retreats</h3>
                <span className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold group-hover:gap-2.5 transition-all w-fit">
                  Enquire for events <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>

            {/* Discovery Tour */}
            <Link href="/packages/malaysia-tour-package-7d6n" className="group relative block rounded-2xl overflow-hidden ring-1 ring-gold/25 hover:ring-gold shadow-sm hover:shadow-xl transition-all duration-300 min-h-[210px]">
              <Image 
                alt="Malaysia Discovery Tour" 
                src="https://images.unsplash.com/photo-1558015382-91941d28e892?q=80&w=2070&auto=format&fit=crop" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/20 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <p className="text-gold text-[10px] font-semibold uppercase tracking-[0.3em] mb-2">Best value</p>
                <h3 className="text-white font-serif font-light leading-tight mb-2 text-lg">Malaysia Discovery Tour</h3>
                <span className="inline-flex items-center gap-1.5 bg-white text-forest-deep text-xs font-semibold px-4 py-2 rounded-full group-hover:gap-2.5 transition-all">
                  View journey <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore More Section */}
      <section className="bg-ivory-dark py-14 md:py-20 border-t border-forest/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-10">
            <span className="h-px w-10 bg-gold/50"></span>
            <p className="text-gold text-[11px] font-semibold tracking-[0.35em] uppercase">Explore more</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-serif font-light text-forest-deep mb-4">Houseboats</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                <li><Link href="/houseboats" className="text-gray-500 hover:text-forest text-sm transition-colors">Houseboats in Alleppey</Link></li>
                <li><Link href="/houseboats/luxury" className="text-gray-500 hover:text-forest text-sm transition-colors">Luxury Houseboats</Link></li>
                <li><Link href="/houseboats/day-cruise" className="text-gray-500 hover:text-forest text-sm transition-colors">Day Cruise Tours</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif font-light text-forest-deep mb-4">By Bedroom Size</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                <li><Link href="/1-bedroom-houseboat-alleppey" className="text-gray-500 hover:text-forest text-sm transition-colors">1 Bedroom Houseboat</Link></li>
                <li><Link href="/2-bedroom-houseboat-alleppey" className="text-gray-500 hover:text-forest text-sm transition-colors">2 Bedroom Houseboat</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif font-light text-forest-deep mb-4">Guides & Itineraries</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                <li><Link href="/blog/best-time-visit-alleppey-backwaters-kerala" className="text-gray-500 hover:text-forest text-sm transition-colors">Best Time to Visit Alleppey</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-nature-green text-xs font-bold tracking-[0.25em] uppercase mb-3">Good to know</p>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">Questions, answered</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "What is included in a Kerala tour package?",
                a: "Our packages are all-inclusive: accommodation, daily breakfast plus all meals on the houseboat, private air-conditioned transfers and sightseeing, applicable entry assistance and an English-speaking guide on tour days."
              },
              {
                q: "How much advance do I need to pay to book?",
                a: "You can reserve any package with just 25% advance. The balance is payable as per your confirmation terms."
              },
              {
                q: "Can you customise a package for my dates and budget?",
                a: "Yes. Every itinerary can be tailored to your dates, group size, hotel category and interests. Message us on WhatsApp or use the contact form and your dedicated trip manager will design a private itinerary for you."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-black/5 overflow-hidden">
                <button className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-5 group">
                  <span className="font-semibold text-gray-900 text-[15px] md:text-base">{faq.q}</span>
                  <ChevronDown className="w-5 h-5 shrink-0 text-nature-deep-green transition-transform duration-300 group-focus:rotate-180" />
                </button>
                <div className="hidden group-focus:block px-5 md:px-6 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
