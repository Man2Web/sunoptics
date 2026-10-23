"use client";
import Link from "next/link";
import { useCallback, useState } from "react";
import SearchOverlay from "./SearchOverlay";
import { SHAPES } from "@/lib/products";
import { PHONE, waLink } from "@/lib/site";

const tel = `tel:${PHONE.replace(/\s/g, "")}`;
const SHAPE_LINKS: [string, string][] = SHAPES.map((s) => [s.label, `/shop/shape/${s.slug}`]);
const WHO: [string, string][] = [["Men", "/shop/for/men"], ["Women", "/shop/for/women"], ["Kids", "/shop/kids"]];

type Dd = { title: string; links: [string, string][] }[];
const NAV: { label: string; href: string; dd?: Dd }[] = [
  { label: "Eyeglasses", href: "/shop/frames", dd: [
    { title: "Shop for", links: [["All eyeglasses", "/shop/frames"], ...WHO] },
    { title: "Frame shape", links: SHAPE_LINKS },
    { title: "Also see", links: [["Reading glasses", "/shop/reading-glasses"], ["Accessories", "/shop/accessories"], ["Brands", "/brands"]] },
  ] },
  { label: "Sunglasses", href: "/shop/sunglasses", dd: [
    { title: "Shop for", links: [["All sunglasses", "/shop/sunglasses"], ...WHO] },
    { title: "Frame shape", links: SHAPE_LINKS },
  ] },
  { label: "Contact lenses", href: "/shop/contact-lenses" },
  { label: "Kids", href: "/shop/kids" },
  { label: "Services", href: "/services" },
  { label: "Brands", href: "/brands" },
  { label: "Appointments", href: "/appointments" },
  { label: "Home delivery", href: "/delivery" },
  { label: "Branches", href: "/boutiques" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const closeSearch = useCallback(() => setSearch(false), []);
  const close = () => setOpen(false);

  return (
    <>
      <header className="hd">
        <div className="hd__promo">
          <b>₹200 eye check-up, free with frames &amp; lenses</b> · Free home delivery in Vellore · <a href={tel}>Call {PHONE}</a>
        </div>
        <div className="wrap hd__main">
          <Link className="hd__logo" href="/" aria-label="Sun Optics home" onClick={close}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-black.png" alt="" width="58" height="54" />
            <span>SUN<em>OPTICS</em></span>
          </Link>
          <button className="hd__search" onClick={() => setSearch(true)} aria-label="Search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
            Search frames, sunglasses, lenses…
          </button>
          <div className="hd__acts">
            <a className="hd__phone" href={tel} aria-label={`Call ${PHONE}`}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
              <span>{PHONE}</span>
            </a>
            <Link className="btn btn--amber btn--sm" href="/appointments">Book eye test</Link>
            <button className="hd__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /></button>
          </div>
        </div>
        <nav className="hd__nav" aria-label="Primary">
          <div className="wrap">
            <ul>
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link href={n.href}>{n.label}</Link>
                  {n.dd && (
                    <div className="dd" style={{ gridTemplateColumns: `repeat(${n.dd.length},1fr)` }}>
                      {n.dd.map((c) => (
                        <div key={c.title}>
                          <h4>{c.title}</h4>
                          <ul>{c.links.map(([l, h]) => <li key={l + h}><Link href={h}>{l}</Link></li>)}</ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className={`hd__drawer${open ? " open" : ""}`}>
          {NAV.map((n) => <Link key={n.label} href={n.href} onClick={close}>{n.label}</Link>)}
          <h4>Shop by shape</h4>
          {SHAPE_LINKS.map(([l, h]) => <Link key={h} href={h} onClick={close}>{l}</Link>)}
          <h4>Talk to us</h4>
          <a href={tel}>Call {PHONE}</a>
          <a href={waLink("Hello Sun Optics, I'd like to enquire.")} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
        </div>
      </header>
      <SearchOverlay open={search} onClose={closeSearch} />
    </>
  );
}
