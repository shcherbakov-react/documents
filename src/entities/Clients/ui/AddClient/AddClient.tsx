import { useForm } from "react-hook-form";
import { Button, Modal, Steps } from "antd";
import { useState } from "react";
import { ClientBasicInfo } from "entities/Clients/ui/AddClient/AddClientSteps/ClientBasicInfo";

export const AddClient = ({isOpen}: any) => {
    const {control, handleSubmit} = useForm({})
    const [current, setCurrent] = useState(0);
    const steps = [
        {
            title: 'Общая информация',
            content: <ClientBasicInfo />,
        },
        {
            title: 'Проекты',
            content: 'Second-content',
        },
        {
            title: 'Юр. Лица',
            content: 'Last-content',
        },
    ];
    const next = () => {
        setCurrent(current + 1);
    };
    const items = steps.map((item) => ({key: item.title, title: item.title}));
    return (
        <Modal footer={null} title={"Новый клиент"} width={1000} open={isOpen}>
            <form>
                <Steps current={current} items={items} />
                <div>{steps[current].content}</div>
                {current < steps.length - 1 && (
                    <Button htmlType={"submit"} type="primary" onClick={() => next()}>
                        Далее
                    </Button>
                )}
            </form>
        </Modal>
    )
}