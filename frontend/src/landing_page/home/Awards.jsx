import React from "react";
import largestBroker from "../../assets/largestBroker.svg";
import pressLogos from "../../assets/pressLogos.png";

export default function Awards() {
  return (
    <div className="container-fluid mt-5 py-5">
      <div className="row g-4 d-flex justify-content-evenly">
        <div className="col-12 col-lg-5 text-center mb-5 ">
          <img
            src={largestBroker}
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxHeight: "19.75rem" }}
          />
        </div>

        <div className="col-12 col-lg-5 pt-lg-5 ">
          <h1 className="fs-2 text-dark-emphasis ">
            Largest stock broker in India
          </h1>

          <p className="mt-3 mb-3 fw-medium text-muted">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="ps-3 fw-medium text-muted">
                <li className="mt-2">Futures and Options</li>
                <li className="mt-2">Commodity derivatives</li>
                <li className="mt-2">Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="ps-3 fw-medium text-muted">
                <li className="mt-2">Stocks & IPOs</li>
                <li className="mt-2">Direct mutual funds</li>
                <li className="mt-2">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img
            src={pressLogos}
            alt="Press Logos"
            className="img-fluid mt-2"
            style={{ maxWidth: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}
