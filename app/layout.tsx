import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileBar from "@/components/MobileBar";
import Reveal from "@/components/Reveal";
import "./globals.css";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sans", display: "swap" });

const title = "Best Optical Shop in Vellore | Eye Test, Spectacles & Contact Lenses | Sun Optics";
const description = "Looking for the best optical shop in Vellore? Sun Optics offers eye tests by qualified optometrists, spectacles, sunglasses, contact lenses and specialty lens fitting at Krishna Nagar and Green Circle. Serving Vellore since 1999.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Sun Optics Vellore" },
  description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  keywords: ["best optical shop in Vellore", "best opticians in Vellore", "optical shop Vellore", "eye test Vellore", "eye check-up Vellore", "spectacles shop Vellore", "contact lenses Vellore", "sunglasses Vellore", "scleral lenses Vellore", "orthokeratology Vellore", "Sun Optics Vellore"],
  other: { "geo.region": "IN-TN", "geo.placename": "Vellore", "geo.position": "12.9165;79.1325", "ICBM": "12.9165, 79.1325" },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
  alternates: { canonical: "/", languages: { "en-IN": "/", "x-default": "/" }, types: { "text/plain": [{ url: "/llms.txt", title: "LLM-readable summary" }] } },
  robots: process.env.NEXT_PUBLIC_NOINDEX === "1" ? { index: false, follow: false } : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_IN", url: "/", title: "Best Optical Shop in Vellore | Sun Optics", description: "Eye test, spectacles, sunglasses and contact lenses in Vellore since 1999. Two branches, free home delivery.", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Gold aviator sunglasses on a dark background with the words Sun Optics" }] },
  twitter: { card: "summary_large_image", title: "Best Optical Shop in Vellore | Sun Optics", description: "Eye test, spectacles, sunglasses and contact lenses in Vellore since 1999.", images: ["/og-image.png"] },
  icons: { icon: [{ url: "/favicon.png", sizes: "64x64", type: "image/png" }], apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = { themeColor: "#000000", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={sans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <Header />
        {children}
        <FloatingWhatsApp />
        <MobileBar />
        <Reveal />
      </body>
    </html>
  );
}
