"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--brand))] text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Logo and Description */}
          <div className="space-y-6">
            <Image
              src="/relocateme-logo.png"
              alt="RelocateMe Logo"
              width={180}
              height={40}
              className="brightness-0 invert"
            />
            <p className="text-white text-sm leading-relaxed">
              Premium Corporate Mobility, Immigration & Relocation Services in the Middle East.
              Personalised, professional support for end-to-end global mobility and corporate
              services.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Middle Column - Our Offices */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Offices</h3>
            <div className="space-y-6 text-sm">
              <div>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Dubai, UAE</p>
                    <p className="text-white">
                      Office 33, RAG Biz HQ, Al Diyar Building,<br />
                      Sheikh Zayed Road, Al Wasl, Dubai
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Abu Dhabi, UAE</p>
                    <p className="text-white">
                      Level 34 Al Maqam Tower,<br />
                      Abu Dhabi Global Market,<br />
                      Al Mariyah Island, Abu Dhabi
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-2 mb-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Riyadh, KSA</p>
                    <p className="text-white">
                      Office 122, 1st Floor, HQ,<br />
                      AL-Wurud - King Abdullah Road<br />
                      PO Box: 12253, Riyadh 8124<br />
                      Saudi Arabia 2975
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p className="text-white">Qatar • Kuwait • Bahrain • Oman</p>
              </div>
            </div>
          </div>

          {/* Right Column - Get in Touch */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-4 mb-8 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:+97145588612" className="hover:text-white/80 transition-colors">
                  +971 455 8612
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:+97156686805" className="hover:text-white/80 transition-colors">
                  +971 56 686 8805
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:info@relocatemegcc.com" className="hover:text-white/80 transition-colors">
                  info@relocatemegcc.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a href="/about-us" className="block hover:text-white/80 transition-colors">
                  About Us
                </a>
                <a href="/corporate-services" className="block hover:text-white/80 transition-colors">
                  Corporate Services
                </a>
                <a href="/immigration" className="block hover:text-white/80 transition-colors">
                  Immigration Services
                </a>
                <a href="/relocation" className="block hover:text-white/80 transition-colors">
                  Relocation Services
                </a>
                <a href="/contact" className="block hover:text-white/80 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-white">
          © 2025 RelocateMe. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
