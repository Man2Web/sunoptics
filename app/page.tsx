import Link from "next/link";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ProductCard from "@/components/ProductCard";
import { ShapeArt } from "@/components/ProductArt";
import Rail from "@/components/Rail";
import HeroCarousel, { type Slide } from "@/components/HeroCarousel";
import Tabs from "@/components/Tabs";
import { FAQ, EMAIL, PHONE, STORES, HOURS, HOURS_NOTE, BRAND_GROUPS, LENS_TYPES, jsonLd } from "@/lib/site";
import { PRODUCTS, SHAPES } from "@/lib/products";

const SLIDES: Slide[] = [
  { tag: "Since December 1999", tone: "sun", img: "/images/frames-rack.jpg", alt: "Rows of eyeglass frames on a display wall",
    title: <>Caring for Vellore&apos;s eyes, <em>since 1999.</em></>,
    text: "Eye check-ups by qualified optometrists, trusted eyewear and lens brands, and specialty contact lens fitting.",
    cta: ["Book an eye test", "/appointments"], cta2: ["Explore frames", "/shop/frames"],
    chips: [["1999", "Serving Vellore"], ["2", "Branches"]], trust: ["Walk-ins welcome", "Free home delivery in Vellore"] },
  { tag: "Eye check-up", tone: "sky", img: "/images/exam-machine.jpg", alt: "Patient having an eye check-up",
    title: <>₹200 eye check-up. <em>Free with purchase.</em></>,
    text: "No hospital visit needed. Our optometrists find the cause of your discomfort and recommend the right solution.",
    cta: ["Book now", "/appointments"], cta2: ["How it works", "/services"] },
  { tag: "Specialty lenses", tone: "mint", img: "/images/eye-closeup.jpg", alt: "Close-up of an eye",
    title: <>Scleral, RGP &amp; <em>Ortho-K lenses.</em></>,
    text: "Advanced contact lens fitting and vision therapy led by Mr. Yashwanth Balaji, B.Optom.",
    cta: ["Our specialty services", "/services"], cta2: ["Book a fitting", "/appointments"] },
  { tag: "Home delivery", tone: "rose", img: "/images/lens-glasses.jpg", alt: "Eyeglasses on a display stand",
    title: <>Glasses delivered <em>to your door.</em></>,
    text: "Free home delivery within Vellore and surrounding areas, with courier service for outer regions.",
    cta: ["Arrange delivery", "/delivery"], cta2: ["Call us", `tel:${PHONE.replace(/\s/g, "")}`] },
];

const LENS_ICONS = ["👓", "🖥️", "🌤️", "🚗", "🧒"];

const Lens = () => <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="3" /><circle cx="32" cy="32" r="10" fill="currentColor" fillOpacity=".25" stroke="currentColor" strokeWidth="2" /></svg>;
const Heart = () => <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 52S10 38 10 24a11 11 0 0 1 22-3 11 11 0 0 1 22 3c0 14-22 28-22 28z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /></svg>;

const CATS: { label: string; href: string; icon: React.ReactNode }[] = [
  { label: "Eyeglasses", href: "/shop/frames", icon: <ShapeArt shape="round" /> },
  { label: "Sunglasses", href: "/shop/sunglasses", icon: <ShapeArt shape="aviator" /> },
  { label: "Contact lenses", href: "/shop/contact-lenses", icon: <Lens /> },
  { label: "Kids' eyewear", href: "/shop/kids", icon: <ShapeArt shape="square" /> },
  { label: "Reading glasses", href: "/shop/reading-glasses", icon: <ShapeArt shape="rectangular" /> },
  { label: "Eye care services", href: "/services", icon: <Heart /> },
];

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

      <main id="main">
        {/* HERO */}
        <section className="hero" aria-label="Welcome">
          <div className="wrap">
            <HeroCarousel slides={SLIDES} />
            <nav className="catrow" aria-label="Shop by category">
              {CATS.map((c) => (
                <Link key={c.label} href={c.href}><span className="catrow__ico">{c.icon}</span>{c.label}</Link>
              ))}
            </nav>
          </div>
        </section>

        {/* PROMOS */}
        <section className="wrap trio" aria-label="Offers">
          <Link className="promo tone--sun" href="/appointments"><span className="promo__ico">🩺</span><div><b>₹200 eye check-up</b><span>Free when you buy frames and lenses</span></div></Link>
          <Link className="promo tone--mint" href="/delivery"><span className="promo__ico">🚚</span><div><b>Free home delivery</b><span>Vellore and surrounding areas</span></div></Link>
          <Link className="promo tone--sky" href="/boutiques"><span className="promo__ico">📍</span><div><b>Two branches in Vellore</b><span>Open 10 AM to 9 PM, all week</span></div></Link>
        </section>

        {/* BIG TILES */}
        <section className="sec" aria-labelledby="tiles-h">
          <div className="wrap">
            <div className="sec__head"><p className="kicker">Everything for your eyes</p><h2 id="tiles-h" className="h2">What are you <em>looking for?</em></h2></div>
            <div className="tiles">
              <Link className="tile" href="/shop/frames"><img src="/images/frames-rack.jpg" alt="" loading="lazy" /><div className="tile__t"><b>Eyeglasses</b><span>Full-frame, half-frame, rimless</span><br /><i>Shop now</i></div></Link>
              <Link className="tile" href="/appointments"><img src="/images/exam-machine.jpg" alt="" loading="lazy" /><div className="tile__t"><b>Eye check-up</b><span>By qualified optometrists</span><br /><i>Book now</i></div></Link>
              <Link className="tile" href="/services"><img src="/images/eye-closeup.jpg" alt="" loading="lazy" /><div className="tile__t"><b>Contact lenses</b><span>Soft, toric, scleral, Ortho-K</span><br /><i>Know more</i></div></Link>
              <Link className="tile" href="/services"><img src="/images/lens-glasses.jpg" alt="" loading="lazy" /><div className="tile__t"><b>Lenses</b><span>Progressive, blue-cut, photochromic</span><br /><i>Explore</i></div></Link>
            </div>
          </div>
        </section>

        {/* FEATURED (placeholder catalogue) */}
        <section className="sec sec--tint" aria-labelledby="feat-h">
          <div className="wrap">
            <div className="sec__head sec__head--row"><h2 id="feat-h" className="h2">Featured <em>picks.</em></h2><Link href="/shop" className="link">View all ›</Link></div>
            <Tabs panels={[
              { id: "best", label: "Best sellers", node: rail(best, "Best sellers") },
              { id: "new", label: "New arrivals", node: rail(fresh, "New arrivals") },
            ]} />
          </div>
        </section>

        {/* SHAPES */}
        <section className="sec" aria-labelledby="shape-h">
          <div className="wrap">
            <div className="sec__head"><h2 id="shape-h" className="h2">Shop by <em>frame shape.</em></h2></div>
            <ul className="shapes">
              {SHAPES.map((s) => <li key={s.slug}><Link href={`/shop/shape/${s.slug}`}><ShapeArt shape={s.slug} /><span>{s.label}</span></Link></li>)}
            </ul>
          </div>
        </section>

        {/* CHECK-UP */}
        <section className="sec sec--tint">
          <div className="wrap split">
            <img className="split__img" src="/images/exam-machine.jpg" alt="Patient having an eye check-up" loading="lazy" width="1800" height="1200" />
            <div className="split__text">
              <p className="kicker">Eye check-up</p>
              <h2 className="h2">See an optometrist, <em>not a hospital.</em></h2>
              <p className="body-l">Routine eye check-ups happen right here in the store. We find the cause of your visual discomfort and recommend the right solution. If a medical examination is needed, we refer you to a hospital ourselves.</p>
              <ul className="ticks"><li>₹200, free when you buy frames and lenses</li><li>Walk-ins always welcome</li><li>Hospital referral only when truly required</li></ul>
              <Link className="btn btn--amber" href="/appointments">Book an appointment</Link>
            </div>
          </div>
        </section>

        {/* LENS TYPES */}
        <section className="sec" aria-labelledby="lens-h">
          <div className="wrap">
            <div className="sec__head sec__head--center"><p className="kicker">Lens technologies</p><h2 id="lens-h" className="h2">Lenses to match your <em>lifestyle.</em></h2></div>
            <div className="lensgrid">
              {LENS_TYPES.map(([t, d], i) => <div className="lensc" key={t}><i aria-hidden="true">{LENS_ICONS[i]}</i><b>{t}</b><span>{d}</span></div>)}
            </div>
          </div>
        </section>

        {/* SPECIALTY */}
        <section className="sec sec--tint">
          <div className="wrap split split--flip">
            <img className="split__img" src="/images/eye-closeup.jpg" alt="Close-up of an eye" loading="lazy" width="1800" height="1200" />
            <div className="split__text">
              <p className="kicker">Specialty contact lenses</p>
              <h2 className="h2">Advanced care for <em>every eye.</em></h2>
              <p className="body-l">Mr. Yashwanth Balaji leads corneal RGP, scleral and orthokeratology lens fittings, plus vision therapy and orthoptics evaluation. Trial lenses are available in store; the final lens is custom-made after fitting.</p>
              <ul className="ticks"><li>Corneal RGP for keratoconus and high powers</li><li>Scleral lenses for irregular corneas and dry eyes</li><li>Ortho-K overnight lenses to help control myopia</li></ul>
              <Link className="btn" href="/services">Explore services</Link>
            </div>
          </div>
        </section>

        {/* BRANDS */}
        <section className="sec" aria-labelledby="brands-h">
          <div className="wrap">
            <div className="sec__head sec__head--row"><h2 id="brands-h" className="h2">Brands we <em>carry.</em></h2><Link href="/brands" className="link">All brands ›</Link></div>
            <div className="brandcols">
              {BRAND_GROUPS.map((g) => (
                <div key={g.title}><h3 className="h3">{g.title}</h3><ul className="chips">{g.brands.slice(0, g.title === "Eyewear brands" ? 17 : 6).map((b) => <li key={b}>{b}</li>)}</ul></div>
              ))}
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="sec sec--navy" aria-label="Sun Optics in numbers">
          <div className="wrap stats">
            <div className="stat"><b>1999</b><span>Serving Vellore since</span></div>
            <div className="stat"><b>2</b><span>Branches in Vellore</span></div>
            <div className="stat"><b>30+</b><span>Years of founder experience</span></div>
            <div className="stat"><b>Free</b><span>Home delivery in Vellore</span></div>
          </div>
        </section>

        {/* BRANCHES */}
        <section className="sec" id="boutiques" aria-labelledby="b-h">
          <div className="wrap">
            <div className="sec__head sec__head--row"><div><p className="kicker">Visit us</p><h2 id="b-h" className="h2">Our branches in <em>Vellore.</em></h2></div><Link href="/boutiques" className="link">Details ›</Link></div>
            <div className="stores">
              {STORES.map((s) => (
                <div className="store" key={s.name}>
                  {s.since && <span className="tag">Since {s.since}</span>}
                  <h3>{s.name}</h3>
                  <p>{s.address}</p>
                  <p><b>{HOURS}*</b></p>
                  <p><a className="link" href={`tel:${s.phone.replace(/\s/g, "")}`}>{s.phone}</a>{s.mapUrl && <> · <a className="link" href={s.mapUrl} target="_blank" rel="noopener noreferrer">Directions</a></>}</p>
                </div>
              ))}
            </div>
            <p className="cart__meta" style={{ marginTop: ".8rem" }}>*{HOURS_NOTE}</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="sec sec--tint" id="faq" aria-labelledby="faq-h">
          <div className="wrap faq">
            <div><p className="kicker">Good to know</p><h2 id="faq-h" className="h2">Questions, <em>answered.</em></h2><p className="body-l">Everything you need to know before you visit.</p></div>
            <div className="faq__list">{FAQ.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="sec" id="contact" aria-labelledby="c-h">
          <div className="wrap cband">
            <div>
              <p className="kicker">Contact us</p>
              <h2 id="c-h" className="h2">One number <em>for everything.</em></h2>
              <p className="body-l">Call or WhatsApp for enquiries, appointments, orders and order status, follow-ups, home delivery and courier, or any other question.</p>
              <a className="cband__tel" href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
              {EMAIL && <a className="cband__mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>}
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
