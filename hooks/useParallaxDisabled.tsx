import { useBreakpointValue } from "@chakra-ui/react"

const useParallaxDisabled = () => {
  return useBreakpointValue({ base: true, md: false }, { ssr: false })
}

export default useParallaxDisabled
