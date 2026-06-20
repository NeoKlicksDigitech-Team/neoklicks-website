"use client";

import React, { useState, useEffect } from "react";
import { Eye, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [activeFounderIndex, setActiveFounderIndex] = useState(0);

  const founders = [
    {
      id: 1,
      name: "Om Bhavsar",
      role: "Developer & AI Engineer",
      image: "/images/founder-om.jpg",
      quote: "We started NeoKlicks with a simple belief — every business, big or small, deserves a digital presence that actually brings in customers, not just looks good.",
      bio1: "NeoKlicks was co-founded by Om Bhavsar, a developer and AI engineer with a passion for helping brands grow online.",
      bio2: "With hands-on experience across full-stack development, custom APIs, and AI-driven systems, Om co-founded NeoKlicks to give local and regional businesses the same digital edge as larger competitors."
    },
    {
      id: 2,
      name: "Nilesh Kharote",
      role: "SEO Specialist",
      image: "/images/founder-nilesh.jpg",
      quote: "Our goal has always been simple — combine technology and strategy to deliver real, measurable growth for every business we work with.",
      bio1: "NeoKlicks was co-founded by Nilesh Kharote, an SEO specialist with a passion for helping brands grow online.",
      bio2: "With expertise in technical SEO audits, organic search visibility, and organic traffic optimization, Nilesh co-founded NeoKlicks to combine the right technology with smart execution to help clients achieve sustainable, long-term growth."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFounderIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white overflow-hidden border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: Agency Bio */}
        <div className="max-w-4xl space-y-6 mb-16 lg:mb-20 text-left">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display tracking-tight">
            Your Global Technology Partner based in Nashik, India.
          </h3>
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            <p>
              NeoKlicks Digitech is a digital technology agency co-founded by Om Bhavsar and Nilesh Kharote. We specialize in launching premium responsive websites, full-stack custom dashboards, and technical SEO optimization campaigns. 
            </p>
            <p>
              Unlike marketing teams that throw around AI buzzwords, we write and deploy custom code and engineer smart organic search setups. Whether building custom Next.js web applications, integrating LLM workflows, or tuning keyword rankings, our work is built directly for growth. We maintain close 1-on-1 contact with our clients, ensuring transparency.
            </p>
          </div>
        </div>

        {/* Section Separator */}
        <div className="relative w-full py-2 flex items-center justify-center mb-16 lg:mb-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200/70"></div>
          </div>
          <span className="relative px-4 bg-white text-slate-350 text-xs font-mono font-bold tracking-widest uppercase">
            MEET OUR LEADERSHIP
          </span>
        </div>

        {/* FOUNDER CAROUSEL SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Image, quote card, decorative shapes (col-span-5) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center w-full overflow-visible">
            
            {/* Soft decorative background shape */}
            <div className="absolute inset-4 -rotate-3 bg-gradient-to-tr from-slate-100 to-indigo-50/50 rounded-[2.5rem] border border-slate-200/40 -z-10 shadow-sm" />
            
            {/* Subtle decorative dot grid on top left */}
            <svg 
              className="absolute -left-3 -top-6 w-16 h-20 text-indigo-100/80 pointer-events-none" 
              fill="currentColor" 
              viewBox="0 0 40 50"
            >
              <circle cx="5" cy="5" r="1.5" />
              <circle cx="15" cy="5" r="1.5" />
              <circle cx="25" cy="5" r="1.5" />
              <circle cx="35" cy="5" r="1.5" />
              
              <circle cx="5" cy="15" r="1.5" />
              <circle cx="15" cy="15" r="1.5" />
              <circle cx="25" cy="15" r="1.5" />
              <circle cx="35" cy="15" r="1.5" />
              
              <circle cx="5" cy="25" r="1.5" />
              <circle cx="15" cy="25" r="1.5" />
              <circle cx="25" cy="25" r="1.5" />
              <circle cx="35" cy="25" r="1.5" />

              <circle cx="5" cy="35" r="1.5" />
              <circle cx="15" cy="35" r="1.5" />
              <circle cx="25" cy="35" r="1.5" />
              <circle cx="35" cy="35" r="1.5" />
            </svg>

            {/* Decorative wavy lines on the right behind image */}
            <svg 
              className="absolute -right-8 top-12 w-32 h-64 text-indigo-50/60 pointer-events-none -z-10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              viewBox="0 0 100 200"
            >
              <path d="M 0,20 C 40,40 50,120 100,160" />
              <path d="M 10,10 C 50,30 60,110 110,150" opacity="0.7" />
              <path d="M 20,0 C 60,20 70,100 120,140" opacity="0.4" />
            </svg>

            {/* Overlapping grid rows cells to achieve responsive height crossfade */}
            <div className="grid grid-cols-1 grid-rows-1 relative aspect-[4/5] w-full max-w-[380px] mx-auto overflow-visible z-10">
              {founders.map((founder, index) => {
                const isActive = index === activeFounderIndex;
                return (
                  <motion.div
                    key={founder.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    style={{ pointerEvents: isActive ? "auto" : "none" }}
                    className="col-start-1 row-start-1 w-full h-full flex flex-col justify-end relative"
                  >
                    {/* The headshot photo */}
                    <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-slate-50 border border-slate-200/80 shadow-md relative group">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103"
                      />
                    </div>
                    
                    {/* Overlapping Quote Card */}
                    <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white border border-slate-200/60 shadow-xl rounded-3xl p-5 max-w-[280px] z-20">
                      <div className="flex gap-2">
                        <span className="text-3xl text-brand-orange leading-none font-serif opacity-30 shrink-0 select-none">“</span>
                        <div className="space-y-3">
                          <p className="text-[11px] text-slate-500 leading-relaxed font-semibold italic text-left">
                            {founder.quote}
                          </p>
                          <p className="font-signature text-2.5xl text-brand-navy font-semibold tracking-wide text-right">
                            {founder.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Founder bio details & indicator dots (col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between min-h-[460px] pl-0 lg:pl-8 text-left">
            
            {/* Crossfading Slide Text Content */}
            <div className="grid grid-cols-1 grid-rows-1 relative">
              {founders.map((founder, index) => {
                const isActive = index === activeFounderIndex;
                return (
                  <motion.div
                    key={founder.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    style={{ pointerEvents: isActive ? "auto" : "none" }}
                    className="col-start-1 row-start-1 space-y-5 flex flex-col justify-start"
                  >
                    <div className="space-y-2">
                      <span className="text-xs font-mono uppercase tracking-widest text-brand-pink font-bold">
                        ABOUT OUR FOUNDER
                      </span>
                      <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display leading-[1.15] tracking-tight">
                        The Mind Behind NeoKlicks Digitech <br />
                        <span className="text-brand-orange">{founder.name}</span>
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-brand-orange to-brand-pink rounded-full mt-3"></div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                        {founder.bio1}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {founder.bio2}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pagination Indicators under texts */}
            <div className="flex justify-center lg:justify-start gap-2.5 mt-8 lg:mt-6 z-10">
              {founders.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFounderIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    index === activeFounderIndex 
                      ? "bg-brand-orange w-8 shadow-sm shadow-brand-orange/30" 
                      : "bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Thin horizontal divider */}
            <div className="w-full h-[1px] bg-slate-200/80 my-8"></div>

            {/* Vision / Mission / Approach row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 text-left">
              {/* Vision */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shadow-inner shrink-0">
                    <Eye className="w-4.5 h-4.5" />
                  </div>
                  <h5 className="text-xs font-bold text-brand-navy uppercase tracking-wider font-display">Vision</h5>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                  To be the most trusted growth partner for ambitious local and regional businesses.
                </p>
              </div>

              {/* Mission */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-brand-pink/10 flex items-center justify-center text-brand-pink shadow-inner shrink-0">
                    <Rocket className="w-4.5 h-4.5" />
                  </div>
                  <h5 className="text-xs font-bold text-brand-navy uppercase tracking-wider font-display">Mission</h5>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                  To deliver result-driven web, SEO, and AI solutions that fuel sustainable business growth.
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-brand-navy/10 flex items-center justify-center text-brand-navy shadow-inner shrink-0">
                    <Users className="w-4.5 h-4.5" />
                  </div>
                  <h5 className="text-xs font-bold text-brand-navy uppercase tracking-wider font-display">Approach</h5>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-semibold">
                  Transparent execution, hands-on collaboration, and a relentless focus on real results.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

