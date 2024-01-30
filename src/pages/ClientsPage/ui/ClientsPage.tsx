import { Button, Space, Table, TableProps, Tag } from "antd";
import { useGetClientsQuery } from "shared/api/api";
import { ClientsColumns } from "entities/Clients/model/service/getClientsList";
import { Link } from "react-router-dom";
import { AddClient } from "entities/Clients/ui/AddClient/AddClient";
import { useState } from "react";

export const ClientsPage = () => {
    const {data, error, isLoading} = useGetClientsQuery('');
    const [modalState, setModalState] = useState(false);

    return (
        <>
            <Button onClick={() => setModalState(true)} style={{marginBottom: "16px"}} type="primary">
                    Добавить пользователя
            </Button>
            <Table columns={ClientsColumns} dataSource={data?._embedded?.clients} />
            <AddClient isOpen={modalState} />
        </>
    )
}