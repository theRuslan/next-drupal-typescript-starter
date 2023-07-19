import "@/styles/nprogress.css"

import { ChakraBaseProvider } from "@chakra-ui/react"
import { type AppProps } from "next/app"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { appWithTranslation, useTranslation } from "next-i18next"
import { DefaultSeo, OrganizationJsonLd, SocialProfileJsonLd } from "next-seo"
import Nprogress from "nprogress"
import { useEffect } from "react"
import TagManager from "react-gtm-module"

import { ContentTranslationsContextProvider } from "@/hooks/useContentTranslationsContext"
import { manrope } from "@/theme/fonts"
import theme from "@/theme/theme"

const Layout = dynamic(() => import("@/components/Layout/Layout"))
const BPIndicator = dynamic(() => import("@/components/Layout/BPIndicator"))

const App = ({ Component, pageProps }: AppProps) => {
  const { events } = useRouter()
  const { t } = useTranslation()
  const siteName = t("siteName")

  // Initializing Google Tag Manager once on load with checking for production
  // environment.
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: process.env.NEXT_PUBLIC_GTM_ID
    }

    if (process.env.NODE_ENV === "production") {
      TagManager.initialize(tagManagerArgs)
    }
  }, [])

  // show NProgress indicator according router.events
  useEffect(() => {
    events.on("routeChangeStart", () => Nprogress.start())
    events.on("routeChangeComplete", () => Nprogress.done())
    events.on("routeChangeError", () => Nprogress.done())

    return () => {
      events.off("routeChangeStart", () => Nprogress.start())
      events.off("routeChangeComplete", () => Nprogress.done())
      events.off("routeChangeError", () => Nprogress.done())
    }
  }, [events])

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
              type: "image/jpeg"
            }
          ]
        }}
        twitter={{
          cardType: "summary"
          // handle: "@handle",
          // site: "@site",
        }}
        additionalMetaTags={[
          {
            name: "viewport",
            content:
              "width=device-width, height=device-height, initial-scale=1.0, shrink-to-fit=no"
          },
          {
            httpEquiv: "x-ua-compatible",
            content: "IE=edge; chrome=1"
          },
          {
            name: "theme-color",
            content: "#ffffff"
          },
          { name: "application-name", content: siteName },
          {
            name: "apple-mobile-web-app-capable",
            content: "yes"
          },
          {
            name: "apple-mobile-web-app-status-bar-style",
            content: "default"
          },
          {
            name: "apple-mobile-web-app-title",
            content: siteName
          },
          {
            name: "format-detection",
            content: "telephone=no"
          },
          {
            name: "mobile-web-app-capable",
            content: "yes"
          },
          {
            name: "msapplication-config",
            content: "/browserconfig.xml"
          },
          { name: "msapplication-TileColor", content: "#603cba" },
          {
            name: "msapplication-tap-highlight",
            content: "no"
          }
        ]}
        additionalLinkTags={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png"
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png"
          },
          {
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180"
          },
          {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#794aff"
          },
          {
            rel: "shortcut icon",
            href: "/favicon.ico"
          },
          {
            rel: "manifest",
            href: "/site.webmanifest"
          }
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
          "https://t.me/wakelabstudio"
        ]}
      />

      <ChakraBaseProvider resetCSS theme={theme}>
        <ContentTranslationsContextProvider>
          <div className={manrope.className}>
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
            <BPIndicator />
          </div>
        </ContentTranslationsContextProvider>
      </ChakraBaseProvider>
    </>
  )
}

// https://nextjs.org/docs/advanced-features/measuring-performance
// export const reportWebVitals = (metric: NextWebVitalsMetric) => {
//   console.log(metric);
// };

export default appWithTranslation(App)
