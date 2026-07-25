import Link from "next/link";
import { Ship, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white pt-16 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex flex-col items-start gap-1">
              <div className="flex items-center gap-2">
                <Ship className="h-8 w-8 text-ocean-blue" />
                <span className="text-2xl font-semibold tracking-tight text-gray-900">
                  Kerala<span className="text-ocean-blue">Houseboats</span>
                </span>
              </div>
              <span className="text-xs text-ocean-blue font-bold tracking-wide uppercase">
                Brahmari Holidays
              </span>
            </Link>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Experience the serene beauty of Kerala backwaters with our premium and luxury houseboats. Unforgettable journeys begin here.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-ocean-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-ocean-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-ocean-blue hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Quick Links</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li><Link href="/about" className="hover:text-ocean-blue transition-colors">About Us</Link></li>
              <li><Link href="/houseboats" className="hover:text-ocean-blue transition-colors">Our Houseboats</Link></li>
              <li><Link href="/packages" className="hover:text-ocean-blue transition-colors">Tour Packages</Link></li>
              <li><Link href="/gallery" className="hover:text-ocean-blue transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-ocean-blue transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-ocean-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Categories</h3>
            <ul className="space-y-3 text-gray-600 font-medium">
              <li><Link href="/houseboats?category=luxury" className="hover:text-ocean-blue transition-colors">Luxury Houseboats</Link></li>
              <li><Link href="/houseboats?category=premium" className="hover:text-ocean-blue transition-colors">Premium Houseboats</Link></li>
              <li><Link href="/houseboats?category=deluxe" className="hover:text-ocean-blue transition-colors">Deluxe Houseboats</Link></li>
              <li><Link href="/houseboats?type=honeymoon" className="hover:text-ocean-blue transition-colors">Honeymoon Packages</Link></li>
              <li><Link href="/houseboats?type=family" className="hover:text-ocean-blue transition-colors">Family Packages</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gray-900">Contact Info</h3>
            <ul className="space-y-4 text-gray-600 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-ocean-blue shrink-0 mt-0.5" />
                <span>Finishing Point Road, Punnamada, Alappuzha, Kerala 688013</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-ocean-blue shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-ocean-blue shrink-0" />
                <span>info@keralahouseboats.co.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Brahmari Holidays and Backwater Cruises. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ocean-blue transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ocean-blue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Custom Banner Model */}
      <div className="w-full bg-white border-b-8 border-[#1fb355] py-8 md:py-16 overflow-hidden relative border-t border-gray-100">
        <div className="container mx-auto px-4 flex justify-center items-center relative">
          
          {/* Decorative Palm Left */}
          <div className="absolute left-4 md:left-24 text-6xl md:text-8xl opacity-80" style={{ transform: 'scaleX(-1)' }}>
            🌴
          </div>

          {/* Banner Text */}
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center z-10 px-16">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-[#1fb355]">
              KERALA
            </h2>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-400">
              HOUSEBOATS
            </h2>
          </div>

          {/* Decorative Palm Right */}
          <div className="absolute right-4 md:right-24 text-6xl md:text-8xl opacity-80">
            🌴
          </div>

        </div>
      </div>
    </footer>
  );
}
