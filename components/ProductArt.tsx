import type { Product } from "@/lib/products";

export const FRAME: Record<string, string> = {
  aviator: '<path d="M14 20h70c6 0 8 5 7 10-3 16-14 28-33 28-18 0-30-12-32-28-1-5 2-10 8-10z"/><path d="M186 20h-70c-6 0-8 5-7 10 3 16 14 28 33 28 18 0 30-12 32-28 1-5-2-10-8-10z"/><path d="M91 28c6-6 12-6 18 0M91 36c6-4 12-4 18 0"/><path d="M14 24L3 20M186 24l11-4"/>',
  square: '<rect x="10" y="16" width="76" height="46" rx="10"/><rect x="114" y="16" width="76" height="46" rx="10"/><path d="M86 26c8-6 20-6 28 0"/><path d="M10 24L2 20M190 24l8-4"/>',
  round: '<circle cx="52" cy="40" r="28"/><circle cx="148" cy="40" r="28"/><path d="M80 34c12-8 28-8 40 0"/><path d="M24 34L4 28M176 34l20-6"/>',
  "cat-eye": '<path d="M8 28c0-8 8-12 22-10l50 8c8 2 10 8 8 16-4 14-14 20-30 20-22 0-50-10-50-34z"/><path d="M192 28c0-8-8-12-22-10l-50 8c-8 2-10 8-8 16 4 14 14 20 30 20 22 0 50-10 50-34z"/><path d="M88 32c8-5 16-5 24 0"/>',
  rectangular: '<path d="M10 18h74c4 0 6 3 6 7l-2 18c-1 10-8 15-18 15H36c-10 0-18-6-20-16z"/><path d="M190 18h-74c-4 0-6 3-6 7l2 18c1 10 8 15 18 15h36c10 0 18-6 20-16z"/><path d="M90 26c7-4 13-4 20 0"/><path d="M10 22L2 18M190 22l8-4"/>',
  lens: '<circle cx="100" cy="40" r="26"/><circle cx="100" cy="40" r="17"/><path d="M82 40a18 18 0 0 1 36 0"/>',
  case: '<rect x="30" y="18" width="140" height="44" rx="22"/><path d="M100 18v44"/>',
  cloth: '<path d="M40 22l60-8 60 8-8 40-52 6-52-6z"/><path d="M60 34l40-6 40 6"/>',
  kit: '<rect x="82" y="22" width="36" height="46" rx="8"/><path d="M94 22v-8h12v8M100 34v18"/>',
  chain: '<path d="M30 20c0 40 40 44 70 44s70-4 70-44"/><path d="M30 20l-6-4M170 20l6-4"/>',
};

export function artFor(p: Product) {
  if (p.category === "contact-lenses") return FRAME.lens;
  if (p.category === "accessories") {
    if (/case/i.test(p.name)) return FRAME.case;
    if (/cloth|microfibre/i.test(p.name)) return FRAME.cloth;
    if (/kit/i.test(p.name)) return FRAME.kit;
    if (/chain/i.test(p.name)) return FRAME.chain;
  }
  return FRAME[p.shape ?? "round"];
}

export default function ProductArt({ product, color, lens, clear }: { product: Product; color?: string; lens?: string; clear?: boolean }) {
  const style = { ...(color ? { color } : {}), ...(lens ? { "--lens": lens, "--lo": clear ? 0.14 : 0.6 } : {}) } as React.CSSProperties;
  return (
    <svg viewBox="0 0 200 80" aria-hidden="true" style={style} className={lens ? "pflat" : undefined}>
      <g fill="none" stroke="currentColor" strokeWidth="2.4" dangerouslySetInnerHTML={{ __html: artFor(product) }} />
    </svg>
  );
}

export function ShapeArt({ shape }: { shape: string }) {
  return (
    <svg viewBox="0 0 200 80" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.4" dangerouslySetInnerHTML={{ __html: FRAME[shape] }} />
    </svg>
  );
}
