import AboutBanner from "@/components/AboutBanner";
import React from "react";

function Logo() {
  return (
    <>
      <AboutBanner title="شعار الجامعة" breadcrumbs={["شعار الجامعة"]} />

      <div className="logo-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo-image">
                <img src="/images/logo-bahri.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row inner">
                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>افتح الكتب</h4>
                    <p>مصدر للمعرفة يدل على التعلم والتحصيل الدراسي.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>دوائر سوداء صغيرة خلف الكتب</h4>
                    <p>ترميز القراء.</p>
                  </div>
                </div>
              </div>

              <div className="row inner">
                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>صور متعددة للكتب والقراء في دائرة</h4>
                    <p>
                      يرمز إلى الأنشطة واستمراريتها وتنوعها ، كما أنه يعطي مؤشرا
                      للحوار والعمل الجماعي والكمال.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>الإطار الخارجي للشعار على شكل درع</h4>
                    <p>تدل على تفرد الجامعة وترمز إلى الكمال والقوة.</p>
                  </div>
                </div>
              </div>

              <div className="row inner">
                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>اللون الأسود</h4>
                    <p>يرمز إلى الوضوح والاستقامة.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>خلفية اللون الأخضر</h4>
                    <p>يرمز إلى التطور في جميع المجالات.</p>
                  </div>
                </div>
              </div>

              <div className="row inner">
                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>اللون الأسود</h4>
                    <p>يرمز إلى الوضوح والاستقامة.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>اللون الأبيض</h4>
                    <p>يرمز إلى النقاء والشفافية.</p>
                  </div>
                </div>
              </div>

              <div className="row inner">
                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>
                      وسط الدائرة يحتوي على الأحرف الأولى للجامعة باللغتين
                      العربية والإنجليزية
                    </h4>
                    <p>التأكيد على الروابط المحلية والإقليمية والعالمية.</p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="exam-card">
                    <h4>
                      اسم الجامعة مكتوب تحت الشعار باللغتين العربية والإنجليزية
                    </h4>
                    <p>يرمز إلى الجذور العميقة والأصالة.</p>
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

export default Logo;
