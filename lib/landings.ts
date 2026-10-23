import { BOOKING_NEEDED, BRAND_GROUPS, CONTACT_LENS_TYPES, EYEWEAR_TYPES, FRAME_SERVICES, LENS_TYPES, SPECIALTY_SERVICES, STORES, HOURS, PHONE } from "./site";

export type Block = { h: string; p?: string; list?: string[]; defs?: [string, string][] };
export type Landing = {
  slug: string; nav: string; title: string; description: string; h1: string; intro: string; img: string; alt: string;
  blocks: Block[]; faq: [string, string][]; wa: string; related: string[]; branch?: number;
};

const brands = (i: number) => BRAND_GROUPS[i].brands;
const STORE_LINE = STORES.map((s) => `${s.area}`).join(" and ");

export const LANDINGS: Landing[] = [
  {
    slug: "eye-test", nav: "Eye test in Vellore",
    title: "Eye Test in Vellore: ₹200 Eye Check-up by Optometrists",
    description: "Eye test in Vellore at Sun Optics: a check-up by qualified optometrists for ₹200, free with frames and lenses. No hospital visit needed. Walk-ins welcome at Krishna Nagar and Green Circle.",
    h1: "Eye test in Vellore by qualified optometrists",
    intro: "Get your eyes checked at Sun Optics without a trip to the hospital. Our optometrists find the cause of your visual discomfort and recommend the right solution, at both our Vellore branches.",
    img: "/images/exam-machine.jpg", alt: "Patient having an eye test with an optometrist's equipment",
    blocks: [
      { h: "No hospital visit for a routine eye check-up", p: "You do not need to visit a hospital for a routine eye check-up. If a medical examination is needed, we refer you to a hospital ourselves, so you only go when it is truly required." },
      { h: "Eye check-up fee", p: "An eye check-up at Sun Optics costs ₹200. The fee is free when you purchase frames and lenses from us." },
      { h: "Book ahead for specialised visits", p: "Walk-ins are always welcome for routine eye check-ups, frames and lenses. For the following, please book an appointment or enquire in advance so we can give you our full time and attention:", list: BOOKING_NEEDED },
      { h: "Where to get an eye test in Vellore", p: `Visit our ${STORE_LINE} branches, open ${HOURS}. Sunday timings may vary, so please call ${PHONE} to confirm before visiting.` },
    ],
    faq: [
      ["How much does an eye test cost at Sun Optics?", "An eye check-up costs ₹200, which is free when you purchase frames and lenses from us."],
      ["Do I need an appointment for an eye test?", "No. Walk-ins are welcome for routine eye check-ups. Book ahead for specialty contact lens fittings and vision therapy."],
      ["Will I be sent to a hospital?", "Only if a medical examination is needed. We refer you ourselves, so you go to a hospital only when it is truly required."],
    ],
    wa: "Hello Sun Optics, I'd like to book an eye test.", related: ["spectacles", "contact-lenses", "optical-shop-krishna-nagar"],
  },
  {
    slug: "spectacles", nav: "Spectacles in Vellore",
    title: "Spectacles & Eyeglasses in Vellore: Frames, Lenses & Brands",
    description: "Spectacles and eyeglasses in Vellore at Sun Optics: full-frame, half-frame, rimless, kids' and designer frames with progressive, blue-cut, photochromic and anti-glare lenses from Zeiss, Hoya and Essilor.",
    h1: "Spectacles and eyeglasses in Vellore",
    intro: "From classic full-frame styles to rimless designs, Sun Optics has frames and lens technologies for every vision need and lifestyle, backed by an eye check-up from a qualified optometrist.",
    img: "/images/frames-rack.jpg", alt: "Rows of eyeglass frames on a display wall",
    blocks: [
      { h: "Types of eyewear", defs: EYEWEAR_TYPES },
      { h: "Lens technologies", p: "Advanced lens technologies to match your vision needs and lifestyle:", defs: LENS_TYPES },
      { h: "Eyewear brands", p: `Choose from ${brands(0).slice(0, 8).join(", ")} and more. Lenses from ${brands(1).join(", ")}.` },
      { h: "Frame and lens services", list: FRAME_SERVICES },
    ],
    faq: [
      ["Which lens brands do you offer?", "We offer lenses from Zeiss, Hoya and Essilor."],
      ["Do you have frames for kids?", "Yes. We stock durable, comfortable kids' eyewear made for growing children."],
      ["Can you replace lenses or fix my current frame?", "Yes. We offer nose pad changes, frame alignment, lens replacement and frame replacement."],
    ],
    wa: "Hello Sun Optics, I'm looking for spectacles.", related: ["eye-test", "sunglasses", "optical-shop-green-circle"],
  },
  {
    slug: "contact-lenses", nav: "Contact lenses in Vellore",
    title: "Contact Lenses in Vellore: Soft, Toric, Multifocal & Specialty Fitting",
    description: "Contact lenses in Vellore at Sun Optics: soft, toric, multifocal and coloured lenses, plus corneal RGP, scleral and orthokeratology fitting led by Yashwanth Balaji, B.Optom.",
    h1: "Contact lenses in Vellore, including specialty fitting",
    intro: "Sun Optics fits everyday contact lenses and advanced specialty lenses. Mr. Yashwanth Balaji, B.Optom, completed a contact lens fellowship at Sankara Nethralaya, Chennai, and leads our specialty lens and vision therapy services.",
    img: "/images/eye-closeup.jpg", alt: "Close-up of an eye",
    blocks: [
      { h: "Categories of contact lenses", defs: CONTACT_LENS_TYPES },
      { h: "Specialty contact lens and vision services", defs: SPECIALTY_SERVICES },
      { h: "How specialty fitting works", p: "Trial lenses are available at our store for fitting. The final specialty lens is custom-made and ordered after the fitting. Please book an appointment or enquire in advance for specialty fittings." },
      { h: "Contact lens brands", p: `${brands(2).join(", ")}. Specialty lenses: ${brands(3).join(", ")}.` },
    ],
    faq: [
      ["Do you fit scleral and RGP lenses?", "Yes. Corneal RGP lenses help with keratoconus, corneal irregularities and high powers. Scleral lenses help with keratoconus, irregular corneas and severe dry eyes."],
      ["What is orthokeratology (Ortho-K)?", "Specially designed lenses worn overnight to reshape the cornea and help control myopia."],
      ["Do I need to book a contact lens fitting?", "For keratoconus, corneal irregularities or any specialty lens (RGP, scleral, orthokeratology), please book or enquire in advance."],
    ],
    wa: "Hello Sun Optics, I'd like to enquire about contact lenses.", related: ["eye-test", "spectacles", "optical-shop-krishna-nagar"],
  },
  {
    slug: "sunglasses", nav: "Sunglasses in Vellore",
    title: "Sunglasses in Vellore: UV-Protective Sunglasses with or without Power",
    description: "Sunglasses in Vellore at Sun Optics: UV-protective sunglasses with or without power from Ray-Ban, Oakley, Maui Jim, Versace, Giorgio Armani and more, plus sports eyewear.",
    h1: "Sunglasses in Vellore, with or without power",
    intro: "Pick UV-protective sunglasses from leading international labels, with or without your prescription, and get them fitted and adjusted at our Vellore branches.",
    img: "/images/lens-glasses.jpg", alt: "Eyeglasses on a display stand",
    blocks: [
      { h: "What we offer", defs: [["Sunglasses", "UV-protective sunglasses, with or without power."], ["Sports eyewear", "Secure, impact-resistant eyewear for an active lifestyle."], ["Designer frames", "Fashion-led styles from leading international labels."], ["Kids' eyewear", "Durable, comfortable frames made for growing children."]] },
      { h: "Brands", p: `${brands(0).join(", ")}.` },
      { h: "Photochromic lenses", p: "Clear indoors, they darken automatically in sunlight, so one pair works both ways." },
    ],
    faq: [
      ["Can I get sunglasses with my prescription?", "Yes. Sunglasses are available with or without power."],
      ["Which sunglass brands do you stock?", "Ray-Ban, Oakley, Maui Jim, Versace, Giorgio Armani, Michael Kors, Burberry and more."],
    ],
    wa: "Hello Sun Optics, I'm looking for sunglasses.", related: ["spectacles", "eye-test", "optical-shop-green-circle"],
  },
  {
    slug: "optical-shop-krishna-nagar", nav: "Krishna Nagar branch", branch: 0,
    title: "Optical Shop in Krishna Nagar, Vellore: Sun Optics (Since 1999)",
    description: "Sun Optics Krishna Nagar branch, Vellore: our first store since 1999 near Lakshmi Theatre. Eye tests, spectacles, contact lenses and specialty fitting. Open 10 AM to 9 PM. Call +91 95665 14555.",
    h1: "Sun Optics, Krishna Nagar branch, Vellore",
    intro: "Where Sun Optics began in December 1999. Visit us at TKT Complex, near Lakshmi Theatre, for eye check-ups, frames, lenses and contact lens fitting.",
    img: "/images/frames-rack.jpg", alt: "Eyeglass frames on display",
    blocks: [
      { h: "Address and timings", list: [STORES[0].address, `Open ${HOURS}. Sunday timings may vary; please call to confirm.`, `Phone / WhatsApp: ${PHONE}`] },
      { h: "Services at this branch", list: ["Eye check-up by an optometrist (₹200, free with frames and lenses)", "Spectacles, sunglasses and kids' eyewear", "Soft, toric, multifocal and coloured contact lenses", "Specialty lens fitting by appointment", "Free home delivery within Vellore and surrounding areas"] },
    ],
    faq: [
      ["Where is the Krishna Nagar branch?", "TKT Complex, 1, Officer's Line, near Lakshmi Theatre, opposite the Allen Solly showroom, Krishna Nagar, Veerasamy Nagar, Vellore 632001."],
      ["What are the opening hours?", "10:00 AM to 9:00 PM, all week. Sunday timings may vary, so please call to confirm."],
    ],
    wa: "Hello Sun Optics, I'd like to visit the Krishna Nagar branch.", related: ["eye-test", "spectacles", "optical-shop-green-circle"],
  },
  {
    slug: "optical-shop-green-circle", nav: "Green Circle branch", branch: 1,
    title: "Optical Shop at Green Circle, Katpadi Road, Vellore: Sun Optics",
    description: "Sun Optics Green Circle branch on Katpadi Main Road, Vellore. Eye tests, spectacles, sunglasses and contact lenses. Open 10 AM to 9 PM. Call or WhatsApp +91 95665 14555.",
    h1: "Sun Optics, Green Circle branch, Vellore",
    intro: "Our second Vellore branch on Katpadi Main Road, with the same eye check-ups, frames, lenses and contact lens services as our Krishna Nagar store.",
    img: "/images/lens-glasses.jpg", alt: "Eyeglasses on a display stand",
    blocks: [
      { h: "Address and timings", list: [STORES[1].address, `Open ${HOURS}. Sunday timings may vary; please call to confirm.`, `Phone / WhatsApp: ${PHONE}`] },
      { h: "Services at this branch", list: ["Eye check-up by an optometrist (₹200, free with frames and lenses)", "Spectacles, sunglasses and kids' eyewear", "Soft, toric, multifocal and coloured contact lenses", "Specialty lens fitting by appointment", "Free home delivery within Vellore and surrounding areas"] },
    ],
    faq: [
      ["Where is the Green Circle branch?", "6/1, Katpadi Main Road, Green Circle, Vellore, Tamil Nadu 632004."],
      ["What are the opening hours?", "10:00 AM to 9:00 PM, all week. Sunday timings may vary, so please call to confirm."],
    ],
    wa: "Hello Sun Optics, I'd like to visit the Green Circle branch.", related: ["eye-test", "sunglasses", "optical-shop-krishna-nagar"],
  },
];

export const landingBySlug = (s: string) => LANDINGS.find((l) => l.slug === s);
