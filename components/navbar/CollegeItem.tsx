import { College } from "@/types/models";
import { isActive, ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function CollegeItem({
  pathname,
  locale,
}: {
  pathname: string;
  locale: string | undefined;
}) {
  const [collegeChunks, setCollegeChunks] = useState<College[][]>([]);
  const t = useTranslate(translate, locale);

  const lng = locale === "ar" ? "ar" : "en";

  function doCollegeChunks(cols: College[]) {
    const chunkSize = 5;
    const arr: College[][] = [];
    for (let i = 0; i < cols.length; i += chunkSize) {
      const chunk = cols.slice(i, i + chunkSize);
      arr.push(chunk);
    }

    return arr;
  }

  useEffect(() => {
    (async function () {
      const colleges = await httpClient("colleges");
      setCollegeChunks(doCollegeChunks(colleges));
    })();
  }, []);

  return (
    <li className="nav-item mega-item">
      <a
        href="#"
        className={`nav-link dropdown-toggle
                  ${isActive("/colleges", pathname) && " active"}
                  `}
      >
        {t("colleges")}
      </a>
      <ul className="dropdown-menu mega">
        <li className="mega-container">
          {collegeChunks.map((colleges, x) => (
            <div key={x} className="single-magemenu">
              <ul>
                {colleges.map((college) => (
                  <li key={college.id} className="nav-item">
                    <Link href={`/colleges/${college.id}`} className="nav-link">
                      {college?.name[lng]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </li>
      </ul>
    </li>
  );
}

export default CollegeItem;

const translate: ITranslate = {
  colleges: {
    en: "Colleges",
    ar: "الكليات",
  },
};
