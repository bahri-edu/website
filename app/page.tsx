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

async function getData() {
  return Promise.all([
    httpClient("news?limit=3&type=ACADEMIC"),
    httpClient("electronic-service"),
    httpClient("fact-and-figure"),
  ]);
}

export default async function Home() {
  const [news, services, facts] = await getData();

  return (
    <main>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      />
      <DinamicSlider />

      <ImportantNews news={news} />

      <AboutIntro />

      <ElServices services={services} />

      <FactsAndFigure facts={facts} />

      <NewsAndEvent />
    </main>
  );
}
