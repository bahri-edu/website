import Link from "next/link";
import React from "react";

function RelatedDownload() {
  return (
    <div className="related-download">
      <h3>ملفات التحميل</h3>
      <ul>
        <li>
          <Link href="#">
            <a>
              <i className="flaticon-pdf-file"></i>النبذة التاريخية
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <i className="flaticon-pdf-file"></i>الكليات
            </a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>
              <i className="flaticon-pdf-file"></i>اللوائح
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default RelatedDownload;
