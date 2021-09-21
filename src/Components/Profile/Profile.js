import React, { useContext, useState } from "react";
import "../Home/Home.css";
import { Input, Button } from "antd";
import "./Profile.css";
import pro from "../../assets/images/profile.png";
import { AuthContext } from "../../routes/Auth";
import axios from "axios";
import { BASE_URL } from "../../utils/env";
import Loading from "../Loading/Loading";
import { useHistory } from "react-router-dom";

const Profil = () => {
  const { user, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const handleLogout = () => {
    axios
      .get(`${BASE_URL}/auth/logout`, { withCredentials: true })
      .then((res) => {
        setLoading(false);
        setError("");
        logout();
        history.push("/auth");
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        setError(err.response?.data?.errMsg);
      });
  };
  return (
    <div className="home">
      <div className="propagemain">
        <div className="profilepage">
          <div className="propage-img">
            <img src={pro} />
          </div>
          <div>
            <div className="propage-UserName">{user.name}</div>
            <div className="propage-UserID">{user.email}</div>
          </div>
        </div>
        <div className="propage">
          {error && <div className="form-alert">{error}</div>}
          <div className="propad">
            <div className="name">Name</div>
            <div className="input">
              <Input
                style={{
                  height: "50px",
                  borderRadius: "10px",
                  pointerEvents: "none",
                }}
                placeholder="Enter your Full Name"
                value={user.name}
              />
            </div>

            <div className="name">Email Address</div>
            <div className="input">
              <Input
                className="AutoComplete"
                style={{
                  width: "100%",
                  height: "50px",
                  borderRadius: "10px",
                  pointerEvents: "none",
                }}
                placeholder="Enter your email address"
                value={user.email}
              />
            </div>
          </div>
          <div className="probtn">
            {loading ? (
              <Loading />
            ) : (
              <Button onClick={handleLogout}>Log Out</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
