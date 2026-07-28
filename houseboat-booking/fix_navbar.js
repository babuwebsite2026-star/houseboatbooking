const fs = require('fs');
const path = 'src/components/Navbar.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace bg-white with liquid-glass and keep text white
content = content.replace("isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'", "isScrolled ? 'liquid-glass shadow-lg border-b border-white/10' : 'bg-transparent'");
content = content.replace("isScrolled ? 'text-ocean-blue' : 'text-white'", "'text-white'");
content = content.replace("isScrolled ? 'text-gray-500' : 'text-white/90'", "'text-white/90'");
content = content.replace("isScrolled ? 'text-ocean-blue hover:bg-ocean-blue/10' : 'text-gray-100 hover:text-white hover:bg-white/10'", "'text-gray-100 hover:text-white hover:bg-white/10'");
content = content.replace("isScrolled ? 'text-ocean-blue hover:bg-ocean-blue/10' : 'text-gray-100 hover:text-white hover:bg-white/10'", "'text-gray-100 hover:text-white hover:bg-white/10'");
content = content.replace("isScrolled ? 'text-ocean-blue hover:bg-ocean-blue/10' : 'text-gray-100 hover:text-white hover:bg-white/10'", "'text-gray-100 hover:text-white hover:bg-white/10'");
content = content.replace("isScrolled ? 'text-ocean-blue hover:bg-ocean-blue/10' : 'text-gray-100 hover:text-white hover:bg-white/10'", "'text-gray-100 hover:text-white hover:bg-white/10'");
content = content.replace("isScrolled ? 'text-ocean-blue hover:bg-ocean-blue/10' : 'text-gray-100 hover:text-white hover:bg-white/10'", "'text-gray-100 hover:text-white hover:bg-white/10'");
content = content.replace("isScrolled ? 'text-ocean-blue hover:bg-ocean-blue/10' : 'text-gray-100 hover:text-white hover:bg-white/10'", "'text-gray-100 hover:text-white hover:bg-white/10'");

// Mobile menu toggle icon
content = content.replace('w-10 h-10 bg-white hover:bg-gray-50 border border-gray-200', 'w-10 h-10 liquid-glass hover:bg-white/10 border border-white/20');
content = content.replace('w-5 h-5 text-gray-600', 'w-5 h-5 text-white');

// Mobile dropdown
content = content.replace('bg-white shadow-lg py-4 px-4 flex flex-col gap-4 text-gray-800 border-t border-gray-100', 'liquid-glass shadow-lg py-4 px-4 flex flex-col gap-4 text-white border-t border-white/10');
content = content.replace('hover:bg-gray-50', 'hover:bg-white/10');
content = content.replace('hover:bg-gray-50', 'hover:bg-white/10');
content = content.replace('hover:bg-gray-50', 'hover:bg-white/10');
content = content.replace('hover:bg-gray-50', 'hover:bg-white/10');
content = content.replace('hover:bg-gray-50', 'hover:bg-white/10');
content = content.replace('hover:bg-gray-50', 'hover:bg-white/10');
content = content.replace('bg-nature-green/10 text-nature-green', 'bg-white/20 text-white');


fs.writeFileSync(path, content, 'utf8');
