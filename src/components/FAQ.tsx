"use client";

import React from "react";
import { Clock, Wrench, Search, RefreshCw, Headphones } from "lucide-react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ReactNode;
  iconBgClass: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How long does a website take to build?",
    answer: "A standard business website takes 2–4 weeks. Complex portals and e-commerce stores typically take 6–10 weeks depending on scope and features required.",
    icon: <Clock className="h-5 w-5 text-blue-500" />,
    iconBgClass: "bg-blue-50 border border-blue-100",
  },
  {
    question: "What does a website cost in Nashik?",
    answer: "Prices start from ₹15,000 for basic sites and scale up based on pages, features and integrations. We offer transparent, fixed-price quotes upfront.",
    icon: <span className="text-sm font-extrabold text-amber-500 font-mono select-none">₹</span>,
    iconBgClass: "bg-amber-50 border border-amber-100",
  },
  {
    question: "Do you offer website maintenance?",
    answer: "Yes — we offer flexible monthly maintenance plans covering updates, security patches, backups and content changes so your site stays fresh and secure.",
    icon: <Wrench className="h-5 w-5 text-emerald-500" />,
    iconBgClass: "bg-emerald-50 border border-emerald-100",
  },
  {
    question: "Will my website rank on Google?",
    answer: "Every website we build has on-page SEO baked in — semantic markup, meta tags, schema, fast load times and mobile optimisation — so you're set up to rank from day one.",
    icon: <Search className="h-5 w-5 text-purple-500" />,
    iconBgClass: "bg-purple-50 border border-purple-100",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Absolutely. We audit your current site for UX, speed and SEO issues, then redesign it to modern standards without losing your existing Google rankings.",
    icon: <RefreshCw className="h-5 w-5 text-red-500" />,
    iconBgClass: "bg-red-50 border border-red-100",
  },
  {
    question: "What support do I get after launch?",
    answer: "All projects include 30 days of free post-launch support. After that, our affordable monthly retainer covers everything from small tweaks to major feature additions.",
    icon: <Headphones className="h-5 w-5 text-sky-500" />,
    iconBgClass: "bg-sky-50 border border-sky-100",
  },
];

export default function FAQ() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20">
            ? FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
            Common Questions <span className="gradient-text">Answered</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Everything you need to know before partnering with us for your website project.
          </p>
        </div>

        {/* FAQ Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                boxShadow: "0 10px 30px -10px rgba(7, 29, 73, 0.08)",
                borderColor: "rgba(7, 29, 73, 0.12)"
              }}
              className="p-6 sm:p-8 bg-white border border-slate-200/60 rounded-3xl transition-all duration-300 flex gap-4 items-start group"
            >
              {/* Icon Container */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${item.iconBgClass}`}>
                {item.icon}
              </div>

              {/* Text Block */}
              <div className="space-y-2">
                <h3 className="text-sm sm:text-base font-extrabold text-brand-navy font-display leading-snug group-hover:text-brand-orange transition-colors duration-200">
                  {item.question}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                  {item.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
