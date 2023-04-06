import { FactAndFigure, FactType } from "@/types/models";
import { httpClient } from "@/utils/util.http";
import React, { useEffect, useState } from "react";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";

function FactsAndFigure() {
  const [facts, setFacts] = useState<FactAndFigure[]>([]);

  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);

  useEffect(() => {
    (async () => {
      const fas = await httpClient("fact-and-figure");

      const factStaff = fas.filter((f: any) => f.type == FactType.STAFF);
      setFacts(factStaff);
    })();
  }, []);

  return (
    <>
      <div className="campus-safety-area pt-100 pb-70 bg-f4f6f9">
        <div className="container">
          <div className="section-title">
            <h2>{t("title")}</h2>
            <p>{t("description")}</p>
          </div>
          <div className="counter-area">
            <div className="row">
              {facts.length ? (
                facts.map((item) => (
                  <div key={item?.id} className="col-xl col-md-6">
                    <div className="counter-card">
                      <h1
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "2px",
                        }}
                      >
                        <span
                          className="odometer odometer-auto-theme"
                          data-count="4981"
                        >
                          <div className="odometer-inside">{item?.count}</div>
                        </span>
                        <span className="target">+</span>
                      </h1>
                      <p>{item?.description?.[lng]}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    display: "flex",
                    gap: "7px",
                  }}
                >
                  <Skeleton inline height={200} width={200} />
                  <Skeleton inline height={200} width={200} />
                  <Skeleton inline height={200} width={200} />
                  <Skeleton inline height={200} width={200} />
                  <Skeleton inline height={200} width={200} />
                  <Skeleton inline height={200} width={200} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FactsAndFigure;

const translate: ITranslate = {
  title: {
    en: "The university in numbers",
    ar: "الجامعة في أرقام",
  },
  description: {
    ar: "تضم جامعة بحري 19 كلية و 3 مراكز تقع في 5 أحرم جامعية يقع الحرم الرئيسي للجامعة في الكدرو شمال الخرطوم",
    en: "The University of Bahri includes 19 colleges and 3 centers located in 5 university campuses. The main campus of the university is located in Kadro, north of Khartoum.",
  },
};
