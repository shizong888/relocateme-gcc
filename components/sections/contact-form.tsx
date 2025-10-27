"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

interface ContactFormProps {
  title?: string;
  titleHighlight?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function ContactForm({
  title = "Get in",
  titleHighlight = "Touch",
  description = "Have questions about our services? We're here to help. Fill out the form below and our team will get back to you within 24 hours.",
  imageSrc = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  imageAlt = "Contact RelocateMe"
}: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countryCode, setCountryCode] = useState("+971");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      countryCode: countryCode,
      pageName: typeof window !== 'undefined' ? document.title : 'Home Page',
      formName: 'Contact Us Popup',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit form');
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative min-h-[400px] lg:min-h-[600px] order-2 lg:order-1"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-20 order-1 lg:order-2"
        >
          <div className="space-y-8 max-w-2xl w-full">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-4">
                      {title} <span className="text-[hsl(var(--brand))]">{titleHighlight}</span>
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 mt-8">
                    <div className="space-y-5">
                      <div>
                        <Label className="text-base">
                          Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          required
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label className="text-base">
                          Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          className="mt-2"
                        />
                      </div>

                      <div>
                        <Label className="text-base">
                          Phone <span className="text-red-500">*</span>
                        </Label>
                        <div className="relative mt-2 flex items-center border border-input rounded-md hover:border-ring transition-colors focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                          <Select defaultValue="+971" onValueChange={setCountryCode}>
                            <SelectTrigger className="border-0 border-r border-input rounded-none rounded-l-md focus:ring-0 focus:ring-offset-0 hover:border-input w-[110px] bg-transparent">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="+971">🇦🇪 +971</SelectItem>
                              <SelectItem value="+966">🇸🇦 +966</SelectItem>
                              <SelectItem value="+974">🇶🇦 +974</SelectItem>
                              <SelectItem value="+973">🇧🇭 +973</SelectItem>
                              <SelectItem value="+968">🇴🇲 +968</SelectItem>
                              <SelectItem value="+965">🇰🇼 +965</SelectItem>
                              <SelectItem value="+1">🇺🇸 +1</SelectItem>
                              <SelectItem value="+44">🇬🇧 +44</SelectItem>
                              <SelectItem value="+91">🇮🇳 +91</SelectItem>
                              <SelectItem value="+92">🇵🇰 +92</SelectItem>
                              <SelectItem value="+20">🇪🇬 +20</SelectItem>
                              <SelectItem value="+961">🇱🇧 +961</SelectItem>
                              <SelectItem value="+962">🇯🇴 +962</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            type="tel"
                            name="phone"
                            placeholder="50 123 4567"
                            required
                            pattern="[0-9\s\-\(\)]{7,15}"
                            title="Please enter a valid phone number (7-15 digits)"
                            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-l-none"
                          />
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))]/90 text-white font-semibold px-12"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-light mb-4">Thank You!</h2>
                  <p className="text-gray-600 text-lg mb-8">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    size="lg"
                    className="border-[hsl(var(--brand))] text-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))] hover:text-white"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
