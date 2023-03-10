"use client";
import { httpClient, uploadFileUrl } from "@/utils/util.http";
import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/moduls/swiper.modul.css";
import { News } from "@/types/models";

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

  useEffect(() => {
    (async function () {
      const ns = await httpClient("news?type=GENERAL");
      setNews(ns);
    })();
  }, []);

  return (
    <div className="events-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>أخر الأخبار و الفعاليات</h2>
          <p>أهم و أحدث الأخبار و الفعاليات</p>
        </div>

        <div className=" mb-20 owl-theme">
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
                    <a href="#">
                      {n?.images && n?.images.length > 0 ? (
                        <img src={uploadFileUrl + n?.images[0]} alt="Image" />
                      ) : (
                        <img src="/images/bahri-gate_-1-1.jpg" alt="Image" />
                      )}
                    </a>
                    <div className="date">
                      <span>{new Date(n.createdAt).getDate()}</span>
                      <p>{monthNames[new Date(n.createdAt).getMonth()]}</p>
                    </div>
                  </div>
                  <div className="events-content">
                    <a href="#">
                      <h3>{n?.titleAr}</h3>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default NewsAndEvent;
