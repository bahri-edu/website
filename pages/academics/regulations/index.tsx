import AboutBanner from "@/components/AboutBanner";
import { Translate } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

interface IRegulation {
  title: Translate;
  description: Translate;
  lists: Translate[];
}

const regulations: IRegulation[] = [
  {
    title: {
      ar: "اللائحة الأكاديمية لبرنامج البكالريوس",
      en: "Academic regulations for the bachelor's program",
    },
    description: {
      ar: "تهدف مديرية تنمية الموارد البشرية إلى تعزيز قيم مثل الصدق والشفافية والإنصاف والاعتراف بالتنوع الفردي وضمان الجودة والدقة والتطوير وتطبيق التكنولوجيا ذات الصلة.",
      en: "The Human Resources Development Directorate aims to promote values such as honesty, transparency, fairness, recognition of individual diversity, quality assurance, accuracy, development and application of relevant technology.",
    },
    lists: [
      {
        ar: "استيفاء معايير الجودة تطبيق نظام موظفي المعلومات.",
        en: "Meeting quality standards Implementing the personnel information system.",
      },
      {
        ar: "الاحترام والاعتراف اعتماد حل قائم على التنظيم لمشاكل الموظفين",
        en: "Respect and recognition Adopt an organization-based solution to employee problems.",
      },
      {
        ar: "تزويد إدارة الجامعة بالنصائح ذات الصلة بإدارة الموارد البشرية",
        en: "Providing the university administration with advice related to human resource management",
      },
      {
        ar: "التقييم المنتظم لموظفي الجامعة",
        en: "Regular evaluation of university staff",
      },
      {
        ar: "تقييم احتياجات الجامعة من الموارد البشرية",
        en: "Evaluating the university's human resources needs.",
      },
      {
        ar: "تعزيز الأداء المهني والتنظيمي",
        en: "Enhance professional and organizational performance",
      },
      {
        ar: "خلق الرضا الوظيفي بين العاملين",
        en: "Create job satisfaction among workers",
      },
    ],
  },
  {
    title: {
      ar: "نظام الإمتحانات",
      en: "Examination system",
    },
    description: {
      ar: "تهدف مديرية تنمية الموارد البشرية إلى تعزيز قيم مثل الصدق والشفافية والإنصاف والاعتراف بالتنوع الفردي وضمان الجودة والدقة والتطوير وتطبيق التكنولوجيا ذات الصلة.",
      en: "The Human Resources Development Directorate aims to promote values such as honesty, transparency, fairness, recognition of individual diversity, quality assurance, accuracy, development and application of relevant technology.",
    },
    lists: [
      {
        ar: "استيفاء معايير الجودة تطبيق نظام موظفي المعلومات.",
        en: "Meeting quality standards Implementing the personnel information system.",
      },
      {
        ar: "الاحترام والاعتراف اعتماد حل قائم على التنظيم لمشاكل الموظفين",
        en: "Respect and recognition Adopt an organization-based solution to employee problems.",
      },
      {
        ar: "تزويد إدارة الجامعة بالنصائح ذات الصلة بإدارة الموارد البشرية",
        en: "Providing the university administration with advice related to human resource management",
      },
      {
        ar: "التقييم المنتظم لموظفي الجامعة",
        en: "Regular evaluation of university staff",
      },
      {
        ar: "تقييم احتياجات الجامعة من الموارد البشرية",
        en: "Evaluating the university's human resources needs.",
      },
      {
        ar: "تعزيز الأداء المهني والتنظيمي",
        en: "Enhance professional and organizational performance",
      },
      {
        ar: "خلق الرضا الوظيفي بين العاملين",
        en: "Create job satisfaction among workers",
      },
    ],
  },
  {
    title: {
      ar: "لائحة التجميد و الإستقالة",
      en: "List of freezing and resignation",
    },
    description: {
      ar: "تهدف مديرية تنمية الموارد البشرية إلى تعزيز قيم مثل الصدق والشفافية والإنصاف والاعتراف بالتنوع الفردي وضمان الجودة والدقة والتطوير وتطبيق التكنولوجيا ذات الصلة.",
      en: "The Human Resources Development Directorate aims to promote values such as honesty, transparency, fairness, recognition of individual diversity, quality assurance, accuracy, development and application of relevant technology.",
    },
    lists: [
      {
        ar: "استيفاء معايير الجودة تطبيق نظام موظفي المعلومات.",
        en: "Meeting quality standards Implementing the personnel information system.",
      },
      {
        ar: "الاحترام والاعتراف اعتماد حل قائم على التنظيم لمشاكل الموظفين",
        en: "Respect and recognition Adopt an organization-based solution to employee problems.",
      },
      {
        ar: "تزويد إدارة الجامعة بالنصائح ذات الصلة بإدارة الموارد البشرية",
        en: "Providing the university administration with advice related to human resource management",
      },
      {
        ar: "التقييم المنتظم لموظفي الجامعة",
        en: "Regular evaluation of university staff",
      },
      {
        ar: "تقييم احتياجات الجامعة من الموارد البشرية",
        en: "Evaluating the university's human resources needs.",
      },
      {
        ar: "تعزيز الأداء المهني والتنظيمي",
        en: "Enhance professional and organizational performance",
      },
      {
        ar: "خلق الرضا الوظيفي بين العاملين",
        en: "Create job satisfaction among workers",
      },
    ],
  },
  {
    title: {
      ar: "لائحة تحويل الطلاب",
      en: "Student transfer list",
    },
    description: {
      ar: "تهدف مديرية تنمية الموارد البشرية إلى تعزيز قيم مثل الصدق والشفافية والإنصاف والاعتراف بالتنوع الفردي وضمان الجودة والدقة والتطوير وتطبيق التكنولوجيا ذات الصلة.",
      en: "The Human Resources Development Directorate aims to promote values such as honesty, transparency, fairness, recognition of individual diversity, quality assurance, accuracy, development and application of relevant technology.",
    },
    lists: [
      {
        ar: "استيفاء معايير الجودة تطبيق نظام موظفي المعلومات.",
        en: "Meeting quality standards Implementing the personnel information system.",
      },
      {
        ar: "الاحترام والاعتراف اعتماد حل قائم على التنظيم لمشاكل الموظفين",
        en: "Respect and recognition Adopt an organization-based solution to employee problems.",
      },
      {
        ar: "تزويد إدارة الجامعة بالنصائح ذات الصلة بإدارة الموارد البشرية",
        en: "Providing the university administration with advice related to human resource management",
      },
      {
        ar: "التقييم المنتظم لموظفي الجامعة",
        en: "Regular evaluation of university staff",
      },
      {
        ar: "تقييم احتياجات الجامعة من الموارد البشرية",
        en: "Evaluating the university's human resources needs.",
      },
      {
        ar: "تعزيز الأداء المهني والتنظيمي",
        en: "Enhance professional and organizational performance",
      },
      {
        ar: "خلق الرضا الوظيفي بين العاملين",
        en: "Create job satisfaction among workers",
      },
    ],
  },
  {
    title: {
      ar: "لائحة المصروفات ورسوم التسجيل",
      en: "List of expenses and registration fees",
    },
    description: {
      ar: "تهدف مديرية تنمية الموارد البشرية إلى تعزيز قيم مثل الصدق والشفافية والإنصاف والاعتراف بالتنوع الفردي وضمان الجودة والدقة والتطوير وتطبيق التكنولوجيا ذات الصلة.",
      en: "The Human Resources Development Directorate aims to promote values such as honesty, transparency, fairness, recognition of individual diversity, quality assurance, accuracy, development and application of relevant technology.",
    },
    lists: [
      {
        ar: "استيفاء معايير الجودة تطبيق نظام موظفي المعلومات.",
        en: "Meeting quality standards Implementing the personnel information system.",
      },
      {
        ar: "الاحترام والاعتراف اعتماد حل قائم على التنظيم لمشاكل الموظفين",
        en: "Respect and recognition Adopt an organization-based solution to employee problems.",
      },
      {
        ar: "تزويد إدارة الجامعة بالنصائح ذات الصلة بإدارة الموارد البشرية",
        en: "Providing the university administration with advice related to human resource management",
      },
      {
        ar: "التقييم المنتظم لموظفي الجامعة",
        en: "Regular evaluation of university staff",
      },
      {
        ar: "تقييم احتياجات الجامعة من الموارد البشرية",
        en: "Evaluating the university's human resources needs.",
      },
      {
        ar: "تعزيز الأداء المهني والتنظيمي",
        en: "Enhance professional and organizational performance",
      },
      {
        ar: "خلق الرضا الوظيفي بين العاملين",
        en: "Create job satisfaction among workers",
      },
    ],
  },
];

function Regulations() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <AboutBanner
        title={t("title")}
        breadcrumbs={[t("academic"), t("title")]}
      />

      <div className="terms-condition-area ruels pt-100 pb-70">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-12">
              <div className="condition-content">
                <h2>{t("title")}</h2>
              </div>

              <div className="description two">
                <div className="container p-0">
                  <div className="row">
                    <div className="col-lg-4">
                      <nav>
                        <div
                          className="nav nav-tabs d-flex justify-content-between"
                          id="nav-tab"
                          role="tablist"
                        >
                          {regulations.map((reg, x) => (
                            <button
                              key={`button-tab-${x}`}
                              className={`nav-link ${x === 0 ? " active" : ""}`}
                              id={`nav-${x}-tab`}
                              data-bs-toggle="tab"
                              data-bs-target={`#nav-${x}`}
                              type="button"
                              role="tab"
                              aria-controls={`nav-${x}`}
                              aria-selected="true"
                            >
                              {reg?.title[lng]}
                            </button>
                          ))}
                        </div>
                      </nav>
                    </div>
                    <div className="col-lg-8">
                      <div className="tab-content" id="nav-tabContent">
                        {regulations.map((reg, x) => (
                          <div
                            key={`tab-content-key-${x}`}
                            className={`tab-pane fade show ${
                              x === 0 ? " active" : ""
                            }`}
                            id={`nav-${x}`}
                            role="tabpanel"
                            aria-labelledby={`nav-${x}-tab`}
                          >
                            <div className="overview">
                              <div className="learn">
                                <h3>
                                  <i className="ri-information-line"></i>{" "}
                                  {reg?.title[lng]}
                                </h3>
                                <p>{reg?.description[lng]}</p>
                              </div>
                            </div>

                            <div className="overview">
                              <div className="learn">
                                <h3>
                                  <i className="ri-file-list-2-line"></i>{" "}
                                  {t("regulations")}
                                </h3>
                                <div className="overview">
                                  {reg.lists.map((lis, x) => (
                                    <div
                                      key={`overview-list-${x}`}
                                      className="overview-box px-37"
                                    >
                                      <h4>{lis[lng]}</h4>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        {/* <div
                          className="tab-pane fade"
                          id="nav-curriculum"
                          role="tabpanel"
                          aria-labelledby="nav-curriculum-tab"
                        >
                          <div className="overview">
                            <div className="learn">
                              <h3>
                                <i className="ri-information-line"></i> نظام
                                الإمتحانات
                              </h3>
                              <p>
                                تهدف مديرية تنمية الموارد البشرية إلى تعزيز قيم
                                مثل الصدق والشفافية والإنصاف والاعتراف بالتنوع
                                الفردي وضمان الجودة والدقة والتطوير وتطبيق
                                التكنولوجيا ذات الصلة.
                              </p>
                            </div>
                          </div>

                          <div className="overview">
                            <div className="learn">
                              <h3>
                                <i className="ri-file-list-2-line"></i> اللوائح
                              </h3>
                              <div className="overview">
                                <div className="overview-box px-37">
                                  <h4>
                                    استيفاء معايير الجودة تطبيق نظام موظفي
                                    المعلومات.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>
                                    الاحترام والاعتراف اعتماد حل قائم على
                                    التنظيم لمشاكل الموظفين.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>
                                    تزويد إدارة الجامعة بالنصائح ذات الصلة
                                    بإدارة الموارد البشرية.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>التقييم المنتظم لموظفي الجامعة.</h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>
                                    تقييم احتياجات الجامعة من الموارد البشرية.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>تعزيز الأداء المهني والتنظيمي.</h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4> خلق الرضا الوظيفي بين العاملين.</h4>
                                </div>
                              </div>
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
                                  <i className="ri-information-line"></i> لائحة
                                  التجميد و الإستقالة
                                </h3>
                                <p>
                                  تهدف مديرية تنمية الموارد البشرية إلى تعزيز
                                  قيم مثل الصدق والشفافية والإنصاف والاعتراف
                                  بالتنوع الفردي وضمان الجودة والدقة والتطوير
                                  وتطبيق التكنولوجيا ذات الصلة.
                                </p>
                              </div>
                            </div>

                            <div className="overview">
                              <div className="learn">
                                <h3>
                                  <i className="ri-file-list-2-line"></i>{" "}
                                  اللوائح
                                </h3>
                                <div className="overview">
                                  <div className="overview-box px-37">
                                    <h4>
                                      استيفاء معايير الجودة تطبيق نظام موظفي
                                      المعلومات.
                                    </h4>
                                  </div>
                                  <div className="overview-box px-37">
                                    <h4>
                                      الاحترام والاعتراف اعتماد حل قائم على
                                      التنظيم لمشاكل الموظفين.
                                    </h4>
                                  </div>
                                  <div className="overview-box px-37">
                                    <h4>
                                      تزويد إدارة الجامعة بالنصائح ذات الصلة
                                      بإدارة الموارد البشرية.
                                    </h4>
                                  </div>
                                  <div className="overview-box px-37">
                                    <h4>التقييم المنتظم لموظفي الجامعة.</h4>
                                  </div>
                                  <div className="overview-box px-37">
                                    <h4>
                                      تقييم احتياجات الجامعة من الموارد البشرية.
                                    </h4>
                                  </div>
                                  <div className="overview-box px-37">
                                    <h4>تعزيز الأداء المهني والتنظيمي.</h4>
                                  </div>
                                  <div className="overview-box px-37">
                                    <h4> خلق الرضا الوظيفي بين العاملين.</h4>
                                  </div>
                                </div>
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
                                <i className="ri-information-line"></i> لائحة
                                تحويل الطلاب
                              </h3>
                              <p>
                                تهدف مديرية تنمية الموارد البشرية إلى تعزيز قيم
                                مثل الصدق والشفافية والإنصاف والاعتراف بالتنوع
                                الفردي وضمان الجودة والدقة والتطوير وتطبيق
                                التكنولوجيا ذات الصلة.
                              </p>
                            </div>
                          </div>

                          <div className="overview">
                            <div className="learn">
                              <h3>
                                <i className="ri-file-list-2-line"></i> اللوائح
                              </h3>
                              <div className="overview">
                                <div className="overview-box px-37">
                                  <h4>
                                    استيفاء معايير الجودة تطبيق نظام موظفي
                                    المعلومات.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>
                                    الاحترام والاعتراف اعتماد حل قائم على
                                    التنظيم لمشاكل الموظفين.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>
                                    تزويد إدارة الجامعة بالنصائح ذات الصلة
                                    بإدارة الموارد البشرية.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>التقييم المنتظم لموظفي الجامعة.</h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>
                                    تقييم احتياجات الجامعة من الموارد البشرية.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>تعزيز الأداء المهني والتنظيمي.</h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4> خلق الرضا الوظيفي بين العاملين.</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="nav-reviews2"
                          role="tabpanel"
                          aria-labelledby="nav-reviews-tab2"
                        >
                          <div className="overview">
                            <div className="learn">
                              <h3>
                                <i className="ri-information-line"></i> لائحة
                                المصروفات ورسوم التسجيل
                              </h3>
                              <p>
                                تهدف مديرية تنمية الموارد البشرية إلى تعزيز قيم
                                مثل الصدق والشفافية والإنصاف والاعتراف بالتنوع
                                الفردي وضمان الجودة والدقة والتطوير وتطبيق
                                التكنولوجيا ذات الصلة.
                              </p>
                            </div>
                          </div>

                          <div className="overview">
                            <div className="learn">
                              <h3>
                                <i className="ri-file-list-2-line"></i> اللوائح
                              </h3>
                              <div className="overview">
                                <div className="overview-box px-37">
                                  <h4>
                                    استيفاء معايير الجودة تطبيق نظام موظفي
                                    المعلومات.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>
                                    الاحترام والاعتراف اعتماد حل قائم على
                                    التنظيم لمشاكل الموظفين.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>
                                    تزويد إدارة الجامعة بالنصائح ذات الصلة
                                    بإدارة الموارد البشرية.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>التقييم المنتظم لموظفي الجامعة.</h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>
                                    تقييم احتياجات الجامعة من الموارد البشرية.
                                  </h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4>تعزيز الأداء المهني والتنظيمي.</h4>
                                </div>
                                <div className="overview-box px-37">
                                  <h4> خلق الرضا الوظيفي بين العاملين.</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
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

export default Regulations;

const translate: ITranslate = {
  title: {
    ar: "اللوائح و القوانين",
    en: "Regulations and laws",
  },
  regulations: {
    ar: "اللوائح",
    en: "Regulations",
  },
  academic: {
    ar: "الأكاديمية",
    en: "Academics",
  },
};
