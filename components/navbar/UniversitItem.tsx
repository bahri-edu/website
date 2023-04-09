import { isActive, ITranslate, useTranslate } from "@/utils/translate.util";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export enum CouncilTypeEnum {
  UNIVERSITYCOUNCIL = "university-council",
  DEANSCOUNCIL = "deans-council",
  PROFESSORSCOUNCIL = "professors-council",
}

function UniversitItem({
  pathname,
  locale,
}: {
  pathname: string;
  locale: string | undefined;
}) {
  const t = useTranslate(translate, locale);
  return (
    <li className="nav-item">
      <a
        href="#"
        className={`nav-link dropdown-toggle   
      ${isActive("/university", pathname) && " active"}
      `}
      >
        {t("university")}
      </a>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <Link href="/university/vision-and-mission" className="nav-link">
            {t("vision")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/university/historical-background" className="nav-link">
            {t("historical")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/university/facts-and-figures" className="nav-link">
            {t("fact")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/university/logo" className="nav-link">
            {t("logo")}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href={`/university/councils/${CouncilTypeEnum.UNIVERSITYCOUNCIL}`}
            className="nav-link"
          >
            {t("univCouncil")}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href={`/university/councils/${CouncilTypeEnum.DEANSCOUNCIL}`}
            className="nav-link"
          >
            {t("deansCouncil")}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href={`/university/councils/${CouncilTypeEnum.PROFESSORSCOUNCIL}`}
            className="nav-link"
          >
            {t("profCouncil")}
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default UniversitItem;

const translate: ITranslate = {
  university: {
    en: "University",
    ar: "عن الجامعة",
  },
  vision: {
    en: " Vision & Mission",
    ar: " الرؤية و الرسالة",
  },
  historical: {
    en: "Historical background",
    ar: " الخلفية التاريخية",
  },
  fact: {
    en: "Facts and figures",
    ar: " حقائق و أرقام",
  },

  logo: {
    en: "University logo",
    ar: " شعار الجامعة",
  },
  univCouncil: {
    en: "University Council",
    ar: " مجلس الجامعة",
  },
  deansCouncil: {
    en: "Council of Deans",
    ar: "مجلس العمداء",
  },
  profCouncil: {
    en: "Professors Council",
    ar: "مجلس الأساتذة",
  },
};
