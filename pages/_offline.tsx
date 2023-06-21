import { Heading, Text } from "@chakra-ui/react"
import type { GetStaticPropsContext, NextPage } from "next"
import dynamic from "next/dynamic"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const Wrapper = dynamic(() => import("@/components/Layout/Wrapper"))
const Container = dynamic(() => import("@/components/Layout/Container"))

export async function getStaticProps(context: GetStaticPropsContext) {
  const translation = await serverSideTranslations(context.locale as string, [
    "common"
  ])

  return {
    props: {
      ...translation
    },
    revalidate: 60
  }
}

const OfflinePage: NextPage = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Heading as="h1">Your are offline</Heading>
          <Text>Reconnect and try again</Text>
        </Container>
      </Wrapper>
    </>
  )
}

export default OfflinePage
