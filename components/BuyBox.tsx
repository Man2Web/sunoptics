import WhatsAppLink from "./WhatsAppLink";
import { discount, productImage, type Product } from "@/lib/products";
import { inr, SITE_URL } from "@/lib/site";

export default function BuyBox({ p }: { p: Product }) {
  const c = p.colors[0];
  const d = discount(p);

  return (
    <div className="pdp">
      <div className="pdp__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="pdp__photo" src={productImage(p)} alt={`${p.name} by ${p.brand}`} width="900" height="900" />
      </div>
      <div className="pdp__info">
        <p className="kicker">{p.brand}</p>
        <h1 className="h2">{p.name}</h1>
        <p className="pdp__price">{inr(p.price)}{p.mrp && <><s>{inr(p.mrp)}</s><span className="badge badge--sale">Save {d}%</span></>}</p>
        <p className="pdp__desc">{p.desc}</p>

        <p className="pdp__colours"><span>Available colours</span>{p.colors.map((x) => <b key={x.name}>{x.name}</b>)}</p>

        <WhatsAppLink className="btn btn--wa btn--wide" label="Enquire on WhatsApp" text={`Hello Sun Optics, I'd like to enquire about the ${p.name} by ${p.brand} in ${c.name} (${inr(p.price)}). ${SITE_URL}/product/${p.slug}`} />
        <div className="pdp__sticky">
          <div><strong>{inr(p.price)}</strong><span>{c.name}</span></div>
          <WhatsAppLink className="btn btn--wa" label="Enquire" text={`Hello Sun Optics, I'd like to enquire about the ${p.name} by ${p.brand} in ${c.name} (${inr(p.price)}). ${SITE_URL}/product/${p.slug}`} />
        </div>
        <p className="pdp__note">Chat with a stylist for availability, prescription lenses and a fitting. No online payment needed.</p>
        <ul className="perks">
          <li>Free home delivery in Vellore and surrounding areas</li>
          <li>Call or WhatsApp to confirm availability</li>
          <li>Prescription lenses fitted on request</li>
        </ul>
      </div>
    </div>
  );
}
