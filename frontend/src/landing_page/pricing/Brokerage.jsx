import React from "react";

export default function Brokerage() {
  return (
    <div className="container mt-5 pt-4">
      <div className="row  mb-5 pb-2 text-center mt-5">
        <div className="col-12 col-lg-8">
          <a href="#" className="text-decoration-none">
            Brokerage calculator
          </a>{" "}
          <ul
            className=" text-start text-muted mt-4"
            style={{ fontSize: "0.85rem", lineHeight: "2.2" }}
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-12 col-lg-4 mt-2 mt-lg-0">
          <a href="#" className="text-decoration-none">
            List of charges
          </a>
        </div>
      </div>
    </div>
  );
}
