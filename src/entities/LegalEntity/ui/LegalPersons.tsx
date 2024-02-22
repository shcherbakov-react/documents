import cls from './LegalPersons.module.scss'
import classNames from "classnames";
import Card from "antd/es/card";
import { EditOutlined } from "@ant-design/icons";
import { Row } from "antd";

interface LegalPersonsProps {
    id: string
}
export const LegalPersons = ({id}: LegalPersonsProps) => {

    return (
        <Row>
            <div className={cls.legal}>
                <div className={classNames(cls.LegalPerson, {}, [])}>
                    <Card title="ООО «Сушитайм»" extra={
                        <EditOutlined style={{fontSize: '20px'}} />
                    }>

                        <div>ИНН: 2623024331</div>
                        <div>КПП: 263501001</div>
                        <div>ОГРН: 1092645001019</div>
                        <div>
                            Фактический адрес: 355035, Ставропольский Край, г.
                            Ставрополь, пр-кт Кулакова, д. 18
                        </div>
                    </Card>
                </div>
            </div>
        </Row>
    )
}