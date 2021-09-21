import React, { useEffect, useState } from "react";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import "./Dashboard.css";
import axios from "axios";
import { BASE_URL } from "../../utils/env";
import moment from "moment";
import Loading from "../Loading/Loading";

const MyBets = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/users/mybets`, { withCredentials: true })
      .then((res) => {
        setLoading(false);
        setError("");
        console.log("res", res.data);
        setData([...res.data.bets]);
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", JSON.stringify(err.response?.data));
        setError(err.response?.data?.errMsg);
      });
  }, []);

  console.log(data);

  return (
    <div className="Dashboard">
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="form-alert">{error}</div>
      ) : (
        <>
          {data &&
            data.map((ele) => (
              <>
                {/* <div className="day">Today</div> */}
                <div className="betcard">
                  <div className="bet-card-flex">
                    <div className="bet-flex">
                      <div className="tearm-icon">
                        <img src={Ellipse1} />
                      </div>
                      <div>
                        <div className="event-label">{ele.bet.label}</div>
                      </div>
                    </div>
                    <div className="bet-rate">
                      <div className="rate-font">2 X</div>
                    </div>
                  </div>
                  <div className="stakemain">
                    <div className="stake">
                      <div>
                        <div className="staketext">STAKE</div>
                        <div className="stakeINR">{ele.bet.value} INR</div>
                      </div>
                      <div>
                        <div className="staketext">STATUS</div>
                        <div className="stakeINR">In Progress</div>
                      </div>
                    </div>
                    <div className="bet-stake-INR">
                      +{Number(ele.bet.value) * 2} INR
                    </div>
                  </div>
                  <div className="time-cont">
                    <div>Updated {moment(ele.updatedAt).fromNow()}</div>
                  </div>
                </div>
              </>
            ))}
        </>
      )}
    </div>
  );
};

export default MyBets;
