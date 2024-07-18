import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import React from 'react'
import Logo from "../../../Static/Img/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import {
    LiaPlaneSolid,
    LiaHotelSolid,
    LiaBusSolid,
    LiaTrainSolid,
    LiaMobileSolid,
    LiaSatelliteDishSolid,
} from "react-icons/lia";
import {
    MdAdminPanelSettings,
    MdAssignmentAdd,
    MdFeedback,
    MdNotificationAdd,
    MdSupervisedUserCircle,
    MdSupportAgent,
    MdVerifiedUser,
} from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { GiNetworkBars } from 'react-icons/gi';

const Sidebar = ({ setIsCollapse, isCollapse }) => {
    const sidebarList1 = [
        {
            label: "Overview",
            icon: <GiNetworkBars  />,
            key: "Overview",

        },
        {
            label: "work assign/assigned",
            icon: <MdAssignmentAdd />,
            key: "work assign/assigned",

        },
        {
            label: "Queries ",
            icon: <LiaMobileSolid />,
            key: "Queries ",
            children: [
                {
                    label: "Money Transfer",
                    icon: <LiaMobileSolid />,
                    key: "money_transfer",
                },
                {
                    label: "Retention Portal",
                    icon: <MdSupportAgent />,
                    key: "retention_portal",
                    children: [
                        {
                            label: "Agent Details",
                            icon: <MdSupervisedUserCircle />,
                            key: "agent_details",

                        },
                        {
                            label: "Reminder",
                            icon: <MdNotificationAdd />,
                            key: "reminder",

                        },
                        {
                            label: "FeedBack",
                            icon: <MdFeedback />,
                            key: "feedback",

                        },
                        {
                            label: "Assign Tab",
                            icon: <MdAssignmentAdd />,
                            key: "Assign Tab",

                        },
                    ],
                },
                { label: "Another", icon: <LiaSatelliteDishSolid />, key: "another" },
            ],
        },
        {
            label: "calendar/schedule",
            icon: <AiOutlineHome />,
            key: "calendar/schedule",

        },
        {
            label: "Setting",
            icon: <AiOutlineHome />,
            key: "Setting",

        },
    ];
    const sidebarList2 = [
        {
            label: "Client",
            icon: <MdAdminPanelSettings />,
            key: "Client",

        },
        {
            label: "Communicate",
            icon: <AiOutlineHome />,
            key: "Communicate",

        }
        
    ];
    const sidebarList3 = [
        {
            label: "Help Centre",
            icon: <MdAdminPanelSettings />,
            key: "Help Centre",

        },
        {
            label: "Contact us",
            icon: <AiOutlineHome />,
            key: "Contact us",

        },
       
        {
            label: "Log out",
            icon: <AiOutlineHome />,
            key: "Log out",

        },
      
    ];
    return (
        <Sider className='sat-sidebar' trigger={null} collapsible collapsed={!isCollapse}>
            <div className="demo-logo-vertical" />
            <div className="logo">

                <img src={Logo} alt='' />
            </div>
            <div className='menu-bar-head'>
                <Menu
                    theme='dark'
                    defaultSelectedKeys={["Overview"]}
                    defaultOpenKeys={["Overview"]}
                    mode="inline"
                    items={sidebarList1}

                />
                <Menu
                    theme='dark'
                  
                    mode="inline"
                    items={sidebarList2}

                />
                <Menu
                    theme='dark'
                    
                    mode="inline"
                    items={sidebarList3}

                />
            </div>
        </Sider>
    )
}

export default Sidebar