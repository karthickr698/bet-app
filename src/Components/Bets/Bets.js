import React, { useState, useEffect } from "react";
import "./Betsup.css";
import { Link } from "react-router-dom";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import axios from "axios";
import { BASE_URL } from "../../utils/env";
import moment from "moment";
import Loading from "../Loading/Loading";

const Bets = ({ props }) => {
  console.log("bets", props);
  const id = props.match.params.id;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState([]);

  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/cricket/bets/${id}`, { withCredentials: true })
      .then((res) => {
        setLoading(false);
        setError("");
        console.log("res", res.data);
        setData({ ...res.data.bets });
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", JSON.stringify(err.response?.data));
        setError(err.response?.data?.errMsg);
      });
  }, []);
  return (
    <div className="Dashboard bets">
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="form-alert">{error}</div>
      ) : (
        <>
          {data &&
            Object.keys(data).map((ele) => (
              <Link
                to={{
                  pathname: `/bets/${id}/enum`,
                  query: {
                    title: ele,
                    data: data[ele],
                    label: data[ele].label,
                  },
                }}
              >
                <div className="betsup-flex">
                  <div className="betset-card-flex">
                    <div className="bet-flex">
                      <div className="tearm-icon">
                        <img src={Ellipse1} />
                      </div>
                      <div>
                        <div>{data[ele].label}</div>
                      </div>
                    </div>
                    <div className="rating">
                      <div className="bet-rate">
                        <div className="rate-font">2 X</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </>
      )}
    </div>
  );
};

export default Bets;
