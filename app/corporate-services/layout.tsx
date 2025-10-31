import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Services GCC | RelocateMe - Business Setup & HR Support",
  description: "Comprehensive corporate services across the GCC. Business setup, office solutions, HR support, tenancy management, and value-added services for expanding companies.",
  keywords: [
    "corporate services GCC",
    "business setup UAE",
    "company formation Dubai",
    "Saudi Arabia business setup",
    "office solutions GCC",
    "HR support Middle East",
    "tenancy management UAE",
    "corporate relocation services",
    "business licensing GCC",
    "company registration Middle East",
    "serviced offices Dubai",
    "PRO services UAE"
  ],
  openGraph: {
    title: "Corporate Services GCC | RelocateMe",
    description: "Comprehensive corporate services across the GCC. Business setup, office solutions, HR support, and value-added services.",
    url: "https://www.relocatemegcc.com/corporate-services",
    siteName: "RelocateMe GCC",
    images: [
      {
        url: "/api/og?image=https%3A%2F%2Fwww.relocatemegcc.com%2Fimages%2Fhero-corporate.jpg",
        width: 1200,
        height: 630,
        alt: "RelocateMe GCC Corporate Services"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Services GCC | RelocateMe",
    description: "Comprehensive corporate services across the GCC for expanding businesses.",
    images: ["/api/og?image=https%3A%2F%2Fwww.relocatemegcc.com%2Fimages%2Fhero-corporate.jpg"]
  },
  alternates: {
    canonical: "https://www.relocatemegcc.com/corporate-services"
  }
};

export default function CorporateServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
