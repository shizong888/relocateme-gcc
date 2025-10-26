"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { ContactForm } from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <ContactForm />
      </div>

      {/* Offices Section */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Dubai Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071"
              alt="Dubai Office"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 text-center px-6 text-white">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 text-white">
                Dubai
              </h3>
              <span className="inline-block px-4 py-1 mb-6 text-sm border-2 border-white rounded-full">
                Head Office
              </span>
              <div className="text-sm md:text-base space-y-2 mb-6">
                <p>RAG Biz HQ, Al Diyar Building,</p>
                <p>Sheikh Zayed Road, Al Wasl, Dubai, UAE</p>
                <p className="mt-4">+971 4 455 8612</p>
                <p>+971 56 686 8805</p>
                <p className="mt-4">info@relocatemegcc.com</p>
              </div>
            </div>
          </motion.div>

          {/* Abu Dhabi Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1668060742975-9a462159b0bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
              alt="Abu Dhabi Office"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 text-center px-6 text-white">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 text-white">
                Abu Dhabi
              </h3>
              <span className="inline-block px-4 py-1 mb-6 text-sm border-2 border-white rounded-full">
                Office
              </span>
              <div className="text-sm md:text-base space-y-2 mb-6">
                <p>Level 34 Al Maqam Tower,</p>
                <p>Abu Dhabi Global Market,</p>
                <p>Al Mariyah Island,</p>
                <p>Abu Dhabi, United Arab Emirates</p>
                <p className="mt-4">+971 4 455 8612</p>
                <p>+971 56 686 8805</p>
              </div>
            </div>
          </motion.div>

          {/* Saudi Arabia Office */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src="https://images.unsplash.com/photo-1694018359679-49465b4c0d61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
              alt="Riyadh Office"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 text-center px-6 text-white">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-3 text-white">
                Saudi Arabia
              </h3>
              <span className="inline-block px-4 py-1 mb-6 text-sm border-2 border-white rounded-full">
                Office
              </span>
              <div className="text-sm md:text-base space-y-2 mb-6">
                <p>Office 122, 1<sup>st</sup> Floor, HQ,</p>
                <p>AL-Wurud - King Abdullah Road</p>
                <p>Post Code: 12253, Riyadh 8124</p>
                <p>Saudi Arabia 2975</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
