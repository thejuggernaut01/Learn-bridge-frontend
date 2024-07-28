import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/components/navbar/Navbar";
import Footer from "@/shared/components/footer/Footer";
import React from "react";

const sora = Sora({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Learn Bridge",
  description:
    "Learn Bridge - Empower Your Learning Journey with High-Quality Online Courses",
  twitter: {
    card: "summary_large_image",
    title: "Learn Bridge",
    description:
      "Learn Bridge - Empower Your Learning Journey with High-Quality Online Courses",
    siteId: "",
    images: [
      {
        url: "https://yourdomain.com/opengraph-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://yourdomain.com/opengraph-image.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://yourdomain.com/opengraph-image.png",
        width: 1800,
        height: 1600,
      },
    ],
  },
  openGraph: {
    title: "Learn Bridge",
    description:
      "Learn Bridge - Empower Your Learning Journey with High-Quality Online Courses",
    url: "https://yourdomain.com",
    siteName: "Learn Bridge",
    images: [
      {
        url: "https://yourdomain.com/opengraph-image.png",
        width: 1200,
        height: 630,
      },
      {
        url: "https://yourdomain.com/opengraph-image.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://yourdomain.com/opengraph-image.png",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
