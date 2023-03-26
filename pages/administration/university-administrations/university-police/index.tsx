import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

function UniversityPolice() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner
        title={t("title")}
        breadcrumbs={[t("universityAdministrations"), t("title")]}
      />

      <Empty />
    </>
  );
}

export default UniversityPolice;

const translate: ITranslate = {
  title: {
    ar: "إدارة الحرس الجامعي",
    en: "University Guard Department",
  },
  universityAdministrations: {
    ar: "إدارات الجامعة",
    en: "University Administrations",
  },
};
