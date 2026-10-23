"use client";
import { useSearchParams } from "next/navigation";
import ShopShell from "./ShopShell";
import ProductGrid from "./ProductGrid";
import WhatsAppLink from "./WhatsAppLink";
import { searchProducts } from "@/lib/products";

export default function SearchResults() {
  const q = (useSearchParams().get("q") ?? "").trim().slice(0, 80);
  const items = searchProducts(q);
  return (
    <ShopShell crumbs={[{ name: "Search" }]} title={q ? `Results for “${q}”` : "Search"} intro={q ? undefined : "Use the search icon in the header to find a frame or lens."}>
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
