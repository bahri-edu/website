import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function HigherDiplomaProgramme() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <AboutBanner
        title={t("title")}
        breadcrumbs={[t("admission"), t("title")]}
      />

      <Empty />
    </>
  );
}

export default HigherDiplomaProgramme;

const translate: ITranslate = {
  title: {
    ar: "برنامج الدبلوم العالي",
    en: "Higher diploma programme",
  },
  admission: {
    ar: "القبول",
    en: "Admission",
  },
};
