import AboutBanner from "@/components/AboutBanner";
import NewsCard from "@/components/NewsCard";
import { NewsResponse } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient, numberToArry } from "@/utils/util.http";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps(ctx: any) {
  const { skip } = ctx.query;
  const news: NewsResponse = await httpClient(`news?limit=6&skip=${skip || 0}`);
  return {
    props: {
      news: news,
    },
  };
}

function News({ news }: { news: NewsResponse }) {
  const { locale } = useRouter();

  const lng = locale === "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner title={t("title")} breadcrumbs={[t("title")]} />

      <div className="latest-news-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div
                className="latest-news-left-content pr-20
                        "
              >
                <div className="latest-news-card-area">
                  <h3>{t("title")}</h3>
                  <div className="row">
                    {news.data.map(({ id, title, images }) => (
                      <NewsCard
                        ID={id}
                        key={id}
                        title={title}
                        lng={lng}
                        image={images?.[0] || undefined}
                      />
                    ))}
                  </div>
                </div>
                <div className="paginations">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="flaticon-back"></i>
                      </a>
                    </li>
                    <li>
                      {numberToArry(news.totalPages).map((v, x) => (
                        <Link
                          key={`paginations-${x}`}
                          href={`/news?skip=${6 * x}`}
                        >
                          <a className={v == news.page ? " active" : ""}>{v}</a>
                        </Link>
                      ))}
                    </li>

                    <li>
                      <a href="#">
                        <i className="flaticon-next"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="serch-content">
                <h3>البحث</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="إبحث هنا"
                  />
                  <button type="submit" className="src-btn">
                    <i className="flaticon-search"></i>
                  </button>
                </div>
              </div>
              <div className="category-list">
                <h3>الفئات</h3>
                <ul>
                  <li>
                    <a href="news.html">
                      أخبار التسجيل<i className="ri-arrow-drop-right-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="news.html">
                      أخبار الجامعة<i className="ri-arrow-drop-right-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="news.html">
                      الوظائف<i className="ri-arrow-drop-right-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="related-post-area">
                <h3>أخبار ذات صلة</h3>
                <div className="related-post-box">
                  <div className="related-post-content">
                    <a href="new-details.html">
                      <img src="/images/bah2.jpg" alt="Image" />
                    </a>
                    <h4>
                      <a href="new-details.html">
                        زيارة وفد وزارة التعليم العالي والتكلنولوجيا بجنوب
                        السودان
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="related-post-box">
                  <div className="related-post-content">
                    <a href="new-details.html">
                      <img src="/images/bah1.jpg" alt="Image" />
                    </a>
                    <h4>
                      <a href="new-details.html">
                        تهنئة بمناسبة يوم السلام العالمي
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="related-post-box">
                  <div className="related-post-content">
                    <a href="new-details.html">
                      <img src="/images/bah2.jpg" alt="Image" />
                    </a>
                    <h4>
                      <a href="new-details.html">
                        زيارة وفد وزارة التعليم العالي والتكلنولوجيا بجنوب
                        السودان
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;

const translate: ITranslate = {
  title: {
    ar: "آخر الأخبار",
    en: "latest news",
  },
  college: {
    ar: "الكليات",
    en: "Colleges",
  },
};
