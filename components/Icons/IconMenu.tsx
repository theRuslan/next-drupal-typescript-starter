import { Icon } from "@chakra-ui/icons";

import type { ChakraProps } from "@chakra-ui/system";

const IconMenu = (props: ChakraProps) => (
  <Icon viewBox="0 0 26 26" fill="currentColor" {...props}>
    <path d="M0 6C0 5.44772 0.447715 5 1 5H25C25.5523 5 26 5.44772 26 6C26 6.55228 25.5523 7 25 7H1C0.447716 7 0 6.55228 0 6Z" />
    <path d="M0 13C0 12.4477 0.447715 12 1 12H25C25.5523 12 26 12.4477 26 13C26 13.5523 25.5523 14 25 14H1C0.447716 14 0 13.5523 0 13Z" />
    <path d="M0 20C0 19.4477 0.447715 19 1 19H25C25.5523 19 26 19.4477 26 20C26 20.5523 25.5523 21 25 21H1C0.447716 21 0 20.5523 0 20Z" />
  </Icon>
);

export default IconMenu;
