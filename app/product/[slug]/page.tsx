import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShopShell from "@/components/ShopShell";
import BuyBox from "@/components/BuyBox";
import ProductCard from "@/components/ProductCard";
import Ld from "@/components/Ld";
import { CATEGORIES, PRODUCTS, SHAPES, brandSlug, bySlug, related } from "@/lib/products";
import { SITE_URL, SITE_NAME, crumbLd } from "@/lib/site";

type Params = { slug: string };
export const dynamicParams = false;
export const generateStaticParams = () => PRODUCTS.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const p = bySlug((await params).slug);
  if (!p) return {};
  return {
    title: `${p.name} by ${p.brand}`,
    description: `${p.desc} ₹${p.price.toLocaleString("en-IN")}. Enquire by WhatsApp.`,
    alternates: { canonical: `/product/${p.slug}` },
    openGraph: { type: "website", title: `${p.name} | ${SITE_NAME}`, description: p.desc, url: `/product/${p.slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const p = bySlug((await params).slug);
  if (!p) notFound();
  const cat = CATEGORIES.find((c) => c.slug === p.category)!;
  const shape = SHAPES.find((s) => s.slug === p.shape)?.label;
  const url = `${SITE_URL}/product/${p.slug}`;

  const ld = {
    "@context": "https://schema.org", "@type": "Product", "@id": `${url}#product`,
    name: p.name, description: p.desc, brand: { "@type": "Brand", name: p.brand }, category: cat.title, material: p.material,
    sku: p.slug, url,
    color: p.colors.map((c) => c.name),
    offers: {
      "@type": "Offer", url, priceCurrency: "INR", price: String(p.price),
      availability: p.collector ? "https://schema.org/LimitedAvailability" : "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      hasMerchantReturnPolicy: { "@type": "MerchantReturnPolicy", applicableCountry: "IN", returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow", merchantReturnDays: 14, returnMethod: "https://schema.org/ReturnByMail" },
      seller: { "@id": `${SITE_URL}/#organization` },
    },
  };

  return (
    <ShopShell crumbs={[{ name: "Shop", href: "/shop" }, { name: cat.title, href: `/shop/${cat.slug}` }, { name: p.name }]}>
      <Ld data={ld} />
      <Ld data={crumbLd([{ name: "Shop", path: "/shop" }, { name: cat.title, path: `/shop/${cat.slug}` }, { name: p.name, path: `/product/${p.slug}` }])} />
      <BuyBox p={p} />

      <section className="pdp__specs" aria-labelledby="spec-h">
        <h2 id="spec-h" className="h3">Details</h2>
        <table className="spec">
          <tbody>
            <tr><th scope="row">Brand</th><td><Link href={`/brands/${brandSlug(p.brand)}`}>{p.brand}</Link></td></tr>
            <tr><th scope="row">Category</th><td><Link href={`/shop/${cat.slug}`}>{cat.title}</Link></td></tr>
            {shape && <tr><th scope="row">Shape</th><td>{shape}</td></tr>}
            <tr><th scope="row">Material</th><td>{p.material}</td></tr>
            <tr><th scope="row">For</th><td style={{ textTransform: "capitalize" }}>{p.gender}</td></tr>
            <tr><th scope="row">Colours</th><td>{p.colors.map((c) => c.name).join(", ")}</td></tr>
            {(p.category === "sunglasses" || p.category === "kids") && <tr><th scope="row">Lens protection</th><td>100% UVA / UVB (UV400)</td></tr>}
            <tr><th scope="row">Warranty</th><td>2 years against manufacturing defects</td></tr>
            <tr><th scope="row">Returns</th><td>14 days on unworn, non-prescription pieces</td></tr>
          </tbody>
        </table>
      </section>

      <section className="related" aria-labelledby="rel-h">
        <h2 id="rel-h" className="h3">You may also like</h2>
        <div className="pgrid">{related(p).map((r) => <ProductCard key={r.slug} p={r} />)}</div>
      </section>
    </ShopShell>
  );
}
