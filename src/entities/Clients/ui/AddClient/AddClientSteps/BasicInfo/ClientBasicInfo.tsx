import Title from "antd/es/typography/Title";
import { Controller, Resolver, ResolverOptions, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Input from "antd/es/input";
import { Button, Col, Flex, Row, Select, Space } from "antd";
import { clientBasicInfoSchema } from "entities/Clients/model/service/ClientValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { api } from "shared/api/api";
import { useAddClientMutation } from "entities/Clients/model/service/Clients";
import { ClientBasicInfoProps, IClientData } from "../../../../model/types/Client";

export const ClientBasicInfo = ({current, setCurrent}: ClientBasicInfoProps) => {
    const [addClient, {isLoading}] = useAddClientMutation()

    const {control, handleSubmit, formState: {errors}} = useForm<IClientData>({
            resolver: yupResolver(clientBasicInfoSchema) as Resolver<IClientData>,
            defaultValues:
                {phones: [{name: '', number: ''}]}
        })
    ;

    const onSubmit: SubmitHandler<IClientData> = (data) => {
        addClient(
            {
                firstname: data.firstname,
                secondname: data.secondname,
                lastname: data.lastname,
                email: data.email,
                type: data.type,
                comment: data.comment,
                phones: data.phones
            }
        )
            .then((res) => {
                console.log(res)
                // @ts-ignore
                localStorage.setItem('currentCreateClient', res?.data.id)
                setCurrent(current + 1)
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
            <Row gutter={[16, 12]}>
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
                                {errors.lastname.message}
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
                        {errors?.firstname && (
                            <div className="invalid-tooltip" id="validate1">
                                {errors.firstname.message}
                            </div>
                        )}
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={5}>Отчетсво</Title>
                        <Controller
                            name="secondname"
                            control={control}
                            render={({field}) => <Input placeholder="Иванович" {...field} />}
                        />
                        {errors?.secondname && (
                            <div className="invalid-tooltip" id="validate1">
                                {errors.secondname.message}
                            </div>
                        )}
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
                        {errors?.email && (
                            <div className="invalid-tooltip" id="validate1">
                                {errors.email.message}
                            </div>
                        )}
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
                        {errors?.comment && (
                            <div className="invalid-tooltip" id="validate1">
                                {errors.comment.message}
                            </div>
                        )}
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
                        {errors?.type && (
                            <div className="invalid-tooltip" id="validate1">
                                {errors.type.message}
                            </div>
                        )}
                    </div>
                </Col>
                <Col span={12}>
                    <Flex gap={8} vertical={true}>
                        <Title level={5}>Телефон</Title>
                        {fields.map((item, index) => (
                            <Flex gap={8} key={item.id}>
                                <Controller
                                    name={`phones.${index}.number`}
                                    control={control}
                                    render={({field}) => (
                                        <Input
                                            {...field}
                                            placeholder="Телефон"
                                        />
                                    )}
                                />
                                {errors?.type && (
                                    <div className="invalid-tooltip" id="validate1">
                                        {errors.type.message}
                                    </div>
                                )}
                                <Controller
                                    name={`phones.${index}.name`}
                                    control={control}
                                    // defaultValue={item.number || ''}
                                    render={({field}) => (
                                        <Input
                                            {...field}
                                            placeholder="Имя"
                                            // value={field.value as string}
                                        />
                                    )}
                                />
                                <Button type="default" onClick={() => remove(index)}>
                                    Удалить
                                </Button>
                            </Flex>
                        ))}
                        {errors?.phones && (
                            <div className="invalid-tooltip" id="validate1">
                                {errors.phones.message}
                            </div>
                        )}
                        <Button
                            onClick={() => {
                                append({
                                    number: '',
                                    name: ''
                                });
                            }}
                            style={{marginTop: 16}}
                            type={"primary"}
                        >
                            Добавить
                        </Button>
                    </Flex>

                </Col>
            </Row>
            <Button style={{marginTop: 32}} htmlType={"submit"} type={"primary"}>Далее</Button>
        </form>
    )
}