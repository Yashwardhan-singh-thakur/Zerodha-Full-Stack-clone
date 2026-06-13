import React, { useState } from "react";
import { Link } from "react-router-dom";
import kiteLogo from "../assets/kite-logo.svg";

import { menuLinks } from "../data/menuLink";

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (id) => {
    setSelectedMenu(id);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src={kiteLogo} style={{ width: "2rem" }} />
      <div className="menus">
        <ul>
          {menuLinks.map((link) => (
            <li key={link.id}>
              <Link
                style={{ textDecoration: "none" }}
                to={link.path}
                onClick={() => handleMenuClick(link.id)}
              >
                <p
                  className={
                    selectedMenu === link.id ? activeMenuClass : menuClass
                  }
                >
                  {link.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">YA</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
}
