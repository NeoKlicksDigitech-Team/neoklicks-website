import React from "react";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | NeoKlicks DigiTech – Web & AI Agency in Nashik",
  description: "Meet the team behind NeoKlicks DigiTech — co-founded by Om Bhavsar and Nilesh Kharote. Built on trust and driven by a mission to help businesses grow online with modern web and AI solutions.",
  keywords: "NeoKlicks DigiTech about, web agency founders Nashik, Om Bhavsar, Nilesh Kharote, digital agency team India",
  authors: [{ name: "NeoKlicks DigiTech" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://neoklicksdigitech.com/about",
  },
  openGraph: {
    type: "website",
    url: "https://neoklicksdigitech.com/about",
    siteName: "NeoKlicks DigiTech",
    title: "About NeoKlicks DigiTech | Built on Trust. Driven by Vision.",
    description: "Meet the co-founders behind NeoKlicks DigiTech — a Nashik agency helping businesses grow with custom web development, AI/ML, and digital marketing.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NeoKlicks DigiTech – Team in Nashik, India",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "About NeoKlicks DigiTech | Built on Trust. Driven by Vision.",
    description: "Meet Om Bhavsar and Nilesh Kharote — co-founders of NeoKlicks DigiTech, a Nashik-based web & AI agency.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        alt: "NeoKlicks DigiTech – Nashik Digital Agency Team",
      },
    ],
  },
  other: {
    "content-language": "en-IN",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <AboutHero />
        <About />
      </main>
      <Footer />
    </div>
  );
}
