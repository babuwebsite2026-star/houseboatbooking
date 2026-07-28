"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Ship } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-auto lg:min-w-[700px] max-w-5xl bg-[#1A1A1A] rounded-full p-2 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-[#1A1A1A]/95' : ''}`}>
        
        {/* Left: Logo */}
        <Link href="/" className="bg-white text-[#1A1A1A] w-12 h-12 rounded-full flex items-center justify-center shrink-0 hover:scale-105 transition-transform" aria-label="Home">
          <Ship className="w-6 h-6" />
        </Link>

        {/* Center: Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 px-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Houseboats', path: '/houseboats' },
            { name: 'Activities', path: '/activities' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'About', path: '/about' },
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === link.path 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Contact Button (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden lg:flex items-center justify-center bg-white text-[#1A1A1A] px-6 py-3 rounded-full text-[13px] font-bold hover:bg-gray-100 transition-colors">
            Contact
          </Link>
          
          <button 
            className="lg:hidden bg-white/10 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors mr-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden fixed top-[90px] left-1/2 -translate-x-1/2 w-[95%] bg-[#1A1A1A] rounded-3xl shadow-2xl z-40 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 flex flex-col gap-2">
          {[
            { name: 'Home', path: '/' },
            { name: 'Houseboats', path: '/houseboats' },
            { name: 'Activities', path: '/activities' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'About Us', path: '/about' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="px-4 py-3 font-semibold text-white/80 hover:bg-white/10 hover:text-white rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
