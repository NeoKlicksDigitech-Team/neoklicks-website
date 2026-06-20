"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Eye } from "lucide-react";
import DashboardAnimation from "./DashboardAnimation";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-0 md:pt-36 overflow-hidden bg-slate-50">
      {/* Background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16">
          
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">


            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.15] text-brand-navy tracking-tight">
              NeoKlicks — Where <span className="text-brand-orange">Digital</span> Challenges Meet <span className="text-brand-pink">Real</span> <span className="text-brand-orange">Solutions.</span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
              NeoKlicks Digitech delivers end-to-end technology services for businesses across India and worldwide — from bespoke digital frameworks and advanced UI engineering to deployment optimization.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="https://wa.me/919309952393?text=Hi%20NeoKlicks%20Digitech%20team,%20I'd%20like%20to%20get%20a%20free%20consultation%20about%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-navy hover:bg-brand-navy/90 text-white rounded-2xl font-bold shadow-md hover:shadow-lg transition-all duration-300 text-sm select-none hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                Get Free Consultation (WhatsApp)
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-brand-navy rounded-2xl font-bold shadow-xs transition-all duration-300 text-sm select-none hover:-translate-y-0.5"
              >
                <Eye className="h-5 w-5" />
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Column: Animated Dashboard Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center w-full">
            <DashboardAnimation />
          </div>

        </div>
      </div>

      {/* --- BOTTOM SOLID NAVY COUNTER BAR --- */}
      <div className="w-full bg-brand-navy text-white py-10 mt-6 border-t border-slate-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Counter 1: Projects Delivered */}
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-mono text-brand-orange">
                <AnimatedCounter value="2+" />
              </p>
              <p className="text-[9px] sm:text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                Projects Delivered
              </p>
            </div>

            {/* Counter 2: Client Retention */}
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                <AnimatedCounter value="98%" />
              </p>
              <p className="text-[9px] sm:text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                Client Retention
              </p>
            </div>

            {/* Counter 3: Countries Served */}
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-mono text-brand-pink">
                <AnimatedCounter value="1" />
              </p>
              <p className="text-[9px] sm:text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                Countries Served
              </p>
            </div>

            {/* Counter 4: Uptime SLA Standard */}
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                <AnimatedCounter value="99.9%" />
              </p>
              <p className="text-[9px] sm:text-[10px] font-bold font-mono text-slate-400 uppercase tracking-widest">
                Uptime SLA Standard
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
