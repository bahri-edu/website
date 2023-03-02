import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function FinancialControllerOffice() {
  return (
    <>
      <AboutBanner
        title="الإدارة المالية"
        breadcrumbs={["إدارات الجامعة", "الإدارة المالية"]}
      />

      <Empty />
    </>
  );
}

export default FinancialControllerOffice;
