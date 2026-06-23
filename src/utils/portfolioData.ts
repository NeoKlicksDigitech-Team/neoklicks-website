export interface CaseStudyData {
  title: string;
  slug: string;
  category: string;
  description: string;
  metric: string;
  metricLabel: string;
  technologies: string[];
  image: string;
  alt: string;
  challenge: string;
  solution: string;
  results: string;
  resultsHighlights: string[];
  architecture: string;
}

export const caseStudies: CaseStudyData[] = [
  {
    title: "OmniSearch AI Assistant",
    slug: "omnisearch-ai-assistant",
    category: "AI/ML Integration",
    description: "A custom semantic search tool parsing corporate manual files to answer agent inquiries in real-time, built using vector embeddings.",
    metric: "78% faster",
    metricLabel: "Support Ticket Resolution",
    technologies: ["Next.js", "Python", "Gemini API", "Pinecone"],
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
    alt: "AI assistant interface with search bar showing semantic match results for technical manuals",
    challenge: "The client's support agents were spending an average of 8 minutes per ticket digging through hundreds of pages of technical PDFs and operation manuals. This led to high customer wait times, agent fatigue, and low resolution rates on the first contact.",
    solution: "We engineered OmniSearch, a semantic AI assistant. It ingests all corporate manuals, chunks the text, and stores high-dimensional embeddings in a Pinecone vector database. When agents ask a natural language question, the system queries the vector space to find relevant context, then synthesizes a precise answer using the Gemini API. The interface is built on a fast Next.js React frontend.",
    results: "Agent lookup time was slashed from 8 minutes to under 5 seconds. Ticket resolution speed improved by 78%, and client satisfaction (CSAT) scores increased by 22% in the first month post-launch.",
    resultsHighlights: [
      "Average lookup time dropped from 480s to <5s",
      "78% faster ticket resolution speed",
      "Zero manual filing errors reported by agents"
    ],
    architecture: "Next.js (App Router) client app connecting to a Python/FastAPI backend, utilizing SentenceTransformers for text embeddings, Pinecone for vector similarity index search, and Google Gemini API for context-based generation."
  },
  {
    title: "SwiftCart Elite E-Shop",
    slug: "swiftcart-elite-shop",
    category: "Headless E-Commerce",
    description: "Ultra-fast headless catalog and checkout storefront with elastic search, custom inventory synchronization, and Stripe integration.",
    metric: "3.2x increase",
    metricLabel: "Checkout Conversion Rate",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    alt: "Headless e-commerce storefront dashboard showing rapid checkout conversion statistics",
    challenge: "The client's legacy WooCommerce store had ballooned to 4,000+ SKUs, causing page load speeds to drop to 6.2 seconds. Mobile cart abandonment rates reached 84% due to a sluggish, multi-step checkout funnel and database locks during peak sales events.",
    solution: "We rebuilt the entire shopping experience from scratch as a headless Next.js application. We separated the catalog view from the transaction database, pre-rendering all product pages statically. We integrated Elasticsearch for instantaneous product filtering, implemented a custom inventory sync database API, and built a streamlined single-page checkout flow with Stripe Elements.",
    results: "Page speed improved to 1.1s. Mobile cart abandonment dropped from 84% to 28%, resulting in a 3.2x overall increase in checkout conversion rates.",
    resultsHighlights: [
      "Page load speed reduced from 6.2s to 1.1s",
      "Mobile cart abandonment rate reduced to 28%",
      "3.2x overall increase in daily completed sales"
    ],
    architecture: "Next.js frontend hosted on Vercel, headless product catalog via Shopify Storefront API, custom inventory syncing API middleware built on Node.js/PostgreSQL, search index powered by Elasticsearch, and Stripe for payments."
  },
  {
    title: "Veloce SaaS Operator Panel",
    slug: "veloce-saas-operator-panel",
    category: "Business Custom Portal",
    description: "A secure operation board designed for real-time traffic statistics and billing reports, featuring custom CSV exports.",
    metric: "< 1.2s",
    metricLabel: "Average Page Load Speed",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    alt: "SaaS admin dashboard tracking cloud network latency and server database activity logs",
    challenge: "A logistics company needed to track and display real-time vehicle fleets, coordinate dispatch routes, and generate billing reports for 500+ drivers. Their existing operations spreadsheet was slow, prone to concurrency errors, and lacked granular role-based security.",
    solution: "We developed a secure, real-time dispatch dashboard. Using Supabase for real-time database subscription hooks, we built live-updating map routes and driver coordinate feeds. We added multi-role admin controls (dispatchers, managers, drivers), optimized SQL query schemas, and implemented background-worker CSV report generations.",
    results: "The system resolved all route overlap conflicts and spreadsheet locks. Dashboard load time drops below 1.2 seconds, and automated dispatch reduces dispatcher phone call volume by 45%.",
    resultsHighlights: [
      "Dashboard load time drops to 1.2s",
      "45% reduction in dispatcher coordination calls",
      "Zero data concurrency errors recorded"
    ],
    architecture: "Next.js App Router, Supabase client for real-time web socket tables, PostgreSQL database schema with role-level security policies, Tailwind CSS for dashboard UI layout, and automated cron worker scripts."
  }
];
