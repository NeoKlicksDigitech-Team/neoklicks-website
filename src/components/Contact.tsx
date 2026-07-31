"use client";

import React, { useState } from "react";
import { Mail, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle2, AlertCircle, Share2, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/utils/supabase/client";
import { contactSchema } from "@/utils/security/validation";
import { sanitizeData } from "@/utils/security/sanitize";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Web Development",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Client-side validation using Zod
    const validationResult = contactSchema.safeParse(formData);
    if (!validationResult.success) {
      setStatus("error");
      setErrorMessage(validationResult.error.issues[0]?.message || "Invalid input data.");
      return;
    }

    // Client-side sanitization
    const sanitized = sanitizeData(validationResult.data);

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: sanitized.name,
          email: sanitized.email,
          project_type: sanitized.projectType,
          message: sanitized.message,
        });

      if (error) {
        setStatus("error");
        setErrorMessage(error.message || "Something went wrong. Please try again.");
      } else {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "Web Development", message: "" });
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Network error. Please check your internet connection.");
    }
  };

  const projectOptions = [
    "Web Development",
    "AI/ML Solutions & Automation",
    "E-Commerce Development",
    "SEO Services",
    "Digital Marketing & Ads",
    "UI/UX Design",
    "Custom Software / Portals",
    "Maintenance & Support",
    "Other / Unsure",
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-center lg:text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
            Let's Build Something That <span className="gradient-text">Works for You</span>
          </h2>
          <p className="text-slate-500 text-base">
            Have a project in mind or need assistance optimizing your workflow? Send your details and we will reply within 24 hours.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Form (Col-span 7) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 p-6 sm:p-8 rounded-3xl shadow-xs">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy font-display">Project Inquiry Submitted!</h3>
                  <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to NeoKlicks Digitech. We will review your details and email you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center text-xs font-bold text-brand-orange hover:text-brand-pink transition-colors gap-1.5 pt-2"
                  >
                    Send another message <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-brand-navy uppercase tracking-wider font-mono">
                      Your Name <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white border border-slate-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-xl p-3 text-sm text-brand-navy outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-brand-navy uppercase tracking-wider font-mono">
                      Work Email <span className="text-brand-pink">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className="w-full bg-white border border-slate-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-xl p-3 text-sm text-brand-navy outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Project Type field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="projectType" className="text-xs font-bold text-brand-navy uppercase tracking-wider font-mono">
                      Project Type <span className="text-brand-pink">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-white border border-slate-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-xl p-3 text-sm text-brand-navy outline-none transition-all duration-200"
                    >
                      {projectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-brand-navy uppercase tracking-wider font-mono">
                      Tell us about your project <span className="text-brand-pink">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Detail your goals, features needed, budget, or timeline..."
                      className="w-full bg-white border border-slate-200 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange rounded-xl p-3 text-sm text-brand-navy outline-none transition-all duration-200 resize-y"
                    ></textarea>
                  </div>

                  {/* Status Banner */}
                  {status === "error" && (
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2.5 text-xs text-red-700">
                      <AlertCircle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full gradient-btn justify-center text-center font-bold py-3.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending Project Details..." : "Submit Inquiry"}
                      {status !== "submitting" && <ArrowRight className="ml-2 h-4 w-4" />}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Block: Details & WhatsApp (Col-span 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Info Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-brand-navy font-display mb-2">Direct Contact Information</h3>
              
              <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <MapPin className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">Office Location</h4>
                  <p className="text-sm font-semibold text-brand-navy mt-0.5">Nashik, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-slate-200 bg-slate-50/50 min-w-0">
                <Mail className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">Email Directly</h4>
                  <a href="mailto:team@neoklicksdigitech.com" className="text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors mt-0.5 block break-all sm:break-normal">
                    team@neoklicksdigitech.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-slate-200 bg-slate-50/50 min-w-0">
                <Phone className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">Call Us</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-0.5">
                    <a href="tel:+919309952393" className="text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors">
                      +91 93099 52393
                    </a>
                    <a href="tel:+919284868618" className="text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors">
                      +91 9284868618
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <Clock className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold">Business Hours</h4>
                  <p className="text-sm font-semibold text-brand-navy mt-0.5">Monday – Saturday</p>
                  <p className="text-xs text-slate-500 mt-0.5">9:00 AM – 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
                <Share2 className="h-5 w-5 text-brand-pink shrink-0 mt-0.5" />
                <div className="w-full">
                  <h4 className="text-xs font-mono uppercase text-slate-400 font-bold mb-1.5">Social Media</h4>
                  <div className="flex items-center gap-4">
                    <a 
                      href="https://www.linkedin.com/company/neoklicks-digitech/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      LinkedIn
                    </a>
                    <a 
                      href="https://www.instagram.com/neo.klicks.digitech?igsh=MXJmMHg4aG40ZDJvMA==" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5" /> Instant Contact
                </span>
                <h3 className="text-lg font-bold text-brand-navy font-display">Need a quicker reply?</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Start a chat directly on WhatsApp. We can discuss your app framework, machine learning goals, or SEO target instantly.
                </p>
              </div>

              {/* WhatsApp Gradient Button */}
              <div>
                <a
                  href="https://wa.me/919309952393?text=Hi%20NeoKlicks%20Digitech%20team,%20I'd%20like%20to%20discuss%20a%20project%20with%20NeoKlicks%20Digitech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center text-center font-bold px-6 py-3 rounded-full text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:-translate-y-0.5 text-sm"
                >
                  Chat on WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
