import { ITranslate, useTranslate } from "@/utils/translate.util";
import Link from "next/link";
import React from "react";

function CentreItem({
  pathname,
  locale,
}: {
  pathname: string;
  locale: string | undefined;
}) {
  const t = useTranslate(translate, locale);
  return (
    <li className="nav-item">
      <a href="#" className="nav-link dropdown-toggle">
        {t("centres")}
      </a>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <Link
            href="/centres/human-resource-development-and-continual-education"
            className="nav-link"
          >
            {t("hrDevelopment")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/centres/peace-and-development" className="nav-link">
            {t("peaceDevelopment")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/centres/language-and-translation" className="nav-link">
            {t("languageTranslation")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/centres/one-health" className="nav-link">
            {t("oneHealth")}
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default CentreItem;

const translate: ITranslate = {
  centres: {
    en: "Centres",
    ar: "المراكز",
  },
  hrDevelopment: {
    en: "Human resource development and continuing education",
    ar: "تنمية الموارد البشرية و التعليم المستمر",
  },
  peaceDevelopment: {
    en: "Peace and development",
    ar: " السلام والتنمية",
  },
  languageTranslation: {
    en: "Languages ​​and translation",
    ar: "اللغات والترجمة",
  },
  oneHealth: {
    en: "The one health",
    ar: "الصحة الواحده",
  },
};
