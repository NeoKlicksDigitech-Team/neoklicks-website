"use client";

import React from "react";
import { Layout, Zap, Smartphone, Search, Lock, LifeBuoy, Clock, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Premium UI/UX Design",
    description: "Crafted by designers who obsess over typography, colour theory and user psychology — every interaction is intentional.",
    icon: <Layout className="h-5 w-5 text-brand-orange" />,
  },
  {
    title: "Lightning-Fast Load Speed",
    description: "Optimised code, compressed assets and CDN delivery ensure sub-2-second load times and a perfect PageSpeed score.",
    icon: <Zap className="h-5 w-5 text-brand-pink" />,
  },
  {
    title: "100% Mobile Responsive",
    description: "Every element is rigorously tested across all devices, browsers and screen sizes before your site ever goes live.",
    icon: <Smartphone className="h-5 w-5 text-brand-orange" />,
  },
  {
    title: "SEO-Ready Architecture",
    description: "Semantic HTML5, schema markup, Core Web Vitals and meta strategy built into every website from day one.",
    icon: <Search className="h-5 w-5 text-brand-pink" />,
  },
  {
    title: "Secure by Default",
    description: "SSL, OWASP-compliant code and encrypted forms protect your users and your reputation at every touchpoint.",
    icon: <Lock className="h-5 w-5 text-brand-orange" />,
  },
  {
    title: "Dedicated Support",
    description: "Post-launch maintenance, updates and a responsive team available whenever you need fixes, improvements or new features.",
    icon: <LifeBuoy className="h-5 w-5 text-brand-pink" />,
  },
  {
    title: "On-Time Delivery",
    description: "Structured sprints and clear milestones mean your website launches on schedule, every single time — no surprises.",
    icon: <Clock className="h-5 w-5 text-brand-orange" />,
  },
  {
    title: "Conversion Optimised",
    description: "Every layout decision is backed by data — CTA placement, colour psychology and user flow analysis to maximise leads.",
    icon: <TrendingUp className="h-5 w-5 text-brand-pink" />,
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section 
      className="py-24 bg-brand-navy text-white relative overflow-hidden border-t border-b border-slate-800"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(255, 107, 0, 0.08) 0%, transparent 60%),
          radial-gradient(circle at 10% 80%, rgba(255, 45, 122, 0.06) 0%, transparent 50%),
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 45px 45px, 45px 45px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20">
            ★ Why NeoKlicks Digitech
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            Why Nashik Businesses <span className="gradient-text">Trust Us</span> With Their Brand
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We combine world-class design talent with cutting-edge development so your website isn't just beautiful — it performs, converts and grows your business.
          </p>
        </div>

        {/* Feature Cards Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                backgroundColor: "rgba(255, 255, 255, 0.035)",
                borderColor: idx % 2 === 0 ? "rgba(255, 107, 0, 0.3)" : "rgba(255, 45, 122, 0.3)",
                boxShadow: "0 10px 30px -10px rgba(7, 29, 73, 0.5), 0 0 20px rgba(255, 107, 0, 0.05)"
              }}
              className="group p-6 rounded-2xl border border-white/[0.06] bg-white/[0.015] backdrop-blur-xs transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/[0.08] group-hover:border-white/[0.15]">
                  <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-base font-extrabold font-display leading-tight text-white group-hover:text-brand-orange transition-colors duration-200">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

