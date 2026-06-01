import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ehrmhvmsbhmwvexxvuqd.supabase.co",
      },
    ],
  },
};

export default nextConfig;
