import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShopShell from "@/components/ShopShell";
import ProductGrid from "@/components/ProductGrid";
import Ld from "@/components/Ld";
import { BRANDS, PRODUCTS, brandSlug } from "@/lib/products";
import { crumbLd, productListLd } from "@/lib/site";

type Params = { brand: string };
export const dynamicParams = false;
export const generateStaticParams = () => BRANDS.map((b) => ({ brand: brandSlug(b) }));
const find = (s: string) => BRANDS.find((b) => brandSlug(b) === s);

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const b = find((await params).brand);
  if (!b) return {};
  return { title: `${b} Eyewear`, description: `Shop ${b} sunglasses and frames at Sun Optics, by WhatsApp enquiry.`, alternates: { canonical: `/brands/${brandSlug(b)}` } };
}

export default async function Brand({ params }: { params: Promise<Params> }) {
  const b = find((await params).brand);
  if (!b) notFound();
  const items = PRODUCTS.filter((p) => p.brand === b);
  const path = `/brands/${brandSlug(b)}`;
  return (
    <ShopShell crumbs={[{ name: "Brands", href: "/brands" }, { name: b }]} title={b}>
      <Ld data={crumbLd([{ name: "Brands", path: "/brands" }, { name: b, path }])} />
      <Ld data={productListLd(b, path, items)} />
      <ProductGrid products={items} />
    </ShopShell>
  );
}
