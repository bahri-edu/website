import { EService } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function ElServices() {
  const [services, setServices] = useState<EService[]>([]);

  const { locale } = useRouter();

  const t = useTranslate(translate, locale);

  const lng = locale == "ar" ? "ar" : "en";

  useEffect(() => {
    (async () => {
      const srvs = await httpClient("electronic-service");
      setServices(srvs);
    })();
  }, []);
  return (
    <div className="campus-safety-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </div>
        <div className="row">
          {services?.map((service: any) => (
            <div key={service?.id} className="col-lg-3 col-sm-6">
              <div className="single-academics-card3">
                <div className="icon">
                  <i className={service?.icon}></i>
                </div>
                <a href="#">
                  <h3>{service?.title[lng]}</h3>
                </a>
                <a href="#" className="read-more-btn">
                  {t("readMore")} <i className="flaticon-next"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElServices;

const translate: ITranslate = {
  title: {
    en: "Electronic Services",
    ar: "الخدمات الإلكترونية",
  },
  description: {
    ar: "تقدم الجامعة مجموعة من الخدمات الإلكترونية",
    en: "The university offers a range of electronic services",
  },
  readMore: {
    ar: "إقرأ المزيد",
    en: "Read More",
  },
};
