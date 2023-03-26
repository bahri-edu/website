import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

function Office() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner
        title={t("title")}
        breadcrumbs={[t("viceChancellor"), t("title")]}
      />

      <Empty />
    </>
  );
}

export default Office;

const translate: ITranslate = {
  title: {
    ar: " السيرة الذاتية لمدير الجامعة",
    en: "vice-chancellor CV",
  },
  viceChancellor: {
    ar: "مدير الجامعة",
    en: "vice-chancellor",
  },
};
