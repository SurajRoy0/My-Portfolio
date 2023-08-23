import React, { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import logo from "../../../Assets/Images/SR.png";
import CallToAction from "../../Call To Action/CallToAction";
import { scrollToSection } from "../../Utils/helpers";

import "./NavBar.scss";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItemClickHandler = (section) => {
    setMobileMenu(!mobileMenu);
    scrollToSection(section);
  };

  return (
    <div className="nav-bar">
      <div className="app-logo">
        <img src={logo} alt="JS Dev" />
      </div>
      <div className="mobile-menu" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? (
          <IoMdClose size={24} color="#fff" />
        ) : (
          <CgMenuRight size={24} color="#fff" />
        )}
      </div>
      <div className={`navigation ${mobileMenu ? "active" : ""}`}>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("about")}
        >
          About Me
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("skills")}
        >
          Skills
        </span>
        <span
          className="navigation-item"
          onClick={() => menuItemClickHandler("portfolio")}
        >
          Portfolio
        </span>
        <CallToAction
          ctaName="Contact me"
          id="navContactMe"
          action={() => {
            menuItemClickHandler("contact");
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
