"use client";
import { useState } from "react";
import ProductArt from "./ProductArt";
import WhatsAppLink from "./WhatsAppLink";
import { isClear, isEyewear, discount, type Product } from "@/lib/products";
import { inr, SITE_URL } from "@/lib/site";

export default function BuyBox({ p }: { p: Product }) {
  const [i, setI] = useState(0);
  const c = p.colors[i];
  const d = discount(p);
  const eyewear = isEyewear(p) && !!p.shape;

  return (
    <div className="pdp">
      <div className="pdp__media">
        <div className="pdp__art"><ProductArt product={p} color={c.frame} lens={eyewear ? c.lens : undefined} clear={isClear(p)} /></div>
      </div>
      <div className="pdp__info">
        <p className="kicker">{p.brand}</p>
        <h1 className="h2">{p.name}</h1>
        <p className="pdp__price">{inr(p.price)}{p.mrp && <><s>{inr(p.mrp)}</s><span className="badge badge--sale">Save {d}%</span></>}</p>
        <p className="pdp__desc">{p.desc}</p>

        <fieldset className="swatches">
          <legend>Colour: <strong>{c.name}</strong></legend>
          {p.colors.map((x, n) => (
            <button key={x.name} type="button" role="radio" aria-checked={n === i} aria-label={x.name} className={`swatch${n === i ? " is-active" : ""}`} onClick={() => setI(n)}>
              <i style={{ background: `linear-gradient(135deg, ${x.frame} 50%, ${x.lens} 50%)` }} />
            </button>
          ))}
        </fieldset>

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
