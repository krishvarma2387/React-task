import React, { useState } from "react";
import "./LoginSignup.css";
import { Link } from "react-router-dom";
const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div className="LoginBox">
            <input type="email" placeholder="Email ID" className="input" />
            <input type="password" placeholder="password" className="input" />
            <Link style={{ textDecoration: "none" }} to="/home">
              <button className="LoginBtn">Login</button>
            </Link>
          </div>
        ) : (
          <div className="LoginBox">
            <input type="text" placeholder="Name" className="input" />
            <input type="email" placeholder="Email ID" className="input" />
            <input type="password" placeholder="password" className="input" />
            <div
              className="SubmitBtn"
              onClick={() => {
                alert("User Registered!!");
                setAction("Login");
              }}
            >
              Submit
            </div>
          </div>
        )}
      </div>

      <div className="submit-container">
        {action === "Sign Up" ? (
          <div className="RequestBox">
            <p>Existing User?</p>
            <button
              className="submit"
              onClick={() => {
                setAction("Login");
              }}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="RequestBox">
            <p>Don't have an Account ?</p>
            <button
              className="submit"
              onClick={() => {
                setAction("Sign Up");
              }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
