import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.relocatemegcc.com'),
  title: "RelocateMe GCC - Corporate Services & Relocation Experts",
  description: "Expert corporate services and relocation solutions across the GCC. From business setup to family relocation, we make your move seamless.",
  openGraph: {
    title: "RelocateMe GCC - Corporate Services & Relocation Experts",
    description: "Expert corporate services and relocation solutions across the GCC. From business setup to family relocation, we make your move seamless.",
    url: "https://www.relocatemegcc.com",
    siteName: "RelocateMe GCC",
    images: [
      {
        url: "/api/og?image=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512453979798-5ea266f8880c%3Fw%3D1200%26q%3D80",
        width: 1200,
        height: 630,
        alt: "RelocateMe GCC - Corporate Services & Relocation Experts"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RelocateMe GCC - Corporate Services & Relocation Experts",
    description: "Expert corporate services and relocation solutions across the GCC.",
    images: ["/api/og?image=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512453979798-5ea266f8880c%3Fw%3D1200%26q%3D80"]
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
