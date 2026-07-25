import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center mb-16 mt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1598322616259-269bf39cc03f?auto=format&fit=crop&w=1920&q=80"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Have questions about booking a houseboat? Our local experts are ready to help you plan the perfect backwater journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-black/5">
              <h3 className="text-2xl font-bold text-[#0f3d3e] mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#8aa29e]/20 p-3 rounded-full text-[#0f3d3e] shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f3d3e] mb-1">Office Location</h4>
                    <p className="text-[#222222] text-sm">Finishing Point, Alleppey<br />Kerala, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#8aa29e]/20 p-3 rounded-full text-[#0f3d3e] shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f3d3e] mb-1">Phone & WhatsApp</h4>
                    <p className="text-[#222222] text-sm">+91 98765 43210<br />Available 24/7 for bookings</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#8aa29e]/20 p-3 rounded-full text-[#0f3d3e] shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f3d3e] mb-1">Email Address</h4>
                    <p className="text-[#222222] text-sm">info@keralahouseboats.co.in<br />support@keralahouseboats.co.in</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#8aa29e]/20 p-3 rounded-full text-[#0f3d3e] shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f3d3e] mb-1">Working Hours</h4>
                    <p className="text-[#222222] text-sm">Monday - Sunday<br />9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-black/5">
              <h3 className="text-3xl font-bold text-[#0f3d3e] mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0f3d3e] mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-gray-50" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0f3d3e] mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-gray-50" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0f3d3e] mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-gray-50" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0f3d3e] mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-gray-50" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0f3d3e] mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent bg-gray-50" placeholder="How can we help you plan your trip?"></textarea>
                </div>
                
                <Button className="w-full bg-[#d4af37] hover:bg-[#c4a132] text-[#0f3d3e] font-bold py-6 rounded-xl text-lg transition-colors">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
