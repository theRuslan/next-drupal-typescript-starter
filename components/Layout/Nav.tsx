import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import routes from "@/lib/routes";
import { Flex, Text } from "@chakra-ui/layout";
import { ChakraComponent } from "@chakra-ui/system";

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
  ];

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
  );
}) as NavProps;

export default Nav;
