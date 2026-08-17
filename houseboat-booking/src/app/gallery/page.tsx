import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { ALL_HOUSEBOATS_QUERY, HOME_PAGE_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 30;

export default async function GalleryPage() {
  const [houseboats, homePage] = await Promise.all([
    client.fetch(ALL_HOUSEBOATS_QUERY),
    client.fetch(HOME_PAGE_QUERY)
  ]);

  // Extract all main images and gallery images from all houseboats
  const images: any[] = [];
  
  // Add Home Page Gallery Images first
  if (homePage?.galleryImages && Array.isArray(homePage.galleryImages)) {
    homePage.galleryImages.forEach((img: any, idx: number) => {
      images.push({ src: img, alt: `Home Page Gallery Image ${idx + 1}` });
    });
  }

  houseboats.forEach((boat: any) => {
    const boatName = boat.bedrooms 
      ? `${boat.bedrooms} Bedroom Houseboat`
      : (boat.name || 'Kerala Houseboat');

    if (boat.image) {
      images.push({ src: boat.image, alt: boatName });
    }
    if (boat.gallery && Array.isArray(boat.gallery)) {
      boat.gallery.forEach((img: any, idx: number) => {
        images.push({ src: img, alt: `${boatName} gallery image ${idx + 1}` });
      });
    }
  });

  // Add local static images
  images.push(
    { src: '/images/gallery/img1.jpg', alt: 'Alleppey Backwaters View', isLocal: true },
    { src: '/images/gallery/img2.jpg', alt: 'Houseboat Cruising', isLocal: true },
    { src: '/images/gallery/img3.jpg', alt: 'Scenic Kerala', isLocal: true },
    { src: '/images/gallery/img4.jpg', alt: 'Beautiful Backwaters', isLocal: true }
  );

  return (
    <div className="pb-20 bg-muted-bg min-h-screen">
      <div className="container mx-auto px-4 md:px-8 pt-32">
        {images.length > 0 ? (
          <div className="columns-2 lg:columns-3 gap-3 md:gap-6 space-y-3 md:space-y-6">
            {images.map((imgData, i) => (
              <div key={i} className="break-inside-avoid relative rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-light-green">
                <Image
                  src={imgData.isLocal ? imgData.src : urlFor(imgData.src).url()}
                  alt={imgData.alt}
                  width={600}
                  height={800} // This height will adjust because of the layout
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-700">No images available yet.</h2>
            <p className="text-gray-500 mt-2">Images uploaded to your houseboats will appear here automatically.</p>
          </div>
        )}
      </div>
    </div>
  );
}
