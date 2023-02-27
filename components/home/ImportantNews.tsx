import React from "react";

function ImportantNews() {
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
                          <i className="flaticon-time"></i>10 يناير 2023
                        </li>
                      </ul>
                    </div>
                    <a href="#">
                      <h3>التسجيل الإكتروني للطلاب القدامى</h3>
                      <p>
                        تعلن كلية العلوم الإدارية عن نتائج امتحانات الدور الأول
                        للمستويات (الثاني - الثالث الرابع)
                      </p>
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
                          <i className="flaticon-time"></i>13 يناير 2023
                        </li>
                      </ul>
                    </div>
                    <a href="#">
                      <h3>التسجيل الإكتروني للطلاب القدامى</h3>
                      <p>
                        تعلن كلية العلوم الإدارية عن نتائج امتحانات الدور الأول
                        للمستويات (الثاني - الثالث الرابع)
                      </p>
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
                      <i className="flaticon-time"></i>16 يناير 2023
                    </li>
                  </ul>
                </div>
                <a href="#">
                  <h3>التسجيل الإكتروني للطلاب القدامى</h3>
                  <p>
                    تعلن كلية العلوم الإدارية عن نتائج امتحانات الدور الأول
                    للمستويات (الثاني - الثالث الرابع) على الروابط التالية:..
                  </p>
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
