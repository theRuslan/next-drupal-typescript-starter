import getConfig from "next/config";

const generateCanonicalUrl = (
  route: string,
  pathAlias?: string,
  locale?: string,
  defaultLocale?: string
) => {
  const { publicRuntimeConfig } = getConfig();

  const canonicalDomain = publicRuntimeConfig.canonicalDomain;

  const localePrefix =
    locale && defaultLocale && locale !== defaultLocale ? "/" + locale : "";

  const path = pathAlias ? pathAlias : route !== "/" ? route : "";

  const canonicalUrl = `${canonicalDomain}${localePrefix}${path}`;

  return canonicalUrl;
};

export default generateCanonicalUrl;
