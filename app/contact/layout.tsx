import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | RelocateMe GCC - Get Your Free Consultation",
  description: "Contact RelocateMe for corporate services, relocation, or immigration support across the GCC. Get your free consultation within 24 hours.",
  keywords: [
    "contact RelocateMe",
    "GCC relocation consultation",
    "corporate services inquiry",
    "immigration support contact",
    "business setup consultation",
    "relocation services quote"
  ],
  openGraph: {
    title: "Contact Us | RelocateMe GCC",
    description: "Contact RelocateMe for corporate services, relocation, or immigration support across the GCC.",
    url: "https://relocateme-gcc.com/contact",
    siteName: "RelocateMe GCC",
    images: [
      {
        url: "/relocateme-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact RelocateMe GCC"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | RelocateMe GCC",
    description: "Get your free consultation for corporate services, relocation, or immigration.",
    images: ["/relocateme-logo.png"]
  },
  alternates: {
    canonical: "https://relocateme-gcc.com/contact"
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
