import cls from './Navbar.module.scss';
import { Dropdown, Space } from "antd";
import Avatar from "antd/es/avatar";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const navigate = useNavigate()
    const handleLogOut = () => {
        localStorage.removeItem('user');
        navigate('/auth');
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>

                        </Space>
                    </a>
                </Dropdown>
            </div>
        </header>
    )
}