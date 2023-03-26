import AboutBanner from "@/components/AboutBanner";
import AdministrationList from "@/components/AdministrationList";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

function AcademicAffairs() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner
        title={t("title")}
        breadcrumbs={[t("universityAdministrations"), t("title")]}
      />

      <div className="terms-condition-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="condition-content">
                <h2>{t("title")}</h2>
                <p>
                  أمين الشؤون العلمية مسؤول أمام نائب رئيس الجامعة ونائبه عن
                  إدارة جميع الأمور الأكاديمية في الجامعة المتعلقة بقبول الطلاب
                  وتطوير المناهج والامتحانات والشهادات والتدريب وشؤون مجلس
                  الشيوخ.
                </p>
              </div>

              <div className="description two bg-f4f6f9">
                <div className="container p-0">
                  <nav>
                    <div
                      className="nav nav-tabs d-flex justify-content-between"
                      id="nav-tab"
                      role="tablist"
                    >
                      <button
                        className="nav-link active"
                        id="nav-overview-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-overview"
                        type="button"
                        role="tab"
                        aria-controls="nav-overview"
                        aria-selected="true"
                      >
                        {t("vision")}
                      </button>
                      <button
                        className="nav-link"
                        id="nav-curriculum-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-curriculum"
                        type="button"
                        role="tab"
                        aria-controls="nav-curriculum"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        {t("mission")}
                      </button>
                      <button
                        className="nav-link"
                        id="nav-instructor-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-instructor"
                        type="button"
                        role="tab"
                        aria-controls="nav-instructor"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        {t("value")}
                      </button>
                      <button
                        className="nav-link"
                        id="nav-reviews-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-reviews"
                        type="button"
                        role="tab"
                        aria-controls="nav-reviews"
                        aria-selected="false"
                        tabIndex={-1}
                      >
                        {t("objective")}
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-overview"
                      role="tabpanel"
                      aria-labelledby="nav-overview-tab"
                    >
                      <div className="overview">
                        <div className="learn mb-2">
                          <h3>
                            <i className="ri-eye-fill"></i> {t("vision")}
                          </h3>
                          <p className="mb-0">{t("visionDesc")}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-curriculum"
                      role="tabpanel"
                      aria-labelledby="nav-curriculum-tab"
                    >
                      <div className="overview">
                        <div className="learn mb-2">
                          <h3>
                            <i className="ri-pencil-fill"></i> {t("mission")}
                          </h3>
                          <p className="mb-0">{t("missionDesc")}</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-instructor"
                      role="tabpanel"
                      aria-labelledby="nav-instructor-tab"
                    >
                      <div className="row">
                        <div className="overview">
                          <div className="learn">
                            <h3>
                              <i className="flaticon-college-graduation"></i>{" "}
                              {t("value")}
                            </h3>
                            <div>{t("valueDesc")}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-reviews"
                      role="tabpanel"
                      aria-labelledby="nav-reviews-tab"
                    >
                      <div className="overview">
                        <div className="learn">
                          <h3>
                            <i className="ri-checkbox-circle-fill"></i>{" "}
                            {t("objective")}
                          </h3>
                          <div>{t("objectiveDesc")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <AdministrationList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AcademicAffairs;

const translate: ITranslate = {
  title: {
    ar: "أمانة الشؤون العلمية",
    en: "Scientific Affairs Secretariat",
  },
  universityAdministrations: {
    ar: "إدارات الجامعة",
    en: "University Administrations",
  },
  vision: {
    ar: "الرؤية",
    en: "Vision",
  },
  visionDesc: {
    ar: "جامعة رائدة ومتميزة في التعليم والبحث العلمي وخدمةالمجتمع وفق معايير الجودة",
    en: `
    A leading and distinguished university in education, scientific research and service
     community according to quality standards.`,
  },
  mission: {
    ar: "المهمة",
    en: "Mission",
  },

  missionDesc: {
    ar: `
    توفير تعليم ممتاز من خلال البرامج الأكاديمية المحسنة والبحث العلمي المبتكر الموجه نحو المجتمع والحفاظ على التوافق مع التغيرات السريعة في عالم اليوم.
    `,
    en: `
    To provide excellent education through enhanced academic programs and innovative, community-oriented scientific research and to keep in tune with the rapid changes in today's world.
    `,
  },
  value: {
    ar: "القيم",
    en: "Value",
  },
  valueDesc: {
    ar: `
    ي سعيها لتحقيق رؤيتها ورسالتها ، تلتزم جامعة بحري بالقيم التالية وتسترشد بها:
    أهمية وتعزيز روح المواطنة.
    الاحترام والاعتراف بالتنوع.
    المصداقية والشفافية.
    الحرية والمسؤولية.
    الالتزام بمعايير الجودة.
    وعي بيئي.
    `,
    en: `
    In its pursuit of its vision and mission, the University of Bahri is committed to and guided by the following values:
    The importance and promotion of citizenship.
    Respect and recognition of diversity.
    Credibility and transparency.
    Freedom and responsibility.
    Commitment to quality standards.
    environmental awareness.
    `,
  },
  objective: {
    ar: "الأهداف",
    en: "Objectives",
  },
  objectiveDesc: {
    ar: `
    بالإضافة إلى أهدافها الانتقالية ، بما في ذلك تعديل أوضاع موظفي شمال السودان في جامعات جنوب السودان السابقة ، والأهداف التي نص عليها قانون الجامعة ، تسعى الجامعة إلى تحقيق الأهداف التالية:
    تمكين الطلاب من تحقيق أهداف مهنية عالية الجودة.
    تحفيز الطلاب على تبني وتطبيق معارفهم ومهاراتهم المكتسبة في حياتهم الشخصية والمهنية.
    توفير فرص التعلم المستمر للعاملين في سوق العمل ، بما يتوافق مع أهداف البيئة المهنية بهدف تطوير كفاءتهم ورفع مستوى الأداء والإنتاجية.
    توثيق العلم وإيصاله باللغتين العربية والإنجليزية ، والاهتمام باللغات والترجمة.
    التركيز بشكل خاص على الجودة والتميز.
    ربط الجامعة بالمؤسسات العلمية والمؤسسات الثقافية والتشريعية في مجال توظيف الخريجين.
    ترسيخ التعاون التربوي والثقافي مع الجامعات المتميزة محلياً وإقليمياً ودولياً.
    `,
    en: `
    In addition to its transitional goals, including adjusting the status of North Sudanese employees in the former South Sudanese universities, and the goals stipulated in the University Law, the university seeks to achieve the following goals:
    Enable students to achieve high quality career goals.
    Motivating students to adopt and apply their acquired knowledge and skills in their personal and professional lives.
    Providing continuous learning opportunities for workers in the labor market, in line with the objectives of the professional environment, with the aim of developing their competence and raising the level of performance and productivity.
    Documenting knowledge and communicating it in Arabic and English, and paying attention to languages and translation.
    Special focus on quality and excellence.
    Linking the university with scientific institutions, cultural and legislative institutions in the field of graduate employment.
    Establishing educational and cultural cooperation with distinguished universities locally, regionally and internationally.
    `,
  },
};
