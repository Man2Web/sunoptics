import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ShopShell from "@/components/ShopShell";
import ProductGrid from "@/components/ProductGrid";
import Ld from "@/components/Ld";
import { PRODUCTS, SHAPES } from "@/lib/products";
import { crumbLd, productListLd } from "@/lib/site";

type Params = { shape: string };
export const dynamicParams = false;
export const generateStaticParams = () => SHAPES.map((s) => ({ shape: s.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { shape } = await params;
  const s = SHAPES.find((x) => x.slug === shape);
  if (!s) return {};
  return { title: `${s.label} Sunglasses & Frames`, description: `Shop ${s.label.toLowerCase()} sunglasses and optical frames from Sun Optics. Order by WhatsApp enquiry.`, alternates: { canonical: `/shop/shape/${s.slug}` } };
}

export default async function ShapePage({ params }: { params: Promise<Params> }) {
  const { shape } = await params;
  const s = SHAPES.find((x) => x.slug === shape);
  if (!s) notFound();
  const items = PRODUCTS.filter((p) => p.shape === s.slug && p.category !== "accessories");
  const path = `/shop/shape/${s.slug}`;
  return (
    <ShopShell crumbs={[{ name: "Shop", href: "/shop" }, { name: s.label }]} title={`${s.label} styles`}>
      <Ld data={crumbLd([{ name: "Shop", path: "/shop" }, { name: s.label, path }])} />
      <Ld data={productListLd(s.label, path, items)} />
      <ProductGrid products={items} />
    </ShopShell>
  );
}
