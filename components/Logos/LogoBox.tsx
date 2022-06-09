import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";

import LogoStarter from "@components/Logos/LogoStarter";

const LogoBox = () => {
  const { t } = useTranslation("common");

  return (
    <Link href="/">
      <a title={t("backToFront")}>
        <LogoStarter boxSize="36px" />
      </a>
    </Link>
  );
};

export default React.memo(LogoBox);
