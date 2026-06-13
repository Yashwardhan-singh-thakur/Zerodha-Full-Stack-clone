import React from "react";
import homeHero from "../../assets/homeHero.svg";

export default function Hero() {
  return (
    <div className="container-fluid" style={{ marginTop: "4rem" }}>
      <div className="row mt-5 d-flex justify-content-evenly">
        <img
          src={homeHero}
          className="mt-5"
          alt="Hero"
          style={{ maxHeight: "25rem" }}
        />
        <h1 className="fs-3 text-center mt-5 text-dark-emphasis">
          Invest in everything
        </h1>
        <p className="text-center fs-5 text-muted mt-2 mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary mx-auto p-2 fw-bold fs-5 custom-btn"
          style={{ width: "15rem" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}
