import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/HSG_Portfolio',
  assetPrefix: '/HSG_Portfolio/'
};

export default nextConfig;
