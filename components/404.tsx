import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="error-area ptb-100 bg-f4f6f9">
      <div className="container">
        <div className="top-content">
          <ul>
            <li>4</li>
            <li>0</li>
            <li>4</li>
          </ul>
        </div>
        <h2>خطأ 404 : نتيجة بحث غير موجودة</h2>
        <Link href="/" className="btn default-btn">
          الرجوع للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
