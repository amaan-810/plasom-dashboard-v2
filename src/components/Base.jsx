import React, { useState } from "react";
import { Row, Col, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

import Sidebar from "./Sidebar/Sidebar";
import MobileHeader from "./Sidebar/MobileHeader";
import MyDayContent from "./Content/MyDayContent";

const Base = () => {
  const screens = useBreakpoint();
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
  const closeSidebar = () => setSidebarVisible(false);

  return (
    <Row
      style={{
        //height: "100vh",
      }}
    >
      <Layout
        style={
          {
             //minHeight: "100vh"
          }
        }
      >
        <Col
          xs={sidebarVisible? 24: 0} // 100% for mobile
          sm={8} // 6/24 columns for tablet (25% width)
          md={8}
          lg={5}
          xl={4}
        >
          <Sider
            // trigger={null}
            theme="light"
            width={!screens.md ? "100%" : "auto"}
            //width={"100%"}
            style={{
              height: "100vh",
              // display: !screens.md && !sidebarVisible ? "none" : "block",
              // overflow: 'inherit',
              // position: 'fixed',
            }}
          >
            <Sidebar
              toggleSidebar={toggleSidebar}
              sidebarVisible={sidebarVisible}
              closeSidebar={closeSidebar}
            />
          </Sider>
        </Col>
        <Col xs={sidebarVisible? 0 : 24 } 
        sm={sidebarVisible? 0 : 24 } 
        md={16} 
        lg={19} 
        xl={20} 
        >
          <Layout
            style={{
              // paddingLeft: !screens.md ? 0 : "1rem",
              // paddingTop: isMobile ? "0" : "0"
            }}
          >
            {(!screens.md  && !sidebarVisible) && <MobileHeader toggleSidebar={toggleSidebar}/> }
            <MyDayContent  /> 
          </Layout>
        </Col>
      </Layout>
    </Row>
  );
};

export default Base;
