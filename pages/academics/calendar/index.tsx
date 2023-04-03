import AboutBanner from "@/components/AboutBanner";
import { Translate } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import React from "react";

interface ICalendar {
  dateM: string;
  dateH: Translate;
  subject: Translate;
}

const calendars: ICalendar[] = [
  {
    dateM: "30/08/2023",

    dateH: {
      ar: "11 محرّم 1445",
      en: "Muharram 11, 1445",
    },
    subject: {
      ar: "بداية الفصل الدراسي الاول",
      en: "Beginning of the first semester",
    },
  },
  {
    dateM: "30/08/2023",

    dateH: {
      ar: "11 ربيع الآخر 1445",
      en: "11 Rabi` al-Akhar 1445",
    },
    subject: {
      ar: "نهاية الفصل الدراسي الاول",
      en: "The end of the first semester",
    },
  },
  {
    dateM: "30/08/2023",

    dateH: {
      ar: "21 ربيع الآخر 1445",
      en: "21 Rabi` al-Akhar 1445",
    },
    subject: {
      ar: "بداية امتحانات الفصل الدراسي الاول	",
      en: "Beginning of the first semester exams",
    },
  },
  {
    dateM: "30/08/2023",

    dateH: {
      ar: "21 جمادي 1445",
      en: "21 Jumada 1445",
    },
    subject: {
      ar: "نهاية امتحانات الفصل الدراسي الأول	",
      en: "End of first semester exams",
    },
  },
  {
    dateM: "30/08/2023",

    dateH: {
      ar: "21 شعبان 1445",
      en: "21 Shaaban 1445",
    },
    subject: {
      ar: "بداية الفصل الدراسي الثانى",
      en: "Beginning of the second semester",
    },
  },
];

function Calendar() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner
        title={t("title")}
        breadcrumbs={[t("academic"), t("title")]}
      />

      <div className="terms-condition-area pt-100 pb-70">
        <div className="container">
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-lg-12">
              <div className="condition-content">
                <h2>{t("title")}</h2>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <td>{t("dateM")}</td>
                      <td>{t("subject")}</td>
                      <td>{t("dateH")}</td>
                    </tr>
                  </thead>

                  <tbody>
                    {calendars.map((cal, x) => (
                      <tr key={`calendars-${x}`}>
                        <td>{cal.dateM}</td>
                        <td>{cal.subject[lng]}</td>
                        <td>{cal.dateH[lng]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;

const translate: ITranslate = {
  title: {
    ar: "التقويم الدراسي",
    en: "Academic calendar",
  },

  academic: {
    ar: "الأكاديمية",
    en: "Academics",
  },
  dateM: {
    ar: "التاريخ الميلادي",
    en: "Gregorian date",
  },
  dateH: {
    ar: "التاريخ الهجري",
    en: "Islamic History",
  },
  subject: {
    ar: "الموضوع",
    en: "the topic",
  },
};
