import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';
import {Card} from "antd";

export const LegalCharts = () => {
    const data = [
        {name: 'Январь', value: 35},
        {name: 'Февраль', value: 41},
        {name: 'Март', value: 33},
        {name: 'Апрель', value: 33},
        {name: 'Май', value: 38},
        {name: 'Июнь', value: 50},
        {name: 'Июль', value: 55},
    ];
    return (
        <Card>
            <LineChart width={500} height={300} data={data}>
                <Line type="monotone" dataKey="value" name="Заказы" stroke="#8884d8"/>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <Tooltip/>
                <XAxis dataKey="name"/>
                <YAxis/>
            </LineChart>
        </Card>
    )
}