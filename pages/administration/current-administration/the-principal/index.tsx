import AboutBanner from "@/components/AboutBanner";
import CurrentAdministration, {
  currentAdministrationProps,
} from "@/components/CurrentAdministrationComponent";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

function ThePrincipal() {
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

export default ThePrincipal;
const translate: ITranslate = {
  title: {
    ar: " وكيل الجامعة",
    en: "the Principal",
  },
  currentAdministration: {
    ar: "إدارة الجامعة الحالية",
    en: "Current Administration",
  },
};
