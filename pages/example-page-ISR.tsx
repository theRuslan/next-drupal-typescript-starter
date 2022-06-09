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

const ExamplePageISR = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Heading as="h1">Example incremental static regenerated page</Heading>

          <Text>TODO: example incremental static regenerated page</Text>
        </Container>
      </Wrapper>
    </>
  );
};

export default ExamplePageISR;
