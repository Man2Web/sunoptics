import Link from "next/link";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ProductCard from "@/components/ProductCard";
import { ShapeArt } from "@/components/ProductArt";
import BrandGrid from "@/components/BrandGrid";
import Rail from "@/components/Rail";
import HeroCarousel, { type Slide } from "@/components/HeroCarousel";
import Tabs from "@/components/Tabs";
import { FAQ, EMAIL, PHONE, STORES, HOURS, HOURS_NOTE, LENS_TYPES, jsonLd } from "@/lib/site";
import { LANDINGS } from "@/lib/landings";
import { PRODUCTS, SHAPES } from "@/lib/products";

const SLIDES: Slide[] = [
  { tag: "Since December 1999", tone: "sun", img: "/images/frames-rack.jpg", alt: "Rows of eyeglass frames on a display wall",
    title: <>Vellore&apos;s trusted optical shop since 1999.</>,
    text: "Eye tests by qualified optometrists, spectacles, sunglasses and contact lenses from brands you know, plus specialty lens fitting. Two branches in Vellore.",
    cta: ["Book an eye test", "/appointments"], cta2: ["Explore frames", "/shop/frames"], trust: ["Walk-ins welcome", "Free home delivery in Vellore"] },
  { tag: "Eye check-up", tone: "sky", img: "/images/exam-machine.jpg", alt: "Patient having an eye check-up",
    title: <>₹200 eye check-up. Free with purchase.</>,
    text: "No hospital visit needed. Our optometrists find the cause of your discomfort and recommend the right solution.",
    cta: ["Book now", "/appointments"], cta2: ["How it works", "/services"] },
  { tag: "Specialty lenses", tone: "mint", img: "/images/eye-closeup.jpg", alt: "Close-up of an eye",
    title: <>Scleral, RGP and Ortho-K lenses.</>,
    text: "Advanced contact lens fitting and vision therapy led by Mr. Yashwanth Balaji, B.Optom.",
    cta: ["Our specialty services", "/services"], cta2: ["Book a fitting", "/appointments"] },
  { tag: "Home delivery", tone: "rose", img: "/images/lens-glasses.jpg", alt: "Eyeglasses on a display stand",
    title: <>Glasses delivered to your door.</>,
    text: "Free home delivery within Vellore and surrounding areas, with courier service for outer regions.",
    cta: ["Arrange delivery", "/delivery"], cta2: ["Call us", `tel:${PHONE.replace(/\s/g, "")}`] },
];

const Ic = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const IcEye = () => <Ic><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></Ic>;
const IcTruck = () => <Ic><path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17" cy="17.5" r="1.8" /></Ic>;
const IcPin = () => <Ic><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></Ic>;
const LENS_ICONS: React.ReactNode[] = [
  <Ic key="p"><path d="M4 7h16M4 12h12M4 17h8" /></Ic>,
  <Ic key="b"><rect x="3" y="5" width="18" height="12" rx="2" /><path d="M8 21h8M12 17v4" /></Ic>,
  <Ic key="ph"><circle cx="12" cy="12" r="4" /><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" /></Ic>,
  <Ic key="a"><path d="M3 15l2-6h14l2 6M3 15h18v3H3zM7 18v2M17 18v2" /></Ic>,
  <Ic key="m"><path d="M12 3l8 3v5c0 5-3.5 8.500-8 10-4.500-1.500-8-5-8-10V6z" /></Ic>,
];

const CATS: { label: string; href: string; img: string }[] = [
  { label: "Eyeglasses", href: "/shop/frames", img: "/photos/frame-black-a.jpg" },
  { label: "Sunglasses", href: "/shop/sunglasses", img: "/photos/sun-aviator-gold.jpg" },
  { label: "Contact lenses", href: "/shop/contact-lenses", img: "/images/eye-closeup.jpg" },
  { label: "Kids' eyewear", href: "/shop/kids", img: "/photos/frame-black-b.jpg" },
  { label: "Reading glasses", href: "/shop/reading-glasses", img: "/photos/reading-book.jpg" },
  { label: "Eye check-up", href: "/appointments", img: "/images/exam-machine.jpg" },
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
        <section className="hero" aria-label="Welcome">
          <div className="wrap">
            <HeroCarousel slides={SLIDES} />
            <nav className="catrow" aria-label="Shop by category">
              {CATS.map((c) => (
                <Link key={c.label} href={c.href}><span className="catrow__ico"><img src={c.img} alt="" loading="lazy" width="240" height="240" /></span>{c.label}</Link>
              ))}
            </nav>
          </div>
        </section>

        <section className="wrap trustbar" aria-label="Why customers choose us" data-reveal>
          <div><b>Since 1999</b><span>Serving Vellore</span></div>
          <div><b>Qualified optometrists</b><span>Eye tests in store</span></div>
          <div><b>Top global brands</b><span>Eyewear, lenses, contact lenses</span></div>
          <div><b>Free home delivery</b><span>Vellore and surrounding areas</span></div>
        </section>

        <section className="wrap trio" aria-label="Offers">
          <Link className="promo" href="/appointments"><span className="promo__ico"><IcEye /></span><div><b>₹200 eye check-up</b><span>Free when you buy frames and lenses</span></div></Link>
          <Link className="promo" href="/delivery"><span className="promo__ico"><IcTruck /></span><div><b>Free home delivery</b><span>Vellore and surrounding areas</span></div></Link>
          <Link className="promo" href="/boutiques"><span className="promo__ico"><IcPin /></span><div><b>Two branches in Vellore</b><span>Open 10 AM to 9 PM, all week</span></div></Link>
        </section>

        <section className="sec" aria-labelledby="tiles-h">
          <div className="wrap">
            <div className="sec__head"><h2 id="tiles-h" className="h2">What are you looking for?</h2></div>
            <div className="tiles">
              <Link className="tile" href="/shop/frames"><img src="/images/frames-rack.jpg" alt="" loading="lazy" /><div className="tile__t"><b>Eyeglasses</b><span>Full-frame, half-frame, rimless</span><i>Shop now</i></div></Link>
              <Link className="tile" href="/appointments"><img src="/images/exam-machine.jpg" alt="" loading="lazy" /><div className="tile__t"><b>Eye check-up</b><span>By qualified optometrists</span><i>Book now</i></div></Link>
              <Link className="tile" href="/services"><img src="/images/eye-closeup.jpg" alt="" loading="lazy" /><div className="tile__t"><b>Contact lenses</b><span>Soft, toric, scleral, Ortho-K</span><i>Know more</i></div></Link>
              <Link className="tile" href="/services"><img src="/images/lens-glasses.jpg" alt="" loading="lazy" /><div className="tile__t"><b>Lenses</b><span>Progressive, blue-cut, photochromic</span><i>Explore</i></div></Link>
            </div>
          </div>
        </section>

        <section className="sec sec--tint" aria-labelledby="feat-h">
          <div className="wrap">
            <div className="sec__head sec__head--row"><h2 id="feat-h" className="h2">Featured picks</h2><Link href="/shop" className="link">View all</Link></div>
            <Tabs panels={[
              { id: "best", label: "Best sellers", node: rail(best, "Best sellers") },
              { id: "new", label: "New arrivals", node: rail(fresh, "New arrivals") },
            ]} />
          </div>
        </section>

        <section className="sec" aria-labelledby="shape-h">
          <div className="wrap">
            <div className="sec__head"><h2 id="shape-h" className="h2">Shop by frame shape</h2></div>
            <ul className="shapes">
              {SHAPES.map((s) => <li key={s.slug}><Link href={`/shop/shape/${s.slug}`}><ShapeArt shape={s.slug} /><span>{s.label}</span></Link></li>)}
            </ul>
          </div>
        </section>

        <section className="sec" aria-labelledby="how-h">
          <div className="wrap">
            <div className="sec__head sec__head--center" data-reveal><p className="kicker">Simple and unhurried</p><h2 id="how-h" className="h2">How it works</h2></div>
            <ol className="steps">
              {[["Book or walk in", "Call, WhatsApp or simply visit either branch between 10 AM and 9 PM."], ["Get your eyes checked", "A qualified optometrist finds the cause of your discomfort. Free when you buy frames and lenses."], ["Choose your eyewear", "Pick frames and lenses from brands like Ray-Ban, Zeiss, Hoya and Essilor, with expert advice."], ["Collect or get it delivered", "Pick up in store, or enjoy free home delivery in Vellore and surrounding areas."]].map(([h, p], i) => (
                <li key={h} data-reveal><span className="steps__n">{i + 1}</span><b>{h}</b><p>{p}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="sec sec--tint">
          <div className="wrap split">
            <img className="split__img" src="/images/exam-machine.jpg" alt="Patient having an eye check-up" loading="lazy" width="1800" height="1200" />
            <div className="split__text">
              <p className="kicker">Eye check-up</p>
              <h2 className="h2">See an optometrist, not a hospital.</h2>
              <p className="body-l">Routine eye check-ups happen right here in the store. We find the cause of your visual discomfort and recommend the right solution. If a medical examination is needed, we refer you to a hospital ourselves.</p>
              <ul className="ticks"><li>₹200, free when you buy frames and lenses</li><li>Walk-ins always welcome</li><li>Hospital referral only when truly required</li></ul>
              <Link className="btn" href="/appointments">Book an appointment</Link>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="lens-h">
          <div className="wrap">
            <div className="sec__head sec__head--center"><p className="kicker">Lens technologies</p><h2 id="lens-h" className="h2">Lenses to match your lifestyle</h2></div>
            <div className="lensgrid">
              {LENS_TYPES.map(([t, d], i) => <div className="lensc" key={t}><i aria-hidden="true">{LENS_ICONS[i]}</i><b>{t}</b><span>{d}</span></div>)}
            </div>
          </div>
        </section>

        <section className="sec sec--tint">
          <div className="wrap split split--flip">
            <img className="split__img" src="/images/eye-closeup.jpg" alt="Close-up of an eye" loading="lazy" width="1800" height="1200" />
            <div className="split__text">
              <p className="kicker">Specialty contact lenses</p>
              <h2 className="h2">Advanced care for every eye.</h2>
              <p className="body-l">Mr. Yashwanth Balaji leads corneal RGP, scleral and orthokeratology lens fittings, plus vision therapy and orthoptics evaluation. Trial lenses are available in store; the final lens is custom-made after fitting.</p>
              <ul className="ticks"><li>Corneal RGP for keratoconus and high powers</li><li>Scleral lenses for irregular corneas and dry eyes</li><li>Ortho-K overnight lenses to help control myopia</li></ul>
              <Link className="btn" href="/services">Explore services</Link>
            </div>
          </div>
        </section>

        <section className="sec" aria-labelledby="brands-h">
          <div className="wrap">
            <div className="sec__head sec__head--row"><h2 id="brands-h" className="h2">Brands we carry</h2><Link href="/brands" className="link">All brands</Link></div>
            <BrandGrid compact />
          </div>
        </section>

        <section className="sec sec--tint" aria-labelledby="local-h">
          <div className="wrap">
            <div className="sec__head" data-reveal><p className="kicker">Eye care in Vellore</p><h2 id="local-h" className="h2">Everything for your eyes, in one place</h2></div>
            <ul className="locallinks">
              {LANDINGS.map((l) => <li key={l.slug} data-reveal><Link href={`/vellore/${l.slug}`}><b>{l.nav}</b><span>{l.intro.split(". ")[0]}.</span></Link></li>)}
            </ul>
          </div>
        </section>

        <section className="sec sec--navy" aria-label="Sun Optics in numbers">
          <div className="wrap stats">
            <div className="stat"><b>1999</b><span>Serving Vellore since</span></div>
            <div className="stat"><b>2</b><span>Branches in Vellore</span></div>
            <div className="stat"><b>30+</b><span>Years of founder experience</span></div>
            <div className="stat"><b>Free</b><span>Home delivery in Vellore</span></div>
          </div>
        </section>

        <section className="sec" id="boutiques" aria-labelledby="b-h">
          <div className="wrap">
            <div className="sec__head sec__head--row"><div><p className="kicker">Visit us</p><h2 id="b-h" className="h2">Our branches in Vellore</h2></div><Link href="/boutiques" className="link">Details</Link></div>
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

        <section className="sec sec--tint" id="faq" aria-labelledby="faq-h">
          <div className="wrap faq">
            <div><p className="kicker">Good to know</p><h2 id="faq-h" className="h2">Frequently asked questions</h2><p className="body-l">Everything you need to know before you visit.</p></div>
            <div className="faq__list">{FAQ.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div>
          </div>
        </section>

        <section className="sec" id="contact" aria-labelledby="c-h">
          <div className="wrap cband">
            <div>
              <p className="kicker">Contact us</p>
              <h2 id="c-h" className="h2">One number for everything</h2>
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
