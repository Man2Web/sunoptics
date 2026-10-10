"use client";
import { useState } from "react";

export default function Tabs({ panels }: { panels: { id: string; label: string; node: React.ReactNode }[] }) {
  const [i, setI] = useState(0);
  return (
    <div>
      <div className="tabs" role="tablist">
        {panels.map((p, n) => (
          <button key={p.id} role="tab" id={`tab-${p.id}`} aria-selected={n === i} aria-controls={`panel-${p.id}`} className={n === i ? "is-active" : ""} onClick={() => setI(n)}>{p.label}</button>
        ))}
      </div>
      {panels.map((p, n) => (
        <div key={p.id} role="tabpanel" id={`panel-${p.id}`} aria-labelledby={`tab-${p.id}`} hidden={n !== i}>{p.node}</div>
      ))}
    </div>
  );
}
