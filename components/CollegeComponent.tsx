import { College } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import React, { useEffect } from "react";
import CollegeNewsCard from "./CollegeNewsCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

function CollegeComponent({
  college,
  lng,
}: {
  college: College;
  lng: "ar" | "en";
}) {
  const t = useTranslate(translate, lng);

  return (
    <>
      {/* <!--- SECTION CONTENT --> */}
      <div className="podcasts-area pt-100 pb-70 bg-f4f6f9">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title style2">
                <h2>{t("introduction")}</h2>
                <p>{college?.introduction?.[lng]}</p>

                <a href="admission-overview.html" className="default-btn btn">
                  {t("admissions")}
                  <i className="flaticon-next"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="categories style-2">
                <h3>{t("collegeInNumber")}</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="flaticon-student-with-graduation-cap"></i>
                      {t("numberOfStudent")}
                    </a>{" "}
                    <span>{college?.counter?.student}</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-writing-tool"></i>
                      {t("numberOfDepartment")}
                    </a>
                    <span>{college?.counter?.department}</span>
                  </li>
                  <li>
                    <a href="#">
                      <i className="flaticon-user"></i>
                      {t("numberOfStaff")}
                    </a>
                    <span>{college?.counter?.staff}</span>
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
            <h2> {t("aboutCollegeTitle")}</h2>
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
                          {t("academicQualification")}
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
                          {t("bachelorProgram")}
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
                          {t("registrationStep")}
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
                          {t("collegeDepartment")}
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
                                <h3> {t("vision")}</h3>
                                <p>{college?.info?.vision?.[lng]}</p>
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
                              <h3> {t("academicQualification")}</h3>

                              <div>
                                {college?.info?.academicQualification?.[lng]}
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
                          <h3> {t("bachelorProgram")}</h3>

                          <div>{college?.info?.bachelorProgram?.[lng]}</div>
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
                              <h3>{t("registrationStep")}</h3>
                              <div className="list">
                                {college?.info?.bachelorProgram?.[lng]}
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
                              <h3>{t("collegeDepartment")}</h3>
                              <div className="list">
                                <ul>
                                  {college?.info?.collegeDepartment?.map(
                                    (dep, x) => (
                                      <li key={`dep-${x}`}>{dep?.[lng]}</li>
                                    )
                                  )}
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
      {/* <div className="campus-life-area pb-70">
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
      </div> */}
      {/* <!--- /. SECTION CONTENT --> */}

      {/* <!--- SECTION CONTENT --> */}
      <div className="lates-news-area two ptb-100 bg-f4f6f9">
        <div className="container">
          <div className="section-title style2 style3">
            <h2>أخبار الكلية</h2>
          </div>
          <div className="news-college-slider owl-carousel owl-theme">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={10}
              navigation
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {[1, 2, 3, 4].map((r, x) => (
                <SwiperSlide key={x}>
                  <CollegeNewsCard
                    key={r}
                    title="هذا النص بديل لنص أخر سيتم تغييرة"
                    readMore={t("readMore")}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollegeComponent;

const translate: ITranslate = {
  title: {
    ar: "عن الجامعة",
    en: "About University",
  },
  readMore: {
    ar: "إقرأ المزيد",
    en: "Read More",
  },
  introduction: {
    ar: "نبذة تعريفية",
    en: "Introduction",
  },
  admissions: {
    ar: " التقديم و القبول",
    en: "Submission and Admissions",
  },
  collegeInNumber: {
    ar: "الكلية في أرقام",
    en: "College in numbers",
  },
  numberOfStudent: {
    ar: "عدد الطلاب",
    en: "number of students",
  },
  numberOfDepartment: {
    ar: "عدد الأقسام",
    en: "The number of Department",
  },
  numberOfStaff: {
    ar: "عدد الأساتذة",
    en: "The number of Staff",
  },
  aboutCollegeTitle: {
    ar: "معلومات عن الكلية",
    en: "Information about the college",
  },
  vision: {
    ar: "الرؤية",
    en: "Vision",
  },
  academicQualification: {
    ar: "التأهيل الاكاديمي",
    en: "Academic qualification",
  },
  bachelorProgram: {
    ar: "برنامج البكالريوس",
    en: "Bachelor's program",
  },
  registrationStep: {
    ar: "خطوات التسجيل",
    en: "Registration steps",
  },
  collegeDepartment: {
    ar: "أقسام الكلية",
    en: "College departments",
  },
  // introduction: {
  //   ar: "نبذة تعريفية",
  //   en: "Introduction",
  // },
};
