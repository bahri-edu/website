import AboutAdditionalInformation from "@/components/AboutAdditionalInformation";
import AboutBanner from "@/components/AboutBanner";
import RelatedDownload from "@/components/RelatedDownload";
import React from "react";

function Vision() {
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
                <h2>الرؤية و الرسالة</h2>
                <p>
                  تم توجيه سياسة جامعة بحري كما هو منصوص عليه في قانونها لتحقيق
                  أهدافها التعليمية والبحثية والمعلوماتية وتمكين التعلم ما بعد
                  المستمر ، وتحديث وتطوير المعرفة من خلال رؤية واسعة ورسالة
                  وأهداف وغايات. تطمح الجامعة إلى أن تصبح أكثر تميزًا عن
                  الجامعات التي سبقتها في السودان من خلال إنشاء أنظمة أكاديمية
                  وإدارية صارمة وتوجيهها نحو التدريب الفني في المجالات ذات
                  الصلة. هذا يمكن أن يحافظ على التزامن مع عالم سريع التغير في
                  غضون ذلك تسعى إلى تبني مزايا أسلافها وتجاوز مآزقهم.
                </p>

                <div className="single-academics-card tow">
                  <div className="academic-top-content">
                    <i className="ri-eye-fill"></i>
                    <h3>رؤية الجامعة</h3>
                  </div>
                  <p className="mb-0">
                    تطمح جامعة بحري إلى أن تصبح المؤسسة المعرفية الرائدة في
                    إفريقيا والعالم العربي.
                  </p>
                </div>

                <div className="single-academics-card tow">
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
                </div>
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

export default Vision;
