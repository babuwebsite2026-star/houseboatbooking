import { groq } from 'next-sanity'

export const ALL_HOUSEBOATS_QUERY = groq`*[_type == "houseboat"] | order(startingPrice asc) {
  _id,
  name,
  "id": slug.current,
  category,
  startingPrice,
  dayCruisePrice,
  dayCruiseTime,
  overnightPrice,
  overnightTime,
  guestCapacity,
  bedrooms,
  rating,
  image,
  amenities,
  itinerary
}`

export const PAGINATED_HOUSEBOATS_QUERY = groq`*[_type == "houseboat"] | order(startingPrice asc) [$start...$end] {
  _id,
  name,
  "id": slug.current,
  category,
  startingPrice,
  guestCapacity,
  bedrooms,
  rating,
  image,
  description
}`

export const HOUSEBOATS_COUNT_QUERY = groq`count(*[_type == "houseboat"])`

export const HOUSEBOATS_BY_CATEGORY_QUERY = groq`*[_type == "houseboat" && category == $category] | order(startingPrice asc) {
  _id,
  name,
  "id": slug.current,
  category,
  description,
  startingPrice,
  dayCruisePrice,
  dayCruiseTime,
  overnightPrice,
  overnightTime,
  guestCapacity,
  bedrooms,
  rating,
  image,
  amenities,
  itinerary
}`

export const PRIVATE_HOUSEBOATS_QUERY = groq`*[_type == "houseboat" && isPrivate == true] | order(startingPrice asc) {
  _id,
  "id": slug.current,
  category,
  description,
  startingPrice,
  dayCruisePrice,
  dayCruiseTime,
  overnightPrice,
  overnightTime,
  guestCapacity,
  bedrooms,
  rating,
  image,
  amenities,
  itinerary,
  isPrivate
}`

export const SHARED_HOUSEBOATS_QUERY = groq`*[_type == "houseboat" && isShared == true] | order(startingPrice asc) {
  _id,
  "id": slug.current,
  category,
  description,
  startingPrice,
  dayCruisePrice,
  dayCruiseTime,
  overnightPrice,
  overnightTime,
  guestCapacity,
  bedrooms,
  rating,
  image,
  amenities,
  itinerary,
  isShared
}`

export const SINGLE_HOUSEBOAT_QUERY = groq`*[_type == "houseboat" && slug.current == $slug][0] {
  _id,
  name,
  "id": slug.current,
  category,
  description,
  startingPrice,
  dayCruisePrice,
  dayCruiseTime,
  overnightPrice,
  overnightTime,
  guestCapacity,
  bedrooms,
  rating,
  image,
  gallery,
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
  dayCruisePrice,
  dayCruiseTime,
  overnightPrice,
  overnightTime,
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

export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0] {
  whatsappNumber,
  phoneNumber,
  locationAddress,
  contactDescription
}`

export const HOME_PAGE_QUERY = groq`*[_type == "homePage"][0] {
  heroTitle,
  heroSubtitle,
  heroImage,
  galleryTitle,
  gallerySubtitle,
  galleryImages
}`

export const ALL_BLOG_POSTS_QUERY = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt
}`

export const SINGLE_BLOG_POST_QUERY = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  excerpt,
  body,
  seoTitle,
  seoDescription
}`
