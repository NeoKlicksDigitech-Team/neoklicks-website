"use client";

import React from "react";
import { ClipboardList, Lightbulb, LayoutGrid, Palette, Code, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColorClass: string;
}

interface ProcessProps {
  steps?: ProcessStep[];
  title?: React.ReactNode;
  subtitle?: string;
  eyebrow?: string;
}

const row1Steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Research",
    description: "We deep-dive into your business, audience, competitors and goals to build a solid strategic foundation before anything is designed.",
    icon: <ClipboardList className="h-5 w-5" />,
    iconColorClass: "text-brand-pink bg-brand-pink/5 border border-brand-pink/15",
  },
  {
    number: "02",
    title: "Strategy & Architecture",
    description: "Site map, content strategy and user journey mapping — all planned before a single pixel is drawn.",
    icon: <Lightbulb className="h-5 w-5" />,
    iconColorClass: "text-blue-500 bg-blue-500/5 border border-blue-500/15",
  },
  {
    number: "03",
    title: "Wireframe & Prototype",
    description: "Low-to-high fidelity wireframes validated with real feedback before any visual design begins.",
    icon: <LayoutGrid className="h-5 w-5" />,
    iconColorClass: "text-emerald-500 bg-emerald-500/5 border border-emerald-500/15",
  },
];

const row2Steps: ProcessStep[] = [
  {
    number: "04",
    title: "UI Design & Branding",
    description: "Stunning visual designs crafted with your brand palette, typography and imagery — delivered in 48 hours.",
    icon: <Palette className="h-5 w-5" />,
    iconColorClass: "text-purple-500 bg-purple-500/5 border border-purple-500/15",
  },
  {
    number: "05",
    title: "Development & QA",
    description: "Clean, responsive code with rigorous cross-browser and device testing to ensure a flawless experience at launch.",
    icon: <Code className="h-5 w-5" />,
    iconColorClass: "text-teal-500 bg-teal-500/5 border border-teal-500/15",
  },
  {
    number: "06",
    title: "Launch & Optimise",
    description: "Smooth go-live, Google indexing, analytics setup and ongoing CRO to keep growing your traffic and conversions.",
    icon: <Rocket className="h-5 w-5" />,
    iconColorClass: "text-brand-orange bg-brand-orange/5 border border-brand-orange/15",
  },
];

export default function Process({ steps, title, subtitle, eyebrow }: ProcessProps = {}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
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

  const row1 = steps && steps.length >= 3 ? steps.slice(0, 3) : row1Steps;
  const row2 = steps && steps.length >= 6 ? steps.slice(3, 6) : row2Steps;

  const displayTitle = title || (
    <>
      Our 6-Step Web Design <span className="gradient-text">Process</span>
    </>
  );
  const displaySubtitle = subtitle || "A proven framework that takes you from discovery to a live, high-performing website — systematically and transparently at every stage.";
  const displayEyebrow = eyebrow || "⚙ How We Work";

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20">
            {displayEyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
            {displayTitle}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {displaySubtitle}
          </p>
        </div>

        {/* Timeline Grid (Two Rows) */}
        <div className="space-y-16 md:space-y-24">
          
          {/* Row 1 (Steps 1-3) */}
          <div className="relative">
            {/* Dashed connector line */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 border-t border-dashed border-slate-300 z-0" />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
            >
              {row1.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center space-y-5 group"
                >
                  {/* Outer circle */}
                  <div className="relative w-16 h-16 rounded-full bg-white border border-slate-200/60 shadow-xs flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-brand-orange/30 group-hover:shadow-md">
                    {/* Inner circle with icon */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center ${step.iconColorClass}`}>
                      {step.icon}
                    </div>
                    {/* Number Badge */}
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-navy text-white text-[10px] font-extrabold font-mono flex items-center justify-center border-2 border-white shadow-2xs">
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="space-y-2 max-w-sm">
                    <h3 className="text-base font-extrabold text-brand-navy font-display leading-tight group-hover:text-brand-orange transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-[280px] mx-auto font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 (Steps 4-6) */}
          <div className="relative">
            {/* Dashed connector line */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 border-t border-dashed border-slate-300 z-0" />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
            >
              {row2.map((step) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center space-y-5 group"
                >
                  {/* Outer circle */}
                  <div className="relative w-16 h-16 rounded-full bg-white border border-slate-200/60 shadow-xs flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-brand-orange/30 group-hover:shadow-md">
                    {/* Inner circle with icon */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center ${step.iconColorClass}`}>
                      {step.icon}
                    </div>
                    {/* Number Badge */}
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-brand-navy text-white text-[10px] font-extrabold font-mono flex items-center justify-center border-2 border-white shadow-2xs">
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="space-y-2 max-w-sm">
                    <h3 className="text-base font-extrabold text-brand-navy font-display leading-tight group-hover:text-brand-orange transition-colors duration-200">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-[280px] mx-auto font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

