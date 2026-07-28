import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#FAF7F0] min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center mb-20 mt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/hero.jpg"
            alt="About Us"
            fill
            className="object-cover object-[center_85%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">About Us</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Welcome to KeralaHouseboats. We are dedicated to providing the most authentic and luxurious backwater experiences in Kerala.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about/story.jpg"
              alt="Houseboat in Alleppey"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-primary-green">Our Story</h2>
            <p className="text-text-body leading-relaxed">
              Based in the beautiful city of Alleppey, known as the Venice of the East, KeralaHouseboats has been crafting unforgettable backwater journeys for over a decade. We believe that a trip to Kerala is incomplete without experiencing the serene beauty of the backwaters from the comfort of a traditional houseboat.
            </p>
            <p className="text-text-body leading-relaxed">
              Our fleet includes everything from intimate 1-bedroom houseboats for romantic getaways to expansive 10-bedroom luxury vessels perfect for corporate events and large family gatherings. Each houseboat blends traditional Kerala architecture with modern luxury amenities.
            </p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Premium & Luxury Fleet",
                "Experienced Local Crew",
                "Authentic Kerala Cuisine",
                "Customizable Itineraries",
                "24/7 Customer Support",
                "Best Price Guarantee"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary-green w-5 h-5" />
                  <span className="text-primary-green font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Link href="/contact">
                <Button className="bg-primary-green hover:bg-secondary-green text-white font-bold px-8 py-6 rounded-full text-lg shadow-lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
