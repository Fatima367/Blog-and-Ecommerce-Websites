import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  },
  webpack(config, { isServer }) {
    // Ignore the content/page.tsx during server-side compilation
    if (isServer) {
      config.module.rules.push({
        test: /content\/page\.tsx$/,
        loader: 'ignore-loader',
      });
    }
    return config;
  },
};

export default nextConfig;
