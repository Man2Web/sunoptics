import { PRODUCTS } from "./products";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.sunoptics.in").replace(/\/$/, "");
export const SITE_NAME = "Sun Optics";
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "hello@sunoptics.in";
export const PHONE = process.env.NEXT_PUBLIC_PHONE || ""; // e.g. "+91 98765 43210"; shown only when set

export type Store = { city: string; area: string; address?: string; phone?: string; mapUrl?: string };
// Fill in address / phone / mapUrl for each boutique and they appear on the Boutiques page.
export const STORES: Store[] = [
  { city: "New Delhi", area: "Khan Market" },
  { city: "Mumbai", area: "Bandra West" },
  { city: "Bengaluru", area: "Indiranagar" },
];
export const HOURS = "Mon–Sun, 11am–9pm";

export const FAQ = [
  ["How do I place an order?", "Open any product, choose a colour and tap Enquire on WhatsApp. A Sun Optics stylist confirms availability, prescription options and delivery, then shares secure payment details. There is no online checkout."],
  ["What makes Sun Optics frames different?", "Every frame is made from hand-polished β-titanium or Italian Mazzucchelli acetate, finished in 24 steps and paired with optical-grade lenses with 100% UVA/UVB protection."],
  ["Do you make prescription sunglasses?", "Yes. Any Sun Optics frame can be fitted with single-vision, progressive or photochromic prescription lenses after a free eye consultation."],
  ["Are the lenses polarised and UV protected?", "All sunglass lenses block 100% of UVA and UVB rays. Polarised, mirror and photochromic options are available in G-15 green, bronze, grey and blue tints."],
  ["What is the warranty and return policy?", "Every frame carries a 2-year warranty against manufacturing defects and a 14-day no-questions return on unworn non-prescription pieces."],
  ["Do you deliver across India?", "Yes. We ship insured across India and offer a virtual fitting session for customers outside our boutique cities."],
] as const;

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "OpticalStore"], "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL,
      logo: `${SITE_URL}/logo-black.png`,
      description: "Luxury eyewear house in India offering handcrafted sunglasses, optical frames, prescription lenses and contact lenses.",
      slogan: "See the world in a new light.", priceRange: "₹₹₹", currenciesAccepted: "INR",
      areaServed: { "@type": "Country", name: "India" },
      address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
      email: EMAIL,
      ...(PHONE ? { telephone: PHONE } : {}),
      knowsAbout: ["Sunglasses", "Optical frames", "Polarised lenses", "Prescription lenses", "Titanium eyewear", "Acetate eyewear"],
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: "en-IN", publisher: { "@id": `${SITE_URL}/#organization` } },
    { "@type": "WebPage", "@id": `${SITE_URL}/#webpage`, url: SITE_URL, name: "Sun Optics | Luxury Sunglasses & Optical Frames in India", isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` }, inLanguage: "en-IN" },
    {
      "@type": "ItemList", name: "Sun Optics signature collection",
      itemListElement: PRODUCTS.filter((p) => p.featured).map((p, i) => ({
        "@type": "ListItem", position: i + 1, url: `${SITE_URL}/product/${p.slug}`, name: p.name,
      })),
    },
    { "@type": "FAQPage", mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

export const crumbLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Home", path: "/" }, ...items].map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: SITE_URL + c.path })),
});

export const productListLd = (name: string, path: string, items: { name: string; slug: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name, url: SITE_URL + path,
  mainEntity: { "@type": "ItemList", itemListElement: items.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}/product/${p.slug}`, name: p.name })) },
});

// WhatsApp enquiries. Set NEXT_PUBLIC_WHATSAPP (country code + number, digits only, e.g. 919876543210).
export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "910000000000";
export const waLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
