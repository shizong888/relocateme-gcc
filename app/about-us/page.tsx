"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navbar transparent={true} />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
          alt="RelocateMe GCC Team - Expert Relocation and Immigration Services"
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/90">
                  Your Trusted Partner for GCC<br />Relocation & Immigration
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
                20+ years of expertise. 100% client satisfaction. Local knowledge, global standards.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-white/10 border border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300 px-8 py-6 text-lg"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 text-center">
              Our <span className="text-[hsl(var(--brand))]">Story</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Established in 2011, we have transitioned from providing relocation services to the United Arab Emirates, to delivering comprehensive programs to the GCC throughout the Gulf Cooperation Council, earning the trust of leading corporates to move their talent with care and precision.
              </p>
              <p>
                Backed by over 20 years of oil & gas experience, we run dedicated programs for major operators and oilfield contractors. Our multilingual teams manage every relocation and professional application with care.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4-Image Grid - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                alt="20+ years of experience in GCC relocation and immigration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
                <h3 className="text-3xl md:text-4xl font-light mb-4">20+ Years</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Two decades of expertise in GCC relocation and immigration services
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="100% outstanding client service satisfaction"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
                <h3 className="text-3xl md:text-4xl font-light mb-4">100% Satisfaction</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Outstanding client service satisfaction across all our programs
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
                alt="Multilingual expertise across the GCC region"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
                <h3 className="text-3xl md:text-4xl font-light mb-4">Multilingual</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Expert teams fluent in Arabic, English, and other key languages
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative aspect-square overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="GCC regional knowledge with global standards"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
                <h3 className="text-3xl md:text-4xl font-light mb-4">Global Standards</h3>
                <p className="text-sm md:text-base leading-relaxed">
                  Deep GCC regional knowledge delivered to international standards
                </p>
              </div>
            </motion.div>
          </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight mb-8">
              We provide a <span className="text-[hsl(var(--brand))]">full spectrum of relocation and global services</span> to meet the finer details of settling employees into their new places.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl">
              We understand employees as individuals, we know the ideal properties, our Home Search Specialists source the ideal properties, our Education Specialists place children in the right schools, and our Cultural Trainers and Handover & Settling-In Team take care of the rest. The result: seamless housing, schooling, and community integration, ensuring every employee and their family feels at home from day one.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="relative overflow-hidden rounded-lg min-h-[280px] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Personalisation - Tailored relocation programmes"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-light mb-3 text-white">Personalisation</h3>
                <p className="text-white/90 leading-relaxed">
                  Tailored programmes aligned to meet unique needs, timelines, objectives, and budget.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-lg min-h-[280px] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                alt="People - Embedded regional teams across the GCC"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-light mb-3 text-white">People</h3>
                <p className="text-white/90 leading-relaxed">
                  Embedded regional teams across the GCC, unified by a single point of contact to deliver personalised, end-to-end support programmes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-lg min-h-[280px] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                alt="Integrity - Transparent communication and compliant guidance"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-light mb-3 text-white">Integrity</h3>
                <p className="text-white/90 leading-relaxed">
                  Transparent communication, clear expectations, and honest, compliant guidance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-hidden rounded-lg min-h-[280px] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80"
                alt="Care - Compassionate support for families"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-2xl md:text-3xl font-light mb-3 text-white">Care</h3>
                <p className="text-white/90 leading-relaxed">
                  Compassionate support that recognises the human and family aspects of every relocation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[hsl(var(--brand))]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-white">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Local & Regional Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <h3 className="text-2xl font-light mb-4 text-white">Local & Regional Expertise</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Deep Knowledge from decades in the GCC</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Time zones & immigration landscape insight</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Cultural and practical understanding</span>
                </li>
              </ul>
            </motion.div>

            {/* Personalised Care */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <h3 className="text-2xl font-light mb-4 text-white">Personalised Care</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Tailored solutions for every family & employee</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Dedicated focal point of contact</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Attentive to unique relocation needs</span>
                </li>
              </ul>
            </motion.div>

            {/* Global Perspective */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <h3 className="text-2xl font-light mb-4 text-white">Global Perspective</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Fluent in Arabic, English and other key languages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Diverse team with international backgrounds</span>
                </li>
              </ul>
            </motion.div>

            {/* Market Advantage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <h3 className="text-2xl font-light mb-4 text-white">Market Advantage</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Access to an industry trusted properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="flex-shrink-0 mt-1" size={20} />
                  <span>Local on-the-ground with documentation & authorities</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm
        title="Ready to Make"
        titleHighlight="Your Move?"
        description="Our team is here to support your relocation, immigration, and corporate services needs across the GCC. Let's discuss how we can help make your transition seamless."
        imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
        imageAlt="Contact RelocateMe GCC Team"
      />

      <Footer />
    </>
  );
}
