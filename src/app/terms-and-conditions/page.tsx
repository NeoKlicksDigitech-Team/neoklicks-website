import React from "react";
import { Metadata } from "next";
import { FileText, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | NeoKlicks DigiTech",
  description: "Terms and conditions governing the use of NeoKlicks DigiTech website and services.",
};

export default function TermsAndConditionsPage() {
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
                <FileText className="h-4 w-4" /> Legal Document
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy tracking-tight">
                Terms and Conditions
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
                These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the website{" "}
                <a href="https://www.neoklicksdigitech.com" className="text-brand-orange hover:underline font-medium">www.neoklicksdigitech.com</a> (the &quot;Site&quot;) and the
                services provided by NeoKlics DigiTech (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), including Web Development,
                Search Engine Optimization (SEO), and AI Visibility services (collectively, the &quot;Services&quot;).
              </p>
              <p>
                By accessing our Site, engaging our Services, or signing a project proposal with us, you (&quot;Client,&quot;
                &quot;you,&quot; or &quot;your&quot;) agree to be bound by these Terms. If you do not agree, please do not use our Site
                or Services.
              </p>

              {/* Section 1 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  1. Definitions
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-brand-navy font-semibold">&quot;Agreement&quot;</strong> refers to these Terms together with any proposal, quote, or service order signed between the Client and NeoKlics DigiTech.
                  </li>
                  <li>
                    <strong className="text-brand-navy font-semibold">&quot;Deliverables&quot;</strong> means the websites, code, reports, content, designs, strategies, and any other materials produced by us for the Client under a project.
                  </li>
                  <li>
                    <strong className="text-brand-navy font-semibold">&quot;Client Materials&quot;</strong> means content, brand assets, credentials, data, and any other materials supplied by the Client for use in the Services.
                  </li>
                  <li>
                    <strong className="text-brand-navy font-semibold">&quot;Project&quot;</strong> means the specific engagement described in a signed proposal, quote, or scope of work.
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  2. Services Offered
                </h2>
                <p>
                  NeoKlics DigiTech provides digital services including but not limited to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-brand-navy font-semibold">Web Development:</strong> Design, development, deployment, and maintenance of websites, web applications, and e-commerce platforms.
                  </li>
                  <li>
                    <strong className="text-brand-navy font-semibold">Search Engine Optimization (SEO):</strong> On-page, off-page, and technical SEO services to improve organic visibility on search engines such as Google and Bing.
                  </li>
                  <li>
                    <strong className="text-brand-navy font-semibold">AI Visibility:</strong> Optimization of brand presence and content for discovery within AI-powered search engines, large language models, and answer engines such as ChatGPT, Perplexity, Google Gemini, and similar platforms.
                  </li>
                </ul>
                <p>
                  The exact scope, deliverables, timelines, and fees for each engagement will be defined in a separate written proposal, quote, or statement of work agreed upon by both parties.
                </p>
              </div>

              {/* Section 3 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  3. Eligibility
                </h2>
                <p>
                  By using our Services, you represent and warrant that you are at least 18 years old and have the legal authority to enter into a binding agreement on behalf of yourself or the organization you represent.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  4. Client Responsibilities
                </h2>
                <p>
                  To enable us to deliver the Services effectively, you agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide accurate, complete, and timely information, content, and materials required for the project.</li>
                  <li>Grant us necessary access to hosting accounts, domain registrars, CMS platforms, analytics tools, advertising accounts, and other systems as needed.</li>
                  <li>Review and respond to deliverables, drafts, and approval requests within agreed timeframes.</li>
                  <li>Ensure that all Client Materials supplied do not infringe on any third party&apos;s intellectual property, privacy, or other legal rights.</li>
                  <li>Make timely payments in accordance with the agreed schedule.</li>
                </ul>
                <p>
                  Delays caused by the Client (including delayed feedback, content, or approvals) may result in revised project timelines and may incur additional fees.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  5. Quotes, Fees, and Payment
                </h2>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">a) Quotes and Proposals</h3>
                  <p>
                    All quotes and proposals are valid for thirty (30) days from the date of issue unless stated otherwise. Fees are based on the scope outlined in the proposal; any changes to scope may result in revised pricing.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">b) Payment Terms</h3>
                  <p>
                    Unless otherwise agreed in writing:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>A non-refundable advance of 50% of the project fee is required before work commences.</li>
                    <li>The remaining balance is payable upon project completion and before final delivery or website handover.</li>
                    <li>Retainer or recurring services (such as SEO and AI Visibility) are billed monthly in advance.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">c) Late Payments</h3>
                  <p>
                    Invoices not paid within fifteen (15) days of the due date may attract a late payment fee of 2% per month. We reserve the right to pause or suspend ongoing work, hosting, or deliverables until outstanding payments are cleared.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">d) Taxes</h3>
                  <p>
                    All fees are exclusive of applicable taxes, including GST, which will be charged additionally as per Indian tax laws.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">e) Refunds</h3>
                  <p>
                    Advance payments and fees for completed work are non-refundable. Refunds for unutilized portions of recurring services may be considered on a case-by-case basis at our sole discretion.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  6. Project Timelines and Delivery
                </h2>
                <p>
                  Estimated project timelines are shared in good faith based on the scope and Client cooperation. We are not liable for delays caused by:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Late feedback, content, or approvals from the Client.</li>
                  <li>Changes in project scope or additional requests outside the original agreement.</li>
                  <li>Issues with third-party platforms, hosting providers, plugins, APIs, or tools.</li>
                  <li>Force majeure events (see Section 15).</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  7. Revisions and Approvals
                </h2>
                <p>
                  The number of revisions included in each project will be specified in the proposal. Additional revisions beyond the agreed scope will be billed separately at our standard hourly rate.
                </p>
                <p>
                  Once a deliverable is approved by the Client (in writing, via email, or through a project management tool), any subsequent changes will be treated as additional scope.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  8. Intellectual Property
                </h2>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">a) Client Ownership</h3>
                  <p>
                    Upon full payment, the Client shall own the final, approved Deliverables created specifically for the Project, including custom design files, code, and content, except for any third-party assets, open-source components, pre-existing tools, frameworks, libraries, or templates incorporated into the work.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">b) Our Retained Rights</h3>
                  <p>
                    We retain ownership of:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Pre-existing intellectual property, methodologies, frameworks, and code libraries used in the project.</li>
                    <li>Internal tools, scripts, working files, and processes developed in the course of business.</li>
                    <li>The right to display non-confidential portions of the Deliverables in our portfolio, case studies, and marketing materials, unless the Client requests otherwise in writing.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">c) Client Materials</h3>
                  <p>
                    The Client retains ownership of all Client Materials and grants us a non-exclusive license to use them solely for the purposes of delivering the Services.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  9. Confidentiality
                </h2>
                <p>
                  Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement, including business strategies, financial information, customer data, and trade secrets. This obligation continues even after the engagement ends.
                </p>
                <p>
                  Confidential information does not include information that: (i) is publicly available, (ii) was already known to the receiving party, or (iii) is required to be disclosed by law.
                </p>
              </div>

              {/* Section 10 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  10. Third-Party Services and Tools
                </h2>
                <p>
                  Our Services may rely on third-party platforms, APIs, plugins, hosting providers, search engines, and AI platforms. We are not responsible for:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Outages, errors, policy changes, deprecations, or pricing changes by third-party providers.</li>
                  <li>Data loss, security breaches, or downtime caused by third-party systems.</li>
                  <li>Compatibility issues arising from updates to browsers, devices, plugins, or platforms after delivery.</li>
                </ul>
                <p>
                  Any fees charged by third-party providers (such as hosting, domains, premium plugins, paid tools, or advertising budgets) are the Client&apos;s responsibility unless explicitly included in our quote.
                </p>
              </div>

              {/* Section 11 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  11. SEO and AI Visibility Disclaimer
                </h2>
                <p>
                  SEO and AI Visibility involve external factors beyond our control, including search engine algorithms, AI model updates, competitor activity, market conditions, and changes in user behavior. While we apply industry best practices and ethical optimization techniques, we make the following clarifications:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>We do not guarantee specific rankings, traffic volumes, conversions, citations within AI-generated answers, or business outcomes.</li>
                  <li>Search engines and AI platforms (such as Google, Bing, ChatGPT, Perplexity, and Gemini) may change their algorithms, indexing methods, or visibility logic at any time, which may impact performance.</li>
                  <li>Reported metrics are based on data available from third-party tools and platforms, and we are not responsible for inaccuracies in such third-party data.</li>
                  <li>Results often take time to materialize, typically 3–6 months for SEO and AI Visibility campaigns.</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  12. Warranties and Disclaimers
                </h2>
                <p>
                  We will perform the Services with reasonable skill, care, and professionalism. However, the Services and Deliverables are provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind, whether express or implied, including but not limited to merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                <p>
                  We do not warrant that the Site or any Deliverables will be uninterrupted, error-free, or completely secure.
                </p>
              </div>

              {/* Section 13 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  13. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by law, NeoKlics DigiTech shall not be liable for any:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Indirect, incidental, special, consequential, exemplary, or punitive damages.</li>
                  <li>Loss of profits, revenue, business opportunities, goodwill, or data.</li>
                  <li>Damages arising from third-party actions, platform changes, or force majeure events.</li>
                </ul>
                <p>
                  Our total aggregate liability for any claim arising out of or related to the Services shall not exceed the total fees paid by the Client for the specific Project giving rise to the claim during the three (3) months immediately preceding the event giving rise to liability.
                </p>
              </div>

              {/* Section 14 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  14. Indemnification
                </h2>
                <p>
                  The Client agrees to indemnify, defend, and hold harmless NeoKlics DigiTech, its directors, employees, contractors, and partners from any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Content, materials, or instructions provided by the Client.</li>
                  <li>Misuse of the Deliverables or Services by the Client.</li>
                  <li>Breach of these Terms or any applicable law by the Client.</li>
                </ul>
              </div>

              {/* Section 15 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  15. Force Majeure
                </h2>
                <p>
                  Neither party shall be liable for any failure or delay in performance due to causes beyond their reasonable control, including but not limited to acts of God, natural disasters, pandemics, government actions, internet outages, cyberattacks, war, or strikes.
                </p>
              </div>

              {/* Section 16 */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  16. Termination
                </h2>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">a) Termination by the Client</h3>
                  <p>
                    The Client may terminate ongoing services with fifteen (15) days written notice. Any outstanding fees for work completed up to the termination date must be paid in full.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">b) Termination by Us</h3>
                  <p>
                    We reserve the right to suspend or terminate Services with notice if the Client:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Fails to make timely payments.</li>
                    <li>Breaches any provision of these Terms.</li>
                    <li>Engages in abusive, unlawful, or unethical conduct.</li>
                    <li>Provides false information or attempts to misuse the Services.</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold font-display text-brand-navy">c) Effect of Termination</h3>
                  <p>
                    Upon termination, all unpaid amounts become immediately due. We will hand over Deliverables for which payment has been received in full. We reserve the right to withhold incomplete work, source files, or credentials until all outstanding dues are cleared.
                  </p>
                </div>
              </div>

              {/* Section 17 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  17. No Resale or Sub-licensing
                </h2>
                <p>
                  Unless agreed in writing, the Client shall not resell, sub-license, or redistribute our Services, methodologies, or Deliverables to third parties.
                </p>
              </div>

              {/* Section 18 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  18. Modifications to the Services
                </h2>
                <p>
                  We reserve the right to modify, update, or discontinue parts of our Services or Site at any time without prior notice. We will make reasonable efforts to inform existing clients of changes that materially affect ongoing engagements.
                </p>
              </div>

              {/* Section 19 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  19. Governing Law and Dispute Resolution
                </h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall first be attempted to be resolved amicably. If unresolved, disputes shall be subject to the exclusive jurisdiction of the courts located in Nashik, Maharashtra.
                </p>
              </div>

              {/* Section 20 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  20. Changes to These Terms
                </h2>
                <p>
                  We may update these Terms from time to time. The revised version will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of our Site or Services after such changes constitutes acceptance of the revised Terms.
                </p>
              </div>

              {/* Section 21 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  21. Entire Agreement
                </h2>
                <p>
                  These Terms, together with any signed proposal, quote, or statement of work, constitute the entire agreement between the parties and supersede all prior agreements, understandings, or communications, whether written or oral.
                </p>
              </div>

              {/* Section 22 */}
              <div className="space-y-3 pt-4">
                <h2 className="text-xl font-bold font-display text-brand-navy border-b border-slate-100 pb-2">
                  22. Contact Us
                </h2>
                <p>
                  For any questions, concerns, or clarifications regarding these Terms and Conditions, please contact us:
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
                By engaging our Services or using our Site, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
