import AboutBanner from "@/components/AboutBanner";
import AdministrationList from "@/components/AdministrationList";
import React from "react";

function AcademicAffairs() {
  return (
    <>
      <AboutBanner
        title="أمانة الشؤون العلمية"
        breadcrumbs={["إدارات الجامعة", "أمانة الشؤون العلمية"]}
      />

      <div className="terms-condition-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="condition-content">
                <h2>أمانة الشؤون العلمية</h2>
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
                        الرؤية
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
                        المهمة
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
                        القيم
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
                        الأهداف
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
                            <i className="ri-eye-fill"></i> الرؤية
                          </h3>
                          <p className="mb-0">
                            جامعة رائدة ومتميزة في التعليم والبحث العلمي وخدمة
                            المجتمع وفق معايير الجودة.
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
                        <div className="learn mb-2">
                          <h3>
                            <i className="ri-pencil-fill"></i> المهمة
                          </h3>
                          <p className="mb-0">
                            توفير تعليم ممتاز من خلال البرامج الأكاديمية المحسنة
                            ، والبحث العلمي المبتكر الموجه نحو المجتمع والحفاظ
                            على التوافق مع التغيرات السريعة في عالم اليوم.
                          </p>
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
                              القيم
                            </h3>
                            <p>
                              في سعيها لتحقيق رؤيتها ورسالتها ، تلتزم جامعة بحري
                              بالقيم التالية وتسترشد بها:
                            </p>
                          </div>
                          <div className="overview-box px-37">
                            <h4>أهمية وتعزيز روح المواطنة.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>الاحترام والاعتراف بالتنوع.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>المصداقية والشفافية.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>الحرية والمسؤولية.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>الالتزام بمعايير الجودة.</h4>
                          </div>
                          <div className="overview-box px-37">
                            <h4>وعي بيئي.</h4>
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
                            <i className="ri-checkbox-circle-fill"></i> الأهداف
                          </h3>
                          <p>
                            بالإضافة إلى أهدافها الانتقالية ، بما في ذلك تعديل
                            أوضاع موظفي شمال السودان في جامعات جنوب السودان
                            السابقة ، والأهداف التي نص عليها قانون الجامعة ،
                            تسعى الجامعة إلى تحقيق الأهداف التالية:
                          </p>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            تمكين الطلاب من تحقيق أهداف مهنية عالية الجودة.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            تحفيز الطلاب على تبني وتطبيق معارفهم ومهاراتهم
                            المكتسبة في حياتهم الشخصية والمهنية.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            توفير فرص التعلم المستمر للعاملين في سوق العمل ، بما
                            يتوافق مع أهداف البيئة المهنية بهدف تطوير كفاءتهم
                            ورفع مستوى الأداء والإنتاجية.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            توثيق العلم وإيصاله باللغتين العربية والإنجليزية ،
                            والاهتمام باللغات والترجمة.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>التركيز بشكل خاص على الجودة والتميز.</h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            ربط الجامعة بالمؤسسات العلمية والمؤسسات الثقافية
                            والتشريعية في مجال توظيف الخريجين.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            ترسيخ التعاون التربوي والثقافي مع الجامعات المتميزة
                            محلياً وإقليمياً ودولياً.
                          </h4>
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
