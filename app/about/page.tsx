import type { Metadata } from "next";
import Link from "next/link";
import ShopShell from "@/components/ShopShell";
import Ld from "@/components/Ld";
import { crumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our story",
  description: "Sun Optics designs luxury sunglasses and optical frames in β-titanium and Italian acetate, finished by hand in 24 steps.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <ShopShell crumbs={[{ name: "Our story" }]} title="Our story">
      <Ld data={crumbLd([{ name: "Our story", path: "/about" }])} />
      <div className="prose">
        <p className="body-l">Sun Optics is a luxury eyewear house for people who notice details. We design frames that weigh under 28 grams, test every hinge for 20,000 cycles, and pair each pair with lenses that cut glare without dulling colour.</p>
        <h2 className="h3">Materials</h2>
        <p>We work in Japanese β-titanium and Italian Mazzucchelli acetate. Each frame is tumbled for 72 hours and polished by hand in 24 steps.</p>
        <h2 className="h3">Lenses</h2>
        <p>Every sunglass lens blocks 100% of UVA and UVB. Polarised, mirror, photochromic and prescription versions are available for every tint.</p>
        <h2 className="h3">Service</h2>
        <p>A free eye consultation, a 3D face scan, a 2-year warranty and lifetime adjustments in our boutiques. <Link className="link" href="/boutiques">Find a boutique</Link>.</p>
      </div>
    </ShopShell>
  );
}
