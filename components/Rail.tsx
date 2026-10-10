"use client";
import { useCallback, useEffect, useRef, useState } from "react";

/** Horizontal scroll-snap rail: swipe, trackpad, mouse-drag, keyboard and arrow buttons. */
export default function Rail({ children, label }: { children: React.ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, moved: false, x: 0, left: 0 });
  const [edge, setEdge] = useState({ start: true, end: false });

  const sync = useCallback(() => {
    const el = ref.current; if (!el) return;
    setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }, []);
  useEffect(() => {
    sync();
    addEventListener("resize", sync);
    return () => removeEventListener("resize", sync);
  }, [sync]);

  const go = (d: number) => ref.current?.scrollBy({ left: d * Math.min(ref.current.clientWidth * 0.8, 700), behavior: "smooth" });

  // mouse drag-to-scroll (touch and trackpads already scroll natively)
  const onDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    drag.current = { down: true, moved: false, x: e.clientX, left: ref.current!.scrollLeft };
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current; if (!d.down) return;
    const dx = e.clientX - d.x;
    if (!d.moved && Math.abs(dx) > 5) { d.moved = true; ref.current!.classList.add("is-dragging"); }
    if (d.moved) ref.current!.scrollLeft = d.left - dx;
  };
  const end = () => {
    const d = drag.current; if (!d.down) return;
    d.down = false;
    ref.current?.classList.remove("is-dragging");
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) { e.preventDefault(); e.stopPropagation(); drag.current.moved = false; }
  };

  return (
    <div className="rail">
      <div
        className="rail__track" ref={ref} role="region" aria-label={label} tabIndex={0}
        data-lenis-prevent-horizontal
        onScroll={sync} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={end} onPointerLeave={end} onPointerCancel={end}
        onClickCapture={onClickCapture} onDragStart={(e) => e.preventDefault()}
        onKeyDown={(e) => { if (e.key === "ArrowRight") go(1); if (e.key === "ArrowLeft") go(-1); }}
      >
        {children}
      </div>
      <div className="rail__btns">
        <button aria-label="Previous" disabled={edge.start} onClick={() => go(-1)}>‹</button>
        <button aria-label="Next" disabled={edge.end} onClick={() => go(1)}>›</button>
      </div>
    </div>
  );
}
