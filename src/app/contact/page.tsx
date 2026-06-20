import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | NeoKlicks Digitech",
  description: "Get in touch with NeoKlicks Digitech for a free consultation on your web development, e-commerce, or AI/ML automation project.",
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
