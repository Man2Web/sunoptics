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
import { FAQ, EMAIL, PHONE, STORES, HOURS, HOURS_NOTE, BRAND_GROUPS, LENS_TYPES, jsonLd } from "@/lib/site";
import { PRODUCTS, SHAPES, bySlug } from "@/lib/products";

const STEPS = [
  { n: "01", h: "The check-up", p: "You do not need to visit a hospital for a routine eye check-up. Our optometrists find the cause of your visual discomfort and recommend the right solution.", ticks: ["₹200, free with frames and lenses", "Walk-ins welcome", "Hospital referral only when truly required"] },
  { n: "02", h: "The fit", p: "From nose pad changes and frame alignment to lens and frame replacement, we keep your glasses sitting right, with a detailed eyewear and lens consultation.", ticks: ["Nose pad change", "Frame alignment", "Lens and frame replacement"] },
  { n: "03", h: "The specialty care", p: "Led by Mr. Yashwanth Balaji, we fit corneal RGP, scleral and orthokeratology lenses, and offer vision therapy and orthoptics evaluation.", ticks: ["Trial lenses available in store", "Custom-made after fitting", "Book ahead for specialty fittings"] },
];

const PROMOS = [
  { tag: "Specialty lenses", title: "Scleral, RGP & Ortho-K.", word: "FIT", text: "Specialty contact lens fitting and vision therapy.", href: "/services", cta: "Our services", tone: "ink", shape: "round" },
  { tag: "Eye check-up", title: "₹200, free with purchase.", word: "EYES", text: "A check-up by a qualified optometrist, no hospital visit needed.", href: "/appointments", cta: "Book now", tone: "gold", shape: "aviator" },
  { tag: "Home delivery", title: "Delivered to your door.", word: "FREE", text: "Free in Vellore and surrounding areas; courier for outer regions.", href: "/delivery", cta: "Know more", tone: "red", shape: "square" },
  { tag: "Brands", title: "Names you trust.", word: "BRANDS", text: "Ray-Ban, Oakley, Zeiss, Hoya, CooperVision and more.", href: "/brands", cta: "See all brands", tone: "blue", shape: "round" },
  { tag: "Branches", title: "Visit us in Vellore.", word: "VISIT", text: "Krishna Nagar and Green Circle, open 10 AM to 9 PM.", href: "/boutiques", cta: "Find a branch", tone: "light", shape: "cat-eye" },
] as const;

type SplitProps = { img: string; alt: string; kicker: string; h: React.ReactNode; p: string; href: string; cta: string; flip?: boolean };
const Split = ({ img, alt, kicker, h, p, href, cta, flip }: SplitProps) => (
  <section className="band--light sec split-sec">
    <div className={`wrap split${flip ? " split--flip" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="split__img" src={img} alt={alt} loading="lazy" width="1800" height="1200" />
      <div className="split__text">
        <p className="kicker">{kicker}</p>
        <h2 className="h2">{h}</h2>
        <p className="body-l">{p}</p>
        <Link className="link" href={href}>{cta} ›</Link>
      </div>
    </div>
  </section>
);

export default function Home() {
  const best = PRODUCTS.filter((p) => p.best && p.category !== "accessories").slice(0, 8);
  const fresh = PRODUCTS.filter((p) => p.isNew).slice(0, 8);
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
                  <p className="hero__eyebrow"><i />Opticians · Vellore · Since 1999</p>
                  <h1 id="h1" className="display hero__h1">
                    <span className="hl"><span className="w" style={{ "--i": 0 } as React.CSSProperties}>Caring</span> <span className="w" style={{ "--i": 1 } as React.CSSProperties}>for</span> <span className="w" style={{ "--i": 2 } as React.CSSProperties}>Vellore&apos;s</span></span>
                    <span className="hl"><span className="w" style={{ "--i": 3 } as React.CSSProperties}>eyes</span> <em className="w" style={{ "--i": 4 } as React.CSSProperties}>since</em> <em className="w" style={{ "--i": 5 } as React.CSSProperties}>December</em> <em className="w" style={{ "--i": 6 } as React.CSSProperties}>1999.</em></span>
                  </h1>
                  <p className="lede">Eye check-ups by qualified optometrists, trusted eyewear and lens brands, and specialty contact lens fitting.</p>
                  <div className="hero__cta">
                    <Link className="btn btn--lg" href="/appointments">Book an appointment</Link>
                    <WhatsAppLink className="btn btn--ghost" icon={false} label="Enquire on WhatsApp" text="Hello Sun Optics, I'd like to know more about your eyewear." />
                  </div>
                  <ul className="hero__trust">
                    <li>₹200 check-up, free with purchase</li><li>Free home delivery in Vellore</li><li>Two branches</li>
                  </ul>
                </div>
                <div className="hslide__art hslide__art--hero">
                  <div className="hero__halo" aria-hidden="true" />
                  <Glasses2D glare reflect tint="#4a3218" className="hero-glasses" />
                  <span className="fchip fchip--a"><b>1999</b>Since</span>
                  <span className="fchip fchip--b"><b>2</b>Branches</span>
                  <span className="fchip fchip--c"><b>B.Optom</b>Led care</span>
                </div>
              </div>
            }
          />
        </section>

        <Split img="/images/exam-machine.jpg" alt="Patient having an eye check-up with an optometrist's equipment" kicker="Eye check-up" h={<>See your optometrist, <em>not a hospital.</em></>} p="Routine eye check-ups happen right here in the store. We find the cause of your visual discomfort and recommend the right solution. A check-up costs ₹200, free when you buy frames and lenses." href="/appointments" cta="Book an appointment" />

        {/* 2 · FEATURED PICKS (placeholder products until the real catalogue is supplied) */}
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

        {/* 3 · FRAME EDIT */}
        <section className="band--light band--grey sec" aria-labelledby="edit-h">
          <div className="wrap">
            <div className="sec__head"><h2 id="edit-h" className="h2">Find your <em>frames.</em></h2></div>
            <div className="edit">
              <Link href="/shop/for/men" className="edit__tile edit__tile--a"><span>Men</span><ProductArt product={bySlug("aurelia-aviator")!} /></Link>
              <Link href="/shop/for/women" className="edit__tile edit__tile--b"><span>Women</span><ProductArt product={bySlug("savoy-cat-eye")!} /></Link>
              <Link href="/shop/kids" className="edit__tile edit__tile--c"><span>Kids</span><ProductArt product={bySlug("bounce-round")!} /></Link>
            </div>
          </div>
        </section>

        {/* 4 · SHOP BY SHAPE */}
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

        {/* 5 · CARE */}
        <section className="band--dark sec craft" id="craft" aria-labelledby="craft-h">
          <div className="wrap">
            <div className="sec__head sec__head--center">
              <p className="kicker" data-reveal>Why Sun Optics</p>
              <h2 id="craft-h" className="h2" data-reveal>Three things, <em>done with care.</em></h2>
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

        <Split flip img="/images/eye-closeup.jpg" alt="Close-up of a blue eye" kicker="Specialty contact lenses" h={<>Advanced care for <em>every eye.</em></>} p="Mr. Yashwanth Balaji leads corneal RGP, scleral and orthokeratology lens fittings, with vision therapy and orthoptics evaluation. Trial lenses are available in store." href="/services" cta="Explore specialty services" />

        {/* 6 · LENSES */}
        <section className="band--dark sec lenses" id="lenses" aria-labelledby="lenses-h">
          <div className="wrap">
            <div className="sec__head sec__head--center">
              <p className="kicker" data-reveal>The lenses</p>
              <h2 id="lenses-h" className="h2" data-reveal>Lenses for your <em>lifestyle.</em></h2>
              <p className="body-l" data-reveal>Advanced lens technologies to match your vision needs. Pick a tint to preview it.</p>
            </div>
            <LensPicker />
            <table className="spec spec--dark" aria-label="Lens types">
              <tbody>
                {LENS_TYPES.map(([t, d]) => <tr key={t}><th scope="row">{t}</th><td>{d}</td></tr>)}
              </tbody>
            </table>
          </div>
        </section>

        <Split img="/images/frames-rack.jpg" alt="Rows of eyeglass frames on a display wall" kicker="Frames" h={<>Frames for <em>every face.</em></>} p="Full-frame, half-frame, rimless, designer, kids' and sports eyewear, from brands including Ray-Ban, Oakley, Versace and Giorgio Armani." href="/brands" cta="See our brands" />

        {/* 7 · BRANDS */}
        <section className="band--light sec" aria-labelledby="brands-h">
          <div className="wrap">
            <div className="sec__head sec__head--row">
              <h2 id="brands-h" className="h2">Brands we <em>carry.</em></h2>
              <Link href="/brands" className="link">All brands ›</Link>
            </div>
            <ul className="brandtiles">
              {BRAND_GROUPS.map((g) => (
                <li key={g.title}><Link href="/brands"><strong>{g.title}</strong><span>{g.brands.slice(0, 3).join(", ")} and more ›</span></Link></li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8 · BRANCHES */}
        <section className="band--dark boutiques" id="boutiques" aria-labelledby="b-h">
          <div className="wrap boutiques__inner">
            <p className="kicker" data-reveal>Our branches</p>
            <h2 id="b-h" className="h2" data-reveal>Visit us <em>in Vellore.</em></h2>
            <p className="body-l" data-reveal>Walk-ins are always welcome for routine eye check-ups, frames and lenses.</p>
            <ul className="stores" data-reveal>
              {STORES.map((x) => <li key={x.name}><h3>{x.area}</h3><p>{x.address}</p><p>{HOURS}*</p></li>)}
            </ul>
            <p className="cart__meta" data-reveal>*{HOURS_NOTE}</p>
          </div>
        </section>

        {/* 9 · FAQ */}
        <div className="band--light"><section className="faq wrap" id="faq" aria-labelledby="faq-h">
          <div className="faq__intro">
            <p className="kicker" data-reveal>Good to know</p>
            <h2 id="faq-h" className="h2" data-reveal>Questions, <em>answered.</em></h2>
            <p className="body-l" data-reveal>Everything you need to know before you visit.</p>
          </div>
          <div className="faq__list" data-reveal>
            {FAQ.map(([q, a], i) => (
              <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </section></div>

        {/* 10 · CONTACT */}
        <div className="band--light"><section className="contact wrap" id="contact" aria-labelledby="c-h">
          <div className="contact__card">
            <div>
              <p className="kicker" data-reveal>Contact us</p>
              <h2 id="c-h" className="h2" data-reveal>One number <em>for everything.</em></h2>
              <p className="body-l" data-reveal>Call or WhatsApp for enquiries, appointments, orders, follow-ups, home delivery and courier, or any other question.</p>
              <p className="contact__mail" data-reveal><a href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a></p>
              {EMAIL && <p className="contact__mail" data-reveal><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>}
            </div>
            <ContactForm />
          </div>
        </section></div>
      </main>

      <Footer />
    </>
  );
}
