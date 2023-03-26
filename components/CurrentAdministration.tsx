import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

export type CurrentAdministrationProps = {
  position: string;
  name: string;
  birthdate: string;
  degree: string;
  email: string;
  phone: string;
  qualifications: string[];
  socials: { icon: string; url: string }[];
};

export const currentAdministrationProps: CurrentAdministrationProps = {
  name: "أحمد عبد القادر آدم",
  degree: "بروفيسر",
  birthdate: "10 / 6 / 1963",
  email: "ahmed@gmail.com",
  phone: "249918199724+",
  position: "مدير الجامعة",
  qualifications: [
    " دكتوراه - جامعة هوكايدو - اليابان.",
    " ماجيستير جامعة الخرطوم - السودان.",
    " بكالريوس - جامعة جوبا - السودان.",
  ],
  socials: [
    { icon: "ri-facebook-fill", url: "#" },
    { icon: "ri-twitter-fill", url: "#" },
    { icon: "ri-linkedin-fill", url: "#" },
    { icon: "ri-google-fill", url: "#" },
  ],
};

function CurrentAdministration({
  position,
  name,
  birthdate,
  degree,
  email,
  phone,
  qualifications,
  socials,
}: CurrentAdministrationProps) {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <div className="pt-100 pb-70">
      <div className="container">
        <div className="instructor">
          <div className="row">
            <div className="col-lg-4">
              <div className="instructor-image">
                <img src="/images/user.png" alt="Image" />
                <div className="content">
                  <h4>{name}</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="instructor-content">
                <div className="name">
                  <h3>{position}</h3>
                  <div className="quick-contact">
                    <ul className="row">
                      <li className="col-md-6">
                        <i className="ri-user-line"></i>
                        <span> {t("name")}:</span>
                        <div className="content">{name}</div>
                      </li>
                      <li className="col-md-6">
                        <i className="ri-calendar-2-line"></i>
                        <span>{t("dateOfBirth")}:</span>
                        <div className="content">{birthdate}</div>
                      </li>
                      <li className="col-md-6">
                        <i className="ri-contacts-book-2-line"></i>
                        <span>{t("degree")}:</span>
                        <div className="content">{degree}</div>
                      </li>
                      <li className="col-md-6">
                        <i className="ri-mail-line"></i>
                        <span> {t("email")}:</span>
                        <div className="content">
                          <a href="mailto:">{email}</a>
                        </div>
                      </li>
                      <li className="col-md-6">
                        <i className="ri-cellphone-line"></i>
                        <span> {t("phone")}:</span>
                        <div className="content">
                          <a href="tel:">{phone}</a>
                        </div>
                      </li>
                      <li className="col-md-6">
                        <i className="ri-shopping-bag-line"></i>
                        <span>{t("position")}:</span>
                        <div className="content">{position}</div>
                      </li>
                    </ul>
                  </div>
                  <h3>{t("qualification")}</h3>
                  <div className="how-to-apply">
                    <div className="apply-list">
                      <div className="row">
                        <div className="col-lg-12">
                          <ul>
                            {qualifications.map((q) => (
                              <li key={q}>
                                <i className="ri-checkbox-circle-line"></i>
                                {q}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="social">
                  <h3>{t("social")}</h3>
                  <ul>
                    {socials.map((s) => (
                      <li key={s.url}>
                        <a href={s.url} target="_blank" rel="noreferrer">
                          <i className={s.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentAdministration;

const translate: ITranslate = {
  name: {
    ar: "الإسم",
    en: "Name",
  },
  dateOfBirth: {
    ar: "تاريخ الميلاد",
    en: "Date of Birth",
  },
  degree: {
    ar: "الدرجة العلمية",
    en: "Degree",
  },

  email: {
    ar: "البريد الإلكتروني",
    en: "Email",
  },
  phone: {
    ar: "رقم الهاتف",
    en: "Phone Number",
  },
  position: {
    ar: "الوظيفة",
    en: "Position",
  },
  qualification: {
    ar: "المؤهلات",
    en: "Qualifications",
  },
  social: {
    ar: "مواقع التواصل",
    en: "Social Media",
  },
};
