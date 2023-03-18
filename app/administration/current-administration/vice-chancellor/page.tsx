import AboutBanner from "@/components/AboutBanner";
import CurrentAdministration, {
  currentAdministrationProps,
} from "@/components/CurrentAdministration";
import React from "react";

function ViceChancellor() {
  return (
    <>
      <AboutBanner
        title="مدير الجامعة"
        breadcrumbs={["إدارة الجامعة الحالية", "مدير الجامعة"]}
      />

      <CurrentAdministration
        {...{ ...currentAdministrationProps, position: "مدير الجامعة" }}
      />
    </>
  );
}

export default ViceChancellor;
