import React from "react";

export default function Pricing({ imageUrl, title, description }) {
  return (
    <div className="col-12 col-lg-4 col-sm-6 text-center">
      <img
        className="img-fluid"
        src={imageUrl}
        alt={imageUrl}
        style={{ height: "12rem" }}
      />
      <h1 className="fs-3 text-center mt-3  text-dark-emphasis">{title}</h1>
      <p
        className="text-center mt-4 mb-3 fw-medium px-lg-2"
        style={{ fontSize: "1rem", color: "rgba(117, 116, 116, 1)" }}
      >
        {description}
      </p>
    </div>
  );
}
