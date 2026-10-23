import type { Metadata } from "next";
import { Suspense } from "react";
import SearchResults from "@/components/SearchResults";

export const metadata: Metadata = { title: "Search", robots: { index: false, follow: true } };

// Static export: the query is read in the browser, so the page itself is prerendered.
export default function Search() {
  return <Suspense fallback={null}><SearchResults /></Suspense>;
}
