/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Portfolio", // Set this to your repository name
  assetPrefix: "/Portfolio/", // Set this to your repository name
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ensure static export is enabled
  output: "export",
};

module.exports = nextConfig;
