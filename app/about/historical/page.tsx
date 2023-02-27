import AboutBanner from "@/components/AboutBanner";
import React from "react";
import About from "./About";

function Historical() {
  return (
    <>
      <AboutBanner
        title="الخلفية التاريخية"
        breadcrumbs={["الخلفية التاريخية"]}
      />

      <About />
    </>
  );
}

export default Historical;
