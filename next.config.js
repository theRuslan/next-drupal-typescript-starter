// const path = require("path");
const withPlugins = require("next-compose-plugins");
const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  publicRuntimeConfig: {
    siteName: "Next.js+Drupal Typescript Starter",
    canonicalDomain: "https://starter.wakelabstudio.ru/",
    gtmId: "GTM-P5FFMJ8",
  },

  reactStrictMode: true,

  swcMinify: true,

  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },

  i18n,

  // output: "standalone",

  // sassOptions: {
  //   includePaths: [path.join(__dirname, "styles")],
  // },

  // // https://nextjs.org/docs/api-reference/next.config.js/redirects
  // async redirects() {
  //   return [
  //     {
  //       source: "/about",
  //       destination: "/",
  //       permanent: true,
  //     },
  //   ];
  // },

  // // https://nextjs.org/docs/api-reference/next.config.js/rewrites
  // async rewrites() {
  //   return [
  //     {
  //       source: "/ru/front",
  //       destination: "/ru",
  //       locale: false,
  //     },
  //     {
  //       source: "/en/front",
  //       destination: "/en",
  //       locale: false,
  //     },
  //   ];
  // },

  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
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

module.exports = withPlugins([[withPWA], [withBundleAnalyzer]], nextConfig);
