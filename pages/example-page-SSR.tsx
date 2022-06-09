import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

import { Heading, Text } from "@chakra-ui/layout";

import type { GetServerSidePropsContext } from "next/types";

const Wrapper = dynamic(() => import("@components/Layout/Wrapper"));
const Container = dynamic(() => import("@components/Layout/Container"));

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const translation = await serverSideTranslations(context.locale as string, [
    "common",
  ]);

  return {
    props: {
      ...translation,
    },
  };
}

const ExamplePageSSR = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Heading as="h1">Example server-side rendered page</Heading>

          <Text>TODO: example server-side rendered page</Text>
        </Container>
      </Wrapper>
    </>
  );
};

export default ExamplePageSSR;
