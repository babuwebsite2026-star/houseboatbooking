"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4 text-foreground"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Ship className="h-8 w-8 text-gold" />
          <span className="text-2xl font-semibold tracking-tight">
            Alleppey<span className="text-gold">Stay</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <Link href="/houseboats" className="hover:text-gold transition-colors">
            Houseboats
          </Link>
          <Link href="/packages" className="hover:text-gold transition-colors">
            Packages
          </Link>
          <Link href="/gallery" className="hover:text-gold transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="hover:text-gold transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant={isScrolled ? "ghost" : "link"} className={!isScrolled ? "text-white hover:text-gold" : ""}>
              Log in
            </Button>
          </Link>
          <Link href="/houseboats">
            <Button className="bg-gold hover:bg-gold/90 text-ocean-blue font-semibold">
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col gap-4 text-foreground">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/houseboats" onClick={() => setIsMobileMenuOpen(false)}>
            Houseboats
          </Link>
          <Link href="/packages" onClick={() => setIsMobileMenuOpen(false)}>
            Packages
          </Link>
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
            Gallery
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <div className="flex flex-col gap-2 pt-4 border-t">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full">
                Log in
              </Button>
            </Link>
            <Link href="/houseboats" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-gold hover:bg-gold/90 text-ocean-blue font-semibold">
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
