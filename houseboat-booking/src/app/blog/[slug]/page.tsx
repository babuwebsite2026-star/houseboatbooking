import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Calendar, ChevronLeft } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { SINGLE_BLOG_POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await client.fetch(SINGLE_BLOG_POST_QUERY, { slug: resolvedParams.slug });
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt || `Read ${post.title} on Brahmari Houseboats Blog.`;

  return {
    title: `${title} | Kerala Houseboats Blog`,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.keralahouseboats.co.in/blog/${resolvedParams.slug}`,
      images: post.mainImage ? [{ url: urlFor(post.mainImage).url() }] : [],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
          <Image
            alt={value.alt || 'Blog image'}
            src={urlFor(value).url()}
            fill
            className="object-cover"
          />
        </div>
      )
    }
  },
  block: {
    h2: ({children}: any) => <h2 className="text-3xl font-bold mt-12 mb-6 text-ocean-blue">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-2xl font-bold mt-8 mb-4 text-ocean-blue/80">{children}</h3>,
    normal: ({children}: any) => <p className="text-gray-700 leading-relaxed mb-6 text-lg">{children}</p>,
    blockquote: ({children}: any) => <blockquote className="border-l-4 border-primary-green pl-4 italic my-6 text-gray-600 bg-light-green/20 py-2 rounded-r">{children}</blockquote>,
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-700 text-lg">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal pl-8 mb-6 space-y-2 text-gray-700 text-lg">{children}</ol>,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = await client.fetch(SINGLE_BLOG_POST_QUERY, { slug: resolvedParams.slug });

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.seoTitle || post.title,
    image: post.mainImage ? [urlFor(post.mainImage).url()] : [],
    datePublished: post.publishedAt,
    description: post.seoDescription || post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'Brahmari Houseboats'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pb-20 bg-muted-bg min-h-screen">
        {/* Article Header */}
        <div className="container mx-auto px-4 md:px-8 pt-12 md:pt-24 max-w-4xl">
          <Link href="/blog" className="inline-flex items-center text-primary-green hover:text-ocean-blue font-semibold mb-8 transition-colors">
            <ChevronLeft className="w-5 h-5 mr-1" /> Back to Blog
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-podium font-black text-ocean-blue mb-6 leading-tight">
            {post.title}
          </h1>
          
          {post.publishedAt && (
            <div className="flex items-center gap-2 text-gray-500 font-medium mb-10">
              <Calendar className="w-5 h-5" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          )}
        </div>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="container mx-auto px-4 md:px-8 max-w-5xl mb-12">
            <div className="relative w-full h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Article Body */}
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg max-w-none">
            {post.body ? (
              <PortableText value={post.body} components={ptComponents} />
            ) : (
              <p className="text-gray-500 italic">No content available for this post.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
