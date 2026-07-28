"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Ship } from "lucide-react";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white border-b border-light-green ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="relative z-10 container mx-auto px-4 md:px-6 transition-all duration-500">
        <div className={`flex items-center gap-2 md:gap-4 transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Ship className="h-6 w-6 md:h-8 md:w-8 transition-colors text-primary-green" />
            <span className="text-xl md:text-2xl font-semibold tracking-tight text-primary-green">
              KeralaHouseboats
            </span>
          </Link>

          <div className="flex-1 flex items-center justify-center min-w-0">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 rounded-full text-sm font-medium text-text-heading hover:text-secondary-green transition-colors hover:underline decoration-secondary-green decoration-2 underline-offset-4">
                Home
              </Link>
              
              <Link href="/houseboats" className="px-4 py-2 rounded-full text-sm font-medium text-text-heading hover:text-secondary-green transition-colors hover:underline decoration-secondary-green decoration-2 underline-offset-4">
                Houseboats
              </Link>

              <Link href="/packages" className="px-4 py-2 rounded-full text-sm font-medium transition-all bg-primary-green text-white shadow-sm hover:bg-secondary-green">
                Packages
              </Link>
              <Link href="/activities" className="px-4 py-2 rounded-full text-sm font-medium text-text-heading hover:text-secondary-green transition-colors hover:underline decoration-secondary-green decoration-2 underline-offset-4">
                Activities
              </Link>
              <Link href="/gallery" className="px-4 py-2 rounded-full text-sm font-medium text-text-heading hover:text-secondary-green transition-colors hover:underline decoration-secondary-green decoration-2 underline-offset-4">
                Gallery
              </Link>
              <Link href="/about" className="px-4 py-2 rounded-full text-sm font-medium text-text-heading hover:text-secondary-green transition-colors hover:underline decoration-secondary-green decoration-2 underline-offset-4">
                About Us
              </Link>
              <Link href="/contact" className="px-4 py-2 rounded-full text-sm font-medium text-text-heading hover:text-secondary-green transition-colors hover:underline decoration-secondary-green decoration-2 underline-offset-4">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden flex items-center justify-center w-10 h-10 bg-white hover:bg-light-green border border-light-green rounded-full transition-all shadow-sm shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Menu className="w-5 h-5 text-primary-green" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col gap-4 text-text-heading border-t border-light-green">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-light-green hover:text-primary-green rounded-lg transition-colors">Home</Link>
          <Link href="/houseboats" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-light-green hover:text-primary-green rounded-lg transition-colors">Houseboats</Link>
          <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 bg-light-green text-primary-green font-medium rounded-lg">Packages</Link>
          <Link href="/activities" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-light-green hover:text-primary-green rounded-lg transition-colors">Activities</Link>
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-light-green hover:text-primary-green rounded-lg transition-colors">Gallery</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-light-green hover:text-primary-green rounded-lg transition-colors">About Us</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="px-4 py-2 hover:bg-light-green hover:text-primary-green rounded-lg transition-colors">Contact</Link>
        </div>
      )}
    </nav>
  );
}
