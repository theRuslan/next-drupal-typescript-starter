import dynamic from "next/dynamic";
import React from "react";

import { useBreakpointValue } from "@chakra-ui/media-query";

const HeaderDesktop = dynamic(() => import("@components/Layout/HeaderDesktop"));
const HeaderMobile = dynamic(() => import("@components/Layout/HeaderMobile"));

const HeaderSwitcher = () => {
  const mobileHeader = useBreakpointValue({ base: true, xl: false });
  const [header, setHeader] = React.useState(<HeaderMobile />);

  React.useEffect(() => {
    mobileHeader && setHeader(<HeaderMobile />);
    !mobileHeader && setHeader(<HeaderDesktop />);
  }, [mobileHeader]);

  return header;
};

export default HeaderSwitcher;
