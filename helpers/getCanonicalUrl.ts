import getConfig from "next/config";

import type { NextRouter } from "next/router";

const getCanonicalUrl = (router: NextRouter, pathAlias?: string) => {
  const { publicRuntimeConfig } = getConfig();
  const canonicalDomain = publicRuntimeConfig.canonicalDomain;

  const canonicalUrl = `${canonicalDomain}${
    router.locale !== router.defaultLocale ? "/" + router.locale : ""
  }${pathAlias ? pathAlias : router.route !== "/" ? router.route : ""}`;

  return canonicalUrl;
};

export default getCanonicalUrl;
