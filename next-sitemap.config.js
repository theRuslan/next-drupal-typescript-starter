/**
 * @type {import('next-sitemap').IConfig}
 */
const nextSitemapConfig = {
  siteUrl: process.env.SITE_URL || "https://starter.wakelabstudio.ru",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
};

module.exports = nextSitemapConfig;
