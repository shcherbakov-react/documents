import { Space } from 'antd';
import type { TableProps } from 'antd';
import { ClientSchema } from "entities/Clients";
import { NavLink } from "react-router-dom";


export const ClientsColumns: TableProps<ClientSchema>['columns'] = [
    {
        title: 'Фио',
        dataIndex: 'firstname',
        key: 'fullname',
        render: (_, record:ClientSchema) => (
            <NavLink to={`/clients/${record.id}`}>
                <span>{`${record.firstname} ${record.lastname}`}</span>
            </NavLink>
        )
    },
    {
        title: 'Номер телефона',
        dataIndex: 'phones',
        key: 'phones',
        render: (_, record: ClientSchema) => (
            <Space size="middle">
                {record?.phones?.map((obj) => (
                    <div key={obj.number}>{obj?.number}</div>
                ))}
            </Space>
        ),
    },
    {
        title: 'Тип',
        dataIndex: 'type',
        key: 'type',
    },
    {
        title: 'Кол-во заказов',
        key: 'countorders',
        dataIndex: 'countorders',
    },
    {
        title: 'Сумма заказов',
        key: 'sum',
        dataIndex: 'sumprice',
    },
];