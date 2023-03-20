import { Contact, RelatedSite } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

async function fetchFooterData() {
  return await Promise.all([httpClient("contact"), httpClient("related-site")]);
}

function Footer() {
  const { locale } = useRouter();

  const [contact, setContact] = useState<Contact[]>([]);
  const [related, setRelated] = useState<RelatedSite[]>([]);

  const t = useTranslate(translate, locale);

  const lng = locale == "ar" ? "ar" : "en";

  useEffect(() => {
    (async function () {
      const [contact, related] = await fetchFooterData();
      setContact(contact);
      setRelated(related);
    })();
  }, []);
  return (
    <div className="footer-area pt-70 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="footer-logo-area">
              <a href="index.html">
                <img src="/images/logo-bahri.jpg" alt="Image" width="90" />
              </a>
              <p>
                جامعة ورثت تقاليد متجذرة من أسلافها في جامعات جوبا وأعالي النيل
                وبحر الغزال ورمبيك.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widjet">
              <h3>{t("contactUs")}</h3>
              <div className="list">
                <ul>
                  <li>
                    <i className="ri-map-2-line"></i>
                    {contact[0]?.location[lng]}
                  </li>
                  {contact[0]?.phone?.map((p) => (
                    <li key={p} className="none">
                      <i className="ri-phone-line"></i>

                      <a href="tel:">
                        <span> {p}</span>
                      </a>
                    </li>
                  ))}
                  <li className="none">
                    <i className="ri-mail-line"></i>
                    <a href="#">
                      <span className="__cf_email__"> {contact[0]?.email}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="footer-widjet">
              <h3>{t("otherPages")}</h3>
              <div className="list">
                <ul>
                  <li>
                    <a href="#">المعاهد</a>
                  </li>
                  <li>
                    <a href="#">الكليات</a>
                  </li>
                  <li>
                    <a href="#">الأبحاث</a>
                  </li>
                  <li>
                    <a href="#">أسئلة متكررة</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widjet">
              <h3>{t("relatedSite")}</h3>
              <div className="list">
                <ul>
                  {related.map((r) => (
                    <li key={r.url}>
                      <a href={r.url}>{r.text?.[lng]}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="shape">
          <img src="/images/shape-1.png" alt="Image" />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const contact = await httpClient("contact");

  return {
    props: {
      contact,
    },
    revalidate: 10,
  };
}

export default Footer;

const translate: ITranslate = {
  contactUs: {
    ar: "تواصل معنا",
    en: "Contact Us",
  },

  // location: {
  //   ar: "السودان - الخرطوم بحري",
  //   en: "Sudan - Khartoum North",
  // },
  otherPages: {
    ar: "صفحات أخرى",
    en: "Other pages",
  },
  relatedSite: {
    ar: "مواقع ذات صلة ",
    en: "Related sites",
  },
};
