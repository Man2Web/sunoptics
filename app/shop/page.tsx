import type { Metadata } from "next";
import Link from "next/link";
import ShopShell from "@/components/ShopShell";
import ProductGrid from "@/components/ProductGrid";
import Ld from "@/components/Ld";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { crumbLd, productListLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop Luxury Sunglasses, Frames & Contact Lenses",
  description: "Shop Sun Optics: luxury sunglasses, optical frames, kids' eyewear, reading glasses, contact lenses and accessories. Order by WhatsApp enquiry.",
  alternates: { canonical: "/shop" },
};

export default function Shop() {
  return (
    <ShopShell crumbs={[{ name: "Shop" }]} title="Shop all" intro="Luxury sunglasses, optical frames and everything to care for them.">
      <Ld data={crumbLd([{ name: "Shop", path: "/shop" }])} />
      <Ld data={productListLd("Shop all", "/shop", PRODUCTS)} />
      <ul className="cats">
        {CATEGORIES.map((c) => <li key={c.slug}><Link href={`/shop/${c.slug}`}>{c.title}</Link></li>)}
      </ul>
      <ProductGrid products={PRODUCTS} />
    </ShopShell>
  );
}
