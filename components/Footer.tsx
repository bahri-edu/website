import React from "react";

function Footer() {
  return (
    <div className="footer-area pt-70 pb-50">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="footer-logo-area">
              <a href="index.html">
                <img src="/images/logo-bahri.jpg" alt="Image" width="90" />
              </a>
              <p>
                جامعة ورثت تقاليد متجذرة من أسلافها في جامعات جوبا وأعالي النيل
                وبحر الغزال ورمبيك.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widjet">
              <h3>تواصل معنا</h3>
              <div className="list">
                <ul>
                  <li>
                    <i className="ri-map-2-line"></i>
                    السودان - الخرطوم
                  </li>
                  <li className="none">
                    <i className="ri-phone-line"></i>
                    <a href="tel:">
                      <span>5674 8765 249+</span>
                    </a>
                  </li>
                  <li className="none">
                    <i className="ri-mail-line"></i>
                    <a href="#">
                      <span className="__cf_email__">bahri-un@mail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6">
            <div className="footer-widjet">
              <h3>صفحات أخرى</h3>
              <div className="list">
                <ul>
                  <li>
                    <a href="#">المعاهد</a>
                  </li>
                  <li>
                    <a href="#">الكليات</a>
                  </li>
                  <li>
                    <a href="#">الأبحاث</a>
                  </li>
                  <li>
                    <a href="#">أسئلة متكررة</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widjet">
              <h3>مواقع ذات صلة</h3>
              <div className="list">
                <ul>
                  <li>
                    <a href="#">إتحاد الجامعات السودانية</a>
                  </li>
                  <li>
                    <a href="#">وزارة التعليم العالي</a>
                  </li>
                  <li>
                    <a href="#">البحث العلمي</a>
                  </li>
                  <li>
                    <a href="#">المجلس السوداني</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="shape">
          <img src="/images/shape-1.png" alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
