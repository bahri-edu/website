"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type } from "os";
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
    window.jQuery(window).on("scroll", function () {
      if (window.jQuery(this).scrollTop() > 150) {
        window.jQuery(".navbar-area").addClass("is-sticky");
      } else {
        window.jQuery(".navbar-area").removeClass("is-sticky");
      }
    });
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
                    className={`nav-link dropdown-toggle   ${
                      isActive("/about") && " active"
                    }`}
                  >
                    عن الجامعة
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/about/vision" className="nav-link">
                        الرؤية و الرسالة
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/historical" className="nav-link">
                        الخلفية التاريخية
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/facts" className="nav-link">
                        حقائق و أرقام
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/logo" className="nav-link">
                        شعار الجامعة{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/council" className="nav-link">
                        مجلس الجامعة
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/logo" className="nav-link">
                        مجلس العمداء
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about/logo" className="nav-link">
                        مجلس الأساتذة
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    الإدارة
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="#" className="nav-link  dropdown-toggle">
                        مدير الجامعة
                      </a>
                      <ul className="dropdown-menu tow">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            مكتب مدير الجامعة
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/managment/manager/message"
                            className="nav-link"
                          >
                            رسالة مدير الجامعة
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            السيرة الذاتية لمدير الجامعة
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        إدارة الجامعة الحالية
                      </a>
                      <ul className="dropdown-menu tow">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            مدير الجامعة
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            نائب مدير الجامعة
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            وكيل الجامعة
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            السيرأمين الشؤون العلمية
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        إدارات الجامعة
                      </a>
                      <ul className="dropdown-menu tow">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            أمانة الشؤون العلمية
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            مكتب وكيل الجامعة
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            إدارة الموارد البشرية
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            الإدارة المالية
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    القبول
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        نظرة عامة
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        برنامج الدراسات العليا
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        برنامج الدبلوم العالي
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        برنامج البكالريوس{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        برنامج الدبلوم الجامعي
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    الأكاديمية
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        اللوائح
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        التقويم الدراسي
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        الطلاب
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item mega-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    الكليات
                  </a>
                  <ul className="dropdown-menu mega">
                    <li className="mega-container">
                      <div className="single-magemenu">
                        <ul>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              الإنتاج الحيواني
                            </a>
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
                      <a href="#" className="nav-link">
                        تنمية الموارد البشرية و التعليم المستمر
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        السلام والتنمية
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        اللغات والترجمة
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        الصحة الواحده
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    الطلاب
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        كلية علوم الحاسوب و الرياضيات نموذج التسجيل للتعليم
                        الالكتروني
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        تسجيل طلاب كلية الهندسة و العمارة للتعليم الالكتروني
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        جداول الامتحانات
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        النتيجة
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    الأخبار
                  </a>
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
