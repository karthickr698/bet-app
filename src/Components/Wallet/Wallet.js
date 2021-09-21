import React from "react";
import "../Home/Home.css";
import { Link } from "react-router-dom";
import walletimg from "../../assets/images/wallet.png";

const wallet = () => {
  return (
    <div>
      <Link to="/my-wallet">
        <div className="wallet">
          <div>
            <div className="wallettext">Wallet</div>
          </div>
          <div className="wallet-icon">
            <img src={walletimg} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default wallet;
