import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mockActivities } from "@/data/activities";
import { Clock } from "lucide-react";

export default function Activities() {
  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center mb-16 mt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80"
            alt="Activities & Experiences"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">Activities & Experiences</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Enhance your houseboat stay with our hand-picked activities. Immerse yourself in the local culture and natural beauty.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockActivities.map((act) => (
            <div key={act.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col group">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={act.image}
                  alt={act.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-ocean-blue">{act.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    <Clock className="h-3 w-3" /> {act.duration}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-sm flex-1">
                  {act.description}
                </p>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-lg font-bold text-ocean-blue">₹{act.price.toLocaleString('en-IN')}</p>
                  <Link href="/contact">
                    <Button variant="outline" className="border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white transition-colors">
                      Book Activity
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
