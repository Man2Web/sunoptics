/** @type {import('next').NextConfig} */
// Static export: `npm run build` writes a plain HTML/CSS/JS site to ./out,
// which can be uploaded to Hostinger shared hosting (public_html) with no Node server.
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  distDir: process.env.NEXT_DIST_DIR || ".next",
  reactStrictMode: true,
  poweredByHeader: false,
};
export default nextConfig;
