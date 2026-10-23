import type { Metadata } from "next";
import Link from "next/link";
import ShopShell from "@/components/ShopShell";
import Ld from "@/components/Ld";
import WhatsAppLink from "@/components/WhatsAppLink";
import { FRAME_SERVICES, SPECIALTY_SERVICES, EYEWEAR_TYPES, LENS_TYPES, CONTACT_LENS_TYPES, crumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Eye check-ups by optometrists, frame and lens services, and specialty contact lens fitting (corneal RGP, scleral, orthokeratology) and vision therapy at Sun Optics, Vellore.",
  alternates: { canonical: "/services" },
};

const list = (items: [string, string][]) => (
  <ul className="plist">{items.map(([t, d]) => <li key={t}><strong>{t}</strong><span>{d}</span></li>)}</ul>
);

export default function Services() {
  return (
    <ShopShell crumbs={[{ name: "Services" }]} title="Services" intro="Eye care, frames, lenses and specialty contact lens fitting under one roof.">
      <Ld data={crumbLd([{ name: "Services", path: "/services" }])} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pagehero" src="/images/lens-glasses.jpg" alt="Eyeglass frames on a display stand" width="1800" height="1200" />
      <div className="prose">
        <h2 className="h3">Eye check-up by an optometrist</h2>
        <p>You do not need to visit a hospital for a routine eye check-up. Our optometrists find the cause of your visual discomfort and recommend the right solution. If a medical examination is needed, we refer you to a hospital ourselves, so you only go when it is truly required.</p>

        <h2 className="h3">Frame and lens services</h2>
        <ul className="bullets">{FRAME_SERVICES.map((s) => <li key={s}>{s}</li>)}</ul>

        <h2 className="h3">Specialty contact lens and vision services</h2>
        <p>Led by Mr. Yashwanth Balaji, we offer advanced care beyond regular eyewear:</p>
        {list(SPECIALTY_SERVICES)}
        <p>Trial lenses are available at our store for fitting. The final specialty lens is custom-made and ordered after the fitting.</p>
        <p><Link className="link" href="/appointments">Book an appointment ›</Link></p>

        <h2 className="h3">Categories of eyewear</h2>
        {list(EYEWEAR_TYPES)}

        <h2 className="h3">Categories of lenses</h2>
        <p>Advanced lens technologies to match your vision needs and lifestyle:</p>
        {list(LENS_TYPES)}

        <h2 className="h3">Categories of contact lenses</h2>
        {list(CONTACT_LENS_TYPES)}

        <p><WhatsAppLink className="btn" icon={false} label="Enquire on WhatsApp" text="Hello Sun Optics, I'd like to know more about your services." /></p>
      </div>
    </ShopShell>
  );
}
