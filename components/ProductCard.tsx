import Link from "next/link";
import ProductArt from "./ProductArt";
import WhatsAppLink from "./WhatsAppLink";
import { discount, type Product } from "@/lib/products";
import { inr, SITE_URL } from "@/lib/site";

export default function ProductCard({ p }: { p: Product }) {
  const d = discount(p);
  return (
    <article className="pcard">
      <Link href={`/product/${p.slug}`} className="pcard__link" aria-label={`${p.name} by ${p.brand}`}>
        <div className="pcard__art">
          <ProductArt product={p} />
          <div className="pcard__badges">
            {d > 0 && <span className="badge badge--sale">Save {d}%</span>}
            {p.collector && <span className="badge badge--dark">Collector&apos;s</span>}
            {p.isNew && <span className="badge">New</span>}
            {p.best && <span className="badge">Bestseller</span>}
          </div>
        </div>
        <p className="pcard__brand">{p.brand}</p>
        <h3>{p.name}</h3>
        <p className="pcard__meta">{p.colors.length} {p.colors.length > 1 ? "colours" : "colour"} · {p.material}</p>
        <p className="pcard__price">{inr(p.price)}{p.mrp && <s>{inr(p.mrp)}</s>}</p>
      </Link>
      <WhatsAppLink className="btn btn--sm btn--add" label="Enquire" text={`Hello Sun Optics, I'd like to enquire about the ${p.name} (${p.brand}), ${inr(p.price)}. ${SITE_URL}/product/${p.slug}`} />
    </article>
  );
}
