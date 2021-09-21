import React, { useState, useContext } from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";

const ForgotPassword = (props) => {
  return (
    <div className="loginmain">
      <div className="forgot">
        <div className="forgot-password-font">Forgot Password</div>
        <div className="name">
          Enter Email
          <span>*</span>
        </div>
        <div className="input">
          <Input
            className="AutoComplete"
            style={{ width: "100%", height: "50px", borderRadius: "10px" }}
            placeholder="Enter your email address"
            name="email"
            // value={data.email}
            // onChange={handleChange}
          />
          {/* {errors.email ? (
            <div className="form-alert">{errors.email}</div>
          ) : null} */}
        </div>
        <div className="signup-btn login-btn">
          {/* {loading ? (
            <Loading />
          ) : ( */}
          <Link to="/auth/otp">
            <Button
              style={{ height: "50px", borderRadius: "10px", color: "white" }}
              type="primary"
              // onClick={handleSubmit}
            >
              Submit
            </Button>
          </Link>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
