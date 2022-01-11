import React from "react";
import "./Signup.css";
import { Input, Space } from "antd";
import "antd/dist/antd.css";

export default function Signup() {
  return (
    <div className="outer-container">
      <div className="signup-outer-container">
        <div className="login-title">
          <h2 style={{ cursor: "pointer" }}>
            <strong>LOGIN</strong>
          </h2>
          <h2 className="shift-signup">
            <strong>SIGNUP</strong>
          </h2>
        </div>
        <div className="fullname">
          <p className="fullname-title">Full Name</p>
          <Input className="fullname-box" placeholder="" />
        </div>
        <div className="email1">
          <p className="email-title">Email Id</p>
          <Input className="email-box" placeholder="" />
        </div>
        <div className="password1">
          <p className="password-title">Password</p>
          <Input.Password className="password-box" placeholder="" />
        </div>
        <div className="mob-num">
          <p className="mob-num-title">Mobile Number</p>
          <Input className="mob-num-box" placeholder="" />
        </div>
        <button className="signup-button">Signup</button>
      </div>
    </div>
  );
}
