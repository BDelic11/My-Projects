import React from 'react'
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

const LanguageSwitcher = () => {

    const t = useTranslations("Index");

  return (
    <div>
       <Link href="/" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/" locale="fi">
          In Finnish
        </Link>
        <p>{t("welcome")}</p>
    </div>
  )
}

export default LanguageSwitcher