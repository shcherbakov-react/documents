import Input from "antd/es/input";
import { SubmitHandler, Controller, useForm } from "react-hook-form";
import { Alert, Button, Col, Row, Space } from "antd";
import Title from "antd/es/typography/Title";
import Card from "antd/es/card";
import cls from './LoginForm.module.scss'
import axios from "axios";
import { $apiAxios } from "shared/api/apiAxios";
import { useState } from "react";

export const LoginForm = () => {
    interface IFormInput {
        username: string
        password: string
    }

    const {control, handleSubmit, formState: {errors}} = useForm({})
    const [isErrorAuth, setIsErrorAuth] = useState(false);
    const closeAlert = () => {
        setIsErrorAuth(false)
    }
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        $apiAxios.get('/auth', {
            auth: {
                username: data.username,
                password: data.password
            }
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                setIsErrorAuth(true)
            })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row className={cls.row} justify={"center"} align={"middle"}>
                <Col span={6}>
                    <Card>
                        <Space style={{width: '100%'}} direction="vertical" size={"small"}>
                            {isErrorAuth && <Alert onClose={closeAlert} type={"error"} closable message={"Ошибка авторизации"}/>}
                            <div>
                                <Title level={5}>Логин</Title>
                                <Controller
                                    name="username"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({field}) => <Input {...field} />}
                                />
                                <div className="loginError" style={{ height: 12 }}>
                                    {errors?.username && (
                                        <p> {errors?.username?.message || 'Поле некорректно'}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <Title level={5}>Пароль</Title>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({field}) => <Input  {...field} />}
                                />
                                <div className="loginError" style={{height: 20}}>
                                    {errors?.username && (
                                        <p> {errors?.username?.message || 'Поле некорректно'}</p>
                                    )}
                                </div>
                            </div>
                            <Button htmlType="submit" type={"primary"}>Войти</Button>
                        </Space>
                    </Card>
                </Col>
            </Row>

        </form>
    )
}