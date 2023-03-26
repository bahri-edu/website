import { Social } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient } from "@/utils/util.http";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function CopyWrite() {
  const { locale } = useRouter();

  const [socials, setSocials] = useState<Social[]>([]);

  const t = useTranslate(translate, locale);

  const lng = locale == "ar" ? "ar" : "en";

  useEffect(() => {
    (async function () {
      const [contact] = await httpClient("contact");
      setSocials(contact?.socials || []);
    })();
  }, []);
  return (
    <div className="copyright-area">
      <div className="container">
        <div className="copyright">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-4">
              <div className="social-content">
                <ul>
                  {socials.map((s, x) => (
                    <li key={s.url + x}>
                      <a href={s.url} target="_blank" rel="noreferrer">
                        <i className={s.icon}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="copy">
                <p>© 2023 {t("copyWrite")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopyWrite;

const translate: ITranslate = {
  copyWrite: {
    en: "All rights reserved - University of Bahri",
    ar: "جميع الحقوق محفوظة - جامعة بحري",
  },
};
