import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { mockActivities } from "@/data/activities";
import { Clock } from "lucide-react";

export default function Activities() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="bg-emerald text-white py-12 mb-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Activities & Experiences</h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-lg">
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
