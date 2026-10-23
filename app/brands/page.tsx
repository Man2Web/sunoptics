import type { Metadata } from "next";
import ShopShell from "@/components/ShopShell";
import Ld from "@/components/Ld";
import { BRAND_GROUPS, crumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brands",
  description: "Eyewear, lens, contact lens and specialty lens brands at Sun Optics, Vellore: Ray-Ban, Oakley, Zeiss, Hoya, Essilor, CooperVision, Bausch + Lomb and more.",
  alternates: { canonical: "/brands" },
};

export default function Brands() {
  return (
    <ShopShell crumbs={[{ name: "Brands" }]} title="Brands" intro="Eyewear, lenses and contact lenses from names you know.">
      <Ld data={crumbLd([{ name: "Brands", path: "/brands" }])} />
      <div className="brandgroups">
        {BRAND_GROUPS.map((g) => (
          <section key={g.title} aria-labelledby={`bg-${g.title}`}>
            <h2 id={`bg-${g.title}`} className="h3">{g.title}</h2>
            <ul className="chips">{g.brands.map((b) => <li key={b}>{b}</li>)}</ul>
          </section>
        ))}
      </div>
    </ShopShell>
  );
}
