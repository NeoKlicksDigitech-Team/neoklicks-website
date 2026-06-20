"use client";

import React from "react";
import Link from "next/link";
import { Globe, Cpu, ShoppingBag, Search, TrendingUp, Palette, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceData {
  title: string;
  slug: string;
  description: string;
  iconName: "Globe" | "Cpu" | "ShoppingBag" | "Search" | "TrendingUp" | "Palette" | "ShieldCheck";
  colorClass: string;
}

const servicesData: ServiceData[] = [
  {
    title: "Web Development",
    slug: "web-development",
    description: "Bespoke website design and development built for speed, security, and mobile responsiveness to attract and retain customers.",
    iconName: "Globe",
    colorClass: "text-brand-orange bg-brand-orange/5 border-brand-orange/10",
  },
  {
    title: "Business Automation & Systems",
    slug: "ai-ml-solutions",
    description: "Workflow automations, customer chatbots, and data integrations built to streamline your operations and save hours of manual labor.",
    iconName: "Cpu",
    colorClass: "text-brand-pink bg-brand-pink/5 border-brand-pink/10",
  },
  {
    title: "E-Commerce Storefronts",
    slug: "e-commerce",
    description: "High-converting online storefronts and checkout funnels optimized to increase sales, synchronize inventory, and accept secure payments.",
    iconName: "ShoppingBag",
    colorClass: "text-brand-orange bg-brand-orange/5 border-brand-orange/10",
  },
  {
    title: "Search Engine Optimization (SEO)",
    slug: "seo",
    description: "Search engine optimization campaigns that improve your Google rankings and drive steady, organic traffic to your website.",
    iconName: "Search",
    colorClass: "text-blue-500 bg-blue-500/5 border-blue-500/10",
  },
  {
    title: "Digital Marketing & Ads",
    slug: "digital-marketing",
    description: "High-ROI paid advertising campaigns on Google, Meta, and social networks designed to attract qualified leads and scale sales.",
    iconName: "TrendingUp",
    colorClass: "text-emerald-500 bg-emerald-500/5 border-emerald-500/10",
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "Beautiful, modern, and intuitive visual layouts that capture attention and guide customers to conversion actions.",
    iconName: "Palette",
    colorClass: "text-purple-500 bg-purple-500/5 border-purple-500/10",
  },
  {
    title: "Custom Software & Dashboards",
    slug: "custom-software",
    description: "Tailored internal operations dashboards, customer portals, and databases built to solve your unique business challenges.",
    iconName: "Cpu",
    colorClass: "text-indigo-500 bg-indigo-500/5 border-indigo-500/10",
  },
  {
    title: "Maintenance & Support",
    slug: "maintenance-support",
    description: "24/7 uptime monitoring, security patches, regular backups, and support to keep your site operating at peak performance.",
    iconName: "ShieldCheck",
    colorClass: "text-teal-500 bg-teal-500/5 border-teal-500/10",
  },
];

const iconMap = {
  Globe: Globe,
  Cpu: Cpu,
  ShoppingBag: ShoppingBag,
  Search: Search,
  TrendingUp: TrendingUp,
  Palette: Palette,
  ShieldCheck: ShieldCheck,
};

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="services" className="py-24 bg-slate-50 border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20">
            ★ What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
            Web Design & Tech Services We Deliver
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            From crisp landing pages to enterprise portals — every website is built with precision, performance and purpose, tailored to attract and convert your ideal customers.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.div
                key={service.slug}
                variants={cardVariants}
                className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden relative"
              >
                {/* Image Header */}
                <div className="relative h-44 overflow-hidden bg-slate-900 shrink-0">
                  <img
                    src={`/images/services/${service.slug}.png`}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
                  
                  {/* Floating icon overlapping the image bottom border */}
                  <div className={`absolute -bottom-5 left-6 w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-md z-10 transition-transform duration-300 group-hover:scale-105`}>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${service.colorClass}`}>
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="pt-8 p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-extrabold text-brand-navy font-display group-hover:text-brand-orange transition-colors duration-200 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-xs font-extrabold text-brand-orange group-hover:text-brand-pink transition-colors gap-1 select-none"
                    >
                      Explore
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

