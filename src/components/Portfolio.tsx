"use client";

import React from "react";
import { Brain, ArrowUpRight, Code, BarChart, ShoppingCart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/utils/portfolioData";

const iconMap = {
  "omnisearch-ai-assistant": <Brain className="h-5 w-5 text-brand-pink" />,
  "swiftcart-elite-shop": <ShoppingCart className="h-5 w-5 text-brand-orange" />,
  "veloce-saas-operator-panel": <BarChart className="h-5 w-5 text-indigo-500" />
};

export default function Portfolio() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="work" className="py-24 bg-slate-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20">
            ★ Work Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
            Case Studies and Product <span className="gradient-text">Milestones</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Explore the architectural blueprints and metrics for our custom software builds, headless e-commerce storefronts, and applied machine learning systems.
          </p>
          <p className="text-slate-400 text-xs italic">
            *Note: The following entries demonstrate our technical architectural capability. Real case studies are modified or omitted to comply with client NDAs.
          </p>
        </div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, idx) => {
            const icon = iconMap[study.slug as keyof typeof iconMap] || <Brain className="h-5 w-5 text-brand-pink" />;
            return (
              <motion.div
                key={study.slug}
                variants={itemVariants}
                className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden relative"
              >
                {/* Image Header */}
                <div className="block h-48 overflow-hidden bg-slate-900 shrink-0 relative">
                  <img
                    src={study.image}
                    alt={study.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                  
                  {/* Floating icon overlapping the image bottom border */}
                  <div className="absolute -bottom-5 left-6 w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-md z-10">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-50">
                      {icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-8 p-6 flex-grow flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-navy/10 text-[9px] font-mono font-bold text-brand-navy uppercase tracking-wider">
                        {study.category}
                      </span>
                    </div>

                    <Link href={`/portfolio/${study.slug}`} className="block">
                      <h3 className="text-lg font-bold text-brand-navy font-display group-hover:text-brand-orange transition-colors leading-snug">
                        {study.title}
                      </h3>
                    </Link>
                    
                    <p className="text-xs text-slate-500 leading-relaxed font-medium line-clamp-3">
                      {study.description}
                    </p>
                  </div>

                  {/* Key Metric Box */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/40">
                    <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">{study.metricLabel}</span>
                    <span className="text-xl font-bold font-mono text-brand-navy mt-0.5 block tracking-tight">
                      {study.metric}
                    </span>
                  </div>

                  {/* Technologies and Link */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-[9px] font-mono text-slate-500 font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={`/portfolio/${study.slug}`}
                      className="inline-flex items-center text-xs font-extrabold text-brand-orange group-hover:text-brand-pink transition-colors gap-1.5 select-none"
                    >
                      Read Case Study
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
