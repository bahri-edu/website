import AboutBanner from "@/components/AboutBanner";
import React from "react";
import About from "./About";

function Vision() {
  return (
    <>
      <AboutBanner
        title="الرؤية و الرسالة"
        breadcrumbs={["الرؤية و الرسالة"]}
      />

      <About />
    </>
  );
}

export default Vision;
