import React from "react";
import { Row, Col, Button, Tabs } from "antd";
import "../Home/Home";
import Live from "./Live";
import MyBets from "./MyBets";
import Upcoming from "./Upcoming";

const { TabPane } = Tabs;

const Dashboardmain = () => {
  return (
    <div className="home">
      <div className="Dashboardmain-tabs">
        <Tabs>
          <TabPane tab="Live" key="1">
            <Live />
          </TabPane>
          <TabPane tab="Upcoming" key="2">
            <Upcoming />
          </TabPane>
          <TabPane className="mybet" tab="My Bets" key="3">
            <MyBets />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboardmain;
