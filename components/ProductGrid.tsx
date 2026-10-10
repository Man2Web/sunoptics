"use client";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { SHAPES, type Product } from "@/lib/products";

const GENDERS = [["men", "Men"], ["women", "Women"], ["unisex", "Unisex"], ["kids", "Kids"]] as const;
const PRICES = [["", "Any price"], ["10000", "Under ₹10,000"], ["20000", "Under ₹20,000"], ["35000", "Under ₹35,000"]] as const;

export default function ProductGrid({ products }: { products: Product[] }) {
  const [gender, setGender] = useState("");
  const [shape, setShape] = useState("");
  const [brand, setBrand] = useState("");
  const [max, setMax] = useState("");
  const [sort, setSort] = useState("featured");

  const brands = useMemo(() => Array.from(new Set(products.map((p) => p.brand))).sort(), [products]);
  const hasShapes = products.some((p) => p.shape);
  const genders = GENDERS.filter(([v]) => products.some((p) => p.gender === v || (v !== "kids" && p.gender === "unisex")));
  const hasGender = genders.length > 1;
  const shapes = SHAPES.filter((s) => products.some((p) => p.shape === s.slug));

  const list = useMemo(() => {
    let l = products.filter((p) => (!gender || p.gender === gender || (gender !== "kids" && p.gender === "unisex")) && (!shape || p.shape === shape) && (!brand || p.brand === brand) && (!max || p.price <= +max));
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "best") l = [...l].sort((a, b) => +!!b.best - +!!a.best);
    return l;
  }, [products, gender, shape, brand, max, sort]);

  const reset = () => { setGender(""); setShape(""); setBrand(""); setMax(""); };
  const active = gender || shape || brand || max;

  return (
    <div>
      <div className="filters" role="group" aria-label="Filter products">
        {hasGender && (
          <label>Gender<select value={gender} onChange={(e) => setGender(e.target.value)}><option value="">All</option>{genders.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></label>
        )}
        {hasShapes && (
          <label>Shape<select value={shape} onChange={(e) => setShape(e.target.value)}><option value="">All</option>{shapes.map((s) => <option key={s.slug} value={s.slug}>{s.label}</option>)}</select></label>
        )}
        {brands.length > 1 && (
          <label>Brand<select value={brand} onChange={(e) => setBrand(e.target.value)}><option value="">All</option>{brands.map((b) => <option key={b}>{b}</option>)}</select></label>
        )}
        <label>Price<select value={max} onChange={(e) => setMax(e.target.value)}>{PRICES.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></label>
        <label>Sort<select value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Featured</option><option value="best">Bestsellers</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label>
        {active && <button className="filters__reset" onClick={reset}>Clear filters</button>}
      </div>
      <p className="results" aria-live="polite">{list.length} {list.length === 1 ? "product" : "products"}</p>
      {list.length ? (
        <div className="pgrid">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      ) : (
        <p className="empty">No products match those filters. <button className="link" onClick={reset}>Clear filters</button></p>
      )}
    </div>
  );
}
