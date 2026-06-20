import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutHero";
import About from "@/components/About";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | NeoKlicks Digitech",
  description: "Learn more about NeoKlicks Digitech, our co-founders Om Bhavsar and Nilesh Kharote, and our commitment to high-performance development and technical SEO.",
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
