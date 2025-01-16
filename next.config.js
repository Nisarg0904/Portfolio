/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Portfolio", // Remove this if not required for your deployment
  assetPrefix: "/Portfolio/", // Remove this if not required
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
