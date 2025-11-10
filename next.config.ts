import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid failing production builds on ESLint errors. We still lint in dev/CI.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
