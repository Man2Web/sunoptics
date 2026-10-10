import { useId } from "react";

// Teardrop aviator lens, centred on (0,0): x -70..70, y -54..62.
const LENS = "M-66 -44C-66 -52 -58 -54 -46 -54L50 -54C64 -54 72 -46 70 -34C66 22 38 62 -2 62C-42 62 -70 22 -70 -34C-70 -38 -68 -42 -66 -44Z";

/**
 * Product-style aviator illustration: metallic rim, tinted lens with sky reflection,
 * nose pads, hinges and temples. `tint` recolours the lenses, `glare` sweeps light across them,
 * `reflect` adds a glossy floor reflection and contact shadow.
 */
export default function Glasses2D({ tint = "#6b4a22", className, glare = false, reflect = false }: { tint?: string; className?: string; glare?: boolean; reflect?: boolean }) {
  const u = useId().replace(/:/g, "");
  const id = (n: string) => `${n}${u}`;
  const url = (n: string) => `url(#${id(n)})`;
  const stop = { transition: "stop-color .6s ease" } as const;
  const H = reflect ? 340 : 200;

  const glasses = (
    <g id={id("g")} strokeLinejoin="round" strokeLinecap="round">
      {/* temples (arms) */}
      <path d="M68 70L26 60M412 70L454 60" fill="none" stroke="#17171a" strokeWidth="9" />
      <path d="M68 68L28 58M412 68L452 58" fill="none" stroke={url("m")} strokeWidth="2" opacity=".7" />
      {/* lenses */}
      {[0, 1].map((k) => (
        <g key={k} transform={k ? "translate(345 110) scale(-1 1)" : "translate(135 110)"}>
          <path d={LENS} fill={url("l")} />
          <path d={LENS} fill={url("sky")} clipPath={url("cl")} />
          <path d="M-58 -44L-14 -52L-40 48L-70 40Z" fill="#fff" opacity=".05" clipPath={url("cl")} />
          <path d="M-60 -20C-30 -34 30 -34 62 -20" fill="none" stroke="#fff" strokeOpacity=".18" strokeWidth="1.5" clipPath={url("cl")} />
          <path d={LENS} fill="none" stroke={url("m")} strokeWidth="7" />
          <path d={LENS} fill="none" stroke="#000" strokeOpacity=".38" strokeWidth="1.6" transform="scale(.935)" />
          <path d="M-58 -50C-30 -58 20 -58 46 -52" fill="none" stroke="#fff" strokeOpacity=".75" strokeWidth="2" />
        </g>
      ))}
      {/* glare sweep */}
      {glare && (
        <g clipPath={url("cl2")}>
          <g className="glare"><rect x="-90" y="40" width="70" height="170" fill={url("gg")} transform="skewX(-22)" /></g>
        </g>
      )}
      {/* bridge + brow bar */}
      <path d="M200 62C220 44 260 44 280 62" fill="none" stroke={url("m")} strokeWidth="5" />
      <path d="M204 74C222 56 258 56 276 74" fill="none" stroke={url("m")} strokeWidth="3.5" />
      <ellipse cx="214" cy="116" rx="4" ry="9" fill="#fff" opacity=".3" transform="rotate(14 214 116)" />
      <ellipse cx="266" cy="116" rx="4" ry="9" fill="#fff" opacity=".3" transform="rotate(-14 266 116)" />
      {/* hinges */}
      <circle cx="68" cy="68" r="5" fill={url("m")} /><circle cx="68" cy="68" r="1.6" fill="#222" />
      <circle cx="412" cy="68" r="5" fill={url("m")} /><circle cx="412" cy="68" r="1.6" fill="#222" />
    </g>
  );

  return (
    <svg className={className} viewBox={`0 0 480 ${H}`} role="img" aria-label="Aviator sunglasses illustration">
      <defs>
        <linearGradient id={id("l")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ ...stop, stopColor: tint }} stopOpacity=".68" />
          <stop offset=".55" style={{ ...stop, stopColor: tint }} stopOpacity=".92" />
          <stop offset="1" style={{ ...stop, stopColor: tint }} stopOpacity="1" />
        </linearGradient>
        <linearGradient id={id("sky")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe6ff" stopOpacity=".55" /><stop offset=".45" stopColor="#cfe6ff" stopOpacity=".08" /><stop offset=".5" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("m")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" /><stop offset=".3" stopColor="#b4b4ba" /><stop offset=".55" stopColor="#f4f4f6" /><stop offset=".8" stopColor="#8a8a90" /><stop offset="1" stopColor="#d9d9de" />
        </linearGradient>
        <linearGradient id={id("gg")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="0" /><stop offset=".5" stopColor="#fff" stopOpacity=".6" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <clipPath id={id("cl")}><path d={LENS} /></clipPath>
        <clipPath id={id("cl2")}>
          <path d={LENS} transform="translate(135 110)" /><path d={LENS} transform="translate(345 110) scale(-1 1)" />
        </clipPath>
        <linearGradient id={id("fade")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".45" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id={id("mk")} maskUnits="userSpaceOnUse" x="0" y="0" width="480" height={H}><rect width="480" height={H} fill={url("fade")} /></mask>
        <radialGradient id={id("sh")}><stop offset="0" stopColor="#000" stopOpacity=".55" /><stop offset="1" stopColor="#000" stopOpacity="0" /></radialGradient>
        <filter id={id("b")}><feGaussianBlur stdDeviation="1.2" /></filter>
      </defs>
      {reflect && <ellipse cx="240" cy="192" rx="190" ry="10" fill={url("sh")} />}
      {glasses}
      {reflect && (
        <g transform="translate(0 384) scale(1 -1)" mask={url("mk")} filter={url("b")}>
          <use href={`#${id("g")}`} />
        </g>
      )}
    </svg>
  );
}
