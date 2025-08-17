import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  // Only use static export for GitHub Pages
  ...(isGithubPages && { output: 'export' }),
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: isGithubPages ? '/HSG_Portfolio' : '',
  assetPrefix: isGithubPages ? '/HSG_Portfolio/' : '',
};

export default nextConfig;
