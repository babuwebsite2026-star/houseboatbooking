import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mockActivities } from "@/data/activities";
import { Clock } from "lucide-react";

export default function Activities() {
  return (
    <div className="pb-20 bg-muted-bg min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center mb-16 mt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/activities/hero.jpg"
            alt="Activities & Experiences"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-20 md:mt-16">
          <h1 className="text-5xl md:text-7xl font-podium font-black tracking-wide mb-4 text-white">Activities & Experiences</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Enhance your houseboat stay with our hand-picked activities. Immerse yourself in the local culture and natural beauty.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockActivities.map((act) => (
            <div key={act.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-light-green flex flex-col group cursor-pointer">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={act.image}
                  alt={act.name}
                  fill
                  style={{ objectPosition: act.objectPosition || 'center' }}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-text-heading group-hover:text-primary-green transition-colors">{act.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-primary-green bg-light-green px-2 py-1 rounded">
                    <Clock className="h-3 w-3" /> {act.duration}
                  </div>
                </div>
                <p className="text-text-body font-medium mb-6 text-sm flex-1 leading-relaxed">
                  {act.description}
                </p>
                <div className="pt-4 border-t border-light-green flex items-center justify-between">
                  <p className="text-xl font-black text-primary-green">₹{act.price.toLocaleString('en-IN')}</p>
                  <a href={`https://wa.me/919846046322?text=${encodeURIComponent(`I would like to experience the ${act.name} activity`)}`} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-white border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white font-bold px-6 transition-colors rounded-xl shadow-sm hover:shadow-md">
                      Book Activity
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
