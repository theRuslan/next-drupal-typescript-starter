const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    localeDetection: false,
    debug: process.env.NODE_ENV !== "production",
  },
  localePath: path.resolve("locales"),
  /*
   * Reloading Resources in Development:
   * https://github.com/isaachinman/next-i18next#reloading-resources-in-development
   */
  reloadOnPrerender: process.env.NODE_ENV !== "production",
};
