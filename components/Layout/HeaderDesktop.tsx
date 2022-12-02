import { useScroll } from "framer-motion";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";

import LogoBox from "@/components/Logos/LogoBox";
import { Flex, Grid } from "@chakra-ui/layout";

const Wrapper = dynamic(() => import("@/components/Layout/Wrapper"));
const Container = dynamic(() => import("@/components/Layout/Container"));
const LanguageSwitcher = dynamic(
  () => import("@/components/Layout/LanguageSwitcher")
);
const Nav = dynamic(() => import("@/components/Layout/Nav"));

const HeaderDesktop = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    scrollY.onChange(() => {
      const scrolled = scrollY.get() > 300;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    });
  }, [isScrolled, scrollY]);

  const Bar = useCallback(
    () => (
      <>
        <Grid gridTemplateColumns="repeat(12,1fr)" width="full">
          <Flex
            gridColumnStart={1}
            gridColumnEnd={2}
            alignItems="center"
            justifyContent="flex-start"
          >
            <LogoBox />
          </Flex>

          <Flex
            gridColumnStart={2}
            gridColumnEnd={9}
            alignItems="center"
            justifyContent="flex-start"
            paddingX="colPadding"
          >
            <Nav />
          </Flex>

          <Flex
            gridColumnStart={9}
            gridColumnEnd={13}
            alignItems="center"
            justifyContent="space-between"
          >
            <LanguageSwitcher />
          </Flex>
        </Grid>
      </>
    ),
    []
  );

  const HeaderDesktopStatic = useCallback(
    () => (
      <Wrapper
        as="header"
        className="HeaderDesktopStatic__wrapper"
        height="65px"
        top="0"
        zIndex="1100"
        marginBottom="-65px"
        paddingTop="unset"
        paddingBottom="unset"
      >
        <Container
          className="HeaderDesktopStatic__container"
          height="full"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Bar />
        </Container>
      </Wrapper>
    ),
    [Bar]
  );

  const HeaderDesktopSticky = useCallback(
    () => (
      <Wrapper
        as="header"
        className="HeaderDesktopSticky__wrapper"
        height="65px"
        paddingTop="unset"
        paddingBottom="unset"
        position="sticky"
        top="0"
        zIndex="1600"
        bgColor="white"
        marginBottom="-65px"
        borderWidth="0 0 1px 0"
        borderStyle="solid"
        borderColor="gray.200"
      >
        <Container
          className="HeaderDesktopSticky__container"
          height="full"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Bar />
        </Container>
      </Wrapper>
    ),
    [Bar]
  );

  return !isScrolled ? <HeaderDesktopStatic /> : <HeaderDesktopSticky />;
};

export default HeaderDesktop;
