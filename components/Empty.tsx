import Link from "next/link";
import React from "react";

function Empty() {
  return (
    <div className="error-area ptb-100 bg-f4f6f9">
      <div className="container">
        <div className="top-content">
          <ul>
            <li>
              <i className="ri-folder-open-line"></i>
            </li>
          </ul>
        </div>
        <h2>لايوجد محتوى</h2>
        <Link href="/" className="btn default-btn">
          الرجوع للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}

export default Empty;
