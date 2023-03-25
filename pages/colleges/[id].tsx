import AboutBanner from "@/components/AboutBanner";
import CollegeComponent from "@/components/CollegeComponent";
import { College } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const college = await httpClient(`colleges/${id}`);
  return {
    props: {
      college,
    },
  };
}

function CollegeDetails({ college }: { college: College }) {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner
        title={college?.name[lng]}
        breadcrumbs={[t("college"), college?.name[lng]]}
      />
      <CollegeComponent college={college} lng={lng} />
    </>
  );
}

export default CollegeDetails;

const translate: ITranslate = {
  title: {
    ar: "عن الجامعة",
    en: "About University",
  },
  college: {
    ar: "الكليات",
    en: "Colleges",
  },
};
