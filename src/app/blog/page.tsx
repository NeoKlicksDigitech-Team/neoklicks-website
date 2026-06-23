import React from "react";
import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog & Technical Insights | NeoKlicks DigiTech",
  description: "Deep dives into full-stack Next.js development, applied AI/ML pipelines, and data-driven marketing funnels. Engineering guides and insights from the NeoKlicks DigiTech team.",
  keywords: "web development blog, Next.js tutorials, AI ML guides India, digital marketing insights, NeoKlicks blog, engineering articles Nashik",
  authors: [{ name: "NeoKlicks DigiTech" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://neoklicksdigitech.com/blog",
  },
  openGraph: {
    type: "website",
    url: "https://neoklicksdigitech.com/blog",
    siteName: "NeoKlicks DigiTech",
    title: "NeoKlicks Insights & Engineering Guides",
    description: "Technical deep dives into Next.js, AI/ML integrations, and performance marketing. Stay ahead with NeoKlicks DigiTech's engineering blog.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NeoKlicks DigiTech Blog – Technical Insights",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoKlicks Insights & Engineering Guides",
    description: "Deep dives into Next.js, AI pipelines, and digital marketing from the NeoKlicks DigiTech team.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        alt: "NeoKlicks DigiTech – Technical Blog",
      },
    ],
  },
  other: {
    "content-language": "en-IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

import { blogPosts } from "@/utils/blogData";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" /> Technical Resources
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
                Insights. Ideas. Impact.
              </h1>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Deep dives into full-stack Next.js development, applied artificial intelligence pipelines, and data-driven marketing funnels from the NeoKlicks team.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-brand-pink transition-colors gap-1.5 shrink-0"
            >
              View all insights <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Grid of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Image */}
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-[16/10] relative bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold">
                      <span className="text-brand-orange uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-slate-400 font-normal flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`} className="block group/title">
                      <h3 
                        className="text-lg font-bold text-brand-navy font-display group-hover/title:text-brand-orange transition-colors leading-snug line-clamp-2"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        }}
                      >
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p 
                      className="text-xs text-slate-500 leading-relaxed line-clamp-3"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {post.readTime}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-brand-navy hover:text-brand-orange transition-colors inline-flex items-center gap-1 group/btn"
                    >
                      Read more <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
