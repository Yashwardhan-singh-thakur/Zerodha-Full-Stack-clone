import React from "react";

export default function LeftSection({ imageUrl, title, description, links }) {
  return (
    <div className="container mt-5 pt-5 ">
      <div className="row dflex justify-content-center ">
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
        </div>{" "}
        <div className="col-12 col-lg-7 text-center ">
          <img className="img-fluid" src={imageUrl} alt={imageUrl} />
        </div>
      </div>
    </div>
  );
}
