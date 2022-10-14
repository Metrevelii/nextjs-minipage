/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/nextjs-minipage/nextjs-minipage",
  assetPrefix: "nextjs-minipage/nextjs-minipage",
};

module.exports = nextConfig

