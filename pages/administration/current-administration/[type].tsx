import AboutBanner from "@/components/AboutBanner";
import CurrentAdministrationComponent from "@/components/CurrentAdministrationComponent";
import { CurrentAdministration } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { getCurrentPosition, httpClient } from "@/utils/util.http";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps(crc: any) {
  const { type } = crc.params;

  const current = getCurrentPosition(type);
  const currentAdministration = await httpClient(
    `current-administration/position-type/${current}`
  );
  return {
    props: {
      currentAdministration,
    },
  };
}

function CurrentAdministration({
  currentAdministration,
}: {
  currentAdministration: CurrentAdministration;
}) {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const { position } = currentAdministration;
  const t = useTranslate(translate, locale);

  return (
    <>
      <Head>
        <title>{position[lng]}</title>
      </Head>
      <AboutBanner
        title={position[lng]}
        breadcrumbs={[t("currentAdministration"), position[lng]]}
      />

      <CurrentAdministrationComponent {...currentAdministration} />
    </>
  );
}

export default CurrentAdministration;

const translate: ITranslate = {
  currentAdministration: {
    ar: "إدارة الجامعة الحالية",
    en: "Current Administration",
  },
};
