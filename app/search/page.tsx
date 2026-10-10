import type { Metadata } from "next";
import ShopShell from "@/components/ShopShell";
import ProductGrid from "@/components/ProductGrid";
import WhatsAppLink from "@/components/WhatsAppLink";
import { searchProducts } from "@/lib/products";

export const metadata: Metadata = { title: "Search", robots: { index: false, follow: true } };

export default async function Search({ searchParams }: { searchParams: Promise<{ q?: string | string[] }> }) {
  const raw = (await searchParams).q;
  const q = (Array.isArray(raw) ? raw[0] : raw)?.trim().slice(0, 80) ?? "";
  const items = searchProducts(q);
  return (
    <ShopShell crumbs={[{ name: "Search" }]} title={q ? `Results for “${q}”` : "Search"} intro={q ? undefined : "Use the search icon in the header to find a frame, brand or material."}>
      {q && items.length > 0 && <ProductGrid products={items} />}
      {q && items.length === 0 && (
        <div className="empty">
          <p>No products match “{q}”.</p>
          <p style={{ marginTop: "1rem" }}><WhatsAppLink text={`Hello Sun Optics, I'm looking for: ${q}`} label="Ask us on WhatsApp" /></p>
        </div>
      )}
    </ShopShell>
  );
}
