import { httpClient } from "@/utils/util.http";
import React from "react";

async function geImportantNews() {
  return httpClient("news?limit=3&type=ACADEMIC");
}

async function ImportantNews() {
  const [one, tow, three] = await geImportantNews();
  return (
    <div className="lates-news-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>أخر و أهم الأحداث</h2>
          <p>الأخبار و الإعلانات الأخيرة</p>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-7">
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
                    <a href="#">
                      <img src="/images/bah1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="news-content">
                    <div className="list">
                      <ul>
                        <li>
                          <i className="flaticon-time"></i>
                          {new Date(tow?.createdAt)?.toLocaleDateString()}
                        </li>
                      </ul>
                    </div>
                    <a href="#">
                      <h3>{tow?.titleAr} </h3>
                      <p>{tow?.descriptionAr}</p>
                    </a>
                    <a href="#" className="default-btn btn">
                      إقرأ المزيد<i className="flaticon-next"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
                    <a href="#">
                      <img src="/images/bahri-gate_-1-1.jpg" alt="Image" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7">
                  <div className="news-content">
                    <div className="list">
                      <ul>
                        <li>
                          <i className="flaticon-time"></i>
                          {new Date(tow?.createdAt)?.toLocaleDateString()}
                        </li>
                      </ul>
                    </div>
                    <a href="#">
                      <h3>{one?.titleAr}</h3>
                      <p>{one?.descriptionAr}</p>
                    </a>
                    <a href="#" className="default-btn btn">
                      إقرأ المزيد<i className="flaticon-next"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="600"
            data-aos-once="true"
          >
            <div className="single-news-card style2">
              <div className="news-img" style={{ height: "300px" }}>
                <a href="#">
                  <img src="/images/bahri-gate_-1-1.jpg" alt="Image" />
                </a>
              </div>
              <div className="news-content">
                <div className="list">
                  <ul>
                    <li>
                      <i className="flaticon-time"></i>
                      {new Date(tow?.createdAt)?.toLocaleDateString()}
                    </li>
                  </ul>
                </div>
                <a href="#">
                  <h3>{three?.titleAr} </h3>
                  <p>{three?.descriptionAr}</p>
                </a>
                <a href="#" className="default-btn btn">
                  إقرأ المزيد<i className="flaticon-next"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImportantNews;
