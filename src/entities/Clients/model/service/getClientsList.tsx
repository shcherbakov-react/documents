import { Space, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useGetClientsQuery } from "shared/api/api";
import { ClientSchema } from "entities/Clients/model/types/ClientSchema";
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { NavLink } from "react-router-dom";


interface Iphones {
    id: number
    name: string
    number: string
}

export const ClientsColumns: TableProps<ClientSchema>['columns'] = [
    {
        title: 'Фио',
        dataIndex: 'firstname',
        key: 'firstname',
        render: (_, record) => (
            <NavLink to={`/clients/${record.id}`}>
                <span>{record.firstname}</span>
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
                    <div>{obj?.number}</div>
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