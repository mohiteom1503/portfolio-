// =========================================================================
// Om J. Mohite Portfolio - Central Data Store
// Holds live projects, pricing packages, bio, socials, and client reviews.
// Editing this file or updating via admin.html updates your live website!
// =========================================================================

const portfolioData = {
  bio: {
    lead: "Full Stack Developer & UI/UX Designer based in Belagavi, Karnataka.",
    points: [
      {
        icon: "fa-solid fa-code",
        title: "Early Coding Roots",
        desc: "Fell in love with programming in childhood through interactive tools like Mimo. Started building functional web prototypes since age 13, and now engineer high-converting digital storefronts for real-world clinics, retail showrooms, and local businesses."
      },
      {
        icon: "fa-solid fa-graduation-cap",
        title: "Academic & Analytical Rigor",
        desc: "Achieved 6 A*s in Cambridge IGCSE (10th grade) and currently pursuing Class 12 Science in Belagavi. I bring disciplined mathematical logic and structured problem-solving to every line of code I write."
      },
      {
        icon: "fa-solid fa-award",
        title: "Creative Rhythm & Executive Diplomacy",
        desc: "Trained classical Tabla artist (inter-school champion & international Rangotsav Spectacular Performance Award winner) and two-time Model UN delegate representing nations in the UNSC & WTO. This gives me a musician's sense of design balance and executive-level client communication."
      }
    ],
    quote: "Whenever I build a website, it is my passion. I pour my complete self into achieving perfection, making sure the client gets far more than expected.",
    stats: [
      { icon: "fa-solid fa-laptop-code", title: "Coding Since 13", desc: "Years of hands-on web coding & building functional platforms" },
      { icon: "fa-solid fa-graduation-cap", title: "6 A*s", desc: "Cambridge IGCSE Academic Excellence" },
      { icon: "fa-solid fa-drum", title: "Classical Tabla", desc: "Award-winning musical rhythm & artistic balance" },
      { icon: "fa-solid fa-landmark-dome", title: "MUN Delegate", desc: "UNSC & WTO Diplomatic Representation" }
    ]
  },
  pricing: [
    {
      badge: "Starter",
      title: "Single-Page Website",
      desc: "Ideal for solo doctors, consultants, cafes, and local service providers seeking a fast digital footprint.",
      price: "8,999",
      days: "3–5 Business Days",
      features: [
        "Sub-second load speed (<0.8s FCP)",
        "100% Mobile-first responsive design",
        "Direct WhatsApp click-to-chat integration",
        "Google Maps location & business hours",
        "On-page local SEO & metadata"
      ]
    },
    {
      badge: "Business & Clinic",
      featured: true,
      title: "Professional Practice",
      desc: "Built for medical clinics, diagnostic centres, and growing businesses like Shri Kamakshi Clinic.",
      price: "16,999",
      days: "5–7 Business Days",
      features: [
        "Everything in Starter Package",
        "Dual practice / multi-specialty showcase",
        "Direct 1-tap phone booking flow",
        "Doctor credentials & patient reviews carousel",
        "Deep Schema.org JSON-LD Local SEO graph",
        "Google Search Console verification"
      ]
    },
    {
      badge: "Custom Platform",
      title: "Commercial Suite",
      desc: "Engineered for jewellery showrooms and luxury retail requiring live rates, calculators, and API pipelines.",
      price: "28,999",
      days: "10–14 Business Days",
      features: [
        "Everything in Professional Package",
        "Real-time bullion/market API rate ticker",
        "Interactive weight-to-cost price estimator",
        "Dynamic price trend charts (Chart.js)",
        "Rate-lock WhatsApp order funnel",
        "Netlify serverless functions & edge caching"
      ]
    }
  ],
  socials: {
    phone: "+91 9604964299",
    whatsapp: "+91 9604964299",
    email: "mohiteom1503@gmail.com",
    location: "Belagavi, Karnataka, India",
    github: "https://github.com/mohiteom1503",
    linkedin: "https://www.linkedin.com/in/mohiteom1503",
    instagram: "https://www.instagram.com/itsomjmohite"
  },
  reviews: {
    googleRating: "5.0",
    reviewCount: "18",
    googleReviewUrl: "https://maps.google.com/?q=Om+J+Mohite+Web+Development+Belagavi",
    testimonials: [
      {
        name: "Dr. Amit S. Raikar",
        role: "Consulting Orthopaedic Manual Therapist & Clinic Director",
        client: "Shri Kamakshi Clinic & Orthopaedic Centre, Belagavi",
        rating: 5,
        quote: "Om delivered an exceptional, mobile-first website for our clinic. The dual-specialty structure distinguishing family medicine from orthopaedic manual therapy, combined with direct one-tap telephone appointment booking, exceeded our expectations. The site loads instantaneously on patient mobile phones.",
        url: "https://shrikamakshiclinic.netlify.app"
      },
      {
        name: "Om Sai Jewellers",
        role: "Showroom Management & Bullion Retail",
        client: "Shahapur, Belagavi",
        rating: 5,
        quote: "The automated live gold and silver bullion ticker and interactive weight-to-cost calculator developed by Om brought daily price transparency to our customers in Belagavi. It has streamlined customer inquiries directly to our showroom WhatsApp.",
        url: "https://omsaijewellersbgm.netlify.app"
      }
    ]
  },
  projects: [
    {
      id: "shri-kamakshi-clinic",
      title: "Shri Kamakshi Clinic & Orthopaedic Centre",
      url: "https://shrikamakshiclinic.netlify.app",
      displayUrl: "shrikamakshiclinic.netlify.app",
      image: "kamakshi-preview.png",
      category: "Healthcare & Orthopaedics",
      tags: ["Healthcare", "Orthopaedics", "Belagavi Practice"],
      description: "Designed and engineered a high-converting, mobile-first web platform for a dual-specialty medical clinic in Belagavi. The platform bridges family medicine and advanced orthopaedic manual rehabilitation with clear doctor profiles, direct appointment calling, and verified patient reviews.",
      highlights: [
        "Mobile-First Architecture: Optimized for lightning-fast loading on 4G/5G with zero layout shift",
        "Direct Appointment Flow: Integrated one-tap appointment booking for Dr. Amit (+91 9972459785)",
        "Dual Practice Showcase: Clear distinction between Consulting Family Medicine and Sports Rehab"
      ],
      techStack: ["HTML5", "Modern CSS", "Responsive UI", "Schema.org SEO", "Netlify"]
    },
    {
      id: "om-sai-jewellers",
      title: "Om Sai Jewellers",
      url: "https://omsaijewellersbgm.netlify.app",
      displayUrl: "omsaijewellersbgm.netlify.app",
      image: "omsai-preview.png",
      category: "Luxury Jewellery & Retail",
      tags: ["Jewellery & Retail", "Live Bullion Rates", "Shahapur, Belagavi"],
      description: "Built a luxury digital storefront for Belagavi’s renowned jewellery showroom in Shahapur. Engineered with real-time hourly bullion market rates (24K Gold, 22K Gold, 925 Pure Silver) via StockeZee, an interactive metal price calculator, collection lookbooks, and instant WhatsApp inquiry pipelines.",
      highlights: [
        "Live Market Bullion Ticker: Real-time gold and silver spot prices updated dynamically",
        "Interactive Cost Calculator: Empowers shoppers to calculate exact prices based on weight & purity",
        "100% BIS Hallmarked Trust: Prominent trust badges and daily wear collection showcases"
      ],
      techStack: ["HTML5 / Modern JS", "CSS Grid", "Live Rates API", "WhatsApp API", "Netlify"]
    }
  ]
};

// Global exports
const portfolioProjects = portfolioData.projects;
const portfolioPricing = portfolioData.pricing;

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
  window.portfolioProjects = portfolioProjects;
  window.portfolioPricing = portfolioPricing;
}
