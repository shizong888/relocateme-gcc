"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface SectionHeaderProps {
  title: string;
  highlightedText?: string;
  titleAfterHighlight?: string;
  paragraphs?: string[];
  buttonText?: string;
  onButtonClick?: () => void;
}

export function SectionHeader({
  title,
  highlightedText,
  titleAfterHighlight,
  paragraphs,
  buttonText,
  onButtonClick
}: SectionHeaderProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight mb-8">
          {title}
          {highlightedText && (
            <>
              {" "}
              <span className="text-[hsl(var(--brand))]">{highlightedText}</span>
            </>
          )}
          {titleAfterHighlight && <> {titleAfterHighlight}</>}
        </h2>
      </motion.div>

      {paragraphs && paragraphs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl"
        >
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`text-lg text-gray-600 leading-relaxed ${index < paragraphs.length - 1 || buttonText ? 'mb-6' : ''}`}
            >
              {paragraph}
            </p>
          ))}
          {buttonText && (
            <Button
              variant="outline"
              size="default"
              className="bg-[hsl(var(--brand))] border border-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))]/90 hover:text-white px-6 py-5 mt-2"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </motion.div>
      )}
    </>
  );
}
