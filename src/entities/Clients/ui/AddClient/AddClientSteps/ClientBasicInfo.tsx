import Title from "antd/es/typography/Title";
import {Controller, SubmitHandler, useFieldArray, useForm} from "react-hook-form";
import {Button, Col, Flex, Row, Select, Space,Input} from "antd";
import {useState} from "react";
import {DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import {ClientSchema} from "../../../model/types/ClientSchema";
import {useCreateClientMutation} from '../../../model/service/createClient'
import {CLIENT_LOCALSTORAGE_KEY} from "shared/const/localstorage";

interface ClientBasicInfoProps {
    setCurrent: Function;
}

export const ClientBasicInfo = ({ setCurrent}: ClientBasicInfoProps) => {
    const [createClient, {isLoading}] = useCreateClientMutation()
    const {control, handleSubmit, formState: {errors}} = useForm<ClientSchema>({
            // resolver: yupResolver(clientBasicInfoSchema),
            defaultValues:
                {
                    phones: [
                        {
                            number: '',
                        }
                    ]
                }
        })
    ;


    const onSubmit: SubmitHandler<ClientSchema> = (data) => {
        createClient(data)
            .then((res: {data: any}) => {
                localStorage.setItem(CLIENT_LOCALSTORAGE_KEY, res.data.id);
                setCurrent(1)
            })
    };


    const {fields, append, remove} = useFieldArray({
        control,
        name: 'phones'
    });

    const options = [
        {
            value: 1,
            label: 'Физ. лицо'
        },
        {
            value: 2,
            label: 'Юр. лицо'
        },
        {
            value: 3,
            label: 'Сотрудник'
        },
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-16" gutter={[16, 16]} style={{maxWidth: 700}}>
                <Col span={8}>
                    <div>
                        <Title level={5}>Фамилия</Title>
                        <Controller
                            name="lastname"
                            control={control}
                            render={({field}) => <Input placeholder="Иванов" {...field} />}
                        />
                        {errors?.lastname && (
                            <div className="invalid-tooltip" id="validate1">
                                {errors.phones.message}
                            </div>
                        )}
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={5}>Имя</Title>
                        <Controller
                            name="firstname"
                            control={control}
                            render={({field}) => <Input placeholder="Иван" {...field} />}
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={5}>Отчество</Title>
                        <Controller
                            name="secondname"
                            control={control}
                            render={({field}) => <Input placeholder="Иванович" {...field} />}
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={5}>Email</Title>
                        <Controller
                            name="email"
                            control={control}
                            render={({field}) => <Input placeholder="email@mail.ru" {...field} />}
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={5}>Комментарий</Title>
                        <Controller
                            name="comment"
                            control={control}
                            render={({field}) => <Input type={"textarea"} {...field} />}
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={5}>Тип</Title>
                        <Controller
                            name="type"
                            control={control}
                            render={({field}) => <Select placeholder={"Выбирите тип"} style={{
                                width: 120,
                            }} options={options} {...field} />}
                        />

                    </div>
                </Col>
                <Col span={8}>
                    <Space direction={"vertical"}>

                        <div>
                            <Title level={5}>Телефон</Title>
                            {fields.map((item, index) => (
                                <Flex gap={8} key={item.id}>
                                    <Controller
                                        name={`phones.${index}.number`}
                                        control={control}
                                        defaultValue={item.number || ''}
                                        render={({field}) => (
                                            <Input
                                                {...field}
                                                placeholder="Телефон"
                                                value={field.value as string}
                                                style={{width: '80%'}}
                                            />
                                        )}
                                    />
                                    <Button danger={true} type="primary" onClick={() => remove(index)}>
                                        <DeleteOutlined/>
                                    </Button>
                                </Flex>
                            ))}
                            {errors?.phones && (
                                <div className="invalid-tooltip" id="validate1">
                                    {errors.phones.message}
                                </div>
                            )}
                        </div>
                        <Button
                            icon={
                                <PlusOutlined/>
                            }
                            onClick={() => {
                                append({
                                    number: '',
                                });
                            }}
                            type={"link"}

                            style={{paddingLeft: 0}}
                        >
                            Добавить
                        </Button>
                    </Space>
                </Col>
            </Row>
            <Button loading={isLoading} htmlType={"submit"} size={"large"} type={"primary"}>Далее</Button>
        </form>
    )
}