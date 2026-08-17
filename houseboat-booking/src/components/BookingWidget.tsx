"use client";

import { useState } from "react";
import { Calendar, Phone, Sparkles, Star, ShieldCheck } from "lucide-react";

interface BookingWidgetProps {
  boat: {
    category?: string;
    name?: string;
    startingPrice: number;
    dayCruisePrice?: number;
    dayCruiseTime?: string;
    overnightPrice?: number;
    overnightTime?: string;
    rating?: number;
    bedrooms?: number;
  };
  whatsappNumber?: string;
  phoneNumber?: string;
}

export function BookingWidget({ boat, whatsappNumber = "916282447261", phoneNumber = "919846046322" }: BookingWidgetProps) {
  const boatName = boat.bedrooms 
    ? `${boat.bedrooms} Bedroom Houseboat`
    : (boat.name || 'Kerala Houseboat');

  const [date, setDate] = useState("");
  const [cruiseType, setCruiseType] = useState<"day" | "overnight">("day");
  const [guests, setGuests] = useState(2);

  // Pricing Logic
  // Uses specific prices from Sanity if set, otherwise falls back to legacy calculation.
  const dayCruisePrice = boat.dayCruisePrice ?? boat.startingPrice;
  const overnightPrice = boat.overnightPrice ?? (boat.startingPrice + 500);
  
  const basePrice = cruiseType === "day" ? dayCruisePrice : overnightPrice;
  const extraGuestPrice = Math.max(0, guests - 2) * 1000;
  const effectiveDayCruisePrice = dayCruisePrice + extraGuestPrice;
  const effectiveOvernightPrice = overnightPrice + extraGuestPrice;
  
  const totalPrice = basePrice + extraGuestPrice;
  const originalPrice = totalPrice + 501; // Fake original price for strikethrough

  const formatPrice = (price: number) => {
    return "₹" + price.toLocaleString('en-IN');
  };

  const handleBookNow = () => {
    const text = `Hi, I would like to book ${boatName}.
    
Details:
- Date: ${date || "Not selected"}
- Type: ${cruiseType === 'day' ? 'Day Cruise' : 'Overnight Stay'}
- Bedrooms: ${boat.bedrooms || "Not specified"}
- Guests: ${guests}
- Estimated Price: ${formatPrice(totalPrice)}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:+${phoneNumber}`, '_self');
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden sticky top-32 p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          Best price guaranteed
        </div>
        <div className="flex items-center gap-1 font-bold text-gray-800">
          <Star className="w-4 h-4 text-gold fill-gold" />
          {boat.rating || 4.8}
        </div>
      </div>

      {/* Price */}
      <div className="mb-1">
        <span className="text-4xl font-extrabold text-gray-900 tracking-tight">{formatPrice(totalPrice)}</span>
        <span className="text-gray-400 line-through ml-2 font-medium text-lg">{formatPrice(originalPrice)}</span>
      </div>
      <p className="text-gray-500 text-sm mb-6 font-medium">Two person • all meals included</p>

      <hr className="border-gray-100 mb-6" />

      {/* Cruise Type Section */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-400 tracking-wider mb-3 uppercase">Cruise Type</h3>
        
        {/* Day Cruise Option */}
        <div 
          onClick={() => setCruiseType("day")}
          className={`cursor-pointer rounded-xl border-2 p-4 mb-3 transition-colors ${
            cruiseType === "day" ? "border-green-500 bg-green-50/30" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${cruiseType === 'day' ? 'border-green-500' : 'border-gray-300'}`}>
                {cruiseType === "day" && <div className="w-2.5 h-2.5 rounded-full bg-green-500" />}
              </div>
              <span className="font-bold text-gray-900">Day Cruise</span>
            </div>
            <span className="font-bold text-gray-900">{formatPrice(effectiveDayCruisePrice)}</span>
          </div>
          <p className="text-gray-400 text-sm ml-8">{boat.dayCruiseTime || "1:30 PM – 5 PM"}</p>
        </div>

        {/* Overnight Option */}
        <div 
          onClick={() => setCruiseType("overnight")}
          className={`cursor-pointer rounded-xl border-2 p-4 transition-colors ${
            cruiseType === "overnight" ? "border-green-500 bg-green-50/30" : "border-gray-200 hover:border-gray-300"
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${cruiseType === 'overnight' ? 'border-green-500' : 'border-gray-300'}`}>
                {cruiseType === "overnight" && <div className="w-2.5 h-2.5 rounded-full bg-green-500" />}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900">Overnight Stay</span>
                <span className="px-2 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded uppercase tracking-wide">Popular</span>
              </div>
            </div>
            <span className="font-bold text-gray-900">{formatPrice(effectiveOvernightPrice)}</span>
          </div>
          <p className="text-gray-400 text-sm ml-8">{boat.overnightTime || "Check-in 1:30 PM • Check-out 8:30 AM"}</p>
        </div>
      </div>

      {/* Check-in Date */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-gray-400 tracking-wider mb-3 uppercase">Check-in Date</h3>
        <div className="relative border border-gray-200 rounded-xl overflow-hidden focus-within:border-green-500 focus-within:ring-1 focus-within:ring-green-500 transition-all">
          <input 
            type="date" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full py-4 px-4 pr-12 text-gray-700 font-medium focus:outline-none bg-transparent"
            style={{ colorScheme: "light" }}
          />
        </div>
      </div>

      {/* Guests */}
      <div className="mb-8">
        <h3 className="text-xs font-bold text-gray-400 tracking-wider mb-3 uppercase">Guests</h3>
        <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="font-bold text-gray-900 mb-0.5">Guests <span className="text-gray-500 font-normal text-sm">(5+ yrs)</span></div>
            <div className="text-gray-500 text-sm mb-1">2 included • ₹1,000/extra</div>
            <div className="text-green-600 text-xs font-semibold">Kids below 5 stay free</div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setGuests(Math.max(1, guests - 1))}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <svg width="12" height="2" viewBox="0 0 12 2" fill="currentColor"><path d="M0 0h12v2H0z"/></svg>
            </button>
            <span className="font-bold text-gray-900 w-3 text-center">{guests}</span>
            <button 
              onClick={() => setGuests(guests + 1)}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M5 0h2v12H5z"/><path d="M0 5h12v2H0z"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-4">
        <button 
          onClick={handleCall}
          className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-gray-200 text-gray-900 font-bold hover:bg-gray-50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call
        </button>
        <button 
          onClick={handleBookNow}
          className="flex-1 bg-[#22C55E] hover:bg-[#1fb355] text-white font-bold py-4 rounded-xl shadow-sm transition-colors text-lg"
        >
          Book Now
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-1.5 text-gray-400 text-sm font-medium">
        <ShieldCheck className="w-4 h-4" />
        No payment now • Pay at check-in
      </div>
    </div>
  );
}
