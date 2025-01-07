//AIInsightCard.jsx
// import React from "react";
// import { Card, Avatar, Button, Flex, Row, Col } from "antd";
// import { UserOutlined } from "@ant-design/icons";
// import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

// const AIInsightCard = () => {
//   const screens = useBreakpoint();
//   console.log(screens);
//   return (
//       <Card
//       style={{
//         backgroundColor: "#3100A6",
//         color: "white",

//         // maxWidth: screens.md ? "18rem":"" ,
//         aspectRatio:"1/1",
//       }}
//       //className="myday-card"
//     >

//         <Flex align="center">
//           <Avatar size={64} icon={<UserOutlined />} />
//           <Flex vertical justify="center">
//             <p>AI Coach</p>
//             <p style={{ fontSize: "0.75rem", fontWeight: "lighter" }}>
//               Insight for today
//             </p>
//           </Flex>
//         </Flex>
//         <p style={{ fontSize: `1.25rem`, fontWeight: "bold" }}>
//           Your <span style={{ color: "yellow" }}>time management</span> improved
//           last week!
//         </p>
//         <Button
//           style={{
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: "1.5rem",
//             fontWeight: "bold",
//             padding: "1.5rem",
//           }}
//         >
//           Explore my stats
//         </Button>
//     </Card> 
    
//   );
// };

// export default AIInsightCard;


// import React from "react";
// import { Card, Avatar, Button,Fle } from "antd";
// import { UserOutlined } from "@ant-design/icons";

// const AIInsightCard = () => {
//   return (
//     <div
//       style={{
//         width: "100%", // Full width of parent
//        // Optional: Limit max width for responsiveness
//         aspectRatio: "1 / 1", // Maintain 1:1 aspect ratio
//         backgroundColor: "#3100A6", // Match card color with container
//         borderRadius: "1rem", // Optional: Rounded corners
//         overflow: "hidden", // Ensure content stays inside
//         display: "flex", // Ensure children are contained
//       }}
//     >
//       <Card
//         style={{
//           backgroundColor: "#3100A6",
//           color: "white",
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           flexDirection: "column", // Arrange children vertically
//           justifyContent: "space-around", // Evenly space out sections
//           alignItems: "center", // Center horizontally
//         }}
//         bodyStyle={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-around",
//           alignItems: "center",
//           height: "100%",
//           padding: "1rem",
//         }}
//       >
//         {/* Header Section */}
//         {/* <div style={{ textAlign: "center" }}>
//           <Avatar size={64} icon={<UserOutlined />} />
//           <p style={{ margin: "0.5rem 0 0", fontWeight: "bold" }}>AI Coach</p>
//           <p style={{ fontSize: "0.85rem", fontWeight: "lighter" }}>
//             Insight for today
//           </p>
//         </div> */}
//         <Flex align="center">
//           <Avatar size={64} icon={<UserOutlined />} />
//           <Flex vertical justify="center">
//              <p>AI Coach</p>
//             <p style={{ fontSize: "0.75rem", fontWeight: "lighter" }}>
//                Insight for today
//              </p>
//            </Flex>
//          </Flex>

//         {/* Content Section */}
//         <p
//           style={{
//             fontSize: "1.5rem",
//             fontWeight: "bold",
//             textAlign: "center",
//           }}
//         >
//           Your{" "}
//           <span style={{ color: "yellow" }}>time management</span> improved last
//           week!
//         </p>

//         {/* Button Section */}
//         <Button
//           style={{
//             backgroundColor: "white",
//             color: "black",
//             borderRadius: "1.5rem",
//             fontWeight: "bold",
//             padding: "0.75rem 1.5rem",
//           }}
//         >
//           Explore my stats
//         </Button>
//       </Card>
//     </div>
//   );
// };

// export default AIInsightCard;


import React from "react";
import { Card, Avatar, Button, Row, Col, Flex } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined, LeftOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import stars from '../../../assests/images/stars.svg'

const AIInsightCard = () => {
  const screens = useBreakpoint();

  return (
    <Card
      style={{
        backgroundColor: "#3100A6",
        color: "white", // Maintain equal aspect ratio
        display: "flex",
        flexDirection: "column", // Arrange content vertically
        justifyContent: "flex-start", // Align content to the top
       // Prevent gaps inside card
      }}
      className="myday-card"
    >
      {/* Left-aligned Row for Avatar and Text */}
      <Row align="top" gutter={[8, 8]} style={{ flexGrow: 1 }}>
        <Col>
          <Avatar size={44} icon={<UserOutlined />} />
        </Col>
        <Col>
          <p className="f-sfpro" style={{ marginBottom: 0,fontSize:"1.5rem",fontWeight:"600" }}>AI Coach</p>
          <p className="f-sfpro" style={{ fontSize: "1.375", fontWeight: "lighter", marginBottom: 0 }}>
            Insight for today
          </p>
        </Col>
      </Row>

      {/* Left-aligned Bold Text */}
      <p className="f-bricolage" style={{ fontSize: "1.75rem", fontWeight: "600", margin: "1rem 0 1.5rem 0" }}>
        Your <span style={{ color: "yellow" }}>time management</span> improved
        last week!
      </p>

      {/* Button at the bottom with no additional margin */}
      <Button
        style={{
          backgroundColor: "white",
          color: "black",
          borderRadius: "1.5rem",
          fontWeight: "bold",
          padding: "1.5rem",
          alignSelf: "flex-start", // Align button to the left
        }}
      >
        <img src={stars} alt=""/>Explore my stats
      </Button>

      <Flex style={{paddingTop: "1.5rem"}}>
      <Button icon={<LeftOutlined />} type="text" iconPosition="start" style={{color:"white"}}></Button>
      <Button icon={<RightOutlined />} type="text" iconPosition="start"style={{color:"white"}} ></Button>
      </Flex>
    </Card>
  );
};

export default AIInsightCard;
