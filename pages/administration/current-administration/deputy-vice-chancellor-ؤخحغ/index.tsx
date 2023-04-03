import AboutBanner from "@/components/AboutBanner";
import CurrentAdministration from "@/components/CurrentAdministrationComponent";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

function DeputyViceChancellor() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner
        title={t("title")}
        breadcrumbs={[t("currentAdministration"), t("title")]}
      />

      {/* <CurrentAdministration
        {...{ ...currentAdministrationProps, position: t("title") }}
      /> */}
    </>
  );
}

export default DeputyViceChancellor;
const translate: ITranslate = {
  title: {
    ar: "نائب مدير الجامعة",
    en: "Deputy Vice Chancellor",
  },
  currentAdministration: {
    ar: "إدارة الجامعة الحالية",
    en: "Current Administration",
  },
};
