import { ITranslate, useTranslate } from "@/utils/translate.util";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function AboutAdditionalInformation() {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <div className="additional-information">
      <h3>{t("title")}</h3>
      <div className="list">
        <ul>
          <li>
            <Link href="#">{t("vission")}</Link>
          </li>
          <li>
            <Link href="#">{t("historicalBackground")}</Link>
          </li>
          <li>
            <Link href="#">{t("fact")}</Link>
          </li>
          <li>
            <Link href="#">{t("logo")}</Link>
          </li>
          <li>
            <Link href="#">{t("universityCouncil")}</Link>
          </li>
          <li>
            <Link href="#">{t("deansCouncil")}</Link>
          </li>
          <li>
            <Link href="#">{t("professorsCouncil")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutAdditionalInformation;

const translate: ITranslate = {
  title: {
    ar: "معلومات عن الجامعة",
    en: "Information about the university",
  },
  vission: {
    ar: "الرؤية و الرسالة",
    en: "Vision and Mission",
  },
  historicalBackground: {
    ar: "الخلفية التاريخية",
    en: "Historical background",
  },
  fact: {
    ar: "حقائق و أرقام",
    en: "Facts and figures",
  },
  logo: {
    ar: "شعار الجامعة",
    en: "University logo",
  },
  universityCouncil: {
    ar: "مجلس الجامعة",
    en: "University Council",
  },
  deansCouncil: {
    ar: "مجلس العمداء",
    en: "Council of Deans",
  },
  professorsCouncil: {
    ar: "مجلس الأساتذة",
    en: "Professors Council",
  },
};
