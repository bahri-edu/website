import AboutBanner from "@/components/AboutBanner";
import Odometer from "@/components/Odometer";
import { FactAndFigure, FactType } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps() {
  const facts = await httpClient(`fact-and-figure`);
  return {
    props: {
      facts,
    },
  };
}

function FactAndFigures({ facts }: { facts: FactAndFigure[] }) {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";

  const factStudent = facts.filter(({ type }) => type == FactType.STUDENT);
  const factStaff = facts.filter(({ type }) => type == FactType.STUDENT);

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner title={t("title")} breadcrumbs={[t("title")]} />

      {/* <!-- FACTS SECTION --> */}
      <div className="campus-safety-area inner pt-100 pb-70">
        <div className="container">
          <div className="section-title inner one">
            <p className="mb-2">{t("factTitleStudent1")}</p>
            <p>{t("factTitleStudent2")}</p>
          </div>

          <Odometer facts={factStudent} locale={lng} />
        </div>
      </div>
      {/* <!-- /. FACTS SECTION --> */}

      {/* <!-- FACTS SECTION --> */}
      <div className="campus-safety-area inner pb-70">
        <div className="container">
          <div className="section-title inner">
            <p className="mb-2">{t("factTitleStaff1")}</p>
            <p>{t("factTitleStaff2")}</p>
          </div>
          <Odometer facts={factStaff} locale={lng} />
        </div>
      </div>
      {/* <!-- /. FACTS SECTION --> */}
    </>
  );
}

export default FactAndFigures;

const translate: ITranslate = {
  title: {
    ar: "حقائق و أرقام",
    en: "Facts And Figures",
  },
  factTitleStudent1: {
    ar: "جامعة بحري لديها 19 كلية و 3 مراكز تقع في 5 فروع في مدن مختلفة من ولاية الخرطوم حقائق وأرقام.",
    en: "Bahri University has 19 faculties and 3 centers located in 5 campuses in different cities of Khartoum State Facts and figures.",
  },
  factTitleStudent2: {
    ar: "العدد الإجمالي للطلاب المسجلين في البرامج الأكاديمية المختلفة بالجامعة هو:",
    en: "The total number of students enrolled in the various academic programs of the university is:",
  },
  factTitleStaff1: {
    ar: "إجمالي الطلاب المتخرجين كأول دفعة عام 2012 هو 1876",
    en: "The total number of students graduating as the first batch of 2012 is 1876",
  },
  factTitleStaff2: {
    ar: "إجمالي عدد أعضاء الهيئة التدريسية والأكاديمية في الجامعة 839: ",
    en: "The total number of faculty and academic staff at the university is 839:",
  },
};
