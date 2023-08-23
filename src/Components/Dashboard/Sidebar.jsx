// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Dashboard</h1>
      <ul className="side-nav">
        <li className="nav-item">
          <NavLink to="/dashboard" exact activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/skills-set" activeClassName="active">
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/logos" activeClassName="active">
            Logos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
