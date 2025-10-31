"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Mail } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

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
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
        </motion.div>
      </div>
    </section>
      <Footer />
    </>
  );
}
