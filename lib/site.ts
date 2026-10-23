import { PRODUCTS } from "./products";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.sunoptics.in").replace(/\/$/, "");
export const SITE_NAME = "Sun Optics";
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || ""; // pending from the owner; hidden while empty
export const PHONE = process.env.NEXT_PUBLIC_PHONE || "+91 95665 14555";

export const TAGLINE = "Eye care, we care"; // matches the logo; replace once the owner sends the final tagline

export type Store = { name: string; area: string; address: string; phone: string; mapUrl?: string; since?: string };
// Add each branch's Google Maps link as mapUrl and a "Get directions" link appears on the Branches page.
export const STORES: Store[] = [
  { name: "Sun Optics, Krishna Nagar Branch", area: "Krishna Nagar", since: "1999", phone: PHONE, address: "TKT Complex, 1, Officer's Line, near Lakshmi Theatre, opp. Allen Solly showroom, Krishna Nagar, Veerasamy Nagar, Vellore, Tamil Nadu 632001" },
  { name: "Sun Optics, Green Circle", area: "Green Circle", phone: PHONE, address: "6/1, Katpadi Main Road, Green Circle, Vellore, Tamil Nadu 632004" },
];
export const HOURS = "10:00 AM to 9:00 PM, all week";
export const HOURS_NOTE = "Sunday timings may vary. Please call to confirm before visiting.";

export const BRAND_GROUPS: { title: string; brands: string[] }[] = [
  { title: "Eyewear brands", brands: ["Ray-Ban", "Oakley", "Calvin Klein", "Swarovski", "Versace", "Giorgio Armani", "Armani Exchange", "Michael Kors", "Montblanc", "Jimmy Choo", "Maui Jim", "Bvlgari", "Tommy Hilfiger", "Burberry", "Police", "Coach", "David Jones"] },
  { title: "Lens brands", brands: ["Zeiss", "Hoya", "Essilor"] },
  { title: "Contact lens brands", brands: ["CooperVision", "Bausch + Lomb", "Alcon", "Johnson & Johnson"] },
  { title: "Specialty contact lens brands", brands: ["Classic Lens", "Silverline", "Menicon", "Boston Scleral Lens"] },
];

// Logo files live in /public/brands. Brands without a file are shown as a text wordmark until the official artwork is supplied.
export const BRAND_LOGOS: Record<string, string> = {
  "Ray-Ban": "ray-ban.png", "Oakley": "oakley.png", "Calvin Klein": "calvin-klein.png", "Swarovski": "swarovski.png", "Versace": "versace.png",
  "Giorgio Armani": "giorgio-armani.png", "Armani Exchange": "armani-exchange.png", "Michael Kors": "michael-kors.png", "Montblanc": "montblanc.png",
  "Jimmy Choo": "jimmy-choo.png", "Maui Jim": "maui-jim.png", "Bvlgari": "bvlgari.png", "Tommy Hilfiger": "tommy-hilfiger.png", "Burberry": "burberry.png",
  "Coach": "coach.png", "Zeiss": "zeiss.png", "Hoya": "hoya.png", "Essilor": "essilor.png", "CooperVision": "coopervision.jpg",
  "Bausch + Lomb": "bausch-lomb.png", "Alcon": "alcon.png", "Johnson & Johnson": "johnson-johnson.png", "Menicon": "menicon.png",
};

export const EYEWEAR_TYPES: [string, string][] = [
  ["Full-frame", "Classic, sturdy frames that surround the lens completely."],
  ["Half-frame", "Lightweight frames with the lens held by a frame on the top edge."],
  ["Rimless", "Minimal, almost invisible frames for a light, modern look."],
  ["Designer frames", "Fashion-led styles from leading international labels."],
  ["Branded frames", "Trusted brands known for quality and durability."],
  ["Kids' eyewear", "Durable, comfortable frames made for growing children."],
  ["Sunglasses", "UV-protective sunglasses, with or without power."],
  ["Sports eyewear", "Secure, impact-resistant eyewear for an active lifestyle."],
  ["Computer glasses", "Lenses designed to reduce strain from long screen hours."],
];
export const LENS_TYPES: [string, string][] = [
  ["Progressive lenses", "Clear vision at all distances in one lens, with no visible line."],
  ["Blue-cut lenses", "Filter harmful blue light from screens and help reduce digital eye strain."],
  ["Photochromic lenses", "Clear indoors, darken automatically in sunlight."],
  ["Anti-glare lenses", "Reduce reflections for sharper vision, especially while driving at night."],
  ["Myopia control lenses", "Designed to help slow the progression of short-sightedness in children."],
];
export const CONTACT_LENS_TYPES: [string, string][] = [
  ["Soft contact lenses", "Daily, monthly and extended-wear options."],
  ["Toric lenses", "For astigmatism."],
  ["Multifocal lenses", "For presbyopia (age-related near-vision difficulty)."],
  ["Coloured lenses", "To change or enhance eye colour, with or without power."],
  ["Specialty lenses", "Corneal RGP, scleral and orthokeratology lenses."],
];
export const SPECIALTY_SERVICES: [string, string][] = [
  ["Corneal RGP lenses", "For keratoconus, corneal irregularities and high powers."],
  ["Scleral lenses", "For keratoconus, irregular corneas and severe dry eyes."],
  ["Orthokeratology (Ortho-K)", "Specially designed lenses worn overnight to reshape the cornea and help control myopia."],
  ["Vision therapy and orthoptics evaluation", "Assessment and training for eye coordination, focusing and binocular vision problems."],
];
export const FRAME_SERVICES = ["Nose pad change", "Frame alignment", "Lens replacement", "Frame replacement", "Detailed eyewear and lens consultation"];
export const BOOKING_NEEDED = ["Contact lens fitting for keratoconus", "Contact lens fitting for corneal irregularities", "Any specialty contact lens requirement (RGP, scleral, orthokeratology)", "Vision therapy and orthoptics evaluation"];

export const FAQ = [
  ["Do I need to visit a hospital for an eye check-up?", "No. Our optometrists check your eyes in the store, find the cause of your visual discomfort and recommend the right solution. If a medical examination is needed, we refer you to a hospital ourselves, so you only go when it is truly required."],
  ["How much is an eye check-up?", "An eye check-up costs ₹200, which is free when you purchase frames and lenses from us."],
  ["Do I need an appointment?", "Walk-ins are always welcome for routine eye check-ups, frames and lenses. For keratoconus or corneal irregularity fittings, specialty contact lenses (RGP, scleral, orthokeratology) and vision therapy, please book or enquire in advance."],
  ["Do you offer home delivery?", "Yes. Home delivery is free within Vellore and surrounding areas, and a courier service is available for customers in outer regions. Call or WhatsApp +91 95665 14555 to arrange it."],
  ["Which brands do you stock?", "Eyewear from Ray-Ban, Oakley, Versace, Giorgio Armani, Michael Kors and more; lenses from Zeiss, Hoya and Essilor; and contact lenses from CooperVision, Bausch + Lomb, Alcon and Johnson & Johnson."],
  ["Do you fit specialty contact lenses?", "Yes. Mr. Yashwanth Balaji leads corneal RGP, scleral and orthokeratology lens fittings. Trial lenses are available in store, and the final specialty lens is custom-made and ordered after the fitting."],
  ["What are your timings?", "Both branches are open 10:00 AM to 9:00 PM, all week. Sunday timings may vary, so please call to confirm before visiting."],
] as const;

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "Optician"], "@id": `${SITE_URL}/#organization`, name: SITE_NAME, url: SITE_URL,
      logo: `${SITE_URL}/logo-black.png`,
      description: "Sun Optics is an optician in Vellore, Tamil Nadu, caring for eyes since December 1999: eye check-ups by optometrists, frames, lenses, contact lenses and specialty contact lens fitting.",
      foundingDate: "1999-12", slogan: TAGLINE, currenciesAccepted: "INR",
      areaServed: { "@type": "City", name: "Vellore" },
      address: { "@type": "PostalAddress", streetAddress: STORES[0].address, addressLocality: "Vellore", addressRegion: "Tamil Nadu", postalCode: "632001", addressCountry: "IN" },
      ...(EMAIL ? { email: EMAIL } : {}),
      ...(PHONE ? { telephone: PHONE } : {}),
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "21:00" },
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Eye care services in Vellore", itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Eye test and eye check-up in Vellore", description: "Eye check-up by a qualified optometrist. Free with purchase of frames and lenses." }, price: "200", priceCurrency: "INR" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spectacles and eyeglasses" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sunglasses with or without power" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contact lenses, including corneal RGP, scleral and orthokeratology fitting" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vision therapy and orthoptics evaluation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Free home delivery in Vellore" } },
      ] },
      department: STORES.map((s) => ({ "@type": "Optician", name: s.name, telephone: s.phone, address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Vellore", addressRegion: "Tamil Nadu", addressCountry: "IN" }, openingHours: "Mo-Su 10:00-21:00" })),
      knowsAbout: ["Eye check-ups", "Optical frames", "Sunglasses", "Prescription lenses", "Contact lenses", "Scleral lenses", "Orthokeratology", "Vision therapy"],
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: SITE_NAME, inLanguage: "en-IN", publisher: { "@id": `${SITE_URL}/#organization` } },
    { "@type": "WebPage", "@id": `${SITE_URL}/#webpage`, url: SITE_URL, name: "Best Optical Shop in Vellore | Sun Optics: Eye Test, Spectacles & Contact Lenses", isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` }, inLanguage: "en-IN" },
    {
      "@type": "ItemList", name: "Sun Optics featured eyewear",
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

// WhatsApp enquiries. Set NEXT_PUBLIC_WHATSAPP (country code + number, digits only, e.g. 919566514555).
export const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "919566514555";
export const waLink = (text: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
