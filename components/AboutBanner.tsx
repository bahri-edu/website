import Link from "next/link";
import React from "react";

function AboutBanner({
  title,
  breadcrumbs,
}: {
  title: string;
  breadcrumbs: string[];
}) {
  return (
    <div className="page-banner-area bg-2">
      <div className="container">
        <div className="page-banner-content">
          <h1>{title}</h1>
          <ul>
            <li>
              <Link href="/">الرئيسية</Link>
            </li>

            {breadcrumbs.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
