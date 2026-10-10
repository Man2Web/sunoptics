import type { Metadata } from "next";
import ShopShell from "@/components/ShopShell";
import Ld from "@/components/Ld";
import { SITE_URL, STORES, HOURS, crumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Boutiques in New Delhi, Mumbai & Bengaluru",
  description: "Visit a Sun Optics boutique for a free eye test, 3D face scan and same-day adjustments in New Delhi, Mumbai and Bengaluru.",
  alternates: { canonical: "/boutiques" },
};

export default function Boutiques() {
  const ld = { "@context": "https://schema.org", "@graph": STORES.map((s) => ({ "@type": "OpticalStore", name: `Sun Optics ${s.area}`, url: `${SITE_URL}/boutiques`, parentOrganization: { "@id": `${SITE_URL}/#organization` }, address: { "@type": "PostalAddress", addressLocality: s.city, streetAddress: s.address || s.area, addressCountry: "IN" }, ...(s.phone ? { telephone: s.phone } : {}), openingHours: "Mo-Su 11:00-21:00" })) };
  return (
    <ShopShell crumbs={[{ name: "Boutiques" }]} title="Boutiques" intro="Free eye tests, a 3D face scan to pick the right fit, and same-day adjustments.">
      <Ld data={crumbLd([{ name: "Boutiques", path: "/boutiques" }])} />
      <Ld data={ld} />
      <ul className="storegrid">
        {STORES.map((s) => (
          <li key={s.city}>
            <h2 className="h3">{s.city}</h2>
            <p>{s.address || s.area}</p>
            <p className="cart__meta">Open {HOURS}</p>
            {s.phone && <p><a className="link" href={`tel:${s.phone.replace(/\s/g, "")}`}>{s.phone}</a></p>}
            {s.mapUrl && <p><a className="link" href={s.mapUrl} target="_blank" rel="noopener noreferrer">Get directions ›</a></p>}
          </li>
        ))}
      </ul>
    </ShopShell>
  );
}
