import cls from '../Sidebar/Sidebar.module.scss'
import { NavLink } from "react-router-dom";
import {IdcardOutlined, InboxOutlined, PhoneOutlined, ShoppingCartOutlined, UserOutlined} from "@ant-design/icons";
import React from "react";

export const SidebarContent = () => {
    return (
        <div className={cls.sidebarWrap}>
            <ul>
                <li className={cls.menu__item}>
                    <NavLink className={cls.link} to="/profile">
                        <UserOutlined style={{fontSize: '24px'}} />
                        <span className={cls.navbarLink}>Мой профиль</span>
                    </NavLink>
                    <NavLink className={cls.link} to="/clients">
                        <IdcardOutlined style={{fontSize: '24px'}} />
                        <span className={cls.navbarLink}>Клиенты</span>
                    </NavLink>
                    <NavLink className={cls.link} to="/calls">
                        <PhoneOutlined style={{fontSize: '24px'}} />
                        <
                            span className={cls.navbarLink}>Звонки</span>
                    </NavLink>
                    <NavLink className={cls.link} to="/orders">
                        <ShoppingCartOutlined style={{fontSize: '24px'}} />
                        <span className={cls.navbarLink}>Заказы</span>
                    </NavLink>
                    <NavLink className={cls.link} to="/lids">
                        <InboxOutlined style={{fontSize: '24px'}}/>
                        <span className={cls.navbarLink}>Лиды</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}