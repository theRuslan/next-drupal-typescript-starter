const path = require("path");

/** @type {import('next-i18next').UserConfig} */
const nextI18nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    localeDetection: false,
  },
  localePath: path.resolve("locales"),
  defaultNS: "common",
  reloadOnPrerender: process.env.NODE_ENV !== "production",
  debug: false,
};

module.exports = nextI18nextConfig;
