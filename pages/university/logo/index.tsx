import AboutBanner from "@/components/AboutBanner";
import { Logo as LogoModel } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps() {
  const logos = await httpClient(`logo`);
  return {
    props: {
      logos,
    },
  };
}

function Logo({ logos }: { logos: LogoModel[] }) {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <AboutBanner title={t("title")} breadcrumbs={[t("title")]} />

      <div className="logo-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo-image">
                <img src="/images/logo-bahri.jpg" alt="Image" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row inner">
                {logos?.map((logo, x) => (
                  <div key={logo.id} className="col-md-6">
                    <div className="exam-card">
                      <h4>{logos[x]?.title?.[lng]}</h4>
                      <p>{logos[x]?.description?.[lng]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logo;

const translate: ITranslate = {
  title: {
    ar: "شعار الجامعة",
    en: "University logo",
  },
};
