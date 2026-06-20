import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | NeoKlicks Digitech",
  description: "Explore the comprehensive technology services offered by NeoKlicks Digitech: Web development, custom AI/ML integrations, e-commerce storefronts, and performance marketing.",
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
