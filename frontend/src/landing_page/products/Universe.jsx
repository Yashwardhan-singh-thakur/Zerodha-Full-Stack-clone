import React from "react";
import partnersPlatform from "../../data/products";

export default function Universe() {
  return (
    <div className="container mt-5 text-center">
      <div className="row pt-5">
        <h1 className="fs-4 text-center  text-dark-emphasis">
          The Zerodha Universe
        </h1>
        <p
          className="text-center  text-muted mt-3 fw-medium"
          style={{ fontSize: "1.07rem" }}
        >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>{" "}
      </div>
      <div className="row mt-2  justify-content-evenly">
        {partnersPlatform.map((logo) => (
          <div className="col-12 col-sm-5 col-md-4 d-flex justify-content-evenly mt-3 mt-lg-5 ">
            <div>
              <img
                className="mb-4"
                src={logo.image}
                alt={logo.image}
                style={{ height: "2.75rem" }}
              />
              <p
                className="text-center px-5 px-sm-2 px-lg-5  mt-2 fw-medium lh-base "
                style={{ fontSize: "0.75rem", color: "rgba(161, 160, 160, 1)" }}
              >
                {logo.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-primary mx-auto p-2 fw-bold fs-5 custom-btn mt-5"
        style={{ width: "15rem" }}
      >
        Sign up for free
      </button>
    </div>
  );
}
