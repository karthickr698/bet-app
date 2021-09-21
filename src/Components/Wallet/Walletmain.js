import React, { useState, useEffect } from "react";
import "./Wallet.css";
import { Input, DatePicker, AutoComplete, Button } from "antd";
import { WalletOutlined, RightOutlined } from "@ant-design/icons";
import pro from "../../assets/images/profile.png";
import axios from "axios";
import { BASE_URL } from "../../utils/env";
import moment from "moment";
import Loading from "../Loading/Loading";

const Walletmain = () => {
  const list = [
    {
      cost: "500",
    },
    {
      cost: "500",
    },
    {
      cost: "500",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/users/mywallet`, { withCredentials: true })
      .then((res) => {
        setLoading(false);
        setError("");
        console.log("res", res.data);
        setData({ ...res.data.wallet });
      })
      .catch((err) => {
        setLoading(false);
        console.log("err", JSON.stringify(err.response?.data));
        setError(err.response?.data?.errMsg);
      });
  }, []);

  return (
    <div className="walletmain">
      {error ? (
        <div className="form-alert">{error}</div>
      ) : (
        <>
          <div className="walletpad">
            <div className="walletcard">
              <div className="walletcardtop">
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    <div>
                      <div className="waltamt">₹ {data.coins}</div>
                    </div>
                    <div>
                      BET.IT Wallet <WalletOutlined />
                    </div>
                    <div className="walt-flex">
                      <div className="waltpage">
                        <div className="walt-img">
                          <img src={pro} />
                        </div>
                        <div>
                          <div className="walt-UserName">UserName</div>
                          <div className="walt-UserID">{data.email}</div>
                        </div>
                      </div>
                      <div className="walt-card-tag">BET.IT</div>
                    </div>
                  </>
                )}
              </div>
              <div className="walt-tran-main">
                <div className="walt-tran-flex">
                  <div className="walt-tran">
                    <div className="tran">My Transaction</div>
                    <div className="tran-sub">Lists of transactions</div>
                  </div>
                  <div>
                    <RightOutlined />
                  </div>
                </div>
              </div>
              <div className="walt-tran-main">
                <div className="walt-tran-flex">
                  <div className="walt-tran">
                    <div className="tran">My Transaction</div>
                    <div className="tran-sub">Lists of transactions</div>
                  </div>
                  <div>
                    <RightOutlined />
                  </div>
                </div>
                <div className="walt-cost-main">
                  {list.map((list) => (
                    <div className="walt-cost">{list.cost} ₹</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Walletmain;
