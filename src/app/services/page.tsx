import React from "react";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Services | Web Design, SEO & AI Solutions – NeoKlicks DigiTech",
  description: "From crisp landing pages to enterprise portals — NeoKlicks DigiTech offers web development, AI/ML automation, e-commerce, SEO, digital marketing, UI/UX design, and maintenance services.",
  keywords: "web design services Nashik, SEO agency India, AI automation services, e-commerce development, digital marketing agency Nashik, UI UX design India, website maintenance",
  authors: [{ name: "NeoKlicks DigiTech" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://neoklicksdigitech.com/services",
  },
  openGraph: {
    type: "website",
    url: "https://neoklicksdigitech.com/services",
    siteName: "NeoKlicks DigiTech",
    title: "Services | Web Design, SEO & AI Solutions – NeoKlicks DigiTech",
    description: "Full-service digital agency in Nashik — web development, AI/ML, e-commerce, SEO, digital marketing, UI/UX, and ongoing maintenance. Built with precision, performance, and purpose.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NeoKlicks DigiTech Services – Nashik Digital Agency",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Web Design, SEO & AI Solutions – NeoKlicks DigiTech",
    description: "Web development, AI/ML automation, SEO, e-commerce & more from NeoKlicks DigiTech — Nash's full-service digital agency.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        alt: "NeoKlicks DigiTech – All Services",
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

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Services />
        <WhyChooseUs />
        <Process />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
