import React from "react";
import { Link } from "react-router-dom";
import ecosystem from "../../assets/ecosystem.png";

export default function Stats() {
  return (
    <div
      className="container
    
    
    
    
    mt-5 "
    >
      <div className="row d-flex justify-content-evenly">
        <div className="col-12 col-xl-5">
          <h1 className="fs-3 mt-5 mb-5 text-dark-emphasis">
            Trust with confidence
          </h1>
          <h2 className="fs-4 text-dark-emphasis">Customer-first always</h2>
          <p className="fw-medium text-muted" style={{ lineHeight: "1.4" }}>
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <h2 className="fs-4 text-dark-emphasis">No spam or gimmicks</h2>
          <p className="fw-medium text-muted" style={{ lineHeight: "1.4" }}>
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.&nbsp;
            <Link className="text-decoration-none" to="#">
              Our philosophies.
            </Link>
          </p>
          <h2 className="fs-4 text-dark-emphasis">The Zerodha universe</h2>
          <p className="fw-medium text-muted" style={{ lineHeight: "1.4" }}>
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4 text-dark-emphasis">Do better with money</h2>
          <p className="fw-medium text-muted" style={{ lineHeight: "1.4" }}>
            With initiatives like &nbsp;
            <Link className="text-decoration-none" to="#">
              Nudge
            </Link>
            &nbsp; and &nbsp;
            <Link className="text-decoration-none" to="#">
              Kill Switch
            </Link>
            &nbsp; , we don't just facilitate transactions, but actively help
            you do better with your money.
          </p>
        </div>
        <div className="col-12 col-xl-6 mt-3 text-center">
          <img
            src={ecosystem}
            alt="Ecosystem"
            className="img-fluid"
            style={{ maxHeight: "37rem" }}
          />
          <Link to="#" className="fw-medium pe-4 text-decoration-none">
            Explore our products <i class="fa-solid fa-arrow-right"></i>
          </Link>
          <Link to="#" className="fw-medium text-decoration-none">
            Try Kite demo <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
