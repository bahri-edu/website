import AboutAdditionalInformation from "@/components/AboutAdditionalInformation";
import AboutBanner from "@/components/AboutBanner";
import RelatedDownload from "@/components/RelatedDownload";
import { HistoricalBackground } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps() {
  const historical = await httpClient(`historical-background`);
  return {
    props: {
      historical,
    },
  };
}

function HistoricalBackground({
  historical,
}: {
  historical: HistoricalBackground[];
}) {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner
        title={t("HistoricalBackground")}
        breadcrumbs={[t("HistoricalBackground")]}
      />

      <div className="graduate-admission pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="how-to-apply">
                <h2>{t("title")}</h2>
                {historical?.map((h) => (
                  <p key={h.id} className="financial">
                    {h?.description?.[lng]}
                  </p>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <AboutAdditionalInformation />

              <RelatedDownload />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoricalBackground;

const translate: ITranslate = {
  title: {
    ar: "نبذة تاريخية عن الجامعة",
    en: "Brief history of the university",
  },
  HistoricalBackground: {
    ar: "الخلفية التاريخية",
    en: "Historical background",
  },
};
