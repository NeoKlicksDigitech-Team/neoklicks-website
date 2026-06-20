"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Globe, Star, Zap, Phone, Mail, MapPin, 
  ArrowLeft, ArrowRight, Check, Sparkles, Layers, 
  ShieldCheck, Smartphone, BarChart3, Cpu, Search, ShoppingBag, TrendingUp, Palette
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Process, { ProcessStep } from "@/components/Process";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

// Animation Components for Each Service
function WebDevAnimation() {
  const [activePalette, setActivePalette] = useState(0);
  const [pageSpeed, setPageSpeed] = useState(92);
  const palettes = [
    ["bg-blue-600", "bg-indigo-500", "bg-purple-500", "bg-slate-900"],
    ["bg-emerald-600", "bg-teal-500", "bg-cyan-500", "bg-slate-900"],
    ["bg-brand-orange", "bg-brand-pink", "bg-rose-500", "bg-slate-900"],
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setPageSpeed((prev) => (prev >= 100 ? 90 : prev + 1));
    }, 150);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full max-w-[480px] scale-[0.66] min-[360px]:scale-[0.7] min-[400px]:scale-[0.76] min-[440px]:scale-[0.82] sm:scale-[0.9] lg:scale-100 origin-center py-8 lg:ml-auto">
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden relative z-10">
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
        <div className="p-3 bg-slate-50/50 space-y-3">
          <div className="flex justify-between items-center text-[8px] font-bold text-slate-600 px-1">
            <span className="font-extrabold text-brand-navy text-[9px]">N NeoKlicks</span>
            <div className="flex gap-3 text-[7px] text-slate-400 font-medium">
              <span>Services</span>
              <span>About</span>
              <span>Blog</span>
            </div>
            <span className="px-2 py-0.5 bg-brand-navy text-white rounded text-[7px]">Get Started</span>
          </div>
          <div className="bg-gradient-to-tr from-brand-navy to-indigo-950 p-4 rounded-xl text-white text-center space-y-2 relative overflow-hidden shadow-2xs">
            <h4 className="text-[11px] sm:text-xs font-black tracking-tight leading-tight">Websites That Convert</h4>
            <p className="text-[7.5px] text-slate-300 font-medium">Premium layouts for growing brands</p>
            <div className="flex gap-2 justify-center pt-1 text-[7px] font-extrabold">
              <span className="px-2 py-1 bg-brand-orange text-white rounded">Start Project</span>
              <span className="px-2 py-1 border border-white/20 rounded">Our Work →</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg text-center space-y-1">
              <span className="text-[8px] font-black text-blue-600 block">Web Design</span>
              <span className="text-[6.5px] text-slate-400 font-medium block leading-none">Pixel-perfect UI</span>
            </div>
            <div className="p-2 bg-orange-50 border border-orange-100 rounded-lg text-center space-y-1">
              <span className="text-[8px] font-black text-brand-orange block">Development</span>
              <span className="text-[6.5px] text-slate-400 font-medium block leading-none">Clean code</span>
            </div>
            <div className="p-2 bg-emerald-50 border border-emerald-100 rounded-lg text-center space-y-1">
              <span className="text-[8px] font-black text-emerald-600 block">SEO Target</span>
              <span className="text-[6.5px] text-slate-400 font-medium block leading-none">Rank on Google</span>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        className="absolute -left-6 lg:-left-10 top-10 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
      >
        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-extrabold text-[10px]">✓</div>
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] font-black text-brand-navy leading-none">PageSpeed: {pageSpeed}</p>
          <p className="text-[8px] text-slate-400 font-bold">Core Web Vitals ✓</p>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
        className="absolute -right-6 -top-8 bg-white border border-slate-200 p-3 rounded-2xl shadow-xl space-y-2 z-20 w-28 text-left"
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
    </div>
  );
}

function AiAutomationAnimation() {
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM] AI Pipeline Online",
    "[IDLE] Monitoring workflows...",
  ]);
  useEffect(() => {
    const tasks = [
      "Process email inquiry...",
      "Draft reply with LLM...",
      "Update HubSpot CRM...",
      "Generate analytics PDF...",
      "Sync Slack notification...",
    ];
    let count = 0;
    const interval = setInterval(() => {
      const task = tasks[count % tasks.length];
      setLogs((prev) => [
        `[EXEC] ${task}`,
        `[OK] Completed in 0.4s`,
        prev[0],
      ].slice(0, 3));
      count++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full max-w-[480px] scale-[0.66] min-[360px]:scale-[0.7] min-[400px]:scale-[0.76] min-[440px]:scale-[0.82] sm:scale-[0.9] lg:scale-100 origin-center py-8 lg:ml-auto">
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xl p-6 space-y-6 relative z-10">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
            <span className="text-[9px] font-mono font-bold text-slate-400 ml-2">INTELLIGENT AGENT v1.2</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 font-extrabold text-[8px] tracking-wider uppercase">Running</span>
        </div>
        <div className="grid grid-cols-3 gap-4 relative items-center py-2">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1 relative z-10">
            <Globe className="h-5 w-5 text-brand-orange mx-auto" />
            <span className="text-[8px] font-black text-brand-navy block">Data Input</span>
          </div>
          <div className="p-3 bg-brand-navy border border-slate-800 rounded-xl text-center space-y-1 relative z-10 text-white shadow-md">
            <Cpu className="h-5 w-5 text-brand-pink mx-auto animate-pulse" />
            <span className="text-[8px] font-black block">LLM Processor</span>
          </div>
          <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-center space-y-1 relative z-10">
            <Zap className="h-5 w-5 text-emerald-600 mx-auto" />
            <span className="text-[8px] font-black text-emerald-700 block">Automation</span>
          </div>
          <div className="absolute inset-0 flex items-center justify-around pointer-events-none -z-0">
            <div className="w-[85px] h-0.5 bg-slate-200 relative">
              <motion.div 
                animate={{ left: ["0%", "100%"] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute w-2 h-2 rounded-full bg-brand-orange -top-[3px] shadow-[0_0_8px_var(--color-brand-orange)]"
              />
            </div>
            <div className="w-[85px] h-0.5 bg-slate-200 relative">
              <motion.div 
                animate={{ left: ["0%", "100%"] }} 
                transition={{ repeat: Infinity, duration: 1.5, delay: 0.75, ease: "linear" }}
                className="absolute w-2 h-2 rounded-full bg-brand-pink -top-[3px] shadow-[0_0_8px_var(--color-brand-pink)]"
              />
            </div>
          </div>
        </div>
        <div className="bg-slate-950 rounded-xl p-3.5 font-mono text-[9px] text-slate-300 space-y-1 text-left min-h-[72px] shadow-inner">
          {logs.map((log, idx) => (
            <p key={idx} className={log.includes("[EXEC]") ? "text-brand-orange" : log.includes("[OK]") ? "text-emerald-400" : "text-slate-400"}>
              {log}
            </p>
          ))}
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute -left-6 -top-4 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 z-20"
      >
        <span className="w-5 h-5 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 font-extrabold text-[10px]">⚡</span>
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] font-black text-brand-navy leading-none">Task Speed: +1200%</p>
          <p className="text-[8px] text-slate-400 font-bold">Instant operational execution</p>
        </div>
      </motion.div>
    </div>
  );
}

function ECommerceAnimation() {
  const [cartCount, setCartCount] = useState(0);
  const [salesGoal, setSalesGoal] = useState(312);
  useEffect(() => {
    const interval = setInterval(() => {
      setCartCount((prev) => {
        if (prev >= 3) {
          setSalesGoal((g) => g + 1);
          return 0;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full max-w-[480px] scale-[0.66] min-[360px]:scale-[0.7] min-[400px]:scale-[0.76] min-[440px]:scale-[0.82] sm:scale-[0.9] lg:scale-100 origin-center py-8 lg:ml-auto">
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden relative z-10">
        <div className="flex justify-between items-center bg-slate-100 px-4 py-3 border-b border-slate-200">
          <span className="font-extrabold text-brand-navy text-[9px]">🛒 E-STORE PLATFORM</span>
          <div className="flex items-center gap-2 px-2.5 py-1 bg-white rounded-full border border-slate-200/80 shadow-4xs shrink-0">
            <span className="text-[8px] font-bold text-slate-500">Cart ({cartCount})</span>
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0.5 }} 
                animate={{ scale: [1, 1.3, 1] }} 
                className="w-3.5 h-3.5 bg-brand-orange text-white rounded-full flex items-center justify-center text-[7px] font-black"
              >
                {cartCount}
              </motion.span>
            )}
          </div>
        </div>
        <div className="p-4 bg-slate-50 grid grid-cols-2 gap-3">
          <div className="bg-white border border-slate-200/60 p-2.5 rounded-xl space-y-2 text-left relative overflow-hidden shadow-4xs">
            <div className="aspect-[4/3] bg-slate-100 rounded-lg flex items-center justify-center text-[9px] font-bold text-slate-350">🛍 Product A</div>
            <div className="space-y-1">
              <p className="text-[9px] font-black text-brand-navy leading-none">Modern Wireless Gear</p>
              <p className="text-[8px] text-slate-400 font-bold">$79.00</p>
            </div>
            <button className={`w-full py-1 rounded text-[7px] font-extrabold transition-colors ${cartCount === 1 ? "bg-brand-orange text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}>
              {cartCount === 1 ? "Added!" : "Add to Cart"}
            </button>
          </div>
          <div className="bg-white border border-slate-200/60 p-2.5 rounded-xl space-y-2 text-left relative overflow-hidden shadow-4xs">
            <div className="aspect-[4/3] bg-slate-100 rounded-lg flex items-center justify-center text-[9px] font-bold text-slate-350">🔌 Product B</div>
            <div className="space-y-1">
              <p className="text-[9px] font-black text-brand-navy leading-none">Smart Charger Dock</p>
              <p className="text-[8px] text-slate-400 font-bold">$39.00</p>
            </div>
            <button className={`w-full py-1 rounded text-[7px] font-extrabold transition-colors ${cartCount === 2 ? "bg-brand-orange text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"}`}>
              {cartCount === 2 ? "Added!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        className="absolute -left-6 top-10 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
      >
        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-extrabold text-[10px]">📈</span>
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] font-black text-brand-navy leading-none">Conversion: +3.4x</p>
          <p className="text-[8px] text-slate-400 font-bold">Fast checkout flow optimization</p>
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
        className="absolute -right-6 bottom-4 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 z-20"
      >
        <span className="w-5.5 h-5.5 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 font-extrabold text-[10px]">🔥</span>
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] font-black text-brand-navy leading-none">Sales Today: {salesGoal}</p>
          <p className="text-[8px] text-slate-400 font-bold">Live conversions updated</p>
        </div>
      </motion.div>
    </div>
  );
}

function SeoAnimation() {
  return (
    <div className="relative w-full max-w-[480px] scale-[0.66] min-[360px]:scale-[0.7] min-[400px]:scale-[0.76] min-[440px]:scale-[0.82] sm:scale-[0.9] lg:scale-100 origin-center py-8 lg:ml-auto">
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xl p-4 space-y-4 relative z-10">
        <div className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/80 px-3.5 py-2.5 rounded-xl">
          <Search className="h-4.5 w-4.5 text-slate-400 shrink-0" />
          <span className="text-[9.5px] font-medium text-slate-700">custom software developer nashik</span>
          <span className="ml-auto text-[8px] bg-slate-200 text-slate-500 px-2 py-0.5 rounded-md font-bold uppercase">Search</span>
        </div>
        <div className="space-y-3.5 text-left">
          <div className="p-3 bg-blue-50/40 border border-blue-100 rounded-xl space-y-1 relative">
            <span className="absolute right-3 top-3 px-2 py-0.5 bg-amber-100 border border-amber-200 text-[7px] text-amber-700 rounded-full font-black uppercase flex items-center gap-0.5">
              ★ Rank #1
            </span>
            <span className="text-[7.5px] text-slate-400 font-bold uppercase tracking-wider block">https://neoklicks.com</span>
            <span className="text-xs font-black text-blue-600 hover:underline block leading-tight">NeoKlicks Digitech — Custom Apps & Automation</span>
            <p className="text-[8px] text-slate-500 leading-normal font-medium">Clarity. Capability. Confidence. Nashik's leading developer co-founded by Om and Nilesh delivering results.</p>
          </div>
          <div className="p-3 space-y-1 opacity-60">
            <span className="text-[7.5px] text-slate-400 font-bold uppercase block">https://genericagency.com</span>
            <span className="text-xs font-black text-blue-500 hover:underline block leading-tight">Top Marketing Solutions & Branding</span>
            <p className="text-[8px] text-slate-500 leading-normal font-medium">We offer branding packages, templates and brochures with standard themes.</p>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute -left-6 top-12 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
      >
        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-extrabold text-[10px]">✓</span>
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] font-black text-brand-navy leading-none">Traffic: +480%</p>
          <p className="text-[8px] text-slate-400 font-bold">Organic search traffic growth</p>
        </div>
      </motion.div>
    </div>
  );
}

function DigitalMarketingAnimation() {
  return (
    <div className="relative w-full max-w-[480px] scale-[0.66] min-[360px]:scale-[0.7] min-[400px]:scale-[0.76] min-[440px]:scale-[0.82] sm:scale-[0.9] lg:scale-100 origin-center py-8 lg:ml-auto">
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xl p-4 space-y-4 relative z-10">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <span className="text-[9px] font-mono font-bold text-slate-400">GOOGLE ADS CAMPAIGN</span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 font-extrabold text-[7px] uppercase tracking-wider">Active</span>
        </div>
        <div className="border border-slate-200/60 rounded-xl p-3 bg-slate-50 text-left space-y-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[6.5px] bg-slate-250 text-slate-600 px-1 rounded font-black">Sponsored</span>
            <span className="text-[7.5px] text-slate-500">neoklicks.com</span>
          </div>
          <span className="text-xs font-black text-brand-navy leading-tight block">Get a High-Converting Web App Shipped In Weeks</span>
          <p className="text-[8px] text-slate-500 leading-normal">Founded by developers who write clean, responsive code. Get a free HubSpot workflow setup and speed audit.</p>
        </div>
        <div className="h-16 flex items-end gap-1.5 pt-4">
          <div className="w-full h-[30%] bg-blue-100 rounded-sm"></div>
          <div className="w-full h-[45%] bg-blue-200 rounded-sm"></div>
          <div className="w-full h-[60%] bg-blue-300 rounded-sm"></div>
          <div className="w-full h-[85%] bg-brand-orange rounded-sm shadow-[0_0_8px_rgba(255,107,0,0.3)]"></div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute -left-6 top-10 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
      >
        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-extrabold text-[10px]">✓</span>
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] font-black text-brand-navy leading-none">CPL: -25%</p>
          <p className="text-[8px] text-slate-400 font-bold">Reduced Cost Per Acquisition</p>
        </div>
      </motion.div>
    </div>
  );
}

function UiUxAnimation() {
  return (
    <div className="relative w-full max-w-[480px] scale-[0.66] min-[360px]:scale-[0.7] min-[400px]:scale-[0.76] min-[440px]:scale-[0.82] sm:scale-[0.9] lg:scale-100 origin-center py-8 lg:ml-auto">
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden relative z-10">
        <div className="flex justify-between items-center bg-slate-900 text-white px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-rose-500 rounded-full flex items-center justify-center font-bold text-[6px]">UX</span>
            <span className="text-[8px] font-bold tracking-widest text-slate-300">FIGMA CANVAS v3.0</span>
          </div>
          <span className="text-[7.5px] text-slate-400">Scale: 100%</span>
        </div>
        <div className="p-4 bg-slate-100 flex justify-center relative overflow-hidden">
          <div className="w-36 aspect-[9/16] bg-white border border-slate-200 rounded-xl shadow-md p-2 space-y-2 relative">
            <div className="h-2 w-10 bg-slate-100 rounded-sm mx-auto"></div>
            <div className="aspect-[4/3] bg-slate-50 border border-dashed border-slate-200 rounded flex items-center justify-center text-[7px] text-slate-400 font-bold">Image Frame</div>
            <div className="h-2 w-full bg-slate-100 rounded-xs"></div>
            <div className="h-2 w-2/3 bg-slate-100 rounded-xs"></div>
            <div className="h-5 w-full bg-brand-orange rounded flex items-center justify-center text-[7px] text-white font-extrabold shadow-3xs">CTA Button</div>
          </div>
          <motion.div 
            animate={{ 
              x: [-20, 30, -20],
              y: [-10, 40, -10]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute z-20 pointer-events-none"
          >
            <svg className="w-4 h-4 text-brand-pink fill-current drop-shadow-sm" viewBox="0 0 24 24">
              <path d="M4.5 3v15.2l3.8-3.8 2.9 6.8 2.2-.9-2.9-6.8 5-.4z"/>
            </svg>
            <span className="absolute left-3.5 top-3.5 px-1 bg-brand-pink text-white rounded-[3px] text-[5.5px] font-mono font-bold tracking-wider">Om</span>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute -left-6 top-10 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
      >
        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-extrabold text-[10px]">✓</span>
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] font-black text-brand-navy leading-none">Design System</p>
          <p className="text-[8px] text-slate-400 font-bold">Standard typography & colors</p>
        </div>
      </motion.div>
    </div>
  );
}

function CustomSoftwareAnimation() {
  return (
    <div className="relative w-full max-w-[480px] scale-[0.66] min-[360px]:scale-[0.7] min-[400px]:scale-[0.76] min-[440px]:scale-[0.82] sm:scale-[0.9] lg:scale-100 origin-center py-8 lg:ml-auto">
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xl overflow-hidden relative z-10">
        <div className="bg-slate-100 px-4 py-2 border-b border-slate-200 flex justify-between items-center">
          <span className="text-[9px] font-mono font-bold text-slate-500">ADMIN CONTROL PANEL</span>
          <span className="w-3.5 h-3.5 rounded-full bg-indigo-500 flex items-center justify-center text-[6px] font-black text-white">DB</span>
        </div>
        <div className="p-3 bg-slate-50/55 flex gap-3">
          <div className="w-16 shrink-0 bg-white border border-slate-200 p-1.5 rounded-lg space-y-1 text-[5.5px] text-slate-400 text-left font-bold select-none">
            <div className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 rounded">Dashboard</div>
            <div className="px-1.5 py-0.5 hover:bg-slate-50 rounded">Database</div>
            <div className="px-1.5 py-0.5 hover:bg-slate-50 rounded">API Keys</div>
            <div className="px-1.5 py-0.5 hover:bg-slate-50 rounded">Logs</div>
          </div>
          <div className="flex-1 bg-white border border-slate-200 rounded-lg p-2.5 space-y-2">
            <h5 className="text-[8px] font-black text-brand-navy text-left leading-none">Database Queries</h5>
            <div className="space-y-1 select-none">
              <div className="flex justify-between items-center text-[5.5px] border-b border-slate-100 pb-1">
                <span className="text-slate-500">SELECT * FROM users</span>
                <span className="text-emerald-500 font-extrabold">200 OK</span>
              </div>
              <div className="flex justify-between items-center text-[5.5px] border-b border-slate-100 pb-1">
                <span className="text-slate-500">INSERT INTO reports</span>
                <span className="text-emerald-500 font-extrabold">200 OK</span>
              </div>
            </div>
            <div className="h-6 bg-slate-50 border border-slate-200 rounded flex items-end p-0.5 gap-0.5">
              <div className="w-full h-[20%] bg-indigo-200 rounded-xs"></div>
              <div className="w-full h-[50%] bg-indigo-300 rounded-xs"></div>
              <div className="w-full h-[80%] bg-indigo-500 rounded-xs shadow-xs"></div>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute -left-6 top-10 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
      >
        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-extrabold text-[10px]">✓</span>
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] font-black text-brand-navy leading-none">Latency: 12ms</p>
          <p className="text-[8px] text-slate-400 font-bold">Fast database responses</p>
        </div>
      </motion.div>
    </div>
  );
}

function MaintenanceAnimation() {
  return (
    <div className="relative w-full max-w-[480px] scale-[0.66] min-[360px]:scale-[0.7] min-[400px]:scale-[0.76] min-[440px]:scale-[0.82] sm:scale-[0.9] lg:scale-100 origin-center py-8 lg:ml-auto">
      <div className="w-full bg-white rounded-2xl border border-slate-200/80 shadow-2xl p-4 space-y-4 relative z-10">
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <span className="text-[9px] font-mono font-bold text-slate-400">SERVER HEALTH MONITOR</span>
          <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600 font-extrabold text-[7px] uppercase tracking-wider">All Systems Operational</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-left">
          <div className="p-2.5 bg-slate-50 border border-slate-200/60 rounded-xl space-y-1">
            <span className="text-[6.5px] text-slate-400 font-bold uppercase tracking-wider block">Daily Backups</span>
            <span className="text-[10px] font-black text-emerald-500 block">Active [OK]</span>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-200/60 rounded-xl space-y-1">
            <span className="text-[6.5px] text-slate-400 font-bold uppercase tracking-wider block">Uptime Target</span>
            <span className="text-[10px] font-black text-brand-orange block">99.99%</span>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-200/60 rounded-xl space-y-1">
            <span className="text-[6.5px] text-slate-400 font-bold uppercase tracking-wider block">Security Shield</span>
            <span className="text-[10px] font-black text-indigo-500 block">Enabled [OK]</span>
          </div>
        </div>
        <div className="bg-slate-950 rounded-xl h-12 flex items-center justify-center overflow-hidden relative shadow-inner p-2 select-none">
          <svg className="w-full h-8 text-emerald-500" viewBox="0 0 100 20" preserveAspectRatio="none">
            <motion.path 
              d="M0 10 Q25 0 50 10 T100 10" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.5"
              animate={{
                d: [
                  "M0 10 Q25 0 50 10 T100 10",
                  "M0 10 Q25 20 50 10 T100 10",
                  "M0 10 Q25 0 50 10 T100 10"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
          </svg>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        className="absolute -left-6 top-10 bg-white border border-slate-200 p-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
      >
        <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-extrabold text-[10px]">✓</span>
        <div className="space-y-0.5 text-left">
          <p className="text-[10px] font-black text-brand-navy leading-none">Security: OK</p>
          <p className="text-[8px] text-slate-400 font-bold">Continuous vulnerability scans</p>
        </div>
      </motion.div>
    </div>
  );
}

function ServiceHeroAnimation({ slug }: { slug: string }) {
  switch (slug) {
    case "web-development":
      return <WebDevAnimation />;
    case "ai-ml-solutions":
      return <AiAutomationAnimation />;
    case "e-commerce":
      return <ECommerceAnimation />;
    case "seo":
      return <SeoAnimation />;
    case "digital-marketing":
      return <DigitalMarketingAnimation />;
    case "ui-ux-design":
      return <UiUxAnimation />;
    case "custom-software":
      return <CustomSoftwareAnimation />;
    case "maintenance-support":
      return <MaintenanceAnimation />;
    default:
      return <WebDevAnimation />;
  }
}

// Service Page Client Definition
export interface CounterMetric {
  value: string;
  label: string;
}

export interface ClientServiceDetail {
  title: string;
  tagline: string;
  intro: string;
  deliverables: string[];
  metric: string;
  metricLabel: string;
  icon: React.ReactNode;
  eyebrow: string;
  heroTitle: React.ReactNode;
  cardLabel1: string;
  cardDesc1: string;
  cardLabel2: string;
  cardDesc2: string;
  counters: CounterMetric[];
  processTitle?: React.ReactNode;
  processSubtitle?: string;
  processEyebrow?: string;
  processSteps?: ProcessStep[];
}

export default function ServicePageClient({ service, slug }: { service: ClientServiceDetail; slug: string }) {
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
                  {service.eyebrow}
                </div>
                
                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.12] text-brand-navy tracking-tight text-left">
                  {service.heroTitle}
                </h1>
                
                {/* Description */}
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium text-left">
                  {service.intro}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                  <a
                    href="https://wa.me/919309952393?text=Hi%20NeoKlicks%20Digitech%20team,%20I'd%20like%20to%20book%20a%20free%20strategy%20session%20for%20my%2520project."
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

                {/* Metrics strip */}
                <div className="grid grid-cols-2 gap-6 pt-6 max-w-sm mx-auto lg:mx-0 border-t border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0">
                      <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <p className="text-xs sm:text-sm font-black text-brand-navy leading-none">{service.cardLabel1}</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">{service.cardDesc1}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4 text-emerald-500" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <p className="text-xs sm:text-sm font-black text-brand-navy leading-none">{service.cardLabel2}</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider leading-none">{service.cardDesc2}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Premium Mockup Animation */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end items-center mt-8 lg:mt-0 w-full overflow-visible">
                <ServiceHeroAnimation slug={slug} />
              </div>
            </div>
          </div>
        </section>

        {/* --- BOTTOM COUNTER BAR (DYNAMIC) --- */}
        <section className="w-full bg-brand-navy text-white py-12 relative z-20 border-b border-slate-800 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              {service.counters.map((cnt, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                    <AnimatedCounter value={cnt.value} />
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                    {cnt.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROCESS TIMELINE SECTION --- */}
        <Process 
          steps={service.processSteps}
          title={service.processTitle}
          subtitle={service.processSubtitle}
          eyebrow={service.processEyebrow}
        />

        {/* --- CALL TO ACTION SECTION --- */}
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
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest text-brand-pink bg-brand-pink/15 border border-brand-pink/20">
                🚀 Ready to get started with {service.title}?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white leading-tight">
                Let's Build Your <span className="gradient-text">Digital Presence</span>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
                Book a free 30-minute strategy session. We'll audit your current digital workflow, map your ideal platform layout, and give you a transparent, fixed-price quote — no obligation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <a
                href="https://wa.me/919309952393?text=Hi%20NeoKlicks%20Digitech%20team,%20I'd%2520like%2520to%2520book%2520a%2520free%252520strategy%2520session%2520for%2520my%2520project."
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
