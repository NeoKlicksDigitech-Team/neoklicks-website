"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutHero() {
  // 3D Tilt Card States
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Sparkle particle parameters for the cursor tip click effect
  const sparks = [
    { dx: 25, dy: -25, delay: 0, size: 4 },
    { dx: -20, dy: -30, delay: 0.15, size: 3 },
    { dx: 30, dy: 10, delay: 0.05, size: 5 },
    { dx: -15, dy: 20, delay: 0.2, size: 4 },
    { dx: 10, dy: -35, delay: 0.1, size: 3 },
    { dx: 35, dy: -10, delay: 0.25, size: 4 },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coordinates relative to the center of the card
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    
    // Max tilt angles: 12 degrees max
    const rX = -(y / (height / 2)) * 12;
    const rY = (x / (width / 2)) * 12;
    
    setRotateX(rX);
    setRotateY(rY);
    setMouseX(e.clientX - rect.left);
    setMouseY(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section 
      className="relative py-20 md:py-28 overflow-hidden bg-slate-50 border-b border-slate-200/55"
      style={{
        backgroundImage: `
          radial-gradient(circle at 80% 20%, rgba(255, 107, 0, 0.04) 0%, transparent 50%),
          linear-gradient(rgba(7, 29, 73, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(7, 29, 73, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 48px 48px, 48px 48px",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headings & Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest text-brand-orange bg-brand-orange/10 border border-brand-orange/20 mx-auto lg:mx-0">
              ⚡ About NeoKlicks Digitech
            </div>
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.12] text-brand-navy tracking-tight">
              Built on Trust. <span className="gradient-text">Driven by Vision.</span>
            </h1>
            
            {/* Description */}
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium whitespace-pre-line">
              NeoKlicks Digitech was co-founded by Om Bhavsar and Nilesh Kharote with a simple mission — to help businesses grow online with honesty, quality, and real results. Every project we take on is a partnership, not just a service.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-navy hover:bg-brand-navy/95 text-white rounded-2xl font-bold shadow-md hover:shadow-lg transition-all duration-300 text-sm select-none hover:-translate-y-0.5"
              >
                Work With Us
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Logo Animation */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center mt-8 lg:mt-0 w-full overflow-visible">
            
            {/* Interactive Wrapper: scales down proportionally on mobile */}
            <div className="relative w-full max-w-[450px] scale-[0.72] min-[360px]:scale-[0.78] min-[400px]:scale-[0.85] sm:scale-[0.92] lg:scale-100 origin-center py-10">
              
              {/* --- LOGO PANEL WRAPPER (3D Tilt Card) --- */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                animate={{
                  rotateX: isHovered ? rotateX : 0,
                  rotateY: isHovered ? rotateY : 0,
                  transformPerspective: 1000,
                  boxShadow: isHovered 
                    ? "0 30px 60px -15px rgba(7, 29, 73, 0.15)"
                    : "0 25px 50px -12px rgba(7, 29, 73, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 120, damping: 15 }}
                className="w-full bg-white rounded-3xl border border-slate-200/80 overflow-hidden relative z-10 h-[340px] p-6 flex flex-col justify-between cursor-pointer select-none group"
              >
                
                {/* Dynamic Cursor Spotlight Effect */}
                <div 
                  className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"
                  style={{
                    background: `radial-gradient(circle 180px at ${mouseX}px ${mouseY}px, rgba(7, 29, 73, 0.04), transparent 70%)`
                  }}
                />

                {/* Panel Top Bar */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 ml-2">NEOKLICKS — BRAND PLATFORM</span>
                  </div>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 font-extrabold text-[8px] tracking-wider uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span> Active
                  </span>
                </div>

                {/* Animated Logo Area */}
                <div className="relative flex-grow flex items-center justify-center relative z-10">
                  
                  {/* Gentle Floating Group: Rings, Sparks & Logo float together in perfect alignment! */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    className="relative w-[240px] h-[80px] flex items-center justify-start"
                  >
                    
                    {/* Centered orbits container (aligned precisely with the circular logo icon at x=40, y=40) */}
                    <div className="absolute left-[40px] top-[40px] pointer-events-none -translate-x-1/2 -translate-y-1/2">
                      
                      {/* Pulse Wave 1 */}
                      <motion.div
                        animate={{ 
                          scale: isHovered ? [1, 2.4] : [1, 2.1], 
                          opacity: isHovered ? [0.7, 0] : [0.5, 0] 
                        }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
                        className="absolute -left-10 -top-10 w-20 h-20 rounded-full border border-brand-orange/30"
                      />
                      
                      {/* Pulse Wave 2 */}
                      <motion.div
                        animate={{ 
                          scale: isHovered ? [1, 1.9] : [1, 1.6], 
                          opacity: isHovered ? [0.5, 0] : [0.3, 0] 
                        }}
                        transition={{ repeat: Infinity, duration: 2.5, delay: 1.25, ease: "easeOut" }}
                        className="absolute -left-10 -top-10 w-20 h-20 rounded-full border border-brand-pink/30"
                      />

                      {/* Inner Dotted Circle (Clockwise) */}
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: isHovered ? 8 : 14, ease: "linear" }}
                        className="absolute -left-14 -top-14 w-28 h-28 rounded-full border-2 border-dashed border-brand-orange/30 shadow-[0_0_12px_rgba(255,107,0,0.05)]"
                      />
                      
                      {/* Outer Dotted Circle (Counter-Clockwise) */}
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: isHovered ? 12 : 20, ease: "linear" }}
                        className="absolute -left-18 -top-18 w-36 h-36 rounded-full border-2 border-dashed border-brand-pink/20 shadow-[0_0_15px_rgba(255,45,122,0.05)]"
                      />

                    </div>

                    {/* Tip of Mouse Cursor Sparkle Burst Emitter (at x=62px, y=28px) */}
                    <AnimatePresence>
                      {isHovered && sparks.map((spark, index) => (
                        <motion.div
                          key={index}
                          initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                          animate={{ 
                            x: spark.dx, 
                            y: spark.dy, 
                            scale: [0, 1.4, 0],
                            opacity: [1, 0.8, 0] 
                          }}
                          exit={{ opacity: 0 }}
                          transition={{ 
                            duration: 0.9, 
                            delay: spark.delay,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: 0.4
                          }}
                          style={{
                            width: spark.size,
                            height: spark.size,
                            boxShadow: `0 0 ${spark.size * 2}px var(--color-brand-orange)`
                          }}
                          className="absolute left-[62px] top-[28px] rounded-full bg-brand-orange pointer-events-none"
                        />
                      ))}
                    </AnimatePresence>

                    {/* Logo Image Wrapper to support Shine overlay and filter shadow */}
                    <motion.div 
                      className="relative overflow-hidden w-full h-full rounded-xl"
                      animate={{
                        filter: isHovered 
                          ? "drop-shadow(0 4px 12px rgba(7, 29, 73, 0.08))" 
                          : "drop-shadow(0 2px 4px rgba(7, 29, 73, 0.04))"
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    >
                      {/* Logo PNG Image */}
                      <img
                        src="/logo-transparent.png"
                        alt="NeoKlicks Digitech Logo"
                        className="w-full h-full object-contain pointer-events-none"
                        draggable={false}
                      />

                      {/* Continuous & Hover Metallic Shine Sweep */}
                      <motion.div
                        className="absolute inset-0 w-[40px] h-[200px] bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-25 pointer-events-none mix-blend-overlay"
                        style={{ top: '-60px' }}
                        animate={{
                          left: isHovered ? ['-100px', '280px'] : ['-100px', '320px']
                        }}
                        transition={{
                          repeat: Infinity,
                          repeatDelay: isHovered ? 1.5 : 4,
                          duration: isHovered ? 1.2 : 1.8,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                  </motion.div>

                </div>

                {/* Subtitle inside panel */}
                <div className="text-center bg-slate-50 border border-slate-100/80 rounded-xl py-2 px-3 relative z-10 transition-colors group-hover:bg-slate-100/50">
                  <p className="text-[10px] font-mono text-slate-500 leading-normal flex justify-center items-center gap-1.5 font-semibold">
                    <Sparkles className="h-3 w-3 text-brand-orange shrink-0 animate-pulse" /> Built on Trust. Driven by Vision.
                  </p>
                </div>

              </motion.div>

              {/* --- FLOATING CHIPS --- */}
              
              {/* Est. 2026 Badge (top left) */}
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  rotateZ: isHovered ? [0, -1, 0] : 0
                }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                className="absolute -left-6 -top-4 bg-white border border-slate-200/80 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 z-20"
              >
                <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-brand-orange font-mono text-[9px] font-extrabold shadow-inner">
                  ✓
                </div>
                <div className="space-y-0.5 text-left">
                  <p className="text-[9.5px] font-black text-brand-navy leading-none">Est. 2026</p>
                  <p className="text-[7.5px] text-slate-400 font-bold">Nashik, India</p>
                </div>
              </motion.div>

              {/* 98% Satisfied Badge (bottom right) */}
              <motion.div
                animate={{ 
                  y: [0, 5, 0],
                  rotateZ: isHovered ? [0, 1, 0] : 0
                }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -right-6 -bottom-4 bg-white border border-slate-200/80 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="w-5.5 h-5.5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-[10px] shadow-inner">
                  ♥
                </div>
                <div className="space-y-0.5 text-left">
                  <p className="text-[9.5px] font-black text-brand-navy leading-none">98% Satisfied</p>
                  <p className="text-[7.5px] text-slate-400 font-bold">Client happiness score</p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

