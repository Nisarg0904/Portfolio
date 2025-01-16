/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Portfolio", // Matches your GitHub repo name
  assetPrefix: "/Portfolio/",
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Enable static export
  output: "export",
};

module.exports = nextConfig;
