import {useForm} from "react-hook-form";
import {Button, Modal, Space, Steps} from "antd";
import {useState} from "react";
import {ClientBasicInfo} from "entities/Clients/ui/AddClient/AddClientSteps/ClientBasicInfo";
import {ProjectsOfClient} from "entities/Clients/ui/AddClient/AddClientSteps/ProjectsOfClient";
import Card from "antd/es/card";

export const CreateClientPage = ({isOpen}: any) => {
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
            content: <ProjectsOfClient/>,
        },
        {
            title: 'Юр. Лица',
            content: 'Last-content',
        },
    ];

    const items = steps.map((item) => ({key: item.title, title: item.title}));
    return (
        <Card>
            <Steps current={current} items={items}/>
            <div style={{padding: '24px 0'}}>{steps[current].content}</div>
        </Card>
    )
}