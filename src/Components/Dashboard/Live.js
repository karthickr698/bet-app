import React, { useState, useEffect } from "react";
import rectangle from "../../assets/images/Rectangle306.png";
import logo from "../../assets/images/Image7.png";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/env";
import moment from "moment";
import Loading from "../Loading/Loading";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState([]);

  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    setLoading(true);
    console.log(moment(new Date()).format("YYYY-MM-DD"));
    const date = moment(new Date()).format("YYYY-MM-DD");
    axios
      .get(`${BASE_URL}/schedule?day=${date}`, { withCredentials: true })
      .then((res) => {
        setLoading(false);
        setError("");
        console.log("res", res.data.data);
        const filterData = Object.keys(res.data.data.matches).filter(
          (ele) => res.data.data.matches[ele].status === "started"
        );
        console.log(filterData);
        setDataLength(filterData.length);
        setData({ ...res.data.data.matches });
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", JSON.stringify(err.response?.data));
        setError(err.response?.data?.errMsg);
      });
  }, []);

  console.log(data, dataLength);

  return (
    <div className="Dashboard">
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="form-alert">{error}</div>
      ) : dataLength === 0 ? (
        <div className="empty-data">No Live Data Available</div>
      ) : (
        <>
          {data &&
            Object.keys(data).map((ele) => (
              <>
                {data[ele].status === "started" ? (
                  <Link to="/bets">
                    <div className="card">
                      <img src={rectangle} />
                      <div className="match-detials">
                        <div className="match-flex">
                          <div>
                            <div className="match-name">
                              KKR <span>Vs</span> MI
                            </div>
                            {/* <div className="over-run">
                              AUS: 123/0 in 18.5 Overs
                            </div> */}
                          </div>
                          <div className="live">LIVE</div>
                        </div>
                        <div className="logo-ponit">
                          <div className="logo">
                            <img src={logo} />
                          </div>
                          <div className="px">0.1 X</div>
                        </div>
                        <div className="time-flex">
                          <div className="time">Ends by 04:00 PM</div>
                          <div className="start">Start Playing</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : null}
              </>
            ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
