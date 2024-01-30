import cls from './Navbar.module.scss';
import { ReactNode, useEffect, useState } from "react";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Avatar from "antd/es/avatar";
import { Navigate, useNavigate } from "react-router-dom";

// interface ILinks {
//     label?: ReactNode | string
//     key: string
//     type?: string
// }

export const Navbar = () => {
    const handleLogOut = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        return <Navigate to="/login" />;
    }

    const items = [
        {
            label: (
                <div onClick={handleLogOut} className="item">Выйти</div>
            ),
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: '1',
        },
        {
            type: 'divider',
            key: '2'
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];

    return (
        <header className={cls.header}>
            <div className={cls.rightBox}>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <Avatar />
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </header>
    )
}