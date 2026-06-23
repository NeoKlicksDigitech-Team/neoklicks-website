import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Server, Cpu, Database, Blocks } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/utils/portfolioData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for Next.js pre-rendering
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) {
    return {
      title: "Case Study Not Found | NeoKlicks DigiTech",
    };
  }

  return {
    title: `${study.title} | Case Study | NeoKlicks DigiTech`,
    description: `Case study for ${study.title}: ${study.description} Read how we solved technical bottlenecks and delivered ${study.metric} results.`,
    keywords: `${study.title}, case study Nashik, ${study.category}, ${study.technologies.join(", ")}`,
    authors: [{ name: "NeoKlicks DigiTech" }],
    robots: "index, follow",
    alternates: {
      canonical: `https://neoklicksdigitech.com/portfolio/${study.slug}`,
    },
    openGraph: {
      type: "article",
      url: `https://neoklicksdigitech.com/portfolio/${study.slug}`,
      siteName: "NeoKlicks DigiTech",
      title: `${study.title} - Architectural Case Study`,
      description: study.description,
      images: [
        {
          url: study.image,
          width: 800,
          height: 500,
          alt: study.alt,
        },
      ],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} - Architectural Case Study`,
      description: study.description,
      images: [
        {
          url: study.image,
          alt: study.alt,
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

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  // Get other case studies for the bottom grid
  const otherStudies = caseStudies.filter((s) => s.slug !== study.slug);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-orange transition-colors">HOME</Link>
            <span>/</span>
            <Link href="/portfolio" className="hover:text-brand-orange transition-colors">PORTFOLIO</Link>
            <span>/</span>
            <span className="text-slate-600 truncate max-w-[200px] sm:max-w-none">{study.title.toUpperCase()}</span>
          </nav>

          {/* Back button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-orange transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" /> Back to Portfolio
          </Link>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Content Area (Left col-span-8) */}
            <article className="lg:col-span-8 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-2xs space-y-10">
              
              {/* Category & Title */}
              <div className="space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-mono text-xs font-bold uppercase tracking-wider">
                  {study.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-brand-navy tracking-tight leading-tight">
                  {study.title}
                </h1>
                <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                  {study.description}
                </p>
              </div>

              {/* Large Cover Image */}
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src={study.image}
                  alt={study.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Challenge Section */}
              <section className="space-y-4 border-t border-slate-100 pt-8">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy">
                  The Challenge
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {study.challenge}
                </p>
              </section>

              {/* Solution Section */}
              <section className="space-y-4 border-t border-slate-100 pt-8">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy">
                  The Solution
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {study.solution}
                </p>
              </section>

              {/* Technical Architecture Section */}
              <section className="space-y-4 border-t border-slate-100 pt-8">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-brand-navy">
                  Technical Architecture
                </h2>
                <div className="p-5 sm:p-6 bg-slate-950 text-slate-300 rounded-2xl border border-slate-800 font-mono text-xs sm:text-sm leading-relaxed relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="flex items-center gap-2 text-slate-500 border-b border-slate-800 pb-3 mb-4 font-bold">
                    <Blocks className="h-4 w-4 text-brand-orange" />
                    <span>SYSTEM_BLUEPRINT_LOGS</span>
                  </div>
                  <p className="text-brand-orange font-bold mb-2"># Pipeline & Framework Specs</p>
                  <p>{study.architecture}</p>
                </div>
              </section>

            </article>

            {/* Sidebar (Right col-span-4) */}
            <aside className="lg:col-span-4 space-y-8">
              
              {/* Highlight Metric Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-4 text-left">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                  {study.metricLabel}
                </span>
                <div className="text-4xl sm:text-5xl font-black font-mono text-brand-orange tracking-tight leading-none">
                  {study.metric}
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-brand-orange to-brand-pink rounded-full"></div>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold leading-relaxed pt-2">
                  Verified growth metrics registered inside our sandbox deployment checks.
                </p>
              </div>

              {/* Results & Bullet list */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6 text-left">
                <h3 className="text-lg font-bold font-display text-brand-navy">
                  Key Accomplishments
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  {study.results}
                </p>

                <div className="space-y-3 pt-2">
                  {study.resultsHighlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-600 font-bold leading-snug">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies List */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs text-left">
                <h3 className="text-lg font-bold font-display text-brand-navy mb-4">
                  Built With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-slate-50 border border-slate-200 text-xs font-mono font-bold text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Box */}
              <div className="bg-brand-navy text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden group text-left">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight mb-4 relative z-10">
                  Ready to achieve similar results?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 relative z-10">
                  Contact us today for a free technology review of your business operations.
                </p>
                <Link
                  href="/contact"
                  className="gradient-btn w-full text-center py-3 relative z-10 text-xs font-bold uppercase tracking-wider"
                >
                  Start A Project <ArrowRight className="h-4 w-4 ml-1.5" />
                </Link>
              </div>

            </aside>

          </div>

          {/* Other Projects Footer Grid */}
          <div className="mt-24 pt-16 border-t border-slate-200">
            <h2 className="text-2xl font-bold font-display text-brand-navy mb-8">
              Explore Other Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherStudies.map((otherStudy) => (
                <article
                  key={otherStudy.slug}
                  className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  <Link href={`/portfolio/${otherStudy.slug}`} className="block h-44 overflow-hidden bg-slate-900 shrink-0 relative">
                    <img
                      src={otherStudy.image}
                      alt={otherStudy.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                  </Link>

                  <div className="p-6 flex flex-col flex-grow justify-between text-left space-y-4">
                    <div className="space-y-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-navy/10 text-[9px] font-mono font-bold text-brand-navy uppercase tracking-wider">
                        {otherStudy.category}
                      </span>
                      <Link href={`/portfolio/${otherStudy.slug}`} className="block">
                        <h3 className="text-base font-bold text-brand-navy font-display group-hover:text-brand-orange transition-colors leading-snug">
                          {otherStudy.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-2">
                        {otherStudy.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                        {otherStudy.metricLabel}: <span className="text-brand-orange">{otherStudy.metric}</span>
                      </span>
                      <Link
                        href={`/portfolio/${otherStudy.slug}`}
                        className="text-xs font-bold text-brand-navy hover:text-brand-orange transition-colors inline-flex items-center gap-1 group/btn"
                      >
                        Explore <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
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
