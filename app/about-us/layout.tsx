import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | RelocateMe GCC - Our Story & Values",
  description: "Learn about RelocateMe GCC. Established in 2011, we deliver comprehensive relocation, corporate services, and immigration support across the GCC with personalised care and 20+ years of expertise.",
  keywords: [
    "about RelocateMe",
    "GCC relocation company",
    "corporate services provider",
    "immigration experts GCC",
    "relocation company history",
    "Middle East relocation specialists"
  ],
  openGraph: {
    title: "About Us | RelocateMe GCC",
    description: "Learn about RelocateMe GCC and our 20+ years of expertise in relocation, corporate services, and immigration across the Gulf.",
    url: "https://www.relocatemegcc.com/about",
    siteName: "RelocateMe GCC",
    images: [
      {
        url: "/api/og?image=https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "About RelocateMe GCC"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | RelocateMe GCC",
    description: "Learn about our story, values, and 20+ years of GCC expertise.",
    images: ["/api/og?image=https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"]
  },
  alternates: {
    canonical: "https://www.relocatemegcc.com/about"
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
