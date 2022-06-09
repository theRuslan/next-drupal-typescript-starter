/** @type {import('next').NextConfig} */

// const path = require("path");
const withPlugins = require("next-compose-plugins");
const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

const nextConfig = {
  publicRuntimeConfig: {
    siteName: "Next.js+Drupal Typescript Starter",
    canonicalDomain: "https://starter.wakelabstudio.ru/",
    gtmId: "GTM-P5FFMJ8",
  },

  reactStrictMode: true,

  images: {
    domains: [process.env.NEXT_IMAGE_DOMAIN],
  },

  i18n,

  experimental: {
    outputStandalone: true,
  },

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

module.exports = withPlugins([
  // [withBundleAnalyzer({})],
  [
    withPWA,
    {
      pwa: {
        dest: "public",
        disable: process.env.NODE_ENV === "development",
        register: true,
        sw: "/sw.js",
        // runtimeCaching,
      },
    },
  ],
  [nextConfig],
]);
