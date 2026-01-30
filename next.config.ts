import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/law2do1",
  assetPrefix: "/law2do1/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
