import dynamic from "next/dynamic";
import React from "react";

import { Box, Flex } from "@chakra-ui/layout";

const HeaderSwitcher = dynamic(
  () => import("@components/Layout/HeaderSwitcher")
);
const Footer = dynamic(() => import("@components/Layout/Footer"));

const Layout = ({ children }: { children: React.ReactNode }) => {
  // const theme = useTheme();
  // console.log("theme :>> ", theme);

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
  );
};

export default Layout;
