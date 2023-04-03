import { useTranslate, ITranslate } from "@/utils/translate.util";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function RelatedDownload() {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <div className="related-download">
      <h3>{t("title")}</h3>
      <ul>
        <li>
          <Link href="#">
            <a>
              <i className="flaticon-pdf-file"></i>
              {t("historicalBrief")}
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <i className="flaticon-pdf-file"></i>

              {t("college")}
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <i className="flaticon-pdf-file"></i>
              {t("regulations")}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default RelatedDownload;

const translate: ITranslate = {
  title: {
    ar: "ملفات التحميل",
    en: "Download files",
  },

  historicalBrief: {
    ar: "النبذة التاريخية",
    en: "Historical brief",
  },
  college: {
    ar: "الكليات",
    en: "Colleges",
  },
  regulations: {
    ar: "اللوائح",
    en: "Regulations",
  },
};
