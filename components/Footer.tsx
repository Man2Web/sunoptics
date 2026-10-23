import Link from "next/link";
import { CATEGORIES } from "@/lib/products";
import { PHONE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer band--light band--grey">
      <div className="wrap footer__grid footer__grid--4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="footer__mark" src="/logo-black.png" alt="Sun Optics: Eye care, we care" width="96" height="89" />
          <div className="footer__logo">SUN<em>OPTICS</em></div>
          <p>Caring for the eyes of Vellore since December 1999. Eye check-ups, frames, lenses and specialty contact lens fitting.</p>
        </div>
        <nav aria-label="Shop"><h4>Shop</h4>{CATEGORIES.map((c) => <Link key={c.slug} href={`/shop/${c.slug}`}>{c.title}</Link>)}</nav>
        <nav aria-label="Discover"><h4>Discover</h4><Link href="/services">Services</Link><Link href="/appointments">Appointments</Link><Link href="/delivery">Home delivery</Link><Link href="/brands">Brands</Link><Link href="/about">About</Link></nav>
        <nav aria-label="Company"><h4>Company</h4><Link href="/boutiques">Branches</Link><Link href="/#contact">Contact</Link><a href="/llms.txt">llms.txt</a><a href="/sitemap.xml">Sitemap</a></nav>
      </div>
      <div className="wrap footer__base"><span>© {new Date().getFullYear()} Sun Optics. All rights reserved.</span><span>Call or WhatsApp {PHONE}</span></div>
    </footer>
  );
}
