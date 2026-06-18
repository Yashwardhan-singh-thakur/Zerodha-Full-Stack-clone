import React from "react";
import { Link } from "react-router-dom";

import education from "../../assets/education.svg";

export default function Education() {
  return (
    <div className="container-fluid  mt-5 py-5">
      <div className="row  d-flex justify-content-evenly">
        <div className="col-12 col-lg-5 text-center mb-5 ">
          <img
            src={education}
            alt="educationr"
            className="img-fluid"
            style={{ maxHeight: "20rem" }}
          />
        </div>

        <div className="col-12 col-lg-5 ">
          <h1 className="fs-4 text-dark-emphasis pt-lg-5">
            Free and open market education
          </h1>
          <p className="fw-medium text-muted mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="fw-medium text-decoration-none">
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="fw-medium text-muted mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <Link to="#" className="fw-medium text-decoration-none">
            TradingQ&A <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
