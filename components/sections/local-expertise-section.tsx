"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function LocalExpertiseSection() {
    return (
        <section className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Side - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-20"
                >
                    <div className="space-y-6 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                            Where Global Business Meets{" "}
                            <span className="text-[hsl(var(--brand))]">Local Expertise</span>
                        </h2>

                        <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                            <p>
                                Our on-the-ground teams provide tailored global mobility and corporate services, including
                                company formation, immigration and visa support, employee relocation, and cross-cultural
                                training.
                            </p>

                            <p>
                                We navigate the complexities of regional regulations and compliance, allowing our clients to
                                focus on what matters most; their business success.
                            </p>

                            <p>
                                With an established footprint across the United Arab Emirates (UAE), Saudi Arabia (KSA), Qatar,
                                Kuwait, Bahrain, and Oman, we deliver trusted, end-to-end support across the GCC.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="relative min-h-[400px] lg:min-h-screen"
                >
                    <Image
                        src="/images/global-expertise-hp.jpg"
                        alt="Global Business Local Expertise"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
