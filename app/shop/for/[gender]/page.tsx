import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShopShell from "@/components/ShopShell";
import ProductGrid from "@/components/ProductGrid";
import Ld from "@/components/Ld";
import { PRODUCTS } from "@/lib/products";
import { crumbLd, productListLd } from "@/lib/site";

type Params = { gender: string };
const G = { men: "Men", women: "Women" } as const;
export const dynamicParams = false;
export const generateStaticParams = () => Object.keys(G).map((gender) => ({ gender }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const g = (await params).gender as keyof typeof G;
  if (!G[g]) return {};
  return { title: `${G[g]}'s Sunglasses & Frames`, description: `Luxury sunglasses and optical frames for ${G[g].toLowerCase()} from Sun Optics. Order by WhatsApp enquiry.`, alternates: { canonical: `/shop/for/${g}` } };
}

export default async function ForGender({ params }: { params: Promise<Params> }) {
  const g = (await params).gender as keyof typeof G;
  if (!G[g]) notFound();
  const items = PRODUCTS.filter((p) => p.gender === g || p.gender === "unisex");
  const path = `/shop/for/${g}`;
  return (
    <ShopShell crumbs={[{ name: "Shop", href: "/shop" }, { name: G[g] }]} title={`${G[g]}'s eyewear`} intro="Sunglasses and optical frames, including unisex styles.">
      <Ld data={crumbLd([{ name: "Shop", path: "/shop" }, { name: G[g], path }])} />
      <Ld data={productListLd(G[g], path, items)} />
      <ProductGrid products={items} />
    </ShopShell>
  );
}
