import { FactAndFigure } from "@/types/models";
import React from "react";

function Odometer({
  facts,
  locale,
}: {
  facts: FactAndFigure[];
  locale: "ar" | "en";
}) {
  return (
    <div className="counter-area">
      <div className="row">
        {facts?.map((f, x) => (
          <div key={f.id} className="col-lg-3 col-md-6">
            <div className="counter-card">
              <h1>{f?.count}</h1>
              <p>{f?.description[locale]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Odometer;
