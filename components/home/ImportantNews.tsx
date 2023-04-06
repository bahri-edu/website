import { News, NewsResponse } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient, uploadFileUrl } from "@/utils/util.http";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Skeleton from "react-loading-skeleton";

function ImportantNews() {
  const [news, setNews] = useState<News[]>([]);
  const [one, tow, three] = news;

  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);

  useEffect(() => {
    (async () => {
      const ns: NewsResponse = await httpClient("news?limit=3&type=ACADEMIC");
      setNews(ns.data);
    })();
  }, []);

  return (
    <div className="lates-news-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7">
            {one ? (
              <div
                className="single-news-card style3 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-5">
                    <div className="news-img">
                      <Link href={`/news/${one?.id}`}>
                        <a>
                          {one?.images && one?.images.length > 0 ? (
                            <img
                              src={uploadFileUrl + one?.images[0]}
                              alt="Image"
                            />
                          ) : (
                            <img
                              src="/images/bahri-gate_-1-1.jpg"
                              alt="Image"
                            />
                          )}
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7">
                    <div className="news-content">
                      <div className="list">
                        <ul>
                          <li>
                            <i className="flaticon-time"></i>
                            {one?.createdAt &&
                              new Date(one?.createdAt)?.toLocaleDateString()}
                          </li>
                        </ul>
                      </div>
                      <Link href={`/news/${one?.id}`}>
                        <a>
                          <h3>{one?.title[lng]}</h3>
                          <p>{one?.description[lng]?.slice(0, 150)}</p>
                        </a>
                      </Link>
                      <Link href={`/news/${one?.id}`}>
                        <a className="default-btn btn">
                          {t("readMore")}
                          <i className="flaticon-next"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Skeleton height={300} width="full" />
            )}

            {tow ? (
              <div
                className="single-news-card style3 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-5">
                    <div className="news-img">
                      <Link href={`/news/${tow?.id}`}>
                        <a>
                          {tow?.images && tow?.images.length > 0 ? (
                            <img
                              src={uploadFileUrl + tow?.images[0]}
                              alt="Image"
                            />
                          ) : (
                            <img
                              src="/images/bahri-gate_-1-1.jpg"
                              alt="Image"
                            />
                          )}
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7">
                    <div className="news-content">
                      <div className="list">
                        <ul>
                          <li>
                            <i className="flaticon-time"></i>
                            {tow?.createdAt &&
                              new Date(tow?.createdAt)?.toLocaleDateString()}
                          </li>
                        </ul>
                      </div>
                      <Link href={`/news/${tow?.id}`}>
                        <a>
                          <h3>{tow?.title[lng]}</h3>
                          <p>{tow?.description[lng].slice(0, 150)}</p>
                        </a>
                      </Link>
                      <Link href={`/news/${tow?.id}`}>
                        <a className="default-btn btn">
                          {t("readMore")}
                          <i className="flaticon-next"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Skeleton height={300} width="full" />
            )}
          </div>

          <div className="col-lg-5">
            {three ? (
              <div
                className="aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="600"
                data-aos-once="true"
              >
                <div className="single-news-card style2">
                  <div className="news-img" style={{ height: "300px" }}>
                    <Link href={`/news/${three?.id}`}>
                      <a>
                        {three?.images && three?.images.length > 0 ? (
                          <img
                            src={uploadFileUrl + three?.images[0]}
                            alt="Image"
                          />
                        ) : (
                          <img src="/images/bahri-gate_-1-1.jpg" alt="Image" />
                        )}
                      </a>
                    </Link>
                  </div>
                  <div className="news-content">
                    <div className="list">
                      <ul>
                        <li>
                          <i className="flaticon-time"></i>
                          {three?.createdAt &&
                            new Date(three?.createdAt)?.toLocaleDateString()}
                        </li>
                      </ul>
                    </div>
                    <Link href={`/news/${three?.id}`}>
                      <a>
                        <h3>{three?.title[lng]} </h3>
                        <p>{three?.description[lng].slice(0, 280)}</p>
                      </a>
                    </Link>
                    <Link href={`/news/${three?.id}`}>
                      <a className="default-btn btn">
                        {t("readMore")}
                        <i className="flaticon-next"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Skeleton height={600} width="full" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantNews;

const translate: ITranslate = {
  title: {
    ar: "أخر و أهم الأحداث",
    en: "The latest and most important events",
  },
  description: {
    ar: "الأخبار و الإعلانات الأخيرة ",
    en: "Recent news and announcements",
  },
  readMore: {
    ar: "إقرأ المزيد",
    en: "Read More",
  },
};
