import type { Metadata } from "next";
import Link from "next/link";
import ShopShell from "@/components/ShopShell";
import Ld from "@/components/Ld";
import { crumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Sun Optics",
  description: "Sun Optics has cared for the eyes of Vellore since December 1999. Meet our founder Mr. Balaji and Mr. Yashwanth Balaji, B.Optom, and read about our community eye camps.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <ShopShell crumbs={[{ name: "About" }]} title="About Sun Optics">
      <Ld data={crumbLd([{ name: "About", path: "/about" }])} />
      <div className="prose">
        <p className="body-l">Sun Optics has been caring for the eyes of Vellore since December 1999. Founded by a qualified optometrist with over three decades of experience in eye care, we have grown from a single store into two branches, with one goal: to help every customer see clearly and comfortably.</p>
        <p>Every pair of glasses we make is backed by care, experience and a commitment to healthy vision.</p>

        <h2 className="h3">Our founder: Mr. Balaji</h2>
        <div className="people">
          <div className="photo-ph" role="img" aria-label="Photo of Mr. Balaji (placeholder)">Photo of Mr. Balaji</div>
          <p>Mr. Balaji founded Sun Optics in December 1999. He completed his optometry training in 1988 at the Regional Institute of Ophthalmology, Egmore, and began his career at L V Prasad Eye Institute and Lawrence &amp; Mayo. He later worked with Al Jabir Opticians in Doha, Qatar. In March 2000, he also completed his Paramedical Ophthalmic Assistant training at Rajaji Medical College, Madurai.</p>
        </div>

        <h2 className="h3">Mr. Yashwanth Balaji, B.Optom</h2>
        <div className="people">
          <div className="photo-ph" role="img" aria-label="Photo of Mr. Yashwanth Balaji (placeholder)">Photo of Mr. Yashwanth Balaji</div>
          <div className="prose">
            <p>Mr. Yashwanth Balaji represents the next generation of Sun Optics. He completed his B.Optom in 2023 and did his internship in Nagpur. He then worked as an optometrist at Eye 2 Eye Opticals, Mumbai, before completing a fellowship in contact lenses at Sankara Nethralaya, Chennai.</p>
            <p>He later worked as a Clinical Associate for specialty contact lens and optometry services across the Chennai, Vellore and Pondicherry regions, including corneal RGPs, scleral lenses, orthokeratology lenses and vision therapy. He joined the family business in July 2026, bringing advanced contact lens and vision therapy expertise to Sun Optics.</p>
          </div>
        </div>

        <h2 className="h3">Serving the community</h2>
        <p>Beyond the store, Sun Optics is committed to serving the community. We have organised many school eye screenings and cataract surgery camps, both on our own and in partnership with the Jaycees, Lions Club and Rotary Club.</p>
        {/* PENDING: camps held, schools covered and people screened, with years (owner to send). */}

        <p><Link className="link" href="/services">Our services</Link> · <Link className="link" href="/boutiques">Find a branch</Link></p>
      </div>
    </ShopShell>
  );
}
