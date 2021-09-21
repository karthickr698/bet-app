import React, { useState, useEffect } from "react";
import "./Betsup.css";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import { RightCircleOutlined, FireFilled } from "@ant-design/icons";

const Overs = (props) => {
  return (
    <div className="Dashboard Overs">
      <div>
        <div className="padding-all">
          <div className="match-flex bet-mac-flex">
            <div className="bet-match-flex">
              <div className="brt-logo">
                <img src={Ellipse1} />
              </div>
              <div className="over-run over-run-color1">AUS</div>
            </div>
            <div className="over-run over-run-color1">356/5</div>
          </div>
          <div className="match-flex padding bet-mac-flex">
            <div className="bet-match-flex">
              <div className="brt-logo">
                <img src={Ellipse1} />
              </div>
              <div className="over-run over-run-color1">AUS</div>
            </div>
            <div className="bet-match-flex">
              <div className="over-run-color1">(20/50 ov, target 357)</div>
              <div className="over-run over-run-color1">356/5</div>
            </div>
          </div>
          <div>
            <div className="red-color padding">
              India need 257 runs in 30 Overs
            </div>
            <div className="table padding">
              <table>
                <tr>
                  <th>BATSMAN</th>
                  <th className="tr">R</th>
                  <th className="tr">S</th>
                  <th className="tr">4s</th>
                  <th className="tr">6s</th>
                  <th className="tr">SR</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td className="tr">35</td>
                  <td className="tr">35</td>
                  <td className="tr">2s</td>
                  <td className="tr">1s</td>
                  <td className="tr">100.00</td>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td className="tr">35</td>
                  <td className="tr">35</td>
                  <td className="tr">2s</td>
                  <td className="tr">1s</td>
                  <td className="tr">100.00</td>
                </tr>
              </table>
              <table>
                <tr>
                  <th>BATSMAN</th>
                  <th className="tr">R</th>
                  <th className="tr">S</th>
                  <th className="tr">4s</th>
                  <th className="tr">6s</th>
                  <th className="tr">SR</th>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td className="tr">35</td>
                  <td className="tr">35</td>
                  <td className="tr">2s</td>
                  <td className="tr">1s</td>
                  <td className="tr">100.00</td>
                </tr>
                <tr>
                  <td>Alfreds Futterkiste</td>
                  <td className="tr">35</td>
                  <td className="tr">35</td>
                  <td className="tr">2s</td>
                  <td className="tr">1s</td>
                  <td className="tr">100.00</td>
                </tr>
              </table>
            </div>
            <div className="padding over-run-color1">Toss: India (Bowling)</div>
          </div>
          <div className="padding">
            <div className="bet-match-flex">
              <div className="bet-over-run over-run-color1">112</div>
              <div className=" over-run-color1">
                but we cannot warrant full correctness of all content.
              </div>
            </div>
          </div>
        </div>
        <div className="padding">
          <div className="your-bet match-flex">
            <div
              style={{
                fontSize: "16px",
                fontWeight: "700",
                fontStyle: "italic",
              }}
            >
              Place your bets Now...
            </div>
            <div>
              <RightCircleOutlined style={{ fontSize: "23px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overs;
