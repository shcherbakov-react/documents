import cls from './LegalPersons.module.scss'
import classNames from "classnames";
import Card from "antd/es/card";
import 'swiper/css';
import 'swiper/css/pagination';
import {SmallDashOutlined} from "@ant-design/icons";
import {Col, Dropdown, MenuProps, Row} from "antd";

export const LegalPersons = () => {
    const items: MenuProps['items'] = [
        {
            label: 'Изменить',
            key: '1',
        },
        {
            label: 'Создать дубликат',
            key: '2',
        },
        {
            label: 'Удалить',
            key: '3',
        },
    ];
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e);
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const organizations = [
        {
            id: 4,
            name: 'ООО «Сушитайм»',
            status: 1,
            INN: '2623024331',
            KPP: '263501001',
            OGRN: '1092645001019',
            address: '355035, Ставропольский Край, г. Ставрополь, пр-кт Кулакова, д. 18'
        },
        {
            id: 1,
            name: 'ООО «Картофельный папа»',
            status: 1,
            INN: '2623065465',
            KPP: '656423454',
            OGRN: '1092645098754',
            address: '355035, Ставропольский Край, г. Ставрополь, ул. Тухачевского, д. 26'
        },
        {
            id: 2,
            name: 'ООО «Блек Шеф»',
            status: 1,
            INN: '2623068541',
            KPP: '854245541',
            OGRN: '45469465454555',
            address: '355035, Ставропольский Край, г. Ставрополь, ул. Ленина, д. 228'
        },
        {
            id: 3,
            name: 'ООО «Япоша»',
            status: 1,
            INN: '2623068542',
            KPP: '789245455',
            OGRN: '65465456212321',
            address: '355035, Ставропольский Край, г. Ставрополь, ул. Тухачевского, д. 26'
        }
    ]
    return (
        <div className={cls.legal}>
            <div className={classNames(cls.LegalPerson, {}, [])}>
                <Row gutter={[16, 16]}>
                    {organizations.map((item) => (
                        <Col span={8} style={{height: 'auto', display: 'grid'}}>
                            <Card title={item.name} extra={
                                <Dropdown menu={menuProps}><SmallDashOutlined/></Dropdown>
                            }>
                                <div>ИНН: {item.INN}</div>
                                <div>КПП: {item.KPP}</div>
                                <div>ОГРН: {item.OGRN}</div>
                                <div>
                                    {item.address}
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}