import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import { Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import Input from "antd/es/input";

export const BankDetails = ({ nestIndex, control}: any) => {

    const {fields} = useFieldArray({
        control,
        name: `legals[${nestIndex}].banksDetails`,
    });

    return (
        <Card>
            <Title level={4}>Банковские реквизиты</Title>
            {fields.map((item, index) => (
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <div>
                            <Title level={5}>Название банка</Title>
                            <Controller
                                // name={`legals[${nestIndex}].banksDetails[${index}].bankName`}
                                name={`banksDetails.${index}.bankName`}
                                control={control}
                                render={({field}) => <Input placeholder="Тинькофф" {...field} />}
                            />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <Title level={5}>Расчетный счет</Title>
                            <Controller
                                name={`banksDetails.${index}.checkingAccount`}
                                control={control}
                                render={({field}) => <Input placeholder="" {...field} />}
                            />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <Title level={5}>Корреспондентский счет</Title>
                            <Controller
                                name={`banksDetails.${index}.correspondentAccount`}
                                control={control}
                                render={({field}) => <Input placeholder="" {...field} />}
                            />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <Title level={5}>ИНН Банка</Title>
                            <Controller
                                name={`banksDetails.${index}.bankInn`}
                                control={control}
                                render={({field}) => <Input placeholder="" {...field} />}
                            />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <Title level={5}>Адрес банка</Title>
                            <Controller
                                name={`banksDetails.${index}.bankAdress`}
                                control={control}
                                render={({field}) => <Input placeholder="" {...field} />}
                            />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <Title level={5}>Адрес банка</Title>
                            <Controller
                                name={`banksDetails.${index}.bankDescription`}
                                control={control}
                                render={({field}) => <Input placeholder="" {...field} />}
                            />
                        </div>
                    </Col>
                </Row>
            ))}
        </Card>
    )
}