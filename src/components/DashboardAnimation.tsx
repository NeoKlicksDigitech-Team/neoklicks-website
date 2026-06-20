"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DashboardAnimation() {
  return (
    <div className="relative w-full max-w-[450px] aspect-square select-none flex items-center justify-center overflow-visible">
      
      {/* Background ambient glows */}
      <div className="absolute w-72 h-72 rounded-full bg-brand-orange/5 blur-3xl -top-10 -left-10 pointer-events-none animate-pulse" />
      <div className="absolute w-72 h-72 rounded-full bg-brand-pink/5 blur-3xl -bottom-10 -right-10 pointer-events-none animate-pulse" />

      {/* --- PROFESSIONAL VECTOR BASE ILLUSTRATION --- */}
      {/* Borderless and shadowless to blend seamlessly into the hero background grid */}
      <div className="relative w-full z-10">
        <img 
          src="/images/collaborative-office.png" 
          alt="NeoKlicks Agency Team Workspace" 
          className="w-full h-auto object-contain"
          draggable="false"
        />
      </div>

      {/* --- FLOATING SAAS WIDGETS --- */}

      {/* 1. Conversions Analytics Widget (Floating top-left) */}
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute left-[-28px] top-[40px] bg-[#1E293B]/95 backdrop-blur-xs text-white p-3 rounded-2xl border border-slate-700/50 shadow-xl z-30 w-32 flex flex-col gap-1 text-left"
      >
        <p className="text-[7px] text-slate-400 font-mono font-bold tracking-wider">CONVERSIONS</p>
        <p className="text-[12px] font-black text-brand-orange leading-none">+340%</p>
        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden mt-1">
          <div className="h-full w-3/4 bg-brand-orange rounded-full" />
        </div>
      </motion.div>

      {/* 2. Terminal Live Log Output (Floating top-right) */}
      <motion.div 
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
        className="absolute right-[-16px] top-[40px] bg-[#1E293B]/95 backdrop-blur-xs text-emerald-400 p-3 rounded-2xl border border-slate-700/50 shadow-xl z-30 w-38 font-mono text-[8px] leading-normal text-left"
      >
        <div className="flex items-center gap-1.5 mb-1.5 text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>neoklicks.sys</span>
        </div>
        <p className="text-slate-350">npm run dev</p>
        <p className="text-white font-extrabold">STATUS: OK ✓</p>
      </motion.div>

    </div>
  );
}
