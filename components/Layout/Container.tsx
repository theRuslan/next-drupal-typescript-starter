import { Flex } from "@chakra-ui/layout";
import { forwardRef } from "@chakra-ui/system";

import type { FlexProps } from "@chakra-ui/layout";

const Container = forwardRef<FlexProps, "div">((props, ref) => (
  <Flex
    ref={ref}
    // border="1px dashed blue"
    flexDirection="column"
    marginX="auto"
    marginY={{ base: "20", lg: "30", lx: "40" }}
    minWidth={{
      base: "container.min",
      // xs: "container.min",
      sm: "container.sm",
      md: "container.md",
      lg: "container.lg",
      xl: "container.xl",
      // xxl: "container.xxl",
      "2xl": "container.2xl",
      // "3xl": "container.3xl",
    }}
    maxWidth={{
      base: "container.base",
      // xs: "container.xs",
      sm: "container.sm",
      md: "container.md",
      lg: "container.lg",
      xl: "container.xl",
      // xxl: "container.xxl",
      "2xl": "container.2xl",
      // "3xl": "container.3xl",
    }}
    {...props}
  />
));

export default Container;
