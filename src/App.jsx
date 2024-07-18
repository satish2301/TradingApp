import React, { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import WebRoutes from "./routes";
import { Button, Layout, Menu, message, theme } from 'antd';
import "./App.css"
import Sidebar from './Components/Common/Sidebar';

import Footer from './Components/Common/Footer';
import BaseComponents from './Components/Common/BaseComponents';
import Work from './Components/Services/Work';
import Dashboard from './Components/Common/Dashboard';
const { Content } = Layout;
const App = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [isCollapse, setIsCollapse] = useState(false);
  const success = (mes, dur) => {
    messageApi.open({
      type: "success",
      duration: dur,
      content: mes,
    });
  };

  const error = (mes, dur) => {
    messageApi.open({
      duration: dur,
      type: "error",
      content: mes,
    });
  };

  const warning = (mes, dur) => {
    messageApi.open({
      duration: dur,
      type: "warning",
      content: mes,
    });
  };
  return (
    <>
       {contextHolder}
      {/* <ScrollToTop>
        <Suspense fallback={<Loading />}> */}
          <Routes>
            {/* <Route path={WebRoutes.LOGIN} element={<Login />} /> */}
            
            <Route
              path={WebRoutes.DASHBOARD}
              element={<BaseComponents/>}
            >
            <Route path={WebRoutes.DASHBOARD} element={<Dashboard />} />
              <Route path={WebRoutes.WORK} element={<Work />} />
            </Route>
          </Routes>
        {/* </Suspense>
      </ScrollToTop> */}
    </>
  );
};
export default App;