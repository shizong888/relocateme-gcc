"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    subtitle: "Supportive at every step",
    title: "Our Relocation Services",
    buttonText: "Explore now",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80"
  },
  {
    id: 2,
    subtitle: "Managing the complexities",
    title: "Professional Services",
    buttonText: "Find out more",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80"
  },
  {
    id: 3,
    subtitle: "We manage the complexities",
    title: "Immigration Services",
    buttonText: "Learn more",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=1000&fit=crop&q=80"
  }
];

export function ServicesSection() {
  return (
    <section className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden group"
          >
            {/* Background Image */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
              <p className="text-sm md:text-base mb-4 tracking-wide">{service.subtitle}</p>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 max-w-xs">
                {service.title}
              </h3>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border border-white text-white hover:bg-white/20 hover:text-white transition-all duration-300"
              >
                {service.buttonText}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
