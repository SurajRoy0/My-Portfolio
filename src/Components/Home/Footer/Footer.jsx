import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Resume from "../../../Assets/Download/Resume.pdf";
import { scrollToSection } from "../../Utils/helpers";
import logo from "../../../Assets/Images/SR.png";
import "./Footer.scss";
import SocialIcons from "./SocialIcons";
import { AiOutlineCloudDownload } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-content-wrapper" id="contact">
      <div className="footer-logo">
        <img src={logo} alt="Suraj Roy" />
      </div>
      <ul className="footer-menu-items">
        <li
          className="footer-menu-item"
          onClick={() => scrollToSection("intro")}
        >
          Intro
        </li>
        <li
          className="footer-menu-item"
          onClick={() => scrollToSection("about")}
        >
          About Me
        </li>
        <li
          className="footer-menu-item"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>
        <li
          className="footer-menu-item"
          onClick={() => scrollToSection("portfolio")}
        >
          Portfolio
        </li>
      </ul>
      <div className="contact-div">
        <div className="contact-info">
          <span>
            <FaPhoneAlt size={12} /> Phone: +91 7029847956
          </span>
          <span>
            <MdEmail /> Email: myself.suraj0@gmail.com
          </span>
          <span>
            <FaMapMarkerAlt /> Location: Birbhum, West Bengal
          </span>
          <span className="cv-action" onClick={() => window.open(Resume)}>
            <AiOutlineCloudDownload size={18} /> Download CV
          </span>
        </div>
        <div className="social-icons">
          <SocialIcons
            color="#0D2636"
            icon={<FaGithub />}
            link="https://github.com/SurajRoy0"
          />
          <SocialIcons
            color="#0A66C2"
            icon={<FaLinkedinIn />}
            link="https://www.linkedin.com/in/suraj-roy-817326242/"
          />
          <SocialIcons
            color="#E84c88"
            icon={<FaInstagram />}
            link="https://www.instagram.com/_i_m___suraj/"
          />
          <SocialIcons
            color="#0A66C2"
            icon={<FaFacebook />}
            link="https://www.facebook.com/ranbeer.roy.1293/"
          />
        </div>
      </div>
      <div className="copyright-bar">
        <div className="copyright-text">
          Made By Suraj Roy 2023 | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
