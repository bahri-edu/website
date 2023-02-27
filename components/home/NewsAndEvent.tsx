"use client";
import React, { useEffect } from "react";

declare global {
  interface Window {
    jQuery: any;
    OwlCarousel: any;
  }
}

function NewsAndEvent() {
  useEffect(() => {
    window.jQuery = require("@/styles/js/jquery.min.js");
    window.OwlCarousel = require("@/styles/js/owl.carousel.min.js");

    window.jQuery(".events-slider").owlCarousel({
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
  }, []);

  return (
    <div className="events-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>أخر الأخبار و الفعاليات</h2>
          <p>أهم و أحدث الأخبار و الفعاليات</p>
        </div>
        <div className="events-slider mb-20 owl-carousel owl-theme">
          <div className="single-events-card">
            <div className="events-image">
              <a href="#">
                <img src="/images/bahri-gate_-1-1.jpg" alt="Image" />
              </a>
              <div className="date">
                <span>28</span>
                <p>مارس</p>
              </div>
            </div>
            <div className="events-content">
              <a href="#">
                <h3>مدير الجامعة يزور الصندوق القومي لرعاية الطلاب.</h3>
              </a>
            </div>
          </div>
          <div className="single-events-card">
            <div className="events-image">
              <a href="#">
                <img src="/images/bah1.jpg" alt="Image" />
              </a>
              <div className="date">
                <span>30</span>
                <p>يوليو</p>
              </div>
            </div>
            <div className="events-content">
              <a href="#">
                <h3>عميد كلية القانون يشارك في افتتاح الدورة الثانية.</h3>
              </a>
            </div>
          </div>
          <div className="single-events-card">
            <div className="events-image">
              <a href="#">
                <img src="/images/bah4.png" alt="Image" />
              </a>
              <div className="date">
                <span>30</span>
                <p>يوليو</p>
              </div>
            </div>
            <div className="events-content">
              <a href="#">
                <h3>هذا النص بديل لنص أخر سيتم تغييره بالمحتوى الأصلي.</h3>
              </a>
            </div>
          </div>
          <div className="single-events-card">
            <div className="events-image">
              <a href="#">
                <img src="/images/bahri-gate_-1-1.jpg" alt="Image" />
              </a>
              <div className="date">
                <span>30</span>
                <p>يوليو</p>
              </div>
            </div>
            <div className="events-content">
              <a href="#">
                <h3>عميد كلية القانون يشارك في افتتاح الدورة الثانية.</h3>
              </a>
            </div>
          </div>
          <div className="single-events-card">
            <div className="events-image">
              <a href="#">
                <img src="/images/bah1.jpg" alt="Image" />
              </a>
              <div className="date">
                <span>30</span>
                <p>يوليو</p>
              </div>
            </div>
            <div className="events-content">
              <a href="#">
                <h3>مدير الجامعة يزور الصندوق القومي لرعاية الطلاب.</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsAndEvent;
