import React from "react";
import { notFound } from "next/navigation";
import { Metadata, Viewport } from "next";
import { 
  Cpu, Globe, Search, ShoppingBag, TrendingUp, Palette, ShieldCheck,
  ClipboardList, Lightbulb, LayoutGrid, Code, Rocket, Share2
} from "lucide-react";
import ServicePageClient, { ClientServiceDetail } from "@/components/ServicePageClient";

const servicesDetailMap: Record<string, ClientServiceDetail> = {
  "web-development": {
    title: "Web Development",
    tagline: "High-Performance, Secure, and Custom Websites.",
    intro: "We design and build custom websites tailored to your business needs. Our websites are built from the ground up to be fast, secure, search-engine friendly, and easy to navigate for your customers.",
    deliverables: [
      "Custom website design and development",
      "Fully responsive layouts (optimized for mobile, tablet, and desktop)",
      "Fast loading speeds for better customer experience",
      "Easy-to-use content management systems",
      "Complete search engine optimization readiness",
      "Secure coding standards to protect your business data"
    ],
    metric: "< 1.5 seconds",
    metricLabel: "Average Interactive Load Time",
    icon: <Globe className="h-10 w-10 text-brand-orange" />,
    eyebrow: "⚡ Custom Web Development Services",
    heroTitle: <>Website Development in <span className="gradient-text">Nashik, India</span></>,
    cardLabel1: "Modern UI/UX",
    cardDesc1: "Conversion-Focused",
    cardLabel2: "Fast Delivery",
    cardDesc2: "Sub-2s Load Target",
    counters: [
      { value: "5+", label: "Years of Expertise" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "100/100", label: "Avg PageSpeed Score" }
    ]
  },
  "ai-ml-solutions": {
    title: "Business Automation & Systems",
    tagline: "Streamline Your Operations and Save Time with Intelligent Workflows.",
    intro: "We help you automate repetitive tasks, connect different software platforms, and build smart tools that handle data processing, customer queries, and business reporting automatically.",
    deliverables: [
      "Custom automation scripts to connect your software",
      "Intelligent chatbots for customer support",
      "Automatic data entry and processing systems",
      "Smart search tools for internal company documents",
      "Integration of machine learning and natural language tools",
      "Custom dashboards to track automated tasks"
    ],
    metric: "Over 80%",
    metricLabel: "Manual Task Automation Rate",
    icon: <Cpu className="h-10 w-10 text-brand-pink" />,
    eyebrow: "🤖 AI & Automation Solutions",
    heroTitle: <>AI/ML & Automation Services in <span className="gradient-text">Nashik</span></>,
    cardLabel1: "Custom AI",
    cardDesc1: "Tailored Workflows",
    cardLabel2: "99.9% Reliable",
    cardDesc2: "Hands-off Operations",
    counters: [
      { value: "Over 80%", label: "Manual Task Automation" },
      { value: "24/7/365", label: "Automated Systems Active" },
      { value: "10x+", label: "Execution Speed Increase" }
    ],
    processTitle: <>Our 6-Step Automation <span className="gradient-text">Process</span></>,
    processSubtitle: "A structured approach to auditing operations, scripting intelligent flows, and deploying secure AI pipelines.",
    processEyebrow: "⚙ AI WORKFLOW",
    processSteps: [
      {
        number: "01",
        title: "Process Audit",
        description: "We analyze your team's repetitive tasks, manual data entries, and workflow bottlenecks.",
        icon: <ClipboardList className="h-5 w-5" />,
        iconColorClass: "text-brand-pink bg-brand-pink/5 border border-brand-pink/15",
      },
      {
        number: "02",
        title: "System Design",
        description: "We map data models, API integrations, and select the optimal AI/LLM model architectures.",
        icon: <Lightbulb className="h-5 w-5" />,
        iconColorClass: "text-blue-500 bg-blue-500/5 border border-blue-500/15",
      },
      {
        number: "03",
        title: "Prototype Flow",
        description: "We build proof-of-concept scripts and dry-run automated tasks to verify accuracy.",
        icon: <LayoutGrid className="h-5 w-5" />,
        iconColorClass: "text-emerald-500 bg-emerald-500/5 border border-emerald-500/15",
      },
      {
        number: "04",
        title: "Secure Pipeline",
        description: "We write clean integration code, handle API authentication, and encrypt sensitive data.",
        icon: <Palette className="h-5 w-5" />,
        iconColorClass: "text-purple-500 bg-purple-500/5 border border-purple-500/15",
      },
      {
        number: "05",
        title: "Agent Training",
        description: "We customize LLM system prompts, connect knowledge bases, and run agent testing.",
        icon: <Code className="h-5 w-5" />,
        iconColorClass: "text-teal-500 bg-teal-500/5 border border-teal-500/15",
      },
      {
        number: "06",
        title: "Deploy & Monitor",
        description: "Go-live on secure servers with real-time logging, alert triggers, and maintenance.",
        icon: <Rocket className="h-5 w-5" />,
        iconColorClass: "text-brand-orange bg-brand-orange/5 border border-brand-orange/15",
      },
    ]
  },
  "e-commerce": {
    title: "E-Commerce Storefronts",
    tagline: "Turn Visitors into Buyers with a High-Performing Online Store.",
    intro: "Create high-performance shopping experiences that capture sales and retain clients. We handle the entire catalog, shopping cart, checkout, and payment processing setups.",
    deliverables: [
      "Custom online store design",
      "Fast, secure, and simple checkout process",
      "Integration with secure payment gateways (Stripe, Razorpay, etc.)",
      "Product inventory and catalog management systems",
      "Mobile-friendly shopping experience",
      "Automated order and stock synchronization"
    ],
    metric: "Up to 3.4x",
    metricLabel: "Average E-Commerce Conversion Lift",
    icon: <ShoppingBag className="h-10 w-10 text-brand-orange" />,
    eyebrow: "🛒 High-Conversion E-Commerce",
    heroTitle: <>E-Commerce Development in <span className="gradient-text">Nashik</span></>,
    cardLabel1: "Optimized Checkout",
    cardDesc1: "Minimal Abandonment",
    cardLabel2: "Secure Payments",
    cardDesc2: "Stripe & Razorpay Ready",
    counters: [
      { value: "Up to 3.4x", label: "Average Conversion Lift" },
      { value: "100%", label: "Mobile Responsive Design" },
      { value: "< 1s", label: "Add-to-Cart Latency" }
    ],
    processTitle: <>Our 6-Step E-Commerce <span className="gradient-text">Process</span></>,
    processSubtitle: "A proven roadmap to building high-converting, lightning-fast, and secure shopping storefronts.",
    processEyebrow: "⚙ STORE SETUP",
    processSteps: [
      {
        number: "01",
        title: "Catalog Strategy",
        description: "We analyze product categories, variant attributes, and customer buying personas.",
        icon: <ClipboardList className="h-5 w-5" />,
        iconColorClass: "text-brand-pink bg-brand-pink/5 border border-brand-pink/15",
      },
      {
        number: "02",
        title: "Checkout Planning",
        description: "We optimize checkout funnels, tax calculation systems, and shipping rules.",
        icon: <Lightbulb className="h-5 w-5" />,
        iconColorClass: "text-blue-500 bg-blue-500/5 border border-blue-500/15",
      },
      {
        number: "03",
        title: "Visual Design",
        description: "We craft responsive store layouts, cart designs, and interactive collection filters.",
        icon: <LayoutGrid className="h-5 w-5" />,
        iconColorClass: "text-emerald-500 bg-emerald-500/5 border border-emerald-500/15",
      },
      {
        number: "04",
        title: "Platform Build",
        description: "We develop secure backend schemas, sync inventories, and connect product APIs.",
        icon: <Palette className="h-5 w-5" />,
        iconColorClass: "text-purple-500 bg-purple-500/5 border border-purple-500/15",
      },
      {
        number: "05",
        title: "Payment Sync",
        description: "We configure payment gateways (Stripe, Razorpay) with absolute fraud protection.",
        icon: <Code className="h-5 w-5" />,
        iconColorClass: "text-teal-500 bg-teal-500/5 border border-teal-500/15",
      },
      {
        number: "06",
        title: "Launch & Scale",
        description: "Indexing product feeds for SEO, configuring analytics, and scaling hosting server capacity.",
        icon: <Rocket className="h-5 w-5" />,
        iconColorClass: "text-brand-orange bg-brand-orange/5 border border-brand-orange/15",
      },
    ]
  },
  "seo": {
    title: "Search Engine Optimization (SEO)",
    tagline: "Get Found by Customers Who Are Actively Searching for You.",
    intro: "We optimize your website's structure, speed, and content so that search engines like Google rank it higher, bringing free organic traffic to your business.",
    deliverables: [
      "In-depth keyword research for your business",
      "Technical site audits and speed enhancements",
      "On-page content optimization and structure planning",
      "Google Search Console and Analytics setup",
      "Local SEO optimization to find local customers",
      "Monthly keyword performance tracking and reports"
    ],
    metric: "Page 1 Rank",
    metricLabel: "Target for High-Intent Queries",
    icon: <Search className="h-10 w-10 text-blue-500" />,
    eyebrow: "📈 Strategic SEO Services",
    heroTitle: <>SEO Services in <span className="gradient-text">Nashik, India</span></>,
    cardLabel1: "Targeted Keywords",
    cardDesc1: "High-Intent Buyers",
    cardLabel2: "Technical SEO",
    cardDesc2: "Rank Factors Checked",
    counters: [
      { value: "Page 1 Rank", label: "Target for Main Queries" },
      { value: "4.8x+", label: "Avg Organic Traffic Boost" },
      { value: "100%", label: "Google Search Console Setup" }
    ],
    processTitle: <>Our 6-Step SEO <span className="gradient-text">Framework</span></>,
    processSubtitle: "Our systematic method to audit keywords, optimize technical speed, and rank page one on Google.",
    processEyebrow: "⚙ RANKING PROCESS",
    processSteps: [
      {
        number: "01",
        title: "Keyword Search",
        description: "We identify high-volume, high-intent terms your customers use to find services.",
        icon: <ClipboardList className="h-5 w-5" />,
        iconColorClass: "text-brand-pink bg-brand-pink/5 border border-brand-pink/15",
      },
      {
        number: "02",
        title: "Technical Audit",
        description: "We review site speed, Core Web Vitals, indexability, XML sitemaps, and structure.",
        icon: <Lightbulb className="h-5 w-5" />,
        iconColorClass: "text-blue-500 bg-blue-500/5 border border-blue-500/15",
      },
      {
        number: "03",
        title: "On-Page Fixes",
        description: "We optimize headings, title tags, page layouts, image formats, and schema markups.",
        icon: <LayoutGrid className="h-5 w-5" />,
        iconColorClass: "text-emerald-500 bg-emerald-500/5 border border-emerald-500/15",
      },
      {
        number: "04",
        title: "Content Strategy",
        description: "We map structured content clusters to address search intent and build domain authority.",
        icon: <Palette className="h-5 w-5" />,
        iconColorClass: "text-purple-500 bg-purple-500/5 border border-purple-500/15",
      },
      {
        number: "05",
        title: "Console Integration",
        description: "We set up Google Analytics and Search Console to track keyword ranks and indexing.",
        icon: <Code className="h-5 w-5" />,
        iconColorClass: "text-teal-500 bg-teal-500/5 border border-teal-500/15",
      },
      {
        number: "06",
        title: "Monthly Analytics",
        description: "Continuous tracking of rankings, link building, competitor movement, and traffic reports.",
        icon: <Rocket className="h-5 w-5" />,
        iconColorClass: "text-brand-orange bg-brand-orange/5 border border-brand-orange/15",
      },
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing & Lead Generation",
    tagline: "Scale Your Sales with Highly Targeted Online Ad Campaigns.",
    intro: "Performance-oriented digital marketing campaigns built on exact analytics. We launch, monitor, and scale ad campaigns across search and social networks designed to maximize ROI.",
    deliverables: [
      "Google Ads campaign setup and management",
      "Meta (Facebook & Instagram) ad campaigns",
      "LinkedIn B2B ad campaigns",
      "High-converting landing page designs",
      "Audience targeting and remarketing setup",
      "Detailed ROI tracking and performance reports"
    ],
    metric: "25%+ reduction",
    metricLabel: "Cost Per Lead / Acquisition (CPA)",
    icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
    eyebrow: "🚀 Performance Marketing",
    heroTitle: <>Digital Marketing Services in <span className="gradient-text">Nashik</span></>,
    cardLabel1: "Precise Targeting",
    cardDesc1: "Minimized Ad Waste",
    cardLabel2: "Transparent ROI",
    cardDesc2: "Real-time Lead Reports",
    counters: [
      { value: "25%+", label: "Cost Per Lead Reduction" },
      { value: "3.2x", label: "Average Ad Spend Return" },
      { value: "10k+", label: "Leads Generated Annually" }
    ],
    processTitle: <>Our 6-Step Marketing <span className="gradient-text">Strategy</span></>,
    processSubtitle: "How we plan, set up, test, launch, optimize, and scale campaigns to lower CPL and boost ROI.",
    processEyebrow: "⚙ CAMPAIGN PROCESS",
    processSteps: [
      {
        number: "01",
        title: "Audience Persona",
        description: "We research your ideal buyer demographics, pain points, and competitors' ads.",
        icon: <ClipboardList className="h-5 w-5" />,
        iconColorClass: "text-brand-pink bg-brand-pink/5 border border-brand-pink/15",
      },
      {
        number: "02",
        title: "Funnel Architecture",
        description: "We design landing pages, lead capture forms, and target conversion events.",
        icon: <Lightbulb className="h-5 w-5" />,
        iconColorClass: "text-blue-500 bg-blue-500/5 border border-blue-500/15",
      },
      {
        number: "03",
        title: "Creative Copy",
        description: "We write high-impact ad copies and design engaging visual asset creatives.",
        icon: <LayoutGrid className="h-5 w-5" />,
        iconColorClass: "text-emerald-500 bg-emerald-500/5 border border-emerald-500/15",
      },
      {
        number: "04",
        title: "Pixel Integration",
        description: "We deploy Meta pixel, Google tag manager, and server-side tracking APIs.",
        icon: <Palette className="h-5 w-5" />,
        iconColorClass: "text-purple-500 bg-purple-500/5 border border-purple-500/15",
      },
      {
        number: "05",
        title: "A/B Testing",
        description: "We split-test headlines, visual formats, and demographic targeting parameters.",
        icon: <Code className="h-5 w-5" />,
        iconColorClass: "text-teal-500 bg-teal-500/5 border border-teal-500/15",
      },
      {
        number: "06",
        title: "Scale & Optimize",
        description: "We scale budget on top-performing ad sets and continuously optimize CPA results.",
        icon: <Rocket className="h-5 w-5" />,
        iconColorClass: "text-brand-orange bg-brand-orange/5 border border-brand-orange/15",
      },
    ]
  },
  "meta-ads": {
    title: "Meta Ads & Social Media Marketing",
    tagline: "Drive High-Converting Facebook & Instagram Ad Campaigns That Scale Revenue.",
    intro: "We design, build, and optimize performance-driven Meta (Facebook & Instagram) advertising campaigns. From custom audience segmentation to scroll-stopping creatives and Meta Pixel tracking, we help your business capture leads and grow online sales.",
    deliverables: [
      "Facebook & Instagram Ad Campaign Setup & Strategy",
      "Custom Audience Targeting & Lookalike Audience Modeling",
      "Scroll-Stopping Visual Creatives & Direct-Response Copywriting",
      "Meta Pixel & Server-Side Conversions API (CAPI) Tracking",
      "Continuous A/B Split-Testing of Visuals & Headlines",
      "Real-Time ROAS, CPA, and Conversion Performance Reports"
    ],
    metric: "4.5x+ ROAS",
    metricLabel: "Target Return on Ad Spend for Active Campaigns",
    icon: <Share2 className="h-10 w-10 text-blue-600" />,
    eyebrow: "🎯 Meta Ads & Social Marketing",
    heroTitle: <>Meta Ads & Social Marketing in <span className="gradient-text">Nashik</span></>,
    cardLabel1: "Precision Targeting",
    cardDesc1: "Custom & Lookalike Audiences",
    cardLabel2: "Pixel & CAPI Setup",
    cardDesc2: "100% Verified Tracking",
    counters: [
      { value: "4.5x+", label: "Average Campaign ROAS" },
      { value: "35%+", label: "Conversion Lift Rate" },
      { value: "< 24 hrs", label: "Campaign Setup & Go-Live" }
    ],
    processTitle: <>Our 6-Step Meta Ads <span className="gradient-text">Framework</span></>,
    processSubtitle: "A proven data-driven process to research, craft, track, test, and scale Facebook & Instagram ad campaigns.",
    processEyebrow: "⚙ META ADS LIFECYCLE",
    processSteps: [
      {
        number: "01",
        title: "Audience & Competitor Audit",
        description: "We analyze your ideal customer demographics, buyer pain points, and competitor ad hooks.",
        icon: <ClipboardList className="h-5 w-5" />,
        iconColorClass: "text-brand-pink bg-brand-pink/5 border border-brand-pink/15",
      },
      {
        number: "02",
        title: "Funnel Strategy",
        description: "We design multi-stage ad funnels (Top/Middle/Bottom of Funnel) to nurture prospects into buyers.",
        icon: <Lightbulb className="h-5 w-5" />,
        iconColorClass: "text-blue-500 bg-blue-500/5 border border-blue-500/15",
      },
      {
        number: "03",
        title: "Ad Creative & Copy",
        description: "We create scroll-stopping visual assets (carousel, video, image) and high-converting copy.",
        icon: <LayoutGrid className="h-5 w-5" />,
        iconColorClass: "text-emerald-500 bg-emerald-500/5 border border-emerald-500/15",
      },
      {
        number: "04",
        title: "Pixel & CAPI Setup",
        description: "We configure Meta Pixel, Server-side Conversions API (CAPI), and custom event tracking.",
        icon: <Palette className="h-5 w-5" />,
        iconColorClass: "text-purple-500 bg-purple-500/5 border border-purple-500/15",
      },
      {
        number: "05",
        title: "A/B Testing",
        description: "We launch split tests across headlines, call-to-actions, visual assets, and target audiences.",
        icon: <Code className="h-5 w-5" />,
        iconColorClass: "text-teal-500 bg-teal-500/5 border border-teal-500/15",
      },
      {
        number: "06",
        title: "ROAS Scaling",
        description: "We reallocate budget to winning ad sets, lower Cost-Per-Acquisition (CPA), and scale revenue.",
        icon: <Rocket className="h-5 w-5" />,
        iconColorClass: "text-brand-orange bg-brand-orange/5 border border-brand-orange/15",
      },
    ]
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    tagline: "Beautiful and User-Friendly Visual Designs for Your Apps & Websites.",
    intro: "We design digital interfaces that are visually stunning and intuitive. We focus on how users interact with your site, ensuring they find what they need with zero confusion.",
    deliverables: [
      "Interactive wireframes and layout structures",
      "Premium visual designs and brand styles",
      "Clickable prototypes to preview the layout",
      "Mobile-first responsive interface designs",
      "Brand logos and asset styling",
      "Accessibility check for clear reading"
    ],
    metric: "Zero Friction",
    metricLabel: "Focus on UI Flow Clarity",
    icon: <Palette className="h-10 w-10 text-purple-500" />,
    eyebrow: "🎨 Premium UI/UX Design",
    heroTitle: <>UI/UX Design Services in <span className="gradient-text">Nashik</span></>,
    cardLabel1: "Figma Ready",
    cardDesc1: "Complete Design Systems",
    cardLabel2: "Zero Friction",
    cardDesc2: "Intuitive User Flows",
    counters: [
      { value: "Zero", label: "User Flow Friction" },
      { value: "100%", label: "Pixel-Perfect Hand-off" },
      { value: "98%", label: "User Satisfaction Rate" }
    ],
    processTitle: <>Our 6-Step UI/UX <span className="gradient-text">Process</span></>,
    processSubtitle: "How we craft intuitive, visually stunning, and highly engaging layouts for apps and web.",
    processEyebrow: "⚙ UX METHODOLOGY",
    processSteps: [
      {
        number: "01",
        title: "User Research",
        description: "We study user behaviors, map key user paths, and outline functional requirements.",
        icon: <ClipboardList className="h-5 w-5" />,
        iconColorClass: "text-brand-pink bg-brand-pink/5 border border-brand-pink/15",
      },
      {
        number: "02",
        title: "Information Flow",
        description: "We draft the layout maps, content hierarchy, and screen routing structures.",
        icon: <Lightbulb className="h-5 w-5" />,
        iconColorClass: "text-blue-500 bg-blue-500/5 border border-blue-500/15",
      },
      {
        number: "03",
        title: "Wireframing",
        description: "We build black-and-white Figma wireframes to focus on clean structure and UX flow.",
        icon: <LayoutGrid className="h-5 w-5" />,
        iconColorClass: "text-emerald-500 bg-emerald-500/5 border border-emerald-500/15",
      },
      {
        number: "04",
        title: "Design System",
        description: "We create color systems, typography tokens, grid guidelines, and component libraries.",
        icon: <Palette className="h-5 w-5" />,
        iconColorClass: "text-purple-500 bg-purple-500/5 border border-purple-500/15",
      },
      {
        number: "05",
        title: "High-Fi Design",
        description: "We design final mockup interfaces, custom asset styling, and visual elements.",
        icon: <Code className="h-5 w-5" />,
        iconColorClass: "text-teal-500 bg-teal-500/5 border border-teal-500/15",
      },
      {
        number: "06",
        title: "Clickable Prototype",
        description: "We deliver fully interactive, clickable prototype previews for your team.",
        icon: <Rocket className="h-5 w-5" />,
        iconColorClass: "text-brand-orange bg-brand-orange/5 border border-brand-orange/15",
      },
    ]
  },
  "custom-software": {
    title: "Custom Software & Dashboards",
    tagline: "Tailored Internal Software Built to Run Your Business Efficiently.",
    intro: "We build secure admin panels, internal team dashboards, and customer portals that solve specific operational challenges, helping your business run smoothly.",
    deliverables: [
      "Custom admin panels and CRMs",
      "Interactive dashboards to display business metrics",
      "Automated PDF, Excel, and CSV report downloads",
      "Secure login portals with role-based access",
      "Custom API integrations and database setups",
      "Automatic client notification systems"
    ],
    metric: "99.9% uptime",
    metricLabel: "Database & API Target Uptime",
    icon: <Cpu className="h-10 w-10 text-indigo-500" />,
    eyebrow: "💻 Custom Software & Apps",
    heroTitle: <>Custom Software Development in <span className="gradient-text">Nashik</span></>,
    cardLabel1: "Database Speed",
    cardDesc1: "Optimized Schema Queries",
    cardLabel2: "Role Security",
    cardDesc2: "Granular User Access",
    counters: [
      { value: "99.9%", label: "Target API Uptime" },
      { value: "12ms", label: "Average Query Latency" },
      { value: "100%", label: "Milestone-Based Shipped" }
    ],
    processTitle: <>Our 6-Step Software <span className="gradient-text">Process</span></>,
    processSubtitle: "A structured lifecycle for database schemas, secure admin panels, and tailormade internal tools.",
    processEyebrow: "⚙ SOFTWARE ENGINEERING",
    processSteps: [
      {
        number: "01",
        title: "Scope Mapping",
        description: "We outline operational features, role accesses, database needs, and project milestones.",
        icon: <ClipboardList className="h-5 w-5" />,
        iconColorClass: "text-brand-pink bg-brand-pink/5 border border-brand-pink/15",
      },
      {
        number: "02",
        title: "Schema Design",
        description: "We model database tables, primary keys, relational maps, and server configurations.",
        icon: <Lightbulb className="h-5 w-5" />,
        iconColorClass: "text-blue-500 bg-blue-500/5 border border-blue-500/15",
      },
      {
        number: "03",
        title: "API Architecture",
        description: "We design secure REST/GraphQL API structures, route handlers, and data feeds.",
        icon: <LayoutGrid className="h-5 w-5" />,
        iconColorClass: "text-emerald-500 bg-emerald-500/5 border border-emerald-500/15",
      },
      {
        number: "04",
        title: "Portal Coding",
        description: "We build interactive dashboards, custom analytics charts, and secure logins.",
        icon: <Palette className="h-5 w-5" />,
        iconColorClass: "text-purple-500 bg-purple-500/5 border border-purple-500/15",
      },
      {
        number: "05",
        title: "QA & Security",
        description: "We test for authentication exploits, performance lag, and run data export checks.",
        icon: <Code className="h-5 w-5" />,
        iconColorClass: "text-teal-500 bg-teal-500/5 border border-teal-500/15",
      },
      {
        number: "06",
        title: "Deployment",
        description: "Go-live on secure VPS/cloud platforms with automated database backups and logging.",
        icon: <Rocket className="h-5 w-5" />,
        iconColorClass: "text-brand-orange bg-brand-orange/5 border border-brand-orange/15",
      },
    ]
  },
  "maintenance-support": {
    title: "Maintenance & Support",
    tagline: "Keep Your Website Safe, Secure, and Running 24/7.",
    intro: "We provide ongoing monitoring, regular updates, and technical support to ensure your website or software stays secure, fast, and free of downtime.",
    deliverables: [
      "24/7 website uptime monitoring",
      "Automated daily database and files backup",
      "Regular security patches and software updates",
      "Continuous loading speed audits",
      "Instant bug fixing and styling changes",
      "Direct support access via chat/email"
    ],
    metric: "99.99%",
    metricLabel: "Production Hosting Uptime Target",
    icon: <ShieldCheck className="h-10 w-10 text-teal-500" />,
    eyebrow: "🛡 Server Maintenance & Support",
    heroTitle: <>Website Maintenance & Support in <span className="gradient-text">Nashik</span></>,
    cardLabel1: "Daily Backups",
    cardDesc1: "Off-site Secure Storage",
    cardLabel2: "Vulnerability Scans",
    cardDesc2: "Instant Bug Resolution",
    counters: [
      { value: "99.99%", label: "Production Hosting Uptime" },
      { value: "< 1 hr", label: "Average Bug Fix Window" },
      { value: "24/7/365", label: "Systems Monitoring Active" }
    ],
    processTitle: <>Our 6-Step Support <span className="gradient-text">Plan</span></>,
    processSubtitle: "Our continuous system to monitor server uptimes, patch security, backup databases, and patch bugs.",
    processEyebrow: "⚙ MAINTENANCE CYCLES",
    processSteps: [
      {
        number: "01",
        title: "System Audit",
        description: "We scan your hosting, database queries, SSL status, and package dependencies.",
        icon: <ClipboardList className="h-5 w-5" />,
        iconColorClass: "text-brand-pink bg-brand-pink/5 border border-brand-pink/15",
      },
      {
        number: "02",
        title: "Backup Pipelines",
        description: "We configure daily, automated, off-site database backups for absolute data recovery.",
        icon: <Lightbulb className="h-5 w-5" />,
        iconColorClass: "text-blue-500 bg-blue-500/5 border border-blue-500/15",
      },
      {
        number: "03",
        title: "Security Setup",
        description: "We install firewalls, block spam IPs, and encrypt all database user records.",
        icon: <LayoutGrid className="h-5 w-5" />,
        iconColorClass: "text-emerald-500 bg-emerald-500/5 border border-emerald-500/15",
      },
      {
        number: "04",
        title: "Patch Schedules",
        description: "Regular checks and updates to framework packages, node modules, and dependencies.",
        icon: <Palette className="h-5 w-5" />,
        iconColorClass: "text-purple-500 bg-purple-500/5 border border-purple-500/15",
      },
      {
        number: "05",
        title: "Bug Monitoring",
        description: "Real-time crash reports and error logging trigger instant support notifications.",
        icon: <Code className="h-5 w-5" />,
        iconColorClass: "text-teal-500 bg-teal-500/5 border border-teal-500/15",
      },
      {
        number: "06",
        title: "Continuous Tuning",
        description: "Ongoing CSS tweaks, content updates, and server resource optimization audits.",
        icon: <Rocket className="h-5 w-5" />,
        iconColorClass: "text-brand-orange bg-brand-orange/5 border border-brand-orange/15",
      },
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesDetailMap).map((slug) => ({
    slug: slug,
  }));
}

const seoMetadataMap: Record<string, {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogAlt: string;
  twitterTitle: string;
  twitterDescription: string;
  twitterAlt: string;
}> = {
  "ai-ml-solutions": {
    title: "AI/ML & Business Automation Services | NeoKlicks DigiTech Nashik",
    description: "Automate repetitive tasks, connect software platforms, and build smart AI/ML workflows with NeoKlicks DigiTech. Intelligent systems that save time and reduce operational costs for Indian businesses.",
    keywords: "AI ML solutions India, business automation Nashik, intelligent workflow automation, AI integration agency, machine learning solutions Maharashtra, process automation India",
    canonical: "https://neoklicksdigitech.com/services/ai-ml-solutions",
    ogTitle: "AI/ML & Business Automation | Intelligent Workflows – NeoKlicks DigiTech",
    ogDescription: "Save time and cut costs with intelligent automation from NeoKlicks DigiTech. We build AI/ML workflows that connect your tools and automate repetitive operations.",
    ogAlt: "AI/ML & Automation Services – NeoKlicks DigiTech",
    twitterTitle: "AI/ML & Business Automation | NeoKlicks DigiTech",
    twitterDescription: "Intelligent workflows, AI integrations, and business automation for Indian businesses. NeoKlicks DigiTech, Nashik.",
    twitterAlt: "NeoKlicks DigiTech – AI & Automation Services",
  },
  "custom-software": {
    title: "Custom Software & Dashboards | NeoKlicks DigiTech Nashik",
    description: "NeoKlicks DigiTech builds secure admin panels, internal dashboards, CRMs, and customer portals tailored to your operational needs. Custom software solutions for Indian businesses.",
    keywords: "custom software development India, admin panel development, CRM development Nashik, internal dashboard development, custom web application Maharashtra, business portal development",
    canonical: "https://neoklicksdigitech.com/services/custom-software",
    ogTitle: "Custom Software & Dashboards | Tailored for Your Business – NeoKlicks DigiTech",
    ogDescription: "Secure admin panels, CRMs, and internal portals built to solve your specific operational challenges. Custom software from NeoKlicks DigiTech, Nashik.",
    ogAlt: "Custom Software & Dashboards – NeoKlicks DigiTech",
    twitterTitle: "Custom Software & Dashboards | NeoKlicks DigiTech",
    twitterDescription: "Tailored admin panels, CRMs, and business portals built by NeoKlicks DigiTech in Nashik, India.",
    twitterAlt: "NeoKlicks DigiTech – Custom Software Development",
  },
  "digital-marketing": {
    title: "Digital Marketing & Lead Generation | NeoKlicks DigiTech Nashik",
    description: "Performance-driven digital marketing campaigns built on exact analytics. NeoKlicks DigiTech launches, monitors, and scales ad campaigns across search and social to grow your sales.",
    keywords: "digital marketing agency Nashik, Google Ads India, Facebook Ads agency, lead generation India, performance marketing Maharashtra, paid ads agency Nashik",
    canonical: "https://neoklicksdigitech.com/services/digital-marketing",
    ogTitle: "Digital Marketing & Lead Generation | Scale Your Sales – NeoKlicks DigiTech",
    ogDescription: "High-ROI ad campaigns across Google and social platforms. NeoKlicks DigiTech builds performance marketing strategies that drive real business growth.",
    ogAlt: "Digital Marketing & Lead Generation – NeoKlicks DigiTech",
    twitterTitle: "Digital Marketing & Lead Generation | NeoKlicks DigiTech",
    twitterDescription: "Scale your sales with data-driven ad campaigns. NeoKlicks DigiTech, Nashik — performance marketing that delivers ROI.",
    twitterAlt: "NeoKlicks DigiTech – Digital Marketing Services",
  },
  "meta-ads": {
    title: "Meta Ads & Social Media Marketing | NeoKlicks DigiTech Nashik",
    description: "Drive targeted leads and sales with high-ROI Meta Ads (Facebook & Instagram) campaigns by NeoKlicks DigiTech. Audience targeting, ad copy design, and pixel tracking for businesses in Nashik and globally.",
    keywords: "Meta Ads agency Nashik, Facebook Ads India, Instagram Ads agency, social media advertising Maharashtra, paid ads agency India, Meta Pixel setup, Facebook lead generation",
    canonical: "https://neoklicksdigitech.com/services/meta-ads",
    ogTitle: "Meta Ads & Facebook/Instagram Marketing | Scale Your Sales – NeoKlicks DigiTech",
    ogDescription: "High-converting Meta Ads (Facebook & Instagram) campaigns built on data, audience targeting, and scroll-stopping creatives.",
    ogAlt: "Meta Ads & Social Marketing – NeoKlicks DigiTech",
    twitterTitle: "Meta Ads & Social Media Marketing | NeoKlicks DigiTech",
    twitterDescription: "Scale your sales with performance-driven Facebook & Instagram ad campaigns. NeoKlicks DigiTech, Nashik.",
    twitterAlt: "NeoKlicks DigiTech – Meta Ads Services",
  },
  "e-commerce": {
    title: "E-Commerce Development | High-Converting Online Stores – NeoKlicks DigiTech",
    description: "Create high-performance shopping experiences that capture sales and retain customers. NeoKlicks DigiTech handles catalog setup, payment integration, and storefront optimization for Indian businesses.",
    keywords: "e-commerce development Nashik, Shopify development India, online store development Maharashtra, WooCommerce agency India, e-commerce agency Nashik, online shopping website development",
    canonical: "https://neoklicksdigitech.com/services/e-commerce",
    ogTitle: "E-Commerce Development | Turn Visitors Into Loyal Buyers – NeoKlicks DigiTech",
    ogDescription: "High-converting online stores with catalog setup, payment integration, and performance optimization. E-commerce development by NeoKlicks DigiTech, Nashik.",
    ogAlt: "E-Commerce Development – NeoKlicks DigiTech Nashik",
    twitterTitle: "E-Commerce Development | NeoKlicks DigiTech",
    twitterDescription: "High-performance online stores built to convert. NeoKlicks DigiTech handles Shopify, WooCommerce & custom e-commerce for Indian businesses.",
    twitterAlt: "NeoKlicks DigiTech – E-Commerce Development",
  },
  "maintenance-support": {
    title: "Website Maintenance & Support | 24/7 Monitoring – NeoKlicks DigiTech",
    description: "Ongoing monitoring, regular updates, and technical support to keep your website or software running at peak performance. NeoKlicks DigiTech's maintenance plans for Indian businesses.",
    keywords: "website maintenance Nashik, web support services India, website monitoring Maharashtra, technical support agency India, website uptime management, server maintenance Nashik",
    canonical: "https://neoklicksdigitech.com/services/maintenance-support",
    ogTitle: "Website Maintenance & Support | Keep Systems Safe & Online – NeoKlicks DigiTech",
    ogDescription: "Proactive monitoring, updates, and technical support to ensure your website stays secure and online 24/7. Maintenance plans from NeoKlicks DigiTech, Nashik.",
    ogAlt: "Website Maintenance & Support – NeoKlicks DigiTech",
    twitterTitle: "Website Maintenance & Support | NeoKlicks DigiTech",
    twitterDescription: "24/7 monitoring, updates, and technical support for your website or software. NeoKlicks DigiTech, Nashik.",
    twitterAlt: "NeoKlicks DigiTech – Maintenance & Support",
  },
  "seo": {
    title: "SEO Services in Nashik | Get Found on Google – NeoKlicks DigiTech",
    description: "NeoKlicks DigiTech optimizes your website's structure, speed, and content so Google ranks it higher — bringing in more organic traffic and qualified leads for your business.",
    keywords: "SEO services Nashik, search engine optimization India, Google ranking agency Maharashtra, organic traffic growth, local SEO Nashik, SEO agency India, on-page SEO off-page SEO",
    canonical: "https://neoklicksdigitech.com/services/seo",
    ogTitle: "SEO Services | Get Found by Customers Actively Searching – NeoKlicks DigiTech",
    ogDescription: "Strategic SEO that improves Google rankings, drives organic traffic, and grows qualified leads. NeoKlicks DigiTech's 6-step SEO framework — Nashik & India.",
    ogAlt: "SEO Services – NeoKlicks DigiTech Nashik",
    twitterTitle: "SEO Services in Nashik | NeoKlicks DigiTech",
    twitterDescription: "Get found on Google with strategic SEO from NeoKlicks DigiTech. Higher rankings, more organic traffic, qualified leads — Nashik & India.",
    twitterAlt: "NeoKlicks DigiTech – SEO Services",
  },
  "ui-ux-design": {
    title: "UI/UX Design Services | Beautiful, Intuitive Interfaces – NeoKlicks DigiTech",
    description: "NeoKlicks DigiTech designs visually stunning, user-centred digital interfaces. From wireframes to final UI — every screen is crafted for clarity, usability, and conversion.",
    keywords: "UI UX design agency Nashik, user interface design India, UX design services Maharashtra, web design agency India, app UI design Nashik, Figma design agency",
    canonical: "https://neoklicksdigitech.com/services/ui-ux-design",
    ogTitle: "UI/UX Design | Beautiful Interfaces Built for Users – NeoKlicks DigiTech",
    ogDescription: "Visually stunning and intuitive digital interfaces designed to improve user experience and drive conversions. Premium UI/UX design from NeoKlicks DigiTech, Nashik.",
    ogAlt: "UI/UX Design Services – NeoKlicks DigiTech",
    twitterTitle: "UI/UX Design Services | NeoKlicks DigiTech",
    twitterDescription: "Beautiful, user-centred digital interfaces from NeoKlicks DigiTech. Wireframes to final UI — built for clarity and conversion.",
    twitterAlt: "NeoKlicks DigiTech – UI/UX Design",
  },
  "web-development": {
    title: "Web Development Services in Nashik | NeoKlicks DigiTech",
    description: "NeoKlicks DigiTech crafts pixel-perfect, high-performance websites that attract customers and grow revenue. Custom full-stack web development for businesses across India and globally.",
    keywords: "web development Nashik, custom website development India, full stack developer Maharashtra, Next.js development India, React developer Nashik, website development agency India",
    canonical: "https://neoklicksdigitech.com/services/web-development",
    ogTitle: "Web Development | Websites That Captivate, Convert & Scale – NeoKlicks DigiTech",
    ogDescription: "Pixel-perfect, high-performance websites built to grow your business. Custom full-stack web development from NeoKlicks DigiTech in Nashik, India.",
    ogAlt: "Web Development Services – NeoKlicks DigiTech Nashik",
    twitterTitle: "Web Development Services | NeoKlicks DigiTech Nashik",
    twitterDescription: "Custom, high-performance websites built to captivate, convert, and scale. Full-stack web development from NeoKlicks DigiTech, Nashik India.",
    twitterAlt: "NeoKlicks DigiTech – Web Development Services",
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesDetailMap[slug];
  if (!service) {
    return {
      title: "Service Not Found | NeoKlicks DigiTech",
    };
  }
  const seo = seoMetadataMap[slug] || {
    title: `${service.title} | NeoKlicks DigiTech`,
    description: service.tagline,
    keywords: "web design, SEO, AI, Nashik",
    canonical: `https://neoklicksdigitech.com/services/${slug}`,
    ogTitle: service.title,
    ogDescription: service.tagline,
    ogAlt: service.title,
    twitterTitle: service.title,
    twitterDescription: service.tagline,
    twitterAlt: service.title,
  };
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "NeoKlicks DigiTech" }],
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    alternates: {
      canonical: seo.canonical,
    },
    openGraph: {
      type: "website",
      url: seo.canonical,
      siteName: "NeoKlicks DigiTech",
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [
        {
          url: "https://neoklicksdigitech.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: seo.ogAlt,
        },
      ],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitterTitle,
      description: seo.twitterDescription,
      images: [
        {
          url: "https://neoklicksdigitech.com/og-image.jpg",
          alt: seo.twitterAlt,
        },
      ],
    },
    other: {
      "content-language": "en-IN",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0A1628",
  width: "device-width",
  initialScale: 1,
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesDetailMap[slug];

  if (!service) {
    notFound();
  }

  return <ServicePageClient service={service} slug={slug} />;
}
