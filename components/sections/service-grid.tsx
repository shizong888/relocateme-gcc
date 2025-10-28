"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface ServiceCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

interface ServiceGridProps {
  services: ServiceCard[];
}

export function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
          className="relative aspect-square overflow-hidden group"
        >
          <Image
            src={service.image}
            alt={service.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white">
            <h3 className="text-2xl md:text-3xl font-light mb-4">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-white/90">
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
