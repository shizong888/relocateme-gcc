"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function DeliveringExcellenceSection() {
    return (
        <section className="bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Left Side - Image/Video Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="relative min-h-[400px] lg:min-h-screen bg-gray-800"
                >
                    <Image
                        src="/images/team-hp.jpg"
                        alt="Delivering Excellence"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Right Side - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                    className="flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-20"
                >
                    <div className="space-y-6 max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                            Delivering <span className="font-light">excellence</span> across the Middle East
                        </h2>

                        <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                            <p>
                                RelocateMe is built on more than 30 years of combined expertise in relocation,
                                immigration, and corporate services. Our hands-on teams live and work across the
                                GCC, bringing deep local knowledge with a global perspective, so compliance is
                                seamless, service delivery is exceptional, and outcomes are consistently strong.
                            </p>

                            <p>
                                To us, every move is personal. You'll have a single dedicated point of contact
                                coordinating our multilingual specialists on the ground, tailoring every detail. From
                                business set-up to home and school search, our programs are coordinated around
                                your people and priorities.
                            </p>

                            <p>
                                Trusted by multinationals, government bodies, and private clients, we deliver
                                precision and clarity at every step of the journey, so your business never loses
                                momentum.
                            </p>
                        </div>

                        <Button size="lg" className="group bg-[hsl(var(--brand))] hover:bg-[hsl(var(--brand))/90] text-white">
                            Discover Our Services
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
