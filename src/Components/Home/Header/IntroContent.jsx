import React from "react";

import profile from "../../../Assets/Images/profile.png";
import handIcon from "../../../Assets/Images/hand.png";
import "./IntroContent.scss";
import CallToAction from "../../Call To Action/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Resume from "../../../Assets/Download/Resume.pdf";

const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="left-col">
        <h1 className="title">
          <span className="small-text">
            <span className="text">Hello</span>
            <span className="hand-icon">
              <img src={handIcon} alt="Hand Icon" />
            </span>
            <span className="text">, I Am</span>
          </span>
          <span className="big-text"> Suraj Roy</span>
        </h1>
        <p>
          Eager to contribute and grow in the world of Web Development. Excited
          to bring ideas to life and expand my skills in this evolving field.
        </p>
        <CallToAction
          ctaName="Download CV"
          icon={<AiOutlineCloudDownload />}
          action={() => window.open(Resume)}
        />
      </div>
    </div>
  );
};

export default IntroContent;
