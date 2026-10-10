import Link from "next/link";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Glasses2D from "@/components/Glasses2D";
import LensPicker from "@/components/LensPicker";
import ContactForm from "@/components/ContactForm";
import ProductCard from "@/components/ProductCard";
import ProductArt, { ShapeArt } from "@/components/ProductArt";
import Rail from "@/components/Rail";
import HeroCarousel from "@/components/HeroCarousel";
import Tabs from "@/components/Tabs";
import WhatsAppLink from "@/components/WhatsAppLink";
import { FAQ, EMAIL, STORES, HOURS, jsonLd } from "@/lib/site";
import { BRANDS, PRODUCTS, SHAPES, brandSlug, bySlug } from "@/lib/products";

const STEPS = [
  { scene: "frame", side: "right", n: "01", h: "The frame", p: "Cut from a single block of Mazzucchelli acetate or forged from β-titanium, then tumbled for 72 hours and hand-polished in 24 steps until the surface looks wet.", ticks: ["Under 28 g, all-day comfort", "Hypoallergenic, nickel-free", "24-step hand finish"] },
  { scene: "temple", side: "left", n: "02", h: "The temple", p: "Core-wire temples follow the skull instead of pinching it. A gentle 8° splay and soft-touch tips keep the fit secure for a run, a drive or a long flight.", ticks: ["Flex core wire", "Anti-slip acetate tips", "Adjusted in-boutique, free for life"] },
  { scene: "hinge", side: "right", n: "03", h: "The hinge", p: "Five-barrel spring hinges in gold-plated steel, tested to 20,000 open-close cycles. You feel it in the click; you stop noticing it in a week.", ticks: ["5-barrel spring hinge", "20,000-cycle tested", "2-year warranty"] },
];

const PROMOS = [
  { tag: "New", title: "Hanami Round", word: "NEW", text: "Hand-bent titanium. 14 grams.", href: "/product/hanami-round", cta: "Discover", tone: "ink", shape: "round" },
  { tag: "Collector\u2019s Edition", title: "Numbered. Rare. Yours.", word: "RARE", text: "Gold-plated titanium, buffalo horn, hand-carved acetate.", href: "/collectors-edition", cta: "View the edition", tone: "gold", shape: "aviator" },
  { tag: "Sale", title: "Up to 22% off.", word: "SALE", text: "End-of-season offers on selected frames.", href: "/sale", cta: "Shop the sale", tone: "red", shape: "square" },
  { tag: "Contact lenses", title: "See clearly. Daily.", word: "CLEAR", text: "Daily and monthly lenses, fitted after a free eye test.", href: "/shop/contact-lenses", cta: "Shop lenses", tone: "blue", shape: "round" },
  { tag: "Boutiques", title: "Try them in person.", word: "VISIT", text: "Free eye test and 3D face scan in Delhi, Mumbai and Bengaluru.", href: "/boutiques", cta: "Find a boutique", tone: "light", shape: "cat-eye" },
] as const;

export default function Home() {
  const best = PRODUCTS.filter((p) => p.best && p.category !== "accessories").slice(0, 8);
  const fresh = PRODUCTS.filter((p) => p.isNew).slice(0, 8);
  const collector = PRODUCTS.filter((p) => p.collector).slice(0, 3);
  const rail = (list: typeof PRODUCTS, label: string) => (
    <Rail label={label}>{list.map((p) => <div className="rail__item" key={p.slug}><ProductCard p={p} /></div>)}</Rail>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip" href="#main">Skip to content</a>

      <div className="loader" id="loader" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="loader__logo" src="/logo-white.png" alt="" width="96" height="89" />
        <div className="loader__mark">Sun<span>Optics</span></div>
        <div className="loader__bar"><i /></div>
      </div>
      <div className="progress" aria-hidden="true"><i id="progress" /></div>

      <Experience />

      <main id="main">
        {/* 1 · HERO: full-width banner carousel (slide 1 shows the 3D model) */}
        <section className="hero" id="hero" aria-labelledby="h1">
          <HeroCarousel
            slides={[...PROMOS]}
            intro={
              <div className="wrap hslide__inner">
                <div className="hslide__text">
                  <p className="hero__eyebrow"><i />Luxury eyewear · India</p>
                  <h1 id="h1" className="display hero__h1">
                    <span className="hl"><span className="w" style={{ "--i": 0 } as React.CSSProperties}>See</span> <span className="w" style={{ "--i": 1 } as React.CSSProperties}>the</span> <span className="w" style={{ "--i": 2 } as React.CSSProperties}>world</span></span>
                    <span className="hl"><span className="w" style={{ "--i": 3 } as React.CSSProperties}>in</span> <em className="w" style={{ "--i": 4 } as React.CSSProperties}>a</em> <em className="w" style={{ "--i": 5 } as React.CSSProperties}>new</em> <em className="w" style={{ "--i": 6 } as React.CSSProperties}>light.</em></span>
                  </h1>
                  <p className="lede">Hand-finished titanium and Italian acetate frames, fitted with lenses engineered for clarity.</p>
                  <div className="hero__cta">
                    <Link className="btn btn--lg" href="/shop">Browse the collection</Link>
                    <WhatsAppLink className="btn btn--ghost" icon={false} label="Enquire on WhatsApp" text="Hello Sun Optics, I'd like to know more about your eyewear." />
                  </div>
                  <ul className="hero__trust">
                    <li>Free eye test</li><li>Insured delivery</li><li>2-year warranty</li>
                  </ul>
                </div>
                <div className="hslide__art hslide__art--hero">
                  <div className="hero__halo" aria-hidden="true" />
                  <Glasses2D glare reflect tint="#4a3218" className="hero-glasses" />
                  <span className="fchip fchip--a"><b>β-titanium</b>28 g</span>
                  <span className="fchip fchip--b"><b>UV400</b>Polarised</span>
                  <span className="fchip fchip--c"><b>24 steps</b>Hand finish</span>
                </div>
              </div>
            }
          />
        </section>

        {/* 3 · FEATURED PICKS */}
        <section className="band--light sec" aria-labelledby="feat-h">
          <div className="wrap sec__head sec__head--row">
            <h2 id="feat-h" className="h2">Featured picks.</h2>
            <Link href="/shop" className="link">Shop all ›</Link>
          </div>
          <div className="wrap">
            <Tabs panels={[
              { id: "best", label: "Best sellers", node: rail(best, "Best sellers") },
              { id: "new", label: "New arrivals", node: rail(fresh, "New arrivals") },
            ]} />
          </div>
        </section>

        {/* 4 · FRAME EDIT */}
        <section className="band--light band--grey sec" aria-labelledby="edit-h">
          <div className="wrap">
            <div className="sec__head"><h2 id="edit-h" className="h2">Discover your <em>frame edit.</em></h2></div>
            <div className="edit">
              <Link href="/shop/for/men" className="edit__tile edit__tile--a"><span>Men</span><ProductArt product={bySlug("aurelia-aviator")!} /></Link>
              <Link href="/shop/for/women" className="edit__tile edit__tile--b"><span>Women</span><ProductArt product={bySlug("savoy-cat-eye")!} /></Link>
              <Link href="/shop/kids" className="edit__tile edit__tile--c"><span>Kids</span><ProductArt product={bySlug("bounce-round")!} /></Link>
            </div>
          </div>
        </section>

        {/* 5 · SHOP BY SHAPE */}
        <section className="band--light sec" aria-labelledby="shape-h">
          <div className="wrap">
            <div className="sec__head"><h2 id="shape-h" className="h2">Shop by <em>shape.</em></h2></div>
            <ul className="shapes">
              {SHAPES.map((s) => (
                <li key={s.slug}><Link href={`/shop/shape/${s.slug}`}><ShapeArt shape={s.slug} /><span>{s.label}</span></Link></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6 · CRAFT */}
        <section className="band--dark sec craft" id="craft" aria-labelledby="craft-h">
          <div className="wrap">
            <div className="sec__head sec__head--center">
              <p className="kicker" data-reveal>The craft</p>
              <h2 id="craft-h" className="h2" data-reveal>Three details, <em>obsessively made.</em></h2>
            </div>
            <div className="features">
              {STEPS.map((s) => (
                <article key={s.n} className="feature">
                  <span className="step__n">{s.n}</span>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                  <ul className="ticks">{s.ticks.map((t) => <li key={t}>{t}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · LENSES */}
        <section className="band--dark sec lenses" id="lenses" aria-labelledby="lenses-h">
          <div className="wrap">
            <div className="sec__head sec__head--center">
              <p className="kicker" data-reveal>The lenses</p>
              <h2 id="lenses-h" className="h2" data-reveal>Choose your <em>light.</em></h2>
              <p className="body-l" data-reveal>Every lens blocks 100% of UVA and UVB. Pick a tint to preview it. Prescription, polarised and photochromic versions are available for every tint.</p>
            </div>
            <LensPicker />
            <table className="spec spec--dark" aria-label="Lens specifications">
              <tbody>
                <tr><th scope="row">UV protection</th><td>100% UVA / UVB (UV400)</td></tr>
                <tr><th scope="row">Options</th><td>Polarised, mirror, photochromic, prescription</td></tr>
                <tr><th scope="row">Coatings</th><td>Anti-reflective, oleophobic, scratch-resistant</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 8 · BRANDS */}
        <section className="band--light sec" aria-labelledby="brands-h">
          <div className="wrap">
            <div className="sec__head sec__head--row">
              <h2 id="brands-h" className="h2">This season&apos;s <em>bestsellers.</em></h2>
              <Link href="/brands" className="link">All brands ›</Link>
            </div>
            <ul className="brandtiles">
              {BRANDS.map((b) => (
                <li key={b}><Link href={`/brands/${brandSlug(b)}`}><strong>{b}</strong><span>{PRODUCTS.filter((p) => p.brand === b).length} styles ›</span></Link></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9 · COLLECTOR'S EDITION */}
        <section className="band--dark sec" aria-labelledby="col-h">
          <div className="wrap">
            <div className="sec__head sec__head--row">
              <div>
                <p className="kicker">Collector&apos;s Edition</p>
                <h2 id="col-h" className="h2">Handpicked pieces. <em>Numbered runs.</em></h2>
                <p className="body-l">Rare materials, hand-finished, delivered in a presentation case. Once a run is sold, it is retired.</p>
              </div>
              <Link href="/collectors-edition" className="link link--dark">View all ›</Link>
            </div>
            <div className="pgrid pgrid--dark">{collector.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
          </div>
        </section>

        {/* 10 · BOUTIQUES */}
        <section className="band--dark boutiques" id="boutiques" aria-labelledby="b-h">
          <div className="wrap boutiques__inner">
            <p className="kicker" data-reveal>Boutiques</p>
            <h2 id="b-h" className="h2" data-reveal>Try them <em>in person.</em></h2>
            <p className="body-l" data-reveal>Each boutique offers a free eye test, a 3D face scan to pick the right fit, and same-day adjustments.</p>
            <ul className="stores" data-reveal>
              {STORES.map((x) => <li key={x.city}><h3>{x.city}</h3><p>{x.area} · {HOURS}</p></li>)}
            </ul>
          </div>
        </section>

        {/* 11 · FAQ */}
        <div className="band--light"><section className="faq wrap" id="faq" aria-labelledby="faq-h">
          <div className="faq__intro">
            <p className="kicker" data-reveal>Eyewear guide</p>
            <h2 id="faq-h" className="h2" data-reveal>Questions, <em>answered.</em></h2>
            <p className="body-l" data-reveal>Everything you need to know before you choose a pair.</p>
          </div>
          <div className="faq__list" data-reveal>
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </section></div>

        {/* 12 · CONTACT */}
        <div className="band--light"><section className="contact wrap" id="contact" aria-labelledby="c-h">
          <div className="contact__card">
            <div>
              <p className="kicker" data-reveal>Book a fitting</p>
              <h2 id="c-h" className="h2" data-reveal>Let&apos;s find <em>your pair.</em></h2>
              <p className="body-l" data-reveal>Tell us what you&apos;re after and a stylist will reply on WhatsApp, usually within the hour.</p>
              <p className="contact__mail" data-reveal><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
            </div>
            <ContactForm />
          </div>
        </section></div>
      </main>

      <Footer />
    </>
  );
}
