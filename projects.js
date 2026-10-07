// Om J. Mohite Portfolio - Central Data Store
// Generated: 2026-10-07T04:09:21.566Z

const portfolioData = {
  "bio": {
    "lead": "Full Stack Developer & UI/UX Designer based in Belagavi, Karnataka.",
    "points": [
      {
        "icon": "fa-solid fa-code",
        "title": "Early Coding Roots",
        "desc": "Fell in love with programming in childhood through interactive tools like Mimo. Started building functional web prototypes since age 13, and now engineer high-converting digital storefronts for real-world clinics, retail showrooms, and local businesses."
      },
      {
        "icon": "fa-solid fa-graduation-cap",
        "title": "Academic & Analytical Rigor",
        "desc": "Achieved 6 A*s in Cambridge IGCSE (10th grade) and currently pursuing Class 12 Science in Belagavi. I bring disciplined mathematical logic and structured problem-solving to every line of code I write."
      },
      {
        "icon": "fa-solid fa-award",
        "title": "Creative Rhythm & Executive Diplomacy",
        "desc": "Trained classical Tabla artist (inter-school champion & international Rangotsav Spectacular Performance Award winner) and two-time Model UN delegate representing nations in the UNSC & WTO. This gives me a musician's sense of design balance and executive-level client communication."
      }
    ],
    "quote": "Whenever I build a website, it is my passion. I pour my complete self into achieving perfection, making sure the client gets far more than expected."
  },
  "pricing": [
    {
      "badge": "Starter",
      "title": "Single-Page Website",
      "price": "8,999",
      "days": "3–5 Business Days"
    },
    {
      "badge": "Business & Clinic",
      "featured": true,
      "title": "Professional Practice",
      "price": "16,999",
      "days": "5–7 Business Days"
    },
    {
      "badge": "Custom Platform",
      "title": "Commercial Suite",
      "price": "28,999",
      "days": "10–14 Business Days"
    }
  ],
  "socials": {
    "phone": "+91 9604964299",
    "whatsapp": "+91 9604964299",
    "email": "mohiteom1503@gmail.com",
    "location": "Belagavi, Karnataka, India",
    "github": "https://github.com/mohiteom1503",
    "linkedin": "https://www.linkedin.com/in/mohiteom1503",
    "instagram": "https://www.instagram.com/analog_aura136.1"
  },
  "reviews": {
    "googleRating": "5.0",
    "reviewCount": "18",
    "googleReviewUrl": "https://maps.google.com/?q=Om+J+Mohite+Web+Development+Belagavi"
  },
  "projects": [
    {
      "id": "shri-kamakshi-clinic",
      "title": "Shri Kamakshi Clinic & Orthopaedic Centre",
      "url": "https://shrikamakshiclinic.netlify.app",
      "displayUrl": "shrikamakshiclinic.netlify.app",
      "image": "kamakshi-preview.png",
      "category": "Healthcare & Orthopaedics",
      "tags": [
        "Healthcare",
        "Orthopaedics",
        "Belagavi Practice"
      ],
      "description": "Designed and engineered a high-converting, mobile-first web platform for a dual-specialty medical clinic in Belagavi. The platform bridges family medicine and advanced orthopaedic manual rehabilitation with clear doctor profiles, direct appointment calling, and verified patient reviews.",
      "highlights": [
        "Mobile-First Architecture: Optimized for lightning-fast loading on 4G/5G with zero layout shift",
        "Direct Appointment Flow: Integrated one-tap appointment booking for Dr. Amit (+91 9972459785)",
        "Dual Practice Showcase: Clear distinction between Consulting Family Medicine and Sports Rehab"
      ],
      "techStack": [
        "HTML5",
        "Modern CSS",
        "Responsive UI",
        "Schema.org SEO",
        "Netlify"
      ]
    },
    {
      "id": "om-sai-jewellers",
      "title": "Om Sai Jewellers",
      "url": "https://omsaijewellersbgm.netlify.app",
      "displayUrl": "omsaijewellersbgm.netlify.app",
      "image": "omsai-preview.png",
      "category": "Luxury Jewellery & Retail",
      "tags": [
        "Jewellery & Retail",
        "Live Bullion Rates",
        "Shahapur, Belagavi"
      ],
      "description": "Built a luxury digital storefront for Belagavi’s renowned jewellery showroom in Shahapur. Engineered with real-time hourly bullion market rates (24K Gold, 22K Gold, 925 Pure Silver) via StockeZee, an interactive metal price calculator, collection lookbooks, and instant WhatsApp inquiry pipelines.",
      "highlights": [
        "Live Market Bullion Ticker: Real-time gold and silver spot prices updated dynamically",
        "Interactive Cost Calculator: Empowers shoppers to calculate exact prices based on weight & purity",
        "100% BIS Hallmarked Trust: Prominent trust badges and daily wear collection showcases"
      ],
      "techStack": [
        "HTML5 / Modern JS",
        "CSS Grid",
        "Live Rates API",
        "WhatsApp API",
        "Netlify"
      ]
    }
  ]
};
const portfolioProjects = portfolioData.projects;
const portfolioPricing = portfolioData.pricing;

if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
  window.portfolioProjects = portfolioProjects;
  window.portfolioPricing = portfolioPricing;
}
