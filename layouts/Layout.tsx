
import "bootstrap/dist/css/bootstrap.css";
import TopHeader from "@/components/TopHeader";
import NavigationMenu from "@/components/NavigationMenu";
import Footer from "@/components/Footer";
import CopyWrite from "@/components/CopyWrite";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopHeader />
      <NavigationMenu />
      {children}
      <Footer />
      <CopyWrite />
    </>
  );
}
