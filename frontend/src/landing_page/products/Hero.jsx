import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container mt-5 pt-3 mb-5 border-bottom">
      <div className="row pt-5 mb-5 pb-2">
        <h1 className="fs-3 text-center mt-5  text-dark-emphasis">
          Zerodha Products
        </h1>
        <p className="text-center fs-5 text-muted mt-2 mb-3 fw-medium">
          Sleek, modern, and intuitive trading platforms
        </p>{" "}
        <p
          className="text-center  text-muted mt-1 mb-5 fw-medium"
          style={{ fontSize: "1rem" }}
        >
          Check out our{" "}
          <Link to="#" className="fw-medium text-decoration-none">
            investment offerings <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </p>
      </div>
    </div>
  );
}
