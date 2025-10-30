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

export interface NavMenuItem {
  label: string;
  href: string;
  submenu?: {
    label: string;
    href: string;
    description: string;
  }[];
}

export interface NavbarProps {
  transparent?: boolean;
  logo?: string;
  logoAlt?: string;
  menuItems?: NavMenuItem[];
  ctaText?: string;
  ctaHref?: string;
}

export function Navbar({
  transparent = false,
  logo = "/relocateme-logo.png",
  logoAlt = "RelocateMe Logo",
  menuItems = [
    { label: "About Us", href: "/about-us" },
    {
      label: "Corporate Services",
      href: "/corporate-services",
      submenu: [
        {
          label: "Corporate Services",
          href: "/corporate-services",
          description: "Complete corporate support across the GCC region"
        },
        {
          label: "Business Setup in UAE",
          href: "/business-setup-uae",
          description: "Launch your business in Dubai's premier free zones"
        },
        {
          label: "Business Setup in Saudi Arabia",
          href: "/business-setup-saudi",
          description: "Accelerate your Saudi market entry with MISA licensing"
        }
      ]
    },
    {
      label: "Immigration Services",
      href: "/immigration",
      submenu: [
        {
          label: "Immigration Services",
          href: "/immigration",
          description: "Complete visa and immigration support across the GCC"
        },
        {
          label: "UAE Golden Visa",
          href: "/uae-golden-visa",
          description: "Secure long-term residency in the UAE with 5 or 10-year Golden Visa"
        },
        {
          label: "Saudi Arabia Visa & IQAMA",
          href: "/saudi-arabia-visa-iqama",
          description: "Employee visa and Iqama services for corporate teams"
        }
      ]
    },
    { label: "Relocation Services", href: "/relocation" },
    { label: "Insights", href: "/insights" }
  ],
  ctaText = "Get in Touch",
  ctaHref = "/contact"
}: NavbarProps) {
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
                                src={logo}
                                alt={logoAlt}
                                width={180}
                                height={40}
                                className={cn(
                                    "transition-all duration-300 cursor-pointer",
                                    shouldBeTransparent ? "brightness-0 invert" : "brightness-100"
                                )}
                            />
                        </a>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        {menuItems.map((item) => (
                            item.submenu ? (
                                <NavigationMenu key={item.href}>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <a href={item.href} className="no-underline">
                                                <NavigationMenuTrigger
                                                    className={cn(
                                                        "text-sm font-medium transition-colors hover:opacity-80 bg-transparent",
                                                        shouldBeTransparent ? "text-white hover:bg-white/10" : "text-gray-900 hover:bg-gray-100"
                                                    )}
                                                >
                                                    {item.label}
                                                </NavigationMenuTrigger>
                                            </a>
                                            <NavigationMenuContent>
                                                <ul className="grid w-[400px] gap-3 p-4">
                                                    {item.submenu.map((subitem) => (
                                                        <li key={subitem.href}>
                                                            <NavigationMenuLink asChild>
                                                                <a
                                                                    href={subitem.href}
                                                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                                >
                                                                    <div className="text-sm font-medium leading-none">{subitem.label}</div>
                                                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                        {subitem.description}
                                                                    </p>
                                                                </a>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            ) : (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors px-4 py-2 rounded-md",
                                        shouldBeTransparent
                                            ? "text-white hover:bg-white/10"
                                            : "text-gray-900 hover:bg-gray-100"
                                    )}
                                >
                                    {item.label}
                                </a>
                            )
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href={ctaHref}>
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
                                {ctaText}
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
                            {menuItems.map((item) => (
                                item.submenu ? (
                                    <div key={item.href} className="flex flex-col gap-2">
                                        <a
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-gray-900 font-medium py-2 hover:text-[hsl(var(--brand))] transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                        {item.submenu.map((subitem) => (
                                            <a
                                                key={subitem.href}
                                                href={subitem.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-gray-600 text-sm py-2 pl-4 hover:text-[hsl(var(--brand))] transition-colors"
                                            >
                                                → {subitem.label}
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-gray-900 font-medium py-2 hover:text-[hsl(var(--brand))] transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                )
                            ))}
                            <a href={ctaHref} onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
                                <Button
                                    variant="outline"
                                    size="default"
                                    className="w-full bg-[hsl(var(--brand))] border border-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))]/90 hover:text-white px-6 py-5"
                                >
                                    {ctaText}
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
