import { useTranslation } from "next-i18next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Key } from "react";

import {
  ContextTranslationProps,
  useContentTranslationsContext,
} from "@/hooks/ContentTranslationsContext";
import { Flex, Link, Text } from "@chakra-ui/layout";
import { ChakraComponent } from "@chakra-ui/system";

type LanguageSwitcherProps = ChakraComponent<
  "div",
  { color?: string; size?: string }
>;

const LanguageSwitcher = (({ size, color, ...props }) => {
  const { locales, asPath, locale: currentLocale, route } = useRouter();
  const { t } = useTranslation("common");
  const { contentTranslationsContextState } = useContentTranslationsContext();

  const SwitcherLink = ({ locale, href }: { locale: string; href: string }) => (
    <NextLink locale={locale} href={href} passHref>
      <Link
        textStyle={locale === currentLocale ? "navigationActive" : "navigation"}
        fontSize={props.fontSize}
        color={color}
        _hover={{ textDecoration: "none" }}
      >
        {t(locale)}
      </Link>
    </NextLink>
  );

  const NextjsMode = () => (
    <>
      {locales &&
        locales.map((locale, key: Key) => (
          <SwitcherLink key={key} locale={locale} href={asPath} />
        ))}
    </>
  );

  const DrupalMode = () => (
    <>
      {locales &&
        locales.map((locale, key: Key) => {
          const translationForLocale = contentTranslationsContextState?.filter(
            (translation: ContextTranslationProps) => {
              return translation.langcode === locale;
            }
          );

          if (translationForLocale && translationForLocale.length > 0) {
            return (
              <SwitcherLink
                key={key}
                locale={locale}
                href={translationForLocale[0].path}
              />
            );
          }

          return (
            <Text
              key={key}
              textStyle={
                locale === currentLocale ? "navigationActive" : "navigation"
              }
              fontSize={props.fontSize}
              color="gray.300"
            >
              {t(locale)}
            </Text>
          );
        })}
    </>
  );

  return (
    <Flex as="nav" direction="row" {...props}>
      {route === "/[...slug]" && contentTranslationsContextState ? (
        <DrupalMode />
      ) : (
        <NextjsMode />
      )}
    </Flex>
  );
}) as LanguageSwitcherProps;

export default LanguageSwitcher;
