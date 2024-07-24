import Layout, { Content } from "antd/es/layout/layout";
import React, { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const BaseComponents = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <Layout>
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
      <Layout className="bg-white">
        <Header isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        <Content
          className="dmt-mainWrp"
          style={{ marginLeft: isCollapse ? "" : "86px" }}
        >
          <Outlet />
        </Content>

        {/* <Footer isCollapse={isCollapse}/> */}
      </Layout>
    </Layout>
  );
};

export default BaseComponents;
