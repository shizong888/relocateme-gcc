import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Relocation Services GCC | RelocateMe - Family & Corporate Relocation",
  description: "Expert relocation services across the UAE, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait. From home search and school selection to settling-in support for families and employees.",
  keywords: [
    "GCC relocation services",
    "UAE family relocation",
    "Saudi Arabia relocation support",
    "corporate relocation Middle East",
    "school search GCC",
    "home search Dubai",
    "expat relocation services",
    "international relocation GCC",
    "family relocation support",
    "employee relocation programs"
  ],
  openGraph: {
    title: "Relocation Services GCC | RelocateMe",
    description: "Expert relocation services across the GCC. From home search and school selection to settling-in support for families and employees.",
    url: "https://relocateme-gcc.com/relocation",
    siteName: "RelocateMe GCC",
    images: [
      {
        url: "/relocateme-logo.png",
        width: 1200,
        height: 630,
        alt: "RelocateMe GCC Relocation Services"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Relocation Services GCC | RelocateMe",
    description: "Expert relocation services across the GCC for families and employees.",
    images: ["/relocateme-logo.png"]
  },
  alternates: {
    canonical: "https://relocateme-gcc.com/relocation"
  }
};

export default function RelocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
