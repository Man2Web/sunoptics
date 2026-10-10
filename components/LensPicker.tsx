"use client";
import { useState } from "react";
import Glasses2D from "./Glasses2D";

const TINTS = [
  { name: "Bronze", label: "Bronze", hex: "#6b4a22", desc: "Warm contrast for bright days and driving. Deepens greens and browns." },
  { name: "G-15 Green", label: "G-15 Green", hex: "#1f4a34", desc: "The classic. True-to-life colour with low glare, a pilot's favourite since 1936." },
  { name: "Ocean Mirror", label: "Ocean Mirror", hex: "#2b4f8f", desc: "Blue flash mirror coating for coastlines, snow and high-glare water." },
  { name: "Rosé Gradient", label: "Rosé", hex: "#8a3b52", desc: "Soft rose gradient that flatters skin tones and lifts shadows in the city." },
  { name: "Smoke Grey", label: "Smoke", hex: "#2a2a2e", desc: "Neutral grey with no colour shift, ideal for photography and everyday wear." },
];

export default function LensPicker() {
  const [i, setI] = useState(0);
  return (
    <div className="lens-ui">
      <div className="lens-ui__preview"><Glasses2D tint={TINTS[i].hex} /></div>
      <div>
        <div className="chips" role="radiogroup" aria-label="Lens tint">
          {TINTS.map((t, n) => (
            <button key={t.name} className={`chip${n === i ? " is-active" : ""}`} role="radio" aria-checked={n === i} onClick={() => setI(n)}>
              <i style={{ "--c": t.hex } as React.CSSProperties} />{t.label}
            </button>
          ))}
        </div>
        <div className="lens-info" aria-live="polite"><strong>{TINTS[i].name}</strong><span>{TINTS[i].desc}</span></div>
      </div>
    </div>
  );
}
