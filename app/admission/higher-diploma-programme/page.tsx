import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function HigherDiplomaProgramme() {
  return (
    <>
      <AboutBanner
        title="برنامج الدبلوم العالي"
        breadcrumbs={["القبول", "برنامج الدبلوم العالي"]}
      />

      <Empty />
    </>
  );
}

export default HigherDiplomaProgramme;
