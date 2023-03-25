import { ITranslate, useTranslate } from "@/utils/translate.util";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import AcademicItem from "./navbar/AcademicItem";
import AdministrationMenu from "./navbar/AdministrationItem";
import AdmissionItem from "./navbar/AdmissionItem";
import CentreItem from "./navbar/CentreItem";
import CollegeItem from "./navbar/CollegeItem";
import StudentItem from "./navbar/StudentItem";
import UniversitItem from "./navbar/UniversitItem";

declare global {
  interface Window {
    jQuery: any;
    Meanmenu: any;
  }
}

function NavigationMenu() {
  const { pathname, query, asPath, locale, push } = useRouter();

  function changeLanguage(lng: "ar" | "en") {
    const dir = lng === "ar" ? "rtl" : "ltr";

    document.dir = dir;
    push({ pathname, query }, asPath, { locale: lng });
  }

  function isActive(startWith: string): boolean {
    if (startWith === "/" && pathname == "/") return true;
    if (pathname && pathname.startsWith(startWith) && startWith !== "/") {
      return true;
    }

    return false;
  }

  useEffect(() => {
    window.jQuery = require("@/styles/js/jquery.min.js");
    window.Meanmenu = require("@/styles/js/jquery.meanmenu.js");
    const meanmenu = window.jQuery(".mean-menu");
    meanmenu.meanmenu({
      meanScreenWidth: "991",
    });
    window.jQuery(window).on("scroll", function (this: any) {
      if (window.jQuery(this).scrollTop() > 150) {
        window?.jQuery(".navbar-area").addClass("is-sticky");
      } else {
        window.jQuery(".navbar-area").removeClass("is-sticky");
      }
    });
  }, []);

  const t = useTranslate(translate, locale);
  return (
    <div className="navbar-area nav-bg-1">
      <div className="mobile-responsive-nav">
        <div className="container">
          <div
            style={{
              gap: "10px",
            }}
            className="mobile-responsive-menu"
          >
            <div className="logo ">
              <a href="index.html">
                <img
                  src="/images/logo-bahri.jpg"
                  className="main-logo"
                  alt="logo"
                  width="70"
                />
              </a>
            </div>

            {locale === "ar" ? (
              <span
                className="lang"
                onClick={() => changeLanguage("en")}
                style={{ cursor: "pointer" }}
              >
                {t("language")}
              </span>
            ) : (
              <span
                className="lang"
                onClick={() => changeLanguage("ar")}
                style={{ cursor: "pointer" }}
              >
                {t("language")}
              </span>
            )}
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
                    {t("home")}
                  </Link>
                </li>

                <UniversitItem {...{ pathname, locale }} />

                <AdministrationMenu {...{ pathname, locale }} />

                <AdmissionItem {...{ pathname, locale }} />

                <AcademicItem {...{ pathname, locale }} />

                <CollegeItem {...{ pathname, locale }} />

                <CentreItem {...{ pathname, locale }} />

                <StudentItem {...{ pathname, locale }} />

                <li className="nav-item">
                  <Link href="/news" className="nav-link">
                    {t("news")}
                  </Link>
                </li>
              </ul>
              <div className="others-options">
                <div className="lang">
                  {locale === "ar" ? (
                    <a
                      onClick={() => changeLanguage("en")}
                      style={{ cursor: "pointer" }}
                    >
                      {t("language")}
                      <i className="ri-globe-line"></i>
                    </a>
                  ) : (
                    <a
                      onClick={() => changeLanguage("ar")}
                      style={{ cursor: "pointer" }}
                    >
                      {t("language")}
                      <i className="ri-globe-line"></i>
                    </a>
                  )}
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

const translate: ITranslate = {
  home: {
    en: "Home",
    ar: "الرئيسية",
  },

  news: {
    en: "News",
    ar: "الأخبار",
  },
  language: {
    en: "English",
    ar: "العربية",
  },
};
