import React from "react";

function CopyWrite() {
  return (
    <div className="copyright-area">
      <div className="container">
        <div className="copyright">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-4">
              <div className="social-content">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-facebook-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-twitter-fill"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-instagram-line"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="copy">
                <p>© 2023 جميع الحقوق محفوظة - جامعة بحري</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CopyWrite;
