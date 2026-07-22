import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Booking Number',
      description: 'The number used for the "Book Now" buttons (e.g. 919876543210)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Display Phone Number',
      description: 'The phone number shown in the contact section (e.g. +91 98765 43210)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locationAddress',
      title: 'Location Address',
      description: 'The physical address shown in the contact section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'contactDescription',
      title: 'Contact Section Description',
      type: 'text',
    }),
  ],
})
