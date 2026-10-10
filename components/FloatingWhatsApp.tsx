import { waLink } from "@/lib/site";
import { WaIcon } from "./WhatsAppLink";

export default function FloatingWhatsApp() {
  return (
    <a className="fab" href={waLink("Hello Sun Optics, I'd like to know more about your eyewear.")} target="_blank" rel="noopener noreferrer" aria-label="Chat with Sun Optics on WhatsApp">
      <WaIcon /><span>Chat with us</span>
    </a>
  );
}
