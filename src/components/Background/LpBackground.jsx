import React from 'react'
import { Row, Col } from "antd";
import "../../assests/styles/background.css";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import PropTypes from 'prop-types';



const LpBackground = ({children}) => {
    const screens = useBreakpoint();
    return (
        <Row className="background-wrapper" gutter={0}>
          {/* Gradient Section */}
          <Col span={24} className="gradient-section" style={{height : screens.lg ? "40vh" : "100%"}}>
            {children}
          </Col>
        </Row>
      );
}

LpBackground.propTypes = {
  children: PropTypes.node
}

export default LpBackground
