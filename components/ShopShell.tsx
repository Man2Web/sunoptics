import Link from "next/link";
import Footer from "./Footer";

export type Crumb = { name: string; href?: string };

export default function ShopShell({ crumbs, title, intro, children }: { crumbs: Crumb[]; title?: string; intro?: string; children: React.ReactNode }) {
  return (
    <>
      <main id="main" className="shop band--light">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><Link href="/">Home</Link></li>
              {crumbs.map((c) => <li key={c.name}>{c.href ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}</li>)}
            </ol>
          </nav>
          {title && <header className="shop__head"><h1 className="h2">{title}</h1>{intro && <p className="body-l">{intro}</p>}</header>}
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
