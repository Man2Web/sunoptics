import { BRAND_GROUPS, BRAND_LOGOS } from "@/lib/site";

/** Logo wall: official artwork where we have it, otherwise a neutral text wordmark. */
export default function BrandGrid({ groups = BRAND_GROUPS, compact = false }: { groups?: typeof BRAND_GROUPS; compact?: boolean }) {
  return (
    <div className={`brandwall${compact ? " brandwall--compact" : ""}`}>
      {groups.map((g) => (
        <section key={g.title} aria-label={g.title}>
          <h3 className="brandwall__h">{g.title}</h3>
          <ul className="brandwall__grid">
            {g.brands.map((b) => (
              <li key={b} className="brandlogo" title={b}>
                {BRAND_LOGOS[b]
                  // eslint-disable-next-line @next/next/no-img-element
                  ? <img src={`/logos/${BRAND_LOGOS[b]}`} alt={b} loading="lazy" />
                  : <span className="brandlogo__word">{b}</span>}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
