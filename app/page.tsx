import { Metadata } from "next";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Navbar } from "@/components/ui/navbar";
import { LocalExpertiseSection } from "@/components/sections/local-expertise-section";
import { DeliveringExcellenceSection } from "@/components/sections/delivering-excellence-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { ContactForm } from "@/components/sections/contact-form";
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
    url: "https://www.relocatemegcc.com",
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
    canonical: "https://www.relocatemegcc.com"
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
      <ContactForm
        title="Ready to Make"
        titleHighlight="Your Move?"
        description="Whether you're establishing your business in the GCC, relocating your team, or navigating visa requirements, we're here to help. Connect with our experts today for a personalized consultation."
        imageSrc="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
        imageAlt="Dubai Skyline - Contact RelocateMe GCC"
      />
      <Footer />
    </>
  );
}
