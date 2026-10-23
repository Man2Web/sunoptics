import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShopShell from "@/components/ShopShell";
import ProductGrid from "@/components/ProductGrid";
import Ld from "@/components/Ld";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { crumbLd, productListLd } from "@/lib/site";

type Params = { category: string };
export const dynamicParams = false;
export const generateStaticParams = () => CATEGORIES.map((c) => ({ category: c.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  const c = CATEGORIES.find((x) => x.slug === category);
  if (!c) return {};
  return { title: `${c.title} | Sun Optics Vellore`, description: `${c.blurb} Shop ${c.title.toLowerCase()} from Sun Optics by WhatsApp enquiry.`, alternates: { canonical: `/shop/${c.slug}` } };
}

export default async function Category({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  const c = CATEGORIES.find((x) => x.slug === category);
  if (!c) notFound();
  const items = PRODUCTS.filter((p) => p.category === c.slug);
  const path = `/shop/${c.slug}`;
  return (
    <ShopShell crumbs={[{ name: "Shop", href: "/shop" }, { name: c.title }]} title={c.title} intro={c.blurb}>
      <Ld data={crumbLd([{ name: "Shop", path: "/shop" }, { name: c.title, path }])} />
      <Ld data={productListLd(c.title, path, items)} />
      <ProductGrid products={items} />
    </ShopShell>
  );
}
