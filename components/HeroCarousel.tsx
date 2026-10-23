"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export type Slide = { tag: string; title: React.ReactNode; text: string; img: string; alt: string; tone: "sun" | "sky" | "mint" | "rose"; cta: [string, string]; cta2?: [string, string]; chips?: [string, string][]; trust?: string[] };

/** Auto-advancing banner carousel (pauses on hover/focus, respects reduced motion). */
export default function HeroCarousel({ slides }: { slides: Slide[] }) {
  const total = slides.length;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const go = useCallback((n: number) => setI(((n % total) + total) % total), [total]);

  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(i + 1), 6500);
    return () => clearTimeout(t);
  }, [i, paused, go]);

  return (
    <div className="hbn" role="region" aria-roledescription="carousel" aria-label="Featured offers"
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}
      onKeyDown={(e) => { if (e.key === "ArrowRight") go(i + 1); if (e.key === "ArrowLeft") go(i - 1); }}>
      <div className="hbn__viewport">
        {slides.map((s, n) => {
          const H = n === 0 ? "h1" : "h2";
          return (
            <div key={s.tag} className={`hbn__slide tone--${s.tone}${n === i ? " is-on" : ""}`} aria-hidden={n !== i} role="group" aria-roledescription="slide" aria-label={`${n + 1} of ${total}`}>
              <div className="hbn__text">
                <span className="hbn__tag">{s.tag}</span>
                <H>{s.title}</H>
                <p>{s.text}</p>
                <div className="hbn__cta">
                  <Link className="btn btn--lg" href={s.cta[1]} tabIndex={n === i ? 0 : -1}>{s.cta[0]}</Link>
                  {s.cta2 && <Link className="btn btn--lg btn--ghost" href={s.cta2[1]} tabIndex={n === i ? 0 : -1}>{s.cta2[0]}</Link>}
                </div>
                {s.trust && <ul className="hbn__trust">{s.trust.map((t) => <li key={t}>{t}</li>)}</ul>}
              </div>
              <div className="hbn__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.img} alt={s.alt} width="1200" height="800" loading={n === 0 ? "eager" : "lazy"} />
                {s.chips?.map(([b, t], c) => <span key={t} className={`hbn__chip hbn__chip--${c ? "b" : "a"}`}><b>{b}</b>{t}</span>)}
              </div>
            </div>
          );
        })}
      </div>
      <button className="hbn__arrow hbn__arrow--l" aria-label="Previous slide" onClick={() => go(i - 1)}>‹</button>
      <button className="hbn__arrow hbn__arrow--r" aria-label="Next slide" onClick={() => go(i + 1)}>›</button>
      <div className="hbn__dots" role="tablist" aria-label="Choose slide">
        {slides.map((s, n) => <button key={s.tag} role="tab" aria-selected={n === i} aria-label={`Slide ${n + 1}`} className={n === i ? "is-on" : ""} onClick={() => go(n)} />)}
      </div>
    </div>
  );
}
