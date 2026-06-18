import React from "react";
import { Link } from "react-router-dom";

import pricingEquity from "../../assets/pricingEquity.svg";
import intradayTrades from "../../assets/intradayTrades.svg";

export default function Pricing() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-5">
          <h1 className="fs-3 mb-4 text-dark-emphasis">Unbeatable pricing</h1>
          <p className="fw-medium text-muted" style={{ lineHeight: "1.4" }}>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <Link to="#" className="fw-medium text-decoration-none">
            See pricing <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <div className="col-12 col-lg-7 row mt-5-lg">
          <div className="col-6 col-md-4 col-lg-4 d-flex align-items-center">
            <img
              src={pricingEquity}
              alt="pricingEquity"
              style={{ height: "5rem" }}
            />
            <p
              className=" text-muted fw-normal mt-3"
              style={{ fontSize: "0.70rem", marginLeft: "-0.85rem" }}
            >
              Free account <br />
              opening
            </p>
          </div>
          <div className="col-6 col-md-4 col-lg-4 d-flex align-items-center">
            <img
              src={pricingEquity}
              alt="pricingEquity"
              style={{ height: "5rem" }}
            />
            <p
              className="text-muted fw-normal mt-4"
              style={{ fontSize: "0.65rem", marginLeft: "-0.85rem" }}
            >
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>
          <div className="col-12  col-lg-6 col-xl-4 d-flex align-items-center">
            <img
              src={intradayTrades}
              alt="intradayTrades"
              style={{ height: "5rem" }}
            />
            <p
              className="text-muted fw-normal mt-2"
              style={{ fontSize: "0.70rem" }}
            >
              Intraday and <br />
              F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
