import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  fallback: ['monospace'],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Vishwakarma Fabrication Works",
  description:
    "Vishwakarma Fabrication Works offers high‑quality fabrication, welding, and custom metal work with reliable service and craftsmanship.",
  icons: {
    // Files in the `public` folder are served from the root (`/`), so we omit `/public` here.
    icon: "/images/Vishwakarma_Fabrication_card_logo.jpg",
  },
  // Resource hints for better performance
  other: {
    'dns-prefetch': 'https://images.unsplash.com https://www.google.com https://www.youtube.com',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
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
      </body>
    </html>
  );
}
