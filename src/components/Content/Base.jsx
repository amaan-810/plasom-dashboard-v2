import React, { useState } from "react";
import { Row, Col, Layout } from "antd";
import Sidebar from "./Sidebar/Sidebar";
import Sider from "antd/es/layout/Sider";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const Base = () => {
    const screens = useBreakpoint();
    const [sidebarVisible, setSidebarVisible]=useState(false);
    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
    const closeSidebar = () => setSidebarVisible(false);

  return (
    <Row style={
        {
            height: "100vh" 
            }
        }>
    <Layout style={{
        //  minHeight: "100vh" 
        }}>
      
        <Col
          xs={0} // 100% for mobile
          sm={0} // 6/24 columns for tablet (25% width)
          md={8}
          lg={5}
          xl={4}
          className="sider"
        >
          <Sider  trigger={null} theme="light" width={!screens.md ? "100%" : "auto"} style={
            {
            height:"100vh",
    

            }}>
            <Sidebar  toggleSidebar={toggleSidebar} closeSidebar={closeSidebar}/>
          </Sider>
        </Col>
        <Col xs={24} sm={24} md={16} lg={21} xl={20} className="content">
          Content
        </Col>
      
    </Layout>
    </Row>
  );
};

export default Base;
