import React from "react";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Studies & Projects | NeoKlicks DigiTech",
  description: "Browse the digital products, headless commerce apps, and custom machine learning pipelines engineered by NeoKlicks DigiTech.",
  keywords: "portfolio Nashik, software case studies India, web development projects, AI ML integration portfolio",
  authors: [{ name: "NeoKlicks DigiTech" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://neoklicksdigitech.com/portfolio",
  },
  openGraph: {
    type: "website",
    url: "https://neoklicksdigitech.com/portfolio",
    siteName: "NeoKlicks DigiTech",
    title: "Portfolio & Case Studies | NeoKlicks DigiTech",
    description: "Browse the digital products, headless commerce apps, and custom machine learning pipelines engineered by NeoKlicks DigiTech.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NeoKlicks DigiTech Portfolio – Case Studies",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | NeoKlicks DigiTech",
    description: "Browse the digital products, headless commerce apps, and custom machine learning pipelines engineered by NeoKlicks DigiTech.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        alt: "NeoKlicks DigiTech Portfolio",
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

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
