import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { BRANDS, CATEGORIES, PRODUCTS, SHAPES, brandSlug } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const e = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "weekly") => ({ url: SITE_URL + path, lastModified: now, changeFrequency, priority });
  return [
    e("", 1),
    e("/shop", 0.9),
    ...CATEGORIES.map((c) => e(`/shop/${c.slug}`, 0.8)),
    e("/shop/for/men", 0.7), e("/shop/for/women", 0.7),
    ...SHAPES.map((x) => e(`/shop/shape/${x.slug}`, 0.6)),
    e("/sale", 0.7), e("/collectors-edition", 0.7), e("/brands", 0.6),
    ...BRANDS.map((b) => e(`/brands/${brandSlug(b)}`, 0.5)),
    ...PRODUCTS.map((p) => e(`/product/${p.slug}`, 0.7)),
    e("/boutiques", 0.5, "monthly"), e("/about", 0.4, "monthly"),
  ];
}
