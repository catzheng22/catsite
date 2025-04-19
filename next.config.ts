import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/catsite', // change this!
  assetPrefix: '/catsite',
};

export default nextConfig;
