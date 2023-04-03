import AboutBanner from "@/components/AboutBanner";
import CurrentAdministration, {
  currentAdministrationProps,
} from "@/components/CurrentAdministrationComponent";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

function ViceChancellor() {
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

export default ViceChancellor;
const translate: ITranslate = {
  title: {
    ar: "مدير الجامعة",
    en: "Vice Chancellor",
  },

  currentAdministration: {
    ar: "إدارة الجامعة الحالية",
    en: "Current Administration",
  },
};
