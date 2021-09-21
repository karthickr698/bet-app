import React, { useEffect, useState } from "react";
import "./Betsup.css";
import { Input, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import axios from "axios";
import { BASE_URL } from "../../utils/env";
import Loading from "../Loading/Loading";
import { useHistory } from "react-router-dom";

const SetBet = (props) => {
  const [data, setData] = useState({});

  const [cost, setCost] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setData({ ...props.location.query.apiData });
  }, []);

  const history = useHistory();

  const handleClick = () => {
    const formatData = {
      matchKey: props.match.params.id,
      bet: {
        ...data,
        value: cost,
      },
    };
    axios
      .post(`${BASE_URL}/cricket/bets`, formatData, { withCredentials: true })
      .then((res) => {
        setLoading(false);
        setError("");
        history.push("/my-bets");
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", JSON.stringify(err.response?.data));
        setError(err.response?.data?.errMsg);
      });
  };

  return (
    <div className="betsup-main">
      {error && <div className="form-alert">{error}</div>}
      <div>BET SLIP</div>
      <div className="betsup-flex">
        <div className="betsup-card-flex">
          <div className="bet-flex">
            <div className="tearm-icon">
              <img src={Ellipse1} />
            </div>
            <div>
              <div>{props.location.query.label}</div>
            </div>
          </div>
          <div className="bet-rate">
            <div className="rate-font">2 X</div>
          </div>
        </div>
      </div>
      <div className="betsup-cost-main">
        <div className="betsup-cost-flex-main">
          <div className="betsup-cost-flex">
            <div className="overall">Overall Stake</div>
            <div className="betsup-font">2X</div>
          </div>
          <div className="betsup-INR-flex">
            <div style={{ color: "#3C3C4399" }}>STAKE</div>
            <div className="betsup-input-flex">
              <Input
                className="AutoComplete"
                style={{ width: "100%", height: "50px", borderRadius: "10px" }}
                value={cost}
                onChange={(e) => {
                  setCost(e.target.value);
                }}
              />
              <div className="betsup-font"> INR</div>
            </div>
          </div>
        </div>
        <div>
          <div className="conut-box">100</div>
        </div>
        <div className="betsup-INR">
          <div className="WINNING-font">POTENTIAL WINNING</div>
          <div className="inr-font">{Number(cost) * 2} INR</div>
        </div>
        <div>
          <div className="signup-btn login-btn">
            {loading ? (
              <Loading />
            ) : (
              <Button
                style={{
                  height: "50px",
                  borderRadius: "10px",
                }}
                type="primary"
                onClick={handleClick}
                disabled={!cost}
              >
                Place a Bet
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetBet;
