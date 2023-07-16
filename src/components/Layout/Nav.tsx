import { type ChakraComponent, Flex, Text } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"

import routes from "@/lib/routes"

type NavProps = ChakraComponent<
  "div",
  { vertical?: boolean; color?: string; size?: string }
>

const Nav = (({ vertical, ...props }) => {
  const { t } = useTranslation()
  const { route } = useRouter()

  const navData = [
    {
      id: "home",
      path: routes.home
    }
  ]

  return (
    <>
      <Flex as="nav" direction={vertical ? "column" : "row"}>
        {navData.map((item) => (
          <Link key={item.id} href={item.path}>
            <Text
              textStyle={
                route === item.path ? "navigationActive" : "navigation"
              }
              {...props}
            >
              {t(item.id)}
            </Text>
          </Link>
        ))}
      </Flex>
    </>
  )
}) as NavProps

export default Nav
