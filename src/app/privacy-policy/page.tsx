import React from "react";
import type { Metadata, Viewport } from "next";
import { Shield, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | NeoKlicks DigiTech",
  description: "Read NeoKlicks DigiTech's Privacy Policy — how we collect, use, and protect your personal data in compliance with India's Digital Personal Data Protection Act (DPDP) and IT Act.",
  keywords: "NeoKlicks DigiTech privacy policy, data protection policy India, DPDP Act compliance, personal data policy",
  authors: [{ name: "NeoKlicks DigiTech" }],
  robots: "noindex, follow",
  alternates: {
    canonical: "https://neoklicksdigitech.com/privacy-policy",
  },
  openGraph: {
    type: "website",
    url: "https://neoklicksdigitech.com/privacy-policy",
    siteName: "NeoKlicks DigiTech",
    title: "Privacy Policy | NeoKlicks DigiTech",
    description: "How NeoKlicks DigiTech collects, uses, and protects your data — compliant with India's DPDP Act and IT Act.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Privacy Policy – NeoKlicks DigiTech",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | NeoKlicks DigiTech",
    description: "NeoKlicks DigiTech's data privacy policy — DPDP Act & IT Act compliant.",
    images: [
      {
        url: "https://neoklicksdigitech.com/og-image.jpg",
        alt: "NeoKlicks DigiTech – Privacy Policy",
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

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-orange transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </Link>

          {/* Document container */}
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-2xs space-y-8">
            {/* Header info */}
            <div className="border-b border-slate-100 pb-8 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-orange font-bold flex items-center gap-1.5">
                <Shield className="h-4 w-4" /> Legal Document
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
                Privacy Policy
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-mono">
                <span className="font-semibold text-brand-navy">NeoKlics DigiTech</span>
                <span>•</span>
                <a href="https://www.neoklicksdigitech.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">
                  www.neoklicksdigitech.com
                </a>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> Last Updated: June 19, 2026</span>
              </div>
            </div>

            {/* Content body */}
            <div className="space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Welcome to NeoKlics DigiTech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We operate the website{" "}
                <a href="https://www.neoklicksdigitech.com" className="text-brand-orange hover:underline font-medium">www.neoklicksdigitech.com</a> (the &quot;Site&quot;) and provide
                Web Development, Search Engine Optimization (SEO), and AI Visibility services (collectively, the &quot;Services&quot;).
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site,
                engage with us, or use our Services. By accessing our Site or using our Services, you consent to the practices
                described in this policy.
              </p>

              {/* Section 1 */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  1. Information We Collect
                </h2>
                <p>
                  We collect information to provide better services to our clients and visitors. The types of information we collect include:
                </p>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">a) Information You Provide Directly</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong className="text-brand-navy font-semibold">Contact Information:</strong> Name, email address, phone number, company name, and job title submitted through contact forms, quote requests, newsletter sign-ups, or service inquiries.
                    </li>
                    <li>
                      <strong className="text-brand-navy font-semibold">Project Information:</strong> Details about your business, website, marketing goals, brand assets, login credentials (when required for project execution), and other materials you share with us to deliver Web Development, SEO, or AI Visibility services.
                    </li>
                    <li>
                      <strong className="text-brand-navy font-semibold">Billing Information:</strong> Payment details, billing address, and GST/tax identification numbers required for invoicing. Payment card data is processed by secure third-party payment processors and is not stored on our servers.
                    </li>
                    <li>
                      <strong className="text-brand-navy font-semibold">Communications:</strong> Records of correspondence, including emails, chat messages, meeting notes, and feedback you provide.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">b) Information Collected Automatically</h3>
                  <p>When you visit our Site, we may automatically collect:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      <strong className="text-brand-navy font-semibold">Device & Technical Data:</strong> IP address, browser type and version, operating system, device type, screen resolution, and language preferences.
                    </li>
                    <li>
                      <strong className="text-brand-navy font-semibold">Usage Data:</strong> Pages visited, time spent on pages, referring URLs, click patterns, search queries, and navigation paths.
                    </li>
                    <li>
                      <strong className="text-brand-navy font-semibold">Cookies & Tracking Technologies:</strong> We use cookies, web beacons, pixels, and similar technologies to enhance your experience and analyze Site performance (see Section 5 below).
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">c) Information from Third Parties</h3>
                  <p>
                    We may receive information about you from analytics providers, advertising networks, social media platforms, and publicly available sources to improve our marketing and Service delivery.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  2. How We Use Your Information
                </h2>
                <p>
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>To deliver, manage, and improve our Web Development, SEO, and AI Visibility Services.</li>
                  <li>To respond to inquiries, send quotes, and communicate about your projects.</li>
                  <li>To process payments and send invoices.</li>
                  <li>To send service updates, newsletters, and marketing communications (only where permitted).</li>
                  <li>To analyze website performance, user behavior, and campaign effectiveness.</li>
                  <li>To customize and personalize your experience on our Site.</li>
                  <li>To detect, prevent, and address fraud, security issues, and technical problems.</li>
                  <li>To comply with legal obligations and enforce our terms.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  3. Services-Specific Data Practices
                </h2>
                <p>
                  Given the nature of our work, please note the following:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-brand-navy font-semibold">Web Development:</strong> When developing or maintaining your website, we may access hosting accounts, content management systems, databases, and third-party integrations strictly to complete the project. Access credentials are handled confidentially and revoked upon project completion unless otherwise agreed.
                  </li>
                  <li>
                    <strong className="text-brand-navy font-semibold">SEO Services:</strong> We may collect and analyze data from search engines, analytics tools (such as Google Analytics, Google Search Console, Bing Webmaster Tools), and your existing platforms to optimize search rankings.
                  </li>
                  <li>
                    <strong className="text-brand-navy font-semibold">AI Visibility Services:</strong> To improve your brand&apos;s visibility across AI-powered search engines, large language models, and answer engines (such as ChatGPT, Perplexity, Gemini, and others), we may analyze publicly available content, structured data, knowledge graphs, and prompt-response patterns related to your brand. We do not submit personal client data to AI systems without prior consent.
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  4. Legal Basis for Processing
                </h2>
                <p>
                  We process your personal information based on one or more of the following legal grounds:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong className="text-brand-navy font-semibold">Consent:</strong> Where you have given us explicit permission.</li>
                  <li><strong className="text-brand-navy font-semibold">Contract:</strong> To perform a contract with you or take steps before entering into one.</li>
                  <li><strong className="text-brand-navy font-semibold">Legitimate Interests:</strong> To operate and improve our business, provided your rights do not override these interests.</li>
                  <li><strong className="text-brand-navy font-semibold">Legal Obligation:</strong> To comply with applicable laws and regulations.</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  5. Cookies and Tracking Technologies
                </h2>
                <p>
                  Our Site uses cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Remember your preferences and settings.</li>
                  <li>Understand how visitors interact with our Site.</li>
                  <li>Measure the effectiveness of our marketing campaigns.</li>
                  <li>Provide relevant content and advertisements.</li>
                </ul>
                <p>
                  You can control or disable cookies through your browser settings. However, disabling cookies may affect the functionality of certain features on our Site.
                </p>
                <p>
                  We may use third-party analytics and advertising tools, including but not limited to Google Analytics, Google Ads, Meta Pixel, and LinkedIn Insight Tag. These providers have their own privacy policies governing the use of such information.
                </p>
              </div>

              {/* Section 6 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  6. How We Share Your Information
                </h2>
                <p>
                  We do not sell your personal information. We may share your data with:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-brand-navy font-semibold">Service Providers:</strong> Trusted third parties who assist us with hosting, analytics, email delivery, payment processing, CRM, and project management. They are contractually obligated to protect your data.
                  </li>
                  <li>
                    <strong className="text-brand-navy font-semibold">Business Partners:</strong> Where collaboration is required to deliver Services you have requested.
                  </li>
                  <li>
                    <strong className="text-brand-navy font-semibold">Legal Authorities:</strong> When required by law, court order, or to protect our rights, property, or safety.
                  </li>
                  <li>
                    <strong className="text-brand-navy font-semibold">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  7. Data Retention
                </h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer required, we securely delete or anonymize it.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  8. Data Security
                </h2>
                <p>
                  We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, alteration, or destruction. These measures include encryption, access controls, secure servers, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 9 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  9. Your Rights
                </h2>
                <p>
                  Depending on your jurisdiction, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-brand-navy font-semibold">Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong className="text-brand-navy font-semibold">Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                  <li><strong className="text-brand-navy font-semibold">Deletion:</strong> Request deletion of your personal data, subject to legal exceptions.</li>
                  <li><strong className="text-brand-navy font-semibold">Restriction:</strong> Request restriction of processing under certain circumstances.</li>
                  <li><strong className="text-brand-navy font-semibold">Objection:</strong> Object to processing based on legitimate interests or direct marketing.</li>
                  <li><strong className="text-brand-navy font-semibold">Portability:</strong> Request transfer of your data to another service provider.</li>
                  <li><strong className="text-brand-navy font-semibold">Withdraw Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the details in Section 14. We will respond within a reasonable timeframe in accordance with applicable laws.
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  10. Third-Party Links
                </h2>
                <p>
                  Our Site may contain links to third-party websites or services. We are not responsible for the privacy practices or content of those third parties. We encourage you to review their privacy policies before sharing any personal information.
                </p>
              </div>

              {/* Section 11 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  11. Children&apos;s Privacy
                </h2>
                <p>
                  Our Services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can remove it.
                </p>
              </div>

              {/* Section 12 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  12. International Data Transfers
                </h2>
                <p>
                  If you are accessing our Services from outside India, please be aware that your information may be transferred to, stored, and processed in India or other countries where our service providers operate. By using our Services, you consent to such transfers in accordance with this policy and applicable law.
                </p>
              </div>

              {/* Section 13 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  13. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The updated policy will be posted on this page with a revised &quot;Last Updated&quot; date. We encourage you to review this policy periodically.
                </p>
              </div>

              {/* Section 14 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  14. Contact Us
                </h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 font-mono text-xs sm:text-sm space-y-2 mt-4 max-w-md">
                  <p><strong className="text-brand-navy font-semibold">NeoKlics DigiTech</strong></p>
                  <p><strong className="text-brand-navy font-semibold">Website:</strong> www.neoklicksdigitech.com</p>
                  <p><strong className="text-brand-navy font-semibold">Email:</strong> team@neoklicksdigitech.com</p>
                  <p><strong className="text-brand-navy font-semibold">Phone:</strong> +91 93099 52393</p>
                  <p><strong className="text-brand-navy font-semibold">Address:</strong> Panchavati, Nashik, Maharashtra</p>
                </div>
              </div>

              <div className="pt-8 text-center text-xs text-slate-400 border-t border-slate-100 italic">
                By using our Site or Services, you acknowledge that you have read, understood, and agree to this Privacy Policy.
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
