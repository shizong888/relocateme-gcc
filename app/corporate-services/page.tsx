"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Timeline } from "@/components/ui/timeline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Users, Heart, Award } from "lucide-react";

export default function CorporateServicesPage() {
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
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
          alt="Corporate expansion in GCC"
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
                  Complete Corporate Services<br />
                  for Your GCC Expansion
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
                Get My Free Relocation Plan
              </Button>
            </motion.div>
          </div>
        </div>
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
              From business setup to office solutions, HR support, and beyond.
              One trusted partner for all your corporate needs across the region.
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
              <span className="text-white">15+ years helping businesses expand to the GCC</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-start gap-4 p-6 rounded-lg bg-white/10"
            >
              <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
              <span className="text-white">One dedicated contact from start to finish</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-start gap-4 p-6 rounded-lg bg-white/10"
            >
              <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
              <span className="text-white">8 specialized services, all under one roof</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Corporate Services Section */}
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
              Expanding to the GCC Should Feel<br />
              <span className="text-[hsl(var(--brand))]">Strategic, Not Complicated</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Everything your business needs to establish, operate, and thrive in the region
            </p>
            <Button
              size="lg"
              className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90 text-white px-6 py-5"
              onClick={scrollToContact}
            >
              Explore Our Services
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Business Set-Up */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=1000&fit=crop&q=80"
              alt="Business Set-Up"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Business Set-Up
              </h3>
              <p className="text-sm md:text-base text-white/90">
                We simplify business setup across the region, handling formation, licensing, and compliance.
              </p>
            </div>
          </motion.div>

          {/* Comprehensive Office Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop&q=80"
              alt="Comprehensive Office Solutions"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Comprehensive Office Solutions
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Fully furnished, 5-star serviced office spaces designed to meet every need.
              </p>
            </div>
          </motion.div>

          {/* HR Support Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=1000&fit=crop&q=80"
              alt="HR Support Services"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                HR Support Services
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Tailored HR guidance covering onboarding, policies, and compliance.
              </p>
            </div>
          </motion.div>

          {/* Tenancy Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=1000&fit=crop&q=80"
              alt="Tenancy Management"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Tenancy Management
              </h3>
              <p className="text-sm md:text-base text-white/90">
                From lease negotiations to renewals and landlord coordination, we manage it all.
              </p>
            </div>
          </motion.div>

          {/* Expense Management */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=1000&fit=crop&q=80"
              alt="Expense Management"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Expense Management
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Streamlined solutions for expense tracking and reporting with full transparency.
              </p>
            </div>
          </motion.div>

          {/* Cultural Training Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=1000&fit=crop&q=80"
              alt="Cultural Training Programs"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Cultural Training Programs
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Interactive sessions to ease adaptation to local culture and build stronger connections.
              </p>
            </div>
          </motion.div>

          {/* Language Training Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop&q=80"
              alt="Language Training Programs"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Language Training Programs
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Personalised language courses to support integration and confident communication.
              </p>
            </div>
          </motion.div>

          {/* Spousal Training Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80"
              alt="Spousal Training Programs"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <h3 className="text-2xl md:text-3xl font-light mb-4">
                Spousal Training Programs
              </h3>
              <p className="text-sm md:text-base text-white/90">
                Career and personal support for accompanying spouses to help families thrive together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 Steps Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 md:px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Your Simple Path to Corporate<br />
              <span className="text-[hsl(var(--brand))]">Success in the GCC</span>
            </h2>
            <p className="text-xl text-gray-600">5 clear steps from planning to operation</p>
          </motion.div>
        </div>

        <Timeline
          data={[
            {
              title: "Discovery Call",
              content: (
                <div>
                  <p className="text-gray-600 mb-2">Tell us about your corporate needs and goals.</p>
                  <p className="text-[hsl(var(--brand))] font-medium mb-4">You'll walk away with clarity and a comprehensive service roadmap.</p>
                  <div className="rounded-lg overflow-hidden aspect-video">
                    <Image
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
                      alt="Discovery call meeting"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            },
            {
              title: "Tailored Solution Design",
              content: (
                <div>
                  <p className="text-gray-600 mb-2">We'll recommend the right combination of services for your business.</p>
                  <p className="text-[hsl(var(--brand))] font-medium mb-4">You'll know exactly what's needed and what it costs.</p>
                  <div className="rounded-lg overflow-hidden aspect-video">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                      alt="Solution design planning"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            },
            {
              title: "Implementation",
              content: (
                <div>
                  <p className="text-gray-600 mb-2">We execute on all fronts - setup, office, HR, compliance.</p>
                  <p className="text-[hsl(var(--brand))] font-medium mb-4">You'll get updates every week in your tracker.</p>
                  <div className="rounded-lg overflow-hidden aspect-video">
                    <Image
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                      alt="Implementation and execution"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            },
            {
              title: "Team Integration",
              content: (
                <div>
                  <p className="text-gray-600 mb-2">We handle visas, onboarding, and cultural adaptation.</p>
                  <p className="text-[hsl(var(--brand))] font-medium mb-4">Your team integrates smoothly without delays.</p>
                  <div className="rounded-lg overflow-hidden aspect-video">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                      alt="Team integration and onboarding"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            },
            {
              title: "Ongoing Support",
              content: (
                <div>
                  <p className="text-gray-600 mb-2">From expense management to renewals and compliance.</p>
                  <p className="text-[hsl(var(--brand))] font-medium mb-4">You'll have continuous support as your business grows.</p>
                  <div className="rounded-lg overflow-hidden aspect-video">
                    <Image
                      src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                      alt="Ongoing business support"
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )
            }
          ]}
        />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              Why Companies Choose <span className="text-[hsl(var(--brand))]">RelocateMe</span>
            </h2>
            <p className="text-xl text-gray-600">Because We Keep It Simple, Honest, and Human</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white p-8 rounded-lg border border-gray-200"
            >
              <h3 className="text-2xl font-normal mb-4">One Partner for Everything</h3>
              <p className="text-gray-600">You won't deal with multiple vendors.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-lg border border-gray-200"
            >
              <h3 className="text-2xl font-normal mb-4">Real People, Not Portals</h3>
              <p className="text-gray-600">You'll always talk to your dedicated manager.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg border border-gray-200"
            >
              <h3 className="text-2xl font-normal mb-4">Transparency at Every Step</h3>
              <p className="text-gray-600">You'll never be left guessing what's happening.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg border border-gray-200"
            >
              <h3 className="text-2xl font-normal mb-4">15 Years of GCC Expertise</h3>
              <p className="text-gray-600">We've done this hundreds of times before.</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-900 mb-8 font-normal">
              It's the peace of mind every expansion deserves.
            </p>
            <Button
              size="lg"
              className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90 text-white px-6 py-5"
              onClick={scrollToContact}
            >
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

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
                  How long does it take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  In the UAE, company formation typically takes one week to two months, depending on the company type and jurisdiction. Free zones are generally faster, while mainland setups can take longer due to additional approvals. In Saudi Arabia, the process is usually longer overall - up to two months. We guide you through each step and keep approvals moving.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Can I start without visiting the GCC?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Yes, many of our clients complete the process remotely. We handle most procedures on your behalf, and you may only need to visit for final document signing or bank account opening in some jurisdictions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Will you tell me what documents I need?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Absolutely — you'll get a full checklist after your first call. We'll guide you through every document requirement and help you prepare everything correctly to avoid delays.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Do you help with banking and tax?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Yes, we'll guide you through post-registration steps including opening corporate bank accounts, tax registration (where applicable), and understanding your ongoing compliance obligations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Can you relocate my team or family?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Yes — homes, schools, and everything in between. Our relocation services cover all aspects of moving your employees and their families to the region, ensuring a smooth transition.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  What countries do you cover?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  We specialize in all GCC countries: UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. Our team has local expertise in each market to ensure smooth company formation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  Can I choose only specific services?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Absolutely. While we offer comprehensive packages, you can select individual services based on your needs. Whether it's just business setup, office solutions, or HR support, we'll tailor our services to match your requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-b border-gray-200">
                <AccordionTrigger className="text-xl font-normal text-gray-900 hover:no-underline py-6">
                  What makes your office solutions different?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base pb-6">
                  Our office solutions range from prestigious business addresses for company registration to fully furnished 5-star serviced offices in prime locations. We offer flexibility with private offices, flexi desks, and virtual office options to suit every business need and budget.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm
        title="Ready to Expand Your"
        titleHighlight="Business to the GCC?"
        description="Let's make your GCC expansion seamless. Share your details below and our corporate services team will reach out within 24 hours to create your personalized setup plan."
        imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
        imageAlt="Corporate expansion to the GCC"
      />

      <Footer />
    </>
  );
}
