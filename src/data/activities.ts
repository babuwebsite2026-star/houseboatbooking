export interface Activity {
  id: string;
  name: string;
  price: number;
  duration: string;
  image: string;
  description: string;
}

export const mockActivities: Activity[] = [
  {
    id: 'act-001',
    name: 'Shikara Ride',
    price: 800,
    duration: '1 Hour',
    image: 'https://images.unsplash.com/photo-1629851416480-16b7f9d85420?auto=format&fit=crop&w=800&q=80',
    description: 'Navigate through the narrow canals of Alleppey in a traditional Shikara boat, getting a closer look at village life.',
  },
  {
    id: 'act-002',
    name: 'Canoeing',
    price: 500,
    duration: '2 Hours',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80',
    description: 'Paddle through the serene backwaters at your own pace. A quiet and peaceful way to explore the surroundings.',
  },
  {
    id: 'act-003',
    name: 'Village Walk & Tour',
    price: 300,
    duration: '3 Hours',
    image: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80',
    description: 'A guided walk through the local villages, interacting with the friendly locals and experiencing their daily lifestyle.',
  }
];
