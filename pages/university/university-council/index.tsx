import AboutBanner from "@/components/AboutBanner";
import { Translate } from "@/types/models";
import { httpClient } from "@/utils/util.http";
import { useRouter } from "next/router";
import React from "react";
import { text } from "stream/consumers";

interface DescriptionList {
  title: Translate;
  description: Translate;
}
interface CouncilDescription {
  ar: string;
  en: string;
  lists?: DescriptionList[];
}

interface Council {
  id: string;
  title: Translate;
  descriptions: CouncilDescription[];
}

// const councils: Council[] = [
//   {
//     id: "123456dsdsdsdsd",
//     title: {
//       ar: "التاريخ و الوصف",
//       en: "التاريخ و الوصف",
//     },
//     descriptions: [
//       {
//         ar: "تم تشكيل أول مجلس للجامعة في عام 2012 وتم تمديد عضويته بأمر رئاسي في عام 2011 ، لتتماشى بشكل وثيق مع أحكام قانون جامعة بحري لعام 2011. المجلس هو الجهاز الأعلى للجامعة وهو المسؤول لوضع سياستها العامة وإشرافها وحسن أدائها.",
//         en: "تم تشكيل أول مجلس للجامعة في عام 2012 وتم تمديد عضويته بأمر رئاسي في عام 2011 ، لتتماشى بشكل وثيق مع أحكام قانون جامعة بحري لعام 2011. المجلس هو الجهاز الأعلى للجامعة وهو المسؤول لوضع سياستها العامة وإشرافها وحسن أدائها.",
//       },
//       {
//         ar: "وفقًا لأحكام القسم 3 (8) من قانون جامعة بحري لعام 2011 ، يضع المجلس القواعد التالية لتنظيم سير أعماله",
//         en: "وفقًا لأحكام القسم 3 (8) من قانون جامعة بحري لعام 2011 ، يضع المجلس القواعد التالية لتنظيم سير أعماله",
//       },
//     ],
//   },
//   {
//     id: "rhr5hr5h6rh5rhrhrh",
//     title: {
//       ar: "القواعد و النفاذ",
//       en: "القواعد و النفاذ",
//     },
//     descriptions: [
//       {
//         ar: "يشار إلى هذه القواعد باسم النظام الداخلي لمجلس جامعة بحري وتدخل حيز التنفيذ بمجرد توقيعها من قبل رئيس المجلس.",
//         en: "يشار إلى هذه القواعد باسم النظام الداخلي لمجلس جامعة بحري وتدخل حيز التنفيذ بمجرد توقيعها من قبل رئيس المجلس.",
//       },
//       {
//         ar: "في هذه القواعد ، ما لم يقتض السياق معنى آخر ، يكون للكلمات التالية المعاني المخصصة لها فيما بعد على التوالي:",
//         en: "في هذه القواعد ، ما لم يقتض السياق معنى آخر ، يكون للكلمات التالية المعاني المخصصة لها فيما بعد على التوالي:",
//         lists: [
//           {
//             title: {
//               ar: "القانون",
//               en: "القانون",
//             },
//             description: {
//               ar: "يقصد به قانون جامعة البحري 2011",
//               en: "يقصد به قانون جامعة البحري 2011",
//             },
//           },
//           {
//             title: {
//               ar: "الرئيس",
//               en: "الرئيس",
//             },
//             description: {
//               ar: "يقصد به رئيس مجلس جامعة البحري ، ويشمل أيضًا الشخص المنتخب من قبل المجلس وفقًا لهذه القواعد لرئاسة اجتماع له عند غياب الرئيس",
//               en: "يقصد به رئيس مجلس جامعة البحري ، ويشمل أيضًا الشخص المنتخب من قبل المجلس وفقًا لهذه القواعد لرئاسة اجتماع له عند غياب الرئيس",
//             },
//           },
//         ],
//       },
//     ],
//   },
// ];

//

export async function getServerSideProps() {
  const councils = await httpClient(`council?councilType=UNIVERSITYCOUNCIL`);
  return {
    props: {
      councils,
    },
  };
}

function UniversityCouncil({ councils }: { councils: Council[] }) {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";
  return (
    <>
      <AboutBanner title={title[lng]} breadcrumbs={[title[lng]]} />

      <div className="graduate-admission pt-100 pb-70">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-12">
              <div className="courses-details">
                <div
                  className="description"
                  style={{ border: "none", paddingBottom: "0" }}
                >
                  <div className="container p-0">
                    <nav>
                      <div
                        className="nav nav-tabs d-flex justify-content-between"
                        id="nav-tab"
                        role="tablist"
                      >
                        {councils.map(({ id, title }, x) => (
                          <button
                            key={id}
                            className={`nav-link  ${x === 0 ? " active" : ""}`}
                            id={`nav-${id}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#nav-${id}`}
                            type="button"
                            role="tab"
                            aria-controls={`nav-${id}`}
                            aria-selected={x === 0 ? true : false}
                          >
                            {title?.[lng]}
                          </button>
                        ))}
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      {councils.map(({ id, title, descriptions }, x) => (
                        <div
                          key={id}
                          className={`tab-pane fade ${
                            x === 0 ? " active show" : ""
                          } `}
                          id={`nav-${id}`}
                          role="tabpanel"
                          aria-labelledby={`nav-${id}-tab`}
                        >
                          <div className="row">
                            <div className="col-xl-7">
                              <div className="overview">
                                <div className="curriculum">
                                  <h3>{title?.[lng]}</h3>
                                  <div className="list">
                                    <ul>
                                      {descriptions.map((d, x) => (
                                        <li key={`descriptions-council-${x}`}>
                                          {d?.[lng]}

                                          {d.lists && d.lists.length && (
                                            <div className="list tow">
                                              <ul>
                                                {d.lists.map((li, x) => (
                                                  <li
                                                    key={`lists-sub-${x}`}
                                                    style={{
                                                      display: "flex",
                                                      flexDirection: "row",
                                                      gap: 10,
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: 5,
                                                      }}
                                                    >
                                                      <span> {x + 1}</span>
                                                      <strong>
                                                        {li?.title?.[lng]}:
                                                      </strong>
                                                    </span>
                                                    <span>
                                                      {li?.description?.[lng]}
                                                    </span>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          )}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="img">
                                <img src="/images/bah2.jpg" alt="Image" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
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

export default UniversityCouncil;

const title = {
  ar: "مجلس الجامعة",
  en: "University Council",
};
