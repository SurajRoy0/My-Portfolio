import React from "react";
import "./Mainbody.scss";
import Logos from "./Logos/Logos";

import { Route, Routes } from "react-router-dom";
import Skills from "./Skills/Skills";
import Projects from "./Project/Projects";

const Mainbody = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/skills-set" element={<Skills />} />
        <Route path="/logos" element={<Logos />} />
      </Routes>
    </div>
  );
};

export default Mainbody;
