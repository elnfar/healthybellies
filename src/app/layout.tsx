import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top 5 Transdermal Patch Stores 2025 | TopSkinPatches.com",
  description: "Discover the best transdermal patch ecommerce stores in 2025. From NAD+ patches to weight loss patches, find the top-rated brands and retailers.",
  keywords: "transdermal patches, NAD+ patches, weight loss patches, patch stores, ecommerce, wellness patches",
  openGraph: {
    title: "Top 5 Transdermal Patch Stores 2025",
    description: "Discover the best transdermal patch ecommerce stores in 2025",
    url: "https://topskinpatches.com",
    siteName: "TopSkinPatches.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
