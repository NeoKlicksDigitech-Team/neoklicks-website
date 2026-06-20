import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog & Technical Insights | NeoKlicks Digitech",
  description: "Read technical guides on Next.js architectures, LLM pipelines, PageSpeed optimization, and digital marketing strategies from NeoKlicks Digitech.",
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tagColor: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Next.js is the Uncontested Standard for Modern Web Speed",
    excerpt: "Analyze how Server Components, static path optimization, and Tailwind CSS v4 compiler hooks yield 100/100 PageSpeed scores and boost Google indexing.",
    date: "June 15, 2026",
    readTime: "5 min read",
    category: "Web Engineering",
    tagColor: "text-brand-orange bg-brand-orange/10 border-brand-orange/20",
  },
  {
    id: 2,
    title: "Integrating Gemini LLMs into Business Workflows: A Hands-on Practical Guide",
    excerpt: "Go beyond marketing hype. Learn how to configure vector databases, build semantic embeddings, and deploy autonomous LLM agents inside corporate CRM panels.",
    date: "June 10, 2026",
    readTime: "7 min read",
    category: "AI & ML",
    tagColor: "text-brand-pink bg-brand-pink/10 border-brand-pink/20",
  },
  {
    id: 3,
    title: "How PageSpeed and Technical SEO Directly Lower Your Google Ad CPA",
    excerpt: "Why slow-loading landing pages destroy Meta and Google Ad performance. Learn how optimizing Core Web Vitals drops customer acquisition costs by up to 25%.",
    date: "June 05, 2026",
    readTime: "6 min read",
    category: "SEO & Growth",
    tagColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold flex items-center justify-center gap-1.5">
              <BookOpen className="h-4 w-4" /> Technical Resources
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
              NeoKlicks <span className="gradient-text">Insights</span> & Engineering Guides
            </h1>
            <p className="text-slate-500 text-sm">
              Deep dives into full-stack Next.js development, applied artificial intelligence pipelines, and data-driven marketing funnels.
            </p>
          </div>

          {/* Featured Post (Visual highlight) */}
          <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl mb-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 space-y-4 max-w-2xl">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-orange/20 text-brand-orange text-[10px] font-mono font-bold uppercase tracking-wider">
                <BookOpen className="h-3 w-3" /> Featured Article
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-display leading-snug group-hover:text-brand-orange transition-colors">
                {mockPosts[0].title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {mockPosts[0].excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-[10px] text-slate-500 font-mono pt-2">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" /> {mockPosts[0].date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {mockPosts[0].readTime}</span>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center text-xs font-bold text-brand-orange group-hover:text-brand-pink transition-colors gap-1.5 cursor-pointer">
                  Read Full Technical Blueprint <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          </div>

          {/* Grid of other posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border ${post.tagColor}`}>
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy font-display group-hover:text-brand-orange transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex gap-3 text-[10px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <span className="text-xs font-bold text-brand-navy group-hover:text-brand-orange transition-colors inline-flex items-center gap-1 cursor-pointer">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
