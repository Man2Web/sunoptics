import Link from "next/link";
import { CATEGORIES } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="footer band--light band--grey">
      <div className="wrap footer__grid footer__grid--4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="footer__mark" src="/logo-black.png" alt="Sun Optics: Eye care, we care" width="96" height="89" />
          <div className="footer__logo">SUN<em>OPTICS</em></div>
          <p>Luxury sunglasses and optical frames, handcrafted for India.</p>
        </div>
        <nav aria-label="Shop"><h4>Shop</h4>{CATEGORIES.map((c) => <Link key={c.slug} href={`/shop/${c.slug}`}>{c.title}</Link>)}</nav>
        <nav aria-label="Discover"><h4>Discover</h4><Link href="/collectors-edition">Collector&apos;s Edition</Link><Link href="/sale">Sale</Link><Link href="/brands">Brands</Link><Link href="/about">Our story</Link></nav>
        <nav aria-label="Company"><h4>Company</h4><Link href="/boutiques">Boutiques</Link><Link href="/#contact">Contact</Link><a href="/llms.txt">llms.txt</a><a href="/sitemap.xml">Sitemap</a></nav>
      </div>
      <div className="wrap footer__base"><span>© {new Date().getFullYear()} Sun Optics. All rights reserved.</span><span>Prices in INR, inclusive of GST.</span></div>
    </footer>
  );
}
