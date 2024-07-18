import { Avatar, Button, Dropdown } from 'antd'
import React from 'react'

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { BiBell, BiSearch } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
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
            key: "Logout",
            icon: <MdLogout />,
            label: "Logout",
            danger: true,

        },
    ];
    return (

        <header className="dmt-header" style={{ marginLeft: !isCollapse ? '86px' : '' }}>
            <Button
                type="text"
                icon={isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setIsCollapse(!isCollapse)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />

            <div className='header-bottom w-full flex justify-between'>
                <div>
                    <h3>Welcome Back, Rishabh</h3>
                    <h3>In focus: product, data/sales pitch Resources</h3>
                </div>
                <div className='right-sec mr-4 flex items-end'>
                    <ul className='flex gap-10 items-end'>
                        <li><BiSearch size={15} /></li>
                        <li><BiBell size={15}/></li>
                        <li>
                            <div className="d-flex align-items-center justify-content-end">
                                <Dropdown menu={{ items }} placement="bottomLeft" arrow={true}>
                                    <div className="flex  items-center gap-2 h-100">
                                        <img src={Male} alt="icon" className="" width={25} />
                                        <div className="d-flex flex-column align-items-center content">
                                            <b>jkhfgkjdgdg</b>
                                            
                                        </div>
                                    </div>
                                </Dropdown>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </header>


    )
}

export default Header