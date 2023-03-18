import AboutBanner from "@/components/AboutBanner";
import CurrentAdministration, {
  currentAdministrationProps,
} from "@/components/CurrentAdministration";
import React from "react";

function SecretaryOfScientificAffairs() {
  return (
    <>
      <AboutBanner
        title=" أمين الشؤون العلمية"
        breadcrumbs={["إدارة الجامعة الحالية", " أمين الشؤون العلمية"]}
      />

      <CurrentAdministration
        {...{ ...currentAdministrationProps, position: " أمين الشؤون العلمية" }}
      />
    </>
  );
}

export default SecretaryOfScientificAffairs;
