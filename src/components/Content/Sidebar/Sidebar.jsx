import React from "react";
import { Row, Col, Flex, Button, Menu } from "antd";
import {
  UnorderedListOutlined,
  AimOutlined,
  MessageOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import logo from "../../../assests/images/logo.svg";
import '../../../assests/styles/antdOveride.css'

const Sidebar = () => {
  const screens = useBreakpoint();
  return (
    <Flex vertical>
      <div >
        {/* <Col span={24} style={{}}> */}
          <img
            style={{ height: "65%", width: "65%", padding: "0",margin: "1.5rem 1rem 0.5rem 1rem" }}
            src={logo}
            alt="logo"
          />
        {/* </Col> */}
        {/* {!screens.md && (
          <Col span={8} style={{ textAlign: "right" }}>
            <Button
              icon={<CloseOutlined />}
              type="text"
              onClick={closeSidebar}
              style={{ fontSize: "1.25rem" }}
            />
          </Col>
        )} */}
        
      </div>

      {/* Menu Row */}
      <div style={{ margin: "1rem 1rem 0 1rem" }}>
        {/* <Col span={24} style={{}}> */}
          <Menu
            mode="inline"
            style={{
              fontSize: `1rem`,
              //   width: "12.5rem",
              border: "none",
            }}
          >
            <Menu.Item key="1" icon={<UnorderedListOutlined />} className="sidebar-menu-item">
              My Day
            </Menu.Item>
            <Menu.Item key="2" icon={<AimOutlined />} className="sidebar-menu-item">
              Goals
            </Menu.Item>
            <Menu.Item key="3" icon={<MessageOutlined />} className="sidebar-menu-item">
              Messages
            </Menu.Item>
            <Menu.Item key="4" icon={<CalendarOutlined />} className="sidebar-menu-item">
              Calendar
            </Menu.Item>
            <Menu.Item key="5" icon={<ClockCircleOutlined />} className="sidebar-menu-item">
              Track
            </Menu.Item>
          </Menu>
        {/* </Col> */}
      </div>
    </Flex>
  );
};

export default Sidebar;


{/* <Row>
<Col span={24} style={{}}>
  <img
    style={{ height: "65%", width: "65%", padding: "0",margin: "1.5rem 1rem 1rem 1rem" }}
    src={logo}
    alt="logo"
  />
</Col>
{!screens.md && (
  <Col span={8} style={{ textAlign: "right" }}>
    <Button
      icon={<CloseOutlined />}
      type="text"
      onClick={closeSidebar}
      style={{ fontSize: "1.25rem" }}
    />
  </Col>
)}

</Row>


<Row style={{ margin: "1rem 1rem 0 1rem" }}>
<Col span={24} style={{}}>
  <Menu
    mode="inline"
    style={{
      fontSize: `1rem`,
      //   width: "12.5rem",
      border: "none",
    }}
    className="menu-item"
  >
    <Menu.Item key="1" icon={<UnorderedListOutlined />} className="sidebar-menu-item">
      My Day
    </Menu.Item>
    <Menu.Item key="2" icon={<AimOutlined />} className="sidebar-menu-item">
      Goals
    </Menu.Item>
    <Menu.Item key="3" icon={<MessageOutlined />} className="sidebar-menu-item">
      Messages
    </Menu.Item>
    <Menu.Item key="4" icon={<CalendarOutlined />} className="sidebar-menu-item">
      Calendar
    </Menu.Item>
    <Menu.Item key="5" icon={<ClockCircleOutlined />} className="sidebar-menu-item">
      Track
    </Menu.Item>
  </Menu>
</Col>
</Row> */}