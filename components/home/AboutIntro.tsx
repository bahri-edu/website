import { httpClient } from "@/utils/util.http";
import React, { useEffect } from "react";

declare global {
  interface Window {
    AOS: any;
  }
}

async function geImportantNews() {
  return httpClient("news?limit=3");
}

function AboutIntro() {
  useEffect(() => {
    const AOS = (window.jQuery = require("../../styles/js/aos.js"));
    AOS.init({
      disable: function () {
        var maxWidth = 900;
        return window.innerWidth < maxWidth;
      },
    });
  }, []);
  return (
    <div className="campus-information-area pt-100 pb-100 bg-f4f6f9">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 px-0">
            <div className="campus-content">
              <div className="campus-title">
                <h2>عن الجامعة</h2>
                <p>
                  إن جامعة بحري ، على الرغم من كونها إضافة حديثة إلى مجموعة
                  الجامعات السودانية ، هي جامعة ورثت تقاليد متجذرة من أسلافها في
                  جامعات جوبا وأعالي النيل وبحر الغزال ورمبيك. تم افتتاح جامعة
                  بحري رسميًا في يوليو 2011. نتيجة للجهود السياسية التي تلت ذلك
                  في السودان من عام 1983 إلى 2005. تم نقل جامعة جوبا في الخرطوم
                  من عام 1988 إلى عام 2010. خلال هذه الفترة خضعت لتحولات ضخمة
                  تضمنت أبعادًا أكاديمية جديدة في شكل الكليات والمراكز الجديدة
                  التي تقدم مجموعة متنوعة من البرامج الأكاديمية المنتظمة وكذلك
                  التعليم عن بعد.
                </p>
              </div>
              <a href="#" className="default-btn btn">
                إقرأ المزيد<i className="flaticon-next"></i>
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 px-0"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1300"
            data-aos-once="true"
          >
            <div className="campus-image">
              <img src="/images/bah1.jpg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutIntro;
