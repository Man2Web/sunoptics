"use client";
import { useState } from "react";
import { waLink } from "@/lib/site";

// No backend: the enquiry opens WhatsApp with the details pre-filled.
export default function ContactForm() {
  const [note, setNote] = useState("");
  return (
    <form className="form" data-reveal onSubmit={(e) => {
      e.preventDefault();
      const d = new FormData(e.currentTarget);
      const body = `Hello Sun Optics, I'd like to book a fitting.\nName: ${d.get("name")}\nCity: ${d.get("city")}\n\n${d.get("msg") || ""}`;
      setNote("Opening WhatsApp to send your enquiry…");
      window.open(waLink(body), "_blank", "noopener");
    }}>
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>City<select name="city"><option>New Delhi</option><option>Mumbai</option><option>Bengaluru</option><option>Other</option></select></label>
      <label>What are you looking for?<textarea name="msg" rows={3} placeholder="Aviators, prescription sunglasses…" /></label>
      <button className="btn" type="submit">Send on WhatsApp</button>
      <p className="form__note" role="status">{note}</p>
    </form>
  );
}
