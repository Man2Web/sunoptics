"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import SearchOverlay from "./SearchOverlay";
import { CATEGORIES, SHAPES } from "@/lib/products";
import { waLink, PHONE } from "@/lib/site";

type Col = { title: string; links: [string, string][] };
type Item = { key: string; label: string; href: string; cols?: Col[] };

const GENDER: [string, string][] = [["Women", "/shop/for/women"], ["Men", "/shop/for/men"], ["Kids", "/shop/kids"]];
const SHAPE_LINKS: [string, string][] = SHAPES.map((s) => [s.label, `/shop/shape/${s.slug}`]);

const ITEMS: Item[] = [
  { key: "shop", label: "Shop", href: "/shop", cols: [
    { title: "By gender", links: GENDER },
    { title: "By type", links: CATEGORIES.map((c): [string, string] => [c.title, `/shop/${c.slug}`]) },
    { title: "By style", links: SHAPE_LINKS },
  ] },
  { key: "brands", label: "Brands", href: "/brands" },
  { key: "services", label: "Services", href: "/services" },
  { key: "appt", label: "Appointments", href: "/appointments" },
  { key: "delivery", label: "Home delivery", href: "/delivery" },
  { key: "branches", label: "Branches", href: "/boutiques" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<string | null>(null);
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const on = () => setScrolled(scrollY > 40);
    on(); addEventListener("scroll", on, { passive: true });
    return () => removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setMega(null);
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, []);

  const show = (k: string) => { closeTimer.current && clearTimeout(closeTimer.current); setMega(k); };
  const hide = () => { closeTimer.current = setTimeout(() => setMega(null), 120); };
  const closeSearch = useCallback(() => setSearch(false), []);
  const nav = () => { setOpen(false); setMega(null); };

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}`} id="nav" onMouseLeave={hide}>
        <div className="nav__bar">
          <p>Call or WhatsApp {PHONE} · Free home delivery in Vellore · Open 10 AM to 9 PM</p>
          <div>
            <Link href="/about">About</Link>
            <Link href="/boutiques">Our branches</Link>
          </div>
        </div>
        <div className="nav__main">
          <Link className="nav__logo" href="/" aria-label="Sun Optics home" onClick={nav}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="" width="58" height="54" />
            <span>SUN<em>OPTICS</em></span>
          </Link>

          <nav className={`nav__links${open ? " open" : ""}`} id="navLinks" aria-label="Primary">
            <ul>
              {ITEMS.map((it) => (
                <li key={it.key} className={mega === it.key ? "is-open" : ""} onMouseEnter={() => (it.cols ? show(it.key) : setMega(null))}>
                  <Link href={it.href} onClick={nav} aria-haspopup={it.cols ? "true" : undefined} aria-expanded={it.cols ? mega === it.key : undefined} onFocus={() => it.cols && show(it.key)}>{it.label}</Link>
                  {it.cols && (
                    <div className="mega" onMouseEnter={() => show(it.key)}>
                      <div className="mega__grid">
                        {it.cols.map((c) => (
                          <div key={c.title}>
                            <h3>{c.title}</h3>
                            <ul>{c.links.map(([l, h]) => <li key={l + h}><Link href={h} onClick={nav}>{l}</Link></li>)}</ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="nav__util">
              <Link href="/about" onClick={nav}>About</Link>
              <Link href="/boutiques" onClick={nav}>Our branches</Link>
            </div>
          </nav>

          <div className="nav__actions">
            <button className="nav__icon" aria-label="Search" onClick={() => setSearch(true)}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
            </button>
            <a className="nav__wa" href={waLink("Hello Sun Optics, I'd like to enquire.")} target="_blank" rel="noopener noreferrer">Enquire</a>
            <button className="nav__toggle" aria-label="Menu" aria-expanded={open} aria-controls="navLinks" onClick={() => setOpen(!open)}><i /><i /></button>
          </div>
        </div>
      </header>
      {mega && <div className="mega-scrim" onMouseEnter={hide} aria-hidden="true" />}
      <SearchOverlay open={search} onClose={closeSearch} />
    </>
  );
}
