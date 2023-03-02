import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function ServicesManagement() {
  return (
    <>
      <AboutBanner
        title=" إدارة الخدمات"
        breadcrumbs={["إدارات الجامعة", " إدارة الخدمات"]}
      />

      <Empty />
    </>
  );
}

export default ServicesManagement;
