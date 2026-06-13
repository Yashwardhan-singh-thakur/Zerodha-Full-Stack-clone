import React from "react";
import Pricing from "../../components/Pricing";
import pricingEquity from "../../assets/pricingEquity.svg";
import intradayTrades from "../../assets/intradayTrades.svg";

export default function Hero() {
  return (
    <div className="container mt-5  mb-5 ">
      <div className="row  mb-5 pb-2">
        <h1 className="fs-3 text-center mt-5 pt-5 text-dark-emphasis ">
          Charges
        </h1>
        <p
          className="text-center fs-5  mt-2 mb-3 fw-medium"
          style={{ fontSize: "0.75rem", color: "rgba(161, 160, 160, 1)" }}
        >
          List of all charges and taxes
        </p>
      </div>
      <div className="row">
        <Pricing
          imageUrl={pricingEquity}
          title="Free equity delivery"
          description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
        />
        <Pricing
          imageUrl={intradayTrades}
          title="Intraday and F&O trades"
          description="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
        />
        <Pricing
          imageUrl={pricingEquity}
          title="Free direct MF"
          description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
        />
      </div>
    </div>
  );
}
