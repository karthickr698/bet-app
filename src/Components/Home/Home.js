import React from "react";
import Menus from "./Menus";
import { Row, Col, Button, Tabs } from "antd";
import "./Home";
import Wallet from "../Wallet/Wallet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Row className="col">
        <Col xs={1} sm={16} md={1} lg={5} xl={4}>
          <div className="sider-main">
            <Menus />
          </div>
        </Col>
        <Col className="BETHome" xs={23} sm={24} md={23} lg={19} xl={20}>
          <div>
            <div className="menu-main">
              <Link to="/">
                <div className="BETIT">BET.IT</div>
              </Link>
              <div>
                <Wallet />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      {/* <div>
        <Switch>
          <Route exact path="/" component={Dashboardmain} />
          <Route exact path="/home/Profile" component={Profile} />
          <Route exact path="/MyBets" component={MyBets} />
          <Route exact path="/MyWallet" component={MyWallet} />
          <Route exact path="/Betsup" component={Betsup} />
          <Route exact path="/bets" component={Betset} />
        </Switch>
      </div> */}
    </div>
  );
};

export default Home;
