import React, { useState, useEffect } from "react";
import "./Betsup.css";
import profile from "../../assets/images/profile.png";
import { RightCircleOutlined, FireFilled } from "@ant-design/icons";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Overs = (props) => {
  const data = [
    {
      playerName: "player1",
      playerType: "Batsman",
    },
    {
      playerName: "player2",
      playerType: "Bowler",
    },
    {
      playerName: "player3",
      playerType: "Bowler",
    },
    {
      playerName: "player4",
      playerType: "Batsman",
    },
    {
      playerName: "player5",
      playerType: "Batsman",
    },
    {
      playerName: "player6",
      playerType: "Batsman",
    },
    {
      playerName: "player7",
      playerType: "Batsman",
    },
    {
      playerName: "player8",
      playerType: "Batsman",
    },
    {
      playerName: "player9",
      playerType: "Batsman",
    },
    {
      playerName: "player10",
      playerType: "Bowler",
    },
    {
      playerName: "player11",
      playerType: "Bowler",
    },
  ];

  return (
    <div className="Dashboard Overs">
      <div className="tabs8">
        <Tabs>
          <TabPane tab="Tearm (A)" key="2">
            <div className="players">Tearm (A) Players</div>
            {data &&
              data.map((item) => (
                <div className="profilepage profilepage-border">
                  <div className="pro-img">
                    <img src={profile} />
                  </div>
                  <div>
                    <div className="propage-UserName  over-run-color1">
                      {item.playerName}
                    </div>
                    <div className="propage-UserID  over-run-color1">
                      {item.playerType}
                    </div>
                  </div>
                </div>
              ))}
          </TabPane>
          <TabPane tab="Tearm (B)" key="3">
            <div className="players">Tearm (B) Players</div>
            {data &&
              data.map((item) => (
                <div className="profilepage profilepage-border">
                  <div className="pro-img">
                    <img src={profile} />
                  </div>
                  <div>
                    <div className="propage-UserName  over-run-color1">
                      {item.playerName}
                    </div>
                    <div className="propage-UserID  over-run-color1">
                      {item.playerType}
                    </div>
                  </div>
                </div>
              ))}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Overs;
