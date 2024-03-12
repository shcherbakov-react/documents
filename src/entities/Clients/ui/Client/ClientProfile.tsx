import {UserOutlined} from "@ant-design/icons";
import Avatar from "antd/es/avatar";
import Card from "antd/es/card";
import Title from "antd/es/typography/Title";
import cls from './Client.module.scss'
import {Col, Flex, Space, Table} from "antd";

export const ClientProfile = ({data}: any) => {
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
        <Space style={{width: '100%'}} direction={"vertical"} size={16}>
            <Col span={8}>
                <Card className={`${cls.card}`}>
                    <div>
                        <Avatar size={64} icon={<UserOutlined/>}/>
                        <Title level={2}>{data?.firstname + ' ' + data?.lastname}</Title>
                        <Space direction="vertical" size={"middle"}>
                            <div className={cls.card}>
                                <div>{data?.email}</div>
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
            </Col>
            <Col span={24}>
                <Card title={"Заказы"}>
                    <Table>

                    </Table>
                </Card>
            </Col>
        </Space>
    )
}
