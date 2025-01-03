// MobileHeader.jsx
import React from "react";
import { Button, Flex, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../../assests/images/logo.svg";

const MobileHeader = ({ toggleSidebar }) => (
  <Flex
    justify="space-between"
    align="center"
    style={{
      background: "#F2F2F2",
      padding: "0.5rem 1rem",
      position: "fixed",
      width: "100%",
      zIndex: 500,
      height: "4rem",
      borderBottom: "1px solid #ddd",
    }}
  >
    <Button icon={<MenuOutlined />} type="text" onClick={toggleSidebar} />

    <div
      style={{
        backgroundImage: `url(${logo})`,
        display: "inline-block",
        height: "2rem",
        width: "8rem",
        backgroundRepeat: "no-repeat",
      }}
    ></div>

    <Avatar
      size={35}
      icon={<UserOutlined />}
      style={{ backgroundColor: "gray", cursor: "pointer" }}
    />
  </Flex>
);

export default MobileHeader;
