import {Card, Col, Row, Typography} from "antd";


export const Profile = () => {
    return (
        <form>
            <Row>
                <Col span={8}>
                <Card>
                    <Typography.Title level={3}>Тимур Щербаков</Typography.Title>
                    <Typography.Text>ihave800mmr@yandex.ru</Typography.Text>
                    <Typography.Text>ИНН: 2623024331</Typography.Text>
                    <Typography.Text>КПП: 263501001</Typography.Text>
                    <Typography.Text>ОГРН: 1092645001019</Typography.Text>
                    <Typography.Text>Фактический адрес: 355035, Ставропольский Край, г. Ставрополь, пр-кт Кулакова, д. 18</Typography.Text>
                    <Typography.Text>Договоров завершено: 13</Typography.Text>
                    <Typography.Text>Сумма договоров: 10000</Typography.Text>
                </Card>
                </Col>
            </Row>
        </form>
    )
}