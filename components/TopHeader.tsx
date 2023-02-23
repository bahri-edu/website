import React from "react";

function TopHeader() {
  return (
    <div className="top-header-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="header-left-content">
              <div className="list">
                <ul>
                  <li className="menu">
                    <a href="#">العمادات</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          عمادة البحث العلمي
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          عمادة شؤون الطلاب
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          عمادة المكتبات
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">الخريجون</a>
                  </li>
                  <li className="menu">
                    <a href="#">الخدمات الإلكترونية</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          التعليم الإلكتروني
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          بريد الجامعة
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          الحساب الموحد
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          النتيجة
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">وظائف</a>
                  </li>
                  <li>
                    <a href="#">روابط سريعة</a>
                  </li>
                  <li>
                    <a href="#">إتصل بنا</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="header-right-content">
              <div className="search">
                <input type="text" placeholder="إبحث هنا" />
                <button type="submit">
                  <i className="flaticon-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
