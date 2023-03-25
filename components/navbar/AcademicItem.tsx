import { isActive, ITranslate, useTranslate } from "@/utils/translate.util";
import Link from "next/link";
import React from "react";

function AcademicItem({
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
    ${isActive("/academics", pathname) && " active"}
    `}
      >
        {t("academics")}
      </a>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <Link href="/academics/regulations" className="nav-link">
            {t("regulations")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/academics/calendar" className="nav-link">
            {t("calendar")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/academics/students" className="nav-link">
            {t("students")}
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default AcademicItem;

const translate: ITranslate = {
  academics: {
    en: "Academics",
    ar: "الأكاديمية",
  },
  regulations: {
    en: "Regulations",
    ar: " اللوائح",
  },
  calendar: {
    en: "Academic calendar",
    ar: " التقويم الدراسي",
  },
  students: {
    en: "Students",
    ar: " الطلاب",
  },
};
