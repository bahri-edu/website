import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function qualityManagementAndDevelopment() {
  return (
    <>
      <AboutBanner
        title="إدارة الجودة و التطوير"
        breadcrumbs={["إدارات الجامعة", " إدارة الجودة و التطوير"]}
      />

      <Empty />
    </>
  );
}

export default qualityManagementAndDevelopment;
