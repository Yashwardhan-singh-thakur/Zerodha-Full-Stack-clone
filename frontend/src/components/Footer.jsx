import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import googlePlayBadge from "../assets/googlePlayBadge.svg";
import appstorebadgelight from "../assets/appstore-badge-light.svg";
import { footerLinks } from "../data/footerLinks";
import { socialLinks } from "../data/socialLinks";
import { footerBottomLinks } from "../data/footerLinks";
import "./Footer.css";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#FBFBFB" }}
      className="border-top  border-grey mt-5"
    >
      <div className="container  mt-5  mb-5">
        <div className="row ">
          <div className="col-12 col-md-3 ">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Logo" height={"20rem"} />
            </Link>

            <p
              className="mt-4 text-muted fw-normal"
              style={{ fontSize: "0.85rem" }}
            >
              © 2010 - 2026, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
            {socialLinks.map((link, i) => (
              <a className="fs-5  blue" href={link.url} key={link.title}>
                <i className={link.icon}></i>
                {i === 3 && <hr />}
              </a>
            ))}
            <br />
            <img
              src={googlePlayBadge}
              alt="googlePlayBadge"
              className="mt-4 image-fluid"
              style={{ maxHeight: "2.25rem", cursor: "pointer" }}
            />
            <img
              src={appstorebadgelight}
              className="ms-2  mt-4 image-fluid"
              alt="appstorebadgelight"
              style={{ maxHeight: "2.25rem", cursor: "pointer" }}
            />
          </div>
          <div className="col-9">
            <div className="row">
              {footerLinks.map((sec, i) => (
                <div className="col-12 col-md-3" key={i}>
                  <h6 className="fs-5 mb-3 mt-5 mt-md-0 text-dark-emphasis">
                    {sec.title}
                  </h6>
                  <ul className="list-unstyled">
                    {sec.links.map((link, index) => (
                      <li
                        key={index}
                        className="mb-3  blue fw-normal"
                        style={{ fontSize: "0.95rem", cursor: "pointer" }}
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <p
            className="text-muted fw-medium"
            style={{ fontSize: "0.75rem", cursor: "pointer" }}
          >
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX &amp; MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to . Please ensure you carefully
            read the Risk Disclosure Document as prescribed by SEBI | ICF{" "}
            <a
              className="text-decoration-none"
              href="mailto:complaints@zerodha.com"
            >
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a className="text-decoration-none" href="mailto:dp@zerodha.com">
              dp@zerodha.com
            </a>
          </p>
          <p
            className="text-muted fw-medium"
            style={{ fontSize: "0.75rem", cursor: "pointer" }}
          >
            Procedure to file a complaint on{" "}
            <a
              className="text-decoration-none"
              rel="nofollow"
              href="https://scores.sebi.gov.in/"
              target="_blank"
            >
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p
            className="text-muted fw-medium"
            style={{ fontSize: "0.75rem", cursor: "pointer" }}
          >
            <a
              className="text-decoration-none"
              rel="nofollow"
              href="https://smartodr.in/"
              target="_blank"
            >
              Smart Online Dispute Resolution
            </a>{" "}
            |{" "}
            <a
              className="text-decoration-none"
              href="https://zerodha-common.s3.ap-south-1.amazonaws.com/Downloads-and-resources/Smart%20ODR%20info.pdf"
              target="_blank"
            >
              Grievances Redressal Mechanism
            </a>
          </p>
          <p
            className="text-muted fw-medium"
            style={{ fontSize: "0.75rem", cursor: "pointer" }}
          >
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p
            className="text-muted fw-medium"
            style={{ fontSize: "0.75rem", cursor: "pointer" }}
          >
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p
            className="text-muted fw-medium"
            style={{ fontSize: "0.75rem", cursor: "pointer" }}
          >
            India's largest broker based on networth as per NSE.{" "}
            <a
              className="text-decoration-none"
              rel="nofollow"
              href="https://enit.nseindia.com/MemDirWeb/brokerDetailPage_Beta?memID=2516&amp;h_MemType=members&amp;memName=ZERODHA%20BROKING%20LIMITED"
              target="_blank"
            >
              NSE broker factsheet
            </a>
          </p>
          <p
            className="text-muted fw-medium"
            style={{ fontSize: "0.75rem", cursor: "pointer" }}
          >
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please{" "}
            <a
              className="text-decoration-none"
              href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-place-a-complaint-at-zerodha"
            >
              create a ticket here
            </a>
            .
          </p>
          <p
            className="text-muted fw-medium"
            style={{ fontSize: "0.75rem", cursor: "pointer" }}
          >
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
          <p
            className="text-muted fw-medium"
            style={{ fontSize: "0.75rem", cursor: "pointer" }}
          >
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
          <p className="text-start text-sm-center ">
            {footerBottomLinks.map((link, i) => (
              <a
                href="#"
                className="text-decoration-none blue  me-4 fw-medium"
                style={{ fontSize: "0.8rem" }}
                key={i}
              >
                {link.title}
              </a>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
