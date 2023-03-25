import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/flaticon.css";
import "../styles/remixicon.css";
import "../styles/animate.css";
import "../styles/aos.css";
import "../styles/responsive.css";
import "../styles/meanmenu.css";
import "../styles/owl.theme.default.min.css";
import "../styles/moduls/Slider.module.css";
import "swiper/css";
import "swiper/css/navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import CopyWrite from "@/components/CopyWrite";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("@/styles/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <TopHeader />
      <NavigationMenu />
      <Component {...pageProps} />
      <Footer />
      <CopyWrite />
    </>
  );
}
