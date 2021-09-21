import React, { useState } from "react";
import "./Sign.css";
import { Input, DatePicker, Button } from "antd";
import Loading from "../Loading/Loading";

const Signup = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    dob: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    dob: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validation = () => {
    const errorState = { ...errors };
    let state = false;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_~{|}`-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex =
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    for (let key in data) {
      if (data[key] === null || data[key] === "") {
        errorState[key] =
          key.charAt(0).toUpperCase() + key.slice(1) + " should not be empty";
        state = true;
      } else {
        errorState[key] = "";
      }
    }

    if (
      data.password &&
      data.confirmPassword &&
      data.password !== data.confirmPassword
    ) {
      errorState["confirmPassword"] = "Passwords are not same";
      state = true;
    }

    if (data.password && !data.password.match(passwordRegex)) {
      errorState["password"] =
        "password must contain eight characters, at least one number and both lower and uppercase letters and special characters";
      state = true;
    }

    if (data.confirmPassword && !data.confirmPassword.match(passwordRegex)) {
      errorState["confirmPassword"] =
        "password must contain eight characters, at least one number and both lower and uppercase letters and special characters";
      state = true;
    }

    if (data.email !== "" && !data.email.match(emailRegex)) {
      errorState["email"] = "Invalid Email";
      state = true;
    }

    setErrors({ ...errorState });

    return state;
  };

  const handleSubmit = () => {
    if (!validation()) {
    }
  };

  return (
    <div className="loginmain">
      <div className="login">
        {error && <div className="form-alert">{error}</div>}
        <div className="name">
          Name
          <span>*</span>
        </div>
        <div className="input">
          <Input
            style={{ height: "50px", borderRadius: "10px" }}
            placeholder="Enter your Full Name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          {errors.name ? <div className="form-alert">{errors.name}</div> : null}
        </div>
        <div className="name">
          Date of Birth
          <span>*</span>
        </div>
        <div className="input">
          <DatePicker
            style={{
              width: "100%",
              height: "50px",
              borderRadius: "10px",
            }}
            placeholder="DD/MM/YYYY"
            name="dob"
            value={data.dob}
            onChange={handleChange}
          />
          {errors.dob ? <div className="form-alert">{errors.dob}</div> : null}
        </div>
        <div className="name">
          Email Address
          <span>*</span>
        </div>
        <div className="input">
          <Input
            className="AutoComplete"
            style={{ width: "100%", height: "50px", borderRadius: "10px" }}
            placeholder="Enter your email address"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          {errors.email ? (
            <div className="form-alert">{errors.email}</div>
          ) : null}
        </div>
        <div className="name">
          Enter Password
          <span>*</span>
        </div>
        <div className="input">
          <Input.Password
            style={{ height: "50px", borderRadius: "10px" }}
            placeholder="Enter Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          {errors.password ? (
            <div className="form-alert">{errors.password}</div>
          ) : null}
        </div>
        <div className="name">
          Re-Type Password
          <span>*</span>
        </div>
        <div className="input">
          <Input.Password
            style={{ height: "50px", borderRadius: "10px" }}
            placeholder="Re-Type Password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword ? (
            <div className="form-alert">{errors.confirmPassword}</div>
          ) : null}
        </div>
        <div className="text">
          By continuing you agree to the MindFirst Health & Fitness Terms and
          Privacy. By continuing you agree to the MindFirst Health & Fitness
          Terms and Privacy. By continuing you agree to the MindFirst Health &
          Fitness Terms and Privacy.
        </div>
        <div className="signup-btn">
          {loading ? (
            <Loading />
          ) : (
            <Button
              style={{ height: "50px", borderRadius: "10px" }}
              type="primary"
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
