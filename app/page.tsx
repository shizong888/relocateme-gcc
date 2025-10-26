import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Navbar } from "@/components/ui/navbar";
import { LocalExpertiseSection } from "@/components/sections/local-expertise-section";
import { DeliveringExcellenceSection } from "@/components/sections/delivering-excellence-section";
import { ServicesSection } from "@/components/sections/services-section";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { Footer } from "@/components/ui/footer";

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
