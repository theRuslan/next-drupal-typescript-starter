import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";

import { Heading, Link as ChakraLink } from "@chakra-ui/layout";
import generateCanonicalUrl from "@helpers/generateCanonicalUrl";

import type { GetStaticPropsContext, NextPage } from "next/types";

const Wrapper = dynamic(() => import("@components/Layout/Wrapper"));
const Container = dynamic(() => import("@components/Layout/Container"));

export async function getStaticProps(context: GetStaticPropsContext) {
  const translation = await serverSideTranslations(context.locale as string, [
    "common",
  ]);

  return {
    props: {
      ...translation,
    },
    revalidate: 60,
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const { route, locale, defaultLocale } = useRouter();

  const headingLink = (
    <ChakraLink
      href="https://github.com/WakeLab/next-drupal-typescript-starter"
      isExternal
      color="black"
      bgColor="primary"
      paddingX={2}
    >
      {t("frontTitle")}
    </ChakraLink>
  );

  return (
    <>
      <NextSeo
        title={t("frontTitle")}
        description={t("frontDesc")}
        canonical={generateCanonicalUrl(
          route,
          undefined,
          locale,
          defaultLocale
        )}
      />

      <Wrapper>
        <Container>
          <Heading as="h1">
            {t("welcome")} {headingLink}!
          </Heading>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <a href="https://nextjs.org/docs">
            <Heading as="h2">Documentation &rarr;</Heading>
          </a>
          <p>Find in-depth information about Next.js features and API.</p>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <a href="https://nextjs.org/learn">
            <Heading as="h2">Learn &rarr;</Heading>
          </a>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <a href="https://github.com/vercel/next.js/tree/canary/examples">
            <Heading as="h2">Examples &rarr;</Heading>
          </a>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </Container>
      </Wrapper>

      <Wrapper>
        <Container>
          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <Heading as="h2">Deploy &rarr;</Heading>
          </a>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </Container>
      </Wrapper>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Home;
