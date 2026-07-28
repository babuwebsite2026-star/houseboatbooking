"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Ship, PhoneCall } from "lucide-react";

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

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent 
          ? 'bg-transparent py-6' 
          : 'bg-white shadow-[0_4px_20px_rgb(0,0,0,0.05)] border-b border-black/5 py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Ship className={`h-7 w-7 md:h-8 md:w-8 transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-primary-green'}`} />
            <span className={`font-podium text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-text-heading group-hover:text-primary-green'}`}>
              KeralaHouseboats
            </span>
          </Link>

          <div className="flex-1 flex items-center justify-center min-w-0">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
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
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    isTransparent 
                      ? 'text-white/90 hover:text-white' 
                      : 'text-text-heading hover:text-primary-green'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                isTransparent ? 'text-white hover:bg-white/10' : 'text-text-heading hover:bg-black/5'
              }`}
              aria-label="Contact Us"
            >
              <PhoneCall className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                isTransparent ? 'text-white hover:bg-white/10' : 'text-text-heading hover:bg-black/5'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Content */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] border-t border-black/5' : 'max-h-0'}`}>
        <div className="py-4 px-4 flex flex-col gap-1">
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
              className="px-4 py-3 font-semibold text-text-heading hover:bg-light-green hover:text-primary-green rounded-xl transition-colors"
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
}
