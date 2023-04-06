import { Translate } from "@/types/models";
import { uploadFileUrl } from "@/utils/util.http";
import Link from "next/link";
import React from "react";

function NewsCard({
  image,
  title,
  lng,
  ID,
}: {
  image?: string;
  title: Translate;
  lng: "ar" | "en";
  ID: string;
}) {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="single-news-card">
        <div className="news-img">
          <Link href={`/news/${ID}`}>
            <a>
              {image ? (
                <img src={uploadFileUrl + image} alt="Image" />
              ) : (
                <img src="/images/bah1.jpg" alt="Image" />
              )}
            </a>
          </Link>
        </div>
        <div className="news-content">
          <Link href={`/news/${ID}`}>
            <a>
              <h3>{title[lng]}</h3>
            </a>
          </Link>

          <Link href={`/news/${ID}`}>
            <a className="read-more-btn">
              {readMore[lng]}
              <i className="flaticon-next"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

const readMore = {
  en: "Read More",
  ar: " إقرء المزيد",
};
