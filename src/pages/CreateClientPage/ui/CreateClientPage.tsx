import {AddClient} from "entities/Clients/ui/AddClient";

export const CreateClientPage = ({isOpen}: any) => {
<<<<<<< HEAD
=======
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
>>>>>>> 9b80a966d06ffc3bd99007006ac55141d567c81b
    return (
        <AddClient/>
    )
}