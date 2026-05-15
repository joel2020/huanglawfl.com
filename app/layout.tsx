import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { AnalyticsPlaceholders } from "@/components/AnalyticsPlaceholders";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.huanglawfl.com"),
  title: {
    default: "Huang Law PLLC | Florida Creditor Rights, Banking Disputes & Local Counsel",
    template: "%s | Huang Law PLLC",
  },
  description:
    "Strategic Florida counsel for creditors, lenders, financial institutions, banking disputes, enforcement litigation, business disputes, mediation, and local counsel engagements.",
  keywords: [
    "Florida business litigation attorney",
    "Florida creditor rights lawyer",
    "Florida bankruptcy attorney",
    "Florida banking law attorney",
    "Florida probate litigation lawyer",
    "Florida immigration lawyer",
    "Florida certified mediator",
    "Florida local counsel",
  ],
  authors: [{ name: "Huang Law PLLC" }],
  creator: "Huang Law PLLC",
  publisher: "Huang Law PLLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Huang Law PLLC | Florida Creditor Rights, Banking Disputes & Local Counsel",
    description:
      "Florida counsel for creditors, lenders, financial institutions, banking disputes, enforcement litigation, business disputes, mediation, and local counsel engagements.",
    url: "https://www.huanglawfl.com",
    siteName: "Huang Law PLLC",
    images: [
      {
        url: "/images/huang-law-og.svg",
        width: 1200,
        height: 630,
        alt: "Huang Law PLLC wordmark",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huang Law PLLC | Florida Creditor Rights, Banking Disputes & Local Counsel",
    description:
      "Strategic Florida counsel for creditors, lenders, banking disputes, enforcement litigation, business disputes, mediation, and local counsel.",
    images: ["/images/huang-law-og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        {children}
        <AnalyticsPlaceholders />
      </body>
    </html>
  );
}
