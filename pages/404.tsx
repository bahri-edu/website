import Link from "next/link";

// pages/404.js
const NotFoundPage = () => {
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
        <Link href="/" className="" style={{ color: "#008a3d" }}>
          الرجوع للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
