import { Box } from "@chakra-ui/layout";
import { forwardRef } from "@chakra-ui/system";

import type { BoxProps } from "@chakra-ui/layout";

const Wrapper = forwardRef<BoxProps, "div">((props, ref) => (
  <Box
    ref={ref}
    // border="2px dashed red"
    width="full"
    paddingTop={{ base: "14", lg: "16", xl: "24" }}
    paddingBottom={{ base: "14", lg: "16", xl: "24" }}
    {...props}
  />
));

export default Wrapper;
