import Link from "next/link";
import { PHONE, waLink } from "@/lib/site";

/** Sticky call / WhatsApp / book bar for phones. */
export default function MobileBar() {
  return (
    <div className="mbar" role="navigation" aria-label="Quick contact">
      <a href={`tel:${PHONE.replace(/\s/g, "")}`}>Call</a>
      <a href={waLink("Hello Sun Optics, I'd like to enquire.")} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <Link href="/appointments" className="mbar__primary">Book eye test</Link>
    </div>
  );
}
