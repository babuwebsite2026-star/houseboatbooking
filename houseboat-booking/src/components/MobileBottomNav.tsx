"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Ship, ImageIcon, PhoneCall } from "lucide-react";

export function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Boats", path: "/houseboats", icon: Ship },
    { name: "Gallery", path: "/gallery", icon: ImageIcon },
    { name: "Contact", path: "/contact", icon: PhoneCall },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[95%] max-w-[400px]">
      <div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-2 flex items-center justify-between border border-gray-100">
        {navItems.map((item) => {
          const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
          
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`relative flex items-center justify-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
                isActive 
                  ? "bg-[#bbf7d0] text-black font-bold shadow-sm" 
                  : "text-gray-600 hover:text-black font-semibold"
              }`}
            >
              <span className="text-[13px] tracking-tight">{item.name}</span>
              {isActive && (
                <div className="bg-black text-white p-1 rounded-full flex items-center justify-center">
                  <item.icon className="w-3.5 h-3.5" />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
