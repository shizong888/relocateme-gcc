"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface BlueBannerProps {
  description: string;
  features: string[];
}

export function BlueBanner({ description, features }: BlueBannerProps) {
  return (
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
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-8 rounded-lg bg-white/10"
            >
              <CheckCircle className="text-white flex-shrink-0 mt-1" size={24} />
              <span className="text-white">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
