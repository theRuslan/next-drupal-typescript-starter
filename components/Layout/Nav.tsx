import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import { Flex, Text } from "@chakra-ui/layout";
import { ChakraComponent } from "@chakra-ui/system";
import routes from "@lib/routes";

type NavProps = ChakraComponent<
  "div",
  { vertical?: boolean; color?: string; size?: string }
>;

const Nav = (({ vertical, size, ...props }) => {
  const { t } = useTranslation("common");
  const { route } = useRouter();

  const navData = [
    {
      id: "home",
      path: routes.home,
    },
    {
      id: "examplePageSSG",
      path: routes.examplePageSSG,
    },
    {
      id: "examplePageSSR",
      path: routes.examplePageSSR,
    },
    {
      id: "examplePageISR",
      path: routes.examplePageISR,
    },
    {
      id: "exampleSearch",
      path: routes.exampleSearch,
    },
  ];

  return (
    <>
      <Flex as="nav" direction={vertical ? "column" : "row"}>
        {navData.map((item) => (
          <Link key={item.id} href={item.path}>
            <a>
              <Text
                textStyle={
                  route === item.path ? "navigationActive" : "navigation"
                }
                {...props}
              >
                {t(item.id)}
              </Text>
            </a>
          </Link>
        ))}
      </Flex>
    </>
  );
}) as NavProps;

export default Nav;
