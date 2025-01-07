import React from "react";
import { Row, Col, Layout, Flex } from "antd";
import LpBackground from "../Background/LpBackground";
import SearchBar from "./Search/SearchBar";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import MyDayAvatar from "./Search/MyDayAvatar";
import MyDayCards from "./MyDayCards";

const MyDayContent = () => {
  const screens = useBreakpoint();
  const { Content } = Layout;
  return (
    <Content>
      <LpBackground>
        <Row justify={screens.md ? "space-between": "center"}  style={{ padding: "1rem" }}>
          <Col lg={18} md={22}sm={24}>
            <SearchBar />
          </Col>
          {screens.md && (
            <Col lg={6} md={2}>
              <MyDayAvatar />
            </Col>
          )}
        </Row>
        <Row style={{ padding: "1rem" }}>
          <Col>
            <Flex>
              <h2 className="text-heading">My Day</h2>
            </Flex>
          </Col>
        </Row>
        <MyDayCards/>
      </LpBackground>
    </Content>
  );
};

export default MyDayContent;
