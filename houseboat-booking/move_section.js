const fs = require('fs');
const file = '/Users/adhyDev/Desktop/houseboatbooking/houseboat-booking/src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

// The old What We Offer section is from line 48 to 115
// The new What We Offer section is from line 156 to 267

// Extract the new section (0-indexed, so lines 155 to 267)
const newSection = lines.slice(155, 267).join('\n');

// Construct the new file content:
// 1. Everything before line 48 (lines 0 to 46)
// 2. The new section
// 3. Everything between line 115 and 156 (lines 115 to 154)
// 4. Everything after line 267 (lines 267 to end)

const part1 = lines.slice(0, 47).join('\n');
const part2 = newSection;
const part3 = lines.slice(115, 155).join('\n');
const part4 = lines.slice(267).join('\n');

const newContent = [part1, part2, part3, part4].join('\n');
fs.writeFileSync(file, newContent, 'utf8');
console.log('Moved successfully!');
