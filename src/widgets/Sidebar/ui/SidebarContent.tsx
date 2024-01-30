import cls from './Sidebar.module.scss'
import { NavLink } from "react-router-dom";
import { IdcardOutlined, InboxOutlined, PhoneOutlined, ShoppingCartOutlined } from "@ant-design/icons";

export const SidebarContent = () => {
    return (
        <div className={cls.sidebarWrap}>
            <ul>
                <li className={cls.menu__item}>
                    <NavLink className={cls.link} to="/clients">
                        <IdcardOutlined style={{fontSize: '26px'}} />
                        <span className={cls.navbarLink}>Клиенты</span>
                    </NavLink>
                    <NavLink className={cls.link} to="/calls">
                        <PhoneOutlined style={{fontSize: '26px'}} />
                        <
                            span className={cls.navbarLink}>Звонки</span>
                    </NavLink>
                    <NavLink className={cls.link} to="/orders">
                        <ShoppingCartOutlined style={{fontSize: '26px'}} />
                        <span className={cls.navbarLink}>Заказы</span>
                    </NavLink>
                    <NavLink className={cls.link} to="/lids">
                        <InboxOutlined style={{fontSize: '26px'}}/>
                        <span className={cls.navbarLink}>Лиды</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}