import "./globals.css";
import "../styles/flaticon.css";
import "../styles/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import TopHeader from "@/components/TopHeader";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import CopyWrite from "@/components/CopyWrite";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      />
      <body>
        <TopHeader />
        <NavigationMenu />
        {children}

        <Footer />
        <CopyWrite />
      </body>
    </html>
  );
}
