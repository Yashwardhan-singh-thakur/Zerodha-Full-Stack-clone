import { useState } from "react";
import nithinKamath from "../../assets/team/nithinKamath.jpg";
import teamMembers from "../../data/teamMember";
import "./Team.css";

export default function Team() {
  const [openBioId, setOpenBioId] = useState(null);

  const handleBioToggle = (id) => {
    setOpenBioId(openBioId === id ? null : id);
  };

  return (
    <div className="container mt-5 pt-4">
      <div className="row ">
        <h1
          className="text-center fs-4 "
          style={{ color: "rgba(68, 67, 67, 1)" }}
        >
          People
        </h1>
      </div>
      <div className="row  mt-2 mb-lg-5">
        <div className="col-12 col-lg-5 mt-5 text-center ">
          <img
            className="rounded-circle"
            style={{ height: "18rem" }}
            src={nithinKamath}
            alt="nithinKamath"
          />
          <h2
            className="fs-5 mt-4 mb-3"
            style={{ color: "rgba(56, 55, 55, 1)" }}
          >
            Nithin Kamath
          </h2>
          <p className="fw-medium  text-muted ">Founder, CEO</p>
        </div>
        <div className="col-12 col-lg-7  mt-md-5 ">
          <p
            className="fw-medium text-muted lh-base mb-4 mt-4"
            style={{ lineHeight: "1.4" }}
          >
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p
            className="fw-medium text-muted lh-base mb-4"
            style={{ lineHeight: "1.4" }}
          >
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p
            className="fw-medium text-muted lh-base mb-4"
            style={{ lineHeight: "1.4" }}
          >
            Playing basketball is his zen.
          </p>
          <p
            className="fw-medium text-muted lh-base mb-4"
            style={{ lineHeight: "1.4" }}
          >
            Connect on{" "}
            <a
              target="_blank"
              href="https://nithinkamath.me/"
              title="Homepage"
              className="text-decoration-none"
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              target="_blank"
              href="https://tradingqna.com/u/nithin/summary"
              title="TradingQnA"
              className="text-decoration-none"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              target="_blank"
              href="https://twitter.com/Nithin0dha"
              className="text-decoration-none"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="row mt-5 text-center">
        {teamMembers.map((member) => (
          <div className="col-12 col-lg-4 mb-5  ">
            <img
              className="rounded-circle"
              style={{ height: "15rem" }}
              src={member.img}
              alt="nithinKamath"
            />
            <h2
              className="fs-5 mt-4 mb-3"
              style={{ color: "rgba(56, 55, 55, 1)" }}
            >
              {member.name}
            </h2>
            <p className="fw-medium  text-muted">{member.designation}</p>
            <button
              className="no-style border-0 bg-white blackEffect"
              onClick={() => handleBioToggle(member.id)}
            >
              bio
              <i
                style={{ fontSize: "0.75rem" }}
                className={`ms-1 fa-sharp fa-solid  ${
                  openBioId === member.id ? "fa-angle-up" : "fa-angle-down"
                }`}
              ></i>
            </button>
            {openBioId === member.id && (
              <p
                className="fw-medium text-muted text-start lh-base mb-lg-5 mt-4 px-lg-5 mx-lg-2"
                style={{ lineHeight: "1.4" }}
              >
                {member.bio}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
