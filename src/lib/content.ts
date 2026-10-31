export const company = {
  name: "Alpha Info Tech",
  legalName: "Alpha Info Tech",
  tagline: "Simple Digital Solutions for Growing Businesses",
  statement: "Not just software, it will be your solution.",
  motto: "Building Sustainable Solutions",
  email: "alphainfotecherode@gmail.com",
  phones: ["+91 99943 12900", "+91 93446 89836"],
  whatsapp: "+91 99943 12900",
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
  { href: "/voice2fill", label: "Voice2Fill" },
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

export const voice2Fill = {
  eyebrow: "Voice2Fill · For e-Sevai, CSC and browsing centres",
  title: "Clear the queue without hiring another typist",
  taglineTamil: "சொன்னா போதும்!",
  intro:
    "Applicants speak their details in Tamil, English or Tanglish on their own phone. The form on your computer fills in English. You check it and submit it, so the same staff can serve more people.",
  accountNote: "Free 7-day trial with 15 voice minutes. No card needed.",
  // Chrome Web Store listing. Leave empty until the extension is published.
  storeUrl: "",

  // Keep in step with Admin → Plans in the Voice2Fill admin panel.
  // amountPaise must match the Razorpay button amount: the webhook uses it to
  // tell which plan was bought. razorpayButtonId is the button's "pl_…" id.
  plans: [
    { key: "trial", name: "Trial", price: "Free", amountPaise: 0, minutes: "15", duration: "7 days (once per person)", razorpayButtonId: "" },
    { key: "starter", name: "Starter", price: "₹99", amountPaise: 9900, minutes: "60", duration: "30 days", razorpayButtonId: "pl_Ttnh64CinRbJD9" },
    { key: "basic", name: "Basic", price: "₹249", amountPaise: 24900, minutes: "150", duration: "30 days", razorpayButtonId: "pl_Tto3Urj1Rfw7us" },
    { key: "pro", name: "Pro", price: "₹649", amountPaise: 64900, minutes: "400", duration: "30 days", razorpayButtonId: "pl_Tto7qkM3q2Meed" },
    { key: "business", name: "Business", price: "₹1,949", amountPaise: 194900, minutes: "1,200", duration: "30 days", razorpayButtonId: "pl_Tto9ePtW42sbIs" },
    { key: "topup", name: "Extra minutes", price: "₹79", amountPaise: 7900, minutes: "50", duration: "Until the current plan ends", razorpayButtonId: "pl_TtoCRIKj0otDdh" },
  ],

  payment: {
    activationTime: "usually within 2 hours (9 am – 9 pm)",
  },

  // The problems a centre owner has, in the order they appear on the page.
  problems: [
    {
      key: "queue",
      poster: "/voice2fill/posters/f1.png",
      worryTamil: "வரிசை நீளம், customer அடுத்த கடைக்கு போறாங்க",
      worry: "Long queue, customers walk to the next centre",
      answerTamil: "5 பேர் ஒரே நேரத்துல அவங்க phone-ல சொல்லலாம்",
      answer: "5 people speak on their own phones at once",
      hook: "The queue is long, and there is only one of you.",
      cost: "On busy days people wait for hours or walk to the next centre. Everyone who leaves is a fee you don't earn.",
      solution: [
        "Up to 5 forms fill at once, one browser tab per applicant, each with its own QR code.",
        "People in the queue give their details on their own phones while you finish with the current applicant.",
        "“Start over” clears the answers, so the next applicant can use the same QR code.",
      ],
      tamil: "ஒரே நேரத்தில் 5 விண்ணப்பதாரர்கள் தங்கள் சொந்த phone-இல் விவரங்களைக் கூறலாம். காத்திருப்பு நேரம் குறையும்.",
    },
    {
      key: "rejection",
      poster: "/voice2fill/posters/f2.png",
      worryTamil: "ஒரு எழுத்து தப்பு, application reject",
      worry: "One wrong letter, application rejected",
      answerTamil: "Applicant தானே phone-ல சரிபார்க்கிறாங்க",
      answer: "The applicant checks their own details",
      hook: "One wrong letter, and the application is rejected.",
      cost: "The citizen has to come back, you do the work twice, and your centre takes the blame.",
      solution: [
        "The applicant sees their own answers on their phone and checks them before sending.",
        "Names can be spelled letter by letter and corrected the way people talk: “no, not Jahan, Jagan”.",
        "Unclear answers come back as “Did you mean…?” buttons. Nothing is guessed silently.",
      ],
      tamil: "விண்ணப்பதாரரே தமது விவரங்களை phone-இல் சரிபார்க்கிறார். தெளிவில்லாத பதில்கள் ஊகிக்கப்படுவதில்லை; உறுதிசெய்யக் கேட்கப்படும்.",
    },
    {
      key: "rush",
      poster: "/voice2fill/posters/f3.png",
      worryTamil: "Scheme திறந்தா கூட்டம் தாங்க முடியல",
      worry: "A new scheme opens and the rush is too much",
      answerTamil: "அதே staff, அதிக பேருக்கு service",
      answer: "Same staff, more people served",
      hook: "A new scheme opens, and the rush is too much.",
      cost: "Rush days could be your best earning days, but one keyboard limits how many people you can serve.",
      solution: [
        "Applicants start giving their details while they wait, so more of the form is done when you reach them.",
        "You serve more people with the same staff and the same computers.",
        "State → District → Taluk → Village dropdowns are filled in order, so long forms don't slow you down.",
      ],
      tamil: "State, District, Taluk, Village போன்ற தொடர் dropdown-களும், பல படிகள் கொண்ட form-களும் வரிசைப்படி நிரப்பப்படும்.",
    },
    {
      key: "typist",
      poster: "/voice2fill/posters/f4.png",
      worryTamil: "வேகமா டைப் பண்றவர் ஒருத்தர் தான்",
      worry: "Only one fast typist. What if they leave?",
      answerTamil: "Screen படிக்க தெரிஞ்சா யார் வேணாலும் பண்ணலாம்",
      answer: "Anyone who can read the screen can run the counter",
      hook: "Your fastest typist took the day off.",
      cost: "When a centre depends on one person's typing speed, one absence slows everything down.",
      solution: [
        "Anyone who can read the screen can run the counter.",
        "The applicant speaks. The operator checks and submits.",
        "New staff don't have to be fast typists to keep the queue moving.",
      ],
      tamil: "தட்டச்சு வேகம் இனி தடையல்ல. திரையைப் படிக்கத் தெரிந்த எவரும் counter-ஐ நடத்தலாம்.",
    },
    {
      key: "photos",
      poster: "/voice2fill/posters/h2.png",
      worryTamil: "போட்டோ 50 KB-க்குள்ள வேணுமா?",
      worry: "Photo must be under 50 KB?",
      answerTamil: "",
      answer: "The phone makes it fit",
      hook: "“Photo must be JPG, under 50 KB.”",
      cost: "Resizing on separate websites and moving files between phones can take longer than filling the form.",
      solution: [
        "The extension reads the website's upload rules, such as file type, size and page limits.",
        "The applicant takes a photo on their phone, and the phone converts it to fit.",
        "Several paper pages become one A4 PDF within the site's limit.",
      ],
      tamil: "Photo, PDF ஆகியவற்றை website-இன் விதிகளுக்கு ஏற்ப phone தானாக மாற்றுகிறது. தனியாக resize செய்ய வேண்டியதில்லை.",
    },
    {
      key: "documents",
      poster: "/voice2fill/posters/f5.png",
      worryTamil: "ID card, photo எல்லாம் உங்க phone-ல",
      worry: "Citizens' ID cards and photos piling up on your phones",
      answerTamil: "Photo நேரா form-க்கு, அப்புறம் delete",
      answer: "Photos go straight to the form, then are deleted",
      hook: "Citizens' ID cards are piling up on staff phones.",
      cost: "Documents forwarded through chat apps stay on phones long after the work is done. That is a risk for the citizen and for your centre.",
      solution: [
        "Photos and PDFs go straight from the applicant's phone into the form, and are then deleted.",
        "Voice recordings are never stored.",
        "Spoken answers are deleted automatically within about an hour.",
      ],
      tamil: "ஆவணங்கள் நேரடியாக form-க்குச் சென்று, பின்னர் நீக்கப்படுகின்றன. ஊழியர்களின் phone-இல் எதுவும் தங்குவதில்லை.",
    },
  ],

  // Starting values only: not measured. Replace with pilot numbers when they exist.
  calculator: {
    defaults: {
      perDay: "40",
      minutesToday: "10",
      minutesVoice: "6",
      workingDays: "26",
      fee: "",
    },
    note: "These starting numbers are examples, not measured results. Time saved depends on the form. Change them to match your counter, or measure them during the free trial.",
  },

  footfall: {
    tamil: "இங்கே தமிழில் சொன்னா போதும்",
    intro:
      "Many applicants can't read an English form, and every label has to be explained across the counter. Give them a reason to choose your centre.",
    points: [
      "Applicants speak in Tamil, English or Tanglish, and the form fills in English.",
      "Every field on the phone shows both languages: “தந்தை பெயர் · Father's name”.",
      "Elderly and first-time applicants can give their details without typing a word.",
    ],
    signUrl: "/voice2fill/posters/counter-sign-a4.png",
  },

  edge: {
    columns: ["Typing by hand", "Saved-profile autofill tools", "Voice2Fill"],
    rows: [
      { label: "Several applicants at once", values: ["One at a time", "One at a time", "Up to 5 at once"] },
      { label: "A new person every time", values: ["Slow every time", "Needs a new profile", "Just speak"] },
      { label: "Applicant speaks Tamil or Tanglish", values: ["Operator translates", "Usually not supported", "Yes"] },
      { label: "Photos sized to the site's rules", values: ["Separate resizer sites", "Usually not supported", "Done on the phone"] },
      { label: "Applicant checks their own details", values: ["Read out at the counter", "No", "On their own phone"] },
      { label: "Applicant details kept afterwards", values: ["Often left on staff phones", "Saved in a profile", "Answers deleted in about an hour"] },
    ],
  },

  steps: [
    {
      title: "Scan the form",
      description:
        "Open the web form in Chrome, click the extension and choose “Scan form on this page”. A QR code appears.",
    },
    {
      title: "The applicant speaks",
      description:
        "They scan the QR code with their phone, with no app to install, tap the mic and say: “My name is Ramesh Kumar, phone 98765 43210, district Salem.”",
    },
    {
      title: "You check and submit",
      description:
        "Press “Fill form” once. New answers then fill in by themselves, each one highlighted. Voice2Fill never submits for you, and Undo puts the page back.",
    },
  ],

  features: [
    {
      key: "speech",
      title: "Speech that fits how people talk",
      items: [
        "Tamil, English or Tanglish, even mixed in one sentence: “en peru Ramesh, ooru Chennai”.",
        "Numbers in pieces and names letter by letter, including Tamil letter names.",
        "Natural corrections: “the last digit is 5”, “pincode la 455 illa 445”.",
        "Voice commands: “start over”, “send it”, “what is left?”.",
      ],
    },
    {
      key: "forms",
      title: "Works on real application forms",
      items: [
        "Spelling variants like “Omaloor” or “Omalur” match the right dropdown option.",
        "Fields on the next step, or after ticking “Other”, appear on the phone right away.",
        "Values are entered the way a person types, so the site's own checks still run.",
      ],
    },
    {
      key: "uploads",
      title: "Photos and documents",
      items: [
        "Rotate, crop or add pages on the phone before sending.",
        "The file goes into the website's own upload field. If the site rejects it, the phone shows why.",
        "Location and camera details are removed from photos.",
      ],
    },
    {
      key: "counter",
      title: "Made for a busy counter",
      items: [
        "“Typing only” lets the applicant type on their phone instead. It uses no voice minutes.",
        "The phone screen switches between தமிழ் and English.",
        "The Tamil helper explains any English label or help line on the phone.",
      ],
    },
  ],

  privacy: [
    "Voice recordings are never stored.",
    "Spoken answers are deleted automatically within about an hour.",
    "Photos and PDFs are deleted as soon as the computer receives them.",
    "Nothing is sold or used for advertising.",
  ],

  faqs: [
    {
      q: "Will it work on the portal I use?",
      a: "Most web forms work. Some websites block automatic filling for certain fields; the popup shows which ones so you can type them. The free trial is the best way to check the forms you fill every day.",
    },
    {
      q: "What if the applicant has no smartphone?",
      a: "Scan the QR code with your own or a staff phone and let the applicant speak into it. “Start over” then clears the answers for the next person.",
    },
    {
      q: "What about captcha and OTP?",
      a: "Type these on the computer. They can't be filled by voice.",
    },
    {
      q: "Is this a government service?",
      a: "No. Voice2Fill is an independent tool and is not affiliated with any government department or service.",
    },
    {
      q: "What do I need to start?",
      a: "Chrome on the computer with the form, and a phone with a browser and a microphone. There is no app to install. New accounts are set up by our team.",
    },
    {
      q: "What can't it do yet?",
      a: "It can't fill upload fields inside another website's embedded frame, and it doesn't save details to reuse on future forms.",
    },
  ],
};

export const requestAccess = {
  eyebrow: "Request Access",
  title: "Get Voice2Fill for your centre",
  lead: "Serve more applicants with the same staff.",
  leadTamil: "குரலால் படிவங்களை நிரப்புங்கள்.",
  intro:
    "Voice2Fill accounts are set up by our team, so every user gets a sign-in that works from day one. New accounts start with a free 7-day trial (15 voice minutes). Send the form below and we'll contact you on your mobile (WhatsApp) number within 2 working days.",

  whoCanRequest: [
    "Service centre and CSC operators filling applications for citizens",
    "Office and business staff doing repeated data entry",
    "Anyone who wants to fill their own forms by voice",
  ],

  requirements: [
    "Chrome on the computer with the form",
    "A phone with a browser and a microphone (no app to install)",
    "An internet connection on both",
  ],
};
