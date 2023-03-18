import NotFound from "@/components/404";
import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function Office() {
  return (
    <>
      <AboutBanner
        title="مكتب مدير الجامعة"
        breadcrumbs={["مدير الجامعة", "مكتب مدير الجامعة"]}
      />

      <Empty />
    </>
  );
}

export default Office;
