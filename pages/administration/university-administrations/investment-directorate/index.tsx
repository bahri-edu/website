import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

function InvestmentDirectorate() {
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

export default InvestmentDirectorate;

const translate: ITranslate = {
  title: {
    ar: "إدارة الإستثمار",
    en: "Investment Management",
  },
  universityAdministrations: {
    ar: "إدارات الجامعة",
    en: "University Administrations",
  },
};
