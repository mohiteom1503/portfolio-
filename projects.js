// =========================================================================
// Om J. Mohite Portfolio - Project Showcase Data
// 
// TO ADD A NEW PROJECT IN GITHUB:
// 1. Copy one of the project blocks below (from { to }, including the comma).
// 2. Paste it at the end of the array (before the closing bracket ];).
// 3. Fill in your project's title, url, description, and preview image.
// 4. Click "Commit changes" in GitHub. Netlify will auto-publish in ~30 seconds!
// =========================================================================

const portfolioProjects = [
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
];

// If running in browser, attach to window object
if (typeof window !== 'undefined') {
  window.portfolioProjects = portfolioProjects;
}
