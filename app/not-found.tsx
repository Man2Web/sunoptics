export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <main className="nf">
      <h1 className="display" style={{ color: "var(--soft)" }}>404</h1>
      <p>This frame has gone out of focus.</p>
      <p><a href="/" style={{ color: "var(--accent)" }}>Back to Sun Optics</a></p>
    </main>
  );
}
