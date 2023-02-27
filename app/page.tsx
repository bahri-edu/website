import dynamic from "next/dynamic";

import { Inter } from "@next/font/google";
import ImportantNews from "@/components/ImportantNews";
import AboutIntro from "@/components/AboutIntro";
import ElServices from "@/components/ElServices";
import FactsAndFigure from "@/components/FactsAndFigure";
import NewsAndEvent from "@/components/NewsAndEvent";

import "../styles/owl.carousel.min.css";
import "../styles/owl.theme.default.min.css";
import "../styles/meanmenu.css";
import "../styles/animate.css";

import "../styles/responsive.css";
import Script from "next/script";

const DinamicSlider = dynamic(() => import("../components/Slider"), {
  loading: () => <p>...</p>,
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      />
      <DinamicSlider />

      <ImportantNews />

      <AboutIntro />

      <ElServices />

      <FactsAndFigure />

      <NewsAndEvent />
    </main>
  );
}
