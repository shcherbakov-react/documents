import {useParams} from "react-router-dom";
import {useGetClientQuery} from '../model/api/api';
import {Col, Row, Tabs} from "antd";
import {useForm, SubmitHandler} from "react-hook-form";
import {useEffect} from "react";
import {ClientProfile} from "entities/Clients";
import cls from './ClientPage.module.scss'
import {LegalPersons} from "entities/LegalEntity/ui/LegalPersons";
import {LegalCharts} from "entities/LegalEntity/ui/Сharts";

export const ClientPage = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetClientQuery(id)

    interface IFormInput {
        firstname: string
        type: number
        lastname: string
    }

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

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    const items = [
        {
            label: 'Основная информация',
            key: '1',
            children: <ClientProfile data={data}/>,
        },
        {
            label: 'Юр. Лица',
            key: '2',
            children: <LegalPersons/>,
        },
        {
            label: 'Графики',
            key: '3',
            children: <LegalCharts/>,
        },
    ]

    return (
        <div className={cls.form}>
            <Row gutter={[16,16]}>
                <Tabs style={{width: '100%'}} className={cls.card} items={items}/>
            </Row>
        </div>
    )
}