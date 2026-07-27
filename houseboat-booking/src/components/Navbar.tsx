"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, ChevronDown, Ship } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Liquid Glass Background Layer */}
      <div className={`absolute inset-0 transition-all duration-500 ${isScrolled ? 'liquid-glass shadow-lg border-b border-white/10 opacity-100' : 'bg-transparent opacity-100'}`}></div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 transition-all duration-500">
        <div className={`flex items-center gap-2 md:gap-4 transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start gap-1 group shrink-0 pt-1">
            <div className="flex items-center gap-2">
              <Ship className="h-6 w-6 md:h-8 md:w-8 transition-colors text-gold" />
              <span className={`text-xl md:text-2xl font-semibold tracking-tight ${'text-white'}`}>
                Kerala<span className="text-gold">Houseboats</span>
              </span>
            </div>
            <span className={`text-[8px] sm:text-[10px] md:text-xs font-medium tracking-wide ${'text-white/90'}`}>
              Brahmari Holidays and Backwater Cruises
            </span>
          </Link>

          <div className="flex-1 flex items-center justify-center min-w-0">


            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${'text-gray-100 hover:text-white hover:bg-white/10'}`}>
                Home
              </Link>
              
              <Link href="/houseboats" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${'text-gray-100 hover:text-white hover:bg-white/10'}`}>
                Houseboats
              </Link>

              <Link href="/packages" className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-ocean-blue text-white shadow-md hover:bg-ocean-blue/90">
                Packages
              </Link>
              <Link href="/activities" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${'text-gray-100 hover:text-white hover:bg-white/10'}`}>
                Activities
              </Link>
              <Link href="/gallery" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${'text-gray-100 hover:text-white hover:bg-white/10'}`}>
                Gallery
              </Link>
              <Link href="/about" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${'text-gray-100 hover:text-white hover:bg-white/10'}`}>
                About Us
              </Link>
              <Link href="/contact" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${'text-gray-100 hover:text-white hover:bg-white/10'}`}>
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden flex items-center justify-center w-10 h-10 liquid-glass hover:bg-white/10 border border-white/20 rounded-full transition-all shadow-sm shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 liquid-glass shadow-lg py-4 px-4 flex flex-col gap-4 text-white border-t border-white/10">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-white/10 rounded-lg">Home</Link>
          <Link href="/houseboats" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-white/10 rounded-lg">Houseboats</Link>
          <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 bg-white/20 text-white font-medium rounded-lg">Packages</Link>
          <Link href="/activities" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-white/10 rounded-lg">Activities</Link>
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-white/10 rounded-lg">Gallery</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-white/10 rounded-lg">About Us</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-white/10 rounded-lg">Contact</Link>
        </div>
      )}
    </nav>
  );
}
