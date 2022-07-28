import { useScroll } from "framer-motion";
import { useTranslation } from "next-i18next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

import { IconButton } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import LogoBox from "@components/Logos/LogoBox";

const Wrapper = dynamic(() => import("@components/Layout/Wrapper"));
const Container = dynamic(() => import("@components/Layout/Container"));
const IconClose = dynamic(() => import("@icons/IconClose"));
const IconMenu = dynamic(() => import("@components/Icons/IconMenu"));

const LanguageSwitcher = dynamic(
  () => import("@components/Layout/LanguageSwitcher")
);

const Nav = dynamic(() => import("@components/Layout/Nav"));
// const SearchBox = dynamic(() => import("@components/Layout/SearchBox"));

const HeaderMobile = () => {
  const { t } = useTranslation("common");
  const { events } = useRouter();
  const { scrollY } = useScroll();
  const [extendedState, setExtendedState] = React.useState(false);
  const [isForwardScroll, setIsForwardScroll] = React.useState(false);

  const toggleExtendedState = React.useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      setExtendedState(!extendedState);
    },
    [extendedState]
  );

  React.useEffect(() => {
    const handleRouteChange = () => {
      setExtendedState(false);
    };
    events.on("routeChangeComplete", handleRouteChange);
    return () => {
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, [events]);

  React.useEffect(() => {
    scrollY.onChange(() => {
      const forwardScroll = scrollY.get() > scrollY.getPrevious();
      if (forwardScroll !== isForwardScroll) setIsForwardScroll(forwardScroll);
    });
  }, [isForwardScroll, scrollY]);

  const Bar = React.useCallback(
    () => (
      <Wrapper
        as="header"
        className="HeaderMobile__wrapper"
        position="sticky"
        height="65px"
        top="0"
        zIndex="1100"
        bgColor="white"
        visibility={!isForwardScroll ? "visible" : "hidden"}
        transform={!isForwardScroll ? "none" : "translate(0, -100%)"}
        transition={`all 0.2s ${!isForwardScroll ? "ease-in" : "ease-out"}`}
        marginBottom="-65px"
        paddingTop="unset"
        paddingBottom="unset"
      >
        <Container
          className="HeaderMobile__container"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          paddingX="colPadding"
          height="full"
        >
          <LogoBox />

          <IconButton
            onClick={toggleExtendedState}
            variant="unstyled"
            aria-label={!extendedState ? t("menu") : t("menu_close")}
            icon={<IconMenu boxSize="26px" />}
          />
        </Container>
      </Wrapper>
    ),
    [extendedState, isForwardScroll, t, toggleExtendedState]
  );

  const Extended = React.useCallback(
    () => (
      <Wrapper
        as="header"
        position="fixed"
        top="0"
        zIndex="1300"
        height="full"
        bgColor="white"
        paddingTop="unset"
        paddingBottom="unset"
      >
        <Container flexDirection="column" height="full" paddingX="colPadding">
          <Flex
            direction="row"
            width="full"
            minHeight="65px"
            justifyContent="space-between"
            alignItems="center"
          >
            <LogoBox />

            <LanguageSwitcher fontSize="20" />

            <IconButton
              onClick={toggleExtendedState}
              aria-label={!extendedState ? t("menu") : t("menu_close")}
              variant="unstyled"
              icon={<IconClose boxSize="26px" />}
            />
          </Flex>

          {/* <SearchBox color={initialColor} marginY="5" /> */}

          <Flex
            flexDirection="column"
            flexGrow={1}
            justifyContent="center"
            alignContent="center"
          >
            <Nav
              vertical={true}
              fontSize={{
                base: "24",
                sm: "42",
                md: "50",
                lg: "55",
              }}
              textTransform="lowercase"
              fontFamily="akzidenz"
              width="max-content"
            />
          </Flex>
        </Container>
      </Wrapper>
    ),
    [extendedState, t, toggleExtendedState]
  );

  return extendedState ? <Extended /> : <Bar />;
};

export default HeaderMobile;
