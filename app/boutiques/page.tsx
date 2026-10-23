import type { Metadata } from "next";
import ShopShell from "@/components/ShopShell";
import Ld from "@/components/Ld";
import { SITE_URL, STORES, HOURS, HOURS_NOTE, crumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our branches in Vellore",
  description: "Visit Sun Optics at Krishna Nagar or Green Circle, Vellore. Open 10:00 AM to 9:00 PM all week. Call or WhatsApp +91 95665 14555.",
  alternates: { canonical: "/boutiques" },
};

export default function Branches() {
  const ld = { "@context": "https://schema.org", "@graph": STORES.map((s) => ({ "@type": "OpticalStore", name: s.name, url: `${SITE_URL}/boutiques`, parentOrganization: { "@id": `${SITE_URL}/#organization` }, address: { "@type": "PostalAddress", streetAddress: s.address, addressLocality: "Vellore", addressRegion: "Tamil Nadu", addressCountry: "IN" }, telephone: s.phone, openingHours: "Mo-Su 10:00-21:00" })) };
  return (
    <ShopShell crumbs={[{ name: "Branches" }]} title="Our branches" intro="Two branches in Vellore. Walk in, or call ahead for specialty fittings.">
      <Ld data={crumbLd([{ name: "Branches", path: "/boutiques" }])} />
      <Ld data={ld} />
      <ul className="storegrid">
        {STORES.map((s) => (
          <li key={s.name}>
            <h2 className="h3">{s.name}</h2>
            {s.since && <p className="cart__meta">Since {s.since}</p>}
            <p>{s.address}</p>
            <p className="cart__meta">Open {HOURS}*</p>
            <p><a className="link" href={`tel:${s.phone.replace(/\s/g, "")}`}>{s.phone}</a></p>
            {s.mapUrl && <p><a className="link" href={s.mapUrl} target="_blank" rel="noopener noreferrer">Get directions ›</a></p>}
          </li>
        ))}
      </ul>
      <p className="cart__meta">*{HOURS_NOTE}</p>
    </ShopShell>
  );
}
