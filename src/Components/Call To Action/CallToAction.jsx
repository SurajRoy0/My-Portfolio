import React from "react";

import "./CallToAction.scss";
import ArrowIcon from "./ArrowIcon";
const CallToAction = ({ ctaName, action, icon }) => {
  return (
    <div className="call-to-action" onClick={action}>
      <span className="text">{ctaName}</span>
      {icon ? <div className="icon">{icon}</div> : <ArrowIcon />}
    </div>
  );
};

export default CallToAction;
