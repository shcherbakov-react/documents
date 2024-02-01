import Title from "antd/es/typography/Title";
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import Input from "antd/es/input";
import { Button, Col, Row, Select } from "antd";

interface IPhoneNumbers {
    number: string,
    name?: string
}

interface IFormInput {
    "firstname": "string",
    "secondname": "string",
    "lastname"?: "string",
    "email"?: "string",
    "type"?: 0,
    "comment"?: "string",
    "phones": IPhoneNumbers[]
}

export const ClientBasicInfo = () => {
    const {control, handleSubmit, register, watch, formState: {errors}} = useForm({

    })
    const onSubmit: SubmitHandler<IFormInput> = (data) => {

    }

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
    ]
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row gutter={16}>
                <Col span={8}>
                    <div>
                        <Title level={5}>Фамилия</Title>
                        <Controller
                            name="lastname"
                            control={control}
                            rules={{required: true}}
                            render={({field}) => <Input placeholder="Иванов" {...field} />}
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={5}>Имя</Title>
                        <Controller
                            name="firstname"
                            control={control}
                            rules={{required: true}}
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
                            rules={{required: true}}
                            render={({field}) => <Select placeholder={"Выбирите тип"} style={{
                                width: 120,
                            }} options={options} {...field} />}
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={5}>Телефон</Title>
                        {fields.map((item, index) => {
                            return (
                                <>
                                    <Controller
                                        name={`phones.${index}.number`}
                                        control={control}
                                        render={({field}) => <Input type={"textarea"} {...field} />}
                                    />
                                    <div className="col-md-1 d-flex align-items-end">
                                        <button
                                            onClick={() => remove(index)}
                                            className="btn border-0 bg-danger bx bx-trash fs-4 text-white p-2"></button>
                                    </div>

                                </>
                            );
                        })}
                        {errors?.phones && (
                            <div className="invalid-tooltip" id="validate1">
                                {errors.phones.message}
                            </div>
                        )}
                        <Button
                            onClick={() => {
                                append({})
                            }}
                            type={"primary"}>
                            Добавить
                        </Button>
                    </div>
                </Col>
            </Row>
        </form>
    )
}