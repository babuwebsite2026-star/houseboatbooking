import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookingWidget } from "@/components/BookingWidget";
import { client } from "@/sanity/lib/client";
import { SINGLE_HOUSEBOAT_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { 
  Users, BedDouble, Check, Calendar, Star, Info, 
  MapPin, Wind, Coffee, Wifi, Tv
} from "lucide-react";

export default async function HouseboatDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const boat = await client.fetch(SINGLE_HOUSEBOAT_QUERY, { slug: id });

  if (!boat) {
    notFound();
  }

  return (
    <div className="pt-20 pb-20 bg-gray-50">
      {/* Full Width Gallery Hero */}
      <div className="relative h-[50vh] md:h-[70vh] w-full mb-8">
        {boat.image && (
          <Image
            src={urlFor(boat.image).url()}
            alt={boat.name}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto px-4 md:px-8">
            <div className="inline-block bg-gold text-ocean-blue px-3 py-1 rounded-full text-sm font-bold mb-3 shadow-md">
              {boat.category}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
              {boat.name}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <span className="flex items-center gap-1.5"><Star className="h-5 w-5 text-gold fill-gold" /> {boat.rating} ({boat.reviews} reviews)</span>
              <span className="flex items-center gap-1.5"><MapPin className="h-5 w-5 text-gold" /> Alleppey Backwaters</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Details */}
          <div className="w-full lg:w-2/3">
            
            {/* Quick Info Bar */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-wrap gap-8 items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-ocean-blue/5 p-3 rounded-full text-ocean-blue">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Capacity</p>
                  <p className="font-bold text-gray-900">Up to {boat.guestCapacity} Guests</p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
              <div className="flex items-center gap-3">
                <div className="bg-ocean-blue/5 p-3 rounded-full text-ocean-blue">
                  <BedDouble className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Bedrooms</p>
                  <p className="font-bold text-gray-900">{boat.bedrooms} AC Bedrooms</p>
                </div>
              </div>
              <div className="w-px h-10 bg-gray-200 hidden md:block"></div>
              <div className="flex items-center gap-3">
                <div className="bg-ocean-blue/5 p-3 rounded-full text-ocean-blue">
                  <Info className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Boat Type</p>
                  <p className="font-bold text-gray-900">{boat.category} Class</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-ocean-blue mb-4">About this Houseboat</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {boat.description} 
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                Cruising through the palm-fringed backwaters of Alleppey, this houseboat offers a mesmerizing journey. Designed with traditional aesthetics and equipped with modern facilities, it ensures a comfortable and memorable stay. The dedicated crew, including a captain, oarsman, and a personal chef, will cater to all your needs, serving authentic Kerala delicacies prepared fresh on board.
              </p>
            </section>

            {/* Amenities */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-ocean-blue mb-6">Premium Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                {boat.amenities?.map((amenity: string, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald shrink-0" />
                    <span className="text-gray-700 font-medium">{amenity}</span>
                  </div>
                ))}
                {/* Adding some generic amenities for UI fullness */}
                <div className="flex items-center gap-3">
                  <Wind className="h-5 w-5 text-emerald shrink-0" />
                  <span className="text-gray-700 font-medium">Split AC</span>
                </div>
                <div className="flex items-center gap-3">
                  <Coffee className="h-5 w-5 text-emerald shrink-0" />
                  <span className="text-gray-700 font-medium">Welcome Drink</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wifi className="h-5 w-5 text-emerald shrink-0" />
                  <span className="text-gray-700 font-medium">Free Wi-Fi</span>
                </div>
              </div>
            </section>

            {/* Day & Night Details */}
            <section className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-ocean-blue mb-8">Experience Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Day Details */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
                    <div className="bg-gold/20 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                    </div>
                    <h3 className="text-xl font-bold text-ocean-blue">Day Time Experience</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-ocean-blue w-20 shrink-0">12:00 PM</span>
                      <span className="text-gray-600 text-sm">Welcome drink on arrival & Check-in. Begin cruising through the beautiful Punnamada lake.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-ocean-blue w-20 shrink-0">01:30 PM</span>
                      <span className="text-gray-600 text-sm">Traditional Kerala lunch served on board (Karimeen fry, Rice, Veg curries).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-ocean-blue w-20 shrink-0">04:00 PM</span>
                      <span className="text-gray-600 text-sm">Tea/Coffee and local snacks. Enjoy the sunset views from the open sundeck.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-ocean-blue w-20 shrink-0">05:30 PM</span>
                      <span className="text-gray-600 text-sm">Boat docks near a quiet village for the night (cruising is not permitted after dark).</span>
                    </li>
                  </ul>
                </div>

                {/* Night Details */}
                <div className="bg-ocean-blue/5 rounded-xl p-6 border border-ocean-blue/10">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-ocean-blue/10">
                    <div className="bg-ocean-blue/10 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ocean-blue"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                    </div>
                    <h3 className="text-xl font-bold text-ocean-blue">Night Time Experience</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-ocean-blue w-20 shrink-0">06:00 PM</span>
                      <span className="text-gray-600 text-sm">Opportunity for a short village walk or relaxing by the docked boat.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-ocean-blue w-20 shrink-0">08:00 PM</span>
                      <span className="text-gray-600 text-sm">Dinner is served. Enjoy a customized menu under the starlit sky.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-ocean-blue w-20 shrink-0">10:00 PM</span>
                      <span className="text-gray-600 text-sm">Retire to your air-conditioned bedrooms (AC operates from 9 PM to 6 AM).</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-ocean-blue w-20 shrink-0">08:00 AM</span>
                      <span className="text-gray-600 text-sm">Next morning: Breakfast during a short morning cruise before checkout at 9:00 AM.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sticky Booking Widget */}
          <div className="lg:col-span-1">
            <BookingWidget boat={boat} />
          </div>

        </div>
      </div>
    </div>
  );
}
