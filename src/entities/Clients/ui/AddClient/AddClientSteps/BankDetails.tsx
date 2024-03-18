import {Button, Card, Col, Row, Space} from "antd";
import Title from "antd/es/typography/Title";
import {Control, Controller, useFieldArray} from "react-hook-form";
import Input from "antd/es/input";
import {LegalsData} from "entities/Clients/model/types/ClientSchema";
import {FC} from "react";
import cls from '../AddClient.module.scss'
import {PlusOutlined} from "@ant-design/icons";


type FormValues = {
    legals: LegalsData[];
};

type BankDetailsProps = {
    control: Control<FormValues>
    index: number
}
export const BankDetails: FC<BankDetailsProps> = ({index, control}) => {
    const {fields: fieldsBankDetails, append: appendBankDetails} = useFieldArray({
        control,
        name: `legals.${index}.banksDetails`
    });
    return (
        <div className={cls.wrapper}>
            <Title level={3}>Банковские реквизиты</Title>
            {fieldsBankDetails.map((item, index) => (
                <Card key={item.id} className={cls.card}>
                    <Row gutter={[16, 16]}>
                        <Col span={8}>
                            <div>
                                <Title level={5}>Название банка</Title>
                                <Controller
                                    name={`legals.${index}.banksDetails.${index}.bankName`}
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
                                    name={`legals.${index}.banksDetails.${index}.checkingAccount`}
                                    control={control}
                                    rules={{required: true}}
                                    render={({field}) => <Input {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <Title level={5}>Корресподентский счет</Title>
                                <Controller
                                    name={`legals.${index}.banksDetails.${index}.correspondentAccount`}
                                    control={control}
                                    rules={{required: true}}
                                    render={({field}) => <Input {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <Title level={5}>ИНН банка</Title>
                                <Controller
                                    name={`legals.${index}.banksDetails.${index}.bankInn`}
                                    control={control}
                                    rules={{required: true}}
                                    render={({field}) => <Input {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <Title level={5}>Адрес банка</Title>
                                <Controller
                                    name={`legals.${index}.banksDetails.${index}.bankAdress`}
                                    control={control}
                                    rules={{required: true}}
                                    render={({field}) => <Input {...field} />}
                                />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div>
                                <Title level={5}>Описание</Title>
                                <Controller
                                    name={`legals.${index}.banksDetails.${index}.bankDescription`}
                                    control={control}
                                    rules={{required: true}}
                                    render={({field}) => <Input {...field} />}
                                />
                            </div>
                        </Col>
                    </Row>
                </Card>
            ))}
            <Button
                icon={
                    <PlusOutlined/>
                }
                onClick={() => {
                    appendBankDetails({
                        bankName: '',
                        checkingAccount: '',
                        correspondentAccount: '',
                        bankInn: '',
                        bankAdress: '',
                        bankDescription: '',
                    });
                }}
                type={"link"}
                className={cls.addButton}
            >
                Добавить реквизиты
            </Button>
        </div>
    )
}
