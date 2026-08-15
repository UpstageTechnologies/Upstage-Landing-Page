export const pricingPlans = [
  {
     id: 1,
    name: "Landing page",
    price: "$199",
    description: "For very small businesses.",
    mostPopular: false,
    pages: " 1 page",
    features: [
      "Responsive design",
      "Mobile optimization", 
      "Deployment"
    ]},
  {
    id: 2,
    name: "Upstage Starter",
    price: "$599",
    description: "For very small businesses.",
    mostPopular: false,
    deliveryTime: "3-5 working days",
    pages: "Home, About, Services, Contact",
    features: [
      "Responsive design",
      "Mobile optimization",
      "Modern UI",
      "WhatsApp/Contact integration",
      "Google Maps",
      "Contact form",
      "Social media links",
      "Basic SEO",
      "SSL",
      "Analytics",
      "Deployment"
    ]
  },
  {
    id: 3,
    name: "Upstage Business",
    price: "$999",
    description: "This should probably become your most popular package.",
    mostPopular: true,
    deliveryTime: "7-10 working days",
    pages: "Up to 6 pages",
    pageList: [
      "Home",
      "About",
      "Services",
      "Gallery",
      "Testimonials",
      "Contact"
    ],
    features: [
      "Custom UI/UX",
      "Responsive design",
      "Lead/enquiry forms",
      "WhatsApp integration",
      "Google Maps",
      "Gallery",
      "Testimonials",
      "Basic SEO",
      "Google analytics",
      "Google Search Console setup",
      "Performance optimization",
      "Social media integration",
      "Deployment"
    ],
    idealFor: [
      "Clinics",
      "Schools",
      "Tuition centres",
      "Hotels",
      "Restaurants",
      "Manufacturers",
      "Traders",
      "Local businesses",
      "Construction companies",
      "Interior designers",
      "Small businesses",
      "Professional services",
      "etc.."
    ]
  },
  {
    id: 4,
    name: "Upstage Premium",
    price: "$1,999",
    description: "Everything in Business + ",
    mostPopular: false,
    pages: "Up to 12 pages",
    features: [
      "More advanced UI/UX",
      "Animations",
      "Advanced enquiry forms",
      "Gallery",
      "Testimonials",
      "FAQ",
      "Blog/news section",
      "SEO-friendly structure",
      "Google Analytics",
      "Search Console",
      "WhatsApp lead generation",
      "Conversion-focused landing sections",
      "Performance optimization",
      "Speed optimization",
      "Basic schema markup"
    ]
  },
  {
    id: 4,
    name: "Dynamic Basic",
    price: "$2,499 ",
    description: "Business Website + Admin Panel",
    mostPopular: false,
    deliveryTime: "Custom",
    isDynamic: true,
    adminFeatures: [
      "Custom website",
      "Admin panel",
      "Database",
      "Website content management",
      "Services management",
      "Images management",
      "Testimonials management",
      "Analytics",
      "Dashboard",
      "SEO",
      "Enquiries tracking",
      "Blog/news management",
      "Contact information updates",
      "Deployment"
    ],
    technology: "React + Firebase"
  },
  {
    id: 5,
    name: "Dynamic Business",
    price: "$3,499",
    description: "Website + Admin Panel",
    mostPopular: false,
    deliveryTime: "Custom",
    isDynamic: true,
    features: [
      "Custom website",
      "Admin panel",
      "Authentication",
      "Database",
      "CMS",
      "Manage pages /content",
      "Manage images",
      "Manage testimonials",
      "Enquiry management",
      "Blog/news management",
      "Notifications/email integration",
      "Dashboard",
      "Analytics",
      "SEO",
      "WhatsApp integration",
      "Deployment"
    ],
    idealFor: [
      "Schools",
      "Hospitals",
      "Manufacturers",
      "Service companies"
    ]
  },
  {
    id: 6,
    name: "Dynamic Premium",
    price: "$4,999",
    description: "Web Application - Make your website work like an application",
    mostPopular: false,
    deliveryTime: "Custom",
    isDynamic: true,
    isCustom: true,
    features: [
      "Appointment booking",
      "Customer login",
      "Employee login",
      "Online application",
      "Appointment/Request system",
      "Payment gateway",
      "Reports",
      "Dashbase",
      "Lead management",
      "Membership system",
      "Customer portal",
      "Inventory management",
      "CRM",
      "Automated emails",
      "API integrations",
      "Custom features on requirement"
    ]
  }
];

export const appPricingPlans = [
  {
    id: 1,
    name: "Simple App",
    price: "$4,999",
    description: "For information and simple business apps.",
    mostPopular: false,
    screens: "Up to 8 screens",
    platforms: "Android + iOS",
    features: [
      "React Native",
      "Basic UI/UX",
      "Authentication if required",
      "Firebase/backend",
      "Basic database",
      "Push notifications",
      "Basic testing",
      "Play Store submission",
      "App Store submission"
    ],
    idealFor: [
      "Information apps",
      "Directory apps",
      "Simple booking apps",
      "Small business apps",
      "Internal utility apps"
    ]
  },
  {
    id: 2,
    name: "Business App",
    price: "$9,999",
    description: "Your main selling package for serious businesses.",
    mostPopular: true,
    screens: "Up to 15 screens",
    platforms: "Android + iOS",
    features: [
      "Custom UI/UX",
      "Login/register",
      "User profiles",
      "Firebase/backend",
      "Database",
      "Push notifications",
      "Admin panel",
      "API integrations",
      "Basic reports",
      "Analytics",
      "App Store + Play Store deployment"
    ],
    idealFor: [
      "School apps",
      "Clinic apps",
      "Employee apps",
      "Business management apps",
      "Customer service apps",
      "Booking apps"
    ]
  },
  {
    id: 3,
    name: "Professional",
    price: "$16,999",
    description: "For serious businesses requiring advanced features.",
    mostPopular: false,
    screens: "20–25 screens",
    platforms: "Android + iOS",
    features: [
      "Multiple user roles",
      "Advanced dashboard",
      "Payment gateway",
      "Advanced APIs",
      "Notifications",
      "File/image uploads",
      "Reports",
      "Advanced search/filtering",
      "Maps/location",
      "Third-party integrations",
      "More extensive QA"
    ]
  },
  {
    id: 4,
    name: "Advanced",
    price: "$24,999",
    description: "Complete software product - App + Admin Dashboard + Backend.",
    mostPopular: false,
    isAdvanced: true,
    features: [
      "Mobile App + Admin Web Dashboard",
      "Backend infrastructure",
      "Custom UI/UX",
      "Multiple user roles & permissions",
      "Advanced database design",
      "Payment gateway integration",
      "Advanced reporting & analytics",
      "API integrations",
      "Third-party service integration",
      "Comprehensive testing",
      "Enterprise-level deployment"
    ],
    examples: [
      "ERP mobile application",
      "Hospital management app",
      "School management ecosystem",
      "Inventory platform",
      "Employee management",
      "Logistics app",
      "CRM",
      "SaaS mobile application"
    ]
  },
  {
    id: 5,
    name: "Marketplace / On-Demand",
    price: "$35,000–$50,000+ (Custom)",
    description: "Multi-app ecosystem with customer app, service provider app, and admin dashboard.",
    mostPopular: false,
    isCustom: true,
    features: [
      "Customer app",
      "Service provider app",
      "Admin dashboard",
      "Backend infrastructure",
      "Payment gateway integration",
      "Real-time notifications",
      "Location services",
      "Rating & review system",
      "Advanced analytics",
      "Multiple language support",
      "Third-party integrations",
      "Complete ecosystem"
    ],
    examples: [
      "Food delivery",
      "Home services",
      "Taxi/Ride-sharing",
      "Rental platform",
      "Marketplace",
      "Appointment platform"
    ],
    note: "Complex versions can easily go beyond quoted price"
  }
];
