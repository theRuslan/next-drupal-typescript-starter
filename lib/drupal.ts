import { DrupalClient } from "next-drupal";

export const drupal = new DrupalClient(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL,
  {
    debug: false,
    apiPrefix: "/jsonapi",
    frontPage: process.env.DRUPAL_FRONT_PAGE,
    previewSecret: process.env.DRUPAL_PREVIEW_SECRET,
    withAuth: true,
    auth: {
      clientId: process.env.DRUPAL_CLIENT_ID,
      clientSecret: process.env.DRUPAL_CLIENT_SECRET,
    },
  }
);
