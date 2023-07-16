import Link from "next/link"
import { useTranslation } from "next-i18next"

import LogoStarter from "@/components/Logos/LogoStarter"

const LogoBox = () => {
  const { t } = useTranslation()
  const linkTitle = t("backToFront")

  return (
    <Link href="/" title={linkTitle}>
      <LogoStarter boxSize="36px" />
    </Link>
  )
}

export default LogoBox
