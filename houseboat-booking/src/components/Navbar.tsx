"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

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
  // Determine if the current page has a dark hero section at the top
  const hasDarkHero = pathname === '/' || pathname === '/houseboats' || pathname === '/activities' || pathname === '/about';
  
  // Text should be dark if we are on a page without a dark hero. 
  // (Even when scrolled, pages without a dark hero will have a light navbar)
  const useDarkText = !hasDarkHero;

  // Background styling based on scroll and theme
  let navBackgroundClass = 'bg-transparent shadow-none';
  if (isScrolled) {
    if (hasDarkHero) {
      navBackgroundClass = 'bg-[#1A1A1A]/95 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.2)]';
    } else {
      navBackgroundClass = 'bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)]';
    }
  }

  return (
    <>
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-auto lg:min-w-[700px] max-w-5xl rounded-full p-2 flex items-center justify-between transition-all duration-300 ${navBackgroundClass}`}>
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 hover:scale-105 transition-transform group" aria-label="Home">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/logo.jpg" alt="Logo" width={48} height={48} className="w-full h-full object-cover grayscale scale-[1.3]" />
          </div>
          <span className="font-sans text-xl md:text-2xl tracking-wide">
            <span className={`${useDarkText ? 'text-black' : 'text-white'} font-medium transition-colors`}>Kerala</span>
            <span className={`${useDarkText ? 'text-black' : 'text-white'} font-bold transition-colors`}>houseboats</span>
          </span>
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
                  ? (useDarkText ? 'text-black font-bold' : 'text-white font-bold') 
                  : (useDarkText ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Contact Button (Desktop) & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link href="/contact" className={`hidden lg:flex items-center justify-center px-6 py-3 rounded-full text-[13px] font-bold transition-colors ${useDarkText ? 'bg-[#1A1A1A] text-white hover:bg-gray-800' : 'bg-white text-[#1A1A1A] hover:bg-gray-100'}`}>
            Contact
          </Link>
          
          <button 
            className={`lg:hidden w-12 h-12 rounded-full flex items-center justify-center transition-colors mr-1 ${useDarkText ? 'bg-black/10 text-black hover:bg-black/20' : 'bg-white/10 text-white hover:bg-white/20'}`}
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
