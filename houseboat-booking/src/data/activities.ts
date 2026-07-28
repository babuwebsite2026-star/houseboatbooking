export interface Activity {
  id: string;
  name: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  objectPosition?: string;
}

export const mockActivities: Activity[] = [
  {
    id: 'act-001',
    name: 'Shikara Ride',
    price: 800,
    duration: '1 Hour',
    image: '/images/activities/shikara.jpg',
    description: 'Navigate through the narrow canals of Alleppey in a traditional Shikara boat, getting a closer look at village life.',
    objectPosition: 'center bottom',
  },
  {
    id: 'act-004',
    name: 'Kayaking',
    price: 600,
    duration: '2 Hours',
    image: '/images/activities/kayaking.jpg',
    description: 'Explore the serene backwaters up close in a kayak. A perfect way to navigate the smaller canals and enjoy nature.',
    objectPosition: 'center bottom',
  },
  {
    id: 'act-005',
    name: 'Speed Boat',
    price: 1500,
    duration: '1 Hour',
    image: '/images/activities/speedboat.jpg',
    description: 'Feel the thrill of speed as you zip across the larger lakes and backwaters in a powerful speed boat.',
    objectPosition: 'center 75%',
  }
];
