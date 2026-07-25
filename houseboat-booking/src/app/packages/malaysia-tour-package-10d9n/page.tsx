"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { 
  Star, Users, Clock, MapPin, ChevronDown, 
  Sun, Moon, Coffee, CheckCircle2, MessageCircle 
} from "lucide-react";

export default function MalaysiaGrandTourPage() {
  const [openDay, setOpenDay] = useState<number | null>(1); // Day 1 open by default

  const toggleDay = (dayNumber: number) => {
    setOpenDay(openDay === dayNumber ? null : dayNumber);
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Kuala Lumpur - The Klang Valley",
      description: "Welcome to Malaysia! After landing at Kuala Lumpur International Airport, you'll be taken to your hotel for check-in. Enjoy your day at your own pace by delving into the city's heritage and culture. You might want to visit Merdeka Square and experience the architecture of Kampung Baru houses. Also, you can uncover the historic Sze Ya Temple and wander the streets of Central and Petaling markets. In the evening, you will be transported back to your hotel for an overnight stay.",
      experiences: ["Airport pickup", "Merdeka Square", "Kampung Baru", "Sze Ya Temple", "Petaling Street Market"],
      accommodation: "Selected Category Hotel, Kuala Lumpur"
    },
    {
      day: 2,
      title: "Kuala Lumpur City Tour",
      description: "Today, embark on a journey to KL Tower, where you will be captivated by the remarkable vistas of Kuala Lumpur's skyline. Afterward, explore Istana Negara, the National Palace of Malaysia. Pay your respects at Tugu Negara, a tribute to the courageous souls honored at the National Monument. Admire the exquisite Moorish design of the Sultan Abdul Samad Building and indulge in local treats at Cocoa Boutique. Discover tranquility at the National Mosque and wrap up your day with the stunning panoramas from the observation deck of the Petronas Twin Towers before being escorted back to your hotel.",
      experiences: ["KL Tower", "Istana Negara", "Tugu Negara", "Sultan Abdul Samad Building", "National Mosque", "Petronas Twin Towers"],
      accommodation: "Selected Category Hotel, Kuala Lumpur",
      meals: "Breakfast"
    },
    {
      day: 3,
      title: "Cameron Highlands - Leisure Day",
      description: "After checking out, embark on a scenic drive to the picturesque countryside of Cameron Highlands. Check into your hotel, take a moment to relax, and enjoy a leisurely day. You might wander through the verdant tea estates and immerse yourself in the local culture by visiting attractions like the Lavender Garden and Sam Poh Temple. Later, treat yourself to a charming afternoon tea at one of the delightful colonial-style tea houses before heading back to your hotel for an overnight stay.",
      experiences: ["Scenic drive to Cameron Highlands", "Tea Estates", "Lavender Garden", "Sam Poh Temple", "Colonial-style afternoon tea"],
      accommodation: "Selected Category Hotel, Cameron Highlands",
      meals: "Breakfast"
    },
    {
      day: 4,
      title: "Cameron Highlands Day Tour",
      description: "Uncover the allure of the Cameron Highlands during a guided day excursion. Start your adventure by visiting the famous Boh Tea Plantations, where you can traverse the verdant tea fields and stunning vistas. Subsequently, visit the Butterfly Garden, where you can be awestruck by over 5000 butterflies. Discover the picturesque magnificence of the Lata Iskandar Waterfall in Tapah, and to top it off, savor honey-tasting experiences at the Bee Farm. Finally, you will be transported to your hotel for a restful overnight stay.",
      experiences: ["Boh Tea Plantations", "Butterfly Garden", "Lata Iskandar Waterfall", "Bee Farm honey-tasting"],
      accommodation: "Selected Category Hotel, Cameron Highlands",
      meals: "Breakfast"
    },
    {
      day: 5,
      title: "Penang - Leisure Day",
      description: "After checking out, embark on your adventure to Penang, the 'Gem of the Orient'. Upon reaching, check in and enjoy the day at your leisure. You may wander through the historical lanes of George Town, a UNESCO World Heritage Site, and savor a classic Penang lunch. Afterwards, immerse yourself in the island's rich culture by visiting notable sites like the Khoo Kongsi clan house or simply unwind on the sands of Batu Ferringhi Beach. Later, head back to your hotel for an overnight stay.",
      experiences: ["Transfer to Penang", "George Town UNESCO Heritage", "Khoo Kongsi clan house", "Batu Ferringhi Beach"],
      accommodation: "Selected Category Hotel, Penang",
      meals: "Breakfast"
    },
    {
      day: 6,
      title: "Penang Hill - Kek Lok Si Temple",
      description: "Start your adventure by taking a ride on the Penang Hill Funicular Railway, traveling upward to the peak for stunning panoramic vistas of the island and beyond. Wander through the verdant scenery and visit sights like the historic David Brown's Restaurant and Tea Terraces. Afterwards, proceed to Kek Lok Si Temple, the largest Buddhist temple in Southeast Asia, showcasing the Seven-Tier Pagoda and the grand Kuan Yin statue. Immerse yourself in the spiritual atmosphere, then get transferred to your accommodation.",
      experiences: ["Penang Hill Funicular Railway", "David Brown's Restaurant and Tea Terraces", "Kek Lok Si Temple", "Seven-Tier Pagoda", "Kuan Yin statue"],
      accommodation: "Selected Category Hotel, Penang",
      meals: "Breakfast"
    },
    {
      day: 7,
      title: "Langkawi",
      description: "Check out from your accommodation and make your way to Langkawi, the Gem of Kedah. Upon your arrival, check in and spend your day at your leisure. You can explore Langkawi's distinctive mangrove habitat on a guided boat expedition through Kilim Karst Geoforest Park and Tanjung Rhu. Encounter an array of different creatures at Langkawi Wildlife Park and visit Bird Paradise, home to over 2500 avians. You can also purchase unique handmade crafts and mementos before heading back to your lodging for an overnight stay.",
      experiences: ["Transfer to Langkawi", "Kilim Karst Geoforest Park", "Tanjung Rhu", "Langkawi Wildlife Park", "Bird Paradise"],
      accommodation: "Selected Category Hotel, Langkawi",
      meals: "Breakfast"
    },
    {
      day: 8,
      title: "Langkawi Island-Hopping Speedboat",
      description: "Get ready for an exhilarating speedboat adventure around Langkawi's breathtaking islands, such as Dayang Bunting, Singa Besar, and Beras Basah. Feel the excitement of eagle watching from the vessel at Big Lions Island, where you can observe these magnificent birds in their natural environment. Additionally, visit Pulau Dayang Bunting, renowned for the stunning Lake of the Pregnant Maiden, and soak in the peaceful charm of this natural marvel. Afterwards, return to your accommodation.",
      experiences: ["Speedboat adventure", "Dayang Bunting", "Singa Besar", "Beras Basah", "Eagle watching at Big Lions Island", "Lake of the Pregnant Maiden"],
      accommodation: "Selected Category Hotel, Langkawi",
      meals: "Breakfast"
    },
    {
      day: 9,
      title: "Leisure Day at Langkawi",
      description: "Take a break today and enjoy a leisurely day. Experience the exhilarating Langkawi Cable Car, renowned as one of the world's steepest cable rides, and discover the enchanting underwater realm of the Andaman Sea at Underwater World. Next, appreciate the famous Eagle Square, a true emblem of Langkawi's identity, while immersing yourself in the island's agricultural legacy at Laman Padi Rice Garden. Explore the Galeria Perdana Museum and soak in the vibrant vibe of Langkawi's night markets before heading back to your accommodation.",
      experiences: ["Langkawi Cable Car", "Underwater World", "Eagle Square", "Laman Padi Rice Garden", "Galeria Perdana Museum", "Night markets"],
      accommodation: "Selected Category Hotel, Langkawi",
      meals: "Breakfast"
    },
    {
      day: 10,
      title: "Departure",
      description: "Say goodbye to Malaysia and complete your hotel check-out. Next, head to the airport, with your suitcase brimming with experiences.",
      experiences: ["Hotel check-out", "Transfer to Airport"],
      meals: "Breakfast"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans pb-20">
      
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden group">
        <div className="absolute inset-0 transition-transform duration-[20s] ease-in-out group-hover:scale-110">
          <Image 
            src="/malaysia.jpg" 
            alt="Malaysia Grand Tour" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3e]/90 via-[#0f3d3e]/40 to-transparent"></div>
        
        <div className="absolute bottom-0 inset-x-0 pb-12 pt-32">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="bg-gold text-[#0f3d3e] px-3 py-1 text-xs font-black uppercase tracking-widest flex items-center gap-1.5 shadow-[4px_4px_0px_white]">
                <Star className="w-3 h-3 fill-current" /> Top Rated
              </div>
              <div className="bg-transparent border border-white/50 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 backdrop-blur-sm">
                <Users className="w-3 h-3" /> Small Group
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1] tracking-tight uppercase mb-8 drop-shadow-2xl">
              Malaysia Grand Tour: <br/>Kuala Lumpur, Cameron Highlands, <br/>Penang & Langkawi
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-white/20 pt-6">
              <div className="text-white">
                <div className="flex items-center gap-2 text-white/60 text-sm uppercase tracking-wide font-bold mb-1">
                  <Clock className="w-4 h-4 text-gold" /> Duration
                </div>
                <div className="text-lg md:text-xl font-bold">10 Days, 9 Nights</div>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-2 text-white/60 text-sm uppercase tracking-wide font-bold mb-1">
                  <MapPin className="w-4 h-4 text-gold" /> Location
                </div>
                <div className="text-lg md:text-xl font-bold truncate">Malaysia</div>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-2 text-white/60 text-sm uppercase tracking-wide font-bold mb-1">
                  <Star className="w-4 h-4 text-gold" /> Reviews
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg md:text-xl font-bold">4.9/5</span>
                  <div className="flex text-gold">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <div className="text-white">
                <div className="text-white/60 text-sm uppercase tracking-wide font-bold mb-1">Pricing</div>
                <div className="text-lg md:text-xl font-bold text-gold">Enquire</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8 max-w-6xl mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16">
          
          {/* Left Column: Details */}
          <div className="space-y-16">
            
            {/* Overview / Vibe */}
            <div id="overview" className="scroll-mt-24">
              <h2 className="text-3xl font-black uppercase mb-6 text-[#0f3d3e]">The Vibe</h2>
              <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                A complete 10-day journey through Malaysia's finest - the modern skyline of Kuala Lumpur, the cool tea estates of Cameron Highlands, the UNESCO heritage lanes of Penang, and the island beaches of Langkawi.
              </p>
              
              <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-8 rounded-3xl">
                <h3 className="font-bold text-[#0f3d3e] uppercase tracking-widest mb-6">Trip Highlights</h3>
                <ul className="grid md:grid-cols-2 gap-5">
                  {[
                    "Kuala Lumpur: Petronas Twin Towers, KL Tower & City Heritage Trail",
                    "Cameron Highlands: Tea Plantations, Butterfly Garden & Waterfalls",
                    "Penang: George Town UNESCO Heritage, Penang Hill & Kek Lok Si Temple",
                    "Langkawi: Island-Hopping Speedboat, Cable Car & Duty-Free Shopping"
                  ].map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-gold font-bold mt-0.5">•</span>
                      <span className="text-gray-700 font-medium leading-snug">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Itinerary */}
            <div id="itinerary" className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <h2 className="text-lg font-black uppercase text-[#0f3d3e] mb-10 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold" /> Trip Itinerary
              </h2>
              
              <div className="relative border-l-2 border-gray-100 ml-4 md:ml-6 space-y-10">
                {itinerary.map((day, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-12">
                    {/* Timeline Dot */}
                    <div 
                      className={`absolute -left-[11px] top-0 w-5 h-5 rounded-full border-4 transition-colors duration-300 ${openDay === day.day ? 'bg-gold border-gold' : 'bg-white border-gold/40'}`}
                    ></div>
                    
                    {/* Header */}
                    <button 
                      onClick={() => toggleDay(day.day)}
                      className="w-full flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2 group text-left"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-3">
                        <span className="bg-[#0f3d3e] text-gold font-black uppercase text-[10px] px-3 py-1 tracking-widest rounded-md w-fit">
                          Day {day.day}
                        </span>
                        <h3 className={`text-[13px] md:text-sm font-black uppercase transition-colors ${openDay === day.day ? 'text-[#0f3d3e]' : 'text-gray-600 group-hover:text-[#0f3d3e]'}`}>
                          {day.title}
                        </h3>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openDay === day.day ? 'rotate-180 text-[#0f3d3e]' : ''}`} />
                    </button>
                    
                    {/* Accordion Content */}
                    <div 
                      className={`grid transition-all duration-500 ease-in-out ${openDay === day.day ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-gray-600 leading-relaxed mb-8">
                          {day.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          
                          {/* Experiences */}
                          {day.experiences && (
                            <div className="bg-[#faf9f6] p-5 rounded-2xl border border-gray-100/50">
                              <h4 className="flex items-center gap-2 font-bold uppercase text-xs tracking-wider text-gray-500 mb-4">
                                <Sun className="w-4 h-4 text-gold" /> Included Experiences
                              </h4>
                              <ul className="space-y-3">
                                {day.experiences.map((exp, expIdx) => (
                                  <li key={expIdx} className="flex items-start gap-2 text-sm font-medium text-gray-800">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0"></div>
                                    {exp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {/* Accommodation & Meals */}
                          <div className="space-y-4">
                            {day.accommodation && (
                              <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-2xl hover:border-gold/30 transition-colors bg-white shadow-sm">
                                <div className="w-10 h-10 bg-ocean-blue/10 text-ocean-blue rounded-full flex items-center justify-center flex-shrink-0">
                                  <Moon className="w-5 h-5" />
                                </div>
                                <div>
                                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">Accommodation</p>
                                  <p className="font-bold text-gray-900 text-sm">{day.accommodation}</p>
                                </div>
                              </div>
                            )}
                            
                            {day.meals && (
                              <div className="flex items-start gap-4 p-4 border border-gray-100 rounded-2xl hover:border-gold/30 transition-colors bg-white shadow-sm">
                                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                  <Coffee className="w-5 h-5" />
                                </div>
                                <div>
                                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">Meals Inc.</p>
                                  <p className="font-bold text-gray-900 text-sm">{day.meals}</p>
                                </div>
                              </div>
                            )}
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-[#0f3d3e] p-8 rounded-3xl text-white shadow-2xl shadow-[#0f3d3e]/20 border border-white/10">
              <h3 className="text-2xl font-serif mb-2">Ready to Book?</h3>
              <p className="text-white/70 text-sm mb-8 leading-relaxed">Let us handle the details. Enquire now to get a customized quote for this Malaysia Grand Tour.</p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-1">Status</p>
                    <p className="font-medium">Available to Book</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-1">Group Size</p>
                    <p className="font-medium">Customizable</p>
                  </div>
                </div>
              </div>

              <a 
                href={`https://wa.me/919846046322?text=${encodeURIComponent("Hi, I would like to enquire about the Malaysia Grand Tour (10 Days, 9 Nights) package.")}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Enquire via WhatsApp
              </a>
              <p className="text-center text-white/50 text-xs mt-5">Connect directly with our planning experts.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
