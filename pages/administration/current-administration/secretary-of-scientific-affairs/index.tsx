import AboutBanner from "@/components/AboutBanner";
import CurrentAdministration, {
  currentAdministrationProps,
} from "@/components/CurrentAdministration";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

function SecretaryOfScientificAffairs() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner
        title={t("title")}
        breadcrumbs={[t("currentAdministration"), t("title")]}
      />

      <CurrentAdministration
        {...{ ...currentAdministrationProps, position: t("title") }}
      />
    </>
  );
}

export default SecretaryOfScientificAffairs;
const translate: ITranslate = {
  title: {
    ar: " أمين الشؤون العلمية",
    en: "Secretary of Scientific Affairs",
  },
  currentAdministration: {
    ar: "إدارة الجامعة الحالية",
    en: "Current Administration",
  },
};
