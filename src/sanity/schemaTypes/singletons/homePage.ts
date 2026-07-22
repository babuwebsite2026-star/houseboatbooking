import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Use <br> for line breaks and <span> for gold text. Example: Experience the Magic of <br><span class="text-gold">Kerala Backwaters</span>',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryTitle',
      title: 'Gallery Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallerySubtitle',
      title: 'Gallery Subtitle',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images (Exactly 4)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required().min(4).max(4),
    }),
  ],
})
