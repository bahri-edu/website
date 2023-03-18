import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function TheSenate() {
  return (
    <>
      <AboutBanner title="مجلس الأساتذة" breadcrumbs={["مجلس الأساتذة"]} />

      <Empty />
    </>
  );
}

export default TheSenate;
