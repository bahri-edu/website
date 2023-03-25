import React from "react";

function CollegeNewsCard({
  title,
  readMore,
}: {
  title: string;
  readMore: string;
}) {
  return (
    <div className="single-news-card style2">
      <div className="news-img">
        <a href="#">
          <img src="/images/bah2.jpg" alt="Image" />
        </a>
      </div>
      <div className="news-content">
        <a href="#">
          <h3>{title}</h3>
        </a>
        <a href="#" className="read-more-btn">
          <i className="flaticon-next"></i>
          {readMore}
        </a>
      </div>
    </div>
  );
}

export default CollegeNewsCard;
