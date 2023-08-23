import React from "react";
import "./Topbar.scss";
import useAuth from "../../context/auth-context";
const TopBar = () => {
  const { signOutHandler } = useAuth();

  return (
    <div className="top-bar">
      <button onClick={() => signOutHandler()}>Sign Out</button>
    </div>
  );
};

export default TopBar;
