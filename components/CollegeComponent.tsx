"use client";
import React, { useEffect } from "react";

import "@/styles/owl.theme.default.min.css";

function CollegeComponent() {
  useEffect(() => {
    window.jQuery = require("@/styles/js/jquery.min.js");
    window.OwlCarousel = require("@/styles/js/owl.carousel.min.js");

    window.jQuery(".news-college-slider").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: true,
      thumbs: false,
      autoplay: false,
      smartSpeed: 1000,
      autoplayHoverPause: true,
      navText: [
        '<i class="ri-arrow-left-line"></i>',
        '<i class="ri-arrow-right-line"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 3,
        },
      },
    });
  }, []);
  return (
    <>
      {/* <!--- SECTION CONTENT --> */}
      <div className="podcasts-area pt-100 pb-70 bg-f4f6f9">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title style2">
                <h2>نبذة تعريفية</h2>
                <p>
                  هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي هذا للتجريب
                  شكل المحتوى فقط هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى
                  الأصلي هذا للتجريب شكل المحتوى فقط هذا النص بديل لنص آخر سيتم
                  تعديلة بالمحتوى الأصلي هذا للتجريب شكل المحتوى فقط هذا النص
                  بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي هذا للتجريب شكل
                  المحتوى فقط هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي
                  هذا للتجريب شكل المحتوى هذا النص بديل لنص آخر سيتم تعديلة
                  بالمحتوى فقط هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي
                  هذا للتجريب شكل المحتوى فقط.
                </p>
                <p>
                  هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي هذا للتجريب
                  شكل المحتوى فقط هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى
                  الأصلي هذا للتجريب شكل المحتوى فقط هذا النص بديل لنص آخر سيتم
                  تعديلة بالمحتوى الأصلي هذا للتجريب شكل المحتوى فقط هذا النص
                  بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي هذا للتجريب شكل
                  المحتوى فقط هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي
                  هذا للتجريب شكل المحتوى هذا النص بديل لنص آخر سيتم تعديلة
                  بالمحتوى فقط هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي
                  هذا للتجريب شكل المحتوى فقط.
                </p>
                <a href="admission-overview.html" className="default-btn btn">
                  التقديم و القبول<i className="flaticon-next"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories style-2">
                <h3>الكلية في أرقام</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="flaticon-student-with-graduation-cap"></i>
                      عدد الطلاب
                    </a>{" "}
                    <span>3,000</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-writing-tool"></i>عدد الأقسام
                    </a>
                    <span>10</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-user"></i>عدد الأساتذة
                    </a>
                    <span>20</span>
                  </li>
                </ul>
              </div>
              <div className="subscribe-area">
                <img src="/images/bah2.jpg" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--- /. SECTION CONTENT --> */}

      {/* <!---  SECTION CONTENT --> */}
      <div className="graduate-admission pt-100">
        <div className="container">
          <div className="section-title style2 style3">
            <h2>معلومات عن الكلية</h2>
          </div>
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
                          التأهيل الأكاديمي
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
                          برنامج البكالريوس
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
                          خطوات التسجيل
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
                          أقسام الكلية
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
                          <div className="col-xl-12">
                            <div className="overview">
                              <div className="learn">
                                <h3>الرؤية</h3>
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
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-curriculum"
                        role="tabpanel"
                        aria-labelledby="nav-curriculum-tab"
                      >
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="curriculum">
                              <h3>التأهيل الاكاديمي</h3>
                              <div className="list">
                                <ul>
                                  <li>
                                    يشار إلى هذه القواعد باسم &quot النظام
                                    الداخلي لمجلس جامعة بحري& quot وتدخل حيز
                                    التنفيذ بمجرد توقيعها من قبل رئيس المجلس.
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
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-instructor"
                        role="tabpanel"
                        aria-labelledby="nav-instructor-tab"
                      >
                        <div className="curriculum">
                          <h3>برنامج البكالريوس</h3>
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
                          <div className="col-xl-12">
                            <div className="curriculum">
                              <h3>خطوات التسجيل</h3>
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
                        </div>
                      </div>

                      <div
                        className="tab-pane fade"
                        id="nav-motion"
                        role="tabpanel"
                        aria-labelledby="nav-motion-tab"
                      >
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="curriculum">
                              <h3>أقسام الكلية</h3>
                              <div className="list">
                                <ul>
                                  <li>قسم الكهرباء</li>
                                  <li>قسم الميكانيكا</li>
                                  <li>قسم المساحة</li>
                                  <li>قسم الكهرباء</li>
                                  <li>قسم البرترول</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6">
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
      {/* <!--- /. SECTION CONTENT --> */}

      {/* <!--- SECTION CONTENT --> */}
      <div className="campus-life-area pb-70">
        <div className="container">
          <div className="section-title style2 style3">
            <h2>أقسام الكلية</h2>
          </div>
          <div className="campus-slider2 owl-carousel owl-theme">
            <div className="single-campus-card style-3">
              <div className="img">
                <img src="/images/bah2.jpg" alt="Image" />
              </div>
              <div className="campus-content">
                <span>كلية الهندسة</span>
                <h3>قسم الهندسة الكهربائية</h3>
              </div>
            </div>

            <div className="single-campus-card style-3">
              <div className="img">
                <img src="/images/bah2.jpg" alt="Image" />
              </div>
              <div className="campus-content">
                <span>كلية الهندسة</span>
                <h3>قسم هندسة الطيران</h3>
              </div>
            </div>

            <div className="single-campus-card style-3">
              <div className="img">
                <img src="/images/bah2.jpg" alt="Image" />
              </div>
              <div className="campus-content">
                <span>كلية الهندسة</span>
                <h3>قسم هندسة المساحة</h3>
              </div>
            </div>

            <div className="single-campus-card style-3">
              <div className="img">
                <img src="/images/bah2.jpg" alt="Image" />
              </div>
              <div className="campus-content">
                <span>كلية الهندسة</span>
                <h3>قسم الهندسة الميكانيكية</h3>
              </div>
            </div>

            <div className="single-campus-card style-3">
              <div className="img">
                <img src="/images/bah2.jpg" alt="Image" />
              </div>
              <div className="campus-content">
                <span>كلية الهندسة</span>
                <h3>قسم الهندسة المدنية</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--- /. SECTION CONTENT --> */}

      {/* <!--- SECTION CONTENT --> */}
      <div className="lates-news-area two ptb-100 bg-f4f6f9">
        <div className="container">
          <div className="section-title style2 style3">
            <h2>أخبار الكلية</h2>
          </div>
          <div className="news-college-slider owl-carousel owl-theme">
            <div className="single-news-card style2">
              <div className="news-img">
                <a href="new-details.html">
                  <img src="/images/bah1.jpg" alt="Image" />
                </a>
              </div>
              <div className="news-content">
                <a href="new-details.html">
                  <h3>هذا النص بديل لنص أخر سيتم تغييرة</h3>
                </a>
                <a href="new-details.html" className="read-more-btn">
                  <i className="flaticon-next"></i> إقرء المزيد
                </a>
              </div>
            </div>

            <div className="single-news-card style2">
              <div className="news-img">
                <a href="new-details.html">
                  <img src="/images/bah2.jpg" alt="Image" />
                </a>
              </div>
              <div className="news-content">
                <a href="new-details.html">
                  <h3>هذا النص بديل لنص أخر سيتم تغييرة</h3>
                </a>
                <a href="new-details.html" className="read-more-btn">
                  <i className="flaticon-next"></i> إقرء المزيد
                </a>
              </div>
            </div>

            <div className="single-news-card style2">
              <div className="news-img">
                <a href="new-details.html">
                  <img src="/images/bah1.jpg" alt="Image" />
                </a>
              </div>
              <div className="news-content">
                <a href="new-details.html">
                  <h3>هذا النص بديل لنص أخر سيتم تغييرة</h3>
                </a>
                <a href="new-details.html" className="read-more-btn">
                  <i className="flaticon-next"></i> إقرء المزيد
                </a>
              </div>
            </div>

            <div className="single-news-card style2">
              <div className="news-img">
                <a href="new-details.html">
                  <img src="/images/bah2.jpg" alt="Image" />
                </a>
              </div>
              <div className="news-content">
                <a href="new-details.html">
                  <h3>هذا النص بديل لنص أخر سيتم تغييرة</h3>
                </a>
                <a href="new-details.html" className="read-more-btn">
                  <i className="flaticon-next"></i> إقرء المزيد
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollegeComponent;
