import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen pb-0 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16">
        {/* Soft glowing background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/10 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-5 text-center z-10">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 mb-6 text-xs font-medium text-gray-500 uppercase tracking-widest">
            <Link href="/" className="hover:text-ocean-blue transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-ocean-blue font-bold">Contact</span>
          </nav>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0f3d3e] leading-tight mb-6">
            Let's Plan Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f3d3e] to-[#d4af37]">Houseboat Adventure</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our local Alleppey experts are ready 7 days a week to help you book houseboats, shikara rides, and custom backwater itineraries. We respond instantly on WhatsApp.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/919846046322" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-[#25D366] rounded-full hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#25D366]/30">
              <MessageCircle className="w-5 h-5 fill-current" />
              Chat on WhatsApp
            </a>
            <a href="tel:+919846046322" className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-[#0f3d3e] bg-white border-2 border-gray-100 rounded-full hover:border-[#d4af37] hover:shadow-md hover:scale-105 active:scale-95 transition-all">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-gray-100 relative z-20">
        <div className="max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Grid: Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* WhatsApp Card */}
            <div className="group relative p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-[#0f3d3e] transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#0f3d3e] group-hover:border-[#d4af37]/30 transition-colors duration-300">
                <MessageCircle className="w-6 h-6 text-[#d4af37]" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500 group-hover:text-gray-300 mb-1 transition-colors">WhatsApp</p>
              <p className="text-base font-black text-[#0f3d3e] group-hover:text-white transition-colors">+91 98460 46322</p>
              <p className="text-xs text-gray-400 group-hover:text-gray-400 mt-1 transition-colors">Instant reply · 7 AM – 9 PM</p>
            </div>

            {/* Call Card */}
            <div className="group relative p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-[#0f3d3e] transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#0f3d3e] group-hover:border-[#d4af37]/30 transition-colors duration-300">
                <Phone className="w-6 h-6 text-[#d4af37]" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500 group-hover:text-gray-300 mb-1 transition-colors">Call Us</p>
              <p className="text-base font-black text-[#0f3d3e] group-hover:text-white transition-colors">+91 98460 46322</p>
              <p className="text-xs text-gray-400 group-hover:text-gray-400 mt-1 transition-colors">Available 24/7 for bookings</p>
            </div>

            {/* Email Card */}
            <div className="group relative p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-[#0f3d3e] transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#0f3d3e] group-hover:border-[#d4af37]/30 transition-colors duration-300">
                <Mail className="w-6 h-6 text-[#d4af37]" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500 group-hover:text-gray-300 mb-1 transition-colors">Email</p>
              <p className="text-base font-black text-[#0f3d3e] group-hover:text-white transition-colors">info@keralahouseboats.co.in</p>
              <p className="text-xs text-gray-400 group-hover:text-gray-400 mt-1 transition-colors">We reply within 4 hours</p>
            </div>

            {/* Location Card */}
            <div className="group relative p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-[#0f3d3e] transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#0f3d3e] group-hover:border-[#d4af37]/30 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-[#d4af37]" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500 group-hover:text-gray-300 mb-1 transition-colors">Location</p>
              <p className="text-base font-black text-[#0f3d3e] group-hover:text-white transition-colors">Finishing Point</p>
              <p className="text-xs text-gray-400 group-hover:text-gray-400 mt-1 transition-colors">Alleppey, Kerala 688 013</p>
            </div>

          </div>

          {/* Right Side: Direct Numbers List */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d4af37] mb-2">Direct Booking Lines</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#0f3d3e] mb-4">Reach Us Anytime</h2>
            <p className="text-base text-gray-500 mb-8 max-w-sm">
              Skip the wait and call our booking agents directly. We have multiple lines available 7 days a week.
            </p>

            <div className="flex flex-col gap-4">
              
              {/* Direct Line 1 */}
              <div className="group p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#d4af37]/40 hover:shadow-lg hover:shadow-[#d4af37]/5 flex items-center gap-5 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#faf9f6] flex items-center justify-center shrink-0 group-hover:bg-[#0f3d3e] transition-colors duration-300">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Primary Booking</p>
                  <p className="text-lg font-black text-[#0f3d3e]">+91 98460 46322</p>
                </div>
                <a href="tel:+919846046322" className="flex items-center gap-1.5 text-sm font-bold text-[#d4af37] px-4 py-2 rounded-lg hover:bg-[#d4af37]/10 transition-colors">
                  Call <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Direct Line 2 */}
              <div className="group p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#d4af37]/40 hover:shadow-lg hover:shadow-[#d4af37]/5 flex items-center gap-5 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-[#faf9f6] flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/10 transition-colors duration-300">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Enquiries</p>
                  <p className="text-lg font-black text-[#0f3d3e]">+91 62824 47261</p>
                </div>
                <a href="https://wa.me/916282447261" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-white bg-[#25D366] px-4 py-2 rounded-lg hover:bg-[#20bd5a] transition-colors shadow-sm">
                  <MessageCircle className="w-4 h-4 fill-current" /> Chat
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white pb-20 relative z-20">
        <div className="max-w-6xl mx-auto px-5">
          <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl shadow-gray-200/50 h-[450px]">
            <iframe 
              src="https://www.google.com/maps?q=Finishing+Point+Alleppey&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Alleppey Finishing Point Location"
              className="grayscale-[30%] contrast-[1.1] opacity-90"
            ></iframe>
            
            {/* Floating Location Tag */}
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <p className="text-sm font-black text-[#0f3d3e] mb-0.5">Finishing Point</p>
                <p className="text-xs text-gray-500 font-medium">Alappuzha, Kerala 688 013</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
