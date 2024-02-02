import Title from "antd/es/typography/Title";
import { Controller, ResolverOptions, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Input from "antd/es/input";
import { Button, Col, Flex, Row, Select, Space } from "antd";
import { clientBasicInfoSchema } from "entities/Clients/model/service/ClientValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

type IPhoneNumbers = {
    number: string;
}

export type IFormInput = {
    firstname?: string;
    secondname?: string;
    lastname?: string;
    email?: string;
    type?: number;
    comment?: string;
    phones?: IPhoneNumbers[];
}

interface ClientBasicInfoProps {
    current: number;
    setCurrent: Function;
}

export const ClientBasicInfo = ({current, setCurrent}: ClientBasicInfoProps) => {
    const {control, handleSubmit, formState: {errors}} = useForm<IFormInput>({
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

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        setTimeout(() => {
            setCurrent(current + 1)
        }, 2000)
        // Здесь вы можете отправить данные на сервер или выполнить другие действия
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
            <Row gutter={16}>
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
                        <Title level={5}>Отчетсво</Title>
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
                                });
                            }}
                            type={"primary"}
                        >
                            Добавить
                        </Button>
                    </div>
                    <Button htmlType={"submit"} type={"primary"}>Далее</Button>
                </Col>
            </Row>
        </form>
    )
}