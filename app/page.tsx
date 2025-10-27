import { Metadata } from "next";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Navbar } from "@/components/ui/navbar";
import { LocalExpertiseSection } from "@/components/sections/local-expertise-section";
import { DeliveringExcellenceSection } from "@/components/sections/delivering-excellence-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "RelocateMe GCC - Corporate Services, Relocation & Immigration Experts",
  description: "Leading provider of corporate services, relocation, and visa immigration solutions across the GCC. From business setup to family relocation and work permits, we make your move seamless.",
  keywords: [
    "GCC relocation services",
    "corporate services UAE",
    "visa immigration GCC",
    "business setup Dubai",
    "Saudi Arabia relocation",
    "Qatar immigration services",
    "Kuwait corporate services",
    "Bahrain visa services",
    "Oman relocation support",
    "Golden Visa UAE",
    "work permits GCC",
    "family relocation Middle East"
  ],
  openGraph: {
    title: "RelocateMe GCC - Corporate Services, Relocation & Immigration Experts",
    description: "Leading provider of corporate services, relocation, and visa immigration solutions across the GCC.",
    url: "https://relocateme-gcc.com",
    siteName: "RelocateMe GCC",
    images: [
      {
        url: "/relocateme-logo.png",
        width: 1200,
        height: 630,
        alt: "RelocateMe GCC - Corporate Services and Relocation Experts"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RelocateMe GCC - Corporate Services, Relocation & Immigration Experts",
    description: "Leading provider of corporate services, relocation, and visa immigration solutions across the GCC.",
    images: ["/relocateme-logo.png"]
  },
  alternates: {
    canonical: "https://relocateme-gcc.com"
  }
};

export default function Home() {
  return (
    <>
      <Navbar transparent={true} />
      <HeroGeometric />
      <LocalExpertiseSection />
      <DeliveringExcellenceSection />
      <ServicesSection />
      <StaggerTestimonials />
      <Footer />
    </>
  );
}
