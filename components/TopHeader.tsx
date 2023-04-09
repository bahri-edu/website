import { DeanshipTypeEnum } from "@/types/models";
import { getDeanship } from "@/utils/mic.util";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function TopHeader() {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <div className="top-header-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="header-left-content">
              <div className="list">
                <ul>
                  <li className="menu">
                    <a href="#"> {t("deanship")}</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href={`/deanship/${DeanshipTypeEnum.DEANSHIPOFSCIENTIFICRESEARCH}`}
                        >
                          <a className="nav-link">
                            {
                              getDeanship(
                                DeanshipTypeEnum.DEANSHIPOFSCIENTIFICRESEARCH
                              )[lng]
                            }
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href={`/deanship/${DeanshipTypeEnum.DEANSHIPOFSTUDENTAFFAIRS}`}
                        >
                          <a className="nav-link">
                            {
                              getDeanship(
                                DeanshipTypeEnum.DEANSHIPOFSTUDENTAFFAIRS
                              )[lng]
                            }
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href={`/deanship/${DeanshipTypeEnum.DEANSHIPOFLIBRARIES}`}
                        >
                          <a className="nav-link">
                            {
                              getDeanship(DeanshipTypeEnum.DEANSHIPOFLIBRARIES)[
                                lng
                              ]
                            }
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">{t("alumni")}</a>
                  </li>
                  <li className="menu">
                    <a href="#">{t("eServices")}</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          التعليم الإلكتروني
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          بريد الجامعة
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          الحساب الموحد
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          النتيجة
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">{t("careers")}</a>
                  </li>
                  <li>
                    <a href="#">{t("quickLink")}</a>
                  </li>
                  <li>
                    <a href="#">{t("contactus")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="header-right-content">
              <div className="search">
                <input type="text" placeholder={t("search")} />
                <button type="submit">
                  <i className="flaticon-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;

const translate: ITranslate = {
  deanship: {
    en: "Deanships",
    ar: "العمادات",
  },
  alumni: {
    en: "Alumni",
    ar: "الخريجون",
  },

  eServices: {
    en: "E-Services",
    ar: "الخدمات الإلكترونية",
  },

  careers: {
    en: "Careers",
    ar: "وظائف",
  },

  quickLink: {
    en: "Quick Link",
    ar: "روابط سريعة",
  },
  contactus: {
    en: "Contact Us",
    ar: "إتصل بنا",
  },

  search: {
    en: "Search Here",
    ar: "إبحث هنا",
  },
};
