declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production" | "test"
      NEXT_PUBLIC_SITE_URL: string
      NEXT_PUBLIC_GTM_ID: string
      NEXT_PUBLIC_DRUPAL_BASE_URL: string
      NEXT_IMAGE_DOMAIN: string
      DRUPAL_CLIENT_ID: string
      DRUPAL_CLIENT_SECRET: string
      DRUPAL_PREVIEW_SECRET: string
      DRUPAL_REVALIDATE_SECRET: string
      DRUPAL_SITE_ID: string
      DRUPAL_FRONT_PAGE: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
