import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/navlinks.js";
import logo from "../assets/logo.svg";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [hoverLink, setHoverLink] = useState(null);

  function handleActiveLink(id) {
    setActiveLink(id);
  }

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom border-1 border-grey  fixed-top mb-5"
      style={{ height: "3.95rem", backgroundColor: "#FEFFFF" }}
    >
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height={"17rem"} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav  mt-2 mb-2 mb-lg-0 bg-white">
            {navLinks.map((link, i) => (
              <li className="nav-item ms-4 " key={i}>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={link.path}
                  onClick={() => handleActiveLink(link.id)}
                  onMouseEnter={() => setHoverLink(link.id)}
                  onMouseLeave={() => setHoverLink(null)}
                  style={{
                    color:
                      (activeLink === link.id || hoverLink === link.id) &&
                      "blue",
                  }}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
