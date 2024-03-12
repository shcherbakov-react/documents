import {Button, Card, Col, Row, Space} from "antd"
import Title from "antd/es/typography/Title";
import Input from "antd/es/input";
import {Controller, SubmitHandler, useFieldArray, useForm} from "react-hook-form";
import {DeleteOutlined, PlusOutlined} from "@ant-design/icons";

export type ILegalsData = {
    legals: {
        name: string,
        description: string,
        bankName: string,
        checkingAccount: string,
        correspondentAccount: string,
        bankInn: string,
        bankAdress: string,
        bankDescription: string,
    }[];
}

export const ProjectsOfClient = () => {
    const {control, handleSubmit, formState: {errors}} = useForm<ILegalsData>({
        // resolver: yupResolver(clientBasicInfoSchema),
        defaultValues:
            {
                legals: [
                    {
                        name: '',
                        description: '',
                        bankName: '',
                        checkingAccount: '',
                        correspondentAccount: '',
                        bankInn: '',
                        bankAdress: '',
                        bankDescription: '',
                    }
                ]
            }
    });

    const onSubmit: SubmitHandler<ILegalsData> = (data) => {
        console.log(data)
    };

    const {fields, append, remove} = useFieldArray({
        control,
        name: 'legals'
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Space direction="vertical" size={16}>
                {fields.map((item, index) => (
                    <Card>
                        <Row style={{maxWidth: 700}} gutter={[16, 16]}>
                            <Col span={12}>
                                <div>
                                    <Title level={5}>Название</Title>
                                    <Controller
                                        name={`legals.${index}.name`}
                                        control={control}
                                        rules={{required: true}}
                                        render={({field}) => <Input placeholder="ООО Рога и копыта" {...field} />}
                                    />
                                </div>
                            </Col>
                            <Col span={12}>
                                <div>
                                    <Title level={5}>Описание</Title>
                                    <Controller
                                        name={`legals.${index}.description`}
                                        control={control}
                                        rules={{required: true}}
                                        render={({field}) => <Input placeholder="ООО Рога и копыта" {...field} />}
                                    />
                                </div>
                            </Col>

                            <Col span={8}>
                                <div>
                                    <Title level={5}>Название банка</Title>
                                    <Controller
                                        name={`legals.${index}.bankName`}
                                        control={control}
                                        rules={{required: true}}
                                        render={({field}) => <Input placeholder="Сбербанк" {...field} />}
                                    />
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <Title level={5}>Расчетный счет</Title>
                                    <Controller
                                        name={`legals.${index}.checkingAccount`}
                                        control={control}
                                        rules={{required: true}}
                                        render={({field}) => <Input placeholder="12312332432" {...field} />}
                                    />
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <Title level={5}>Корреспондентский счет</Title>
                                    <Controller
                                        name={`legals.${index}.correspondentAccount`}
                                        control={control}
                                        rules={{required: true}}
                                        render={({field}) => <Input placeholder="ООО Рога и копыта" {...field} />}
                                    />
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <Title level={5}>ИНН банка</Title>
                                    <Controller
                                        name={`legals.${index}.bankInn`}
                                        control={control}
                                        rules={{required: true}}
                                        render={({field}) => <Input placeholder="ООО Рога и копыта" {...field} />}
                                    />
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <Title level={5}>Адрес банка</Title>
                                    <Controller
                                        name={`legals.${index}.bankAdress`}
                                        control={control}
                                        rules={{required: true}}
                                        render={({field}) => <Input placeholder="ООО Рога и копыта" {...field} />}
                                    />
                                </div>
                            </Col>
                            <Col span={8}>
                                <div>
                                    <Title level={5}>Описание</Title>
                                    <Controller
                                        name={`legals.${index}.bankDescription`}
                                        control={control}
                                        rules={{required: true}}
                                        render={({field}) => <Input placeholder="ООО Рога и копыта" {...field} />}
                                    />
                                </div>
                            </Col>
                        </Row>
                        {index !== 0 &&
                            <Button danger={true} type="primary" onClick={() => remove(index)}>
                                <DeleteOutlined/>
                            </Button>
                        }
                    </Card>
                ))}
                <Button
                    icon={
                        <PlusOutlined/>
                    }
                    onClick={() => {
                        append({
                            name: '',
                            description: '',
                            bankName: '',
                            checkingAccount: '',
                            correspondentAccount: '',
                            bankInn: '',
                            bankAdress: '',
                            bankDescription: '',
                        });
                    }}
                    type={"link"}

                    style={{paddingLeft: 0}}
                >
                    Добавить
                </Button>
            </Space>

        </form>

    )
}