import Title from "antd/es/typography/Title";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Input from "antd/es/input";
import { Col, Row, Select } from "antd";

interface IFormInput {
    "firstname": "string",
    "secondname": "string",
    "lastname": "string",
    "email": "string",
    "type": 0,
    "comment": "string",
}

export const ClientBasicInfo = () => {
    const {control, handleSubmit, formState: {errors}} = useForm({})
    const onSubmit: SubmitHandler<IFormInput> = (data) => {

    }
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
                            render={({field}) => <Input {...field} />}
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
                            render={({field}) => <Input {...field} />}
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={5}>Отчетсво</Title>
                        <Controller
                            name="secondname"
                            control={control}
                            render={({field}) => <Input {...field} />}
                        />
                    </div>
                </Col>
                <Col span={8}>
                    <div>
                        <Title level={5}>Email</Title>
                        <Controller
                            name="email"
                            control={control}
                            render={({field}) => <Input {...field} />}
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
                            name="email"
                            control={control}
                            rules={{required: true}}
                            render={({field}) => <Select style={{
                                width: 120,
                            }} options={options} {...field} />}
                        />
                    </div>
                </Col>

            </Row>
        </form>
    )
}