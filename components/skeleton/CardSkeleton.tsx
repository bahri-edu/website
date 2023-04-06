import React from "react";
import Skeleton from "react-loading-skeleton";

function CardSkeleton() {
  return (
    <div
      style={{
        display: "flex",
        gap: "7px",
      }}
    >
      <Skeleton height={300} width={300} />
      <Skeleton height={300} width={300} />
      <Skeleton height={300} width={300} />
      <Skeleton height={300} width={300} />
      <Skeleton height={300} width={300} />
    </div>
  );
}

export default CardSkeleton;
