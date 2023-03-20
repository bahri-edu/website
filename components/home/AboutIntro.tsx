import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import { useRouter } from "next/router";
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
  const { locale } = useRouter();

  const t = useTranslate(translate, locale);
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
                <h2>{t("title")}</h2>
                <p>{t("text")}</p>
              </div>
              <a href="#" className="default-btn btn">
                {t("readMore")}
                <i className="flaticon-next"></i>
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

const translate: ITranslate = {
  title: {
    ar: "عن الجامعة",
    en: "About University",
  },
  text: {
    ar: `
      إن جامعة بحري ، على الرغم من كونها إضافة حديثة إلى مجموعة
      الجامعات السودانية ، هي جامعة ورثت تقاليد متجذرة من أسلافها في
      جامعات جوبا وأعالي النيل وبحر الغزال ورمبيك. تم افتتاح جامعة
      بحري رسميًا في يوليو 2011. نتيجة للجهود السياسية التي تلت ذلك
      في السودان من عام 1983 إلى 2005. تم نقل جامعة جوبا في الخرطوم
      من عام 1988 إلى عام 2010. خلال هذه الفترة خضعت لتحولات ضخمة
      تضمنت أبعادًا أكاديمية جديدة في شكل الكليات والمراكز الجديدة
      التي تقدم مجموعة متنوعة من البرامج الأكاديمية المنتظمة وكذلك
      التعليم عن بعد.
    `,
    en: `
      The University of Bahri, although a recent addition to the group of Sudanese universities,
      is a university that inherited traditions rooted from its predecessors in the universities
        of Juba, Upper Nile, Bahr El Ghazal and Rumbek. The University of Bahri was officially 
      opened in July 2011. As a result of the ensuing political efforts in Sudan from 1983 to
      2005. The University of Juba in Khartoum was moved from 1988 to 2010. During this period 
      it underwent huge transformations that included new academic dimensions in the form of 
      faculties and centers The new one that offers a variety of regular academic programs as 
      well as distance education.`,
  },
  readMore: {
    ar: "إقرأ المزيد",
    en: "Read More",
  },
};
