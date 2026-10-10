import type { Metadata } from "next";
import ShopShell from "@/components/ShopShell";
import ProductGrid from "@/components/ProductGrid";
import Ld from "@/components/Ld";
import { PRODUCTS } from "@/lib/products";
import { crumbLd, productListLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Collector's Edition: Numbered Luxury Eyewear",
  description: "Numbered, limited-run luxury sunglasses in gold-plated titanium, buffalo horn and hand-carved acetate. Delivered in a presentation case.",
  alternates: { canonical: "/collectors-edition" },
};

export default function Collectors() {
  const items = PRODUCTS.filter((p) => p.collector);
  return (
    <ShopShell crumbs={[{ name: "Collector's Edition" }]} title="Collector's Edition" intro="Numbered pieces in rare materials. Once a run is sold, it is retired.">
      <Ld data={crumbLd([{ name: "Collector's Edition", path: "/collectors-edition" }])} />
      <Ld data={productListLd("Collector's Edition", "/collectors-edition", items)} />
      <ProductGrid products={items} />
    </ShopShell>
  );
}
