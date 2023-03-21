import { ITranslate, useTranslate } from "@/utils/translate.util";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function AboutBanner({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: string[];
}) {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <div className="page-banner-area bg-2">
      <div className="container">
        <div className="page-banner-content">
          <h1>{title}</h1>
          <ul>
            <li>
              <Link href="/">{t("home")}</Link>
            </li>

            {breadcrumbs.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;

const translate: ITranslate = {
  home: {
    en: "Home",
    ar: "الرئيسية",
  },
};
