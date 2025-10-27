import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Resources - RelocateMe GCC",
  description: "Expert insights on relocation, immigration, and corporate services across the GCC. Stay informed with our latest articles and guides.",
  keywords: [
    "GCC relocation insights",
    "UAE immigration news",
    "expat resources Middle East",
    "Golden Visa UAE",
    "international schools Dubai",
    "Saudi Arabia business setup",
    "Qatar relocation guide",
    "Kuwait corporate services",
    "Bahrain work permits",
    "Oman visa information"
  ],
  openGraph: {
    title: "Insights & Resources - RelocateMe GCC",
    description: "Expert insights on relocation, immigration, and corporate services across the GCC.",
    url: "https://www.relocatemegcc.com/insights",
    siteName: "RelocateMe GCC",
    images: [
      {
        url: "/relocateme-logo.png",
        width: 1200,
        height: 630,
        alt: "RelocateMe GCC Insights"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Resources - RelocateMe GCC",
    description: "Expert insights on relocation, immigration, and corporate services across the GCC.",
    images: ["/relocateme-logo.png"]
  }
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
