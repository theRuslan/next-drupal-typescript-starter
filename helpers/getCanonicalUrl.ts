import { NextRouter } from "next/router";

const getCanonicalUrl = (router: NextRouter, pathAlias?: string) => {
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${
    router.locale !== router.defaultLocale ? "/" + router.locale : ""
  }${pathAlias ? pathAlias : router.route !== "/" ? router.route : ""}`;

  return canonicalUrl;
};

export default getCanonicalUrl;
