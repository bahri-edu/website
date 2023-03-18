import AboutIntro from "@/components/home/AboutIntro";
import ElServices from "@/components/home/ElServices";
import FactsAndFigure from "@/components/home/FactsAndFigure";
import ImportantNews from "@/components/home/ImportantNews";
import NewsAndEvent from "@/components/home/NewsAndEvent";
import dynamic from "next/dynamic";
import React from "react";

const DinamicSlider = dynamic(() => import("@/components/home/Slider"), {
  loading: () => <p>...</p>,
  ssr: false,
});

function index() {
  return (
    <>
      <DinamicSlider />

      <ImportantNews />

      <AboutIntro />

      <ElServices />

      <FactsAndFigure />

      <NewsAndEvent />
    </>
  );
}

export default index;
