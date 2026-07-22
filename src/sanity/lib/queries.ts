import { groq } from 'next-sanity'

export const ALL_HOUSEBOATS_QUERY = groq`*[_type == "houseboat"] | order(startingPrice asc) {
  _id,
  name,
  "id": slug.current,
  category,
  description,
  startingPrice,
  guestCapacity,
  bedrooms,
  rating,
  image,
  amenities,
  itinerary
}`

export const SINGLE_HOUSEBOAT_QUERY = groq`*[_type == "houseboat" && slug.current == $slug][0] {
  _id,
  name,
  "id": slug.current,
  category,
  description,
  startingPrice,
  guestCapacity,
  bedrooms,
  rating,
  image,
  amenities,
  itinerary
}`

export const FEATURED_HOUSEBOATS_QUERY = groq`*[_type == "houseboat"] | order(rating desc)[0...3] {
  _id,
  name,
  "id": slug.current,
  category,
  description,
  startingPrice,
  guestCapacity,
  bedrooms,
  rating,
  image
}`

export const ALL_PACKAGES_QUERY = groq`*[_type == "tourPackage"] | order(price asc) {
  _id,
  name,
  "id": slug.current,
  subtitle,
  duration,
  price,
  image,
  description,
  highlights,
  itinerary
}`
