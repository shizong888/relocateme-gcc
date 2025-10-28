"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Timeline } from "@/components/ui/timeline";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Users, Heart, Award, FileCheck, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/section-header";
import { BlueBanner } from "@/components/sections/blue-banner";
import { ServiceGrid } from "@/components/sections/service-grid";

export default function ImmigrationPage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const immigrationServices = [
    {
      title: "Golden Visas & Premium Residency",
      description: "Long-term residency programs with expert end-to-end management.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=1000&fit=crop&q=80",
      alt: "Golden Visas & Premium Residency"
    },
    {
      title: "Employee Visa Processing",
      description: "Full lifecycle management of work visas, iqamas, and renewals.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1000&fit=crop&q=80",
      alt: "Employee Visa Processing & Management"
    },
    {
      title: "Dependent Visa Sponsorship",
      description: "Family sponsorship for spouses, children, parents, and domestic helpers.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=1000&fit=crop&q=80",
      alt: "Dependent Visa Sponsorship & Support"
    },
    {
      title: "Work Permits & Labour Approvals",
      description: "Ministry coordination for work permits and labour card approvals.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=1000&fit=crop&q=80",
      alt: "Work Permits & Labour Approvals"
    },
    {
      title: "Government Portal Management",
      description: "Expert management of Absher, Qiwa, Muqeem, and UAE smart portals.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop&q=80",
      alt: "Government Portal Registration & Management"
    },
    {
      title: "Document Attestation",
      description: "Embassy and ministry attestation for educational and personal documents.",
      image: "https://images.unsplash.com/photo-1629141821139-ac3cc2f27a60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      alt: "Document Attestation & Legalisation"
    },
    {
      title: "PRO / GRO Services",
      description: "On-the-ground Public Relations Officers for government submissions.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=1000&fit=crop&q=80",
      alt: "PRO / GRO Services"
    },
    {
      title: "Value-Added Support",
      description: "Bespoke mobility solutions including medical and Emirates ID registration.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1000&fit=crop&q=80",
      alt: "Value-Added Immigration Support"
    }
  ];

  return (
    <>
      <Navbar transparent={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
          alt="Visa and Immigration Services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                  Visa & Immigration Services<br />
                  Made Simple and Compliant
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300 px-6 py-5"
                onClick={scrollToContact}
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <BlueBanner
        description="We make visa and immigration processing clear, compliant, and efficient. From work permits and Golden Visas to PRO services and document attestation, one team handles everything so you can focus on your business."
        features={[
          "15+ years managing visas and immigration across the GCC",
          "In-country immigration specialists across every location",
          "Complete compliance and transparent processing"
        ]}
      />

      {/* Visa & Immigration Services Section */}
      <section className="pt-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 mb-16">
          <SectionHeader
            title="Visa & Immigration Services"
            highlightedText="Across the GCC"
            paragraphs={[
              "RelocateMe delivers comprehensive visa and immigration support across the United Arab Emirates, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait, ensuring smooth, compliant, and timely processing for employees, dependents, and corporate entities."
            ]}
            buttonText="Reach Out To Discuss Your Immigration Needs"
            onButtonClick={scrollToContact}
          />
        </div>

        <ServiceGrid services={immigrationServices} />
      </section>

      {/* Immigration Services Timeline Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6 pt-20 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight text-left">
              <span className="text-[hsl(var(--brand))]">Comprehensive immigration services</span> designed to keep your business compliant and your employees supported throughout the GCC.
            </h2>
          </motion.div>
        </div>

        <Timeline
          data={[
            {
              title: "Golden Visas & Premium Residency",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We manage long-term residency-by-investment programs including UAE Golden Visas and Saudi Arabia's Premium Residency schemes. Our specialists oversee eligibility assessments, documentation, and end-to-end coordination to ensure a seamless and successful application.
                  </p>
                </div>
              )
            },
            {
              title: "Employee Visa Processing & Management",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    From initial entry permits to work visas and iqamas (KSA), our immigration team manages the full visa lifecycle - renewals, status changes, transfers, cancellations, medicals/biometrics, and National ID applications, all with strict adherence to local labour and immigration laws for clean, on-time approvals.
                  </p>
                </div>
              )
            },
            {
              title: "Dependent Visa Sponsorship & Support",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We handle spouse, child, parent, and domestic sponsorship end-to-end. Entry permits, status changes, medicals/biometrics, National ID, insurance, and renewals, including document attestation where required, ensuring families are onboarded quickly and in full compliance.
                  </p>
                </div>
              )
            },
            {
              title: "Work Permits & Labour Approvals",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We coordinate with Ministry of Labour and immigration authorities to secure and renew work permits, labour cards, and related approvals, ensuring your employees can begin work quickly and legally across the GCC.
                  </p>
                </div>
              )
            },
            {
              title: "Government Portal Registration & Management",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We manage all relevant government portals, including Absher, Qiwa, Muqeem, Mudad, GOSI, ZATCA, and MOFA in Saudi Arabia, as well as UAE smart government portals and their equivalents across the GCC.
                  </p>
                </div>
              )
            },
            {
              title: "Document Attestation & Legalisation",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Our document attestation and legalisation services cover educational, personal, and corporate documents through embassies, ministries, and relevant authorities, ensuring every document meets the standards for local recognition and visa processing.
                  </p>
                </div>
              )
            },
            {
              title: "PRO / GRO Services",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    With experienced Public Relations Officers (PROs) and Government Relations Officers (GROs) on the ground, we handle all in-country submissions, renewals, and clearances directly with authorities, saving time, reducing complexity, and ensuring full compliance.
                  </p>
                </div>
              )
            },
            {
              title: "Value-Added Immigration Support",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Beyond traditional visa processing, RelocateMe provides bespoke mobility solutions including onboarding coordination, family visa concierge support, medical and Emirates ID registration, and ongoing aftercare, all delivered with accuracy, transparency, and care.
                  </p>
                </div>
              )
            }
          ]}
        />
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseSection
        audience="Companies"
        subtitle="High-touch service, compliant outcomes, every time."
        items={[
          {
            icon: <FileCheck size={32} />,
            title: "Full Compliance",
            description: "Every visa and permit processed according to local regulations."
          },
          {
            icon: <Users size={32} />,
            title: "Dedicated Specialists",
            description: "Your immigration expert manages every step personally."
          },
          {
            icon: <CheckCircle size={32} />,
            title: "Complete Transparency",
            description: "Full visibility with consistent updates."
          },
          {
            icon: <Award size={32} />,
            title: "15 Years of Expertise",
            description: "We've processed thousands of visas across the GCC."
          }
        ]}
        footerText="It's the immigration support every expanding business deserves."
        buttonText="Get Started Today"
        onButtonClick={scrollToContact}
      />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Frequently Asked <span className="text-[hsl(var(--brand))]">Questions</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  How long does visa processing take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Processing times vary by country and visa type. UAE employment visas typically take 2-4 weeks, while Golden Visas can take 4-8 weeks. Saudi Arabia work permits generally take 3-6 weeks. We provide accurate timelines based on your specific requirements and keep you updated throughout the process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Can you handle multiple employees at once?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Yes, we specialise in processing bulk visa applications for companies. Whether you need visas for 5 or 500 employees, our team has the capacity and systems to manage large-scale immigration projects efficiently while maintaining compliance and individual attention to each case.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  What documents do we need to provide?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Requirements vary by country and visa type, but generally include passports, educational certificates, employment contracts, and medical certificates. After our initial consultation, we'll provide a comprehensive checklist tailored to your specific needs and guide you through the attestation process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Do you provide PRO services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Yes, our experienced PROs and GROs handle all government interactions on your behalf, including submissions, collections, and follow-ups with immigration departments, labour offices, and other authorities across the GCC.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Can you help with Golden Visa applications?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Absolutely. We manage all types of long-term residency applications including UAE Golden Visas for investors, entrepreneurs, and talented professionals, as well as Saudi Arabia's Premium Residency program. Our specialists guide you through eligibility requirements and handle the entire application process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  What countries do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  We provide visa and immigration services across all GCC countries: UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. Our team has local expertise and established relationships with authorities in each market.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  How do you ensure compliance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Our team stays current with all immigration law changes and maintains direct relationships with government authorities. We conduct regular compliance audits, maintain detailed documentation, and follow strict procedures to ensure every visa and permit meets current legal requirements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm
        title="Ready to Simplify Your"
        titleHighlight="Visa & Immigration Process?"
        description="Let's make your GCC immigration seamless. Share your details below and our visa specialists will reach out within 24 hours to create your personalized immigration plan."
        imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
        imageAlt="Visa and immigration services"
      />

      <Footer />
    </>
  );
}
