import { LoadingOutlined, UserOutlined } from "@ant-design/icons";
import Avatar from "antd/es/avatar";
import Card from "antd/es/card";
import Title from "antd/es/typography/Title";
import cls from './Client.module.scss'
import { Col, Flex, Row, Space } from "antd";
import { IClientData } from "pages/ClientPage/model/types/ClientPageSchema";

export const ClientProfile = ({data}: any) => {
    console.log(data)
    const options = [
        {
            value: 0,
            label: 'Клиент',
        },
        {
            value: 1,
            label: 'Юр.лицо',
        },
        {
            value: 2,
            label: 'Сотрудник',
        },
    ]

    return (
        <Card>
            <div className={cls.card}>
                <Avatar size={64} icon={<UserOutlined />} />
                <Title level={2}>{data?.firstname + ' ' + data?.lastname}</Title>
                <Space direction="vertical" size={"middle"}>
                    <div className={cls.card}>
                        <div>{data?.email}</div>
                        {/*<div>{data?.type}</div>*/}
                        <div>Юридическое лицо</div>
                    </div>
                    <Flex gap="middle">
                        <div className={cls.card}>
                            <div>Всего договоров:</div>
                            <Title level={3}>12</Title>
                        </div>

                        <div className={cls.card}>
                            <div>Сумма договоров:</div>
                            <Title level={3}>13 500 ₽</Title>
                        </div>
                    </Flex>
                </Space>

            </div>
        </Card>
    )
}
