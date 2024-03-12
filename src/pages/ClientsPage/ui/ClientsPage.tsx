import {Button, Space, Table, TableProps, Tag} from "antd";
import {useGetClientsQuery} from "shared/api/api";
import {ClientsColumns} from "entities/Clients/model/service/getClientsList";
import {Link} from "react-router-dom";

export const ClientsPage = () => {
    const {data, error, isLoading} = useGetClientsQuery('');
    return (
        <Space direction={"vertical"} size={16}  style={{
            display: 'flex',
        }}>
            <Link to={'/clients/add'} style={{marginBottom: "16px"}}>
                <Button type="primary">
                    Добавить пользователя
                </Button>
            </Link>
            <Table columns={ClientsColumns} dataSource={data?._embedded?.clients}/>
        </Space>
    )
}