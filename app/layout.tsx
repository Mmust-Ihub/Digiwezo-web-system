// 'use server'
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Lora } from "next/font/google";
import "@/globals.css";

import MainLayout from "@/MainLayout";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const lora = Lora({
  weight: "400",
  variable: "--font-lora",
  subsets: ["latin"],
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Digiwezo - CBC school management system",
    template: "%s | Digiwezo",
  },
  description:
    "Digiwezo is a school management system with CBC first incooperation approach seeking to manage and help school running more efficient",
  keywords: "CBC, School, Analytics,School Management, MMUST iHub.",
  authors: [{ name: "MMUST iHub" }],
  creator: "MMUST iHub",
  publisher: "MMUST iHub",
  metadataBase: new URL("https://digiwezo.tech"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://digiwezo.tech/",
    siteName: "Digiwezo - CBC school management system",
    title: "Digiwezo - CBC school management system",
    description:
      "Digiwezo is a school management system with CBC first incooperation approach seeking to manage and help school running more efficient.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digiwezo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digiwezo - CBC school management system",
    description:
      "Digiwezo is a school management system with CBC first incooperation approach seeking to manage and help school running more efficient.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function  RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.className} antialiased`}
      >

        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
