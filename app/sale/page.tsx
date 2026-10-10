import type { Metadata } from "next";
import ShopShell from "@/components/ShopShell";
import ProductGrid from "@/components/ProductGrid";
import Ld from "@/components/Ld";
import { PRODUCTS, onSale } from "@/lib/products";
import { crumbLd, productListLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sale: Designer Sunglasses & Frames",
  description: "End-of-season offers on Sun Optics sunglasses and optical frames. Limited stock, same warranty, ordered by WhatsApp enquiry.",
  alternates: { canonical: "/sale" },
};

export default function Sale() {
  const items = PRODUCTS.filter(onSale);
  return (
    <ShopShell crumbs={[{ name: "Sale" }]} title="Sale" intro="End-of-season offers on selected frames. Same craft, same warranty, limited stock.">
      <Ld data={crumbLd([{ name: "Sale", path: "/sale" }])} />
      <Ld data={productListLd("Sale", "/sale", items)} />
      <ProductGrid products={items} />
    </ShopShell>
  );
}
