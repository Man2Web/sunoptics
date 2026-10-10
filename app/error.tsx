"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="nf">
      <h1 className="display" style={{ color: "var(--soft)" }}>Oops</h1>
      <p>Something went wrong loading this page.</p>
      <p><button className="btn" onClick={reset}>Try again</button></p>
    </main>
  );
}
