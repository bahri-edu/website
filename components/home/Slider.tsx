import React, { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    jQuery: any;
    NivoSlider: any;
  }
}

export default function Slider() {
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
                  <h1 className="sl-title white-color">
                    إبدا مشوارك التعليمي هنا
                  </h1>
                  <div className="sl-desc">
                    هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي هذا
                    للتجريب شكل المحتوى فقط.
                  </div>
                  <div className="slider-bottom">
                    <ul>
                      <li>
                        <a href="#" className="default-btn btn">
                          الكليات<i className="flaticon-next"></i>
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
                  <h1 className="sl-title white-color">جامعة بحري</h1>
                  <div className="sl-desc">
                    هذا النص بديل لنص آخر سيتم تعديلة بالمحتوى الأصلي هذا
                    للتجريب شكل المحتوى فقط.
                  </div>
                  <div className="slider-bottom">
                    <ul>
                      <li>
                        <a href="#" className="default-btn btn">
                          المزيد<i className="flaticon-next"></i>
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
