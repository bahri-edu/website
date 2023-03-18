import AboutBanner from "@/components/AboutBanner";
import AdministrationList from "@/components/AdministrationList";
import React from "react";

function PrincipleOffice() {
  return (
    <>
      <AboutBanner
        title="مكتب وكيل الجامعة"
        breadcrumbs={["إدارات الجامعة", "مكتب وكيل الجامعة"]}
      />

      <div className="terms-condition-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="condition-content two bg">
                <h2>مكتب وكيل الجامعة</h2>
                <p className="mb-3">سلطات المدير:</p>
                <div className="overview">
                  <div className="overview-box px-37">
                    <h4>الأداء السليم للوظائف المالية والإدارية للجامعة.</h4>
                  </div>
                  <div className="overview-box px-37">
                    <h4>مسؤول عن جميع مستندات أصول الجامعة.</h4>
                  </div>
                  <div className="overview-box px-37">
                    <h4>
                      رئاسة لجان المباني والبيئة التي قد يتم تحديدها من حين
                      لآخر.
                    </h4>
                  </div>
                  <div className="overview-box px-37">
                    <h4>عهدة الجامعة بالختم الموحد وشعار النبالة.</h4>
                  </div>
                  <div className="overview-box px-37">
                    <h4>
                      حفظ السجلات والسجلات وصكوك الملكية الخاصة بالجامعة كما قد
                      يحددها نائب مدير الجامعة من حين لآخر.
                    </h4>
                  </div>
                  <div className="overview-box px-37">
                    <h4>
                      مساعدة نائب المدير في إعداد ومراجعة خطة تطوير الجامعة ورفع
                      التقارير المرحلية بشأنها.
                    </h4>
                  </div>
                </div>
              </div>

              <div className="condition-content two bg">
                <h3 className="mb-3">الأقسام و الوحدات</h3>
                <div className="overview">
                  <div className="overview-box px-37">
                    <h4>المراقب المالي.</h4>
                  </div>
                  <div className="overview-box px-37">
                    <h4>إدارة التنمية البشرية.</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <AdministrationList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrincipleOffice;
