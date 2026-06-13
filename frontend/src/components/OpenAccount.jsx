import React from "react";

export default function OpenAccount() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="fs-3  mt-5 text-dark-emphasis">
          Open a Zerodha account
        </h1>
        <p className=" fs-5 text-muted mt-2 mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary mx-auto  p-2 fw-bold fs-5 custom-btn"
          style={{ width: "15rem" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
