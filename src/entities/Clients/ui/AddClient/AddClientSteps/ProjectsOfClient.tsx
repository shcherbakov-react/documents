import { Button, Card, Col, Row } from "antd"
import Title from "antd/es/typography/Title";
import { Controller, useForm } from "react-hook-form";
import Input from "antd/es/input";

export const ProjectsOfClient = () => {
    const {control, handleSubmit, register, watch, formState: {errors}} = useForm({})
    return (
        <>
            <Card>
                <Row gutter={16}>
                    <Col span={8}>
                        <div>
                            <Title level={5}>Название</Title>
                            <Controller
                                name="name"
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
                                name="description"
                                control={control}
                                rules={{required: true}}
                                render={({field}) => <Input placeholder="ООО Рога и копыта" {...field} />}
                            />
                        </div>
                    </Col>
                </Row>
            </Card>
            <Button type={"primary"}>Добавить</Button>
        </>
    )
}