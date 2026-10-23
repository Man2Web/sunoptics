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
      const body = `Hello Sun Optics, I'd like to enquire.\nName: ${d.get("name")}\nPreferred branch: ${d.get("branch")}\n\n${d.get("msg") || ""}`;
      setNote("Opening WhatsApp to send your enquiry…");
      window.open(waLink(body), "_blank", "noopener");
    }}>
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Preferred branch<select name="branch"><option>Krishna Nagar</option><option>Green Circle</option><option>Home delivery</option></select></label>
      <label>How can we help?<textarea name="msg" rows={3} placeholder="Eye check-up, frames, contact lenses, appointment…" /></label>
      <button className="btn" type="submit">Send on WhatsApp</button>
      <p className="form__note" role="status">{note}</p>
    </form>
  );
}
