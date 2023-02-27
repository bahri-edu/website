import Script from "next/script";
import React, { useEffect } from "react";

import "../../styles/odometer.min.css";

function FactsAndFigure() {
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
              <div className="col-xl col-md-6">
                <div className="counter-card">
                  <h1>
                    <span
                      className="odometer odometer-auto-theme"
                      data-count="4981"
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">4</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">9</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">1</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <span className="target">+</span>
                  </h1>
                  <p> دراسات عليا</p>
                </div>
              </div>
              <div className="col-xl col-md-6">
                <div className="counter-card">
                  <h1>
                    <span
                      className="odometer odometer-auto-theme"
                      data-count="305"
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">3</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <span className="target">+</span>
                  </h1>
                  <p>الأساتذة المساعدون</p>
                </div>
              </div>
              <div className="col-xl col-md-6">
                <div className="counter-card">
                  <h1>
                    <span
                      className="odometer odometer-auto-theme"
                      data-count="86"
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">5</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">2</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <span className="target">%</span>
                  </h1>
                  <p>الأساتذة المشاركون</p>
                </div>
              </div>

              <div className="col-xl col-md-6">
                <div className="counter-card">
                  <h1>
                    <span
                      className="odometer odometer-auto-theme"
                      data-count="2631"
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">7</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">0</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <span className="target">+</span>
                  </h1>
                  <p>دبلوم متوسط</p>
                </div>
              </div>
              <div className="col-xl col-md-6">
                <div className="counter-card">
                  <h1>
                    <span
                      className="odometer odometer-auto-theme"
                      data-count="75"
                    >
                      <div className="odometer-inside">
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">1</span>
                              </span>
                            </span>
                          </span>
                        </span>
                        <span className="odometer-digit">
                          <span className="odometer-digit-spacer">8</span>
                          <span className="odometer-digit-inner">
                            <span className="odometer-ribbon">
                              <span className="odometer-ribbon-inner">
                                <span className="odometer-value">2</span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </div>
                    </span>
                    <span className="target">+</span>
                  </h1>
                  <p>مساعدو التدريس</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FactsAndFigure;
