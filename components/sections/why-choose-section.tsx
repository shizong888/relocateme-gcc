"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface WhyChooseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface WhyChooseSectionProps {
  audience: string; // "Families" or "Companies"
  subtitle: string;
  items: WhyChooseItem[];
  footerText: string;
  buttonText: string;
  onButtonClick: () => void;
}

export function WhyChooseSection({
  audience,
  subtitle,
  items,
  footerText,
  buttonText,
  onButtonClick,
}: WhyChooseSectionProps) {
  return (
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
            Why {audience} Choose <span className="text-[hsl(var(--brand))]">RelocateMe</span>
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[hsl(var(--brand))]/10 rounded-full flex items-center justify-center mx-auto mb-4 text-[hsl(var(--brand))]">
                {item.icon}
              </div>
              <h3 className="text-xl font-light mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            {footerText}
          </p>
          <Button
            size="lg"
            className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90 text-white px-6 py-5"
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
