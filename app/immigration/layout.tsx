import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigration Services GCC | RelocateMe - Visa & Work Permits",
  description: "Expert visa and immigration services across the GCC. Golden Visas, work permits, employee visas, PRO services, and document attestation for seamless immigration processing.",
  keywords: [
    "GCC immigration services",
    "UAE Golden Visa",
    "work permits GCC",
    "visa services Dubai",
    "Saudi Arabia visa support",
    "employee visa processing",
    "PRO services UAE",
    "document attestation GCC",
    "iqama processing Saudi Arabia",
    "Qatar work permits",
    "Kuwait visa services",
    "immigration compliance GCC",
    "premium residency UAE"
  ],
  openGraph: {
    title: "Immigration Services GCC | RelocateMe",
    description: "Expert visa and immigration services across the GCC. Golden Visas, work permits, and comprehensive immigration support.",
    url: "https://relocateme-gcc.com/immigration",
    siteName: "RelocateMe GCC",
    images: [
      {
        url: "/api/og?image=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1436491865332-7a61a109cc05%3Fw%3D1200%26q%3D80",
        width: 1200,
        height: 630,
        alt: "RelocateMe GCC Immigration Services"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Immigration Services GCC | RelocateMe",
    description: "Expert visa and immigration services across the GCC for seamless processing.",
    images: ["/api/og?image=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1436491865332-7a61a109cc05%3Fw%3D1200%26q%3D80"]
  },
  alternates: {
    canonical: "https://relocateme-gcc.com/immigration"
  }
};

export default function ImmigrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
