import React from 'react'
import { Input, Button, Avatar, Flex } from "antd";
import { SearchOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";


const SearchBar = () => {
    const screens = useBreakpoint();
    return (
      <Flex align='center' gap='small' justify='center'
        style={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: !screens.md ? "space-between" : "space-around",
          zIndex: 100,
          marginTop: !screens.md && "4rem",
        //   marginBottom: "1rem",
        //   padding: !screens.md ? "0.5rem" : "1rem",
          backgroundColor: "transparent", // Mobile header styling
        }}
      >
        <Input
          placeholder="Search for a..."
          prefix={<SearchOutlined />}
          style={{
            borderRadius: "1.5rem",
            width: !screens.md ? `calc(100vw - 25vw)` : `calc(100vw - 50vw)`,
            // marginRight: !screens.md ? "0.5rem" : "1rem",
            height: "1.rem"
          }}
        />
        <Button
         
          type="default"
          icon={
            // !screens.md ? 
            <PlusOutlined /> 
            // : null
            }
          iconPosition='start'
          style={{
            backgroundColor:  "#1D3BAF",
            color: "white",
            borderRadius: "1.5rem",
            //padding: !screens.md ? "0.5rem" : "1rem",
            fontWeight: "600"
          }}
        >
          {!screens.md ? "" : "Add Item"}
        </Button>
        {/* {screens.md && (
          <Avatar
            size={40}
            icon={<UserOutlined />}
            style={{ backgroundColor: "gray", cursor: "pointer" }}
          />
        )} */}
      </Flex>
    );
}

export default SearchBar
