import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { ALL_BLOG_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Travel Guides & Tips | Brahmari Houseboats Blog",
  description: "Read the latest tips, guides, and comparison articles about Kerala houseboats, Alleppey backwaters, and planning your perfect trip.",
};

export const revalidate = 60; // Revalidate every minute

export default async function BlogIndex() {
  const posts = await client.fetch(ALL_BLOG_POSTS_QUERY);

  return (
    <div className="pb-20 bg-muted-bg min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[30vh] md:h-[40vh] flex items-center justify-center mb-16 mt-0">
        <div className="absolute inset-0 z-0 bg-primary-green">
          {/* We use a solid color background since we don't have a specific blog hero image yet */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 mt-20 md:mt-16">
          <h1 className="text-5xl md:text-7xl font-podium font-black tracking-wide mb-4 text-white">Kerala Travel Blog</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Your ultimate guide to exploring the backwaters, choosing the right houseboat, and making the most of your Kerala trip.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
            <p>We are working on some amazing articles. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link href={`/blog/${post.slug}`} key={post._id} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-light-green">
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  {post.publishedAt && (
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-text-heading group-hover:text-primary-green transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-body font-medium text-sm flex-1 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 mt-4 border-t border-light-green text-sm font-bold text-primary-green group-hover:text-ocean-blue transition-colors flex items-center justify-between">
                    <span>Read Article</span>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
