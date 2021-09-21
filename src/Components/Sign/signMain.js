import React, { useContext } from "react";
import { Row, Col, Button, Tabs } from "antd";
import "../Home/Home";
import Login from "./Login";
import { Redirect } from "react-router-dom";
import Signup from "./Signup";
import { AuthContext } from "../../routes/Auth";

const { TabPane } = Tabs;

const SgnMain = () => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="home2">
      <div className="tabs2">
        <Tabs>
          <TabPane tab="Login" key="1">
            <Login />
          </TabPane>
          <TabPane tab="Sign Up" key="2">
            <Signup />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default SgnMain;
