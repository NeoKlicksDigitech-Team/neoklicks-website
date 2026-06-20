"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

interface ServiceItem {
  name: string;
  slug: string;
  shortDesc: string;
}

export const servicesList: ServiceItem[] = [
  {
    name: "Web Development",
    slug: "web-development",
    shortDesc: "Fast, secure & conversion-ready websites.",
  },
  {
    name: "AI/ML Solutions & Automation",
    slug: "ai-ml-solutions",
    shortDesc: "Intelligent workflows & custom automations.",
  },
  {
    name: "E-Commerce Development",
    slug: "e-commerce",
    shortDesc: "Conversion-optimized storefronts & carts.",
  },
  {
    name: "SEO Services",
    slug: "seo",
    shortDesc: "Rank higher on Google with technical SEO.",
  },
  {
    name: "Digital Marketing & Ads",
    slug: "digital-marketing",
    shortDesc: "Data-driven campaigns that scale lead gen.",
  },
  {
    name: "UI/UX Design",
    slug: "ui-ux-design",
    shortDesc: "Modern, premium user flows & aesthetics.",
  },
  {
    name: "Custom Software & Portals",
    slug: "custom-software",
    shortDesc: "Internal business systems & dashboard panels.",
  },
  {
    name: "Maintenance & Support",
    slug: "maintenance-support",
    shortDesc: "Uptime monitoring, patches & updates.",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when path changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      {/* Centered Floating Pill Shape */}
      <div
        className={`max-w-7xl mx-auto rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-slate-200/80 bg-white/90 backdrop-blur-md shadow-md py-2.5 px-6 mt-3"
            : "border-slate-200/40 bg-white/70 backdrop-blur-sm shadow-xs py-3 px-6 mt-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo (Left side) */}
          <Link href="/" className="flex items-center">
            <Logo className="h-6 sm:h-7 md:h-8 w-auto" />
          </Link>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href="/services"
                      className={`flex items-center text-sm font-semibold transition-colors duration-200 ${
                        pathname.startsWith("/services")
                          ? "text-brand-orange"
                          : "text-brand-navy hover:text-brand-orange"
                      }`}
                    >
                      Services
                      <ChevronDown
                        className={`ml-0.5 h-4 w-4 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 mt-2.5 w-[560px] bg-white rounded-3xl shadow-xl border border-slate-200/80 p-5 grid grid-cols-2 gap-3"
                        >
                          <div className="col-span-2 pb-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                              Core Operations
                            </span>
                            <span className="text-[10px] text-brand-pink flex items-center font-bold gap-1">
                              <Code2 className="h-3 w-3" /> Engineering Services
                            </span>
                          </div>

                          {servicesList.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="group flex flex-col p-2 rounded-xl hover:bg-slate-50 transition-colors duration-200"
                            >
                              <span className="text-xs font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                                {service.name}
                              </span>
                              <span className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">
                                {service.shortDesc}
                              </span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))
                      ? "text-brand-orange"
                      : "text-brand-navy hover:text-brand-orange"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Start Your Project CTA Button (Right side) */}
          <div className="flex items-center space-x-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-between gap-3 text-xs font-bold pl-5 pr-1.5 py-1.5 bg-brand-navy hover:bg-brand-navy/90 text-white rounded-full transition-all duration-300 shadow-sm group select-none hover:-translate-y-0.5"
            >
              <span>Start Your Project</span>
              <div className="w-7 h-7 rounded-full bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-brand-navy focus:outline-none hover:text-brand-orange transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border border-slate-200 rounded-3xl mt-2 mx-2 p-5 shadow-xl absolute left-0 right-0 z-40"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 text-sm font-bold rounded-xl transition-colors ${
                    pathname === link.href
                      ? "text-brand-orange bg-slate-50"
                      : "text-brand-navy hover:text-brand-orange hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="border-t border-slate-100 pt-3.5 mt-1">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-3 text-sm font-bold py-2 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full shadow-md"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
