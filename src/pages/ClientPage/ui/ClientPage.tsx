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

export const ClientPage = () => {
    const {id} = useParams()
    console.log(id)
    const {data, isLoading} = useGetClientQuery(id)

    interface IFormInput {
        firstname: string
        type: number
        lastname: string
    }

    const {
        handleSubmit,
        control,
        reset,
        register
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

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    const items = [
        {
            label: 'Юр. Лица',
            key: '1',
            children: <LegalPersons />,
        },
        {
            label: 'Графики',
            key: '2',
            children: <LegalCharts />,
        },
        {
            label: 'Tab 3',
            key: '3',
            children: 'Tab 3',
        }
    ]

    return (
        <div className={cls.form}>
            <Row justify="space-between">
                <Col span={7}>
                    <ClientProfile data={data} />
                </Col>
                <Col span={15}>
                    <Card>
                        <Tabs items={items} />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}