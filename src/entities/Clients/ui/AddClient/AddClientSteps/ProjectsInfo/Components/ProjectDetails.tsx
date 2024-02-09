import { Button, Card, Checkbox, Col, Flex, Row } from "antd";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { UseClientCreateForm } from "entities/Clients/lib/form/useClientCreateForm";
import Title from "antd/es/typography/Title";
import Input from "antd/es/input";
import { BankDetails } from "entities/Clients/ui/AddClient/AddClientSteps/ProjectsInfo/Components/BankDetails";

export const ProjectDetails = () => {
    const {control} = useFormContext()
    const {fields, append, remove} = useFieldArray({
        control,
        name: 'legals',
    });
    return (
        <Flex gap={12} vertical={true}>
            {fields.map((item, index) => (
                <Card>
                    <Row gutter={[16, 12]}>
                        <Col span={8}>
                            <div>
                                <Title level={5}>Название</Title>
                                <Controller
                                    name={`legals.${index}.name`}
                                    control={control}
                                    render={({field}) => <Input placeholder="ООО Рога и копыта" {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <Title level={5}>Полное название</Title>
                                <Controller
                                    name={`legals.${index}.fullName`}
                                    control={control}
                                    render={({field}) => <Input placeholder="ООО Рога и копыта" {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <Title level={5}>Короткое название</Title>
                                <Controller
                                    name={`legals.${index}.shortName`}
                                    control={control}
                                    render={({field}) => <Input placeholder="Рога и копыта" {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <Title level={5}>ОГРН</Title>
                                <Controller
                                    name={`legals.${index}.ogrn`}
                                    control={control}
                                    render={({field}) => <Input placeholder="" {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <Title level={5}>ИНН</Title>
                                <Controller
                                    name={`legals.${index}.inn`}
                                    control={control}
                                    render={({field}) => <Input placeholder="" {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <Title level={5}>Юридический адрес</Title>
                                <Controller
                                    name={`legals.${index}.legalAdress`}
                                    control={control}
                                    render={({field}) => <Input placeholder="" {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <Title level={5}>Почтовый адрес</Title>
                                <Controller
                                    name={`legals.${index}.postAdress`}
                                    control={control}
                                    render={({field}) => <Input placeholder="" {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={24}>
                            <BankDetails nestIndex={index} {...{ control }} />
                        </Col>
                        <Col span={24}>
                            <Flex align={"center"} gap={8}>
                                <Title style={{margin: 0}} level={5}>Включен</Title>
                                <Controller
                                    name={`legals.${index}.status`}
                                    control={control}
                                    render={({field}) => <Checkbox defaultChecked={true} {...field} />}
                                />
                            </Flex>
                        </Col>
                    </Row>
                </Card>
            ))}
            <Button type={"primary"} htmlType={"submit"}>Далее</Button>
        </Flex>
    )
}