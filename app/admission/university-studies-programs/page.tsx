import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function UniversityStudiesPrograms() {
  return (
    <>
      <AboutBanner
        title="  برنامج البكالريوس"
        breadcrumbs={["القبول", "  برنامج البكالريوس"]}
      />

      <Empty />
    </>
  );
}

export default UniversityStudiesPrograms;
