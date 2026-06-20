"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Palette, Terminal, ShieldCheck, Rocket } from "lucide-react";

interface Stage {
  id: number;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const STAGES: Stage[] = [
  {
    id: 0,
    title: "Discover & Plan",
    desc: "Mapping project goals, target audience, technical architecture, and a structured milestone-based delivery roadmap.",
    icon: Search,
  },
  {
    id: 1,
    title: "UI/UX Design",
    desc: "Designing responsive, bespoke high-fidelity wireframes and visual prototypes focused on conversion psychology and branding.",
    icon: Palette,
  },
  {
    id: 2,
    title: "Software Development",
    desc: "Coding dynamic frontend page layers and secure custom database endpoints using clean, performance-optimized React/Next.js.",
    icon: Terminal,
  },
  {
    id: 3,
    title: "Testing & QA Check",
    desc: "Auditing page load speed, mobile scaling, cross-browser compatibility, and routing setups to ensure a flawless launch.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Go Live & Support",
    desc: "Deploying production builds to fast live servers, completing Google indexing setups, and starting ongoing maintenance support.",
    icon: Rocket,
  },
];

export default function WorkflowAnimation() {
  const [activeStage, setActiveStage] = useState(0);

  // Auto-play horizontal stages every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-[500px] bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-6 sm:p-8 relative select-none">
      
      {/* Decorative Blur Ambient Backgrounds */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-brand-pink/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="space-y-6 relative z-10">
        
        {/* Title Block */}
        <div className="space-y-1">
          <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-brand-orange">
            ★ Our Delivery Pipeline
          </span>
          <h4 className="text-base font-extrabold text-brand-navy font-display leading-tight">
            How We Build Systems
          </h4>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="relative py-4 my-2 flex items-center justify-between">
          
          {/* Background Dashed Line */}
          <div className="absolute left-[6%] right-[6%] top-[50%] -translate-y-1/2 h-0.5 border-t border-dashed border-slate-200 z-0" />
          
          {/* Animated Growing Active Line */}
          <motion.div
            className="absolute left-[6%] top-[50%] -translate-y-1/2 h-0.5 bg-gradient-to-r from-brand-orange to-brand-pink origin-left z-0"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: activeStage / (STAGES.length - 1) }}
            transition={{ duration: 0.4, ease: "easeInOut" as const }}
            style={{ width: "88%" }}
          />

          {STAGES.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            const isCompleted = stage.id < activeStage;
            
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className="relative z-10 group focus:outline-none"
              >
                {/* Circle Badge */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 relative ${
                    isActive 
                      ? "bg-white border-brand-orange shadow-md text-brand-orange" 
                      : isCompleted
                        ? "bg-white border-brand-pink text-brand-pink shadow-2xs"
                        : "bg-slate-50 border-slate-200 text-slate-400 group-hover:bg-slate-100 group-hover:border-slate-300"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5" />
                  
                  {/* Glowing border loop on active node */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlowRing"
                      className="absolute inset-0 rounded-full border border-brand-orange/30 pointer-events-none"
                      initial={false}
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}
                </div>

                {/* Horizontal Tooltip Step Counter */}
                <span className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-extrabold font-mono tracking-wider transition-colors duration-300 ${
                  isActive ? "text-brand-orange" : "text-slate-400"
                }`}>
                  0{stage.id + 1}
                </span>
              </button>
            );
          })}
        </div>

        {/* Center Details Box for active stage */}
        <div className="min-h-[125px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" as const }}
              className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5 text-center sm:text-left space-y-2"
            >
              <span className="inline-block text-[9px] font-extrabold font-mono uppercase tracking-wider text-brand-pink bg-brand-pink/5 px-2.5 py-1 rounded-full border border-brand-pink/10 select-none">
                Stage {activeStage + 1} of {STAGES.length}
              </span>
              <h4 className="text-sm font-extrabold text-brand-navy font-display">
                {STAGES[activeStage].title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {STAGES[activeStage].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
