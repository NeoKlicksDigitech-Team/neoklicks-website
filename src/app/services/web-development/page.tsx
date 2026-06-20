"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Globe, Star, Zap, Phone, Mail, MapPin, 
  ArrowLeft, ArrowRight, Check, Sparkles, Layers, 
  ShieldCheck, Smartphone, BarChart3 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function WebDevelopmentServicePage() {
  const [activePalette, setActivePalette] = useState(0);
  const [pageSpeed, setPageSpeed] = useState(92);

  // Animate PageSpeed score upward on load
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setPageSpeed((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const palettes = [
    ["bg-blue-600", "bg-indigo-500", "bg-purple-500", "bg-slate-900"],
    ["bg-emerald-600", "bg-teal-500", "bg-cyan-500", "bg-slate-900"],
    ["bg-brand-orange", "bg-brand-pink", "bg-rose-500", "bg-slate-900"],
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <main className="flex-grow pt-16">
        
        {/* --- HERO SECTION --- */}
        <section 
          className="relative py-20 md:py-28 overflow-hidden bg-white border-b border-slate-200/55"
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
                  ⚡ Custom Web Development Services
                </div>
                
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.12] text-brand-navy tracking-tight">
                  Websites That <span className="gradient-text">Captivate,</span> Convert & Scale.
                </h1>
                
                {/* Description */}
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                  NeoKlicks Digitech crafts pixel-perfect, high-performance websites that attract customers and grow revenue. We blend creative UI/UX design, powerful development and smart SEO into a single unstoppable package.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <a
                    href="https://wa.me/919309952393?text=Hi%20NeoKlicks%20Digitech%20team,%20I'd%20like%20to%20book%20a%20free%20strategy%20session%20for%20my%20website%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-navy hover:bg-brand-navy/95 text-white rounded-2xl font-bold shadow-md hover:shadow-lg transition-all duration-300 text-sm select-none hover:-translate-y-0.5"
                  >
                    Start Your Project
                    <ArrowRight className="h-4.5 w-4.5" />
                  </a>

                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-brand-navy rounded-2xl font-bold shadow-xs transition-all duration-300 text-sm select-none hover:-translate-y-0.5"
                  >
                    All Services
                    <span className="text-slate-400">↗</span>
                  </Link>
                </div>

                {/* Metrics strip (Qualitative Startup Features) */}
                <div className="grid grid-cols-2 gap-6 pt-6 max-w-sm mx-auto lg:mx-0 border-t border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <p className="text-xs sm:text-sm font-black text-brand-navy leading-none">Modern UI/UX</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">Conversion-Focused</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <p className="text-xs sm:text-sm font-black text-brand-navy leading-none">Fast Delivery</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">Sub-2s Load Target</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Premium Mockup Graphic */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center mt-8 lg:mt-0 w-full overflow-visible">
                
                {/* Graphic Wrapper: has fixed max-width and relative positioning for absolute chips.
                    It scales down proportionally on mobile views so that all floating chips remain visible,
                    and shifts to the right on desktop to leave ample space for the text column. */}
                <div className="relative w-full max-w-[480px] scale-[0.66] min-[360px]:scale-[0.7] min-[400px]:scale-[0.76] min-[440px]:scale-[0.82] sm:scale-[0.9] lg:scale-100 origin-center py-8 lg:ml-auto">
                  
                  {/* --- BROWSER WRAPPER --- */}
                  <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden relative z-10">
                    
                    {/* Browser Top Bar */}
                    <div className="flex justify-between items-center bg-slate-100 px-4 py-3 border-b border-slate-200">
                      <div className="flex gap-1.5 shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/90"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/90"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/90"></span>
                      </div>
                      
                      <div className="h-5.5 w-44 bg-white rounded border border-slate-200/60 flex items-center justify-center text-[9px] font-mono text-slate-400">
                        neoklicks.com
                      </div>

                      <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                    </div>

                    {/* Browser Body / Page Design */}
                    <div className="p-3 bg-slate-50/50 space-y-3">
                      
                      {/* Header */}
                      <div className="flex justify-between items-center text-[8px] font-bold text-slate-600 px-1">
                        <span className="font-extrabold text-brand-navy text-[9px]">N NeoKlicks</span>
                        <div className="flex gap-3 text-[7px] text-slate-400 font-medium">
                          <span>Services</span>
                          <span>About</span>
                          <span>Blog</span>
                        </div>
                        <span className="px-2 py-0.5 bg-brand-navy text-white rounded text-[7px]">Get Started</span>
                      </div>

                      {/* Page Hero */}
                      <div className="bg-gradient-to-tr from-brand-navy to-indigo-950 p-4 rounded-xl text-white text-center space-y-2 relative overflow-hidden shadow-2xs">
                        <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />
                        <h4 className="text-[11px] sm:text-xs font-black tracking-tight leading-tight">
                          Websites That Convert & Scale
                        </h4>
                        <p className="text-[7.5px] text-slate-300 font-medium">
                          Premium web design for growing businesses
                        </p>
                        <div className="flex gap-2 justify-center pt-1 text-[7px] font-extrabold">
                          <span className="px-2 py-1 bg-brand-orange text-white rounded">Start Project</span>
                          <span className="px-2 py-1 border border-white/20 rounded">Our Work →</span>
                        </div>
                      </div>

                      {/* Service items inside browser */}
                      <div className="grid grid-cols-3 gap-2">
                        <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg text-center space-y-1">
                          <span className="text-[8px] font-black text-blue-600 block">Web Design</span>
                          <span className="text-[6.5px] text-slate-400 font-medium block leading-none">Pixel-perfect UI</span>
                        </div>

                        <div className="p-2 bg-orange-50 border border-orange-100 rounded-lg text-center space-y-1">
                          <span className="text-[8px] font-black text-brand-orange block">Development</span>
                          <span className="text-[6.5px] text-slate-400 font-medium block leading-none">Fast, clean code</span>
                        </div>

                        <div className="p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-center space-y-1">
                          <span className="text-[8px] font-black text-emerald-600 block">SEO Services</span>
                          <span className="text-[6.5px] text-slate-400 font-medium block leading-none">Rank on Google</span>
                        </div>
                      </div>

                      {/* Inside Metrics Strip (Qualitative) */}
                      <div className="bg-white border border-slate-200/60 p-2 rounded-xl grid grid-cols-3 gap-1 text-center select-none shadow-4xs">
                        <div className="space-y-0.5">
                          <p className="text-[9px] font-black text-brand-navy leading-none">100%</p>
                          <p className="text-[5.5px] text-slate-400 font-bold uppercase tracking-wide leading-none">Mobile Ready</p>
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[9px] font-black text-brand-navy leading-none">SEO</p>
                          <p className="text-[5.5px] text-slate-400 font-bold uppercase tracking-wide leading-none">Optimised</p>
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[9px] font-black text-brand-navy leading-none">5+ Exp</p>
                          <p className="text-[5.5px] text-slate-400 font-bold uppercase tracking-wide leading-none">Years Exp.</p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* --- FLOATING CHIPS --- */}
                  
                  {/* PageSpeed: 100 (top left) */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" as const }}
                    className="absolute -left-6 sm:-left-12 lg:-left-10 top-10 bg-white border border-slate-200/80 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-extrabold text-[10px]">
                      ✓
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-[10px] font-black text-brand-navy leading-none">PageSpeed: {pageSpeed}</p>
                      <p className="text-[8px] text-slate-400 font-bold">Core Web Vitals ✓</p>
                    </div>
                  </motion.div>

                  {/* Color Palette (top right) */}
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" as const }}
                    className="absolute -right-6 sm:-right-10 lg:-right-10 -top-8 bg-white border border-slate-200/80 p-3 rounded-2xl shadow-xl space-y-2 z-20 w-28 text-left"
                  >
                    <p className="text-[8.5px] font-bold text-slate-400 uppercase tracking-widest leading-none">Color Palette</p>
                    <div className="flex gap-1.5">
                      {palettes[activePalette].map((color, idx) => (
                        <span key={idx} className={`w-4 h-4 rounded-full ${color} shadow-4xs`}></span>
                      ))}
                    </div>
                    <button 
                      onClick={() => setActivePalette((prev) => (prev + 1) % palettes.length)}
                      className="text-[7.5px] font-extrabold text-brand-orange hover:text-brand-pink block border border-slate-100 rounded px-1 text-center w-full bg-slate-50"
                    >
                      Switch Scheme
                    </button>
                  </motion.div>

                  {/* Typography (right top offset) */}
                  <motion.div
                    animate={{ x: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" as const }}
                    className="absolute -right-8 sm:-right-14 lg:-right-12 top-20 bg-white border border-slate-200/80 p-2.5 rounded-xl shadow-lg z-20 w-24 text-left space-y-1"
                  >
                    <p className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Typography</p>
                    <p className="text-[10px] font-black text-brand-navy font-display leading-none">Poppins</p>
                    <div className="h-0.5 w-full bg-slate-100 rounded"></div>
                    <p className="text-[8px] font-medium text-slate-500 font-sans leading-none">Poppins / Inter</p>
                  </motion.div>

                  {/* Layers card (right middle offset) */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" as const }}
                    className="absolute -right-6 sm:-right-10 lg:-right-10 top-40 bg-white border border-slate-200/80 p-2 rounded-xl shadow-lg z-20 w-20 text-left space-y-1.5"
                  >
                    <p className="text-[7px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Layers className="h-2.5 w-2.5 text-blue-500" /> Layers
                    </p>
                    <div className="space-y-1">
                      <div className="h-2 w-full bg-blue-100 rounded-xs flex items-center pl-1 text-[5px] text-blue-600 font-extrabold">Hero Section</div>
                      <div className="h-2 w-full bg-slate-100 rounded-xs flex items-center pl-1 text-[5px] text-slate-400">Services Block</div>
                      <div className="h-2 w-full bg-slate-100 rounded-xs flex items-center pl-1 text-[5px] text-slate-400">Footer Layer</div>
                    </div>
                  </motion.div>

                  {/* 100% Responsive (right bottom offset) */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" as const }}
                    className="absolute -right-8 sm:-right-14 lg:-right-12 top-60 bg-white border border-slate-200/80 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 z-20"
                  >
                    <div className="w-6 h-6 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                      <Smartphone className="h-3.5 w-3.5 text-indigo-500" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <p className="text-[9px] font-black text-brand-navy leading-none">100% Responsive</p>
                      <p className="text-[7.5px] text-slate-400 font-bold">All devices</p>
                    </div>
                  </motion.div>

                  {/* +340% Enquiries (bottom left offset) */}
                  <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" as const }}
                    className="absolute -left-6 sm:-left-10 lg:-left-10 bottom-4 bg-white border border-slate-200/80 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 z-20"
                  >
                    <div className="w-6 h-6 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
                      <BarChart3 className="h-3.5 w-3.5 text-brand-orange" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <p className="text-[9px] font-black text-brand-navy leading-none">+340% Enquiries</p>
                      <p className="text-[7.5px] text-slate-400 font-bold">Avg client result</p>
                    </div>
                  </motion.div>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* --- BOTTOM SOLID NAVY COUNTER BAR --- */}
        <section className="w-full bg-brand-navy text-white py-12 relative z-20 border-b border-slate-800 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold font-mono text-white">5+</p>
                <p className="text-[9px] sm:text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                  Years of Expertise
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold font-mono text-brand-pink">98%</p>
                <p className="text-[9px] sm:text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                  Client Satisfaction
                </p>
              </div>

              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold font-mono text-white">100/100</p>
                <p className="text-[9px] sm:text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                  Avg PageSpeed Score
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* --- PROCESS TIMELINE SECTION --- */}
        <Process />

        {/* --- CALL TO ACTION SECTION (Image 3) --- */}
        <section 
          id="contact" 
          className="py-24 bg-brand-navy text-white relative overflow-hidden border-t border-slate-800"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(255, 107, 0, 0.08) 0%, transparent 60%),
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 45px 45px, 45px 45px",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest text-brand-pink bg-brand-pink/15 border border-brand-pink/20">
                🚀 Ready to get a website that works?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
                Let's Build Your <span className="gradient-text">Digital Presence</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
                Book a free 30-minute strategy session. We'll audit your current digital presence, map your ideal website architecture and give you a transparent, fixed-price quote — no obligation.
              </p>
            </div>

            {/* Info Grid (3 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              
              {/* Call Card */}
              <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl flex items-center gap-4 group transition-colors hover:bg-white/[0.04] min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-brand-orange group-hover:scale-105 transition-transform duration-300">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-0.5 text-left min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Call Us</p>
                  <a href="tel:+919309952393" className="text-xs sm:text-sm font-extrabold text-white hover:text-brand-orange transition-colors break-all sm:break-normal block">
                    +91 93099 52393
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl flex items-center gap-4 group transition-colors hover:bg-white/[0.04] min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-brand-pink group-hover:scale-105 transition-transform duration-300">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-0.5 text-left min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Email Us</p>
                  <a href="mailto:team@neoklicksdigitech.com" className="text-xs sm:text-sm font-extrabold text-white hover:text-brand-orange transition-colors break-all sm:break-normal block">
                    team@neoklicksdigitech.com
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-6 bg-white/[0.02] border border-white/[0.06] rounded-2xl flex items-center gap-4 group transition-colors hover:bg-white/[0.04] min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-brand-orange group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-0.5 text-left min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Located In</p>
                  <p className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                    Nashik, Maharashtra
                  </p>
                </div>
              </div>

            </div>

            {/* Buttons Area */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a
                href="https://wa.me/919309952393?text=Hi%20NeoKlicks%20Digitech%20team,%20I'd%20like%20to%20book%20a%20free%20strategy%20session%20for%20my%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-slate-50 hover:bg-white text-brand-navy rounded-full font-extrabold text-sm transition-all duration-300 hover:shadow-lg shadow-md select-none hover:-translate-y-0.5"
              >
                <Sparkles className="h-4.5 w-4.5 text-brand-orange" />
                Get a Free Strategy Session
                <ArrowRight className="h-4.5 w-4.5" />
              </a>

              <a
                href="tel:+919309952393"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 border-2 border-white/20 hover:border-white/40 text-white rounded-full font-extrabold text-sm transition-all duration-300 select-none hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" />
                Call Us Now
              </a>
            </div>

            {/* Trust Pills strip (Startup Agency Appropriate) */}
            <div className="flex flex-wrap gap-3 justify-center items-center mt-12 pt-8 border-t border-white/[0.05] max-w-3xl mx-auto">
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider text-slate-400 bg-white/[0.02] border border-white/[0.05]">
                ★ Direct Founder Communication
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider text-slate-400 bg-white/[0.02] border border-white/[0.05]">
                🛡 Fully Tailored Codebases
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold font-mono uppercase tracking-wider text-slate-400 bg-white/[0.02] border border-white/[0.05]">
                ⏱ Milestone-Based Delivery
              </span>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
