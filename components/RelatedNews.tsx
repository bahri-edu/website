import { News, NewsResponse } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient, uploadFileUrl } from "@/utils/util.http";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function RelatedNews() {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);

  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const ns: NewsResponse = await httpClient("news?limit=5");
        setNews(ns.data);
      } catch (error) {
        setNews([]);
      }
    })();
  }, []);
  return (
    <div className="related-post-area">
      <h3>{t("title")}</h3>
      {news.map((n) => (
        <div key={n.id} className="related-post-box">
          <div className="related-post-content">
            <Link href={`/news/${n.id}`}>
              <a>
                {n?.images && n?.images?.length > 0 ? (
                  <img src={uploadFileUrl + n.images[0]} alt="Image" />
                ) : (
                  <img src="/images/bah2.jpg" alt="Image" />
                )}
              </a>
            </Link>

            <h4>
              <Link href={`/news/${n.id}`}>
                <a href={`/news/${n.id}`}>{n?.title?.[lng]}</a>
              </Link>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RelatedNews;

const translate: ITranslate = {
  title: {
    en: "Related news",
    ar: "أخبار ذات صلة",
  },
};
