import AboutBanner from "@/components/AboutBanner";
import { Translate } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const lists: Condition[] = [
  {
    title: {
      ar: "قبول المرشحين الأجانب",
      en: "Acceptance of foreign candidates",
    },
    lists: [
      {
        ar: "يجوز قبول المرشحين غير السودانيين كطلاب برعاية ذاتية ، بشرط ألا يتجاوز عدد المرشحين المقبولين 15 ٪ من عدد المرشحين المزمع قبولهم في الكلية / القسم المعني. ",
        en: "Non-Sudanese candidates may be admitted as self-sponsored students, provided that the number of accepted candidates does not exceed 15% of the number of candidates to be admitted to the respective college/department.",
      },
      {
        ar: "تنطبق جميع اللوائح المطبقة على المرشحين للقبول العام على المرشحين من هذا النوع من القبول وفقًا لشروط عدم الشرعية التالية",
        en: "All regulations applicable to candidates for general admission apply to candidates of this type of admission subject to the following illegality conditions:",
        sublists: [
          {
            ar: "يجب أن يفي المرشح بالمتطلبات الخاصة والعامة للقبول ساري المفعول خلال العام الدراسي المعني",
            en: "The candidate must fulfill the specific and general requirements for admission valid during the respective academic year",
          },
          {
            ar: "يجب أن يتقن لغة التدريس",
            en: "Must be fluent in the language of instruction",
          },
        ],
      },
      {
        ar: "يخضع المرشح لفحص طبي وقواعد الهجرة وفقًا للقوانين الوطنية السارية",
        en: "The candidate is subject to a medical examination and immigration rules in accordance with the applicable national laws.",
      },
      {
        ar: "يجب على المرشح إبراز مستندات إثبات الهوية وشهادة تثبت قدرته المالية على دفع الرسوم.",
        en: "The candidate must present identification documents and a certificate proving his financial ability to pay the fees.",
      },
    ],
  },
  {
    title: {
      ar: "قبول حملة الشهادات الجامعية",
      en: "Admission of university degree holders",
    },
    lists: [
      {
        ar: "يشير إلى قبول حاملي درجة البكالوريوس في برنامج بكالوريوس آخر في فئة أعلى من السنة الأولى ، بشرط ألا يتجاوز عدد المرشحين المقبولين 10٪ من عدد المرشحين المزمع قبولهم في الكلية المعنية.",
        en: "Refers to the admission of bachelor's degree holders to another bachelor's program in a category higher than the first year, provided that the number of accepted candidates does not exceed 10% of the number of candidates intended to be admitted to the respective college.",
      },
      {
        ar: "يجوز قبول حاملي درجة البكالوريوس في فصل دراسي أعلى من السنة الأولى كطلاب برعاية ذاتية يتحملون الرسوم الدراسية كاملة ، بشرط أن يستوفوا الحد الأدنى من الشروط المطلوبة للقبول في الكلية المعنية في العام الدراسي المعني.",
        en: "Holders of a Bachelor’s degree in a semester above their first year may be admitted as self-sponsored, full-tuition fee students, provided they meet the minimum conditions required for admission to the respective College in the relevant academic year.",
      },
      {
        ar: "يجوز قبول حملة البكالوريوس بدرجة النجاح وفق الإجراءات التالية",
        en: "Bachelor's degree holders may be accepted with a successful degree according to the following procedures:",
        sublists: [
          {
            ar: "يتم تقديم المستندات ذات الصلة إلى الأمانة الأكاديمية التي تقوم بإحالتها إلى الكلية / القسم المعني للتوصية بشأنها.",
            en: "Relevant documents are submitted to the academic secretariat which forwards them to the concerned college/department for recommendation.",
          },
          {
            ar: "في حالة التوصية بالموافقة ، تحيل الأمانة الأكاديمية المستندات إلى الإدارة العامة للقبول لاستكمال إجراءات القبول",
            en: "In the event that approval is recommended, the academic secretariat forwards the documents to the General Administration of Admissions to complete the admission procedures",
          },
          {
            ar: "تعتمد الإدارة العامة للقبول إجراءات القبول من خلال تخصيص رقم رمز جامعي للمرشح المعني",
            en: "The General Administration of Admissions approves admission procedures by allocating a university code number to the concerned candidate",
          },
          {
            ar: "لا يتم تسجيل المرشح إلا بعد موافقة الإدارة العامة للقبول",
            en: "The candidate is not registered until after the approval of the General Administration of Admissions",
          },
        ],
      },
    ],
  },
];

interface Condition {
  title: Translate;
  lists: List[];
}

interface List {
  ar: string;
  en: string;
  sublists?: Translate[];
}
function Overview() {
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
        breadcrumbs={[t("admission"), t("title")]}
      />

      <div className="academic-area pt-100">
        <div className="container">
          <div className="section-title center">
            <h2>{t("title2")}</h2>
            <p>{t("title2Desc")}</p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="single-academics-card">
                <div className="academic-top-content">
                  <i className="flaticon-graduation"></i>
                  <h3>{t("secOneTitle")}</h3>
                </div>
                <p>{t("secOneDes")}</p>
              </div>
            </div>
            <div
              className="col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="single-academics-card">
                <div className="academic-top-content">
                  <i className="flaticon-graduation"></i>
                  <h3>{t("secTowTitle")}</h3>
                </div>
                <p>{t("secTowDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="terms-condition-area pt-50 pb-70">
        <div className="container">
          <div className="section-title center">
            <h2>{t("fAndQTitle")}</h2>
            <p>{t("fAndQDesc")}</p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="accordion" id="accordionExample">
                {lists.map((lis, x) => (
                  <div key={`list-items-${x}`} className="accordion-item">
                    <h2 className="accordion-header" id={`heading-${x}`}>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-${x}`}
                        aria-expanded="true"
                        aria-controls={`collapse-${x}`}
                      >
                        {x + 1}. {lis.title[lng]}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${x}`}
                      className={`accordion-collapse collapse ${
                        x === 0 ? " show" : ""
                      }`}
                      aria-labelledby={`heading-${x}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="overview">
                          {lis.lists.map((l, x) => (
                            <div
                              key={`main-list-${x}`}
                              className="overview-box px-37"
                            >
                              <h4>{l[lng]}</h4>
                              {l?.sublists && (
                                <div className="list">
                                  <ul>
                                    {l.sublists.map((sub, x) => (
                                      <li key={`sub-list-${x}`}>
                                        {x + 1}. {sub[lng]}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="div text-center mt-4"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <a href="#" className="default-btn btn mt-4">
                  دليل القبول للعام الدراسي 2021-2022
                  <i className="flaticon-next"></i>
                </a>
                <a href="#" className="default-btn balck btn mx-2 mt-4">
                  رابط التقديم<i className="flaticon-next"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;

const translate: ITranslate = {
  title: {
    ar: "نظرة عامة للقبول",
    en: "Admission overview",
  },
  admission: {
    ar: "القبول",
    en: "Admission",
  },
  title2: {
    ar: "قبول الطلاب",
    en: "Admission",
  },
  title2Desc: {
    ar: "تعتمد جامعة بحري أربعة أنواع من المآخذ وفقًا لأنظمة وزارة التعليم العالي:",
    en: "The University of Bahri adopts four types of intakes according to the regulations of the Ministry of Higher Education:",
  },

  secOneTitle: {
    ar: "المدخول الوطني",
    en: "National Income",
  },
  secTowTitle: {
    ar: "المدخول الذاتي",
    en: "Self Income",
  },

  secOneDes: {
    ar: `
    هو قبول تنظمه الإدارة العامة للقبول بوزارة التعليم العالي والبحث العلمي ، عند استكمال طلبات القبول من قبل جميع المرشحين. تحصل الجامعة على النسبة المئوية للطلاب من الوزارة. يعتمد القبول على الجدارة وبعد الاختيار ، يتم تسليم قوائم المرشحين المؤهلين إلى أمانة الشؤون الأكاديمية (SAA) في الجامعات المعنية. ثم توزع SAA القائمة على مختلف الكليات.

`,
    en: `
    It is an admission organized by the General Administration of Admissions at the Ministry of Higher Education and Scientific Research, upon completion of admission applications by all candidates. The university obtains the percentage of students from the ministry. Admission is based on merit and after selection, the lists of eligible candidates are submitted to the Secretariat of Academic Affairs (SAA) of the respective universities. SAA then distributes the list to the various colleges.`,
  },
  secTowDesc: {
    ar: `
    تخصص الجامعة كل عام عددًا من المقاعد للقبول على الذات ، ويشمل ذلك أبناء وبنات وأزواج العاملين في وزارة التعليم العالي والبحث العلمي. الطلاب المقبولين بموجب هذا النوع من الاستيعاب قد يحصلون على نسب أقل بما لا يزيد عن 10٪ من أدنى علامة مقبولة بموجب الاستيعاب الوطني. هذا النوع يشمل: المرشحين الأجانب - حملة الشهادة الجامعية - الدبلوم الفني - زيادة المدخول.

`,
    en: `
    Every year, the university allocates a number of seats for self-admission, and this includes sons, daughters, and spouses of workers in the Ministry of Higher Education and Scientific Research. Students accepted under this type of intake may score less than 10% less than the lowest mark accepted under the national intake. This type includes: foreign candidates - university degree holders - technical diploma - income increase.`,
  },

  fAndQTitle: {
    ar: "الشروط و الإجراءات",
    en: "Terms and procedures",
  },
  fAndQDesc: {
    ar: "يجب مطابقة جميع الشروط قبل التقديم ",
    en: "All conditions must be met before applying ",
  },
};
