import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'houseboat',
  title: 'Houseboat',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Luxury', value: 'luxury' },
          { title: 'Premium', value: 'premium' },
          { title: 'Deluxe', value: 'deluxe' },
          { title: 'Shared', value: 'shared' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isPrivate',
      title: 'Private',
      type: 'boolean',
      description: 'Check if this is a private houseboat',
      initialValue: false,
    }),
    defineField({
      name: 'isShared',
      title: 'Shared',
      type: 'boolean',
      description: 'Check if this is a shared houseboat',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startingPrice',
      title: 'Starting Price (₹) - Legacy',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'dayCruisePrice',
      title: 'Day Cruise Price (₹)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'dayCruiseTime',
      title: 'Day Cruise Time (e.g. 1:30 PM - 5:00 PM)',
      type: 'string',
    }),
    defineField({
      name: 'overnightPrice',
      title: 'Overnight Stay Price (₹)',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'overnightTime',
      title: 'Overnight Stay Time (e.g. Check-in 1:30 PM • Check-out 8:30 AM)',
      type: 'string',
    }),
    defineField({
      name: 'guestCapacity',
      title: 'Guest Capacity',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'bedrooms',
      title: 'Bedrooms',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (0 - 5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0).max(5),
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'amenities',
      title: 'Amenities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'itinerary',
      title: 'Sample Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'time', title: 'Time', type: 'string' },
            { name: 'activity', title: 'Activity', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      category: 'category',
      bedrooms: 'bedrooms',
      media: 'image',
    },
    prepare(selection) {
      const { category, bedrooms, media } = selection
      const title = category && bedrooms 
        ? `${bedrooms} Bedroom ${category.charAt(0).toUpperCase() + category.slice(1)} Houseboat`
        : 'Houseboat'
      return {
        title: title,
        media: media,
      }
    }
  },
})
