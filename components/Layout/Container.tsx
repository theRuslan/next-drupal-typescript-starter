import { Flex, type FlexProps, forwardRef } from "@chakra-ui/react"

const Container = forwardRef<FlexProps, "div">((props, ref) => (
  <Flex
    ref={ref}
    // border="1px dashed blue"
    flexDirection="column"
    marginX="auto"
    marginY={{ base: "20", lg: "30", lx: "40" }}
    minWidth={{
      base: "container.min",
      sm: "container.sm",
      md: "container.md",
      lg: "container.lg",
      xl: "container.xl",
      "2xl": "container.2xl"
      // "3xl": "container.3xl",
    }}
    maxWidth={{
      base: "container.base",
      sm: "container.sm",
      md: "container.md",
      lg: "container.lg",
      xl: "container.xl",
      "2xl": "container.2xl"
      // "3xl": "container.3xl",
    }}
    {...props}
  />
))

export default Container
