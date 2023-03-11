"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    jQuery: any;
    OwlCarousel: any;
  }
}

function CollegeNews() {
  useEffect(() => {
    setTimeout(() => {
      window.jQuery = require("@/styles/js/jquery.min.js");
      window.OwlCarousel = require("@/styles/js/owl.carousel.min.js");

      window.jQuery(".news-college-slider").owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: true,
        thumbs: false,
        autoplay: false,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
          '<i class="ri-arrow-left-line"></i>',
          '<i class="ri-arrow-right-line"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 3,
          },
        },
      });
    }, 2000);
  }, []);
  return (
    <div className="lates-news-area two ptb-100 bg-f4f6f9">
      <div className="container">
        <div className="section-title style2 style3">
          <h2>أخبار الكلية</h2>
        </div>
        <div className="news-college-slider owl-carousel owl-theme">
          <div className="single-news-card style2">
            <div className="news-img">
              <a href="new-details.html">
                <img src="/images/bah1.jpg" alt="Image" />
              </a>
            </div>
            <div className="news-content">
              <a href="new-details.html">
                <h3>هذا النص بديل لنص أخر سيتم تغييرة</h3>
              </a>
              <a href="new-details.html" className="read-more-btn">
                <i className="flaticon-next"></i> إقرء المزيد
              </a>
            </div>
          </div>

          <div className="single-news-card style2">
            <div className="news-img">
              <a href="new-details.html">
                <img src="/images/bah2.jpg" alt="Image" />
              </a>
            </div>
            <div className="news-content">
              <a href="new-details.html">
                <h3>هذا النص بديل لنص أخر سيتم تغييرة</h3>
              </a>
              <a href="new-details.html" className="read-more-btn">
                <i className="flaticon-next"></i> إقرء المزيد
              </a>
            </div>
          </div>

          <div className="single-news-card style2">
            <div className="news-img">
              <a href="new-details.html">
                <img src="/images/bah1.jpg" alt="Image" />
              </a>
            </div>
            <div className="news-content">
              <a href="new-details.html">
                <h3>هذا النص بديل لنص أخر سيتم تغييرة</h3>
              </a>
              <a href="new-details.html" className="read-more-btn">
                <i className="flaticon-next"></i> إقرء المزيد
              </a>
            </div>
          </div>

          <div className="single-news-card style2">
            <div className="news-img">
              <a href="new-details.html">
                <img src="/images/bah2.jpg" alt="Image" />
              </a>
            </div>
            <div className="news-content">
              <a href="new-details.html">
                <h3>هذا النص بديل لنص أخر سيتم تغييرة</h3>
              </a>
              <a href="new-details.html" className="read-more-btn">
                <i className="flaticon-next"></i> إقرء المزيد
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollegeNews;
