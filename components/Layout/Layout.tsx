import { Box, Flex } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import { ReactNode } from "react"

const HeaderSwitcher = dynamic(
  () => import("@/components/Layout/HeaderSwitcher")
)
const Footer = dynamic(() => import("@/components/Layout/Footer"))

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Flex
        className="Layout"
        direction="column"
        justifyContent="space-between"
        maxWidth="full"
        minHeight="100vh"
      >
        <HeaderSwitcher />

        <Box as="main" className="MainContent" flexGrow={1}>
          {children}
        </Box>

        <Footer />
      </Flex>
    </>
  )
}

export default Layout
