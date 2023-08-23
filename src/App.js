import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./Components/Home/Home";
import SignIn from "./Components/Sign In/SignIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import useAuth from "./context/auth-context";

const App = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {!user && <Route path="/admin" element={<SignIn />} />}
      {user && <Route path="/dashboard/*" element={<Dashboard />} />}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
