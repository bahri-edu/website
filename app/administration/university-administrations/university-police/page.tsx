import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function universityPolice() {
  return (
    <>
      <AboutBanner
        title="إدارة الحرس الجامعي"
        breadcrumbs={["إدارات الجامعة", "إدارة الحرس الجامعي"]}
      />

      <Empty />
    </>
  );
}

export default universityPolice;
