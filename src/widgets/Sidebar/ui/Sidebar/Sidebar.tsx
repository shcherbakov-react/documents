import cls from './Sidebar.module.scss'
import Logo from 'shared/assets/images/icon/logo.svg';
import { Link } from "react-router-dom";
import { SidebarContent } from "widgets/Sidebar/ui/SidebarContent/SidebarContent";

export const Sidebar = () => {
    return (
        <aside className={cls.sidebar}>
            <div className={'navbar-brand-box'}>
                <Link to="/clients" className="logo logo-light">
                        <span >
                            <Logo />
                        </span>
                </Link>
            </div>
            <div >
                <SidebarContent />
            </div>
        </aside>
    );
}