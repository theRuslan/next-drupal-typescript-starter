// See documentation here: https://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
  apps: [
    {
      name: "starter-frontend",
      cwd: "/var/www/starter-frontend",
      script: "server.js",
      args: "start",
      watch: [".next/BUILD_ID"],
      ignore_watch: [".next/cache", "node_modules", "public"],
      watch_delay: 5,
      max_memory_restart: "400M",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        // NODE_TLS_REJECT_UNAUTHORIZED: 0,
        NEXT_PUBLIC_DRUPAL_BASE_URL: "https://backend.starter.wakelabstudio.ru",
        NEXT_IMAGE_DOMAIN: "backend.starter.wakelabstudio.ru",
        DRUPAL_SITE_ID: "XXXXXXXX",
        DRUPAL_FRONT_PAGE: "/node",
        DRUPAL_PREVIEW_SECRET: "XXXXXXXX",
        DRUPAL_CLIENT_ID: "XXXXXXXX",
        DRUPAL_CLIENT_SECRET: "XXXXXXXX",
        NEXT_PUBLIC_GA_ID: "UA-XXXXXXXXX-X",
        NEXT_PUBLIC_YM_ID: "XXXXXXXX",
      },
    },
  ],
};
