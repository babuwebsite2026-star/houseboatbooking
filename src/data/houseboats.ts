export interface Houseboat {
  id: string;
  name: string;
  category: 'Luxury' | 'Premium' | 'Deluxe' | 'Shared';
  bedrooms: number;
  guestCapacity: number;
  startingPrice: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  amenities: string[];
}

export const mockHouseboats: Houseboat[] = [
  {
    id: 'hb-001',
    name: 'Ocean Pearl Suite',
    category: 'Luxury',
    bedrooms: 2,
    guestCapacity: 6,
    startingPrice: 15000,
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description: 'Experience ultimate luxury on the backwaters with our premium glass-walled suite, featuring a private jacuzzi and an open sundeck.',
    amenities: ['Air Conditioning', 'Private Jacuzzi', 'Chef on board', 'Wi-Fi', 'TV', 'Sundeck'],
  },
  {
    id: 'hb-002',
    name: 'Emerald Glide',
    category: 'Premium',
    bedrooms: 3,
    guestCapacity: 8,
    startingPrice: 12000,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80',
    description: 'A spacious and elegant traditional houseboat, perfect for families looking to explore the serene Alleppey backwaters.',
    amenities: ['Air Conditioning', 'Traditional Meals', 'Guided Tour', 'Fishing Gear', 'Sundeck'],
  },
  {
    id: 'hb-003',
    name: 'Backwater Breeze',
    category: 'Deluxe',
    bedrooms: 1,
    guestCapacity: 3,
    startingPrice: 6000,
    rating: 4.5,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1629851416480-16b7f9d85420?auto=format&fit=crop&w=800&q=80',
    description: 'Cozy and comfortable, ideal for couples and honeymooners seeking a romantic getaway amidst nature.',
    amenities: ['Air Conditioning', 'Double Bed', 'Meals Included', 'Music System'],
  },
  {
    id: 'hb-004',
    name: 'Royal Heritage',
    category: 'Luxury',
    bedrooms: 4,
    guestCapacity: 12,
    startingPrice: 22000,
    rating: 4.8,
    reviews: 112,
    image: 'https://images.unsplash.com/photo-1632304918237-7f9754f73801?auto=format&fit=crop&w=800&q=80',
    description: 'A grand vessel designed for larger groups or corporate outings, combining traditional aesthetics with modern comforts.',
    amenities: ['Air Conditioning', 'Conference Setup', 'Multiple Decks', 'Premium Dining', 'Wi-Fi'],
  }
];
