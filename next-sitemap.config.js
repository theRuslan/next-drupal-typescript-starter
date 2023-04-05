/** @type {import('next-sitemap').IConfig} */
const nextSitemapConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["**/_offline", "**/404", "**/search"],

  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/"
      }
    ]
  }
}

module.exports = nextSitemapConfig
