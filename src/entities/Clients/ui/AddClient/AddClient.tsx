import {useState} from "react";
import {ClientBasicInfo} from "entities/Clients/ui/AddClient/AddClientSteps/ClientBasicInfo";
import {ProjectsOfClient} from "entities/Clients/ui/AddClient/AddClientSteps/ProjectsOfClient";
import Card from "antd/es/card";
import {Steps} from "antd";

export const AddClient = () => {
    const [current, setCurrent] = useState(0);
    const steps = [
        {
            title: 'Общая информация',
            content: <ClientBasicInfo setCurrent={setCurrent}/>,
        },
        {
            title: 'Проекты',
            content: <ProjectsOfClient/>,
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