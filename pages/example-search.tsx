import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

import { Heading, Text } from "@chakra-ui/layout";

import type { GetStaticPropsContext } from "next/types";

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

const ExampleSearch = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Heading as="h1">Example search page</Heading>

          <Text>TODO: example search page</Text>
        </Container>
      </Wrapper>
    </>
  );
};

export default ExampleSearch;
