import { Avatar, Badge, Button, Dropdown } from "antd";
import React, { useEffect, useState } from "react";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { BiBell, BiSearch } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import Male from "../../../Static/Img/user-M.svg";
const Header = ({ isCollapse, setIsCollapse }) => {
  const items = [
    {
      key: "Profile",
      icon: <MenuFoldOutlined />,
      label: "View Profile",
    },
    {
      type: "divider",
    },
    {
      key: "search",
      icon: <BiSearch />,
      label: "Search",
    },
    {
      type: "divider",
    },
    {
      key: "Notification",
      icon: <BiBell />,
      label: (
        <Badge count={5} offset={[10, 0]}>
          Notification
        </Badge>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "Logout",
      icon: <MdLogout />,
      label: "Logout",
      danger: true,
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setIsCollapse(false);
      } else {
        setIsCollapse(true);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <header
      className="dmt-header"
      style={{ marginLeft: !isCollapse ? "86px" : "" }}
    >
      {/* <Button
        type="text"
        icon={isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setIsCollapse(!isCollapse)}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      /> */}

      <div className="header-bottom w-full flex md:justify-between justify-between ">
        <div className="md:block hidden ml-5">
          <h3>Welcome Back, Rishabh</h3>
          <h3>In focus: product, data/sales pitch Resources</h3>
        </div>
        <div className="flex items-center text-2xl ml-4">Dashboard</div>
        <div className="right-sec mr-4 flex items-end ">
          <ul className="flex gap-10 items-end">
            <li className="hidden sm:block">
              <BiSearch size={20} />
            </li>
            <li className="mb-[-3px] hidden sm:block">
              <Badge count={5}>
                <BiBell size={18} />
              </Badge>
            </li>
            <li>
              <div className="d-flex align-items-center justify-content-end">
                <Dropdown
                  menu={{ items }}
                  placement="bottomLeft"
                  arrow={true}
                  overlayClassName="notification"
                >
                  <div className="flex  items-center gap-2 h-100">
                    <img src={Male} alt="icon" className="" width={25} />
                    <div className="d-flex flex-column align-items-center content">
                      <b>Anthony</b>
                    </div>
                  </div>
                </Dropdown>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
