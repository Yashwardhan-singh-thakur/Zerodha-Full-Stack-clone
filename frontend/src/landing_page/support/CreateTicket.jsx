import React from "react";
import { useState } from "react";

import { supportLinks } from "../../data/supportLinks";

export default function CreateTicket() {
  let [openId, setOpenId] = useState(null);

  function supportCategory(id) {
    setOpenId(openId === id ? null : id);
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row mt-5  mx-2 mx-lg-5  d-flex justify-container-evenly">
        <div className="col-12 col-lg-8 ">
          {supportLinks.map((link, i) => (
            <div key={i} className="mb-4 ">
              <div
                className="d-flex align-items-center border dropDown bg-white z-2  "
                onClick={() => supportCategory(link.id)}
                key={i}
              >
                <i
                  className="fa-solid fa-circle-plus border-end fs-4 text-primary d-flex align-items-center justify-content-center py-3 cursor-pointer"
                  style={{
                    backgroundColor: "#F7FBFF",
                    padding: "0 2rem",
                    cursor: "pointer",
                  }}
                ></i>

                <h2
                  className=" fw-medium  w-100 ps-4  mb-2 py-3 cursor-pointer"
                  key={i}
                  style={{
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  {link.title}
                </h2>
                <button className="no-style border-0 bg-white blackEffect me-3">
                  <i
                    className={`fa-sharp fa-solid text-primary fs-5  ${
                      openId === link.id ? "fa-angle-up" : "fa-angle-down"
                    }`}
                  ></i>
                </button>
              </div>
              <div
                className={`border ${openId === link.id ? "open " : "close"}`}
              >
                <ul className="my-4 ms-4">
                  {link.link.map((l) => (
                    <a href="#" className="text-decoration-none">
                      <li className="mb-4">{l}</li>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-4">
          <div
            className="px-4"
            style={{
              backgroundColor: "#FFF3E6",
              borderLeft: "12px solid #F59E0B",
              height: "9rem",
            }}
          >
            <ul>
              <a href="#">
                <li className="pt-4">
                  Rights Entitlements listing in June 2026
                </li>
              </a>
              <a href="#">
                <li className="mt-4">
                  Current Takeovers and Delisting – June 2026
                </li>
              </a>
            </ul>
          </div>
          <div className="border mt-4">
            <h3
              className="fs-5 fw-bold text-dark-emphasis text-start p-3 border-bottom mb-0"
              style={{ backgroundColor: "#F6F6F6" }}
            >
              Quick links
            </h3>
            <ul className="list-unstyled d-flex flex-column p-0 m-0">
              <li className="border-bottom p-3 flex-fill">
                <a href="#" className="text-decoration-none ">
                  1. Track account opening
                </a>
              </li>
              <li className="border-bottom p-3 flex-fill">
                <a href="#" className="text-decoration-none ">
                  2. Track segment activation
                </a>
              </li>
              <li className="border-bottom p-3 flex-fill">
                <a href="#" className="text-decoration-none ">
                  3. Intraday margins
                </a>
              </li>
              <li className="border-bottom p-3 flex-fill">
                <a href="#" className="text-decoration-none ">
                  4. Kite user manual
                </a>
              </li>
              <li className=" p-3 flex-fill">
                <a href="#" className="text-decoration-none ">
                  5. Learn how to create a ticket
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
