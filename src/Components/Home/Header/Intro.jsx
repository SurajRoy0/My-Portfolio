import React from "react";

import "./Intro.scss";
import wave from "../../../Assets/Images/wave.png";
import NavBar from "./NavBar";
import IntroContent from "./IntroContent";

const Intro = () => {
  return (
    <div className="intro-section" id="intro">
      <div className="content">
        <NavBar />
        <IntroContent />
      </div>
      <img src={wave} className="wave" alt="wave" />
    </div>
  );
};

export default Intro;
