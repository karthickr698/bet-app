import React, { useState, useEffect } from "react";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import rectangle from "../../assets/images/Rectangle306.png";
import logo from "../../assets/images/Image7.png";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/env";
import moment from "moment";
import Loading from "../Loading/Loading";

const Upcoming = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState([]);

  const [dataLength, setDataLength] = useState(0);

  const [is, setid] = useState("");

  useEffect(() => {
    console.log(moment(new Date()).format("YYYY-MM-DD"));
    const date = moment(new Date()).format("YYYY-MM-DD");
    setLoading(true);
    axios
      .get(`${BASE_URL}/schedule?day=${date}`, { withCredentials: true })
      .then((res) => {
        setLoading(false);
        setError("");
        console.log("res", res.data.data);
        const filterData = Object.keys(res.data.data.matches).filter(
          (ele) => res.data.data.matches[ele].status === "notstarted"
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
                {data[ele].status === "notstarted" ? (
                  <Link to={`/bets/${data[ele].key}`}>
                    <div className="card">
                      <img src={rectangle} />
                      <div className="match-detials">
                        <div className="match-flex">
                          <div>
                            <div className="match-name">
                              {data[ele].name}
                              {/* Australia <span>Vs</span> India */}
                            </div>
                          </div>
                        </div>
                        <div className="logo-ponit">
                          <div className="logo">
                            <img src={logo} />
                          </div>
                          <div className="px">2 X</div>
                        </div>
                        <div className="time-flex">
                          <div className="time">
                            Starts At{" "}
                            {moment(data[ele].start_date.iso).format(
                              "DD-MM-YYYY HH:mm"
                            )}
                          </div>
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

export default Upcoming;
