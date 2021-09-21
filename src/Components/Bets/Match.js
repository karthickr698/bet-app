import React, { useState, useEffect } from "react";
import "./Betsup.css";
import { Link } from "react-router-dom";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import { Tabs } from "antd";
import Bets from "./Bets";
import up from "../../assets/images/Vector.png";
import down from "../../assets/images/Vector2.png";
import { RightCircleOutlined, FireFilled } from "@ant-design/icons";
import Overs from "./Overs";
import Players from "./Players";

const { TabPane } = Tabs;

const Match = (props) => {
  console.log("match props", props);

  return (
    <div className="Dashboard match">
      <div className="match-flex bet-mac-flex  padding-all">
        <div className="bet-match-flex">
          <div>
            <div className="bet-match-name">
              Australia <span>VS</span> India
            </div>
            <div className="over-run over-run-color">
              AUS: 123/0 in 18.5 Overs
            </div>
          </div>
        </div>
        <div className="live match-live">Live</div>
      </div>
      <div>
        <div className="tabs9">
          <Tabs>
            <TabPane
              tab={
                <span>
                  <FireFilled style={{ color: "#DCEE00" }} />
                  Hot
                </span>
              }
              key="1"
            >
              <Bets props={props} />
            </TabPane>
            <TabPane tab="Overs" key="2">
              <Overs />
            </TabPane>
            <TabPane tab="Player" key="3">
              <Players />
            </TabPane>
            <TabPane tab="Boundry" key="4"></TabPane>
            <TabPane tab="Safe Bets" key="5">
              <Bets props={props} />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Match;
