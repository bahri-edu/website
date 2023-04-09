import AboutBanner from "@/components/AboutBanner";
import { Social, Translate } from "@/types/models";
import { useRouter } from "next/router";
import React from "react";

interface Staff {
  possison: Translate;
  name: Translate;
  awardsAndgrants: Translate[];
  educationAndExperience: Translate[];
  internationalConferencesAndCourses: Translate[];
  workshops: Translate[];
  qualifications: Translate[];
  socials: Social[];
  phone: string;
  email: string;
}

const staff: Staff = {
  possison: {
    ar: "نائب مدير الموارد البشرية",
    en: "نائب مدير الموارد البشرية",
  },
  name: {
    ar: "أحمد محمد علي",
    en: "أحمد محمد علي",
  },
  awardsAndgrants: [
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
  ],
  educationAndExperience: [
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
  ],
  internationalConferencesAndCourses: [
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
  ],
  workshops: [
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
  ],
  qualifications: [
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
    {
      ar: "هذا بديل لنص آخر",
      en: "هذا بديل لنص آخر",
    },
  ],
  socials: [
    {
      icon: "+249913598680",
      url: "",
    },
  ],
  phone: "+24913569850",
  email: "ahmedmohamed@gmail.com",
};

function Staff() {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";
  return (
    <>
      <AboutBanner title="staff" breadcrumbs={["staff"]} />

      <div className="events-details-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="about-lecturer bg">
                <div className="row align-items-center">
                  <img src="/images/user.png" alt="Image" />
                  <div className="address">
                    <h4>{staff.name[lng]}</h4>
                    <div className="list two">
                      <ul>
                        <li>
                          <i className="ri-shopping-bag-line"></i>{" "}
                          {staff.possison[lng]}
                        </li>
                        <li>
                          <i className="ri-cellphone-line"></i>{" "}
                          <a href="tel:">{staff.phone}</a>
                        </li>
                        <li>
                          <i className="ri-mail-line"></i>{" "}
                          <a href="#">{staff.email}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="social-content mb-0">
                  <ul>
                    <li>
                      <a href="#" target="_blank">
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="next-workshop bg">
                <h3>المؤهلات العلمية</h3>
                <div className="list">
                  <ul>
                    {staff.qualifications.map((qual, x) => (
                      <li key={`qualifications-${x}`}>{qual[lng]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="emp-left-content">
                <div className="top">
                  <h3> {staff.name[lng]}</h3>
                  <span> {staff.possison[lng]}</span>
                </div>
                <div className="brought">
                  <h3>الجوائز والمنح</h3>
                  <div className="campus-content p-0 mb-0">
                    <div className="list">
                      <div className="row">
                        {staff.awardsAndgrants.map((qual, x) => (
                          <div
                            key={`awardsAndgrants-${x}`}
                            className="col-lg-4 col-md-6"
                          >
                            <ul>
                              <li>
                                <i className="ri-star-line"></i>
                                <p>{qual[lng]}</p>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="brought">
                  <h3>التعليم وخبرة البحث</h3>
                  <div className="campus-content p-0 mb-0">
                    <div className="list">
                      <div className="row">
                        {staff.educationAndExperience.map((edu, x) => (
                          <div
                            key={`educationAndExperience-${x}`}
                            className="col-lg-4 col-md-6"
                          >
                            <ul>
                              <li>
                                <i className="ri-check-fill"></i>
                                <p>{edu[lng]}</p>
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="brought">
                  <h3>المؤتمرات العالمية و الدورات</h3>
                  <div className="campus-content p-0 mb-0">
                    <div className="list">
                      <div className="row">
                        {staff.internationalConferencesAndCourses.map(
                          (conf, x) => (
                            <div
                              key={`educationAndExperience-${x}`}
                              className="col-lg-4 col-md-6"
                            >
                              <ul>
                                <li>
                                  <i className="ri-check-fill"></i>
                                  <p>{conf[lng]} </p>
                                </li>
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="brought">
                  <h3>ورش العمل</h3>
                  <div className="campus-content p-0 mb-0">
                    <div className="list">
                      <div className="row">
                        {staff.workshops.map((work, x) => (
                          <div
                            key={`educationAndExperience-${x}`}
                            className="col-lg-4 col-md-6"
                          >
                            <ul>
                              <li>
                                <i className="ri-check-fill"></i>
                                <p>{work[lng]}</p>
                              </li>
                            </ul>
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
      </div>
    </>
  );
}

export default Staff;
