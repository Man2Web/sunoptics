import type { Metadata } from "next";
import ShopShell from "@/components/ShopShell";
import Ld from "@/components/Ld";
import WhatsAppLink from "@/components/WhatsAppLink";
import { PHONE, crumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home delivery",
  description: "Free home delivery of glasses within Vellore and surrounding areas, with courier service for outer regions. Call or WhatsApp +91 95665 14555.",
  alternates: { canonical: "/delivery" },
};

export default function Delivery() {
  return (
    <ShopShell crumbs={[{ name: "Home delivery" }]} title="Home delivery" intro="Your glasses, delivered to your doorstep.">
      <Ld data={crumbLd([{ name: "Home delivery", path: "/delivery" }])} />
      <div className="prose">
        <ul className="bullets">
          <li>Free home delivery within Vellore and surrounding areas.</li>
          <li>Courier service available for customers in outer regions.</li>
        </ul>
        <p>To arrange delivery, call or WhatsApp <a className="link" href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>.</p>
        {/* PENDING: courier charges and delivery time (owner to confirm). */}
        <p><WhatsAppLink className="btn" icon={false} label="Arrange delivery" text="Hello Sun Optics, I'd like to arrange home delivery." /></p>
      </div>
    </ShopShell>
  );
}
