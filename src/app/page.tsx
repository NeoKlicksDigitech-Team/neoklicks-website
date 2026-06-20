import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Brain, Globe, ShoppingBag, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import WorkflowAnimation from "@/components/WorkflowAnimation";
import Footer from "@/components/Footer";

export default function Home() {
  const previewServices = [
    {
      title: "Web Development",
      slug: "web-development",
      desc: "Speed-focused, custom-built websites designed to convert visitors.",
      icon: <Globe className="h-5 w-5 text-brand-orange" />,
    },
    {
      title: "Business Automation & Systems",
      slug: "ai-ml-solutions",
      desc: "Intelligent systems and workflows to automate daily operational tasks.",
      icon: <Cpu className="h-5 w-5 text-brand-pink" />,
    },
    {
      title: "E-Commerce Storefronts",
      slug: "e-commerce",
      desc: "Secure, high-converting online stores tailored for your business.",
      icon: <ShoppingBag className="h-5 w-5 text-brand-orange" />,
    },
    {
      title: "Custom Software & Dashboards",
      slug: "custom-software",
      desc: "Custom-built database systems, CRMs, and internal portals.",
      icon: <Cpu className="h-5 w-5 text-brand-orange" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main page content */}
      <main className="flex-grow">
        {/* Redesigned Mockup-Heavy Hero */}
        <Hero />

        {/* Infinite Tech Stack Marquee */}
        <TechMarquee />

        {/* Services Summary Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold flex items-center gap-1.5">
                  <Terminal className="h-4 w-4" /> Core Competence
                </span>
                <h2 className="text-3xl font-extrabold font-display text-brand-navy tracking-tight">
                  High-Performance Digital Engineering
                </h2>
                <p className="text-slate-500 text-sm max-w-xl">
                  We build conversion-focused interfaces, customized backend databases, and actual machine learning features.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-bold text-brand-orange hover:text-brand-pink transition-colors gap-1.5 shrink-0"
              >
                View All 8 Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Quick Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {previewServices.map((service) => (
                <div
                  key={service.slug}
                  className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/50 flex items-center justify-center shadow-2xs">
                      {service.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-brand-navy">{service.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
                  <div className="pt-4 mt-auto">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-xs font-bold text-brand-navy hover:text-brand-orange transition-colors gap-1"
                    >
                      Explore Details <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Copywriting */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">Our Process</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
                  A Clear, Client-Friendly <span className="gradient-text">Workflow</span>
                </h2>
                <p className="text-slate-500 text-base leading-relaxed">
                  We don't believe in guesswork. Every project we undertake follows a proven, transparent delivery pipeline—ensuring your product is delivered on time, within budget, and built to the highest quality standards.
                </p>
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 text-left">
                    <span className="w-6 h-6 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-sm font-bold text-brand-navy">Transparent Progress</p>
                      <p className="text-xs text-slate-500">Regular demos and feedback cycles so you are always in the loop.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <span className="w-6 h-6 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink text-xs font-bold shrink-0 mt-0.5">✓</span>
                    <div>
                      <p className="text-sm font-bold text-brand-navy">Rigorous Testing</p>
                      <p className="text-xs text-slate-500">Continuous manual and automated quality audits before any release.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Timeline Animation */}
              <div className="lg:col-span-6 flex justify-center w-full">
                <WorkflowAnimation />
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
