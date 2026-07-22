import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { ALL_PACKAGES_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function Packages() {
  const packages = await client.fetch(ALL_PACKAGES_QUERY);
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="bg-ocean-blue text-white py-16 mb-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Holidays</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Carefully curated experiences designed to give you the best of Alleppey's backwaters, culture, and luxury stays.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="space-y-16">
          {packages.map((pkg: any, index: number) => {
            const isEven = index % 2 === 0;
            return (
              <div key={pkg._id} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <h3 className="text-3xl font-bold text-ocean-blue mb-1">{pkg.name}</h3>
                  {pkg.subtitle && (
                    <p className="text-emerald font-semibold mb-4 text-sm">{pkg.subtitle}</p>
                  )}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {pkg.itinerary && pkg.itinerary.length > 0 && (
                    <div className="space-y-6 mb-8">
                      {pkg.itinerary.map((dayPlan: any, i: number) => (
                        <div key={i}>
                          <h5 className="font-bold text-gray-900 mb-1">{dayPlan.day}: {dayPlan.title}</h5>
                          <p className="text-gray-600 text-sm leading-relaxed">{dayPlan.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-6 border-t border-gray-200">
                    <Link href={`https://wa.me/919876543210?text=Hi, I want to book ${encodeURIComponent(pkg.name)}`}>
                      <Button className="bg-ocean-blue hover:bg-ocean-blue/90 text-white font-bold px-8 py-6 rounded-xl shadow-md text-lg">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                    {pkg.image && (
                      <Image
                        src={urlFor(pkg.image).url()}
                        alt={pkg.name}
                        fill
                        className="object-cover"
                      />
                    )}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-ocean-blue px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {pkg.duration}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
