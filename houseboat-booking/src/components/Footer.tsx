import Link from "next/link";
import { Ship, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-green pt-16 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      
      <div className="container mx-auto px-4 md:px-8 pb-8 relative z-10">
        
        {/* Snake Boat Race Highlight Banner */}
        <div className="mb-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:bg-white/15 transition-colors">
          <div>
            <span className="text-light-green text-xs font-bold uppercase tracking-widest mb-1 block">Annual Spectacle</span>
            <h3 className="text-2xl md:text-3xl font-normal text-white">Nehru Trophy Snake Boat Race</h3>
            <p className="text-white/80 mt-2 text-sm max-w-xl">Experience the adrenaline of Alleppey's most legendary event. Book your exclusive viewing houseboat today before spots fill up.</p>
          </div>
          <Link href="/activities/snake-boat-race" className="shrink-0 flex items-center gap-2 bg-white text-primary-green font-bold px-6 py-3 rounded-full hover:bg-light-green transition-colors">
            Reserve a Spot <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Compact Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-10">
          
          {/* Brand & Socials (takes up more space) */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Ship className="h-7 w-7 text-white" />
              <span className="text-xl font-bold tracking-tight text-white">
                Kerala<span className="text-light-green">Houseboats</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Authentic backwater cruises in Alleppey. We bring you closer to nature with premium, verified houseboats and unparalleled local hospitality.
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-primary-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-primary-green transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Combined Quick Links */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-5">Explore</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-white/80 font-medium">
              <Link href="/houseboats" className="hover:text-white transition-colors">Houseboats</Link>

              <Link href="/activities" className="hover:text-white transition-colors">Activities</Link>
              <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-light-green shrink-0 mt-0.5" />
                <span>Finishing Point, Alappuzha, Kerala 688013</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-light-green shrink-0" />
                <a href="tel:+919846046322" className="hover:text-white transition-colors">+91 98460 46322</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-light-green shrink-0" />
                <a href="mailto:info@keralahouseboats.co.in" className="hover:text-white transition-colors">info@keralahouseboats.co.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 font-medium">
          <p>© {new Date().getFullYear()} KeralaHouseboats. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
