import { FactAndFigure } from "@/types/models";
import { httpClient } from "@/utils/util.http";
import Script from "next/script";
import React, { useEffect } from "react";

import "../../styles/odometer.min.css";

function FactsAndFigure({ facts }: { facts: FactAndFigure[] }) {
  return (
    <>
      <Script src="../styles/js/odometer.min.js" />
      <div className="campus-safety-area pt-100 pb-70 bg-f4f6f9">
        <div className="container">
          <div className="section-title">
            <h2>الجامعة في أرقام</h2>
            <p>
              تضم جامعة بحري 19 كلية و 3 مراكز تقع في 5 أحرم جامعية يقع الحرم
              الرئيسي للجامعة في الكدرو شمال الخرطوم.
            </p>
          </div>
          <div className="counter-area">
            <div className="row">
              {facts?.map((item: any) => (
                <div key={item?.id} className="col-xl col-md-6">
                  <div className="counter-card">
                    <h1>
                      <span
                        className="odometer odometer-auto-theme"
                        data-count="4981"
                      >
                        <div className="odometer-inside">{item?.count}</div>
                      </span>
                      <span className="target">+</span>
                    </h1>
                    <p>{item?.descriptionAr}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FactsAndFigure;
