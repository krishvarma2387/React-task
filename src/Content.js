import React from "react";
import LoginSignup from "./LoginSignup";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Content;
