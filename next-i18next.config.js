const path = require("path");

/**
 * @type {import('next-i18next').UserConfig}
 */
const nextI18nextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    localeDetection: false,
    debug: false,
  },
  localePath: path.resolve("locales"),
  /*
   * Reloading Resources in Development:
   * https://github.com/isaachinman/next-i18next#reloading-resources-in-development
   */
  reloadOnPrerender: process.env.NODE_ENV !== "production",
};

module.exports = nextI18nextConfig;
