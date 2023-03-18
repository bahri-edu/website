import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function Office() {
  return (
    <>
      <AboutBanner
        title=" السيرة الذاتية لمدير الجامعة"
        breadcrumbs={["مدير الجامعة", " السيرة الذاتية لمدير الجامعة"]}
      />

      <Empty />
    </>
  );
}

export default Office;
