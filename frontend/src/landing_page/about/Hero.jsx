import React from "react";

export default function Hero() {
  return (
    <div className="container mt-5 pt-3">
      <div className="row pt-5">
        <h1
          className="text-center mt-5 fs-4 mb-5"
          style={{ color: "rgba(68, 67, 67, 1)" }}
        >
          We pioneered the discount broking model in India. <br /> Now, we are
          breaking ground with our technology.
        </h1>
      </div>
      <div className="row pt-5 border-top justify-content-evenly mt-5">
        <div className="col-12 col-md-5 mt-5 ">
          <p
            className="fw-medium text-muted  lh-base mb-4"
            style={{ lineHeight: "1.4" }}
          >
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p
            className="fw-medium text-muted lh-base mb-4"
            style={{ lineHeight: "1.4" }}
          >
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p
            className="fw-medium text-muted lh-base mb-4"
            style={{ lineHeight: "1.4" }}
          >
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-12 col-md-5  mt-md-5 ">
          <p
            className="fw-medium text-muted lh-base mb-4"
            style={{ lineHeight: "1.4" }}
          >
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p
            className="fw-medium text-muted lh-base mb-4"
            style={{ lineHeight: "1.4" }}
          >
            <a
              href="https://rainmatter.com/"
              className="text-decoration-none"
              target="_blank"
            >
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p
            className="fw-medium text-muted lh-base mb-4"
            style={{ lineHeight: "1.4" }}
          >
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a href="/z-connect" className="text-decoration-none">
              blog
            </a>{" "}
            or see what the media is{" "}
            <a href="/media" className="text-decoration-none">
              saying about us
            </a>{" "}
            or learn more about our business and product
            <a href="/about/philosophy/" className="text-decoration-none">
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
