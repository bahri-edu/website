import { isActive, ITranslate, useTranslate } from "@/utils/translate.util";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function AdministrationItem({
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
    ${isActive("/administration", pathname) && " active"}
    `}
      >
        {t("administration")}
      </a>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <a href="#" className="nav-link  dropdown-toggle">
            {t("viceChancellor")}
          </a>
          <ul className="dropdown-menu tow">
            <li className="nav-item">
              <Link
                href="/administration/vice-chancellor/office"
                className="nav-link"
              >
                {t("viceChancellorOffice")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/vice-chancellor/message"
                className="nav-link"
              >
                {t("viceChancellorMessage")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/vice-chancellor/cv"
                className="nav-link"
              >
                {t("viceChancellorCv")}
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link dropdown-toggle">
            {t("currentAdministration")}
          </a>
          <ul className="dropdown-menu tow">
            <li className="nav-item">
              <Link
                href="/administration/current-administration/vice-chancellor"
                className="nav-link"
              >
                {t("viceChancellor")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/current-administration/deputy-vice-chancellor"
                className="nav-link"
              >
                {t("deputyViceChancellor")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/current-administration/the-principal"
                className="nav-link"
              >
                {t("principal")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/current-administration/secretary-of-scientific-affairs"
                className="nav-link"
              >
                {t("affairsSecretary")}
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <a href="#" className="nav-link dropdown-toggle">
            {t("universityDepartment")}
          </a>
          <ul className="dropdown-menu tow">
            <li className="nav-item">
              <Link
                href="/administration/university-administrations/academic-affairs"
                className="nav-link"
              >
                {t("affairsSecretary")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/university-administrations/principle-office"
                className="nav-link"
              >
                {t("Office")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/university-administrations/human-resources"
                className="nav-link"
              >
                {t("HumanResource")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                href="/administration/university-administrations/cultural-relations-and-information"
                className="nav-link"
              >
                {t("culturalRelations")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/university-administrations/financial-controller-office"
                className="nav-link"
              >
                {t("financialManagement")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/university-administrations/investment-directorate"
                className="nav-link"
              >
                {t("investmentManagement")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/university-administrations/quality-management-and-development"
                className="nav-link"
              >
                {t("qualityManagement")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/university-administrations/services-management"
                className="nav-link"
              >
                {t("servicesManagement")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/university-administrations/medical-and-health-services-unit"
                className="nav-link"
              >
                {t("healthUnit")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/administration/university-administrations/university-police"
                className="nav-link"
              >
                {t("guard")}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  );
}

export default AdministrationItem;

const translate: ITranslate = {
  administration: {
    en: "Administration",
    ar: "الإدارة",
  },
  viceChancellor: {
    en: " vice-chancellor",
    ar: "مدير الجامعة",
  },
  viceChancellorOffice: {
    en: "vice-chancellor Office",
    ar: "مكتب مدير الجامعة",
  },
  viceChancellorMessage: {
    en: "vice-chancellor vMessage",
    ar: " رسالة مدير الجامعة",
  },
  viceChancellorCv: {
    en: "vice-chancellor CV",
    ar: "السيرة الذاتية لمدير الجامعة",
  },
  currentAdministration: {
    en: "current university administration",
    ar: "إدارة الجامعة الحالية",
  },
  deputyViceChancellor: {
    en: "Deputy Vice Chancellor",
    ar: " نائب مدير الجامعة",
  },
  principal: {
    en: "the-principal",
    ar: "وكيل الجامعة",
  },
  affairsSecretary: {
    en: "Scientific Affairs Secretary",
    ar: "أمين الشؤون العلمية",
  },
  universityDepartment: {
    en: "University departments",
    ar: " إدارات الجامعة",
  },
  affairsSecretary2: {
    en: "Scientific Affairs Secretariat",
    ar: " أمانة الشؤون العلمية",
  },
  Office: {
    en: "University Vice Chancellor's Office",
    ar: " مكتب وكيل الجامعة",
  },
  HumanResource: {
    en: "Human Resource Management",
    ar: " إدارة الموارد البشرية",
  },
  culturalRelations: {
    en: "Managing cultural relations",
    ar: " إدارة العلاقات الثقافية",
  },
  financialManagement: {
    en: "Financial Management",
    ar: " الإدارة المالية",
  },
  investmentManagement: {
    en: "Investment management",
    ar: " إدارة الإستثمار",
  },
  qualityManagement: {
    en: "Quality management and development",
    ar: "إدارة الجودة و التطوير",
  },
  servicesManagement: {
    en: "Services management",
    ar: "إدارة الخدمات",
  },
  healthUnit: {
    en: "Medical and health services unit",
    ar: " وحدة الخدمات الطبية و الصحية",
  },
  guard: {
    en: "University Guard Department",
    ar: "ooo",
  },
  ooo: {
    en: "ooo",
    ar: "ooo",
  },
};
