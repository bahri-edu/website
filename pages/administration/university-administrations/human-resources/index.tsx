import AboutBanner from "@/components/AboutBanner";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

function HumanResources() {
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
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-12">
              <div className="condition-content">
                <h2>إدارة الموارد البشرية</h2>
                <p>
                  مديرية الموارد البشرية هي إحدى الوحدات الإدارية الرئيسية في
                  جامعة بحري. وتتمثل مهمتها في وصف وتحديد الاختصاصات للموظفين
                  والفنيين والإداريين والعاملين. تخضع إدارة الموارد البشرية
                  للمدير المباشر للجامعة.
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
                        الرؤية و المهمة
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
                        القيم و الأهداف
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
                        مسؤوليات الإدارة
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
                        هيكلية القسم
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
                        <div className="learn">
                          <h3>
                            <i className="ri-eye-fill"></i> الرؤية
                          </h3>
                          <p>
                            الهدف من إدارة الموارد البشرية هو تعزيز المهنية
                            والرضا الوظيفي من خلال الإدارة المثلى للموارد
                            البشرية المتاحة في الجوانب الأكاديمية والإدارية.
                          </p>
                        </div>
                      </div>

                      <div className="overview">
                        <div className="learn mb-0">
                          <h3>
                            <i className="ri-pencil-fill"></i> المهمة
                          </h3>
                          <p>
                            تحديد الأنشطة المتعلقة بالعمل الإداري في جامعة باري
                            لضمان توفير الموارد البشرية ذات الكفاءات العالية في
                            المجالات الأكاديمية والفنية والإدارية من خلال
                            التخطيط والتدريب والتوثيق. تتماشى الرسالة مع أهداف
                            الجامعة.
                          </p>
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
                        <div className="learn">
                          <h3>
                            <i className="flaticon-college-graduation"></i>{" "}
                            القيم
                          </h3>
                          <p>
                            تهدف مديرية تنمية الموارد البشرية إلى تعزيز قيم مثل
                            الصدق والشفافية والإنصاف والاعتراف بالتنوع الفردي
                            وضمان الجودة والدقة والتطوير وتطبيق التكنولوجيا ذات
                            الصلة.
                          </p>
                        </div>
                      </div>

                      <div className="overview">
                        <div className="learn">
                          <h3>
                            <i className="ri-checkbox-circle-fill"></i> أهداف
                            الإدارة
                          </h3>
                          <div className="overview">
                            <div className="overview-box">
                              <h4>
                                استيفاء معايير الجودة تطبيق نظام موظفي
                                المعلومات.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                الاحترام والاعتراف اعتماد حل قائم على التنظيم
                                لمشاكل الموظفين.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                تزويد إدارة الجامعة بالنصائح ذات الصلة بإدارة
                                الموارد البشرية.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>التقييم المنتظم لموظفي الجامعة.</h4>
                            </div>
                            <div className="overview-box">
                              <h4>
                                تقييم احتياجات الجامعة من الموارد البشرية.
                              </h4>
                            </div>
                            <div className="overview-box">
                              <h4>تعزيز الأداء المهني والتنظيمي.</h4>
                            </div>
                            <div className="overview-box">
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
                              <i className="ri-file-chart-fill"></i> مسؤوليات
                              الإدارة
                            </h3>
                          </div>
                          <div className="overview-box px-37">
                            <h4>
                              {" "}
                              تطبيق القواعد والإجراءات والممارسات الإدارية
                              المعيارية في توظيف الموارد البشرية.
                            </h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>منافسة إجراءات تعيين الموظفين.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>إعداد موازنة التوظيف بالجامعة.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>إبداء الرأي الفني في الشؤون الإدارية.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>
                              مسك السجلات وملفات الموظفين بشكل يدوي ورقمي.
                            </h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>
                              إدارة الأعمال الورقية الداخلية اليومية في الجامعة.
                            </h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>
                              المراجعة الدورية لملفات الموظفين الخاصة بالترقية
                              والعلاوات.
                            </h4>
                          </div>

                          <div className="overview-box px-37">
                            <h4>إعداد نماذج تقارير فحص أداء الموظف وتقييمه.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>
                              حفظ الوثائق والتعاميم الصادرة عن المؤسسات الحكومية
                              ذات العلاقة والجامعة.
                            </h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>استكمال إجراءات المعاشات.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>
                              متابعة إجراءات ضريبة الدخل ومراجعة استقطاعات
                              المعاش.
                            </h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>متابعة برنامج التأمين الصحي بالجامعة.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>حفظ الملفات في الأرشيف.</h4>
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
                      <div className="image-strucure">
                        <img src="/images/structure-of-DHR-1.png" alt="Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="condition-content mt-5">
                <h2>مسؤولي الموارد البشرية</h2>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <td>الإسم</td>
                      <td>المكتب</td>
                      <td>البريد الإلكتروني</td>
                      <td>رقم الهاتف</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>ملاذ عبد العزيز آدم</td>
                      <td>مدير الموارد البشرية</td>
                      <td>malaz@gmail.com</td>
                      <td>0912229781</td>
                    </tr>
                    <tr>
                      <td>محمد بخيت محمد</td>
                      <td>قسم الاداري</td>
                      <td>d.staff.hr@Bahri.edu.sd </td>
                      <td>0155888426</td>
                    </tr>
                    <tr>
                      <td>فتحية عيدالله محمد</td>
                      <td>قسم العمال</td>
                      <td>d.worker.hr@Bahri.edu.sd </td>
                      <td>0121082226</td>
                    </tr>
                    <tr>
                      <td>محمد نور الدين دهب</td>
                      <td>دائرة المعاشات</td>
                      <td>d.pensions.hr@Bahri.edu.sd</td>
                      <td>0155888438</td>
                    </tr>
                    <tr>
                      <td>محمد بخيت محمد</td>
                      <td>قسم المكتب السري</td>
                      <td>d.secret.hr @Bahri.edu.sd </td>
                      <td>0155888426</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HumanResources;

const translate: ITranslate = {
  title: {
    ar: "إدارة الموارد البشرية",
    en: "Human Resource Management",
  },
  universityAdministrations: {
    ar: "إدارات الجامعة",
    en: "University Administrations",
  },
};
