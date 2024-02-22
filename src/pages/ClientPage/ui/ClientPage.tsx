import { useParams } from "react-router-dom";
import { useGetClientQuery } from '../model/api/api';
import { Col, Row, Tabs } from "antd";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { ClientProfile } from "entities/Clients";
import cls from './ClientPage.module.scss'
import Card from "antd/es/card";
import { LegalPersons } from "entities/LegalEntity/ui/LegalPersons";
import { LegalCharts } from "entities/LegalEntity/ui/Сharts";
import { IClientData } from "pages/ClientPage/model/types/ClientPageSchema";

export const ClientPage = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetClientQuery(id)

    const {
        reset,
    } = useForm({
        defaultValues: {
            firstname: data?.firstname,
            lastname: data?.lastname,
            type: data?.type,
        }
    })

    useEffect(() => {
        reset(data)
    }, [isLoading])

    const onSubmit: SubmitHandler<IClientData> = (data) => {
        console.log(data)
    }

    const items = [
        {
            label: 'Юр. Лица',
            key: '1',
            children: <LegalPersons id={id} />,
        },
        {
            label: 'Графики',
            key: '2',
            children: <LegalCharts />,
        },
    ];

    return (
        <div className={cls.form}>
            <Row justify="space-between">
                <Col span={7}>
                    <ClientProfile data={data} />
                </Col>
                <Col span={16}>
                    <Card>
                        <Tabs items={items} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}