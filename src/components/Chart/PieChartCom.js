import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Cell, Pie, PieChart } from 'recharts';

const PieChartCom = () => {
    const data = [
        { name: 'Google', value: 400 },
        { name: 'Social Media', value: 350 },
        { name: 'Email', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="card chart-card p-3">
            <PieChart width={300} height={300} className="mx-auto">
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>
            <Row className="text-center my-4">
                <Col>
                    <h3>42%</h3>
                    <small style={{ color: "#0088FE" }}>Google</small>
                </Col>
                <Col>
                    <h3>37%</h3>
                    <small style={{ color: "#00C49F" }}>Social Media</small>
                </Col>
                <Col>
                    <h3>21%</h3>
                    <small style={{ color: "#FFBB28" }}>Email</small>
                </Col>
            </Row>

            <Button variant="outline-danger" className="mx-auto"><FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Download Report</Button>
        </div>
    );
};

export default PieChartCom;