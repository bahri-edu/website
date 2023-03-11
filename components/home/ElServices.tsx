import { httpClient } from "@/utils/util.http";
import React from "react";

async function getElServicess() {
  return httpClient("electronic-service");
}

async function ElServices() {
  const services = await getElServicess();

  return (
    <div className="campus-safety-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>الخدمات الإلكترونية</h2>
          <p>تقدم الجامعة مجموعة من الخدمات الإلكترونية</p>
        </div>
        <div className="row">
          {services?.map((service: any) => (
            <div key={service?.id} className="col-lg-3 col-sm-6">
              <div className="single-academics-card3">
                <div className="icon">
                  <i className={service?.icon}></i>
                </div>
                <a href="#">
                  <h3>{service?.titleAr}</h3>
                </a>
                <a href="#" className="read-more-btn">
                  المزيد<i className="flaticon-next"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElServices;
