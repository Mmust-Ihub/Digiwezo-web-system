import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options here */

  // Required for efficient docker deployments
  output: "standalone",
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
