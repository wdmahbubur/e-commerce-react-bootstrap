import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form, Tooltip } from 'react-bootstrap';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import './Chart.css'
const LineChartCom = () => {
    const data = [
        {
            "name": "01 Oct",
            "Sales": 4000,
            "Order": 2400,
            "amt": 10000
        },
        {
            "name": "05 Oct",
            "Sales": 3000,
            "Order": 1398,
            "amt": 8000
        },
        {
            "name": "10 Oct",
            "Sales": 2000,
            "Order": 9800,
            "amt": 6000
        },
        {
            "name": "15 Oct",
            "Sales": 2780,
            "Order": 3908,
            "amt": 4000
        },
        {
            "name": "20 Oct",
            "Sales": 1890,
            "Order": 4800,
            "amt": 2000
        },
        {
            "name": "25 Oct",
            "Sales": 2390,
            "Order": 3800,
            "amt": 14000
        },
        {
            "name": "30 Oct",
            "Sales": 3490,
            "Order": 4300,
            "amt": 12000
        }
    ]
    return (
        <div className="card chart-card p-3">
            <div className="d-flex justify-content-between mt-3 mb-4">
                <h3 className="fw-medium">
                    <FontAwesomeIcon icon={faShoppingBag} style={{ color: "var(--primary-color)" }}></FontAwesomeIcon>
                    <span> $10.352,12</span>
                </h3>
                <Form.Select className="w-25">
                    <option>October</option>
                    <option value="1">November</option>
                    <option value="2">December</option>
                    <option value="3">January</option>
                </Form.Select>
            </div>
            <LineChart width={550} height={350} data={data}
                margin={{ top: 5, right: 30, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey="amt" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Order" stroke="#8884d8" />
                <Line type="monotone" dataKey="Sales" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default LineChartCom;