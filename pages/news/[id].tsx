import AboutBanner from "@/components/AboutBanner";
import RelatedNews from "@/components/RelatedNews";
import { News } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { httpClient, uploadFileUrl } from "@/utils/util.http";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps(context: any) {
  const { id } = context.params;
  const post = await httpClient(`news/${id}`);
  return {
    props: {
      title: post?.title,
      description: post?.description,
      images: post?.images,
    },
  };
}

function NewsDetails({ title, description, images }: News) {
  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);
  return (
    <>
      <AboutBanner title={t("title")} breadcrumbs={[t("news"), t("details")]} />

      <div className="latest-news-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="news-details">
                <div className="news-simple-card">
                  <div className="image">
                    {images && images?.length > 0 ? (
                      <img src={uploadFileUrl + images[0]} alt="Image" />
                    ) : (
                      <img src="/images/bah2.jpg" alt="Image" />
                    )}
                  </div>

                  <h2>{title?.[lng]}</h2>
                  <p>{description?.[lng]}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="serch-content">
                <h3>{t("search")}</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("searchPlaceholder")}
                  />
                  <button type="submit" className="src-btn">
                    <i className="flaticon-search"></i>
                  </button>
                </div>
              </div>
              <div className="category-list">
                <h3>{t("categories")}</h3>
                <ul>
                  <li>
                    <a href="#">
                      {t("categ1")} <i className="ri-arrow-drop-right-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {t("categ2")}
                      <i className="ri-arrow-drop-right-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {t("categ3")}
                      <i className="ri-arrow-drop-right-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <RelatedNews />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsDetails;

const translate: ITranslate = {
  title: {
    en: "latest News", // الأخبار
    ar: "آخر الأخبار",
  },
  news: {
    en: "News", // الأخبار
    ar: "الأخبار",
  },
  details: {
    en: "News details", // الأخبار
    ar: "تفاصيل الأخبار",
  },
  search: {
    en: "Search",
    ar: "البحث",
  },
  searchPlaceholder: {
    en: "search here",
    ar: "إبحث هنا",
  },
  categories: {
    en: "Categories",
    ar: "الفئات",
  },
  categ1: {
    en: "Registration news",
    ar: "أخبار التسجيل",
  },
  categ2: {
    en: "University News",
    ar: "أخبار الجامعة",
  },
  categ3: {
    ar: "الوظائف",
    en: "careers",
  },
};
