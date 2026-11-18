import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export: `next build` writes the site to ./out (served by Cloudflare as static assets).
  output: 'export',
  // The default image optimizer needs a server, so it is disabled for static export.
  images: { unoptimized: true },
};

export default nextConfig;
