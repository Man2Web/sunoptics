"use client";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { FRAME } from "./ProductArt";

type Slide = { tag: string; title: string; text: string; href: string; cta: string; tone: string; shape: string; word: string };

function FrameArt({ shape }: { shape: string }) {
  return (
    <svg viewBox="0 0 200 80" aria-hidden="true" className="frameart">
      <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" dangerouslySetInnerHTML={{ __html: FRAME[shape] }} />
    </svg>
  );
}

/** Cinematic full-width hero. Slide 0 is `intro`; the rest come from `slides`. Pointer parallax + timed progress bars. */
export default function HeroCarousel({ intro, slides }: { intro: React.ReactNode; slides: Slide[] }) {
  const total = slides.length + 1;
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const go = useCallback((n: number) => setI(((n % total) + total) % total), [total]);
  const reduced = typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.PointerEvent) => {
    if (reduced || e.pointerType === "touch") return;
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect(); const x = ((e.clientX - r.left) / r.width - 0.5) * 2; const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => { el.style.setProperty("--mx", x.toFixed(3)); el.style.setProperty("--my", y.toFixed(3)); });
  };
  const bg = <div className="hslide__bg" aria-hidden="true"><i /><i /><i /></div>;

  return (
    <div className="hcar" ref={ref} role="region" aria-roledescription="carousel" aria-label="Featured" onPointerMove={onMove}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(i + 1); if (e.key === "ArrowLeft") go(i - 1); }}>
      <div className={`hslide hslide--intro promo--ink${i === 0 ? " is-on" : ""}`} aria-hidden={i !== 0} role="group" aria-roledescription="slide" aria-label={`1 of ${total}`}>
        {bg}<span className="hslide__word" aria-hidden="true">LIGHT</span>
        {intro}
      </div>
      {slides.map((s, n) => (
        <div key={s.title} className={`hslide promo--${s.tone}${i === n + 1 ? " is-on" : ""}`} aria-hidden={i !== n + 1} role="group" aria-roledescription="slide" aria-label={`${n + 2} of ${total}`}>
          {bg}<span className="hslide__word" aria-hidden="true">{s.word}</span>
          <div className="wrap hslide__inner">
            <div className="hslide__text">
              <p className="promo__tag">{s.tag}</p>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <Link href={s.href} className="btn hslide__btn" tabIndex={i === n + 1 ? 0 : -1}>{s.cta}</Link>
            </div>
            <div className="hslide__art"><FrameArt shape={s.shape} /></div>
          </div>
        </div>
      ))}

      <button className="hcar__arrow hcar__arrow--l" aria-label="Previous slide" onClick={() => go(i - 1)}>‹</button>
      <button className="hcar__arrow hcar__arrow--r" aria-label="Next slide" onClick={() => go(i + 1)}>›</button>
      <div className="hcar__bars" role="tablist" aria-label="Choose slide">
        {Array.from({ length: total }, (_, n) => (
          <button key={n} role="tab" aria-selected={n === i} aria-label={`Slide ${n + 1}`} className={n < i ? "done" : n === i ? "on" : ""} onClick={() => go(n)}>
            <i key={n === i ? `a${i}` : `s${n}`} onAnimationEnd={n === i ? () => go(i + 1) : undefined} />
          </button>
        ))}
      </div>
    </div>
  );
}
