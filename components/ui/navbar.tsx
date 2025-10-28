"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function Navbar({ transparent = false }: { transparent?: boolean }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking outside or on a link
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    // If transparent is false, always show solid navbar
    const shouldBeTransparent = transparent && !isScrolled;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 0.86, 0.39, 0.96] }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                shouldBeTransparent
                    ? "bg-transparent"
                    : "bg-white shadow-md"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className="flex items-center">
                        <a href="/">
                            <Image
                                src="/relocateme-logo.png"
                                alt="RelocateMe Logo"
                                width={180}
                                height={40}
                                className={cn(
                                    "transition-all duration-300 cursor-pointer",
                                    shouldBeTransparent ? "brightness-0 invert" : "brightness-100"
                                )}
                            />
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a
                            href="/about-us"
                            className={cn(
                                "text-sm font-medium transition-colors hover:opacity-80",
                                shouldBeTransparent ? "text-white" : "text-gray-900"
                            )}
                        >
                            About Us
                        </a>

                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:opacity-80 bg-transparent",
                                            shouldBeTransparent ? "text-white hover:bg-white/10" : "text-gray-900 hover:bg-gray-100"
                                        )}
                                    >
                                        Corporate Services
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        href="/corporate-services"
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">Corporate Services Overview</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            Complete corporate support across the GCC region
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        href="/business-setup-uae"
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">Business Setup in UAE</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            Launch your business in Dubai's premier free zones
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        href="/business-setup-saudi"
                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                    >
                                                        <div className="text-sm font-medium leading-none">Business Setup in Saudi Arabia</div>
                                                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                            Accelerate your Saudi market entry with MISA licensing
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <a
                            href="/immigration"
                            className={cn(
                                "text-sm font-medium transition-colors hover:opacity-80",
                                shouldBeTransparent ? "text-white" : "text-gray-900"
                            )}
                        >
                            Immigration Services
                        </a>
                        <a
                            href="/relocation"
                            className={cn(
                                "text-sm font-medium transition-colors hover:opacity-80",
                                shouldBeTransparent ? "text-white" : "text-gray-900"
                            )}
                        >
                            Relocation Services
                        </a>
                        <a
                            href="/insights"
                            className={cn(
                                "text-sm font-medium transition-colors hover:opacity-80",
                                shouldBeTransparent ? "text-white" : "text-gray-900"
                            )}
                        >
                            Insights
                        </a>
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="/contact">
                            <Button
                                variant="outline"
                                size="default"
                                className={cn(
                                    "transition-all duration-300 px-6 py-5",
                                    shouldBeTransparent
                                        ? "bg-white/10 border border-white text-white hover:bg-white/20 hover:text-white"
                                        : "bg-[hsl(var(--brand))] border border-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))]/90 hover:text-white"
                                )}
                            >
                                Get in Touch
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Hamburger Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "p-2 transition-colors",
                                shouldBeTransparent ? "text-white" : "text-gray-900"
                            )}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-t border-gray-200"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            <a
                                href="/about-us"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-900 font-medium py-2 hover:text-[hsl(var(--brand))] transition-colors"
                            >
                                About Us
                            </a>

                            <div className="flex flex-col gap-2">
                                <a
                                    href="/corporate-services"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-900 font-medium py-2 hover:text-[hsl(var(--brand))] transition-colors"
                                >
                                    Corporate Services
                                </a>
                                <a
                                    href="/business-setup-uae"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-600 text-sm py-2 pl-4 hover:text-[hsl(var(--brand))] transition-colors"
                                >
                                    → Business Setup in UAE
                                </a>
                                <a
                                    href="/business-setup-saudi"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-gray-600 text-sm py-2 pl-4 hover:text-[hsl(var(--brand))] transition-colors"
                                >
                                    → Business Setup in Saudi Arabia
                                </a>
                            </div>

                            <a
                                href="/immigration"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-900 font-medium py-2 hover:text-[hsl(var(--brand))] transition-colors"
                            >
                                Immigration Services
                            </a>
                            <a
                                href="/relocation"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-900 font-medium py-2 hover:text-[hsl(var(--brand))] transition-colors"
                            >
                                Relocation Services
                            </a>
                            <a
                                href="/insights"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-gray-900 font-medium py-2 hover:text-[hsl(var(--brand))] transition-colors"
                            >
                                Insights
                            </a>
                            <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
                                <Button
                                    variant="outline"
                                    size="default"
                                    className="w-full bg-[hsl(var(--brand))] border border-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))]/90 hover:text-white px-6 py-5"
                                >
                                    Get in Touch
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
