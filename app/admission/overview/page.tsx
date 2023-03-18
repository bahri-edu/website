import AboutBanner from "@/components/AboutBanner";
import React from "react";

function Overview() {
  return (
    <>
      <AboutBanner
        title="نظرة عامة للقبول"
        breadcrumbs={["القبول", "نظرة عامة للقبول"]}
      />

      <div className="academic-area pt-100">
        <div className="container">
          <div className="section-title center">
            <h2>قبول الطلاب</h2>
            <p>
              تعتمد جامعة بحري أربعة أنواع من المآخذ وفقًا لأنظمة وزارة التعليم
              العالي:
            </p>
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
                  <h3>المدخول الوطني</h3>
                </div>
                <p>
                  هو قبول تنظمه الإدارة العامة للقبول بوزارة التعليم العالي
                  والبحث العلمي ، عند استكمال طلبات القبول من قبل جميع المرشحين.
                  تحصل الجامعة على النسبة المئوية للطلاب من الوزارة. يعتمد
                  القبول على الجدارة وبعد الاختيار ، يتم تسليم قوائم المرشحين
                  المؤهلين إلى أمانة الشؤون الأكاديمية (SAA) في الجامعات
                  المعنية. ثم توزع SAA القائمة على مختلف الكليات.
                </p>
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
                  <h3>المدخول الذاتي</h3>
                </div>
                <p>
                  تخصص الجامعة كل عام عددًا من المقاعد للقبول على الذات ، ويشمل
                  ذلك أبناء وبنات وأزواج العاملين في وزارة التعليم العالي والبحث
                  العلمي. الطلاب المقبولين بموجب هذا النوع من الاستيعاب قد
                  يحصلون على نسب أقل بما لا يزيد عن 10٪ من أدنى علامة مقبولة
                  بموجب الاستيعاب الوطني. هذا النوع يشمل: المرشحين الأجانب -
                  حملة الشهادة الجامعية - الدبلوم الفني - زيادة المدخول.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="terms-condition-area pt-50 pb-70">
        <div className="container">
          <div className="section-title center">
            <h2>الشروط و الإجراءات</h2>
            <p>يجب مطابقة جميع الشروط قبل التقديم</p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      1. قبول المرشحين الأجانب
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="overview">
                        <div className="overview-box px-37">
                          <h4>
                            يجوز قبول المرشحين غير السودانيين كطلاب برعاية ذاتية
                            ، بشرط ألا يتجاوز عدد المرشحين المقبولين 15 ٪ من عدد
                            المرشحين المزمع قبولهم في الكلية / القسم المعني.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            تنطبق جميع اللوائح المطبقة على المرشحين للقبول العام
                            على المرشحين من هذا النوع من القبول وفقًا لشروط عدم
                            الشرعية التالية:
                          </h4>

                          <div className="list">
                            <ul>
                              <li>
                                1. يجب أن يفي المرشح بالمتطلبات الخاصة والعامة
                                للقبول ساري المفعول خلال العام الدراسي المعني.
                              </li>
                              <li>2. يجب أن يتقن لغة التدريس.</li>
                            </ul>
                          </div>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            يخضع المرشح لفحص طبي وقواعد الهجرة وفقًا للقوانين
                            الوطنية السارية.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            يجب على المرشح إبراز مستندات إثبات الهوية وشهادة
                            تثبت قدرته المالية على دفع الرسوم.
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      2. قبول حملة الشهادات الجامعية
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="overview">
                        <div className="overview-box px-37">
                          <h4>
                            يشير إلى قبول حاملي درجة البكالوريوس في برنامج
                            بكالوريوس آخر في فئة أعلى من السنة الأولى ، بشرط ألا
                            يتجاوز عدد المرشحين المقبولين 10٪ من عدد المرشحين
                            المزمع قبولهم في الكلية المعنية.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            يجوز قبول حاملي درجة البكالوريوس في فصل دراسي أعلى
                            من السنة الأولى كطلاب برعاية ذاتية يتحملون الرسوم
                            الدراسية كاملة ، بشرط أن يستوفوا الحد الأدنى من
                            الشروط المطلوبة للقبول في الكلية المعنية في العام
                            الدراسي المعني.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            يجوز قبول حملة البكالوريوس بدرجة النجاح وفق
                            الإجراءات التالية:
                          </h4>

                          <div className="list">
                            <ul>
                              <li>
                                1. يتم تقديم المستندات ذات الصلة إلى الأمانة
                                الأكاديمية التي تقوم بإحالتها إلى الكلية / القسم
                                المعني للتوصية بشأنها.
                              </li>
                              <li>
                                2. في حالة التوصية بالموافقة ، تحيل الأمانة
                                الأكاديمية المستندات إلى الإدارة العامة للقبول
                                لاستكمال إجراءات القبول.
                              </li>
                              <li>
                                3. تعتمد الإدارة العامة للقبول إجراءات القبول من
                                خلال تخصيص رقم رمز جامعي للمرشح المعني.
                              </li>
                              <li>
                                4. لا يتم تسجيل المرشح إلا بعد موافقة الإدارة
                                العامة للقبول.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      3. دبلوم فني
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="overview">
                        <div className="overview-box px-37">
                          <h4>
                            يجب أن يكون المتقدم حاصلاً على درجة النجاح في شهادة
                            مدرسة السودان أو ما يعادلها في المواد ذات الصلة
                            بالكلية المعنية.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            قد تكون هذه الشهادة من نفس السنوات أو السنوات
                            السابقة.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            نسخة من شهادة مدرسة السودان أو الشهادة الأجنبية.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>نسخة من شهادة الجنسية.</h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>نسخة من شهادة تحديد العمر أو الميلاد.</h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>صورتان بحجم جواز السفر.</h4>
                        </div>
                        <h5>الإجراءات</h5>
                        <div className="overview-box px-37">
                          <h4>
                            يمكن الحصول على استمارات التقديم ومعالجتها
                            إلكترونيًا من خلال موقع الوزارة أو مركز الموارد
                            البشرية والتعليم المستمر.
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      4. زيادة المدخول
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="overview">
                        <div className="overview-box px-37">
                          <h4>
                            يجب أن يكون المرشح الوحيد للدبلوم الفني مؤهلًا
                            للحصول على درجات أعلى.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            يجب أن تستوفي شهادة مدرسة السودان للمتقدم جميع
                            الشروط العامة المؤهلة لدراسة درجة البكالوريوس في
                            الجامعات السودانية.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            لا يحتاج حاملو الدبلوم الفني{" "}
                            <strong>بامتياز</strong> إلى خبرة وظيفية لرفع
                            الدرجات.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            يحتاج حاملو الدبلوم الفني بدرجة{" "}
                            <strong>جيدة جدًا</strong> إلى خبرة وظيفية لمدة
                            عامين في مجال تخصصهم من أجل رفع الدرجات.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            يشترط الحاصلون على الدبلوم التقني بتقدير{" "}
                            <strong>جيد</strong> أربع سنوات من الخبرة الوظيفية
                            في مجال تخصصهم لرفع الدرجات.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            يحتاج حاملو الدبلوم التقني مع{" "}
                            <strong>النجاح</strong> إلى خمس سنوات من الخبرة
                            الوظيفية في مجال تخصصهم من أجل رفع الدرجات.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            يتم قبول نتائج الطلاب المتقدمين في الدورات التي تمت
                            دراستها في المؤسسات التعليمية الأخرى فقط إذا كانت
                            تتوافق مع مقررات جامعة بحري فيما يتعلق بالمحتويات
                            والساعات المعتمدة.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            بعد اعتماد المقررات ، يتم تحويل الدرجات إلى نقاط
                            لحساب المعدل النهائي لنقاط الدرجات المرجحة (CWGPA)
                            للتخرج.
                          </h4>
                        </div>
                        <h5>الإجراءات</h5>
                        <div className="overview-box px-37">
                          <h4>
                            يجب على مقدم الطلب تعبئة نموذج الطلب وإرفاق
                            المستندات التالية:
                          </h4>
                          <div className="list">
                            <ul>
                              <li>1. شهادة مدرسة السودان.</li>
                              <li>2. صورتان حديثتان.</li>
                              <li>
                                3. شهادة الرقم القومي / الهوية الوطنية سارية
                                المفعول.
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="overview-box px-37">
                          <h4>يتم فحص الطلب من قبل أمانة الشؤون الأكاديمية.</h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            ترسل نماذج الطلبات والمستندات المرفقة إلى الإدارة
                            العامة للقبول لاستكمال إجراءات القبول.
                          </h4>
                        </div>
                        <div className="overview-box px-37">
                          <h4>
                            تسجيل الطلاب في الجامعة يعتمد على موافقة الإدارة
                            العامة للقبول.
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
