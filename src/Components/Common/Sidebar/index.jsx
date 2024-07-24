import { Badge, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import Logo from "../../../Static/Img/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { LiaMobileSolid, LiaSatelliteDishSolid } from "react-icons/lia";

import {
  MdAdminPanelSettings,
  MdAssignmentAdd,
  MdCalendarViewMonth,
  MdConnectWithoutContact,
  MdNotificationAdd,
  MdSettings,
  MdSupervisedUserCircle,
  MdSupportAgent,
} from "react-icons/md";

import { GiHelp, GiNetworkBars } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { FaCircleQuestion, FaUserLarge, FaUserTie } from "react-icons/fa6";

import { BiLogOut } from "react-icons/bi";

import { IoHelpBuoySharp } from "react-icons/io5";

const Sidebar = ({ setIsCollapse, isCollapse }) => {
  const navigate = useNavigate();
  const sidebarList1 = [
    {
      label: "Overview",
      icon: <GiNetworkBars />,
      key: "Overview",
      onClick: () => {
        navigate("/");
      },
    },
    {
      label: "work assign/assigned",
      icon: <MdAssignmentAdd />,
      key: "work assign/assigned",
      onClick: () => {
        navigate("/work");
      },
    },
    {
      label: "Queries ",
      icon: <FaCircleQuestion />,
      key: "Queries ",
      children: [
        {
          label: "Test1",
          icon: <LiaMobileSolid />,
          key: "test1",
        },
        {
          label: "Test2",
          icon: <MdSupportAgent />,
          key: "test2",
          children: [
            {
              label: "SubTest1",
              icon: <MdSupervisedUserCircle />,
              key: "SubTest1",
            },
            {
              label: "SubTest2",
              icon: <MdNotificationAdd />,
              key: "SubTest2",
            },
          ],
        },
        { label: "Another", icon: <LiaSatelliteDishSolid />, key: "another" },
      ],
    },
    {
      label: (
        <div className="cal-notifi">
          calendar/schedule <span className="cal-value">{5}</span>
        </div>
      ),
      icon: <MdCalendarViewMonth />,
      key: "calendar/schedule",
    },
    {
      label: "Setting",
      icon: <MdSettings />,
      key: "Setting",
    },
  ];
  const sidebarList2 = [
    {
      label: "Client",
      icon: <FaUserTie />,
      key: "Client",
    },
    {
      label: "Communicate",
      icon: <FaUserLarge />,
      key: "Communicate",
    },
  ];
  const sidebarList3 = [
    {
      label: "Help Centre",
      icon: <IoHelpBuoySharp />,
      key: "Help Centre",
    },
    {
      label: "Contact us",
      icon: <MdConnectWithoutContact />,
      key: "Contact us",
    },

    {
      label: "Log out",
      icon: <BiLogOut />,
      key: "Log out",
    },
  ];
  return (
    <Sider
      className="sat-sidebar"
      trigger={null}
      collapsible
      collapsed={!isCollapse}
    >
      <div className="demo-logo-vertical" />
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menu-bar-head">
        <Menu
          theme="dark"
          defaultSelectedKeys={["Overview"]}
          defaultOpenKeys={["Overview"]}
          mode="inline"
          items={sidebarList1}
        />
        <Menu theme="dark" mode="inline" items={sidebarList2} />
        <Menu theme="dark" mode="inline" items={sidebarList3} />
      </div>
    </Sider>
  );
};

export default Sidebar;
