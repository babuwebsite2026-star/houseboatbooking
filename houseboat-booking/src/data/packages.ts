export interface Package {
  id: string;
  name: string;
  subtitle?: string;
  duration: string;
  price: number;
  image: string;
  description: string;
  itinerary?: {
    day: string;
    title: string;
    description: string;
  }[];
  highlights: string[];
}

export const mockPackages: Package[] = [
  {
    id: 'pkg-001',
    name: 'Kerala Backwater Tour 1',
    subtitle: '(Deluxe & Luxury Hotels Only – 3* & +)',
    duration: '2 Nights / 3 Days',
    price: 18500,
    image: 'https://images.unsplash.com/photo-1593693397690-3628073262ce?auto=format&fit=crop&w=1920&q=80',
    description: 'Experience the magic of Kerala backwaters with premium stays and exclusive houseboat cruise.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Cochin Airport/Railway station Arrival',
        description: 'On arrival at Cochin Airport/Railway station you will be received and transferred to your pre-booked hotel. On arrival check in and relax. Overnight stay at hotel in Cochin'
      },
      {
        day: 'Day 2',
        title: 'Cochin – Alleppey (2.5hrs drive)',
        description: 'Today you can drive to Alleppey jetty to board the houseboat. Start the cruise at 12.30PM and on the way you can see daily life of village people. You will be served with Kerala Traditional lunch on board. Overnight stay at A/C Luxury Houseboat (Round the clock A/C)'
      },
      {
        day: 'Day 3',
        title: 'Alleppey – Cochin Departure (2.5hrs drive)',
        description: 'Post breakfast disembark the houseboat at Alleppey by 9.00AM and you can drive to your departure destination to catch your train/flight.'
      }
    ],
    highlights: ['Premium Hotel Stay', 'Luxury Houseboat Cruise', 'All Meals on Houseboat', 'Private Transfers'],
  },
  {
    id: 'pkg-002',
    name: 'Kerala Backwater Tour 2',
    subtitle: '(Deluxe & Luxury Hotels Only – 3* & +)',
    duration: '3 Nights / 4 Days',
    price: 24500,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80',
    description: 'A relaxed extended tour covering Cochin, Munnar, and Alleppey Backwaters.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Cochin',
        description: 'Arrival and check-in to a luxury hotel in Cochin. Evening sunset cruise on the Arabian sea.'
      },
      {
        day: 'Day 2',
        title: 'Cochin to Munnar',
        description: 'Drive to Munnar, enjoying the scenic waterfalls and tea gardens. Check-in and relax at your premium resort.'
      },
      {
        day: 'Day 3',
        title: 'Munnar to Alleppey Houseboat',
        description: 'Drive to Alleppey to board your luxury houseboat. Enjoy traditional Kerala meals and cruise through the backwaters.'
      },
      {
        day: 'Day 4',
        title: 'Departure',
        description: 'Morning breakfast on the houseboat, disembark at 9:00 AM, and transfer to Cochin Airport.'
      }
    ],
    highlights: ['Munnar Tea Gardens', 'Luxury Houseboat Stay', 'Cochin Sightseeing', 'Private AC Vehicle'],
  },
  {
    id: 'pkg-003',
    name: 'Kerala Spice & Waterways Tour',
    subtitle: '(Premium Family Package)',
    duration: '5 Nights / 6 Days',
    price: 38000,
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=1920&q=80',
    description: 'The ultimate Kerala experience covering Cochin, Munnar, Thekkady, and Alleppey.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Cochin',
        description: 'Arrival at Cochin. Transfer to hotel. Afternoon sightseeing of Fort Kochi, Chinese Fishing Nets, and Mattancherry Palace.'
      },
      {
        day: 'Day 2',
        title: 'Cochin to Munnar',
        description: 'Drive to Munnar (4 hrs). En route visit Cheeyappara Waterfalls. Check-in to your resort and enjoy the evening at leisure.'
      },
      {
        day: 'Day 3',
        title: 'Munnar Sightseeing',
        description: 'Full day sightseeing in Munnar. Visit Eravikulam National Park, Mattupetty Dam, Echo Point, and Tea Museum.'
      },
      {
        day: 'Day 4',
        title: 'Munnar to Thekkady',
        description: 'Drive to Thekkady (3 hrs). Check-in to hotel. Afternoon enjoy a boat ride in Periyar Lake to watch wildlife. Evening spice plantation tour.'
      },
      {
        day: 'Day 5',
        title: 'Thekkady to Alleppey Houseboat',
        description: 'Drive to Alleppey and board your luxury houseboat at 12:30 PM. Cruise through the backwaters, enjoying freshly prepared traditional meals.'
      },
      {
        day: 'Day 6',
        title: 'Departure from Cochin',
        description: 'After breakfast, disembark the houseboat at 9:00 AM. Drive to Cochin Airport for your onward journey.'
      }
    ],
    highlights: ['Periyar Wildlife Sanctuary', 'Munnar Tea Estates', 'Fort Kochi Heritage', 'Luxury Houseboat Cruise'],
  },
  {
    id: 'pkg-004',
    name: 'Southern Kerala Coastal Retreat',
    subtitle: '(Luxury Beach & Backwater Tour)',
    duration: '4 Nights / 5 Days',
    price: 32000,
    image: 'https://images.unsplash.com/photo-1629851416480-16b7f9d85420?auto=format&fit=crop&w=1920&q=80',
    description: 'Explore the serene beaches of Kovalam and the backwaters of Alleppey.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Arrival in Trivandrum - Kovalam',
        description: 'Arrival at Trivandrum Airport/Railway station. Transfer to Kovalam. Check-in to a luxury beach resort. Evening relax on Kovalam beach.'
      },
      {
        day: 'Day 2',
        title: 'Kovalam - Trivandrum Sightseeing',
        description: 'Visit Padmanabhaswamy Temple, Napier Museum, and Art Gallery. Afternoon trip to Poovar backwaters for a mangrove forest boat ride.'
      },
      {
        day: 'Day 3',
        title: 'Kovalam to Alleppey',
        description: 'Drive to Alleppey (4 hrs). Board your luxury houseboat. Enjoy lunch, dinner, and an overnight stay while cruising the Vembanad Lake.'
      },
      {
        day: 'Day 4',
        title: 'Alleppey to Kumarakom',
        description: 'Disembark and drive to Kumarakom. Check-in to a backwater resort. Visit the Kumarakom Bird Sanctuary in the evening.'
      },
      {
        day: 'Day 5',
        title: 'Departure',
        description: 'Check out after breakfast and transfer to Cochin Airport for departure.'
      }
    ],
    highlights: ['Kovalam Beach Resort', 'Trivandrum City Tour', 'Poovar Mangroves', 'Alleppey Houseboat'],
  }
];
