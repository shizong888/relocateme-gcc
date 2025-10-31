"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar transparent={false} />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* 404 Number */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-9xl md:text-[12rem] font-light text-[hsl(var(--brand))] leading-none">
                404
              </h1>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                We couldn't find the page you're looking for. It may have been moved, deleted, or never existed.
              </p>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-1 bg-[hsl(var(--brand))] mx-auto mb-12 rounded-full"
            />

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90 text-white px-8 py-6 text-base"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Go to Homepage
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-900 hover:bg-gray-100 px-8 py-6 text-base"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="border-t border-gray-200 pt-12"
            >
              <h3 className="text-xl font-light text-gray-900 mb-6">
                Popular Pages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <Link
                  href="/corporate-services"
                  className="p-4 rounded-lg border border-gray-200 hover:border-[hsl(var(--brand))] hover:shadow-md transition-all duration-300 group"
                >
                  <h4 className="font-medium text-gray-900 group-hover:text-[hsl(var(--brand))] transition-colors">
                    Corporate Services
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Business setup & support
                  </p>
                </Link>

                <Link
                  href="/immigration"
                  className="p-4 rounded-lg border border-gray-200 hover:border-[hsl(var(--brand))] hover:shadow-md transition-all duration-300 group"
                >
                  <h4 className="font-medium text-gray-900 group-hover:text-[hsl(var(--brand))] transition-colors">
                    Immigration Services
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Visa & residency solutions
                  </p>
                </Link>

                <Link
                  href="/relocation"
                  className="p-4 rounded-lg border border-gray-200 hover:border-[hsl(var(--brand))] hover:shadow-md transition-all duration-300 group"
                >
                  <h4 className="font-medium text-gray-900 group-hover:text-[hsl(var(--brand))] transition-colors">
                    Relocation Services
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Seamless family moves
                  </p>
                </Link>

                <Link
                  href="/about-us"
                  className="p-4 rounded-lg border border-gray-200 hover:border-[hsl(var(--brand))] hover:shadow-md transition-all duration-300 group"
                >
                  <h4 className="font-medium text-gray-900 group-hover:text-[hsl(var(--brand))] transition-colors">
                    About Us
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Learn about RelocateMe
                  </p>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
