import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, BookOpen, ArrowLeft, ArrowRight, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/utils/blogData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generates static params for all 10 blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Safe helper to convert dates to ISO format
const getISODate = (dateStr: string) => {
  try {
    return new Date(dateStr).toISOString();
  } catch (e) {
    return "2026-06-23T00:00:00.000Z";
  }
};

// Generates page-specific metadata dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Article Not Found | NeoKlicks DigiTech",
    };
  }

  return {
    title: `${post.title} | NeoKlicks DigiTech`,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: `https://neoklicksdigitech.com/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://neoklicksdigitech.com/blog/${post.slug}`,
      siteName: "NeoKlicks DigiTech",
      title: post.title,
      description: post.metaDescription,
      images: [
        {
          url: post.image,
          width: 800,
          height: 500,
          alt: post.alt,
        },
      ],
      locale: "en_IN",
      publishedTime: getISODate(post.date),
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [
        {
          url: post.image,
          alt: post.alt,
        },
      ],
    },
    other: {
      "content-language": "en-IN",
    },
  };
}

export function generateViewport() {
  return {
    themeColor: "#0A1628",
    width: "device-width",
    initialScale: 1,
  };
}

export default async function BlogPostDetail({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  // Get 3 related articles (excluding the current one)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Schema.org BlogPosting structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://neoklicksdigitech.com/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.metaDescription,
    "image": [post.image],
    "datePublished": getISODate(post.date),
    "dateModified": getISODate(post.date),
    "author": {
      "@type": "Organization",
      "name": "NeoKlicks DigiTech",
      "url": "https://neoklicksdigitech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "NeoKlicks DigiTech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://neoklicksdigitech.com/logo.png"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-orange transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-brand-orange transition-colors">BLOG</Link>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-[200px] sm:max-w-none">{post.title.toUpperCase()}</span>
          </nav>

          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-orange transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Insights
          </Link>

          {/* Article Layout Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Article Content */}
            <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-2xs">
              
              {/* Category & Metadata */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono font-bold text-slate-500 mb-6">
                <span className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange uppercase">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <time dateTime={getISODate(post.date)}>{post.date}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-slate-400" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              {/* H1 Heading (Only one per page) */}
              <h1 className="text-2xl sm:text-4xl font-extrabold font-display text-brand-navy tracking-tight leading-tight mb-8">
                {post.title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center gap-3 pb-8 mb-8 border-b border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                  <User className="h-5 w-5 text-brand-navy" />
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-navy">{post.author}</div>
                  <div className="text-xs text-slate-400">Digital Solutions & Engineering</div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden mb-10 bg-slate-100">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body Content */}
              <div 
                className="[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-brand-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:text-base sm:[&_p]:text-lg [&_p]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3 [&_ul]:my-6 [&_a]:text-brand-orange [&_a]:font-semibold [&_a]:hover:underline [&_strong]:font-bold [&_li]:text-slate-600 [&_li]:text-base sm:[&_li]:text-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

            </article>

            {/* Sidebar (CTA and service list) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Premium Contact CTA */}
              <div className="bg-brand-navy text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight mb-4 relative z-10">
                  Need custom development or AI integration?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 relative z-10">
                  We design conversion-focused websites, automate complex operational workflows, and deploy high-performance custom systems.
                </p>
                <Link
                  href="/contact"
                  className="gradient-btn w-full text-center py-3 relative z-10 text-xs font-bold uppercase tracking-wider"
                >
                  Start A Project <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </div>

              {/* Quick Links to Services */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs">
                <h3 className="text-lg font-bold font-display text-brand-navy mb-4">
                  Our Expertise
                </h3>
                <div className="divide-y divide-slate-100">
                  {[
                    { name: "Web Development", path: "/services/web-development" },
                    { name: "AI/ML Solutions", path: "/services/ai-ml-solutions" },
                    { name: "E-Commerce Stores", path: "/services/e-commerce" },
                    { name: "Custom Software", path: "/services/custom-software" },
                    { name: "SEO & Growth", path: "/services/seo" },
                    { name: "UI/UX Design", path: "/services/ui-ux-design" },
                  ].map((service) => (
                    <Link
                      key={service.name}
                      href={service.path}
                      className="flex items-center justify-between py-3 text-xs font-bold text-slate-600 hover:text-brand-orange transition-colors group"
                    >
                      {service.name}
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>

            </aside>

          </div>

          {/* Related Articles Footer Grid */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold font-display text-brand-navy mb-8">
              Related Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  <Link href={`/blog/${relatedPost.slug}`} className="block overflow-hidden aspect-[16/10] relative bg-slate-100">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </Link>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                        <span className="text-brand-orange uppercase">
                          {relatedPost.category}
                        </span>
                        <span className="text-slate-400 font-normal">
                          {relatedPost.date}
                        </span>
                      </div>
                      
                      <Link href={`/blog/${relatedPost.slug}`} className="block">
                        <h3 
                          className="text-sm font-bold text-brand-navy group-hover:text-brand-orange transition-colors leading-snug line-clamp-2"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          }}
                        >
                          {relatedPost.title}
                        </h3>
                      </Link>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] text-slate-400 font-mono">
                        {relatedPost.readTime}
                      </span>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="text-xs font-bold text-brand-navy hover:text-brand-orange transition-colors inline-flex items-center gap-1"
                      >
                        Read <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
