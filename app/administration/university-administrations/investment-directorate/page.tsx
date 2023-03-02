import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function InvestmentDirectorate() {
  return (
    <>
      <AboutBanner
        title="إدارة الإستثمار"
        breadcrumbs={["إدارات الجامعة", "الإدارة المالية"]}
      />

      <Empty />
    </>
  );
}

export default InvestmentDirectorate;
