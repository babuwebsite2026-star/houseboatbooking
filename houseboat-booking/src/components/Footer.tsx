import React from 'react';

export function Footer() {
  return (
    <footer className="w-full flex flex-col">


      {/* Main footer section */}
      <div className="relative w-full bg-white py-20 md:py-[100px] min-h-[250px] md:min-h-[350px] flex justify-center items-center overflow-hidden">
        
        {/* Background Snake Boat Image */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 px-4">
          <img 
            src="/chundan-removebg-preview.png" 
            alt="Kerala Snake Boat" 
            className="w-full max-w-3xl object-contain opacity-90 object-center drop-shadow-sm"
          />
        </div>

        {/* Center Heading */}
        <div className="relative z-10 px-4 text-center bg-white/40 backdrop-blur-[2px] rounded-2xl py-2 px-6">
          <h2 className="font-serif font-bold uppercase text-[20px] leading-none tracking-wide flex flex-col md:flex-row md:gap-2 justify-center items-center drop-shadow-md">
            <span className="bg-gradient-to-b from-[#D97706] to-[#92400E] text-transparent bg-clip-text pb-0">
              KERALA
            </span>
            <span className="bg-gradient-to-b from-[#1a1a1a] to-[#666666] text-transparent bg-clip-text pb-0">
              HOUSEBOATS
            </span>
          </h2>
        </div>

      </div>

      {/* Bottom copyright bar */}
      <div className="w-full bg-[#fafafa] border-t border-gray-200 flex justify-center items-center py-3 px-10 md:px-14">
        <div className="text-xs sm:text-sm text-gray-500">
          © 2026 Kerala Houseboats. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
