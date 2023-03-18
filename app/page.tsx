import dynamic from "next/dynamic";

import { Inter } from "@next/font/google";
import ImportantNews from "@/components/home/ImportantNews";
import AboutIntro from "@/components/home/AboutIntro";
import ElServices from "@/components/home/ElServices";
import FactsAndFigure from "@/components/home/FactsAndFigure";
import NewsAndEvent from "@/components/home/NewsAndEvent";

import "../styles/owl.carousel.min.css";
import "../styles/owl.theme.default.min.css";
import "../styles/meanmenu.css";
import "../styles/animate.css";

import "../styles/responsive.css";
import Script from "next/script";
import { httpClient } from "@/utils/util.http";

const DinamicSlider = dynamic(() => import("@/components/home/Slider"), {
  loading: () => <p>...</p>,
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

/**
 * 
 * Academics
Academies
Students
 */

export default async function Home() {
  return (
    <main>
      <DinamicSlider />

      <ImportantNews />

      <AboutIntro />

      <ElServices />

      <FactsAndFigure />

      <NewsAndEvent />
    </main>
  );
}
