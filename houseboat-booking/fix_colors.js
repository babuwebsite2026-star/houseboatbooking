const fs = require('fs');
const path = 'src/app/packages/malaysia-tour-package-10d9n/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Hero Badges
content = content.replace('bg-gold text-[#0f3d3e]', 'bg-[#EFFF00] text-black');
content = content.replace('text-gold', 'text-white/60'); // clock/map/stars in stats row
content = content.replace('text-gold', 'text-white/60');
content = content.replace('text-gold', 'text-white/60');
content = content.replace('text-gold', 'text-[#EFFF00]'); // Pricing text
content = content.replace('text-gold', 'text-[#EFFF00]'); // Reviews stars

// The Vibe
content = content.replace('text-[#0f3d3e]">The Vibe', 'text-gray-900">The Vibe');
content = content.replace('text-[#0f3d3e] uppercase tracking-widest mb-6">Trip Highlights', 'text-gray-900 uppercase tracking-widest mb-6">Trip Highlights');
content = content.replace(/text-gold font-bold mt-0\.5/g, 'text-[#FD3A00] font-bold mt-0.5');

// Trip Itinerary Header
content = content.replace('text-[#0f3d3e] mb-10 flex', 'text-gray-900 mb-10 flex');
content = content.replace('<MapPin className="w-5 h-5 text-gold" /> Trip Itinerary', '<MapPin className="w-5 h-5 text-[#FD3A00]" /> Trip Itinerary');

// Itinerary active dot
content = content.replace("openDay === day.day ? 'bg-gold border-gold' : 'bg-white border-gold/40'", "openDay === day.day ? 'bg-white border-[#FD3A00]' : 'bg-white border-[#FD3A00]'");
content = content.replace('bg-[#0f3d3e] text-gold', 'bg-black text-[#EFFF00]');
content = content.replace("openDay === day.day ? 'text-[#0f3d3e]' : 'text-gray-600 group-hover:text-[#0f3d3e]'", "openDay === day.day ? 'text-[#FD3A00]' : 'text-gray-600 group-hover:text-[#FD3A00]'");
content = content.replace("openDay === day.day ? 'rotate-180 text-[#0f3d3e]'", "openDay === day.day ? 'rotate-180 text-[#FD3A00]'");

// Experiences
content = content.replace('<Sun className="w-4 h-4 text-gold" />', '<Sun className="w-4 h-4 text-[#FD3A00]" />');
content = content.replace('bg-gold mt-1.5', 'bg-[#FD3A00] mt-1.5');
content = content.replace('hover:border-gold/30', 'hover:border-gray-300');
content = content.replace('hover:border-gold/30', 'hover:border-gray-300');
content = content.replace('bg-ocean-blue/10 text-ocean-blue', 'bg-blue-100 text-blue-600');
content = content.replace('bg-green-50 text-green-600', 'bg-green-100 text-green-600'); // same for meals

// Right Column: Sticky Booking Widget
content = content.replace('bg-[#0f3d3e] p-8 rounded-3xl text-white shadow-2xl shadow-[#0f3d3e]/20 border border-white/10', 'bg-white p-8 rounded-3xl text-gray-900 shadow-xl shadow-gray-200/50 border border-gray-100');
content = content.replace('text-white/70 text-sm mb-8', 'text-gray-600 text-sm mb-8');
content = content.replace('text-white/50 uppercase', 'text-gray-400 uppercase');
content = content.replace('text-white/50 uppercase', 'text-gray-400 uppercase');
content = content.replace('text-gold', 'text-[#25D366]');
content = content.replace('text-gold', 'text-[#25D366]');
content = content.replace('bg-white/5', 'bg-gray-50 border border-gray-100');
content = content.replace('bg-white/5', 'bg-gray-50 border border-gray-100');
content = content.replace('text-white/50 text-xs mt-5', 'text-gray-400 text-xs mt-5');

// Hero gradient
content = content.replace('from-[#0f3d3e]/90 via-[#0f3d3e]/40', 'from-black/70 via-black/20');

// Fix global stars replacement since it only replaced the first occurrences
content = content.replace(/text-gold/g, 'text-[#EFFF00]'); 

fs.writeFileSync(path, content, 'utf8');
