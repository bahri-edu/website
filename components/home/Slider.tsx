import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

declare global {
  interface Window {
    jQuery: any;
    NivoSlider: any;
  }
}

export default function Slider() {
  const { locale } = useRouter();

  const t = useTranslate(translate, locale);

  const lng = locale == "ar" ? "ar" : "en";

  useEffect(() => {
    window.jQuery = require("@/styles/js/jquery.min.js");
    window.NivoSlider = require("@/styles/js/jquery.nivo.slider.js");
    let nivo = window.jQuery("#nivoSlider");

    if (nivo.length) {
      console.log(nivo);
      nivo.nivoSlider({
        effect: "random",
        slices: 15,
        boxCols: 8,
        boxRows: 4,
        animSpeed: 600,
        pauseTime: 5000000000,
        startSlide: 0,
        directionNav: true,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
      });
    }
  }, []);
  return (
    <>
      <div id="rs-slider" className="rs-slider slider1">
        <div className="bend niceties">
          <div id="nivoSlider" className="slides">
            <img src="/images/slide-1.jpg" alt="" title="#slide-1" />
            <img src="/images/bah11.jpg" alt="" title="#slide-2" />
          </div>
          {/* <!-- Slide 1 --> */}
          <div id="slide-1" className="slider-direction">
            <div className="container">
              <div className="content-part one">
                <div className="slider-des">
                  <h1 className="sl-title white-color">{t("start")}</h1>
                  <div className="sl-desc">{t("desc")}</div>
                  <div className="slider-bottom">
                    <ul>
                      <li>
                        <a href="#" className="default-btn btn">
                          {t("colleges")}
                          <i className="flaticon-next"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Slide 2 --> */}
          <div id="slide-2" className="slider-direction">
            <div className="over"></div>
            <div className="container">
              <div className="content-part">
                <div className="slider-des">
                  <h1 className="sl-title white-color">{t("univ")}</h1>
                  <div className="sl-desc">{t("desc")}</div>
                  <div className="slider-bottom">
                    <ul>
                      <li>
                        <a href="#" className="default-btn btn">
                          {t("readMore")}
                          <i className="flaticon-next"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const translate: ITranslate = {
  start: {
    en: "Start your educational journey here",
    ar: "إبدا مشوارك التعليمي هنا",
  },
  desc: {
    en: `
      This text is an alternative to another text that will be modified with this original content
       For experimentation form content only.`,
    ar: `
    هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي هذا
     للتجريب شكل المحتوى فقط.
    `,
  },
  univ: {
    en: "The University of Bahri",
    ar: "جامعة بحري",
  },

  colleges: {
    ar: "الكليات",
    en: "Colleges",
  },

  readMore: {
    ar: "المزيد",
    en: "Read More",
  },
};
