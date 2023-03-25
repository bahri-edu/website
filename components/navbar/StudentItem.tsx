import { ITranslate, useTranslate } from "@/utils/translate.util";
import Link from "next/link";
import React from "react";

function StudentItem({
  pathname,
  locale,
}: {
  pathname: string;
  locale: string | undefined;
}) {
  const t = useTranslate(translate, locale);
  return (
    <li className="nav-item">
      <a href="#" className="nav-link dropdown-toggle">
        {t("students")}
      </a>
      <ul className="dropdown-menu">
        <li className="nav-item">
          <Link
            href="/students/cs-and-math-student-elearning-form-reg"
            className="nav-link"
          >
            {t("computerScienceRegistration")}
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/students/registration-of-students-of-the-college-of-engineering-and-architecture-for-e-learning"
            className="nav-link"
          >
            {t("engineeringArchitectureRegistration")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/students/colleges-time-tables" className="nav-link">
            {t("examinationSchedule")}
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/students/examinations-tables" className="nav-link">
            {t("result")}
          </Link>
        </li>
      </ul>
    </li>
  );
}

export default StudentItem;

const translate: ITranslate = {
  students: {
    en: "Students",
    ar: "الطلاب",
  },
  computerScienceRegistration: {
    en: "College of Computer Science and Mathematics Registration form for e-learning",
    ar: " كلية علوم الحاسوب و الرياضيات نموذج التسجيل للتعليم الالكتروني",
  },
  engineeringArchitectureRegistration: {
    en: "Registration of students of the Faculty of Engineering and Architecture for e-learning",
    ar: " تسجيل طلاب كلية الهندسة و العمارة للتعليم الالكتروني",
  },
  examinationSchedule: {
    en: "Examination schedules",
    ar: " جداول الامتحانات",
  },
  result: {
    en: "Result",
    ar: "النتيجة",
  },
};
