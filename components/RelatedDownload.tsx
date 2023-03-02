import Link from "next/link";
import React from "react";

function RelatedDownload() {
  return (
    <div className="related-download">
      <h3>ملفات التحميل</h3>
      <ul>
        <li>
          <Link href="#">
            <i className="flaticon-pdf-file"></i>النبذة التاريخية
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="flaticon-pdf-file"></i>الكليات
          </Link>
        </li>
        <li>
          <Link href="#">
            <i className="flaticon-pdf-file"></i>اللوائح
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default RelatedDownload;
