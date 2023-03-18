import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function UniversityDiplomaPrograms() {
  return (
    <>
      <AboutBanner
        title=" برنامج الدبلوم الجامعي"
        breadcrumbs={["القبول", " برنامج الدبلوم الجامعي"]}
      />

      <Empty />
    </>
  );
}

export default UniversityDiplomaPrograms;
