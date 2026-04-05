import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/law2do1",
  assetPrefix: "/law2do1/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
