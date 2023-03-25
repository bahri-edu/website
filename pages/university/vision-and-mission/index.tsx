import AboutAdditionalInformation from "@/components/AboutAdditionalInformation";
import AboutBanner from "@/components/AboutBanner";
import RelatedDownload from "@/components/RelatedDownload";
import { VisionMission } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps() {
  const vision = await httpClient(`vision-mission`);
  return {
    props: {
      vision,
    },
  };
}

function VisionMission({ vision }: { vision: VisionMission[] }) {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner
        title="الرؤية و الرسالة"
        breadcrumbs={["الرؤية و الرسالة"]}
      />

      <div className="graduate-admission pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="how-to-apply">
                <h2>{vision?.[0]?.title?.[lng]}</h2>
                <p>{vision?.[0]?.description?.[lng]}</p>

                {vision?.map(
                  (v, x) =>
                    x !== 0 && (
                      <div key={v.id} className="single-academics-card tow">
                        <div className="academic-top-content">
                          <i className={v?.icon}></i>
                          <h3>{v?.title?.[lng]}</h3>
                        </div>
                        <p className="mb-0">{v?.description?.[lng]}</p>
                      </div>
                    )
                )}

                {/* <div className="single-academics-card tow">
                  <div className="academic-top-content">
                    <i className="ri-pencil-fill"></i>
                    <h3>مهمة الجامعة</h3>
                  </div>
                  <p className="mb-0">
                    تسعى جامعة بحري إلى تحقيق تعليم ممتاز وبحث علمي مفيد وتسعى
                    لتلبية احتياجات المجتمع السوداني والحفاظ على التوافق مع
                    التغيرات السريعة في عالم اليوم.
                  </p>
                </div>

                <div className="single-academics-card tow">
                  <div className="academic-top-content">
                    <i className="flaticon-college-graduation"></i>
                    <h3>قيم الجامعة</h3>
                  </div>
                  <p className="mb-0">
                    في سعيها لتحقيق رؤيتها ورسالتها ، تلتزم جامعة بحري بالقيم
                    التالية وتسترشد بها: - التزام المجتمع - الالتزام الأخلاقي -
                    المعرفة والتعليم المستمر - الجودة والإنجاز - التنوع
                    والشمولية - الحرية والمسؤولية - المشاركة والدعم - وعي بيئي.
                  </p>
                </div>

                <div className="single-academics-card tow">
                  <div className="academic-top-content">
                    <i className="ri-checkbox-circle-fill"></i>
                    <h3>أهداف الجامعة</h3>
                  </div>
                  <p className="mb-0">
                    تقديم برامج متميزة استجابة لاحتياجات المجتمع - لتحقيق أهداف
                    طويلة الأجل بجودة مهنية عالية - تقديم حوافز للطلاب وتمكينهم
                    من الاستفادة الكاملة من المعرفة والمهارات في حياتهم الشخصية
                    والمهنية.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4">
              <AboutAdditionalInformation />

              <RelatedDownload />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisionMission;

const translate: ITranslate = {
  title: {
    ar: "عن الجامعة",
    en: "About University",
  },
  college: {
    ar: "الكليات",
    en: "Colleges",
  },
};
