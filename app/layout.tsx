import "./globals.css";
import "../styles/flaticon.css";
import "../styles/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import TopHeader from "@/components/TopHeader";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import CopyWrite from "@/components/CopyWrite";

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
