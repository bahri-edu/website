import AboutBanner from "@/components/AboutBanner";
import React from "react";

function Regulations() {
  return (
    <>
      <AboutBanner
        title="اللوائح و القوانين"
        breadcrumbs={["الأكاديمية", "اللوائح و القوانين"]}
      />

      <div className="terms-condition-area ruels pt-100 pb-70">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-12">
              <div className="condition-content">
                <h2>اللوائح و القوانين</h2>
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
                            اللائحة الأكاديمية لبرنامج البكالريوس
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
                            نظام الإمتحانات
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
                            لائحة التجميد والإستقالة
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
                            لائحة تحويل الطلاب
                          </button>
                          <button
                            className="nav-link"
                            id="nav-reviews-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-reviews2"
                            type="button"
                            role="tab"
                            aria-controls="nav-reviews"
                            aria-selected="false"
                            tabIndex={-1}
                          >
                            لائحة المصروفات ورسوم التسجيل
                          </button>
                        </div>
                      </nav>
                    </div>
                    <div className="col-lg-8">
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
                                <i className="ri-information-line"></i> اللائحة
                                الأكاديمية لبرنامج البكالريوس
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
                        </div>
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
