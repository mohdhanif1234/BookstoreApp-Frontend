import React from "react";
import { Input, Space } from "antd";
import "antd/dist/antd.css";
import "./Login.css";

export default function Login() {
  return (
    <div className="outer-container">
      <div className="login-outer-container">
        <div className="login-title">
          <h2>
            <strong>LOGIN</strong>
          </h2>
        </div>
        <div className="email">
          <p className="email-title">Email Id</p>
          <Input className="email-box" placeholder="" />
        </div>
        <div className="password">
          <p className="password-title">Password</p>
          <Input.Password className="password-box" placeholder="" />
          <div className="forgot-password">
            <button className="forgot-password-text">Forgot Password?</button>
          </div>
        </div>
        <button className="login-button">Login</button>
        <div className="or">
          <span>OR</span>
        </div>
        <div className="buttons">
          <button className="facebook-btn">Facebook</button>
          <button className="google-btn">Google</button>
        </div>
      </div>
    </div>
  );
}
