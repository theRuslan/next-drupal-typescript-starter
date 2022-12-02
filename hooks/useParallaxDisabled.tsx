import { useBreakpointValue } from "@chakra-ui/media-query";

const useParallaxDisabled = () => {
  return useBreakpointValue({ base: true, md: false }, { ssr: false });
};

export default useParallaxDisabled;
