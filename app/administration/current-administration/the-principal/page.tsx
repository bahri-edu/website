import AboutBanner from "@/components/AboutBanner";
import CurrentAdministration, {
  currentAdministrationProps,
} from "@/components/CurrentAdministrationComponent";
import React from "react";

function ThePrincipal() {
  return (
    <>
      <AboutBanner
        title=" وكيل الجامعة"
        breadcrumbs={["إدارة الجامعة الحالية", " وكيل الجامعة"]}
      />

      <CurrentAdministration
        {...{ ...currentAdministrationProps, position: " وكيل الجامعة" }}
      />
    </>
  );
}

export default ThePrincipal;
