import {Button, Card, Col, Row, Space} from "antd"
import Title from "antd/es/typography/Title";
import Input from "antd/es/input";
import {Controller, SubmitHandler, useFieldArray, useForm} from "react-hook-form";
import {DeleteOutlined, PlusOutlined} from "@ant-design/icons";
import {LegalsData} from "entities/Clients/model/types/ClientSchema";
import {useUpdateClientMutation} from '../../../model/service/createClient'
import {BankDetails} from "entities/Clients/ui/AddClient/AddClientSteps/BankDetails";
import cls from "../AddClient.module.scss";

type legalsType = {
    legals: LegalsData[]
}
export const ProjectsOfClient = () => {
    const {control, handleSubmit, formState: {errors}} = useForm<legalsType>({
        // resolver: yupResolver(clientBasicInfoSchema),
        defaultValues:
            {
                legals: [
                    {
                        name: '',
                        fullName: '',
                        shortName: '',
                        ogrn: '',
                        inn: '',
                        legalAdress: '',
                        postAdress: '',
                        status: '',
                        banksDetails: [{
                            bankName: '',
                            checkingAccount: '',
                            correspondentAccount: '',
                            bankInn: '',
                            bankAdress: '',
                            bankDescription: '',
                        }]
                    }
                ]
            }
    });
    const [updatePost, {isLoading: isUpdating}] = useUpdateClientMutation()

    const onSubmit: SubmitHandler<legalsType> = (data) => {
        console.log(data);
        // updatePost({id: '1', legals:data})
        let username = 'admin';
        let password = 'password';
        let headers = new Headers();
        // headers.set('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'));


        // useCreateClientQuery()
    };

    const {fields: fieldsLegals, append: appendLegals, remove: removeLegals} = useFieldArray({
        control,
        name: 'legals'
    });

    const clock = () =>{
        fetch('http://185.22.61.73:8088/clients/1', {
            method: 'PATCH',
            headers: {'Authorization': 'Basic ' + btoa('admin:password')},
            body: JSON.stringify({
                name: 'Измененный'
            })
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fieldsLegals.map((item, index) => (
                <>
                    <Card className={cls.card}>
                        <Title level={3}>Юридическое лицо</Title>
                        <div className={cls.basic}>
                            <Row gutter={[16, 16]}>
                                <Col span={8}>
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
                                <Col span={8}>
                                    <div>
                                        <Title level={5}>Название банка</Title>
                                        <Controller
                                            name={`legals.${index}.fullName`}
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
                                            name={`legals.${index}.shortName`}
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
                                            name={`legals.${index}.ogrn`}
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
                                            name={`legals.${index}.inn`}
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
                                            name={`legals.${index}.legalAdress`}
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
                                            name={`legals.${index}.postAdress`}
                                            control={control}
                                            rules={{required: true}}
                                            render={({field}) => <Input placeholder="ООО Рога и копыта" {...field} />}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <BankDetails control={control} index={index}/>
                        {index !== 0 &&
                            <Button danger={true} type="primary" onClick={() => removeLegals(index)}>
                                <DeleteOutlined/>
                            </Button>
                        }
                    </Card>
                </>
            ))}
            <Space size={16} style={{marginTop: 16}}>
                <Button
                    // icon={
                    //     <PlusOutlined/>
                    // }
                    onClick={() => {
                        appendLegals({
                            name: '',
                            fullName: '',
                            shortName: '',
                            ogrn: '',
                            inn: '',
                            legalAdress: '',
                            postAdress: '',
                            status: '',
                            banksDetails: [{
                                bankName: '',
                                checkingAccount: '',
                                correspondentAccount: '',
                                bankInn: '',
                                bankAdress: '',
                                bankDescription: '',
                            }]
                        });
                    }}
                    type={"default"}
                    // className={cls.addButton}
                >
                    Добавить
                </Button>
                <Button
                    // htmlType={"submit"}
                    onClick={clock}
                    type={"primary"}>

                    Сохранить
                </Button>
            </Space>
        </form>

    )
}