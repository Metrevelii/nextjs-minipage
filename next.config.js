/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/nextjs-minipage",
  assetPrefix: "nextjs-minipage",
};

module.exports = nextConfig;

