"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { CheckCircle, Users, Heart, Shield, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar transparent={false} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              Our <span className="text-[hsl(var(--brand))]">Story</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Established in 2011, we have transitioned from providing relocation services to the United Arab Emirates, to delivering comprehensive programs to the GCC throughout the Gulf Cooperation Council, earning the trust of leading corporates to move their talent with care and precision.
              </p>
              <p>
                Backed by over 20 years of oil & gas experience, we run dedicated programs for major operators and oilfield contractors. Our multilingual teams manage every relocation and professional application with care.
              </p>
              <div className="pt-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[hsl(var(--brand))] flex-shrink-0 mt-1" size={24} />
                    <span className="text-xl font-light">20+ years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[hsl(var(--brand))] flex-shrink-0 mt-1" size={24} />
                    <span className="text-xl font-light">100% outstanding client service satisfaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[hsl(var(--brand))] flex-shrink-0 mt-1" size={24} />
                    <span className="text-xl font-light">Multilingual expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[hsl(var(--brand))] flex-shrink-0 mt-1" size={24} />
                    <span className="text-xl font-light">GCC regional knowledge, global standards</span>
                  </li>
                </ul>
              </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
              What We <span className="text-[hsl(var(--brand))]">Do</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              On-the-Ground Support
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide a full spectrum of relocation and global services to meet the finer details of settling employees into their new places. We understand employees as individuals, we know the ideal properties, our Home Search Specialists source the ideal properties, our Education Specialists place children in the right schools, and our Cultural Trainers and Handover & Settling-In Team take care of the rest. The result: seamless housing, schooling, and community integration, ensuring every employee and their family feels at home from day one.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="p-8 bg-gray-50 rounded-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <Users className="text-[hsl(var(--brand))] flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-2xl font-light mb-3">Personalisation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tailored programmes aligned to meet unique needs, timelines, objectives, and budget.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-gray-50 rounded-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <Heart className="text-[hsl(var(--brand))] flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-2xl font-light mb-3">People</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Embedded regional teams across the GCC, unified by a single point of contact to deliver personalised, end-to-end support programmes.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-gray-50 rounded-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <Shield className="text-[hsl(var(--brand))] flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-2xl font-light mb-3">Integrity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transparent communication, clear expectations, and honest, compliant guidance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 bg-gray-50 rounded-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="text-[hsl(var(--brand))] flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-2xl font-light mb-3">Care</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Compassionate support that recognises the human and family aspects of every relocation.
                  </p>
                </div>
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

      <Footer />
    </>
  );
}
