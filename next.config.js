const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_IMAGE_DOMAIN,
        // port: "",
        pathname: "/sites/default/files/**",
      },
    ],
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },

  i18n,

  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },

  // swcMinify: true,

  // output: "standalone",
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  sw: "/sw.js",
  runtimeCaching,
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,
});

// Compose all the plugins one by one.
const plugins = [withPWA, withBundleAnalyzer];

module.exports = plugins.reduce((config, plugin) => plugin(config), nextConfig);
