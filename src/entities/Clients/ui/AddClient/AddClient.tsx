import { useForm } from "react-hook-form";
import { Button, Modal, Space, Steps } from "antd";
import { useState } from "react";
import { ClientBasicInfo } from "entities/Clients/ui/AddClient/AddClientSteps/ClientBasicInfo";
import cls from "features/AuthByUsername/ui/LoginForm.module.scss";
import { ProjectsOfClient } from "entities/Clients/ui/AddClient/AddClientSteps/ProjectsOfClient";

export const AddClient = ({isOpen}: any) => {
    const {control, handleSubmit} = useForm({})
    const [modalVisible, setModalVisible] = useState(false);
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    }
    const steps = [
        {
            title: 'Общая информация',
            content: <ClientBasicInfo current={current} setCurrent={setCurrent}/>,
        },
        {
            title: 'Проекты',
            content: <ProjectsOfClient />,
        },
        {
            title: 'Юр. Лица',
            content: 'Last-content',
        },
    ];

    const items = steps.map((item) => ({key: item.title, title: item.title}));
    return (
        <Modal footer={null} title={"Новый клиент"} width={1000} open={isOpen}>
            <Steps current={current} items={items} />
            <div style={{padding: '24px 0'}}>{steps[current].content}</div>
        </Modal>
    )
}