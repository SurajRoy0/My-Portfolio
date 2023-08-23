import React from "react";

import Sidebar from "./Sidebar";
import TopBar from "./Topbar";
import Mainbody from "./Mainbody";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <Mainbody />
      </div>
    </div>
  );
};

export default Dashboard;
