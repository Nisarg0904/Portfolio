import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Base path and asset prefix for GitHub Pages
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",

  // Other configurations
  reactStrictMode: true,
  swcMinify: true,
};

// Disable Sentry if no auth token is set
const sentryDisabled = !process.env.SENTRY_AUTH_TOKEN;

export default sentryDisabled
  ? nextConfig
  : withSentryConfig(
      nextConfig,
      {
        silent: true, // Suppress source map upload logs
      },
      {
        widenClientFileUpload: true,
        transpileClientSDK: true,
        hideSourceMaps: true,
        disableLogger: true,
      }
    );
