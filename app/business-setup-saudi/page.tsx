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
import { Building2, Users, TrendingUp, Network, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/sections/section-header";
import { BlueBanner } from "@/components/sections/blue-banner";
import { ServiceGrid } from "@/components/sections/service-grid";
import { countryData } from "@/lib/country-data";

export default function SaudiArabiaPage() {
  const data = countryData["saudi-arabia"];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar transparent={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        <Image
          src={data.heroImage}
          alt={`Business setup in ${data.name}`}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight whitespace-pre-line">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                  {data.heroTitle}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {data.heroSubtitle}
              </p>
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
                className="bg-white/10 border border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300 px-8 py-6 text-base"
                onClick={scrollToContact}
              >
                Register for a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blue Banner Section */}
      <BlueBanner
        description={data.bannerDescription}
        features={data.bannerFeatures}
      />

      {/* Services Grid Section */}
      <section className="pt-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 mb-16">
          <SectionHeader
            title={data.sectionTitle}
            highlightedText={data.sectionHighlight}
            paragraphs={data.sectionParagraphs}
            buttonText="Register for a Free Consultation"
            onButtonClick={scrollToContact}
          />
        </div>

        <ServiceGrid services={data.services} />
      </section>

      {/* Timeline Section */}
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
              Your <span className="text-[hsl(var(--brand))]">Business Set-Up Journey in KSA</span>
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Achieve a confident market entry with RelocateMe's structured, compliance-first approach.
            </p>
          </motion.div>
        </div>

        <Timeline
          data={data.timeline.map(item => ({
            title: item.title,
            content: (
              <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {item.content}
                </p>
              </div>
            )
          }))}
        />
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseSection
        audience="Companies"
        subtitle={data.whyChoose.subtitle}
        items={data.whyChoose.items.map((item, index) => {
          const icons = [<Building2 key={0} size={32} />, <Users key={1} size={32} />, <TrendingUp key={2} size={32} />, <Network key={3} size={32} />];
          return {
            icon: icons[index],
            title: item.title,
            description: item.description
          };
        })}
        footerText={data.whyChoose.footerText}
        buttonText="Book a Free Consultation"
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
              {data.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm
        title={data.contactFormTitle}
        titleHighlight={data.contactFormTitleHighlight}
        description={data.contactFormDescription}
        imageSrc="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=2070&q=80"
        imageAlt={`Business setup in ${data.name}`}
      />

      <Footer />
    </>
  );
}
