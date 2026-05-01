export const SITE = {
  name: "Silver Wolf Technologies",
  shortName: "Silver Wolf Tech",
  domain: "https://www.silverwolftechnologies.in",
  email: "info@silverwolftechnologies.in",
  phone: "+91 63947 53801",
  phoneRaw: "+916394753801",
  whatsapp: "916394753801",
  presence: "Remote · Worldwide",
  founded: 2015,
  yearsExperience: 10,
  socials: {
    linkedin: "https://www.linkedin.com/company/silver-wolf-technologies",
    instagram: "https://www.instagram.com/silverwolftechnologies",
  },
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  category: "Development" | "Marketing" | "Creative";
  icon: string;
  keywords: string[];
  longDescription: string;
  bullets: string[];
  deliverables: string[];
  process: { step: string; detail: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    short: "Custom business, e-commerce and portfolio websites built on modern stacks (React, Next.js, Shopify, WordPress).",
    category: "Development",
    icon: "Code2",
    keywords: ["website development company", "custom website design", "react website development", "business website India"],
    longDescription:
      "We design and engineer high-performance websites that load fast, rank on Google and convert visitors into customers. Every site is hand-coded with semantic HTML, optimized Core Web Vitals and CMS flexibility — built to scale with your business for the next decade.",
    bullets: [
      "Custom UI/UX designed from scratch — no recycled templates",
      "Lightning-fast (90+ Lighthouse) with image and code optimization",
      "On-page SEO baked in: schema, sitemaps, semantic markup",
      "Mobile-first responsive on every device",
      "Headless CMS or WordPress — your editors stay in control",
    ],
    deliverables: ["Design system in Figma", "Production codebase", "Hosting + DNS setup", "30-day post-launch support"],
    process: [
      { step: "Discovery", detail: "Goals, audience, competitor audit, sitemap planning" },
      { step: "Design", detail: "Wireframes → high-fidelity UI in Figma with brand system" },
      { step: "Build", detail: "Component-driven development with weekly sprint demos" },
      { step: "Launch", detail: "QA, SEO checks, deployment and analytics setup" },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    short: "Conversion-optimized Shopify, WooCommerce and headless commerce stores built to scale.",
    category: "Development",
    icon: "ShoppingCart",
    keywords: ["ecommerce website development", "shopify development India", "woocommerce expert", "online store design"],
    longDescription:
      "From single-product D2C launches to multi-vendor marketplaces, we build e-commerce experiences engineered for conversion. Integrated payments, inventory sync, abandoned-cart automations and analytics that reveal exactly where revenue lives.",
    bullets: [
      "Shopify, WooCommerce, Magento or fully headless setups",
      "Razorpay, Stripe, PayPal, COD and global gateway integrations",
      "Conversion rate optimization on every template",
      "Multi-currency, multi-language, GST-ready",
    ],
    deliverables: ["Storefront + theme", "Payment + shipping integrations", "Inventory dashboards", "Marketing automation hooks"],
    process: [
      { step: "Strategy", detail: "Product catalog, pricing, fulfillment workflow" },
      { step: "Design", detail: "Conversion-first PDP, cart and checkout UX" },
      { step: "Build", detail: "Theme dev, integrations, performance tuning" },
      { step: "Scale", detail: "A/B tests, retargeting and CRO retainer" },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Native iOS, Android and cross-platform Flutter / React Native apps with scalable backends.",
    category: "Development",
    icon: "Smartphone",
    keywords: ["mobile app development company", "android app development", "ios app development", "react native developers"],
    longDescription:
      "We build apps that users actually open. From MVPs validated in 8 weeks to feature-rich platforms with millions of users, our mobile team delivers buttery 60fps UX backed by a battle-tested cloud architecture.",
    bullets: [
      "Native Swift / Kotlin or cross-platform Flutter / React Native",
      "Push notifications, offline mode, in-app purchases",
      "Firebase, Supabase or custom Node/Go backends",
      "App Store + Play Store submission handled end-to-end",
    ],
    deliverables: ["iOS + Android binaries", "Admin dashboard", "API documentation", "Store listings + ASO"],
    process: [
      { step: "Validate", detail: "Wireframe → clickable prototype in 2 weeks" },
      { step: "Architect", detail: "Backend, data model, security, scaling plan" },
      { step: "Build", detail: "2-week sprints, TestFlight + internal testing" },
      { step: "Launch", detail: "Store submission, ASO, post-launch monitoring" },
    ],
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    short: "Custom CRM platforms tailored to your sales pipeline, automation and reporting needs.",
    category: "Development",
    icon: "Database",
    keywords: ["custom crm development", "crm software India", "sales automation", "business process automation"],
    longDescription:
      "Off-the-shelf CRMs force you to bend your process around their software. We do the opposite — building custom CRMs around how your team actually sells, supports and reports. Result: faster pipelines, cleaner data, happier reps.",
    bullets: [
      "Custom pipelines, stages and workflows",
      "Lead routing, scoring and automation",
      "WhatsApp, email and call integration",
      "Role-based access, audit logs and reporting",
    ],
    deliverables: ["Web + mobile CRM app", "Admin dashboard", "Migration from existing CRM", "Team training"],
    process: [
      { step: "Map", detail: "Audit current sales / support workflows" },
      { step: "Design", detail: "Pipeline UX, automation rules, integrations" },
      { step: "Build", detail: "Modular development with role-based access" },
      { step: "Adopt", detail: "Data migration, training, ongoing iteration" },
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS & Web Apps",
    short: "Multi-tenant SaaS products, dashboards and internal tools engineered to scale.",
    category: "Development",
    icon: "Rocket",
    keywords: ["saas development company", "web app development", "mern stack developers", "custom software India"],
    longDescription:
      "We've shipped SaaS products from idea to seven-figure ARR. Multi-tenancy, billing, role-based access, audit logs and observability — production-grade foundations from day one.",
    bullets: [
      "MERN, Next.js, NestJS, Python / Django, Go",
      "Stripe, Paddle, Razorpay subscription billing",
      "Multi-tenant + workspace architecture",
      "SOC2-ready logging, monitoring and backups",
    ],
    deliverables: ["Production codebase", "Admin + customer dashboards", "Billing + auth", "DevOps + CI/CD"],
    process: [
      { step: "Architect", detail: "System design, data model, scaling strategy" },
      { step: "MVP", detail: "Core flows shipped in 8–12 weeks" },
      { step: "Scale", detail: "Performance, observability, on-call playbooks" },
      { step: "Iterate", detail: "Feature retainer aligned to product analytics" },
    ],
  },
  {
    slug: "bug-fixing-maintenance",
    title: "Bug Fixing & Maintenance",
    short: "Rapid debugging, performance audits and ongoing support for existing websites and apps.",
    category: "Development",
    icon: "Bug",
    keywords: ["website bug fixing", "wordpress maintenance", "app maintenance services", "performance optimization"],
    longDescription:
      "Inherited a messy codebase? Site crashing under traffic? We're the senior engineers you call when things break. Audit, stabilize and modernize legacy code so you can sleep again.",
    bullets: [
      "24–48hr emergency triage available",
      "Codebase audits with prioritized fix roadmaps",
      "Performance and Core Web Vitals optimization",
      "Monthly maintenance retainers from ₹15,000",
    ],
    deliverables: ["Audit report", "Fixed codebase + tests", "Performance metrics", "Maintenance SLA"],
    process: [
      { step: "Triage", detail: "Reproduce issue, isolate root cause" },
      { step: "Audit", detail: "Codebase, dependencies, security review" },
      { step: "Fix", detail: "Prioritized fixes with regression tests" },
      { step: "Maintain", detail: "Monthly retainer with monitoring" },
    ],
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    short: "Rank on Google in India and globally with technical, on-page and off-page SEO.",
    category: "Marketing",
    icon: "Search",
    keywords: ["seo company India", "best seo services", "google ranking expert", "technical seo agency"],
    longDescription:
      "We don't promise rankings — we engineer them. Technical SEO that fixes crawl issues, content strategy that targets buyer-intent keywords, and link-building that earns authority. Transparent monthly reports show exactly what's moving.",
    bullets: [
      "Technical SEO audit + Core Web Vitals fixes",
      "Keyword research with search-intent mapping",
      "On-page optimization and content strategy",
      "Authority backlinks from genuine publications",
      "Monthly Looker Studio reporting dashboard",
    ],
    deliverables: ["Audit + roadmap", "Optimized pages", "Monthly content + outreach", "Ranking + traffic dashboard"],
    process: [
      { step: "Audit", detail: "Technical, content, backlink and competitor audit" },
      { step: "Strategy", detail: "Keyword map, content calendar, link plan" },
      { step: "Execute", detail: "On-page, content, technical fixes monthly" },
      { step: "Report", detail: "Live dashboard + monthly review call" },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    short: "Performance ads, social and content marketing that drives measurable ROI.",
    category: "Marketing",
    icon: "Megaphone",
    keywords: ["digital marketing agency", "performance marketing", "google ads expert", "facebook ads agency"],
    longDescription:
      "Full-funnel digital marketing — from brand awareness to bottom-funnel conversion. Google, Meta, LinkedIn and YouTube campaigns managed by certified strategists who optimize against revenue, not vanity metrics.",
    bullets: [
      "Google Ads, Meta, LinkedIn, YouTube, Programmatic",
      "Landing-page CRO + conversion tracking setup",
      "Creative production handled in-house",
      "Weekly optimizations + transparent dashboards",
    ],
    deliverables: ["Strategy doc", "Ad creatives", "Landing pages", "Performance dashboard"],
    process: [
      { step: "Plan", detail: "ICP, funnel, channel mix, budget allocation" },
      { step: "Build", detail: "Creatives, landing pages, tracking pixels" },
      { step: "Launch", detail: "Test → scale winning ad sets" },
      { step: "Optimize", detail: "Weekly creative + bid optimization" },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    short: "Strategy, content and community management for Instagram, LinkedIn, YouTube and X.",
    category: "Marketing",
    icon: "Share2",
    keywords: ["social media marketing agency", "instagram management", "linkedin marketing", "content creation services"],
    longDescription:
      "We grow communities, not just follower counts. Platform-native content, data-backed strategy and consistent execution that turns audiences into customers.",
    bullets: [
      "Monthly content calendar with hooks + captions",
      "Reels, shorts, carousels, static — produced in-house",
      "Community management + DM lead handling",
      "Growth + engagement reporting",
    ],
    deliverables: ["Strategy + calendar", "Monthly content packs", "Community management", "Performance reports"],
    process: [
      { step: "Strategy", detail: "Audience, voice, pillars, content mix" },
      { step: "Produce", detail: "Shoot, edit, copywrite, schedule" },
      { step: "Engage", detail: "Replies, DMs, community building" },
      { step: "Iterate", detail: "Monthly review + content optimization" },
    ],
  },
  {
    slug: "branding-strategy",
    title: "Branding & Strategy",
    short: "Positioning, identity systems and growth roadmaps that compound over time.",
    category: "Marketing",
    icon: "LineChart",
    keywords: ["brand strategy agency", "logo design India", "brand identity", "positioning strategy"],
    longDescription:
      "Strong brands compound. We help founders and CMOs build positioning that's sharp, identities that scale and brand systems your whole team can apply consistently across every touchpoint.",
    bullets: [
      "Brand audit, positioning, voice + messaging",
      "Logo, color, typography, brand guidelines PDF",
      "Pitch decks, investor materials, sales collateral",
      "Brand launch / relaunch campaigns",
    ],
    deliverables: ["Brand strategy doc", "Logo + identity", "Brand guidelines", "Launch assets"],
    process: [
      { step: "Discover", detail: "Audit, interviews, market mapping" },
      { step: "Position", detail: "Sharp positioning + messaging hierarchy" },
      { step: "Design", detail: "Identity system + applications" },
      { step: "Launch", detail: "Brand reveal + activation campaign" },
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    short: "YouTube, reels, ads and corporate edits with cinematic motion design.",
    category: "Creative",
    icon: "Video",
    keywords: ["video editing services", "youtube video editor", "reels editing", "corporate video production"],
    longDescription:
      "Long-form YouTube to scroll-stopping reels — our editors blend storytelling with motion design that holds attention. Subtitles, color grading, sound design and platform-native pacing included.",
    bullets: [
      "YouTube long-form, shorts, reels, TikTok",
      "Ad creatives, explainer videos, product films",
      "Motion graphics + lower thirds + subtitles",
      "Bulk monthly retainers for creators + brands",
    ],
    deliverables: ["Edited videos in 1080p / 4K", "Source files", "Captions + thumbnails", "Revisions included"],
    process: [
      { step: "Brief", detail: "Goals, references, brand guidelines" },
      { step: "Edit", detail: "Story → cuts → motion → sound" },
      { step: "Review", detail: "2 rounds of revisions standard" },
      { step: "Deliver", detail: "Final files + platform-ready exports" },
    ],
  },
  {
    slug: "photo-editing",
    title: "Photo Editing",
    short: "Retouching, background removal and product enhancement at scale.",
    category: "Creative",
    icon: "Image",
    keywords: ["photo editing services", "product photo editing", "background removal", "image retouching"],
    longDescription:
      "Catalog-grade product retouching, model and portrait editing, real-estate and lifestyle work — delivered at e-commerce scale with consistent batch processing.",
    bullets: [
      "Background removal, color correction, retouching",
      "E-commerce catalog standards (Amazon, Shopify, Flipkart)",
      "Bulk batches with consistent style",
      "Quick 24-hour turnaround available",
    ],
    deliverables: ["Edited high-res images", "Source PSDs on request", "White-background variants", "Web-optimized exports"],
    process: [
      { step: "Brief", detail: "Style guide, references, output specs" },
      { step: "Edit", detail: "Bulk editing with QC pass" },
      { step: "Review", detail: "Sample approval before full batch" },
      { step: "Deliver", detail: "Organized, named, web-optimized" },
    ],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    short: "Logos, banners, social creatives and marketing collateral that stop the scroll.",
    category: "Creative",
    icon: "Palette",
    keywords: ["graphic design services", "logo design", "social media creatives", "brochure design"],
    longDescription:
      "Concept-led graphic design for brands that care about craft. Logos, social creatives, brochures, packaging, presentations — all built on systems your team can extend.",
    bullets: [
      "Logo + visual identity systems",
      "Social media post + ad creative packs",
      "Brochures, flyers, packaging, signage",
      "Pitch decks + investor presentations",
    ],
    deliverables: ["Design files (AI / Figma)", "Print + web-ready exports", "Brand guidelines", "Editable templates"],
    process: [
      { step: "Brief", detail: "Goals, audience, brand inputs" },
      { step: "Concept", detail: "2–3 distinct directions" },
      { step: "Refine", detail: "Iterate to final design system" },
      { step: "Deliver", detail: "All formats + working files" },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    short: "Research-driven interfaces and user experiences that convert visitors into customers.",
    category: "Creative",
    icon: "Layout",
    keywords: ["ui ux design agency", "product design India", "figma designers", "mobile app ui design"],
    longDescription:
      "Strategy-led product design for SaaS, mobile apps and complex web platforms. We marry user research, interaction design and visual craft to ship interfaces people love.",
    bullets: [
      "User research, journey mapping, IA",
      "Wireframes, prototypes, design systems",
      "Web, SaaS, mobile, dashboard interfaces",
      "Usability testing + design QA on builds",
    ],
    deliverables: ["Figma file + prototype", "Design system tokens", "Handoff specs", "Usability test report"],
    process: [
      { step: "Research", detail: "Users, competitors, jobs-to-be-done" },
      { step: "Architect", detail: "Flows, IA, wireframes" },
      { step: "Design", detail: "High-fidelity UI + interactions" },
      { step: "Validate", detail: "Prototype testing + iteration" },
    ],
  },
];

export const CITIES = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai",
  "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Noida",
  "Gurgaon", "Indore", "Surat", "Kochi", "Dubai", "London",
  "New York", "Toronto", "Sydney", "Singapore",
];

export const citySlug = (c: string) => c.toLowerCase().replace(/\s+/g, "-");
export const cityFromSlug = (slug: string) =>
  CITIES.find((c) => citySlug(c) === slug.toLowerCase());
