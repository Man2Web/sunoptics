import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShopShell from "@/components/ShopShell";
import Ld from "@/components/Ld";
import WhatsAppLink from "@/components/WhatsAppLink";
import { LANDINGS, landingBySlug } from "@/lib/landings";
import { SITE_URL, SITE_NAME, STORES, PHONE, HOURS, crumbLd } from "@/lib/site";

export const dynamicParams = false;
export const generateStaticParams = () => LANDINGS.map((l) => ({ slug: l.slug }));

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const l = landingBySlug((await params).slug);
  if (!l) return {};
  return {
    title: l.title, description: l.description, alternates: { canonical: `/vellore/${l.slug}` },
    openGraph: { title: l.title, description: l.description, url: `/vellore/${l.slug}`, images: [{ url: l.img }] },
  };
}

export default async function Landing({ params }: { params: Promise<{ slug: string }> }) {
  const l = landingBySlug((await params).slug);
  if (!l) notFound();
  const path = `/vellore/${l.slug}`;
  const store = l.branch !== undefined ? STORES[l.branch] : null;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${SITE_URL}${path}#page`, url: SITE_URL + path, name: l.title, description: l.description, inLanguage: "en-IN", isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#organization` } },
      { "@type": "FAQPage", mainEntity: l.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
      ...(store ? [{ "@type": "Optician", "@id": `${SITE_URL}${path}#store`, name: store.name, url: SITE_URL + path, telephone: PHONE, address: { "@type": "PostalAddress", streetAddress: store.address, addressLocality: "Vellore", addressRegion: "Tamil Nadu", addressCountry: "IN" }, openingHours: "Mo-Su 10:00-21:00", parentOrganization: { "@id": `${SITE_URL}/#organization` } }] : []),
    ],
  };
  return (
    <ShopShell crumbs={[{ name: l.nav }]} title={l.h1} intro={l.intro}>
      <Ld data={crumbLd([{ name: l.nav, path }])} />
      <Ld data={ld} />
      <div className="lp">
        <div className="lp__main">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="pagehero" src={l.img} alt={l.alt} width="1800" height="1200" />
          {l.blocks.map((b) => (
            <section key={b.h} className="lp__block">
              <h2 className="h3">{b.h}</h2>
              {b.p && <p>{b.p}</p>}
              {b.list && <ul className="bullets">{b.list.map((x) => <li key={x}>{x}</li>)}</ul>}
              {b.defs && <ul className="plist">{b.defs.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}</ul>}
            </section>
          ))}
          <section className="lp__block">
            <h2 className="h3">Frequently asked questions</h2>
            <div className="faq__list">{l.faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
          </section>
        </div>
        <aside className="lp__side" aria-label="Contact and related pages">
          <div className="lp__card">
            <h2 className="h3">{SITE_NAME}, Vellore</h2>
            <p>Open {HOURS}</p>
            <p><a className="link" href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a></p>
            {STORES.map((s) => <p key={s.name} className="cart__meta">{s.area}: {s.address}</p>)}
            <WhatsAppLink className="btn btn--wa btn--wide" label="Chat on WhatsApp" text={l.wa} />
            <Link className="btn btn--ghost btn--wide" href="/appointments">Book an appointment</Link>
          </div>
          <div className="lp__card">
            <h2 className="h3">Also in Vellore</h2>
            <ul className="lp__links">
              {l.related.map((s) => { const r = landingBySlug(s)!; return <li key={s}><Link href={`/vellore/${s}`}>{r.nav}</Link></li>; })}
              <li><Link href="/services">All services</Link></li>
              <li><Link href="/brands">Brands we carry</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </ShopShell>
  );
}
