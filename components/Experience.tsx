"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);
const $ = <T extends Element = HTMLElement>(s: string) => document.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string) => Array.from(document.querySelectorAll<T>(s));

/** Home-page behaviour: smooth scroll, progress bar, reveal animations, loader. Renders nothing. */
export default function Experience() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const loader = $("#loader");
    const hide = setTimeout(() => loader?.classList.add("done"), 700);
    const cleanups: Array<() => void> = [];

    let lenis: Lenis | null = null;
    if (!reduced) {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (t: number) => lenis!.raf(t * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      cleanups.push(() => { gsap.ticker.remove(tick); lenis!.destroy(); });
    }
    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = a?.getAttribute("href");
      const el = id && id.length > 1 ? $(id) : null;
      if (!el) return;
      e.preventDefault();
      lenis ? lenis.scrollTo(el, { offset: -20 }) : el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    };
    document.addEventListener("click", onAnchor);
    cleanups.push(() => document.removeEventListener("click", onAnchor));

    const bar = $("#progress");
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar && (bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => removeEventListener("scroll", onScroll));

    const ctx = gsap.context(() => {
      if (reduced) return;
      $$("[data-reveal], .feature").forEach((el) =>
        gsap.from(el, { y: 50, opacity: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%", once: true } })
      );
    });
    cleanups.push(() => ctx.revert());

    return () => { clearTimeout(hide); cleanups.reverse().forEach((fn) => fn()); };
  }, []);

  return null;
}
