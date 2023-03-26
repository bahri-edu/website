import AboutBanner from "@/components/AboutBanner";
import React from "react";

function Calendar() {
  return (
    <>
      <AboutBanner
        title="التقويم الدراسي"
        breadcrumbs={["الأكاديمية", "التقويم الدراسي"]}
      />

      <div className="terms-condition-area pt-100 pb-70">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-12">
              <div className="condition-content">
                <h2>التقويم الدراسي</h2>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <td>التاريخ الميلادي</td>
                      <td>اليوم</td>
                      <td>الموضوع</td>
                      <td>التاريخ الهجري</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>30/08/2023</td>
                      <td>الأحد</td>
                      <td>بداية الفصل الدراسي الاول</td>
                      <td>11 محرّم 1445</td>
                    </tr>
                    <tr>
                      <td>03/12/2023</td>
                      <td>الخميس</td>
                      <td>نهاية الفصل الدراسي الاول</td>
                      <td>11 ربيع الآخر 1445</td>
                    </tr>
                    <tr>
                      <td>06/12/2023</td>
                      <td>الأحد</td>
                      <td>بداية امتحانات الفصل الدراسي الاول</td>
                      <td>21 ربيع الآخر 1445</td>
                    </tr>
                    <tr>
                      <td>24/12/2023</td>
                      <td>الخميس</td>
                      <td>نهاية امتحانات الفصل الدراسي الأول </td>
                      <td>21 جمادي 1445</td>
                    </tr>
                    <tr>
                      <td>27/12/2023</td>
                      <td>الأحد</td>
                      <td>بداية الفصل الدراسي الثانى</td>
                      <td>21 شعبان 1445</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
