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
                    ????????????????
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle   
                    ${isActive("/university") && " active"}
                    `}
                  >
                    ???? ??????????????
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/university/vision-and-mission"
                        className="nav-link"
                      >
                        ???????????? ?? ??????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/university/historical-background"
                        className="nav-link"
                      >
                        ?????????????? ??????????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/university/facts-and-figures"
                        className="nav-link"
                      >
                        ?????????? ?? ??????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/university/logo" className="nav-link">
                        ???????? ??????????????{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/university/university-council"
                        className="nav-link"
                      >
                        ???????? ??????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/university/the-deans-board"
                        className="nav-link"
                      >
                        ???????? ??????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/university/the-senate" className="nav-link">
                        ???????? ????????????????
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
                    ??????????????
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="#" className="nav-link  dropdown-toggle">
                        ???????? ??????????????
                      </a>
                      <ul className="dropdown-menu tow">
                        <li className="nav-item">
                          <Link
                            href="/administration/vice-chancellor/office"
                            className="nav-link"
                          >
                            ???????? ???????? ??????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/vice-chancellor/message"
                            className="nav-link"
                          >
                            ?????????? ???????? ??????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/vice-chancellor/cv"
                            className="nav-link"
                          >
                            ???????????? ?????????????? ?????????? ??????????????
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        ?????????? ?????????????? ??????????????
                      </a>
                      <ul className="dropdown-menu tow">
                        <li className="nav-item">
                          <Link
                            href="/administration/current-administration/vice-chancellor"
                            className="nav-link"
                          >
                            ???????? ??????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/current-administration/deputy-vice-chancellor"
                            className="nav-link"
                          >
                            ???????? ???????? ??????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/current-administration/the-principal"
                            className="nav-link"
                          >
                            ???????? ??????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/current-administration/secretary-of-scientific-affairs"
                            className="nav-link"
                          >
                            ???????? ???????????? ??????????????
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <a href="#" className="nav-link dropdown-toggle">
                        ???????????? ??????????????
                      </a>
                      <ul className="dropdown-menu tow">
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/academic-affairs"
                            className="nav-link"
                          >
                            ?????????? ???????????? ??????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/principle-office"
                            className="nav-link"
                          >
                            ???????? ???????? ??????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/human-resources"
                            className="nav-link"
                          >
                            ?????????? ?????????????? ??????????????
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/cultural-relations-and-information"
                            className="nav-link"
                          >
                            ?????????? ???????????????? ????????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/financial-controller-office"
                            className="nav-link"
                          >
                            ?????????????? ??????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/investment-directorate"
                            className="nav-link"
                          >
                            ?????????? ??????????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/quality-management-and-development"
                            className="nav-link"
                          >
                            ?????????? ???????????? ?? ??????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/services-management"
                            className="nav-link"
                          >
                            ?????????? ??????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/medical-and-health-services-unit"
                            className="nav-link"
                          >
                            ???????? ?????????????? ???????????? ?? ????????????
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href="/administration/university-administrations/university-police"
                            className="nav-link"
                          >
                            ?????????? ?????????? ??????????????
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
                    ????????????
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/admission/overview" className="nav-link">
                        ???????? ????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admission/postgraduate-programs"
                        className="nav-link"
                      >
                        ???????????? ???????????????? ????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admission/higher-diploma-programme"
                        className="nav-link"
                      >
                        ???????????? ?????????????? ????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admission/university-studies-programs"
                        className="nav-link"
                      >
                        ???????????? ????????????????????{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/admission/university-diploma-programs"
                        className="nav-link"
                      >
                        ???????????? ?????????????? ??????????????
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
                    ????????????????????
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/academics/regulations" className="nav-link">
                        ??????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/academics/calendar" className="nav-link">
                        ?????????????? ??????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/academics/students" className="nav-link">
                        ????????????
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
                    ??????????????
                  </a>
                  <ul className="dropdown-menu mega">
                    <li className="mega-container">
                      <div className="single-magemenu">
                        <ul>
                          <li className="nav-item">
                            <Link href="/colleges/animal" className="nav-link">
                              ?????????????? ????????????????
                            </Link>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ?????????????? ?? ??????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????? ?????????????? ?? ??????????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????????? ?????????????????? ?? ????????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????????????? ?????????????? ?? ??????????????
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="single-magemenu">
                        <ul>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ??????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????????? ????????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????????????? ????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ?????????????? ???????????????? ?? ???????????????? ??????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????????? ?? ???????????? ??????????????????
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="single-magemenu">
                        <ul>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ??????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ??????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????????? ?? ??????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????????????? ???????????????????? ?? ????????????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????????? ?????????????? ?? ?????????????? ??????????????
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className="single-magemenu">
                        <ul>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????? ??????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ???????? ??????????????
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              ?????????? ???????????? ?? ?????? ????????????
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    ??????????????
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/centres/human-resource-development-and-continual-education"
                        className="nav-link"
                      >
                        ?????????? ?????????????? ?????????????? ?? ?????????????? ??????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/centres/peace-and-development"
                        className="nav-link"
                      >
                        ???????????? ????????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/centres/language-and-translation"
                        className="nav-link"
                      >
                        ???????????? ????????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/centres/one-health" className="nav-link">
                        ?????????? ??????????????
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link dropdown-toggle">
                    ????????????
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link
                        href="/students/cs-and-math-student-elearning-form-reg"
                        className="nav-link"
                      >
                        ???????? ???????? ?????????????? ?? ?????????????????? ?????????? ?????????????? ??????????????
                        ????????????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/students/registration-of-students-of-the-college-of-engineering-and-architecture-for-e-learning"
                        className="nav-link"
                      >
                        ?????????? ???????? ???????? ?????????????? ?? ?????????????? ?????????????? ????????????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/students/colleges-time-tables"
                        className="nav-link"
                      >
                        ?????????? ????????????????????
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/students/examinations-tables"
                        className="nav-link"
                      >
                        ??????????????
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link href="/news" className="nav-link">
                    ??????????????
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
