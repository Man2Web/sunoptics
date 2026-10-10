import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE_URL, SITE_NAME } from "@/lib/site";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-sans", display: "swap" });

const title = "Sun Optics | Luxury Sunglasses & Optical Frames in India";
const description = "Sun Optics is a luxury eyewear house in India: handcrafted titanium and Italian acetate sunglasses, optical frames and polarised lenses, with free eye consultations in our boutiques.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Sun Optics" },
  description,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  keywords: ["luxury sunglasses India", "optical frames", "titanium eyewear", "polarised sunglasses", "prescription sunglasses", "Sun Optics"],
  alternates: { canonical: "/", languages: { "en-IN": "/", "x-default": "/" }, types: { "text/plain": [{ url: "/llms.txt", title: "LLM-readable summary" }] } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", siteName: SITE_NAME, locale: "en_IN", url: "/", title: "Sun Optics | Luxury Sunglasses & Optical Frames", description: "Handcrafted titanium and acetate eyewear with precision lenses.", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Gold aviator sunglasses on a dark background with the words Sun Optics" }] },
  twitter: { card: "summary_large_image", title: "Sun Optics | Luxury Eyewear", description: "Handcrafted titanium and acetate eyewear with precision lenses.", images: ["/og-image.png"] },
  icons: { icon: [{ url: "/favicon.png", sizes: "64x64", type: "image/png" }], apple: "/apple-touch-icon.png" },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = { themeColor: "#000000", width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={sans.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
