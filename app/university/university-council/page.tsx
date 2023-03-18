import AboutBanner from "@/components/AboutBanner";
import React from "react";

function UniversityCouncil() {
  return (
    <>
      <AboutBanner title="مجلس الجامعة" breadcrumbs={["مجلس الجامعة"]} />

      <div className="graduate-admission pt-100 pb-70">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-12">
              <div className="courses-details">
                <div
                  className="description"
                  style={{ border: "none", paddingBottom: 0 }}
                >
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
                          التاريخ والوصف
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
                          القواعد والنفاذ
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
                          إجتماعات المجلس
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
                          جدول الأعمال
                        </button>
                        <button
                          className="nav-link"
                          id="nav-motion-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-motion"
                          type="button"
                          role="tab"
                          aria-controls="nav-reviews"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          التصويت
                        </button>
                        <button
                          className="nav-link"
                          id="nav-meeting-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-meeting"
                          type="button"
                          role="tab"
                          aria-controls="nav-reviews"
                          aria-selected="false"
                          tabIndex={-1}
                        >
                          إجتماع المجلس
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade active show"
                        id="nav-overview"
                        role="tabpanel"
                        aria-labelledby="nav-overview-tab"
                      >
                        <div className="row">
                          <div className="col-xl-7">
                            <div className="overview">
                              <div className="learn">
                                <h3>التاريخ و الوصف</h3>
                                <p>
                                  تم تشكيل أول مجلس للجامعة في عام 2012 وتم
                                  تمديد عضويته بأمر رئاسي في عام 2011 ، لتتماشى
                                  بشكل وثيق مع أحكام قانون جامعة بحري لعام 2011.
                                  المجلس هو الجهاز الأعلى للجامعة وهو المسؤول
                                  لوضع سياستها العامة وإشرافها وحسن أدائها.
                                </p>
                                <p>
                                  وفقًا لأحكام القسم 3 (8) من قانون جامعة بحري
                                  لعام 2011 ، يضع المجلس القواعد التالية لتنظيم
                                  سير أعماله.
                                </p>
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
                      <div
                        className="tab-pane fade"
                        id="nav-curriculum"
                        role="tabpanel"
                        aria-labelledby="nav-curriculum-tab"
                      >
                        <div className="row">
                          <div className="col-xl-7">
                            <div className="curriculum">
                              <h3>القواعد و النفاذ</h3>
                              <div className="list">
                                <ul>
                                  <li>
                                    يشار إلى هذه القواعد باسم "النظام الداخلي
                                    لمجلس جامعة بحري" وتدخل حيز التنفيذ بمجرد
                                    توقيعها من قبل رئيس المجلس.
                                  </li>
                                  <li>
                                    في هذه القواعد ، ما لم يقتض السياق معنى آخر
                                    ، يكون للكلمات التالية المعاني المخصصة لها
                                    فيما بعد على التوالي:
                                  </li>
                                </ul>
                              </div>

                              <div className="list tow">
                                <ul>
                                  <li>
                                    1. <strong>القانون:</strong> يقصد به قانون
                                    جامعة البحري 2011
                                  </li>
                                  <li>
                                    2. <strong>الرئيس:</strong> يقصد به رئيس
                                    مجلس جامعة البحري ، ويشمل أيضًا الشخص
                                    المنتخب من قبل المجلس وفقًا لهذه القواعد
                                    لرئاسة اجتماع له عند غياب الرئيس.
                                  </li>
                                  <li>
                                    3. <strong>السكرتير:</strong> يقصد به الموظف
                                    المعين وفقا للنظام الأساسي للعمل مقررا
                                    للمجلس.
                                  </li>
                                  <li>
                                    4. <strong>نائب المدير:</strong> يقصد به
                                    نائب مدير جامعة بحري.
                                  </li>
                                </ul>
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
                      <div
                        className="tab-pane fade"
                        id="nav-instructor"
                        role="tabpanel"
                        aria-labelledby="nav-instructor-tab"
                      >
                        <div className="curriculum">
                          <h3>إجتماعات المجلس</h3>
                          <div className="list">
                            <ul>
                              <li>
                                يجتمع المجلس لتصريف أعماله مرتين في السنة على
                                الأقل في الزمان والمكان اللذين قد يعينهما الرئيس
                                لهذه المناسبة ، بشرط أن يدعو الرئيس إلى اجتماع
                                خاص للمجلس عند تلقي طلب خطي. من نائب رئيس
                                الجامعة أو من الأغلبية البسيطة لأعضاء المجلس.
                              </li>
                              <li>
                                للمجلس أن يدعو أي شخص لحضور أي جلسة من جلساته أو
                                جزء منها بشرط ألا يصوت.
                              </li>
                              <li>يتولى رئيس المجلس رئاسة جميع اجتماعاته.</li>
                              <li>
                                في حالة غياب الرئيس ينتخب المجلس رئيساً من بين
                                أعضائه. ولكن في حالة وصول رئيس المجلس بعد توليه
                                الرئاسة ، يقوم الرئيس المنتخب بإخلاء الرئاسة
                                لصالح رئيس المجلس.
                              </li>
                              <li>
                                بالإضافة إلى ممارسة الصلاحيات المخولة له في
                                مواضع أخرى من هذه القواعد ، يعلن الرئيس افتتاح
                                واختتام كل اجتماع ، ويدير المناقشات ، ويسمح
                                للكلام ، ويحافظ على النظام في الجلسات.
                              </li>
                              <li>
                                دون المساس بمصلحة المناقشة ، يدعو الرئيس
                                المتحدثين بالترتيب الذي أبدوا فيه رغبتهم في
                                الكلام بشرط أن تُمنح الأسبقية دائمًا لنائب
                                المستشار إذا طلب الإذن بالتحدث.
                              </li>
                              <li>
                                عند منح الإذن بالكلام ، يجب على العضو مخاطبة
                                الرئيس.
                              </li>
                              <li>
                                أثناء مناقشة أية مسألة ، يجوز لأي عضو أن يثير
                                نقطة نظام في أي وقت ، ويبت الرئيس في النقطة
                                النظامية على الفور.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-reviews"
                        role="tabpanel"
                        aria-labelledby="nav-reviews-tab"
                      >
                        <div className="row">
                          <div className="col-xl-7">
                            <div className="curriculum">
                              <h3>جدول الأعمال</h3>
                              <div className="list">
                                <ul>
                                  <li>
                                    يضع المقرر جدول أعمال كل اجتماع من اجتماعات
                                    المجلس بالتشاور مع الرئيس ويبلغ إلى الأعضاء
                                    قبل شهر على الأقل من الاجتماع.
                                  </li>
                                  <li>
                                    يجوز لرئيس المجلس ، قبل أو أثناء الاجتماع ،
                                    مراجعة جدول الأعمال بحذف أو تأجيل أو تعديل
                                    أو إضافة بنود.
                                  </li>
                                  <li>
                                    ينظر المجلس في بنود جدول الأعمال بالترتيب
                                    الذي تم ترتيبها به بشرط أن يكون للرئيس ، إذا
                                    رأى ضرورة لذلك ، الأسبقية لأي بند.
                                  </li>
                                </ul>
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

                      <div
                        className="tab-pane fade"
                        id="nav-motion"
                        role="tabpanel"
                        aria-labelledby="nav-motion-tab"
                      >
                        <div className="row">
                          <div className="col-xl-7">
                            <div className="curriculum">
                              <h3>التصويت</h3>
                              <div className="list">
                                <ul>
                                  <li>
                                    لكل عضو حاضر صوت واحد. يكون للرئيس ،
                                    بالإضافة إلى صوته الأصلي ، صوت مرجح يمكنه
                                    استخدامه في حالة تساوي الأصوات.
                                  </li>
                                  <li>
                                    باستثناء الحالات التي يقرر فيها الرئيس أن
                                    هناك ظروفًا خاصة لاستخدام طريقة أخرى للتصويت
                                    ، يصوت المجلس عادة برفع الأيدي.
                                  </li>
                                  <li>
                                    يعلن الرئيس عدد الذين صوتوا مع الاقتراح
                                    ومعارضه ، وعدد الذين امتنعوا عن التصويت ثم
                                    يعلن النتيجة.
                                  </li>
                                  <li>
                                    شريطة أن يكون هناك نصاب قانوني ، يتم تحديد
                                    جميع المسائل المقترحة للبت بأغلبية أصوات
                                    الحاضرين. يتم احتساب أصوات الممتنعين عن
                                    التصويت من بين الأصوات السلبية.
                                  </li>
                                  <li>
                                    إذا انقسمت الأصوات بالتساوي ولم يستخدم
                                    الرئيس صوته المرجح ، يعتبر الاقتراح مرفوضاً.
                                  </li>
                                </ul>
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

                      <div
                        className="tab-pane fade"
                        id="nav-meeting"
                        role="tabpanel"
                        aria-labelledby="nav-meeting-tab"
                      >
                        <div className="row">
                          <div className="col-xl-7">
                            <div className="curriculum">
                              <h3>إجتماع المجلس</h3>
                              <div className="list">
                                <ul>
                                  <li>
                                    يكون المقرر مسؤولا عن إعداد وتداول محاضر
                                    المجلس. ويكون مسؤولاً أيضًا عن حفظ وثائق
                                    وسجلات المجلس.
                                  </li>
                                  <li>
                                    يتأكد السكرتير من توزيع محضر كل اجتماع على
                                    الأعضاء قبل أسبوع على الأقل من الاجتماع
                                    التالي للمجلس.
                                  </li>
                                  <li>
                                    يقدم محضر كل اجتماع للمجلس إلى الاجتماع
                                    التالي للمصادقة عليه.
                                  </li>
                                  <li>تعطى الدقائق رقما متسلسلا.</li>
                                </ul>
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
