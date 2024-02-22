import { useForm } from "react-hook-form";
import { Modal, Steps } from "antd";
import { useState } from "react";
import { ClientBasicInfo } from "entities/Clients/ui/AddClient/AddClientSteps/BasicInfo/ClientBasicInfo";
import { ProjectsInfo } from "entities/Clients/ui/AddClient/AddClientSteps/ProjectsInfo/ProjectsInfo";

interface AddClientProps  {
    isOpen: boolean
    setIsOpen: Function
}

export const AddClient = ({isOpen, setIsOpen}: AddClientProps) => {
    const [current, setCurrent] = useState(0);
    const steps = [
        {
            title: 'Общая информация',
            content: <ClientBasicInfo current={current} setCurrent={setCurrent} />,
        },
        {
            title: 'Проекты',
            content: <ProjectsInfo current={current} setCurrent={setCurrent} />,
        },
        {
            title: 'Юр. Лица',
            content: 'Last-content',
        },
    ];
    const handleCancel = () => {
        setIsOpen(false);
    };

    const items = steps.map((item) => ({key: item.title, title: item.title}));
    return (
        <Modal footer={null}
               title={"Новый клиент"}
               width={1000}
               open={isOpen}
               closable={true}
               onCancel={handleCancel}>
            <Steps current={current} items={items} />
            <div style={{padding: '24px 0'}}>{steps[current].content}</div>
        </Modal>
    )
}