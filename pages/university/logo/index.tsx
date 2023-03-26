import AboutBanner from "@/components/AboutBanner";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

function Logo() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner title={t("title")} breadcrumbs={[t("title")]} />

      <div className="logo-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo-image">
                <img src="/images/logo-bahri.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row inner">
                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>{t("openBookTitle")}</h4>
                    <p>{t("openBookDescription")}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>{t("smallBlackCircleTitle")}</h4>
                    <p>{t("smallBlackCircleDescription")}</p>
                  </div>
                </div>
              </div>

              <div className="row inner">
                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>{t("multiplePicturesOfBooksAndReadersTitle")}</h4>
                    <p>{t("multiplePicturesOfBooksAndReadersDescription")}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>{t("outerFrameShieldTitle")}</h4>
                    <p>{t("outerFrameShieldDescription")}</p>
                  </div>
                </div>
              </div>

              <div className="row inner">
                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>{t("blackColorTitle")}</h4>
                    <p>{t("blackColorDescription")}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>{t("greenColorTitle")}</h4>
                    <p>{t("greenColorDescription")}</p>
                  </div>
                </div>
              </div>

              <div className="row inner">
                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>{t("blackColorTitle")}</h4>
                    <p>{t("blackColorDescription")}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>{t("whiteColorTitle")} </h4>
                    <p>{t("whiteColorDescription")}</p>
                  </div>
                </div>
              </div>

              <div className="row inner">
                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>{t("universityAlphaTitle")}</h4>
                    <p>{t("universityAlphaDescription")}</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>{t("universityNameTitle")}</h4>
                    <p>{t("universityNameDescription")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logo;

const translate: ITranslate = {
  title: {
    ar: "شعار الجامعة",
    en: "University logo",
  },
  openBookTitle: {
    ar: "افتح الكتب",
    en: "Open books",
  },
  openBookDescription: {
    ar: "مصدر للمعرفة يدل على التعلم والتحصيل الدراسي.",
    en: "A source of knowledge that indicates learning and academic achievement.",
  },
  smallBlackCircleTitle: {
    ar: "دوائر سوداء صغيرة خلف الكتب",
    en: "Small black circles behind books",
  },
  smallBlackCircleDescription: {
    ar: "ترميز القراء ",
    en: "coding readers.",
  },
  multiplePicturesOfBooksAndReadersTitle: {
    ar: "صور متعددة للكتب والقراء في دائرة",
    en: "Multiple pictures of books and readers in a circle",
  },
  multiplePicturesOfBooksAndReadersDescription: {
    ar: "يرمز إلى الأنشطة واستمراريتها وتنوعها ، كما أنه يعطي مؤشرا للحوار والعمل الجماعي والكمال.",
    en: "It symbolizes activities, their continuity and diversity, and it also gives an indication of dialogue, teamwork and perfection.",
  },
  outerFrameShieldTitle: {
    ar: "الإطار الخارجي للشعار على شكل درع",
    en: "The outer frame of the emblem is in the form of a shield",
  },
  outerFrameShieldDescription: {
    ar: "تدل على تفرد الجامعة وترمز إلى الكمال والقوة",
    en: "It denotes the uniqueness of the university and symbolizes perfection and strength.",
  },
  blackColorTitle: {
    ar: "اللون الأسود",
    en: "Black Color",
  },
  blackColorDescription: {
    ar: "يرمز إلى الوضوح والاستقامة",
    en: "It symbolizes clarity and integrity.",
  },
  greenColorTitle: {
    ar: "خلفية اللون الأخضر ",
    en: "green color background",
  },
  greenColorDescription: {
    ar: "يرمز إلى التطور في جميع المجالات.",
    en: "It symbolizes development in all areas.",
  },
  whiteColorTitle: {
    ar: "اللون الأبيض",
    en: "White color",
  },
  whiteColorDescription: {
    ar: "يرمز إلى النقاء والشفافية.",
    en: "It symbolizes purity and transparency.",
  },
  universityAlphaTitle: {
    ar: "وسط الدائرة يحتوي على الأحرف الأولى للجامعة باللغتين العربية والإنجليزية",
    en: "The center of the circle contains the initials of the university in both Arabic and English",
  },
  universityAlphaDescription: {
    ar: "التأكيد على الروابط المحلية والإقليمية والعالمية.",
    en: "Emphasis on local, regional and global links.",
  },
  universityNameTitle: {
    ar: "اسم الجامعة مكتوب تحت الشعار باللغتين العربية والإنجليزية",
    en: "The name of the university is written under the logo in both Arabic and English",
  },
  universityNameDescription: {
    ar: "يرمز إلى الجذور العميقة والأصالة",
    en: "It symbolizes deep roots and originality",
  },
};
