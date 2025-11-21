import type { NextConfig } from "next";

// When ANALYZE=true, add webpack-bundle-analyzer to the Next.js webpack config.
// Run with `cross-env ANALYZE=true npm run build` (or `npm run analyze`).
const nextConfig: NextConfig = {
  // Avoid failing production builds on ESLint errors. We still lint in dev/CI.
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config, { webpack, isServer }) {
    if (process.env.ANALYZE === "true") {
      // Require here so it's only loaded when needed.
      const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: isServer ? "analyze/server.html" : "analyze/client.html",
          openAnalyzer: false,
        })
      );
    }
    return config;
  },
};

export default nextConfig;
