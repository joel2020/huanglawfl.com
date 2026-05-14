import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
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
  metadataBase: new URL("https://huanglawfl.com"),
  title: {
    default: "Huang Law, P.A. | Florida Attorney & Certified Mediator",
    template: "%s | Huang Law, P.A.",
  },
  description:
    "Huang Law, P.A. provides strategic legal counsel, mediation, and multilingual representation across Florida. Led by Mr. Huang, a Florida attorney and Supreme Court Certified Mediator fluent in English, Mandarin, and Spanish.",
  keywords: [
    "Florida attorney",
    "Florida mediator",
    "certified mediator Florida",
    "Huang Law",
    "multilingual attorney Florida",
    "Mandarin speaking attorney Florida",
    "Spanish speaking attorney Florida",
    "Miami attorney",
    "Florida litigation attorney",
  ],
  authors: [{ name: "Huang Law, P.A." }],
  creator: "Huang Law, P.A.",
  publisher: "Huang Law, P.A.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Huang Law, P.A. | Florida Attorney & Certified Mediator",
    description:
      "Strategic legal counsel, certified mediation, and multilingual representation across Florida state and federal courts.",
    url: "https://huanglawfl.com",
    siteName: "Huang Law, P.A.",
    images: [
      {
        url: "/images/huang-law-og.svg",
        width: 1200,
        height: 630,
        alt: "Huang Law, P.A. premium navy and bronze wordmark",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Huang Law, P.A. | Florida Attorney & Certified Mediator",
    description:
      "Florida attorney and Supreme Court Certified Mediator fluent in English, Mandarin, and Spanish.",
    images: ["/images/huang-law-og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
