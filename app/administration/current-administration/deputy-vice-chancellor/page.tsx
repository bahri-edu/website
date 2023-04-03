import AboutBanner from "@/components/AboutBanner";
import CurrentAdministration from "@/components/CurrentAdministrationComponent";
import React from "react";

function DeputyViceChancellor() {
  return (
    <>
      <AboutBanner
        title="نائب مدير الجامعة"
        breadcrumbs={["إدارة الجامعة الحالية", "نائب مدير الجامعة"]}
      />

      {/* <CurrentAdministration
        {...{ ...currentAdministrationProps, position: "نائب مدير الجامعة" }}
      /> */}
    </>
  );
}

export default DeputyViceChancellor;
