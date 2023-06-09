"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useEffect } from "react";

declare global {
  interface Window {
    jQuery: any;
    Meanmenu: any;
  }
}

function NavigationMenu() {
  const pathname = usePathname();

  function isActive(startWith: string): boolean {
    if (startWith === "/" && pathname == "/") return true;
    if (pathname && pathname.startsWith(startWith) && startWith !== "/") {
      return true;
    }

    return false;
  }

  useEffect(() => {
    window.jQuery = require("../styles/js/jquery.min.js");
    window.Meanmenu = require("../styles/js/jquery.meanmenu.js");

    const meanmenu = window.jQuery(".mean-menu");
    meanmenu.meanmenu({
      meanScreenWidth: "991",
    });
    // window.jQuery(window).on("scroll", function () {
    //   if (window.jQuery(this).scrollTop() > 150) {
    //     window.jQuery(".navbar-area").addClass("is-sticky");
    //   } else {
    //     window.jQuery(".navbar-area").removeClass("is-sticky");
    //   }
    // });
  }, []);
  return (
    <div className="navbar-area nav-bg-1">
      <div className="mobile-responsive-nav">
        <div className="container">
          <div className="mobile-responsive-menu">
            <div className="logo">
              <a href="index.html">
                <img
                  src="/images/logo-bahri.jpg"
                  className="main-logo"
                  alt="logo"
                  width="70"
                />
              </a>
            </div>
            <span className="lang">English</span>
          </div>
        </div>
      </div>
      <div className="desktop-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="index.html">
              <img src="/images/logo-bahri.jpg" alt="logo" width="85" />
            </a>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${isActive("/") && " active"}`}
                  >
                    الرئيسية
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle   
                    ${isActive("/university") && " active"}
                    `}
                  >
                    عن الجامعة
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/university/vision-and-mission"
                        className="nav-link"
                      >
                        الرؤية و الرسالة
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/university/historical-background"
                        className="nav-link"
                      >
                        الخلفية التاريخية
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/university/facts-and-figures"
                        className="nav-link"
                      >
                        حقائق و أرقام
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/university/logo" className="nav-link">
                        شعار الجامعة{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/university/university-council"
                        className="nav-link"
                      >
                        مجلس الجامعة
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/university/the-deans-board"
                        className="nav-link"
                      >
                        مجلس العمداء
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/university/the-senate" className="nav-link">
                        مجلس الأساتذة
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle
                  ${isActive("/administration") && " active"}
                  `}
                  >
                    الإدارة
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="#" className="nav-link  dropdown-toggle">
                        مدير الجامعة
                      </a>
                      <ul className="dropdown-menu tow">
                        <li className="nav-item">
                          <Link
                            href="/administration/vice-chancellor/office"
                            className="nav-link"
                          >
                            مكتب مدير الجامعة
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/vice-chancellor/message"
                            className="nav-link"
                          >
                            رسالة مدير الجامعة
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/vice-chancellor/cv"
                            className="nav-link"
                          >
                            السيرة الذاتية لمدير الجامعة
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        إدارة الجامعة الحالية
                      </a>
                      <ul className="dropdown-menu tow">
                        <li className="nav-item">
                          <Link
                            href="/administration/current-administration/vice-chancellor"
                            className="nav-link"
                          >
                            مدير الجامعة
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/current-administration/deputy-vice-chancellor"
                            className="nav-link"
                          >
                            نائب مدير الجامعة
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/current-administration/the-principal"
                            className="nav-link"
                          >
                            وكيل الجامعة
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/current-administration/secretary-of-scientific-affairs"
                            className="nav-link"
                          >
                            أمين الشؤون العلمية
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        إدارات الجامعة
                      </a>
                      <ul className="dropdown-menu tow">
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/academic-affairs"
                            className="nav-link"
                          >
                            أمانة الشؤون العلمية
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/principle-office"
                            className="nav-link"
                          >
                            مكتب وكيل الجامعة
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/human-resources"
                            className="nav-link"
                          >
                            إدارة الموارد البشرية
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/cultural-relations-and-information"
                            className="nav-link"
                          >
                            إدارة العلاقات الثقافية
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/financial-controller-office"
                            className="nav-link"
                          >
                            الإدارة المالية
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/investment-directorate"
                            className="nav-link"
                          >
                            إدارة الإستثمار
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/quality-management-and-development"
                            className="nav-link"
                          >
                            إدارة الجودة و التطوير
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/services-management"
                            className="nav-link"
                          >
                            إدارة الخدمات
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/medical-and-health-services-unit"
                            className="nav-link"
                          >
                            وحدة الخدمات الطبية و الصحية
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/university-police"
                            className="nav-link"
                          >
                            إدارة الحرس الجامعي
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle
                  ${isActive("/admission") && " active"}
                  `}
                  >
                    القبول
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/admission/overview" className="nav-link">
                        نظرة عامة
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admission/postgraduate-programs"
                        className="nav-link"
                      >
                        برنامج الدراسات العليا
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admission/higher-diploma-programme"
                        className="nav-link"
                      >
                        برنامج الدبلوم العالي
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admission/university-studies-programs"
                        className="nav-link"
                      >
                        برنامج البكالريوس{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admission/university-diploma-programs"
                        className="nav-link"
                      >
                        برنامج الدبلوم الجامعي
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle
                  ${isActive("/academics") && " active"}
                  `}
                  >
                    الأكاديمية
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/academics/regulations" className="nav-link">
                        اللوائح
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/academics/calendar" className="nav-link">
                        التقويم الدراسي
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/academics/students" className="nav-link">
                        الطلاب
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mega-item">
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle
                  ${isActive("/collegescls") && " active"}
                  `}
                  >
                    الكليات
                  </a>
                  <ul className="dropdown-menu mega">
                    <li className="mega-container">
                      <div className="single-magemenu">
                        <ul>
                          <li className="nav-item">
                            <Link href="/colleges/animal" className="nav-link">
                              الإنتاج الحيواني
                            </Link>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              الهندسة و العمارة
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              علوم الحاسوب و الرياضيات
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              العلوم التطبيقية و الصناعية
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              جيولوجيا البترول و المعادن
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="single-magemenu">
                        <ul>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              التربية
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              العلوم الإدارية
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              الدراسات العليا
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              الموارد الطبيعية و الدراسات البيئية
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              الآداب و العلوم الإنسانية
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="single-magemenu">
                        <ul>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              الزراعة
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              القانون
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              اللغات و الترجمة
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              الدراسات الإجتماعية و الإقتصادية
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              دراسات المجتمع و التنمية الريفية
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="single-magemenu">
                        <ul>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              الطب
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              علوم التمريض
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              الطب البيطري
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              الصحة العامة و صحة البيئة
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    المراكز
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/centres/human-resource-development-and-continual-education"
                        className="nav-link"
                      >
                        تنمية الموارد البشرية و التعليم المستمر
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/centres/peace-and-development"
                        className="nav-link"
                      >
                        السلام والتنمية
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/centres/language-and-translation"
                        className="nav-link"
                      >
                        اللغات والترجمة
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/centres/one-health" className="nav-link">
                        الصحة الواحده
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    الطلاب
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/students/cs-and-math-student-elearning-form-reg"
                        className="nav-link"
                      >
                        كلية علوم الحاسوب و الرياضيات نموذج التسجيل للتعليم
                        الالكتروني
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/students/registration-of-students-of-the-college-of-engineering-and-architecture-for-e-learning"
                        className="nav-link"
                      >
                        تسجيل طلاب كلية الهندسة و العمارة للتعليم الالكتروني
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/students/colleges-time-tables"
                        className="nav-link"
                      >
                        جداول الامتحانات
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/students/examinations-tables"
                        className="nav-link"
                      >
                        النتيجة
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/news" className="nav-link">
                    الأخبار
                  </Link>
                </li>
              </ul>
              <div className="others-options">
                <div className="lang">
                  <a href="#">
                    English <i className="ri-globe-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenu;
