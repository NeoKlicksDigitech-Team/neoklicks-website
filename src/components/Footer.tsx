"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import { servicesList } from "./Navbar";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const industries = [
    "Startups & SaaS",
    "E-Commerce & Retail",
    "Healthcare & Tech",
    "Real Estate",
    "Local Nashik Businesses",
    "Professional Services",
  ];

  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Logo className="h-7 sm:h-8 w-auto" inverse />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              NeoKlicks Digitech delivers premium web applications, bespoke AI/ML integrations, and performance-driven digital marketing. Nashik-based with global delivery.
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a 
                href="https://www.linkedin.com/company/neoklicks-digitech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-brand-orange transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/neo.klicks.digitech?igsh=MXJmMHg4aG40ZDJvMA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-slate-400 hover:text-brand-orange transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
            <div className="pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">NeoKlicks Digitech</span>
              <p className="text-xs text-brand-orange font-semibold mt-1">Co-Founder Agency</p>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-white mb-6">Core Services</h4>
            <ul className="space-y-3 text-sm">
              {servicesList.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-brand-orange hover:translate-x-1 inline-flex items-center transition-all duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-white mb-6">Sectors We Serve</h4>
            <ul className="space-y-3 text-sm">
              {industries.map((ind) => (
                <li key={ind} className="flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-brand-orange" />
                  <span>{ind}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Info Column */}
          <div className="space-y-4 text-sm">
            <h4 className="text-sm font-mono uppercase tracking-wider text-white mb-6">Get In Touch</h4>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
              <span>Nashik, Maharashtra, India</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
              <a href="mailto:team@neoklicksdigitech.com" className="hover:text-brand-orange transition-colors">
                team@neoklicksdigitech.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
              <div>
                <p>Monday – Saturday</p>
                <p className="text-slate-400">9:00 AM – 6:00 PM IST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} NeoKlicks Digitech. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <button
              onClick={scrollToTop}
              className="bg-slate-800 hover:bg-brand-orange text-white p-2.5 rounded-full transition-all duration-300 shadow-md flex items-center justify-center hover:-translate-y-1"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
