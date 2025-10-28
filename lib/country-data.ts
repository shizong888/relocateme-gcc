export interface CountryPageData {
  slug: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  bannerDescription: string;
  bannerFeatures: string[];
  sectionTitle: string;
  sectionHighlight: string;
  sectionParagraphs: string[];
  services: {
    title: string;
    description: string;
    image: string;
    alt: string;
  }[];
  timeline: {
    title: string;
    content: string;
  }[];
  whyChoose: {
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
    footerText: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  contactFormTitle: string;
  contactFormTitleHighlight: string;
  contactFormDescription: string;
}

export const countryData: Record<string, CountryPageData> = {
  uae: {
    slug: "uae",
    name: "UAE",
    heroTitle: "Launch Your Business in Dubai's Premier Free Zones",
    heroSubtitle: "Fast-track your company setup with 100% foreign ownership, flexible payment options, and complete support from licensing to operations",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2070&q=80",
    bannerDescription: "Your complete partner for business setup in UAE's leading free zones including DMCC, DIFC, and mainland jurisdictions.",
    bannerFeatures: [
      "100% foreign ownership without local partner",
      "Fast-track setup in 30 days from start to operations",
      "Flexible monthly payment plans available"
    ],
    sectionTitle: "Launch in the UAE with speed and confidence.",
    sectionHighlight: "Streamlined setup process across UAE free zones and mainland jurisdictions.",
    sectionParagraphs: [
      "RelocateMe provides comprehensive business setup services across the United Arab Emirates, specializing in DMCC, DIFC, Dubai mainland, and other premier free zones.",
      "From subsidized licenses and virtual office solutions to private office spaces and complete visa processing, we handle every aspect of your UAE business formation with flexible payment options and expert guidance."
    ],
    services: [
      {
        title: "DMCC & Free Zone Licensing",
        description: "Get 100% foreign business ownership with significant cost savings and flexible monthly payments. Award-winning business environment with global recognition.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop&q=80",
        alt: "DMCC Free Zone License"
      },
      {
        title: "Virtual Office Solutions",
        description: "Complete business setup without physical presence requirements. Premium business address, mail handling, forwarding services, and meeting room access.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop&q=80",
        alt: "Virtual Office"
      },
      {
        title: "Private Office Spaces",
        description: "Premium, fully-furnished private offices in the heart of Dubai. Instant operational capability with professional business address and 24/7 access.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=1000&fit=crop&q=80",
        alt: "Private Offices"
      },
      {
        title: "Soft Landing Package",
        description: "Gradual market entry with comprehensive support. Test the market before full commitment with reduced initial investment and flexible setup options.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop&q=80",
        alt: "Soft Landing"
      },
      {
        title: "Visa & Residence Services",
        description: "Complete residence visa processing for you and your team. Fast-tracked online applications, entry permits, and Emirates ID for full UAE residency.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=1000&fit=crop&q=80",
        alt: "Visa Services"
      },
      {
        title: "Banking & Financial Setup",
        description: "Fast-tracked corporate bank account opening through our banking partnerships. Full process management from application to activation.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=1000&fit=crop&q=80",
        alt: "Banking Setup"
      }
    ],
    timeline: [
      {
        title: "Step 1: Applying for DMCC License (2 days)",
        content: "Submit your documents including passport copy and a brief business summary. Our team handles all documentation and applies for your DMCC or free zone license on your behalf."
      },
      {
        title: "Step 2: Receiving the License (5 days)",
        content: "Get officially registered with DMCC or your chosen free zone and receive your business license. You're now legally established in the UAE."
      },
      {
        title: "Step 3: Applying for Visas (4 days)",
        content: "Your residence visa is applied online via our team. We handle the full visa application process, allowing you to proceed to the next step of gaining your entry permit."
      },
      {
        title: "Step 4: Receiving Visas & Emirates ID (5 days)",
        content: "Team members are now fully authorized to live and work in the UAE. Complete residence visa and Emirates ID processing for you and your employees."
      },
      {
        title: "Step 5: Opening Bank Account (10 days)",
        content: "Our team manages the full process of opening and activating your corporate bank account with fast-tracked setup through our banking partnerships."
      },
      {
        title: "Step 6: Starting Operations (1 day)",
        content: "You're fully operational, compliant, staffed, and ready for business in Dubai. Complete setup achieved in 30 days from start to finish."
      }
    ],
    whyChoose: {
      subtitle: "Award-winning free zones, complete foreign ownership, flexible payments, community access",
      items: [
        {
          title: "#1 Free Zone\nin UAE",
          description: "Award-winning business environment with global recognition and world-class infrastructure"
        },
        {
          title: "100% Foreign\nOwnership",
          description: "Complete control of your business without local partner requirements or restrictions"
        },
        {
          title: "Monthly Payment\nPlans",
          description: "Avoid high upfront costs with flexible payment options designed for startups and SMEs"
        },
        {
          title: "Tech Community\nAccess",
          description: "Join 350+ tech-driven active members in our ecosystem with networking and support"
        }
      ],
      footerText: "Ready to launch your business in Dubai? Take the first step toward establishing your company in the UAE's premier free zones."
    },
    faqs: [
      {
        question: "Can a foreigner set up a business in UAE?",
        answer: "Yes, the UAE allows 100% foreign ownership in most business activities across mainland and free zones. Certain activities may have restrictions, but our team will guide you on the best structure for your business."
      },
      {
        question: "How much does it cost to get a business license in UAE?",
        answer: "Costs vary depending on the jurisdiction (mainland vs free zone), business activity, and office space requirements. Typically, costs range from AED 15,000 to AED 50,000 for initial setup. We provide transparent cost calculations after understanding your specific needs."
      },
      {
        question: "Is UAE a good place to start a business?",
        answer: "Yes, the UAE offers a strategic location, world-class infrastructure, zero personal income tax, 100% repatriation of profits, and access to regional and global markets. It's one of the most business-friendly environments in the world."
      },
      {
        question: "How long does it take to set up a business license in UAE?",
        answer: "With RelocateMe, you can get your license in as little as 10 days for free zones, and 2-4 weeks for mainland setups. The timeline depends on the completeness of your documents and the specific jurisdiction chosen."
      },
      {
        question: "What's the difference between mainland and free zone setup?",
        answer: "Mainland companies can trade directly with the UAE market without restrictions, while free zone companies benefit from 100% foreign ownership, zero corporate tax for 50 years, and simplified setup processes. However, free zone companies typically need a local service agent to trade in the UAE market. We'll help you choose the right option for your business model."
      }
    ],
    contactFormTitle: "Ready to Launch Your",
    contactFormTitleHighlight: "Business in the UAE?",
    contactFormDescription: "Let's make your UAE expansion seamless. Share your details below and our business setup team will reach out within 24 hours to create your personalized company formation plan."
  },
  "saudi-arabia": {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    heroTitle: "Business Setup in Saudi Arabia with Expert Guidance",
    heroSubtitle: "Accelerate your company formation process in the Saudi market and completely integrate your business with full foreign ownership",
    heroImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=2070&q=80",
    bannerDescription: "Your complete partner for business setup, MISA licensing, and company registration in the Kingdom of Saudi Arabia.",
    bannerFeatures: [
      "Get your license in 10 days",
      "Dedicated account manager throughout",
      "Full compliance and ongoing support"
    ],
    sectionTitle: "Enter Saudi Arabia with clarity and confidence.",
    sectionHighlight: "Our regional expertise and on-the-ground teams ensure a seamless market entry.",
    sectionParagraphs: [
      "RelocateMe provides comprehensive business setup services across Saudi Arabia, including Riyadh, Jeddah, Dammam, and all major cities.",
      "From MISA licensing and commercial registration to ongoing compliance and corporate services, we guide you through every step of establishing and growing your business in the Kingdom."
    ],
    services: [
      {
        title: "Complete Authority Liaison",
        description: "Seamless government coordination across MISA, SAGIA, Chamber of Commerce, and all relevant Saudi authorities.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop&q=80",
        alt: "Authority Liaison"
      },
      {
        title: "100% Foreign Ownership",
        description: "Full control of your Saudi entity with complete foreign ownership options under MISA and new investment regulations.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop&q=80",
        alt: "Foreign Ownership"
      },
      {
        title: "Compliance Support",
        description: "Ongoing GRO, Muqeem, and HR services to ensure your business remains compliant with Saudi regulations.",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=1000&fit=crop&q=80",
        alt: "Compliance Support"
      },
      {
        title: "Banking & Financial Setup",
        description: "Fast-tracked corporate bank account opening through our network of banking partners including SAB, NCB, and more.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop&q=80",
        alt: "Banking Setup"
      },
      {
        title: "Office & Workspace Solutions",
        description: "Premium serviced offices and co-working spaces in Riyadh, Jeddah, and other major Saudi cities.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=1000&fit=crop&q=80",
        alt: "Office Solutions"
      },
      {
        title: "Visa & Iqama Services",
        description: "Complete visa and iqama processing for investors, employees, and dependents with fast-tracked General Manager processing.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=1000&fit=crop&q=80",
        alt: "Visa Services"
      }
    ],
    timeline: [
      {
        title: "Step 1: Check Your Company's Eligibility (1 day)",
        content: "Get a free assessment to confirm if your business qualifies for 100% foreign ownership in Saudi Arabia. Our team will evaluate your business activity and recommend whether MISA, CR, or other license types are most suitable."
      },
      {
        title: "Step 2: Apply for Your Saudi Business License (5 weeks)",
        content: "MISA, CR and all required licenses are submitted and processed on your behalf from our local team, ensuring full compliance from the start with Ministry of Investment, Chamber of Commerce, and other relevant authorities."
      },
      {
        title: "Step 3: Obtain General Manager Visa (7 weeks)",
        content: "Your General Manager's visa process is fast-tracked through us with complete QVP (Qiwa Verification Platform) and Muqeem coordination."
      },
      {
        title: "Step 4: Activate Bank Account (1 week)",
        content: "Open your corporate bank account through RelocateMe's network of bank partners with expedited processing."
      }
    ],
    whyChoose: {
      subtitle: "Zero setup gaps, expert guidance, strategic access",
      items: [
        {
          title: "Zero Setup and\nGrowth Gaps",
          description: "Your company setup, compliance, and talent needs — all handled under one roof, end-to-end"
        },
        {
          title: "50+ On-Ground\nExperts",
          description: "Local team and a dedicated account manager for your business expansion needs"
        },
        {
          title: "850+ KSA\nExpansions",
          description: "Across 30 industries with proven success"
        },
        {
          title: "Strategic\nAccess",
          description: "Tap into our network of 10K+ decision-makers: MCIT, Aramco, Sabic, Riyad Bank & more"
        }
      ],
      footerText: "Ready to launch in KSA? Talk to our team and get a personalized plan in minutes."
    },
    faqs: [
      {
        question: "Can a foreigner set up a business in Saudi Arabia?",
        answer: "Yes, Saudi Arabia now allows 100% foreign ownership in most business activities under the new MISA (Ministry of Investment of Saudi Arabia) regulations. This is part of Vision 2030's economic transformation, making it easier than ever for international companies to establish in the Kingdom."
      },
      {
        question: "How much does it cost to get a business license in Saudi Arabia?",
        answer: "Costs vary depending on the license type (MISA vs CR), business activity, and location. Typically, initial setup costs range from SAR 50,000 to SAR 150,000. We provide transparent cost calculations and handle all government fees on your behalf after understanding your specific needs."
      },
      {
        question: "What is a MISA license, and who is it for?",
        answer: "MISA (Ministry of Investment of Saudi Arabia) license is designed for foreign investors and offers 100% foreign ownership, streamlined processing, and investment incentives. It's ideal for companies looking to establish operations in Saudi Arabia with full control and access to Vision 2030 opportunities."
      },
      {
        question: "How long does it take to set up a business license in Saudi Arabia?",
        answer: "With RelocateMe, you can get your license in as little as 10 days with accelerated processing. Standard MISA applications typically take 5 weeks, while CR (Commercial Registration) can take 3-4 weeks. The timeline depends on the completeness of your documents and the specific license type chosen."
      },
      {
        question: "Is Saudi Arabia a good place to start a business?",
        answer: "Yes, Saudi Arabia is the largest economy in the Middle East with Vision 2030 driving massive infrastructure and economic diversification projects. The Kingdom offers strategic market access, zero personal income tax, world-class infrastructure, and access to $500+ billion in Vision 2030 projects across technology, tourism, entertainment, and more."
      },
      {
        question: "What ongoing compliance is required in Saudi Arabia?",
        answer: "Saudi companies need to maintain Saudization (Nitaqat) compliance, submit annual financial statements, renew iqamas and visas, manage Muqeem and Qiwa platforms, and maintain good standing with ZATCA (tax authority). RelocateMe provides ongoing GRO and compliance support to handle all these requirements seamlessly."
      }
    ],
    contactFormTitle: "Ready to Launch Your",
    contactFormTitleHighlight: "Business in Saudi Arabia?",
    contactFormDescription: "Let's make your Saudi Arabia expansion seamless. Share your details below and our business setup team will reach out within 24 hours to create your personalized company formation plan."
  }
};
