import Link from "next/link";
import React from "react";

function AboutAdditionalInformation() {
  return (
    <div className="additional-information">
      <h3>معلومات عن الجامعة</h3>
      <div className="list">
        <ul>
          <li>
            <Link href="#">الرؤية و الرسالة</Link>
          </li>
          <li>
            <Link href="#">الخلفية التاريخية</Link>
          </li>
          <li>
            <Link href="#">حقائق و أرقام</Link>
          </li>
          <li>
            <Link href="#">شعار الجامعة</Link>
          </li>
          <li>
            <Link href="#">مجلس الجامعة</Link>
          </li>
          <li>
            <Link href="#">مجلس العمداء</Link>
          </li>
          <li>
            <Link href="#">مجلس الأساتذة</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutAdditionalInformation;
