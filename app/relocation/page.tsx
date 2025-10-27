"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Timeline } from "@/components/ui/timeline";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
// import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Users, Heart, Award } from "lucide-react";

export default function RelocationPage() {
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
          src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
          alt="Professional in Middle East"
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
                  Move Your Team to the GCC<br />
                  Without the Stress or Surprises
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
                Get Your Free Relocation Plan
              </Button>
            </motion.div>
          </div>
        </div>

        {/* <ScrollIndicator /> */}
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-[hsl(var(--brand))]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
              We make relocating to the Middle East simple, seamless, and fully supported.
              From home search and school search to settling in services, one team takes
              care of everything so your people feel at home from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="flex items-start gap-4 p-6 rounded-lg bg-white/10"
            >
              <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
              <span className="text-white">15+ years helping families settle in the GCC</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-4 p-6 rounded-lg bg-white/10"
            >
              <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
              <span className="text-white">One dedicated relocation consultant per family</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-4 p-6 rounded-lg bg-white/10"
            >
              <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
              <span className="text-white">Complete support from arrival to settling in</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Relocation & Mobility Services Section */}
      <section className="pt-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Relocation & Mobility Services<br />
              <span className="text-[hsl(var(--brand))]">Across the GCC</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              RelocateMe delivers personalised relocation programs across the United Arab Emirates, Saudi Arabia, Qatar, Bahrain, Oman, and Kuwait, helping companies move their talent efficiently and compliantly, with precision and care.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              We streamline the journey from airport arrival to long-term settling through a single point of contact. Your dedicated account manager coordinates every stage with clarity, specialist care, and meticulous attention to detail.
            </p>
            <Button
              size="lg"
              className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90 text-white px-6 py-5"
              onClick={scrollToContact}
            >
              Start Your Relocation
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* 1. Arrival & City Orientations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=1000&fit=crop&q=80"
              alt="Arrival & City Orientations"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Arrival & City Orientations
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Welcoming airport meet & greet, temporary accommodation, and city familiarisation tours.
              </p>
            </div>
          </motion.div>

          {/* 2. Home Search & Housing Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop&q=80"
              alt="Home Search & Housing Expertise"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Home Search & Housing
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Personalized property search, viewings, lease negotiation, and move-in coordination.
              </p>
            </div>
          </motion.div>

          {/* 3. School Search & Education Advisory */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop&q=80"
              alt="School Search & Education Advisory"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                School Search & Education
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Expert guidance through school selection, tours, and admission processes.
              </p>
            </div>
          </motion.div>

          {/* 4. Settling-In & Community Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=1000&fit=crop&q=80"
              alt="Settling-In & Community Integration"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Settling-In Services
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Utilities, banking, mobile setup, driving licence, and local registrations.
              </p>
            </div>
          </motion.div>

          {/* 5. Cultural Training & Relocation Preparation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop&q=80"
              alt="Cultural Training & Relocation Preparation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Cultural Training
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Tailored cultural awareness programs for confident transition into new environments.
              </p>
            </div>
          </motion.div>

          {/* 6. Household Moving & Personal Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&h=1000&fit=crop&q=80"
              alt="Household Moving & Personal Effects"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Household Moving
              </h3>
              <p className="text-sm md:text-base text-white/90">
                FIDI accredited door-to-door packing, customs, and transport services.
              </p>
            </div>
          </motion.div>

          {/* 7. Pet Relocation & Care */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="/images/pet-relocation.jpg"
              alt="Pet Relocation & Care"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Pet Relocation & Care
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Genuine care and attention for your family pets from pickup to reunion.
              </p>
            </div>
          </motion.div>

          {/* 8. Departure & Repatriation Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=1000&fit=crop&q=80"
              alt="Departure & Repatriation Management"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Departure & Repatriation
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Complete exit management including lease termination and account closures.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Relocation Services Timeline Section */}
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
              <span className="text-[hsl(var(--brand))]">Comprehensive relocation services</span> designed to make your move to the GCC seamless and stress-free for every family member.
            </h2>
          </motion.div>
        </div>

        <Timeline
          data={[
            {
              title: "Arrival & City Orientations",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We provide a welcoming start from the moment employees and families arrive. Services include airport meet and greet, temporary accommodation booking, and city welcome packs. We also arrange preview and tailored executive orientation programs, offering familiarisation tours for individuals, families, or corporate groups to explore neighbourhoods, housing, schools, and essential amenities.
                  </p>
                </div>
              )
            },
            {
              title: "Home Search & Housing Expertise",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We manage the full home search process; from area orientation and accompanied property viewings to lease negotiation, tenancy contract registration, utility connections, property handover and move-in coordination. Each search is personalised to the assignee's preferences, budget, and company policy, ensuring compliant contracts and a smooth relocation experience.
                  </p>
                </div>
              )
            },
            {
              title: "School Search & Education Advisory",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Our education specialists guide families through the entire school search journey. After the initial briefing call to assess curriculum preferences, we shortlist suitable options, schedule accompanied school tours, and guide the family through the online admission processes, ensuring every child transitions smoothly into their new environment.
                  </p>
                </div>
              )
            },
            {
              title: "Settling-In & Community Integration",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Our settling-in services ensure a comfortable and compliant start for every assignee. We assist with utilities, banking, mobile registration, driving licence conversion, and all local registrations, enabling a smooth, well-supported arrival into the new community, with tailored on-the-ground assistance.
                  </p>
                </div>
              )
            },
            {
              title: "Cultural Training & Relocation Preparation",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We prepare assignees and families for life in their new country through tailored cultural awareness training programs. Our cultural training experts tailor individual and group sessions to help navigate workplace etiquette, communication styles, and daily customs to ensure a confident, respectful transition into the new environment.
                  </p>
                </div>
              )
            },
            {
              title: "Household Moving & Personal Effects",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    Door to door packing, customs, transport and setup through our FIDI accredited, long standing approved partner network ensures your household goods arrive on time and in perfect condition, ready for day one living.
                  </p>
                </div>
              )
            },
            {
              title: "Pet Relocation & Care",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    We treat your family pets with genuine care and attention, ensuring they are comfortable, safely handled and kept at ease from pickup to reunion. Every detail is arranged for a calm journey and a happy arrival.
                  </p>
                </div>
              )
            },
            {
              title: "Departure & Repatriation Management",
              content: (
                <div className="bg-gray-50 rounded-lg p-6 md:p-8">
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    At the end of an assignment, we manage the full exit process; lease termination, property hand-back, deposit recovery, school withdrawal, and account closures, ensuring cost control and compliance for employers, and peace of mind for employees.
                  </p>
                </div>
              )
            }
          ]}
        />
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseSection
        audience="Families"
        subtitle="Because We Make Moving Feel Like Coming Home"
        items={[
          {
            icon: <Users size={32} />,
            title: "Local Expertise",
            description: "We know every neighborhood, school, and community across the GCC."
          },
          {
            icon: <Heart size={32} />,
            title: "Personal Touch",
            description: "Your dedicated consultant understands your unique needs."
          },
          {
            icon: <CheckCircle size={32} />,
            title: "Full Transparency",
            description: "You'll always know what's happening and what comes next."
          },
          {
            icon: <Award size={32} />,
            title: "15 Years of Experience",
            description: "We've helped thousands of families settle successfully."
          }
        ]}
        footerText="It's the support every relocating family deserves."
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
                  How long does the relocation process take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base space-y-3 pb-6">
                  <p><strong>Typical Timeline:</strong> 2–6 weeks from consultation to move-in (subject to your schedule and arrival in-country).</p>
                  <p><strong>Early Engagement:</strong> Many clients engage us early, so we can run company setup, employment visas, and dependent visas in parallel.</p>
                  <p><strong>Corporate Moves:</strong> We move fast: upon initiation, we hold a detailed briefing call; once the assignee lands, housing is typically secured within 1–2 days, school tours begin, and the employee and family are settled within 2 weeks—anywhere in the GCC.</p>
                  <p><strong>What We Optimise:</strong> Real-time housing availability, the best-fit school admissions process, and a plan precisely aligned to your requirements.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Can you help if we're relocating multiple families?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  This is our core business. We specialise in partnering with corporates and multinationals to relocate teams, from single assignees to 1,000+ employees across the GCC. We coordinate multiple families simultaneously, delivering streamlined, standardised processes with personalised attention to detail. Each family benefits from dedicated support and efficient, scalable processes that keep timelines and costs on track.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  What if we can't visit before moving?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  We offer virtual home and school tours, detailed neighborhood guides, and can arrange temporary accommodation so you can make final decisions after arrival.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Do you help with school admissions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Yes, our Education Specialists guide you through the entire school selection and admission process, bringing high-level expertise to research the best options, arrange tours, and support with applications and enrolment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  What's included in settling-in services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  We help with utilities setup, bank account opening, mobile phone activation, driver's license applications, and everything needed to make sure you settle into your new location as quickly as possible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Can you help with pet relocation?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Yes, we manage all pet relocation logistics including documentation, health certificates, travel arrangements, and ensuring compliance with import regulations.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm
        title="Ready to Start Your"
        titleHighlight="Relocation Journey?"
        description="Let's make your move to the GCC seamless. Share your details below and our relocation specialists will reach out within 24 hours to create your personalized relocation plan."
        imageSrc="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
        imageAlt="Family relocating to the GCC"
      />

      <Footer />
    </>
  );
}
