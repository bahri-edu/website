import { httpClient, uploadFileUrl } from "@/utils/util.http";
import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles

import "@/styles/moduls/NewsAndEvent.module.css";
import { News, NewsResponse } from "@/types/models";
import { ITranslate, useTranslate } from "@/utils/translate.util";
import { useRouter } from "next/router";
import Link from "next/link";
import CardSkeleton from "../skeleton/CardSkeleton";

// declare global {
//   interface Window {
//     jQuery: any;
//     OwlCarousel: any;
//   }
// }

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function NewsAndEvent() {
  const [news, setNews] = useState<News[]>([]);

  const { locale } = useRouter();

  const lng = locale == "ar" ? "ar" : "en";

  const t = useTranslate(translate, locale);

  useEffect(() => {
    (async function () {
      const ns: NewsResponse = await httpClient("news?type=GENERAL");
      setNews(ns.data);
    })();
  }, []);

  return (
    <div className="events-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>{t("title")}</h2>
          <p>{t("description")}</p>
        </div>

        <div className=" mb-20 owl-theme">
          {news.length > 0 ? (
            <SwiperCompnent news={news} lng={lng} />
          ) : (
            <CardSkeleton />
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsAndEvent;

function SwiperCompnent({ news, lng }: { news: News[]; lng: "en" | "ar" }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      navigation
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {news.map((n: any) => (
        <SwiperSlide key={n.id}>
          <div className="single-events-card">
            <div className="events-image">
              <Link href={`/news/${n.id}`}>
                <a>
                  {n?.images && n?.images.length > 0 ? (
                    <img src={uploadFileUrl + n?.images[0]} alt="Image" />
                  ) : (
                    <img src="/images/bahri-gate_-1-1.jpg" alt="Image" />
                  )}
                </a>
              </Link>
              <div className="date">
                <span>{new Date(n.createdAt).getDate()}</span>
                <p>{monthNames[new Date(n.createdAt).getMonth()]}</p>
              </div>
            </div>
            <div className="events-content">
              <Link href={`/news/${n.id}`}>
                <a>
                  <h3>{n?.title[lng]?.substring(0, 50)}</h3>
                </a>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const translate: ITranslate = {
  title: {
    ar: "أخر الأخبار و الفعاليات",
    en: "The latest news and events",
  },
  description: {
    ar: "أهم و أحدث الأخبار و الفعاليات ",
    en: "The most important and latest news and events",
  },
};
