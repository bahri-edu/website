import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function Students() {
  return (
    <>
      <AboutBanner title="الطلاب" breadcrumbs={["الأكاديمية", "الطلاب"]} />
      <Empty />
    </>
  );
}

export default Students;
