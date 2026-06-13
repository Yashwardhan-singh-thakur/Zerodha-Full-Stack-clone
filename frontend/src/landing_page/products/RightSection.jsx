import React from "react";
import googlePlayBadge from "../../assets/google-play-badge-black.svg";
import appstorebadgelight from "../../assets/appstore-badge-black.svg";

export default function RightSection({ imageUrl, title, description, links }) {
  return (
    <div className="container mt-5 pt-5">
      <div className="row dflex justify-content-center">
        <div className="col-12 col-lg-7 text-center">
          <img className="img-fluid" src={imageUrl} alt={imageUrl} />
        </div>
        <div className="col-12 col-lg-5  mt-2 px-lg-5  ">
          <h1 className="fs-4 text-dark-emphasis pt-lg-5">{title}</h1>
          <p className="fw-medium text-muted mt-4" style={{ lineHeight: "2" }}>
            {description}
          </p>

          {links &&
            links.map((link) => (
              <a
                href="#"
                className="fw-medium text-decoration-none pe-5 me-3  "
              >
                {link} <i class="fa-solid fa-arrow-right"></i>
              </a>
            ))}
          <br />
          <img
            className="mt-4 me-3"
            src={googlePlayBadge}
            alt={googlePlayBadge}
            style={{ height: "2.7rem" }}
          />
          <img
            className="mt-4"
            src={appstorebadgelight}
            alt={appstorebadgelight}
            style={{ height: "2.7rem" }}
          />
        </div>
      </div>
    </div>
  );
}
