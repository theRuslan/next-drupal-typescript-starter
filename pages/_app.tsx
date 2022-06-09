import "@styles/nprogress.css";
import "../styles/globals.css";

import { appWithTranslation } from "next-i18next";
import getConfig from "next/config";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import React from "react";
import GithubCorner from "react-github-corner";
import TagManager from "react-gtm-module";

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const { events } = useRouter();
  const { publicRuntimeConfig } = getConfig();

  // Initializing Google Tag Manager once on load with checking for production
  // environment.
  React.useEffect(() => {
    const tagManagerArgs = {
      gtmId: publicRuntimeConfig.gtmId,
    };

    if (process.env.NODE_ENV === "production") {
      TagManager.initialize(tagManagerArgs);
    }
  }, [publicRuntimeConfig.gtmId]);

  // show NProgress indicator according router.events
  React.useEffect(() => {
    events.on("routeChangeStart", () => NProgress.start());
    events.on("routeChangeComplete", () => NProgress.done());
    events.on("routeChangeError", () => NProgress.done());

    return () => {
      events.off("routeChangeStart", () => NProgress.start());
      events.off("routeChangeComplete", () => NProgress.done());
      events.off("routeChangeError", () => NProgress.done());
    };
  }, [events]);

  return (
    <>
      <Component {...pageProps} />
      <GithubCorner href="https://github.com/WakeLab/next-drupal-typescript-starter" />
    </>
  );
};

// https://nextjs.org/docs/advanced-features/measuring-performance
// export function reportWebVitals(metric) {
//   console.log(metric)
// }

// export default appWithTranslation(App);

export default appWithTranslation(App);
