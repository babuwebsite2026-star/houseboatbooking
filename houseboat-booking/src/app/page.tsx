import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Users, Crown, Star, ShieldCheck, BedDouble, Coffee, PhoneCall, Quote, Ship, Sun, Waves, Zap, Map } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { FEATURED_HOUSEBOATS_QUERY, HOME_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 30;

export default async function Home() {
  const [featuredBoats, homePage, siteSettings] = await Promise.all([
    client.fetch(FEATURED_HOUSEBOATS_QUERY),
    client.fetch(HOME_PAGE_QUERY),
    client.fetch(SITE_SETTINGS_QUERY)
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src={homePage?.heroImage ? urlFor(homePage.heroImage).url() : "https://images.unsplash.com/photo-1593693397690-3628073262ce?auto=format&fit=crop&w=1920&q=80"}
            alt="Kerala Backwaters"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle natural dark gradient for text legibility, without blocking or tinting the image green */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center mt-10">
          <div className="max-w-4xl mx-auto w-full">
            <h1 
              className="text-5xl md:text-7xl font-normal tracking-tight mb-6 text-white drop-shadow-2xl" 
              dangerouslySetInnerHTML={{ __html: homePage?.heroTitle?.replace(/class="[^"]*"/, 'class="font-bold"') || 'Experience the Magic of <br class="hidden md:block" /><span class="font-bold">Kerala Backwaters</span>' }}
            />
            <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto px-2 drop-shadow-lg font-medium">
              {homePage?.heroSubtitle || "Book premium and luxury houseboats for an unforgettable journey through the serene waters of Alleppey."}
            </p>


          </div>
        </div>
      </section>
      {/* What We Offer Section */}
      <section className="py-24 bg-[#FAF7F0] relative z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal tracking-wide text-text-heading mb-4 inline-block border-b-2 border-secondary-green pb-2">What we offer</h2>
            <p className="text-text-body max-w-2xl mx-auto mt-4 text-lg">
              Every way to explore the backwaters
            </p>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 pb-6 snap-x snap-mandatory md:snap-none hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {[
              { 
                title: "Private Houseboat", slug: "private", rating: "4.8", tag: "EXCLUSIVE", desc: "Rent an entire boat exclusively for your group with complete privacy and dedicated staff.", price: "9000", icon: Crown,
                colors: { iconBg: 'bg-[#E4EEED]', iconHoverBg: 'group-hover:bg-[#1B4B4A]', iconColor: 'text-[#1B4B4A]', badgeBg: 'bg-[#E4EEED]', badgeColor: 'text-[#1B4B4A]', badgeStar: 'fill-[#1B4B4A]', tagBg: 'bg-[#E4EEED]', tagColor: 'text-[#1B4B4A]' }
              },
              { 
                title: "Shared Houseboat", slug: "shared", rating: "4.8", tag: "BUDGET FRIENDLY", desc: "Book a private cabin on a shared boat. Same route, same Kerala meals, same crew.", price: "5999", icon: Users,
                colors: { iconBg: 'bg-[#FBF1DF]', iconHoverBg: 'group-hover:bg-[#D4A24C]', iconColor: 'text-[#D4A24C]', badgeBg: 'bg-[#FBF1DF]', badgeColor: 'text-[#D4A24C]', badgeStar: 'fill-[#D4A24C]', tagBg: 'bg-[#FBF1DF]', tagColor: 'text-[#D4A24C]' }
              },
              { 
                title: "Luxury Houseboat", slug: "luxury", rating: "5.0", tag: "5-STAR", desc: "Experience the pinnacle of backwater cruising with glass walls, premium AC, and a jacuzzi.", price: "15000", icon: Star,
                colors: { iconBg: 'bg-[#F0E6EF]', iconHoverBg: 'group-hover:bg-[#5B3A5C]', iconColor: 'text-[#5B3A5C]', badgeBg: 'bg-[#F0E6EF]', badgeColor: 'text-[#5B3A5C]', badgeStar: 'fill-[#5B3A5C]', tagBg: 'bg-[#F0E6EF]', tagColor: 'text-[#5B3A5C]' }
              },
              { 
                title: "Premium Houseboat", slug: "premium", rating: "4.9", tag: "HIGH-END", desc: "Upgraded interiors, full-time AC, and premium menu for a highly comfortable stay.", price: "12000", icon: ShieldCheck,
                colors: { iconBg: 'bg-[#EDEDED]', iconHoverBg: 'group-hover:bg-[#2B2B2B]', iconColor: 'text-[#2B2B2B]', badgeBg: 'bg-[#EDEDED]', badgeColor: 'text-[#2B2B2B]', badgeStar: 'fill-[#2B2B2B]', tagBg: 'bg-[#EDEDED]', tagColor: 'text-[#2B2B2B]' }
              },
              { 
                title: "Deluxe Houseboat", slug: "deluxe", rating: "4.7", tag: "GREAT VALUE", desc: "Comfortable night stay with AC during sleeping hours and authentic Kerala cuisine.", price: "7000", icon: BedDouble,
                colors: { iconBg: 'bg-light-green', iconHoverBg: 'group-hover:bg-primary-green', iconColor: 'text-primary-green', badgeBg: 'bg-light-green', badgeColor: 'text-primary-green', badgeStar: 'fill-primary-green', tagBg: 'bg-secondary-green/10', tagColor: 'text-secondary-green' }
              }
            ].map((offer, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-0 snap-center bg-white rounded-2xl p-6 border border-light-green shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-2">
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-12 h-12 rounded-xl ${offer.colors.iconBg} flex items-center justify-center ${offer.colors.iconHoverBg} transition-colors duration-300 shrink-0`}>
                    <offer.icon className={`w-6 h-6 ${offer.colors.iconColor} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className={`flex items-center gap-1 ${offer.colors.badgeBg} ${offer.colors.badgeColor} px-2 py-1 rounded text-xs font-bold`}>
                      <Star className={`w-3 h-3 ${offer.colors.badgeStar}`} /> {offer.rating}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${offer.colors.tagColor} ${offer.colors.tagBg} px-2 py-1 rounded-full`}>
                      {offer.tag}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-heading mb-3">{offer.title}</h3>
                <p className="text-text-body text-sm leading-relaxed mb-6 flex-grow">
                  {offer.desc}
                </p>
                
                <div className="pt-4 border-t border-light-green mt-auto">
                  <p className="text-[10px] text-text-body uppercase font-bold tracking-wider mb-1">From</p>
                  <p className="text-2xl font-black text-primary-green mb-4">₹{offer.price}</p>
                  
                  <Link href={`/category/${offer.slug}`}>
                    <Button className="w-full bg-white border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white font-bold rounded-xl transition-colors">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Houseboats */}
      <section className="py-24 bg-muted-bg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal tracking-wide text-text-heading mb-4 inline-block border-b-2 border-secondary-green pb-2">Featured Houseboats</h2>
            <p className="text-text-body max-w-2xl mx-auto mt-4">
              Discover our handpicked selection of the finest houseboats, offering unparalleled luxury and comfort on the backwaters.
            </p>
          </div>

          <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pb-6 snap-x snap-mandatory md:snap-none hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
            {featuredBoats.slice(0, 4).map((boat: any) => (
              <div key={boat._id} className="min-w-[85vw] md:min-w-0 snap-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-light-green">
                <div className="relative h-64 overflow-hidden">
                  {boat.image && (
                    <Image
                      src={urlFor(boat.image).url()}
                      alt={boat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-text-heading">{boat.name}</h3>
                    <div className="flex items-center gap-1 bg-light-green text-primary-green px-2 py-1 rounded text-sm font-semibold">
                      <Star className="w-3 h-3 fill-primary-green" /> {boat.rating}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-body mb-4">
                    <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {boat.guestCapacity} Guests</span>
                    <span>•</span>
                    <span>{boat.bedrooms} Bedrooms</span>
                  </div>
                  <p className="text-text-body line-clamp-2 mb-6 text-sm">
                    {boat.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-light-green">
                    <div>
                      <p className="text-xs text-text-body uppercase font-semibold">Starting from</p>
                      <p className="text-xl font-bold text-primary-green">₹{boat.startingPrice.toLocaleString('en-IN')} <span className="text-sm font-normal text-text-body">/ night</span></p>
                    </div>
                    <Link href={`/houseboats/${boat.id}`}>
                      <Button variant="outline" className="border-primary-green text-primary-green hover:bg-secondary-green hover:text-white transition-colors">
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
              <Button className="bg-primary-green hover:bg-secondary-green text-white px-8 py-6 rounded-full font-semibold transition-colors">
                Show More Houseboats
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal tracking-wide text-text-heading mb-4 inline-block border-b-2 border-secondary-green pb-2">{homePage?.galleryTitle || "Glimpses of Paradise"}</h2>
            <p className="text-text-body max-w-2xl mx-auto mt-4">
              {homePage?.gallerySubtitle || "Take a visual journey through our luxurious houseboats and the breathtaking Alleppey backwaters."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="col-span-2 row-span-2 relative h-64 md:h-full rounded-2xl overflow-hidden group">
              <Image src={homePage?.galleryImages?.[0] ? urlFor(homePage.galleryImages[0]).url() : "https://images.unsplash.com/photo-1593693397690-3628073262ce?auto=format&fit=crop&w=1920&q=80"} alt="Gallery 1" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group">
              <Image src={homePage?.galleryImages?.[1] ? urlFor(homePage.galleryImages[1]).url() : "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80"} alt="Gallery 2" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden group">
              <Image src={homePage?.galleryImages?.[2] ? urlFor(homePage.galleryImages[2]).url() : "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80"} alt="Gallery 3" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="col-span-2 relative h-48 md:h-64 rounded-2xl overflow-hidden group">
              <Image src={homePage?.galleryImages?.[3] ? urlFor(homePage.galleryImages[3]).url() : "https://images.unsplash.com/photo-1629851416480-16b7f9d85420?auto=format&fit=crop&w=800&q=80"} alt="Gallery 4" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/gallery">
              <Button variant="outline" className="border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-8 py-6 rounded-full font-semibold transition-colors">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-muted-bg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal tracking-wide text-text-heading mb-4 inline-block border-b-2 border-secondary-green pb-2">Why Choose Kerala Houseboats?</h2>
            <p className="text-text-body max-w-2xl mx-auto mt-4">
              We are committed to providing the most authentic, safe, and luxurious backwater experience in Alleppey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Verified Operators", desc: "All our houseboats are government verified and safety checked.", icon: ShieldCheck },
              { title: "24/7 Support", desc: "Our local team is always available to assist you during your trip.", icon: PhoneCall },
              { title: "Premium Rooms", desc: "Enjoy luxury AC bedrooms with attached premium washrooms.", icon: BedDouble },
              { title: "Authentic Food", desc: "Delicious traditional Kerala cuisine prepared fresh on board.", icon: Coffee },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl text-center hover:shadow-xl transition-shadow border border-light-green group shadow-sm">
                <div className="w-16 h-16 bg-light-green rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-green transition-colors">
                  <feature.icon className="w-8 h-8 text-primary-green group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-3">{feature.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal tracking-wide text-text-heading mb-4 inline-block border-b-2 border-secondary-green pb-2">What Our Guests Say</h2>
            <p className="text-text-body max-w-2xl mx-auto mt-4">
              Don't just take our word for it. Here are some reviews from our recent travelers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Rahul Sharma", time: "2 weeks ago", text: "Amazing experience! The 3-bedroom houseboat was luxurious and the food was incredible. Highly recommended for families." },
              { name: "Sarah Jenkins", time: "3 weeks ago", text: "The crew was so polite and the backwater views were mesmerizing. The 24/7 support really helped us coordinate our arrival." },
              { name: "Amit Patel", time: "1 month ago", text: "Booked a premium boat for our anniversary. The room decoration and candlelight dinner made it unforgettable." },
              { name: "Priya Singh", time: "2 months ago", text: "Very clean and well-maintained houseboat. The AC worked perfectly throughout the night. Will definitely book again!" },
              { name: "David Miller", time: "3 months ago", text: "Authentic Kerala food! The chef on board was fantastic. The whole booking process was smooth and transparent." },
              { name: "Neha Gupta", time: "3 months ago", text: "Safe, secure, and beautiful. Traveling with kids was a breeze thanks to the attentive staff." },
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-light-green relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-light-green" />
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />)}
                </div>
                <p className="text-text-body text-sm leading-relaxed mb-6">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <h4 className="font-bold text-text-heading">{review.name}</h4>
                  <span className="text-xs text-text-body/60">{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-muted-bg">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal tracking-wide text-text-heading mb-4 inline-block border-b-2 border-secondary-green pb-2">Frequently Asked Questions</h2>
            <p className="text-text-body mt-4">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "What is included in the houseboat package?", a: "Our packages typically include a welcome drink, lunch, evening tea with snacks, dinner, and breakfast. Exclusive use of the houseboat (unless shared), AC during sleeping hours, and a dedicated crew." },
              { q: "Are the houseboats safe for children?", a: "Yes, our houseboats are completely safe for children. The boats are designed with safety rails, and the crew is trained to assist families. Life jackets are also available on board." },
              { q: "When does the AC operate?", a: "In Deluxe and Premium houseboats, the AC usually operates from 9:00 PM to 6:00 AM. In Luxury houseboats, the AC can be operated anytime during the stay upon request." },
              { q: "Do you provide vegetarian or special diet food?", a: "Absolutely! We can customize the menu to accommodate vegetarian, vegan, Jain, or any specific dietary requirements. Just let us know during booking." },
              { q: "How do I make a booking?", a: "You can book directly through our website, send an inquiry through the contact form, or message us instantly on WhatsApp for quick confirmation and the best prices." },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-light-green overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-text-heading">
                  {faq.q}
                  <span className="transition group-open:rotate-180 text-primary-green">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-text-body leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Quick Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-normal tracking-wide text-text-heading mb-6 border-b-2 border-secondary-green pb-2 inline-block">Need Help Planning Your Trip?</h2>
              <p className="text-text-body mb-8 leading-relaxed">
                {siteSettings?.contactDescription || "Our local experts are here to help you customize the perfect backwater experience. Reach out to us for any queries, special requests, or immediate bookings."}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-light-green p-3 rounded-full text-primary-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-body/60 font-semibold uppercase">Call Us</p>
                    <p className="text-lg font-bold text-text-heading">{siteSettings?.phoneNumber || "+91 98460 46322"}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-light-green p-3 rounded-full text-primary-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <p className="text-sm text-text-body/60 font-semibold uppercase">Location</p>
                    <p className="text-lg font-bold text-text-heading">{siteSettings?.locationAddress || "Finishing Point, Alleppey, Kerala"}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex items-stretch">
              <div className="bg-white p-2 rounded-3xl shadow-lg border border-light-green w-full min-h-[400px] flex">
                <iframe
                  width="100%"
                  height="100%"
                  className="rounded-2xl border-0 flex-grow"
                  src="https://maps.google.com/maps?q=Finishing%20Point,%20Alleppey,%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kerala Houseboats Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-primary-green">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-normal tracking-wide mb-6">Ready for an Unforgettable Journey?</h2>
          <p className="text-xl text-light-green mb-10 max-w-2xl mx-auto">
            Book your dream houseboat experience today and create memories that will last a lifetime.
          </p>
          <Link href="/houseboats">
            <Button className="bg-white hover:bg-light-green text-primary-green font-bold px-10 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
              Explore Available Boats
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
