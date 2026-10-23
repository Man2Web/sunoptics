import type { Metadata } from "next";
import ShopShell from "@/components/ShopShell";
import Ld from "@/components/Ld";
import WhatsAppLink from "@/components/WhatsAppLink";
import { BOOKING_NEEDED, PHONE, crumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Schedule an appointment",
  description: "Walk-ins are welcome at Sun Optics, Vellore. Book ahead for specialty contact lens fitting and vision therapy. Eye check-up ₹200, free with frames and lenses.",
  alternates: { canonical: "/appointments" },
};

export default function Appointments() {
  return (
    <ShopShell crumbs={[{ name: "Appointments" }]} title="Schedule an appointment">
      <Ld data={crumbLd([{ name: "Appointments", path: "/appointments" }])} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pagehero" src="/images/exam-machine.jpg" alt="Patient having an eye check-up" width="1800" height="1200" />
      <div className="prose">
        <p className="body-l">Walk-ins are always welcome for routine eye check-ups, frames and lenses.</p>
        <p>For the following, we recommend booking an appointment or enquiring in advance so that we can give you our full time and attention:</p>
        <ul className="bullets">{BOOKING_NEEDED.map((s) => <li key={s}>{s}</li>)}</ul>

        <h2 className="h3">Eye check-up fee</h2>
        <p>An eye check-up costs ₹200, which is free when you purchase frames and lenses from us.</p>

        <h2 className="h3">How to book</h2>
        <p>Call or WhatsApp us on <a className="link" href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>, or visit either branch (10:00 AM to 9:00 PM).</p>
        <p><WhatsAppLink className="btn" icon={false} label="Book on WhatsApp" text="Hello Sun Optics, I'd like to book an appointment." /></p>
      </div>
    </ShopShell>
  );
}
