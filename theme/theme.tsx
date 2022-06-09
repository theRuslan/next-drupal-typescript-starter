import { extendTheme } from "@chakra-ui/react";
import Button from "@theme/components/Button";
import Heading from "@theme/components/Heading";
import Link from "@theme/components/Link";

const theme = extendTheme({
  colors: {
    primary: "#34ffc2",
    secondary: "#f0ff1f",
    selection: "#794aff",
  },

  styles: {
    global: {
      "::selection": {
        backgroundColor: "selection",
        color: "white",
      },
      body: {
        backgroundColor: "white",
        color: "black",
      },
      "b, strong": {
        fontWeight: "extrabold",
      },
    },
  },

  breakpoints: {
    base: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    "2xl": "1400px",
    "3xl": "1900px",
  },

  space: {
    colPadding: "12px",
    colGutter: "24px",
  },

  sizes: {
    container: {
      min: "320px",
      base: "100%",
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1320px",
      "3xl": "1820px",
    },
  },

  fonts: {
    heading: "Manrope, Arial Black, sans-serif",
    body: "Manrope, Arial, sans-serif",
    manrope: "Manrope, Arial, sans-serif",

    weight: {
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },

  fontSizes: {
    110: "6.875rem",
    68: "4.25rem",
    48: "3rem",
    42: "2.625rem",
    32: "2rem",
    28: "1.75rem",
    20: "1.25rem",
    18: "1.125rem",
    16: "1rem",
  },

  textStyles: {},

  components: {
    Button,
    Heading,
    Link,
  },
});

export default theme;
