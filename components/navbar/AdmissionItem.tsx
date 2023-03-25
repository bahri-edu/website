import { isActive, ITranslate, useTranslate } from "@/utils/translate.util";
import Link from "next/link";
import React from "react";

function AdmissionItem({
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
    ${isActive("/admission", pathname) && " active"}
    `}
      >
        {t("admission")}
      </a>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <Link href="/admission/overview" className="nav-link">
            {t("overview")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/admission/postgraduate-programs" className="nav-link">
            {t("postgraduate")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/admission/higher-diploma-programme" className="nav-link">
            {t("higherDiploma")}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/admission/university-studies-programs"
            className="nav-link"
          >
            {t("bachelor")}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/admission/university-diploma-programs"
            className="nav-link"
          >
            {t("univDiploma")}
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default AdmissionItem;

const translate: ITranslate = {
  admission: {
    en: "Admission",
    ar: "القبول",
  },
  overview: {
    en: "Overview",
    ar: "نظرة عامة",
  },
  postgraduate: {
    en: "Postgraduate programme",
    ar: "برنامج الدراسات العليا",
  },
  higherDiploma: {
    en: "Higher diploma programme",
    ar: " برنامج الدبلوم العالي",
  },
  bachelor: {
    en: "Bachelor's program",
    ar: " برنامج البكالريوس",
  },
  univDiploma: {
    en: "University diploma programme",
    ar: "برنامج الدبلوم الجامعي",
  },
};
