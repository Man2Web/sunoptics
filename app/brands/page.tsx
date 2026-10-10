import type { Metadata } from "next";
import Link from "next/link";
import ShopShell from "@/components/ShopShell";
import Ld from "@/components/Ld";
import { BRANDS, PRODUCTS, brandSlug } from "@/lib/products";
import { crumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brands",
  description: "The labels we carry at Sun Optics: Sun Optics, Atelier Nord, Kōyō, Maison Vela, Orrin & Hale and more.",
  alternates: { canonical: "/brands" },
};

export default function Brands() {
  const groups = BRANDS.reduce<Record<string, string[]>>((acc, b) => { const k = b[0].toUpperCase(); (acc[k] ||= []).push(b); return acc; }, {});
  return (
    <ShopShell crumbs={[{ name: "Brands" }]} title="Brands" intro="A short, curated list of makers we trust.">
      <Ld data={crumbLd([{ name: "Brands", path: "/brands" }])} />
      <div className="az">
        {Object.entries(groups).map(([letter, bs]) => (
          <section key={letter} aria-labelledby={`l-${letter}`}>
            <h2 id={`l-${letter}`}>{letter}</h2>
            <ul>{bs.map((b) => <li key={b}><Link href={`/brands/${brandSlug(b)}`}>{b}</Link><span>{PRODUCTS.filter((p) => p.brand === b).length} products</span></li>)}</ul>
          </section>
        ))}
      </div>
    </ShopShell>
  );
}
