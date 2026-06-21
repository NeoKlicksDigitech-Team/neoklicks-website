import React from "react";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact NeoKlicks DigiTech | Start Your Project in Nashik",
  description: "Have a project in mind? Get in touch with NeoKlicks DigiTech. Send your details and we'll reply within 24 hours. Based in Nashik, Maharashtra — serving clients across India and globally.",
  keywords: "contact NeoKlicks DigiTech, hire web developer Nashik, digital agency contact India, get free consultation, web development quote Nashik",
  authors: [{ name: "NeoKlicks DigiTech" }],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://neoklicksdigitech.com/contact",
  },
  openGraph: {
    type: "website",
    url: "https://neoklicksdigitech.com/contact",
    siteName: "NeoKlicks DigiTech",
    title: "Contact NeoKlicks DigiTech | Let's Build Something That Works",
    description: "Ready to start a project? Reach out to NeoKlicks DigiTech in Nashik — we respond within 24 hours. Web development, AI/ML, SEO & more.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact NeoKlicks DigiTech – Nashik Digital Agency",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact NeoKlicks DigiTech | Start Your Project",
    description: "Get in touch with NeoKlicks DigiTech. We reply within 24 hours. Based in Nashik, serving clients across India and globally.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        alt: "NeoKlicks DigiTech – Contact Us",
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

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
