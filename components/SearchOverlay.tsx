"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { searchProducts } from "@/lib/products";
import { inr } from "@/lib/site";

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const input = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    setQ(""); input.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, onClose]);

  const results = useMemo(() => searchProducts(q), [q]);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
    onClose();
  };

  if (!open) return null;
  return (
    <div className="search" role="dialog" aria-modal="true" aria-label="Search">
      <form className="search__bar" onSubmit={submit} role="search">
        <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search sunglasses, frames, brands…" aria-label="Search products" enterKeyHint="search" />
        <button type="button" onClick={onClose} aria-label="Close search"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" /></svg></button>
      </form>
      <div className="search__results">
        {q.trim() && !results.length && <p className="search__empty">No results for “{q}”. Try “aviator”, “titanium” or “kids”.</p>}
        {results.slice(0, 6).map((p) => (
          <Link key={p.slug} href={`/product/${p.slug}`} onClick={onClose}>
            <strong>{p.name}</strong><span>{p.brand} · {p.material}</span><em>{inr(p.price)}</em>
          </Link>
        ))}
        {results.length > 6 && <Link href={`/search?q=${encodeURIComponent(q.trim())}`} onClick={onClose} className="search__all">See all {results.length} results ›</Link>}
        {!q.trim() && <p className="search__empty">Try “aviator”, “titanium”, “kids” or a brand name.</p>}
      </div>
    </div>
  );
}
