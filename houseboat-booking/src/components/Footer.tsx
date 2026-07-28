import Link from "next/link";
import { Ship, MapPin, Phone, Mail, ArrowRight } from "lucide-react";

function PapercutWaves() {
  return (
    <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-0 -translate-y-full">
      <svg className="relative block w-full h-[40px] md:h-[80px] lg:h-[120px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <filter id="papercut-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="-8" stdDeviation="6" floodColor="#000000" floodOpacity="0.15"/>
          </filter>
        </defs>
        
        {/* Layer 1 - Light Green */}
        <path fill="#A3C686" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,213.3C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" filter="url(#papercut-shadow)"></path>
        
        {/* Layer 2 - Primary Green */}
        <path fill="#7FA85A" d="M0,256L60,229.3C120,203,240,149,360,144C480,139,600,181,720,192C840,203,960,181,1080,186.7C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" filter="url(#papercut-shadow)"></path>

        {/* Layer 3 - Deep Green (Matches Footer Background) */}
        <path fill="#2D3A22" d="M0,320L60,288C120,256,240,192,360,192C480,192,600,256,720,250.7C840,245,960,171,1080,138.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" filter="url(#papercut-shadow)"></path>
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#2D3A22] relative mt-12 md:mt-[80px] lg:mt-[120px]">
      <PapercutWaves />
      
      <div className="container mx-auto px-4 md:px-8 pb-6 pt-6 md:pt-8 relative z-10">
        

        {/* Compact Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-6">
          
          {/* Brand & Socials */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Ship className="h-7 w-7 text-[#A3C686]" />
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#A3C686] transition-colors">
                Kerala<span className="text-[#7FA85A]">Houseboats</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-sm">
              Authentic backwater cruises in Alleppey. We bring you closer to nature with premium, verified houseboats and unparalleled local hospitality.
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#7FA85A] hover:border-transparent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#7FA85A] hover:border-transparent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Combined Quick Links */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-5">Explore</h3>
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-white/80 font-medium">
              <Link href="/houseboats" className="hover:text-[#A3C686] transition-colors">Houseboats</Link>
              <Link href="/activities" className="hover:text-[#A3C686] transition-colors">Activities</Link>
              <Link href="/gallery" className="hover:text-[#A3C686] transition-colors">Gallery</Link>
              <Link href="/about" className="hover:text-[#A3C686] transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-[#A3C686] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#7FA85A] shrink-0 mt-0.5" />
                <span>Finishing Point, Alappuzha, Kerala 688013</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#7FA85A] shrink-0" />
                <a href="tel:+919846046322" className="hover:text-[#A3C686] transition-colors">+91 98460 46322</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#7FA85A] shrink-0" />
                <a href="mailto:info@keralahouseboats.co.in" className="hover:text-[#A3C686] transition-colors">info@keralahouseboats.co.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 font-medium">
          <p>© {new Date().getFullYear()} KeralaHouseboats. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#A3C686] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#A3C686] transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
