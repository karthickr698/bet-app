import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import "./Home.css";
import {
  DribbbleOutlined,
  SettingOutlined,
  MailOutlined,
  UserOutlined,
  LineChartOutlined,
  WalletOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import pro from "../../assets/images/profile.png";
import { AuthContext } from "../../routes/Auth";

const Menus = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className="menu-main">
      <Sider
        width={250}
        className="sider"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          className="menu"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["0"]}
        >
          <Link to="/profile">
            <div className="profile">
              <div className="pro-img">
                <img src={pro} />
              </div>
              <div className="flex">
                <div>
                  <div className="UserName">{user.name}</div>
                  <div className="UserID">{user.email}</div>
                </div>
                <div className="setting-icon">
                  <SettingOutlined />
                </div>
              </div>
            </div>
          </Link>
          <Menu.Item key="1" icon={<DribbbleOutlined />}>
            <Link to="/">Cricket</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DribbbleOutlined />}>
            <Link to="/">FootBall</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<DribbbleOutlined />}>
            <Link to="/">Basket ball</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<DribbbleOutlined />}>
            <Link to="/">Tennis</Link>
          </Menu.Item>
          <div className="border"></div>
          <Menu.Item key="9" icon={<UserOutlined />}>
            <Link to="/profile">My Profile</Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<LineChartOutlined />}>
            <Link to="/my-bets">My Bets</Link>
          </Menu.Item>
          <Menu.Item key="11" icon={<WalletOutlined />}>
            <Link to="/my-wallet">My Wallet</Link>
          </Menu.Item>
          <Menu.Item key="12" icon={<CommentOutlined />}>
            FAQ's
          </Menu.Item>
          <Menu.Item key="13" icon={<MailOutlined />}>
            Write to Us
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
  );
};

export default Menus;
