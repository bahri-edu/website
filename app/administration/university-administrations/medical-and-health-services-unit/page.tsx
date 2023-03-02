import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function MedicalAndHealthServicesUnit() {
  return (
    <>
      <AboutBanner
        title="وحدة الخدمات الطبية و الصحية"
        breadcrumbs={["إدارات الجامعة", "وحدة الخدمات الطبية و الصحية"]}
      />

      <Empty />
    </>
  );
}

export default MedicalAndHealthServicesUnit;
