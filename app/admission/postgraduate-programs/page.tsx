import AboutBanner from "@/components/AboutBanner";
import Empty from "@/components/Empty";
import React from "react";

function PostgraduatePrograms() {
  return (
    <>
      <AboutBanner
        title="برنامج الدراسات العليا"
        breadcrumbs={["القبول", "برنامج الدراسات العليا"]}
      />

      <Empty />
    </>
  );
}

export default PostgraduatePrograms;
