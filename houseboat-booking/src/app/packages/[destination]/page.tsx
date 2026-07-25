import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Clock, Users, CheckCircle2, MessageCircle, Calendar } from "lucide-react";

interface PageProps {
  params: {
    destination: string;
  };
}

export default function DestinationPackagePage({ params }: PageProps) {
  // Format destination name for display (e.g. "alleppey" -> "Alleppey")
  const destinationName = params.destination.charAt(0).toUpperCase() + params.destination.slice(1);
  
  // WhatsApp link for booking
  const whatsappNumber = "919846046322";
  const whatsappMessage = encodeURIComponent(`Hi, I would like to know more about the ${destinationName} houseboat packages.`);

  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col font-sans">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full pt-20">
        <Image
          src="https://images.unsplash.com/photo-1593693397690-362cb9666cb3?q=80&w=2070&auto=format&fit=crop"
          alt={`${destinationName} Packages`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f3d3e]/90 via-[#0f3d3e]/50 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-5 pb-12 z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-[10px] md:text-xs font-semibold text-white/70 uppercase tracking-widest">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/packages" className="hover:text-gold transition-colors">Packages</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold">{destinationName}</span>
          </nav>
          
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight drop-shadow-lg mb-4">
            {destinationName} <span className="text-gold italic">Packages</span>
          </h1>
          <p className="text-white/80 max-w-xl text-lg md:text-xl drop-shadow">
            Experience the breathtaking beauty of {destinationName} with our premium, fully-customizable tours.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-5 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-20 -mt-10">
        
        {/* Left Column (Details) */}
        <div className="lg:col-span-2 space-y-12 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
          
          <section>
            <h2 className="text-3xl font-black text-[#0f3d3e] tracking-tight mb-4">About this Journey</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our {destinationName} packages are designed to give you an authentic, luxurious experience. 
              Glide through serene backwaters, witness incredible local wildlife, and enjoy world-class 
              hospitality on board our traditional yet modern houseboats. 
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#0f3d3e] mb-6">What's Included</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Welcome drink & traditional snacks",
                "Authentic Kerala lunch, dinner & breakfast",
                "Air-conditioned premium bedrooms",
                "Dedicated chef and captain",
                "Scenic backwater village tour",
                "Exclusive sunset deck access"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#25D366] shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-[#0f3d3e] mb-6">Popular Itineraries</h3>
            <div className="space-y-4">
              
              <div className="p-6 rounded-2xl border border-gray-100 bg-[#faf9f6] hover:border-gold/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h4 className="text-xl font-bold text-[#0f3d3e]">Overnight Cruise (1 Night / 2 Days)</h4>
                  <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest rounded-full">Most Popular</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">Check-in at 12:00 PM. Includes cruising through major canals, evening tea, dinner, overnight stay, and breakfast before 9:00 AM checkout.</p>
                <div className="flex gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-ocean-blue" /> 21 Hours</span>
                  <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-ocean-blue" /> Up to 6 pax</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-gray-100 bg-[#faf9f6] hover:border-gold/30 transition-colors">
                <h4 className="text-xl font-bold text-[#0f3d3e] mb-2">Day Cruise</h4>
                <p className="text-gray-600 text-sm mb-4">Perfect for a quick getaway. Check-in at 11:00 AM, enjoy a traditional lunch while cruising, and checkout by 5:00 PM.</p>
                <div className="flex gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-ocean-blue" /> 6 Hours</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-ocean-blue" /> Fixed Route</span>
                </div>
              </div>

            </div>
          </section>

        </div>

        {/* Right Column (Booking Widget / Sidebar) */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 bg-[#0f3d3e] p-8 rounded-3xl text-white shadow-2xl shadow-[#0f3d3e]/20">
            <h3 className="text-2xl font-serif mb-2">Book Your Tour</h3>
            <p className="text-white/70 text-sm mb-8">Prices vary based on season and boat category. Contact us for the best custom quote.</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <Calendar className="w-6 h-6 text-gold" />
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">Availability</p>
                  <p className="font-medium">Open All Year</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                <MapPin className="w-6 h-6 text-gold" />
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">Location</p>
                  <p className="font-medium">{destinationName}</p>
                </div>
              </div>
            </div>

            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Check Availability
            </a>
            <p className="text-center text-white/50 text-xs mt-4">We usually reply within 5 minutes!</p>
          </div>
        </div>

      </div>
    </div>
  );
}
