import { Translate } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

interface ILink {
  title: Translate;
  href: string;
}

const links: ILink[] = [
  {
    title: {
      ar: " مكتب مدير الجامعة",
      en: "University Chancellor office",
    },
    href: "#",
  },
  {
    title: {
      ar: " رسالة مدير الجامعة",
      en: "University Chancellor Message",
    },
    href: "#",
  },
  {
    title: {
      ar: "السيرة الذاتية لمدير الجامعة",
      en: "University Chancellor CV",
    },
    href: "#",
  },
  {
    title: {
      ar: "مدير الجامعة",
      en: "University Chancellor",
    },
    href: "#",
  },
  {
    title: {
      ar: "نائب مدير الجامعة",
      en: "Vice Chancellor of the University",
    },
    href: "#",
  },
  {
    title: {
      ar: "وكيل الجامعة",
      en: "University agent",
    },
    href: "#",
  },
  {
    title: {
      ar: "أمين الشؤون العلمية",
      en: "Scientific Affairs Secretary",
    },
    href: "#",
  },
  {
    title: {
      ar: "أمانة الشؤون العلمية",
      en: "Scientific Affairs Secretariat",
    },
    href: "#",
  },
  {
    title: {
      ar: "مكتب وكيل الجامعة",
      en: "University Vice Chancellor's Office",
    },
    href: "#",
  },
];

function AdministratorSidebar() {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <div className="condition-right-content pl-20">
      <div className="category-list">
        <h3>{t("title")}</h3>
        <ul>
          {links.map(({ href, title }, x) => (
            <li key={`links-${x}`}>
              <a href={href}>
                {title?.[lng]}
                <i className="ri-arrow-drop-right-fill"></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdministratorSidebar;

const translate: ITranslate = {
  title: {
    ar: "عن الإدارة",
    en: "About University Management",
  },
};
