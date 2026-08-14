import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-muted-bg min-h-screen pb-0 flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16">
        {/* Soft glowing background element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary-green/5 blur-[80px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto px-5 text-center z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-text-heading leading-tight mb-6">
            Let's Plan Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-green to-secondary-green">Houseboat Adventure</span>
          </h1>
          
          <p className="text-base md:text-lg text-text-body max-w-2xl mx-auto mb-10 leading-relaxed">
            Our local Alleppey experts are ready 7 days a week to help you book houseboats, shikara rides, and custom backwater itineraries. We respond instantly on WhatsApp.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/916282447261" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-white bg-[#25D366] rounded-full hover:bg-[#20bd5a] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#25D366]/30">
              <MessageCircle className="w-5 h-5 fill-current" />
              Chat on WhatsApp
            </a>
            <a href="tel:+919846046322" className="flex items-center gap-2 px-8 py-4 text-sm font-bold text-primary-green bg-white border-2 border-light-green rounded-full hover:border-secondary-green hover:shadow-md hover:scale-105 active:scale-95 transition-all">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] border-t border-light-green relative z-20">
        <div className="max-w-6xl mx-auto px-5 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Grid: Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* WhatsApp Card */}
            <div className="group relative p-6 rounded-3xl bg-muted-bg border border-light-green hover:bg-primary-green transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-light-green shadow-sm flex items-center justify-center mb-4 group-hover:bg-primary-green group-hover:border-white/20 transition-colors duration-300">
                <MessageCircle className="w-6 h-6 text-secondary-green" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-body/80 group-hover:text-white/70 mb-1 transition-colors">WhatsApp</p>
              <p className="text-base font-bold text-text-heading group-hover:text-white transition-colors">+91 62824 47261</p>
              <p className="text-xs text-text-body/60 group-hover:text-white/60 mt-1 transition-colors">Instant reply · 7 AM – 9 PM</p>
            </div>

            {/* Call Card */}
            <div className="group relative p-6 rounded-3xl bg-muted-bg border border-light-green hover:bg-primary-green transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-light-green shadow-sm flex items-center justify-center mb-4 group-hover:bg-primary-green group-hover:border-white/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-secondary-green" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-body/80 group-hover:text-white/70 mb-1 transition-colors">Call Us</p>
              <p className="text-base font-bold text-text-heading group-hover:text-white transition-colors">+91 98460 46322</p>
              <p className="text-xs text-text-body/60 group-hover:text-white/60 mt-1 transition-colors">Available 24/7 for bookings</p>
            </div>

            {/* Email Card */}
            <div className="group relative p-6 rounded-3xl bg-muted-bg border border-light-green hover:bg-primary-green transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-light-green shadow-sm flex items-center justify-center mb-4 group-hover:bg-primary-green group-hover:border-white/20 transition-colors duration-300">
                <Mail className="w-6 h-6 text-secondary-green" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-body/80 group-hover:text-white/70 mb-1 transition-colors">Email</p>
              <p className="text-base font-bold text-text-heading group-hover:text-white transition-colors">info@keralahouseboats.co.in</p>
              <p className="text-xs text-text-body/60 group-hover:text-white/60 mt-1 transition-colors">We reply within 4 hours</p>
            </div>

            {/* Location Card */}
            <div className="group relative p-6 rounded-3xl bg-muted-bg border border-light-green hover:bg-primary-green transition-colors duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-light-green shadow-sm flex items-center justify-center mb-4 group-hover:bg-primary-green group-hover:border-white/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-secondary-green" />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-text-body/80 group-hover:text-white/70 mb-1 transition-colors">Location</p>
              <p className="text-base font-bold text-text-heading group-hover:text-white transition-colors">Finishing Point</p>
              <p className="text-xs text-text-body/60 group-hover:text-white/60 mt-1 transition-colors">Alleppey, Kerala 688 013</p>
            </div>

          </div>

          {/* Right Side: Direct Numbers List */}
          <div className="lg:sticky lg:top-32">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary-green mb-2">Direct Booking Lines</p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-wide text-text-heading mb-4">Reach Us Anytime</h2>
            <p className="text-base text-text-body mb-8 max-w-sm">
              Skip the wait and call our booking agents directly. We have multiple lines available 7 days a week.
            </p>

            <div className="flex flex-col gap-4">
              
              {/* Direct Line 1 */}
              <div className="group p-5 rounded-2xl border border-light-green bg-white hover:border-secondary-green/40 hover:shadow-lg hover:shadow-secondary-green/5 flex items-center gap-5 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-muted-bg flex items-center justify-center shrink-0 group-hover:bg-primary-green transition-colors duration-300">
                  <Phone className="w-5 h-5 text-secondary-green group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-body/60 mb-1">Primary Booking</p>
                  <p className="text-lg font-bold text-text-heading">+91 98460 46322</p>
                </div>
                <a href="tel:+919846046322" className="flex items-center gap-1.5 text-sm font-bold text-secondary-green px-4 py-2 rounded-lg hover:bg-light-green transition-colors">
                  Call <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              {/* Direct Line 2 */}
              <div className="group p-5 rounded-2xl border border-light-green bg-white hover:border-secondary-green/40 hover:shadow-lg hover:shadow-secondary-green/5 flex items-center gap-5 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-muted-bg flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/10 transition-colors duration-300">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-text-body/60 mb-1">Enquiries</p>
                  <p className="text-lg font-bold text-text-heading">+91 62824 47261</p>
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
          <div className="relative rounded-3xl overflow-hidden border border-light-green shadow-xl h-[450px]">
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
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl border border-light-green px-5 py-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-light-green flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary-green" />
              </div>
              <div>
                <p className="text-sm font-bold text-text-heading mb-0.5">Finishing Point</p>
                <p className="text-xs text-text-body font-medium">Alappuzha, Kerala 688 013</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
