export type Shape = "aviator" | "cat-eye" | "round" | "rectangular" | "square";

export type Category = "sunglasses" | "frames" | "contact-lenses" | "accessories" | "kids" | "reading-glasses";
export type Gender = "men" | "women" | "unisex" | "kids";
export type Colorway = { name: string; frame: string; lens: string };
export type Product = {
  slug: string; name: string; brand: string; category: Category; gender: Gender; shape?: Shape;
  material: string; price: number; mrp?: number; desc: string;
  colors: Colorway[]; best?: boolean; isNew?: boolean; collector?: boolean; featured?: boolean;
};

export const slugify = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const CATEGORIES: { slug: Category; title: string; blurb: string }[] = [
  { slug: "sunglasses", title: "Sunglasses", blurb: "UV400 lenses in titanium and acetate. Polarised, mirror and prescription options." },
  { slug: "frames", title: "Optical Frames", blurb: "Lightweight frames made for prescription lenses and all-day wear." },
  { slug: "contact-lenses", title: "Contact Lenses", blurb: "Daily and monthly lenses, fitted after a free eye consultation." },
  { slug: "accessories", title: "Accessories", blurb: "Cases, cloths and care kits to keep every pair perfect." },
  { slug: "kids", title: "Kids", blurb: "Flexible, durable frames and sunglasses sized for ages 3 to 12." },
  { slug: "reading-glasses", title: "Reading Glasses", blurb: "Crisp, comfortable readers from +1.00 to +3.50." },
];
export const SHAPES: { slug: Shape; label: string }[] = [
  { slug: "aviator", label: "Aviator" }, { slug: "cat-eye", label: "Cat-eye" }, { slug: "round", label: "Round" },
  { slug: "rectangular", label: "Rectangular" }, { slug: "square", label: "Square" },
];

const T = "#cfd0d4", G = "#d9b45f", B = "#16120e", TORT = "#6b3f1d", NAVY = "#1d2b4a", ROSE = "#c98b8b";
const BRONZE = "#6b4a22", GREEN = "#1f4a34", BLUE = "#2b4f8f", SMOKE = "#2a2a2e", PINK = "#8a3b52", CLEAR = "#dfe6ee";

type Opt = Partial<Pick<Product, "mrp" | "best" | "isNew" | "collector" | "featured">>;
const P = (name: string, brand: string, category: Category, gender: Gender, shape: Shape | undefined, material: string, price: number, desc: string, colors: Colorway[], o: Opt = {}): Product =>
  ({ slug: slugify(name), name, brand, category, gender, shape, material, price, desc, colors, ...o });
const C = (name: string, frame: string, lens: string): Colorway => ({ name, frame, lens });

export const PRODUCTS: Product[] = [
  // Sunglasses — house signature
  P("Aurelia Aviator", "Sun Optics", "sunglasses", "men", "aviator", "β-titanium", 24900, "Double-bridge aviator in hand-polished titanium with polarised G-15 lenses.", [C("Titanium / G-15", T, GREEN), C("Gold / Bronze", G, BRONZE), C("Titanium / Ocean", T, BLUE)], { best: true, featured: true }),
  P("Monaco Square", "Sun Optics", "sunglasses", "unisex", "square", "Mazzucchelli acetate", 18500, "Bold square sunglasses cut from Italian acetate with a metal-inlaid temple.", [C("Ink / Smoke", B, SMOKE), C("Tortoise / Bronze", TORT, BRONZE)], { best: true, featured: true }),
  P("Savoy Cat-Eye", "Sun Optics", "sunglasses", "women", "cat-eye", "Tortoise acetate", 21400, "Sculpted lift at the brow in a layered tortoise finish.", [C("Tortoise / Bronze", TORT, BRONZE), C("Rose / Rosé", ROSE, PINK)], { featured: true }),
  P("Meridian Navigator", "Sun Optics", "sunglasses", "men", "rectangular", "β-titanium", 26900, "Pilot-inspired navigator with mirror-coated lenses.", [C("Titanium / Ocean", T, BLUE), C("Black / Smoke", B, SMOKE)], { isNew: true, featured: true }),
  P("Solstice Shield", "Sun Optics", "sunglasses", "unisex", "rectangular", "Gold-tone titanium", 32500, "Wraparound shield with 24k gold-tone titanium trim. Limited to 250 pieces.", [C("Gold / Bronze", G, BRONZE)], { collector: true, featured: true }),
  // Sunglasses — other labels
  P("Nord Pilot", "Atelier Nord", "sunglasses", "men", "aviator", "Stainless steel", 28900, "Scandinavian-minimal pilot with spring hinges and polarised lenses.", [C("Steel / Smoke", T, SMOKE), C("Black / Green", B, GREEN)], { best: true }),
  P("Vela Papillon", "Maison Vela", "sunglasses", "women", "cat-eye", "Acetate", 33900, "A winged, butterfly-silhouette sunglass in glossy acetate.", [C("Ink / Rosé", B, PINK), C("Rose / Bronze", ROSE, BRONZE)], { isNew: true }),
  P("Hanami Round", "Kōyō", "sunglasses", "unisex", "round", "Japanese titanium", 36500, "Hand-bent round titanium sunglasses, 14 g, with soft-gradient lenses.", [C("Gold / Bronze", G, BRONZE), C("Titanium / Green", T, GREEN)], { isNew: true }),
  P("Drift Rectangle", "Halden", "sunglasses", "men", "rectangular", "Acetate", 17900, "Clean rectangular lines for everyday driving.", [C("Black / Smoke", B, SMOKE), C("Navy / Green", NAVY, GREEN)], { mrp: 22400, best: true }),
  P("Sol Square", "Veridian", "sunglasses", "women", "square", "Bio-acetate", 15600, "Oversized square in plant-based acetate.", [C("Rose / Rosé", ROSE, PINK), C("Tortoise / Bronze", TORT, BRONZE)], { mrp: 19500 }),
  P("Riviera Cat-Eye", "Aster & Co", "sunglasses", "women", "cat-eye", "Acetate", 19900, "Retro cat-eye with gradient lenses, made for coastlines.", [C("Tortoise / Rosé", TORT, PINK), C("Ink / Smoke", B, SMOKE)]),
  P("Marlow Square", "Orrin & Hale", "sunglasses", "men", "square", "Acetate", 23400, "Heavy-bevel square with a hand-polished edge.", [C("Ink / Green", B, GREEN), C("Navy / Smoke", NAVY, SMOKE)]),
  // Collector's Edition
  P("Atelier No. 7", "Maison Vela", "sunglasses", "unisex", "aviator", "18k gold-plated titanium", 118900, "Numbered collector's aviator, hand-engraved and delivered in a walnut case. 120 pieces.", [C("Gold / Bronze", G, BRONZE)], { collector: true }),
  P("Tsuki Round", "Kōyō", "sunglasses", "unisex", "round", "Buffalo horn & titanium", 94500, "Moon-round sunglasses hand-carved from buffalo horn. 80 pieces.", [C("Horn / Green", TORT, GREEN)], { collector: true }),
  P("Ember Square", "Orrin & Hale", "sunglasses", "men", "square", "Hand-carved acetate", 76000, "A single-block carved acetate square, each pattern unique. 150 pieces.", [C("Ember / Bronze", "#8a3b1d", BRONZE)], { collector: true }),
  // Frames
  P("Kyoto Round", "Sun Optics", "frames", "unisex", "round", "Japanese titanium", 29800, "Featherweight round optical frame at 12 g.", [C("Titanium", T, CLEAR), C("Gold", G, CLEAR)], { best: true, featured: true }),
  P("Archive Rectangle", "Halden", "frames", "men", "rectangular", "Acetate", 14900, "A modern classic in matte acetate.", [C("Black", B, CLEAR), C("Navy", NAVY, CLEAR)], { best: true }),
  P("Lune Cat-Eye", "Maison Vela", "frames", "women", "cat-eye", "Acetate", 16900, "A soft cat-eye with a subtle brow lift.", [C("Rose", ROSE, CLEAR), C("Tortoise", TORT, CLEAR)], { isNew: true }),
  P("Clerk Square", "Orrin & Hale", "frames", "unisex", "square", "Acetate", 13500, "A confident square for long workdays.", [C("Ink", B, CLEAR), C("Tortoise", TORT, CLEAR)]),
  P("Pantos Round", "Aster & Co", "frames", "unisex", "round", "Acetate", 12400, "Classic pantos shape in warm acetate.", [C("Tortoise", TORT, CLEAR), C("Ink", B, CLEAR)], { mrp: 15500 }),
  P("Fine-Wire Aviator", "Atelier Nord", "frames", "men", "aviator", "Stainless steel", 15900, "Light wire aviator for everyday prescription wear.", [C("Steel", T, CLEAR), C("Gold", G, CLEAR)]),
  // Reading
  P("Reader Round", "Bellweather", "reading-glasses", "unisex", "round", "Acetate", 4900, "Crisp reading glasses, +1.00 to +3.50.", [C("Tortoise", TORT, CLEAR), C("Ink", B, CLEAR)], { best: true }),
  P("Reader Square", "Bellweather", "reading-glasses", "unisex", "square", "Acetate", 5200, "A slightly larger readers frame with spring hinges.", [C("Navy", NAVY, CLEAR), C("Ink", B, CLEAR)]),
  // Kids
  P("Bounce Round", "Lumen Kids", "kids", "kids", "round", "Flexible TR-90", 5900, "Bendable, unbreakable frames for ages 4–8.", [C("Blue", "#3d6ad6", CLEAR), C("Rose", ROSE, CLEAR)], { best: true }),
  P("Orbit Square", "Lumen Kids", "kids", "kids", "square", "Flexible TR-90", 6400, "Soft-touch square with adjustable nose pads, ages 6–12.", [C("Navy", NAVY, CLEAR), C("Green", "#2f7d54", CLEAR)]),
  P("Sunny Shades", "Lumen Kids", "kids", "kids", "round", "Flexible TR-90", 4900, "UV400 kids sunglasses with a head strap.", [C("Sky", "#3d9ad6", SMOKE), C("Coral", "#e0705f", SMOKE)], { isNew: true }),
  // Contact lenses
  P("Daily Clear (30)", "Sun Optics", "contact-lenses", "unisex", undefined, "Silicone hydrogel", 1800, "Single-use daily lenses, 30-pack. High oxygen flow for all-day comfort.", [C("Clear", CLEAR, CLEAR)], { best: true }),
  P("Monthly Comfort (6)", "Sun Optics", "contact-lenses", "unisex", undefined, "Silicone hydrogel", 2400, "Monthly replacement lenses, 6-pack, with a moisture-lock surface.", [C("Clear", CLEAR, CLEAR)]),
  P("Colour Tint (2)", "Sun Optics", "contact-lenses", "unisex", undefined, "Hydrogel", 1500, "Natural-look colour lenses, 2-pack, in three shades.", [C("Hazel", CLEAR, CLEAR)]),
  // Accessories
  P("Travel Case", "Sun Optics", "accessories", "unisex", undefined, "Vegan leather", 1900, "Hard-shell travel case with a magnetic closure.", [C("Black", B, B), C("Tan", TORT, TORT)], { best: true }),
  P("Microfibre Set (3)", "Sun Optics", "accessories", "unisex", undefined, "Microfibre", 600, "Three ultra-soft lens cloths.", [C("Grey", T, T)]),
  P("Lens Care Kit", "Sun Optics", "accessories", "unisex", undefined, "Spray + cloth", 900, "Anti-static lens spray with cloth, 60 ml.", [C("Standard", T, T)]),
  P("Chain Strap", "Maison Vela", "accessories", "women", undefined, "Gold-plated brass", 1400, "A delicate chain that doubles as a necklace.", [C("Gold", G, G)]),
  P("Magnetic Clip-On", "Sun Optics", "accessories", "unisex", "rectangular", "Titanium + polarised lens", 3900, "Polarised clip-on that snaps onto your optical frame.", [C("Smoke", T, SMOKE), C("Green", T, GREEN)]),
];

/** Photo for a product card (placeholder photography until the real catalogue is supplied). */
const hash = (s: string) => Array.from(s).reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
export const productImage = (p: Product): string => {
  const pick = (a: string[]) => `/photos/${a[hash(p.slug) % a.length]}.jpg`;
  if (p.category === "contact-lenses") return "/images/eye-closeup.jpg";
  if (p.category === "accessories") return "/photos/case.jpg";
  if (p.category === "reading-glasses") return pick(["reading-book", "reading-clubmaster"]);
  if (p.category === "kids") return pick(["frame-black-a", "frame-black-b"]);
  if (p.category === "frames") return pick(p.shape === "round" ? ["frame-black-a", "frame-black-b", "frame-black-c"] : ["reading-book", "reading-clubmaster", "frame-black-c"]);
  if (p.shape === "aviator") return pick(["sun-aviator-gold", "sun-aviator-silver"]);
  if (p.shape === "cat-eye") return pick(["sun-cateye-black", "sun-cateye-tort"]);
  if (p.shape === "round") return pick(["sun-aviator-silver", "frame-round-silver"]);
  return pick(["sun-square-grey", "sun-aviator-gold"]);
};
export const bySlug = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
export const isEyewear = (p: Product) => p.category === "sunglasses" || p.category === "frames" || p.category === "kids" || p.category === "reading-glasses";
export const isClear = (p: Product) => p.category !== "sunglasses" && !(p.category === "kids" && p.name === "Sunny Shades");
export const onSale = (p: Product) => !!p.mrp;
export const BRANDS = Array.from(new Set(PRODUCTS.map((p) => p.brand))).sort((a, b) => a.localeCompare(b));
export const brandSlug = (b: string) => slugify(b);
export const discount = (p: Product) => (p.mrp ? Math.round((1 - p.price / p.mrp) * 100) : 0);
export const related = (p: Product, n = 4) => PRODUCTS.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, n);

export const searchProducts = (q: string) => {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return PRODUCTS.filter((p) => {
    const hay = `${p.name} ${p.brand} ${p.category} ${p.gender} ${p.shape ?? ""} ${p.material} ${p.desc} ${p.colors.map((c) => c.name).join(" ")}`.toLowerCase();
    return terms.every((t) => hay.includes(t));
  });
};
