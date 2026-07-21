export const company = {
  name: "Alpha Info Tech",
  legalName: "Alpha Info Tech",
  tagline: "Simple Digital Solutions for Growing Businesses",
  statement: "Not just software, it will be your solution.",
  motto: "Building Sustainable Solutions",
  email: "alphainfotech@gmail.com",
  phones: ["+91 99943 12900", "+91 93446 89836"],
  address: "Erode, Tamil Nadu, India",
  responseTime: "We get back to you within 24 hours.",
};

export const stats = [
  { value: "40%", label: "Increase in lead conversions" },
  { value: "50%", label: "Faster turnaround times" },
  { value: "71%", label: "Savings vs. standard software subscriptions" },
  { value: "2.5X", label: "Business growth with automated operations" },
];

export type ServiceGroup = {
  key: string;
  title: string;
  description: string;
  items: string[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    key: "sales",
    title: "Sales",
    description: "Win more business and follow up before it goes cold.",
    items: [
      "Lead / Enquiry Tracker",
      "Quotation Generator",
      "Coupon / Promo Code Generator",
      "Digital Catalog",
      "Event / Class Registration",
      "Digital Business Card",
      "Quote Follow-up Reminder",
    ],
  },
  {
    key: "operations",
    title: "Operations",
    description: "Keep people, sites, and assets running without the chaos.",
    items: [
      "Attendance System",
      "Site Progress Tracker",
      "Material Request Tracker",
      "Vehicle / Asset Log",
      "Visitor Register",
      "Staff Task Tracker",
      "WhatsApp Follow-up CRM",
    ],
  },
  {
    key: "finance",
    title: "Finance",
    description: "Protect your cash flow and stop chasing payments manually.",
    items: [
      "AMC Tracker",
      "Warranty Expiry Alerts",
      "Payment Reminder System",
      "Invoice Generator",
      "Expense & Petty Cash Tracker",
      "Inventory Management",
      "Salary Preparation Assistant",
    ],
  },
];

export type Stage = {
  stage: string;
  name: string;
  tagline?: string;
  description: string;
  points: string[];
  philosophy?: string;
  problems?: string[];
  tools?: string[];
  features?: { label: string; detail: string }[];
  platformGroups?: { name: string; type: string; items: string[] }[];
  forWhom?: string;
};

export const stages: Stage[] = [
  {
    stage: "Stage 1",
    name: "Starter",
    tagline: "Website + Add-ons",
    description:
      "Go digital in days, not months — using only the apps your team already carries in their pocket.",
    points: [
      "Fast to launch, low cost to start",
      "Leverages existing tools instead of reinventing them",
      "Perfect first step for businesses going digital",
    ],
    philosophy:
      "Pay only for what you need. You already pay for all of it — your phone, your data plan, WhatsApp, Google. We just make it work together.",
    problems: [
      "Enquiries get forgotten",
      "Follow-ups don't happen",
      "Renewals get missed",
      "You have no idea what your team did today",
    ],
    tools: ["Smartphone", "Internet package", "WhatsApp", "Google Sheets & Gmail"],
    features: [
      { label: "Infrastructure", detail: "No server or cloud setup required" },
      { label: "Data storage", detail: "Runs on Google Sheets, using the Gmail you already have" },
      { label: "Maintenance", detail: "No AMC — no annual maintenance contract" },
      { label: "Interface", detail: "Familiar rows-and-columns Google Sheet, nothing new to learn" },
      { label: "Team requirements", detail: "No IT staff or coding knowledge needed" },
      { label: "Cost structure", detail: "One-time setup — no recurring hosting fees" },
    ],
    forWhom:
      "Small businesses already running on WhatsApp and Gmail — no IT staff, no budget for enterprise software, but tired of losing track of enquiries.",
  },
  {
    stage: "Stage 2",
    name: "Growth",
    tagline: "Pre-built. Configured.",
    description:
      "Faster delivery, lower cost, the same business outcome — using proven, enterprise-grade platforms instead of building everything from scratch.",
    points: [
      "2–4 week deployment timeline",
      "Enterprise-grade infrastructure (Zoho, Microsoft, Google backbone)",
      "Modular architecture — add capabilities without a system rebuild",
      "Dramatically lower cost than custom development",
    ],
    philosophy:
      "We don't build from scratch — we configure what's already proven.",
    tools: ["Zoho Creator", "Microsoft Power Apps", "Google AppSheet", "Alpha Info Tech Systems"],
    platformGroups: [
      {
        name: "Zoho Creator",
        type: "Low-code",
        items: [
          "Multi-step workflow automation with approvals and escalations",
          "Custom dashboards and role-specific reports",
          "Zoho Books integration for invoices and payments",
          "Native Android and iOS apps",
        ],
      },
      {
        name: "Google AppSheet",
        type: "No-code",
        items: [
          "Google Sheets as the native database",
          "Offline mode with automatic syncing",
          "Image capture and GPS tagging",
          "Runs on your existing Google Workspace account",
        ],
      },
      {
        name: "Alpha Info Tech Systems",
        type: "Battle-tested proprietary modules",
        items: [
          "ChatBot functionality",
          "IoT device integration",
          "Custom dashboards",
        ],
      },
    ],
    forWhom:
      "Small-to-medium businesses with operational complexity that need faster implementation than a fully custom build.",
  },
  {
    stage: "Stage 3",
    name: "Scale",
    tagline: "Owns your technology, not rents it",
    description:
      "Your business, your platform, built to enterprise grade — full-stack custom development with AI and automation embedded from day one.",
    points: [
      "Your entity permanently owns all source code",
      "Zero vendor lock-in by design",
      "Full code handover upon completion",
      "Enterprise-grade security and scalability from day one",
      "Supports multi-team, multi-location operations with unified reporting",
      "No proprietary frameworks restricting future flexibility",
    ],
    philosophy:
      "Your own software — built around your exact workflow. No off-the-shelf limits.",
    features: [
      {
        label: "Custom Web Application",
        detail: "A role-based, multi-module platform engineered specifically for your operations",
      },
      {
        label: "Mobile Applications",
        detail: "Native Android apps with offline capability and push notifications",
      },
      {
        label: "API & Integration Layer",
        detail: "REST APIs, webhooks, payment gateway integration, and third-party connections",
      },
      {
        label: "Custom ERP / Core Business Platform",
        detail: "End-to-end coverage of procurement, inventory, production, sales, HR, finance, and reporting",
      },
    ],
    forWhom:
      "Established businesses that need a bespoke platform generic SaaS can't support — or that want to own their technology outright rather than rent it forever.",
  },
];

export const values = [
  {
    title: "Small, Sustainable, Smart",
    description:
      "We build systems sized for where you are today, not for a business you don't have yet.",
  },
  {
    title: "Honesty Over Impressiveness",
    description:
      "We'd rather tell you the truth about what you need than sell you what looks good on paper.",
  },
  {
    title: "Experience-Based Solutions",
    description:
      "Every module exists because we hit that exact problem in our own business first.",
  },
  {
    title: "Client-Paced Growth",
    description:
      "You move to the next stage when you're ready for it, not on our sales timeline.",
  },
  {
    title: "Long-Term Focus",
    description: "We build relationships and systems meant to outlast a single project.",
  },
  {
    title: "Specificity",
    description:
      "Generic software creates generic results. We build for your workflow, not a template.",
  },
];

export const valueProps = [
  "Pay exclusively for the features you actually use",
  "Systems that scale as your business grows",
  "Designed around your existing team workflows",
  "Complete transparency, no hidden costs",
  "No forced learning curves",
];

export const founderStory = {
  eyebrow: "Why We Started",
  title: "Built to fix our own problems first",
  intro:
    "Alpha Info Tech didn't start as a software company with a formal office and a product roadmap. It started because we were running a small business ourselves, and the software available to us didn't fit — everything on the market was oversized, overpriced, and built for a company we weren't.",
  chapters: [
    {
      label: "The Problem",
      title: "We were losing business we should have won",
      body: "Enquiries came in over WhatsApp and got buried in the chat within a day. Follow-ups slipped. We didn't need a CRM with fifty features we'd never touch — we needed to stop losing leads we'd already earned.",
    },
    {
      label: "The First Fix",
      title: "A WhatsApp enquiry tracker, built for us",
      body: "So we built one. A simple system to track enquiries coming in over WhatsApp. In its first week alone, it recovered four leads that would otherwise have fallen through the cracks. Then we built a quotation generator, because sending quotes fast was costing us deals too.",
    },
    {
      label: "The Turning Point",
      title: "A colleague asked for the same setup",
      body: "Every tool we built solved a problem we were actually living through — not a theoretical one. When a colleague running their own business saw what we'd put together and asked for the same setup, that request became the start of Alpha Info Tech's module library, long before any of it was for sale.",
    },
  ],
  closing:
    "That's still how we build today. Every module in our library exists because someone on our own team hit that exact wall first — which means what you get from us has already been tested where it matters most: in a real, small business, under real pressure.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/our-model", label: "Our Model" },
  { href: "/social-media-solutions", label: "Social Media Solutions" },
  { href: "/founder-message", label: "Vision" },
  { href: "/contact", label: "Contact" },
];

export const socialMedia = {
  eyebrow: "Social Media & Digital Business Solutions",
  title: "Grow Your Business. Not Your Workload.",
  intro:
    "Your customers are already on Instagram and WhatsApp. The real question is: can your business respond fast enough? We help small businesses transform their social media into a complete digital business platform — capturing every enquiry, automating repetitive work, and creating systems that keep working even when you're offline.",
  subIntro:
    "Whether you're just starting or handling hundreds of enquiries every day, we provide practical, affordable digital solutions that fit your business.",

  problems: [
    {
      title: "Missed Customer Enquiries",
      description: "Every unanswered DM or WhatsApp message is a potential lost sale.",
    },
    {
      title: "Repetitive Customer Questions",
      description:
        "Price? Stock? Delivery? Location? Payment? Answering the same questions repeatedly wastes valuable business hours.",
    },
    {
      title: "No Customer Database",
      description: "Thousands of chats... but no organized customer list for follow-up.",
    },
    {
      title: "Slow Quotations",
      description:
        "Manual quotations take hours or days. Customers often purchase before receiving your quote.",
    },
    {
      title: "Business Depends Only on Instagram",
      description:
        "If your account is restricted, hacked, or unavailable, your enquiries and customer relationships disappear with it.",
    },
    {
      title: "Manual Business Operations",
      description: "Orders, customer follow-ups, lead tracking, payments — everything depends on you.",
    },
  ],

  solutions: [
    {
      key: "instagram",
      title: "AI Instagram Chatbot",
      description: "Transform your Instagram into a 24×7 sales assistant.",
      items: [
        "Instant DM replies",
        "FAQ automation",
        "Product recommendations",
        "Lead capture",
        "Appointment enquiries",
        "Human handover",
        "Business-specific AI responses",
      ],
      footnote: "Ideal for businesses receiving regular Instagram enquiries.",
    },
    {
      key: "whatsapp",
      title: "AI WhatsApp Automation",
      description: "Respond faster and serve more customers.",
      items: [
        "Auto replies",
        "Broadcast messaging",
        "Customer follow-ups",
        "Business workflow automation",
        "AI-powered conversations",
      ],
      footnote:
        "Three growth stages — Starter: Customer Contact Directory, Growth: Broadcast + Auto Reply, Scale: AI Conversation Assistant. One-time implementation, scale only when your business grows.",
    },
    {
      key: "contacts",
      title: "WhatsApp Contact Management",
      description: "Your customer data shouldn't stay buried inside chat history.",
      items: [
        "Easy follow-up",
        "Organized customer records",
        "Excel & CSV export",
        "Better sales management",
        "Reduced manual searching",
      ],
      footnote:
        "We help organize your WhatsApp business contacts into structured, searchable customer lists.",
    },
    {
      key: "knowledge",
      title: "AI Knowledge Chatbot",
      description: "Train your chatbot using your own business knowledge.",
      items: [
        "Product catalogues",
        "Price lists",
        "Company policies",
        "FAQs",
        "Service information",
        "Internal documents",
      ],
      footnote: "Every answer reflects your business — not generic AI.",
    },
    {
      key: "website",
      title: "Professional Business Website",
      description: "Build credibility beyond social media.",
      items: [
        "Responsive website",
        "Contact forms",
        "Product pages",
        "Google Maps",
        "SEO optimization",
        "SSL security",
        "Mobile optimized",
      ],
    },
    {
      key: "workspace",
      title: "Business Website + Google Workspace",
      description: "Everything needed for a professional online presence.",
      items: [
        "Business website",
        "Custom domain",
        "Professional email",
        "Google Workspace setup",
        "Shared calendar",
        "Google Drive",
        "Business collaboration tools",
      ],
      footnote: "Perfect for businesses moving from personal accounts to professional operations.",
    },
    {
      key: "ecommerce",
      title: "Micro E-Commerce Website + Add-ons",
      description: "Start selling online without investing in a large e-commerce platform.",
      items: [
        "Online product catalogue",
        "WhatsApp ordering",
        "Payment integration",
        "Customer enquiry forms",
        "Mobile friendly design",
      ],
      footnote:
        "Optional add-ons: AI chatbot, WhatsApp automation, barcode & QR management, inventory management.",
    },
    {
      key: "database",
      title: "Customer Database & Analytics Dashboard",
      description: "Built especially for small businesses.",
      items: ["Customer database", "Analytics dashboard"],
    },
    {
      key: "automation",
      title: "Business Automation",
      description: "Automate repetitive work.",
      items: [
        "Appointment booking",
        "Customer registration",
        "Order collection",
        "Lead qualification",
        "Complaint management",
        "Quotation generation",
        "Customer follow-ups",
        "Payment reminders",
      ],
    },
  ],

  growthPath: [
    {
      stage: "Stage 1",
      name: "Starter",
      description: "Perfect for businesses beginning their digital journey.",
      items: ["Professional website", "Google Workspace", "Contact forms", "Business email", "Basic add-ons"],
    },
    {
      stage: "Stage 2",
      name: "Growth",
      description: "Increase customer engagement.",
      items: [
        "AI chatbot",
        "WhatsApp automation",
        "Lead management",
        "Customer database",
        "Business reports",
      ],
    },
    {
      stage: "Stage 3",
      name: "Scale",
      description: "Operate smarter with AI.",
      items: [
        "AI assistants",
        "Advanced automation",
        "Integrated business systems",
        "Analytics dashboard",
        "Custom software",
      ],
    },
  ],

  tools: [
    "Instagram",
    "WhatsApp",
    "Google Workspace",
    "Google Forms",
    "Google Sheets",
    "Smartphones",
    "Websites",
  ],

  industries: [
    "Instagram Businesses",
    "WhatsApp Businesses",
    "Retail Shops",
    "Home-Based Businesses",
    "Manufacturers",
    "Distributors",
    "Service Providers",
    "Healthcare Clinics",
    "Educational Institutions",
    "Restaurants",
    "Travel Agencies",
    "Real Estate",
    "Startups",
  ],

  whyUs: [
    "Affordable digital solutions",
    "One-time implementation options for many solutions",
    "AI-powered automation",
    "Business-specific customization",
    "Fast deployment",
    "Easy to use",
    "Scalable as your business grows",
    "Local support",
  ],
};
