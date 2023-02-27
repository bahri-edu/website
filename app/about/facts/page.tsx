import AboutBanner from "@/components/AboutBanner";
import React from "react";
import About from "./About";

function Facts() {
  return (
    <>
      <AboutBanner title="حقائق و أرقام" breadcrumbs={["حقائق و أرقام"]} />

      <About />
    </>
  );
}

export default Facts;
