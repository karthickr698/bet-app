import React, { useState, useContext } from "react";
import "./Sign.css";
import { Input, Button } from "antd";
import Loading from "../Loading/Loading";
import axios from "axios";
import { BASE_URL } from "../../utils/env";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../routes/Auth";
import moment from "moment";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

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

    // if (data.password && !data.password.match(passwordRegex)) {
    //   errorState["password"] =
    //     "password must contain eight characters, at least one number and both lower and uppercase letters and special characters";
    //   state = true;
    // }

    if (data.email !== "" && !data.email.match(emailRegex)) {
      errorState["email"] = "Invalid Email";
      state = true;
    }

    setErrors({ ...errorState });

    return state;
  };

  const history = useHistory();

  console.log(history);

  const handleSubmit = () => {
    if (!validation()) {
      setLoading(true);
      axios
        .post(`${BASE_URL}/auth/login`, data, { withCredentials: true })
        .then((res) => {
          setLoading(false);
          setError("");
          console.log("res", res);
          login();
          history.push("/");
          window.location.reload();
        })
        .catch((err) => {
          setLoading(false);
          console.log("err", JSON.stringify(err.response?.data?.errMsg));
          setError(err.response?.data?.errMsg);
        });
    }
  };

  console.log(errors);
  console.log(props);

  console.log(moment(new Date()).format("YYYY-MM-DD"));

  return (
    <div className="loginmain">
      <div className="login">
        {error && <div className="form-alert">{error}</div>}
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
        <div className="forgot-password">
          <Link to="/auth/forgot">Forgot Password?</Link>
        </div>
        <div className="signup-btn login-btn">
          {loading ? (
            <Loading />
          ) : (
            <Button
              style={{ height: "50px", borderRadius: "10px", color: "white" }}
              type="primary"
              onClick={handleSubmit}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
