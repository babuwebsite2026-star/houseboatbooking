import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Search, Users, Crown, Star, ShieldCheck, BedDouble, Coffee, PhoneCall, Quote, Ship, Sun, Waves, Zap, Map, ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { FEATURED_HOUSEBOATS_QUERY, HOME_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Book Houseboat Alleppey Online | Brahmari Backwater Cruises",
  description: "Book the best luxury, premium, and deluxe Kerala houseboat packages online. Enjoy family, honeymoon, and group backwater cruises in Alleppey.",
};

export const revalidate = 30;

function GoogleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
  );
}

export default async function Home() {
  const [featuredBoats, homePage, siteSettings] = await Promise.all([
    client.fetch(FEATURED_HOUSEBOATS_QUERY),
    client.fetch(HOME_PAGE_QUERY),
    client.fetch(SITE_SETTINGS_QUERY)
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[82vh] md:h-screen flex items-center justify-center pt-20 overflow-hidden rounded-[40px] md:rounded-[80px] shadow-2xl m-2 md:m-4">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Subtle natural dark gradient for text legibility, without blocking or tinting the image green */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center mt-10">
          <div className="max-w-4xl mx-auto w-full">
            <h1 
              className="font-podium text-5xl sm:text-7xl md:text-9xl font-normal tracking-wide mb-4 text-white drop-shadow-2xl uppercase break-words" 
              dangerouslySetInnerHTML={{ __html: homePage?.heroTitle?.replace(/class="[^"]*"/, 'class="font-normal"') || 'Experience the Magic of <br class="hidden md:block" />Kerala Backwaters' }}
            />
            <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto px-2 drop-shadow-lg font-medium">
              {homePage?.heroSubtitle || "Book premium and luxury houseboats for an unforgettable journey through the serene waters of Alleppey."}
            </p>

          </div>
        </div>

        {/* Call to Book Floating Button */}
        <div className="absolute bottom-4 left-4 md:bottom-12 md:left-12 z-20 origin-bottom-left">
          <a href={`tel:${siteSettings?.phoneNumber || '+919846046322'}`}>
            <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold text-sm md:text-lg px-5 py-5 md:px-6 rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2 border-none">
              <PhoneCall className="w-4 h-4 md:w-5 md:h-5" />
              Call to Book
            </Button>
          </a>
        </div>

        {/* Google Rating Floating Badge */}
        <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 z-20 flex items-center gap-3 drop-shadow-lg scale-90 md:scale-100 origin-bottom-right">
          <GoogleLogo className="w-7 h-7 md:w-8 md:h-8" />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-white font-bold text-xl md:text-2xl leading-none">4.8</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-white -mt-0.5">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-white/90 text-[11px] md:text-sm font-medium uppercase tracking-widest mt-0.5">Google Rating</p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-16 bg-muted-bg">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-left mb-12">
            <span className="text-primary-green font-bold tracking-widest text-[11px] uppercase mb-2 block">CURATED EXPERIENCES</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-text-heading mb-4">Every way to explore the backwaters</h2>
          </div>
          
          <div className="flex flex-col md:flex-row md:overflow-x-auto gap-4 md:gap-6 pb-6 md:snap-x snap-mandatory hide-scrollbar">
            {[
              { 
                category: "5-STAR",
                title: "Luxury Houseboat", 
                slug: "luxury",
                desc: "Experience the pinnacle of backwater cruising with premium AC, and modern amenities.", 
                price: "15000",
                rating: "5.0",
                image: "/images/offers/luxury.jpg"
              },
              { 
                category: "HIGH-END",
                title: "Premium Houseboat", 
                slug: "premium",
                desc: "Upgraded interiors, full-time AC, and premium menu for a highly comfortable stay.", 
                price: "12000",
                rating: "4.9",
                image: "/images/offers/premium.jpg"
              },
              { 
                category: "GREAT VALUE",
                title: "Deluxe Houseboat", 
                slug: "deluxe",
                desc: "Comfortable night stay with AC during sleeping hours and authentic Kerala cuisine.", 
                price: "7000",
                rating: "4.7",
                image: "/images/offers/deluxe.jpg"
              },
              { 
                category: "BUDGET FRIENDLY",
                title: "Sharing Houseboat", 
                slug: "shared",
                desc: "Book a private cabin on a shared boat. Same route, same Kerala meals, same crew.", 
                price: "5999",
                rating: "4.8",
                image: "/images/offers/sharing.jpg"
              },
              { 
                category: "EXCLUSIVE",
                title: "Private Houseboat", 
                slug: "private",
                desc: "Rent an entire boat exclusively for your group. Complete privacy and dedicated staff.", 
                price: "9000",
                rating: "4.8",
                image: "/images/offers/private.jpg"
              }
            ].map((feature, idx) => (
              <Link href={`/category/${feature.slug}`} key={idx} className="block relative w-full md:w-[320px] shrink-0 h-[460px] rounded-[24px] overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 md:snap-center">
                {/* Background Image (Full height) */}
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay for Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />

                {/* Bookmark Icon */}
                <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md rounded-full p-2 z-10">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </div>
                
                {/* Content Section (Overlay at bottom) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end text-white z-10">
                  <div>
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="font-bold text-[18px] leading-tight text-white drop-shadow-md">{feature.title}</h3>
                      <span className="font-bold text-xs bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full whitespace-nowrap">From ₹{feature.price}</span>
                    </div>
                    <p className="text-white/80 text-[12px] line-clamp-2 mb-4 leading-relaxed drop-shadow-sm">
                      {feature.desc}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex gap-1.5 mb-2 overflow-x-auto hide-scrollbar">
                      <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md rounded-full px-2.5 py-1.5 text-[10px] font-semibold whitespace-nowrap border border-white/10">
                        <Star className="w-2.5 h-2.5 fill-[#facc15] text-[#facc15]" />
                        <span>{feature.rating}</span>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md rounded-full px-2.5 py-1.5 text-[10px] font-semibold whitespace-nowrap border border-white/10">
                        {feature.category}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>





      {/* Gallery Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-wide text-text-heading mb-4 inline-block border-b-2 border-secondary-green pb-2">{homePage?.galleryTitle || "Glimpses of Paradise"}</h2>
            <p className="text-text-body max-w-2xl mx-auto mt-4">
              {homePage?.gallerySubtitle || "Take a visual journey through our luxurious houseboats and the breathtaking Alleppey backwaters."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {homePage?.galleryImages?.slice(0, 6).map((image: any, index: number) => (
              <div key={index} className={`relative rounded-2xl overflow-hidden group ${index === 0 ? 'col-span-2 row-span-2 h-64 md:h-full' : 'h-48 md:h-64'}`}>
                <Image 
                  src={urlFor(image).url()} 
                  alt={`Gallery ${index + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
            ))}
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


      {/* Customer Reviews */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold tracking-wide text-text-heading mb-4 inline-block border-b-2 border-secondary-green pb-2">What Our Guests Say</h2>
            <p className="text-text-body max-w-2xl mx-auto mt-4">
              Don't just take our word for it. Here are some reviews from our recent travelers.
            </p>
          </div>
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8 pt-4 px-4 md:px-0">
            {[
              { name: "Rahul Sharma", time: "2 weeks ago", text: "Amazing experience! The 3-bedroom houseboat was luxurious and the food was incredible. Highly recommended for families." },
              { name: "Sarah Jenkins", time: "3 weeks ago", text: "The crew was so polite and the backwater views were mesmerizing. The 24/7 support really helped us coordinate our arrival." },
              { name: "Amit Patel", time: "1 month ago", text: "Booked a premium boat for our anniversary. The room decoration and candlelight dinner made it unforgettable." },
              { name: "Priya Singh", time: "2 months ago", text: "Very clean and well-maintained houseboat. The AC worked perfectly throughout the night. Will definitely book again!" },
              { name: "David Miller", time: "3 months ago", text: "Authentic Kerala food! The chef on board was fantastic. The whole booking process was smooth and transparent." },
              { name: "Neha Gupta", time: "3 months ago", text: "Safe, secure, and beautiful. Traveling with kids was a breeze thanks to the attentive staff." },
            ].map((review, idx) => (
              <div key={idx} className="w-[85vw] md:w-[400px] shrink-0 snap-center bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.06)] border border-light-green relative flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-light-green/50" />
                
                <div className="flex items-center gap-2 mb-6">
                  <GoogleLogo className="w-6 h-6" />
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-[#facc15] text-[#facc15]" />)}
                  </div>
                </div>
                
                <p className="text-text-body text-[15px] leading-relaxed mb-8 flex-1 italic">"{review.text}"</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-light-green/50">
                  <h4 className="font-bold text-text-heading">{review.name}</h4>
                  <span className="text-xs font-medium text-text-body/60">{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 bg-muted-bg">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold tracking-wide text-text-heading mb-4 inline-block border-b-2 border-secondary-green pb-2">Frequently Asked Questions</h2>
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
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-serif font-bold tracking-wide text-text-heading mb-6 border-b-2 border-secondary-green pb-2 inline-block">Need Help Planning Your Trip?</h2>
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
    </>
  );
}
