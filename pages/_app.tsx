import "@fontsource/manrope/200.css"; // Extra Light
import "@fontsource/manrope/300.css"; // Light
import "@fontsource/manrope/400.css"; // Normal
import "@fontsource/manrope/500.css"; // Medium
import "@fontsource/manrope/600.css"; // Semi bold
import "@fontsource/manrope/700.css"; // Bold
import "@fontsource/manrope/800.css"; // Extra Bold
import "@/styles/nprogress.css";

import { appWithTranslation, useTranslation } from "next-i18next";
import { DefaultSeo, OrganizationJsonLd, SocialProfileJsonLd } from "next-seo";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

import { ContentTranslationsContextProvider } from "@/hooks/ContentTranslationsContext";
// import Fonts from "@/theme/fonts"; // custom self-hosted fonts loading
import theme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/provider";

const Layout = dynamic(() => import("@/components/Layout/Layout"));
const BPIndicator = dynamic(() => import("@/components/Layout/BPIndicator"));

const App = ({ Component, pageProps }: AppProps) => {
  const { events } = useRouter();
  const { t } = useTranslation();
  const siteName = t("siteName");

  // Initializing Google Tag Manager once on load with checking for production
  // environment.
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    };

    if (process.env.NODE_ENV === "production") {
      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  // show NProgress indicator according router.events
  useEffect(() => {
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
      <DefaultSeo
        defaultTitle={siteName}
        titleTemplate={`%s | ${siteName}`}
        description={siteName}
        openGraph={{
          type: "website",
          url: process.env.NEXT_PUBLIC_SITE_URL,
          title: siteName,
          description: siteName,
          site_name: siteName,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
              width: 1200,
              height: 630,
              alt: siteName,
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          cardType: "summary",
          // handle: "@handle",
          // site: "@site",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content:
              "width=device-width, height=device-height, initial-scale=1.0, shrink-to-fit=no",
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1",
          },
          {
            name: "theme-color",
            content: "#ffffff",
          },
          { name: "application-name", content: siteName },
          {
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            name: "apple-mobile-web-app-status-bar-style",
            content: "default",
          },
          {
            name: "apple-mobile-web-app-title",
            content: siteName,
          },
          {
            name: "format-detection",
            content: "telephone=no",
          },
          {
            name: "mobile-web-app-capable",
            content: "yes",
          },
          {
            name: "msapplication-config",
            content: "/browserconfig.xml",
          },
          { name: "msapplication-TileColor", content: "#603cba" },
          {
            name: "msapplication-tap-highlight",
            content: "no",
          },
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
          {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#794aff",
          },
          {
            rel: "shortcut icon",
            href: "/favicon.ico",
          },
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
          // {
          //   rel: "preload",
          //   href: "https://www.test.ie/font/sample-font.woof2",
          //   as: "font",
          //   type: "font/woff2",
          //   crossOrigin: "anonymous",
          // },
        ]}
      />

      <OrganizationJsonLd
        type="Organization"
        name={siteName}
        url={process.env.NEXT_PUBLIC_SITE_URL}
        logo={`${process.env.NEXT_PUBLIC_SITE_URL}/logo.png`}
      />
      <SocialProfileJsonLd
        type="Organization"
        name={siteName}
        url={process.env.NEXT_PUBLIC_SITE_URL}
        sameAs={[
          "https://www.facebook.com/wakelabstudio",
          "https://www.instagram.com/wakelabstudio/",
          "https://t.me/wakelabstudio",
        ]}
      />

      {/* <Fonts /> */}

      <ChakraProvider resetCSS theme={theme}>
        <ContentTranslationsContextProvider>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ContentTranslationsContextProvider>

        <BPIndicator />
      </ChakraProvider>
    </>
  );
};

// https://nextjs.org/docs/advanced-features/measuring-performance
// export const reportWebVitals = (metric: NextWebVitalsMetric) => {
//   console.log(metric);
// };

export default appWithTranslation(App);
